import { useState } from "react";
import { books } from "@/data/books";
import { BookCover } from "./BookCover";

const shelves = {
  Ela: ["ben-kizmadim-ki", "orman-arkadaslarim", "sayilar-mutfakta"],
  Ege: ["kayip-anahtar", "gezegenler-defteri", "bisiklet-yazi"],
} as const;

export function KidShelves() {
  const [kid, setKid] = useState<keyof typeof shelves>("Ela");
  const list = shelves[kid].map((s) => books.find((b) => b.slug === s)!);

  return (
    <div className="rounded-3xl bg-sis p-5" style={{ boxShadow: "var(--shadow-soft)" }}>
      <div className="flex gap-2">
        {(Object.keys(shelves) as (keyof typeof shelves)[]).map((k) => (
          <button
            key={k}
            type="button"
            onClick={() => setKid(k)}
            aria-pressed={kid === k}
            className={`rounded-full px-4 py-2 text-sm font-semibold transition-colors duration-150 ${
              kid === k ? "bg-petrol text-white" : "border-[1.5px] border-petrol/30 bg-white text-petrol"
            }`}
          >
            {k} için
          </button>
        ))}
      </div>
      <div className="mt-4 grid grid-cols-3 gap-3" key={kid}>
        {list.map((b) => (
          <div key={b.slug} className="kead-in">
            <BookCover book={b} />
          </div>
        ))}
      </div>
      <p className="mt-3 text-sm text-muted-foreground">
        {kid === "Ela" ? "5 yaş · duygular ve doğa" : "9 yaş · macera ve bilgi kitapları"}
      </p>
    </div>
  );
}
