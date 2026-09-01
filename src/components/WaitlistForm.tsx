import { useState, type FormEvent } from "react";
import { CheckCircle2 } from "lucide-react";

export function WaitlistForm({ tone = "yellow", id }: { tone?: "yellow" | "white"; id?: string }) {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [done, setDone] = useState(false);
  const inputId = id ?? "waitlist-email";

  function submit(e: FormEvent) {
    e.preventDefault();
    const ok = /^[^\s@]+@[^\s@]+\.[a-zA-Z]{2,}$/.test(email.trim());
    if (!ok) {
      setError("Geçerli bir e-posta adresi girin.");
      return;
    }
    setError("");
    // TODO: Supabase waitlist tablosuna bağla
    setDone(true);
  }

  if (done) {
    return (
      <div className="flex items-start gap-3 rounded-2xl bg-white/85 p-4 text-petrol">
        <CheckCircle2 className="mt-0.5 shrink-0" size={20} aria-hidden="true" />
        <p className="text-base font-semibold" role="status">
          Listedesiniz. Uygulama yayına girdiğinde ilk siz haberdar olacaksınız.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={submit} noValidate className="w-full">
      <div className="flex flex-col gap-2.5 sm:flex-row">
        <label htmlFor={inputId} className="sr-only">
          E-posta adresiniz
        </label>
        <input
          id={inputId}
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="E-posta adresiniz"
          aria-invalid={!!error}
          aria-describedby={error ? `${inputId}-error` : undefined}
          className={`min-w-0 flex-1 rounded-full border-[1.5px] bg-white px-5 py-3.5 text-base text-mure placeholder:text-muted-foreground focus:outline-none ${
            error ? "border-petrol" : "border-transparent"
          } ${tone === "white" ? "border-border" : ""}`}
        />
        <button
          type="submit"
          className={`shrink-0 rounded-full px-6 py-3.5 text-base font-bold transition-transform duration-150 hover:-translate-y-0.5 ${
            tone === "yellow" ? "bg-petrol text-white" : "bg-sari text-petrol"
          }`}
        >
          Erken erişime katıl
        </button>
      </div>
      {error && (
        <p id={`${inputId}-error`} className="mt-2 text-sm font-semibold text-petrol">
          {error}
        </p>
      )}
    </form>
  );
}
