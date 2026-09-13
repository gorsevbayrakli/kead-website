import { useState } from "react";
import { getBook } from "@/data/books";
import { Stars } from "./Stars";
import { Meter } from "./Meter";
import { VerdictBadge } from "./VerdictBadge";
import { BookCover } from "./BookCover";

const tabs = ["Genel bakış", "Ebeveyn yorumları"] as const;

export function ReviewShowcase() {
  const [tab, setTab] = useState<(typeof tabs)[number]>("Genel bakış");
  const book = getBook("ben-kizmadim-ki")!;

  return (
    <div className="rounded-3xl bg-white p-5 text-mure" style={{ boxShadow: "var(--shadow-lift)" }}>
      <div className="flex gap-4">
        <BookCover book={book} className="w-24 shrink-0" />
        <div className="min-w-0">
          <h3 className="truncate text-lg font-bold text-petrol">{book.title}</h3>
          <p className="text-sm text-muted-foreground">
            {book.author} · {book.publisher}
          </p>
          <div className="mt-2 flex items-center gap-2">
            <Stars value={4.7} />
            <span className="text-sm font-bold text-petrol">4.7</span>
          </div>
          <span className="mt-2 inline-block rounded-full bg-sari-soft px-2.5 py-1 text-xs font-semibold">
            {book.ageBand} yaş
          </span>
        </div>
      </div>

      <div role="tablist" aria-label="Değerlendirme sekmeleri" className="mt-5 flex gap-2">
        {tabs.map((t) => (
          <button
            key={t}
            role="tab"
            id={`tab-${t}`}
            aria-selected={tab === t}
            aria-controls={`panel-${t}`}
            onClick={() => setTab(t)}
            className={`rounded-full px-3 py-2 text-xs font-semibold transition-colors duration-150 sm:text-sm ${
              tab === t ? "bg-petrol text-white" : "border-[1.5px] border-petrol/30 text-petrol"
            }`}
          >
            {t}
          </button>
        ))}
      </div>

      <div
        role="tabpanel"
        id={`panel-${tab}`}
        aria-labelledby={`tab-${tab}`}
        className="kead-in mt-4 min-h-[13rem] text-sm leading-relaxed"
        key={tab}
      >
        {tab === "Genel bakış" && (
          <div className="space-y-4">
            <p>{book.summary}</p>
            <Meter label="Görsellik" value={book.meters.visual} />
            <Meter label="Pozitif mesaj" value={book.meters.positiveMessage} />
            <Meter label="Öğretici içerik" value={book.meters.educational} />
          </div>
        )}

        {tab === "Ebeveyn yorumları" && (
          <ul className="space-y-3">
            {book.comments.map((c) => (
              <li key={c.author} className="rounded-2xl bg-sis p-4">
                <div className="flex items-center justify-between gap-2">
                  <span className="font-bold text-petrol">{c.author}</span>
                  <span className="text-xs text-muted-foreground">{c.date}</span>
                </div>
                <div className="mt-1">
                  <Stars value={c.stars} size={13} />
                </div>
                <p className="mt-2">{c.text}</p>
              </li>
            ))}
          </ul>
        )}
      </div>

      <div className="mt-5">
        <VerdictBadge verdict={book.verdict} full />
      </div>
    </div>
  );
}
