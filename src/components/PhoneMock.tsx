import { Bell, Search, Star } from "lucide-react";
import { LogoMark } from "./Logo";

const chips = ["Sana özel", "Popüler", "Yeniler"];

function MiniBook({ tone, letter, title }: { tone: string; letter: string; title: string }) {
  return (
    <div className="flex-1">
      <div className={`relative flex aspect-[3/4] items-end rounded-2xl p-2.5 ${tone}`}>
        <span className="absolute top-2 left-2.5 text-2xl leading-none font-bold text-petrol">
          {letter}
        </span>
        <span className="inline-flex items-center gap-1 rounded-full bg-white px-1.5 py-0.5 text-[10px] font-bold text-petrol">
          <Star size={9} className="fill-sari text-sari" aria-hidden="true" /> 4.6
        </span>
      </div>
      <p className="mt-1.5 text-[11px] leading-tight font-semibold text-petrol">{title}</p>
    </div>
  );
}

export function PhoneMock() {
  return (
    <div
      className="mx-auto w-[260px] max-w-full rounded-[2.25rem] border-[6px] border-mure/15 bg-white p-1 sm:w-[290px]"
      style={{ boxShadow: "var(--shadow-lift)" }}
      aria-hidden="true"
    >
      <div className="overflow-hidden rounded-[1.9rem] bg-sis">
        <div className="bg-sari px-4 pt-4 pb-6">
          <div className="flex items-center justify-between text-petrol">
            <LogoMark className="h-6 w-6" />
            <div className="flex items-center gap-2">
              <Search size={16} />
              <Bell size={16} />
            </div>
          </div>
          <p className="mt-4 text-xl font-bold text-petrol">Keşfet</p>
        </div>

        <div className="-mt-3 rounded-t-3xl bg-white px-3 pt-3 pb-4">
          <div className="flex gap-1.5 overflow-hidden">
            {chips.map((c, i) => (
              <span
                key={c}
                className={`shrink-0 rounded-full px-2.5 py-1 text-[10px] font-semibold ${
                  i === 0 ? "bg-petrol text-white" : "border border-petrol/30 text-petrol"
                }`}
              >
                {c}
              </span>
            ))}
          </div>

          <div className="mt-3 flex gap-2.5">
            <MiniBook tone="bg-nane" letter="K" title="Kayıp Anahtar" />
            <MiniBook tone="bg-pembe" letter="B" title="Ben Kızmadım ki" />
          </div>

          <div className="mt-3 rounded-2xl bg-sis p-3">
            <p className="text-[10px] font-semibold text-muted-foreground">Haftanın konusu</p>
            <p className="mt-1 text-xs leading-snug font-bold text-petrol">
              Çocuklarda itiraz: hayır demeyi öğrenen çocuk
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
