import { Link } from "@tanstack/react-router";
import { Instagram, Linkedin, Twitter } from "lucide-react";
import { Wordmark } from "./Logo";

const cols = [
  {
    title: "Ürün",
    items: [
      { to: "/nasil-calisir", label: "Nasıl çalışır" },
      { to: "/kitaplar", label: "Kitaplar" },
      { to: "/konular", label: "Konular" },
    ],
  },
  {
    title: "Kurumsal",
    items: [
      { to: "/hakkimizda", label: "Hakkımızda" },
      { to: "/iletisim", label: "İletişim" },
      { to: "/sss", label: "SSS" },
    ],
  },
  {
    title: "Yasal",
    items: [
      { to: "/gizlilik", label: "Gizlilik politikası" },
      { to: "/kvkk", label: "KVKK aydınlatma metni" },
      { to: "/kullanim-kosullari", label: "Kullanım koşulları" },
    ],
  },
] as const;

export function Footer() {
  return (
    <footer className="on-dark bg-petrol text-white/85">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <Wordmark tone="sari" />
            <p className="mt-4 max-w-xs text-sm leading-relaxed">
              Çocuk kitaplarını yaşa uygunluk, eğitici değer ve duygusal güvenlik açısından
              değerlendiren ebeveyn uygulaması.
            </p>
          </div>
          {cols.map((col) => (
            <div key={col.title}>
              <h2 className="text-sm font-bold text-sari">{col.title}</h2>
              <ul className="mt-4 space-y-2.5">
                {col.items.map((i) => (
                  <li key={i.to}>
                    <Link to={i.to} className="text-sm hover:text-sari">
                      {i.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-white/15 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs">© {new Date().getFullYear()} Kead. Tüm hakları saklıdır.</p>
          <div className="flex items-center gap-3">
            <a href="#" aria-label="Instagram" className="rounded-full p-2 hover:text-sari">
              <Instagram size={18} aria-hidden="true" />
            </a>
            <a href="#" aria-label="X" className="rounded-full p-2 hover:text-sari">
              <Twitter size={18} aria-hidden="true" />
            </a>
            <a href="#" aria-label="LinkedIn" className="rounded-full p-2 hover:text-sari">
              <Linkedin size={18} aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
