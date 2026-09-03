import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { Wordmark } from "./Logo";

const links = [
  { to: "/nasil-degerlendiriyoruz", label: "Nasıl Değerlendiriyoruz" },
  { to: "/yas-bantlari", label: "Yaş Bantları" },
  { to: "/kirmizi-bayraklar", label: "Kırmızı Bayraklar" },
  { to: "/", hash: "katil" as const, label: "Erken Erişim" },
] as const;

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <header
      className={`sticky top-0 z-50 bg-white transition-shadow duration-200 ${scrolled ? "shadow-[0_2px_12px_rgba(1,61,74,.07)]" : ""}`}
    >
      <nav
        aria-label="Ana menü"
        className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 sm:px-6"
      >
        <Link to="/" aria-label="Kead ana sayfa" className="shrink-0">
          <Wordmark />
        </Link>

        <ul className="hidden items-center gap-7 lg:flex">
          {links.map((l) => (
            <li key={l.to}>
              <Link
                to={l.to}
                className="text-[0.95rem] font-semibold text-mure/85 hover:text-petrol"
                activeProps={{ className: "text-petrol" }}
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <Link
            to="/"
            hash="katil"
            className="hidden rounded-full bg-sari px-5 py-2.5 text-sm font-bold text-petrol transition-transform duration-150 hover:-translate-y-0.5 sm:inline-block"
          >
            Erken erişime katıl
          </Link>
          <button
            type="button"
            onClick={() => setOpen(true)}
            aria-label="Menüyü aç"
            aria-expanded={open}
            aria-controls="mobil-menu"
            className="rounded-full p-2 text-petrol lg:hidden"
          >
            <Menu aria-hidden="true" />
          </button>
        </div>
      </nav>

      {open && (
        <div id="mobil-menu" className="fixed inset-0 z-50 flex flex-col bg-white lg:hidden">
          <div className="flex h-16 items-center justify-between px-4">
            <Wordmark />
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Menüyü kapat"
              className="rounded-full p-2 text-petrol"
            >
              <X aria-hidden="true" />
            </button>
          </div>
          <ul className="flex flex-col gap-1 px-4 pt-4">
            {links.map((l) => (
              <li key={l.to}>
                <Link
                  to={l.to}
                  onClick={() => setOpen(false)}
                  className="block rounded-2xl px-3 py-4 text-2xl font-bold text-petrol"
                >
                  {l.label}
                </Link>
              </li>
            ))}
            <li>
              <Link
                to="/sss"
                onClick={() => setOpen(false)}
                className="block rounded-2xl px-3 py-4 text-2xl font-bold text-petrol"
              >
                Sık sorulanlar
              </Link>
            </li>
            <li>
              <Link
                to="/iletisim"
                onClick={() => setOpen(false)}
                className="block rounded-2xl px-3 py-4 text-2xl font-bold text-petrol"
              >
                İletişim
              </Link>
            </li>
          </ul>
          <div className="mt-auto p-4">
            <Link
              to="/"
              hash="katil"
              onClick={() => setOpen(false)}
              className="block rounded-full bg-sari px-6 py-4 text-center text-base font-bold text-petrol"
            >
              Erken erişime katıl
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
