import { createFileRoute, redirect } from "@tanstack/react-router";
import { useState } from "react";
import { supabase } from "@/integrations/supabase/client";

type OAuthDetails = {
  client?: { name?: string; client_id?: string; redirect_uri?: string } | undefined;
  scope?: string | undefined;
  redirect_url?: string | undefined;
  redirect_to?: string | undefined;
};

type OAuthApi = {
  getAuthorizationDetails: (id: string) => Promise<{ data: OAuthDetails | null; error: Error | null }>;
  approveAuthorization: (id: string) => Promise<{ data: OAuthDetails | null; error: Error | null }>;
  denyAuthorization: (id: string) => Promise<{ data: OAuthDetails | null; error: Error | null }>;
};

const oauth = () => (supabase.auth as unknown as { oauth: OAuthApi }).oauth;

const scopeLabels: Record<string, string> = {
  openid: "Kimliğinizi doğrulama",
  email: "E-posta adresinizi paylaşma",
  profile: "Temel profil bilgilerinizi paylaşma",
};

export const Route = createFileRoute("/.lovable/oauth/consent")({
  ssr: false,
  validateSearch: (s: Record<string, unknown>) => ({
    authorization_id: typeof s.authorization_id === "string" ? s.authorization_id : "",
  }),
  beforeLoad: async ({ search, location }) => {
    if (!search.authorization_id) throw new Error("authorization_id eksik");
    const { data } = await supabase.auth.getSession();
    if (!data.session) {
      throw redirect({ to: "/giris", search: { next: location.pathname + location.searchStr } });
    }
  },
  loader: async ({ location }) => {
    const id = new URLSearchParams(location.search).get("authorization_id")!;
    const { data, error } = await oauth().getAuthorizationDetails(id);
    if (error) throw error;
    const immediate = data?.redirect_url ?? data?.redirect_to;
    if (immediate && !data?.client) throw redirect({ href: immediate });
    const { data: userData } = await supabase.auth.getUser();
    return { details: data, email: userData.user?.email ?? null };
  },
  errorComponent: ({ error }) => (
    <main className="mx-auto max-w-md px-4 py-16">
      <h1 className="text-2xl">Bu yetkilendirme isteği yüklenemedi</h1>
      <p className="mt-3 text-base text-mure/80">{String((error as Error)?.message ?? error)}</p>
    </main>
  ),
  component: Consent,
});

function Consent() {
  const { details, email } = Route.useLoaderData();
  const { authorization_id } = Route.useSearch();
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const clientName = details?.client?.name ?? "Bir uygulama";
  const scopes = (details?.scope ?? "").split(/[\s,]+/).filter(Boolean);

  async function decide(approve: boolean) {
    setBusy(true);
    setError(null);
    const { data, error } = approve
      ? await oauth().approveAuthorization(authorization_id)
      : await oauth().denyAuthorization(authorization_id);
    if (error) {
      setBusy(false);
      setError(error.message);
      return;
    }
    const target = data?.redirect_url ?? data?.redirect_to;
    if (!target) {
      setBusy(false);
      setError("Yönlendirme adresi alınamadı.");
      return;
    }
    window.location.href = target;
  }

  return (
    <main className="mx-auto max-w-md px-4 py-16">
      <h1 className="text-2xl">{clientName} uygulamasını Kead hesabınıza bağlayın</h1>
      <p className="mt-3 text-base text-mure/80">
        Bu izin, {clientName} uygulamasının Kead araçlarını siz giriş yaptığınız sürece sizin adınıza
        kullanmasını sağlar.
      </p>

      <div className="mt-6 space-y-3 rounded-2xl bg-sis p-5 text-base text-mure">
        {email && (
          <p>
            <span className="font-semibold">Hesap:</span> {email}
          </p>
        )}
        {details?.client?.redirect_uri && (
          <p className="break-all">
            <span className="font-semibold">Yönlendirme adresi:</span> {details.client.redirect_uri}
          </p>
        )}
        {scopes.length > 0 && (
          <div>
            <p className="font-semibold">İstenen izinler</p>
            <ul className="mt-1 list-disc pl-5">
              {scopes.map((s) => (
                <li key={s}>{scopeLabels[s] ?? `Ek izin: ${s}`}</li>
              ))}
            </ul>
          </div>
        )}
        <p className="text-sm text-muted-foreground">
          Bu izin, Kead'in kendi yetki kurallarını devre dışı bırakmaz.
        </p>
      </div>

      {error && (
        <p role="alert" className="mt-4 text-sm font-semibold text-petrol">
          {error}
        </p>
      )}

      <div className="mt-6 flex flex-col gap-2">
        <button
          disabled={busy}
          onClick={() => decide(true)}
          className="w-full rounded-full bg-petrol px-6 py-3.5 text-base font-bold text-white disabled:opacity-60"
        >
          İzin ver
        </button>
        <button
          disabled={busy}
          onClick={() => decide(false)}
          className="w-full rounded-full border-[1.5px] border-petrol px-6 py-3.5 text-base font-bold text-petrol disabled:opacity-60"
        >
          Bağlantıyı iptal et
        </button>
      </div>
    </main>
  );
}
