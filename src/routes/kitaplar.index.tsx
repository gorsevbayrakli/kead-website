import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { Search } from "lucide-react";
import { books, ageBands, verdictLabels, type AgeBand, type Verdict } from "@/data/books";
import { BookCard } from "@/components/BookCard";
import { Chip } from "@/components/Chip";

type BookSearch = { yas?: string | undefined; karar?: string | undefined; q?: string | undefined };

export const Route = createFileRoute("/kitaplar/")({
  validateSearch: (s: Record<string, unknown>): BookSearch => ({
    yas: typeof s['yas'] === "string" ? (s['yas'] as string) : undefined,
    karar: typeof s['karar'] === "string" ? (s['karar'] as string) : undefined,
    q: typeof s['q'] === "string" ? (s['q'] as string) : undefined,
  }),
  head: () => ({
    meta: [
      { title: "Kitaplar — Kead değerlendirmeleri" },
      {
        name: "description",
        content:
          "Yaş bandına ve karar tipine göre filtrelenebilen örnek çocuk kitabı kataloğu. Her kitap üç eksende değerlendirilir.",
      },
      { property: "og:title", content: "Kitaplar — Kead değerlendirmeleri" },
      {
        property: "og:description",
        content: "Yaş bandına ve karar tipine göre çocuk kitabı değerlendirmeleri.",
      },
      { property: "og:url", content: "/kitaplar" },
    ],
    links: [{ rel: "canonical", href: "/kitaplar" }],
  }),
  component: BooksPage,
});

export function normalize(s: string) {
  return s
    .toLocaleLowerCase("tr-TR")
    .replaceAll("ı", "i")
    .replaceAll("İ", "i")
    .replaceAll("ş", "s")
    .replaceAll("ğ", "g")
    .replaceAll("ü", "u")
    .replaceAll("ö", "o")
    .replaceAll("ç", "c");
}

const verdicts: Verdict[] = ["recommended", "guided", "restricted"];

function BooksPage() {
  const search = Route.useSearch();
  const navigate = useNavigate();

  const set = (patch: BookSearch) =>
    navigate({ to: "/kitaplar", search: { ...search, ...patch }, replace: true });

  const q = search.q ?? "";
  const results = books.filter((b) => {
    if (search.yas && b.ageBand !== search.yas) return false;
    if (search.karar && b.verdict !== search.karar) return false;
    if (q.trim()) {
      const n = normalize(q.trim());
      if (!normalize(`${b.title} ${b.author} ${b.publisher}`).includes(n)) return false;
    }
    return true;
  });

  return (
    <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
      <h1>Kitaplar</h1>
      <p className="mt-3 text-base text-mure/80">{results.length} kitap</p>

      <div className="mt-6 flex items-center gap-3 rounded-2xl bg-sis px-5 py-3.5">
        <Search size={20} className="shrink-0 text-petrol" aria-hidden="true" />
        <label htmlFor="kitap-ara" className="sr-only">
          Kitap veya yazar ara
        </label>
        <input
          id="kitap-ara"
          value={q}
          onChange={(e) => set({ q: e.target.value || undefined })}
          placeholder="Kitap veya yazar ara"
          className="min-w-0 flex-1 bg-transparent text-base text-mure placeholder:text-muted-foreground focus:outline-none"
        />
      </div>

      <div className="mt-5 flex flex-wrap gap-2">
        <Chip active={!search.yas} onClick={() => set({ yas: undefined })}>
          Tüm yaşlar
        </Chip>
        {ageBands.map((band: AgeBand) => (
          <Chip
            key={band}
            active={search.yas === band}
            onClick={() => set({ yas: search.yas === band ? undefined : band })}
          >
            {band} yaş
          </Chip>
        ))}
      </div>

      <div className="mt-3 flex flex-wrap gap-2">
        <Chip active={!search.karar} onClick={() => set({ karar: undefined })}>
          Tüm kararlar
        </Chip>
        {verdicts.map((v) => (
          <Chip
            key={v}
            active={search.karar === v}
            onClick={() => set({ karar: search.karar === v ? undefined : v })}
          >
            {verdictLabels[v]}
          </Chip>
        ))}
      </div>

      {results.length === 0 ? (
        <div className="mt-12 rounded-3xl bg-sis p-10 text-center">
          <p className="text-lg font-semibold text-petrol">
            Bu filtrelerle kitap bulunamadı. Yaş aralığını genişletmeyi deneyin.
          </p>
          <button
            type="button"
            onClick={() => navigate({ to: "/kitaplar", search: () => ({}) as BookSearch, replace: true })}
            className="mt-5 rounded-full bg-sari px-6 py-3 text-sm font-bold text-petrol"
          >
            Filtreleri temizle
          </button>
        </div>
      ) : (
        <div className="mt-9 grid grid-cols-2 gap-5 md:grid-cols-3 lg:grid-cols-4">
          {results.map((b) => (
            <BookCard key={b.slug} book={b} />
          ))}
        </div>
      )}
    </div>
  );
}
