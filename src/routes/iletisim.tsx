import { useState, type FormEvent } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { CheckCircle2, Mail } from "lucide-react";

export const Route = createFileRoute("/iletisim")({
  head: () => ({
    meta: [
      { title: "İletişim — Kead" },
      {
        name: "description",
        content: "Soru, öneri ve yayınevi başvuruları için Kead ekibine ulaşın.",
      },
      { property: "og:title", content: "İletişim — Kead" },
      { property: "og:description", content: "Kead ekibine ulaşın." },
      { property: "og:url", content: "/iletisim" },
    ],
    links: [{ rel: "canonical", href: "/iletisim" }],
  }),
  component: ContactPage,
});

const subjects = ["Genel soru", "Kitap önerisi", "Yayınevi başvurusu", "Basın", "Diğer"];

function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", subject: subjects[0], message: "" });
  const [errors, setErrors] = useState<{ name?: string; email?: string; message?: string }>({});
  const [sent, setSent] = useState(false);

  function submit(e: FormEvent) {
    e.preventDefault();
    const next: { name?: string; email?: string; message?: string } = {};
    if (form.name.trim().length < 2) next.name = "Adınızı yazın.";
    if (!/^[^\s@]+@[^\s@]+\.[a-zA-Z]{2,}$/.test(form.email.trim()))
      next.email = "Geçerli bir e-posta adresi girin.";
    if (form.message.trim().length < 10) next.message = "Mesajınızı biraz daha açar mısınız?";
    setErrors(next);
    if (Object.keys(next).length) return;
    // TODO: Supabase iletişim tablosuna bağla
    setSent(true);
  }

  const field =
    "mt-1.5 w-full rounded-xl border-[1.5px] border-border bg-white px-4 py-3 text-base focus:outline-none";

  return (
    <div className="mx-auto grid max-w-5xl gap-10 px-4 py-14 sm:px-6 lg:grid-cols-[1.4fr_1fr]">
      <div>
        <h1>İletişim</h1>
        <p className="mt-3 max-w-xl text-base text-mure/85">
          Soru, öneri ya da eleştirinizi yazın. Genellikle iki iş günü içinde dönüş yapıyoruz.
        </p>

        {sent ? (
          <div
            role="status"
            className="mt-8 flex items-start gap-3 rounded-2xl bg-nane p-5 text-petrol"
          >
            <CheckCircle2 className="mt-0.5 shrink-0" aria-hidden="true" />
            <p className="font-semibold">
              Mesajınız bize ulaştı. En kısa sürede size dönüş yapacağız.
            </p>
          </div>
        ) : (
          <form onSubmit={submit} noValidate className="mt-8 space-y-5">
            <div>
              <label htmlFor="ad" className="text-sm font-semibold text-mure">
                Ad
              </label>
              <input
                id="ad"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                aria-invalid={!!errors.name}
                className={field}
              />
              {errors.name && <p className="mt-1 text-sm font-semibold text-petrol">{errors.name}</p>}
            </div>

            <div>
              <label htmlFor="eposta" className="text-sm font-semibold text-mure">
                E-posta
              </label>
              <input
                id="eposta"
                type="email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                aria-invalid={!!errors.email}
                className={field}
              />
              {errors.email && (
                <p className="mt-1 text-sm font-semibold text-petrol">{errors.email}</p>
              )}
            </div>

            <div>
              <label htmlFor="konu" className="text-sm font-semibold text-mure">
                Konu
              </label>
              <select
                id="konu"
                value={form.subject}
                onChange={(e) => setForm({ ...form, subject: e.target.value })}
                className={field}
              >
                {subjects.map((s) => (
                  <option key={s}>{s}</option>
                ))}
              </select>
            </div>

            <div>
              <label htmlFor="mesaj" className="text-sm font-semibold text-mure">
                Mesaj
              </label>
              <textarea
                id="mesaj"
                rows={5}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                aria-invalid={!!errors.message}
                className={field}
              />
              {errors.message && (
                <p className="mt-1 text-sm font-semibold text-petrol">{errors.message}</p>
              )}
            </div>

            <button
              type="submit"
              className="rounded-full bg-sari px-6 py-3.5 text-base font-bold text-petrol transition-transform duration-150 hover:-translate-y-0.5"
            >
              Gönder
            </button>
          </form>
        )}
      </div>

      <aside className="space-y-5">
        <div className="rounded-2xl bg-sis p-6">
          <Mail className="text-petrol" aria-hidden="true" />
          <h2 className="mt-3 text-lg">E-posta</h2>
          <p className="mt-1 text-base font-semibold text-petrol">merhaba@kead.app</p>
        </div>
        <div className="rounded-2xl bg-sari-soft p-6">
          <h2 className="text-lg">Yayıneviyseniz</h2>
          <p className="mt-2 text-sm leading-relaxed text-mure">
            Kataloğunuzu bize iletebilirsiniz. Değerlendirme için yayıneviyle anlaşma yapmıyoruz;
            katalog paylaşımı kitabın puanını veya öneri sırasını etkilemiyor.
          </p>
        </div>
      </aside>
    </div>
  );
}
