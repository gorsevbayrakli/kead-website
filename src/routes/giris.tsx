import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useEffect, useState, type FormEvent } from "react";
import { supabase } from "@/integrations/supabase/client";
import { lovable } from "@/integrations/lovable/index";

function safeNext(value: unknown): string {
  if (typeof value !== "string") return "/";
  if (!value.startsWith("/") || value.startsWith("//")) return "/";
  return value;
}

export const Route = createFileRoute("/giris")({
  ssr: false,
  validateSearch: (s: Record<string, unknown>) => ({ next: safeNext(s.next) }),
  head: () => ({
    meta: [
      { title: "Giriş yap — Kead" },
      {
        name: "description",
        content: "Kead hesabınıza giriş yapın veya yeni bir hesap oluşturun.",
      },
      { property: "og:title", content: "Giriş yap — Kead" },
      { property: "og:description", content: "Kead hesabınıza giriş yapın veya yeni bir hesap oluşturun." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
      { name: "robots", content: "noindex" },
    ],
  }),
  component: SignIn,
});

function SignIn() {
  const { next } = Route.useSearch();
  const navigate = useNavigate();
  const [mode, setMode] = useState<"in" | "up">("in");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [info, setInfo] = useState<string | null>(null);

  useEffect(() => {
    supabase.auth.getSession().then(({ data }) => {
      if (data.session) window.location.replace(next);
    });
  }, [next]);

  async function submit(e: FormEvent) {
    e.preventDefault();
    setBusy(true);
    setError(null);
    setInfo(null);
    if (mode === "in") {
      const { error } = await supabase.auth.signInWithPassword({ email, password });
      setBusy(false);
      if (error) return setError(error.message);
      window.location.replace(next);
      return;
    }
    const { error } = await supabase.auth.signUp({
      email,
      password,
      options: { emailRedirectTo: new URL(next, window.location.origin).toString() },
    });
    setBusy(false);
    if (error) return setError(error.message);
    setInfo("Hesabınız oluşturuldu. E-postanızdaki doğrulama bağlantısına tıklayın.");
  }

  async function google() {
    setError(null);
    const result = await lovable.auth.signInWithOAuth("google", {
      redirect_uri: new URL(next, window.location.origin).toString(),
    });
    if (result.error) return setError("Google ile giriş tamamlanamadı.");
    if (result.redirected) return;
    navigate({ to: next });
  }

  return (
    <div className="mx-auto flex max-w-md flex-col px-4 py-16">
      <h1 className="text-3xl">{mode === "in" ? "Giriş yap" : "Hesap oluştur"}</h1>
      <p className="mt-2 text-base text-mure/80">
        Kead hesabınız, bağlı uygulamaların sizin adınıza içerik okumasına izin vermek için kullanılır.
      </p>

      <form onSubmit={submit} className="mt-8 space-y-3">
        <div>
          <label htmlFor="email" className="text-sm font-semibold text-mure">
            E-posta
          </label>
          <input
            id="email"
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="mt-1 w-full rounded-xl border border-border bg-white px-4 py-3 text-base"
          />
        </div>
        <div>
          <label htmlFor="password" className="text-sm font-semibold text-mure">
            Parola
          </label>
          <input
            id="password"
            type="password"
            required
            minLength={6}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="mt-1 w-full rounded-xl border border-border bg-white px-4 py-3 text-base"
          />
        </div>
        {error && (
          <p role="alert" className="text-sm font-semibold text-petrol">
            {error}
          </p>
        )}
        {info && (
          <p role="status" className="text-sm font-semibold text-petrol">
            {info}
          </p>
        )}
        <button
          type="submit"
          disabled={busy}
          className="w-full rounded-full bg-petrol px-6 py-3.5 text-base font-bold text-white disabled:opacity-60"
        >
          {mode === "in" ? "Giriş yap" : "Hesap oluştur"}
        </button>
      </form>

      <button
        onClick={google}
        className="mt-3 w-full rounded-full border-[1.5px] border-petrol px-6 py-3.5 text-base font-bold text-petrol"
      >
        Google ile devam et
      </button>

      <button
        onClick={() => {
          setMode(mode === "in" ? "up" : "in");
          setError(null);
          setInfo(null);
        }}
        className="mt-6 text-sm font-semibold text-petrol underline underline-offset-4"
      >
        {mode === "in" ? "Hesabınız yok mu? Hesap oluşturun" : "Zaten hesabınız var mı? Giriş yapın"}
      </button>
    </div>
  );
}
