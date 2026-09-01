import { createFileRoute, notFound, Link } from "@tanstack/react-router";
import { ThumbsUp, CornerDownRight } from "lucide-react";
import { books, getBook } from "@/data/books";
import { BookCover } from "@/components/BookCover";
import { Stars } from "@/components/Stars";
import { Meter } from "@/components/Meter";
import { VerdictBadge } from "@/components/VerdictBadge";
import { BookCard } from "@/components/BookCard";
import { initials } from "@/data/experts";

export const Route = createFileRoute("/kitaplar/$slug")({
  loader: ({ params }) => {
    const book = getBook(params.slug);
    if (!book) throw notFound();
    return { book };
  },
  head: ({ loaderData, params }) => {
    if (!loaderData) {
      return { meta: [{ title: "Kitap bulunamadı — Kead" }, { name: "robots", content: "noindex" }] };
    }
    const b = loaderData.book;
    const desc = b.summary.slice(0, 155);
    return {
      meta: [
        { title: `${b.title} — ${b.author} · Kead değerlendirmesi` },
        { name: "description", content: desc },
        { property: "og:title", content: `${b.title} — Kead değerlendirmesi` },
        { property: "og:description", content: desc },
        { property: "og:type", content: "article" },
        { property: "og:url", content: `/kitaplar/${params.slug}` },
      ],
      links: [{ rel: "canonical", href: `/kitaplar/${params.slug}` }],
    };
  },
  component: BookDetail,
});

function BookDetail() {
  const { book } = Route.useLoaderData();
  const avg = (book.ratings.ageFit + book.ratings.educational + book.ratings.emotionalSafety) / 3;
  const related = books.filter((b) => b.slug !== book.slug && b.ageBand === book.ageBand).slice(0, 3);
  const fallback = books.filter((b) => b.slug !== book.slug).slice(0, 3);
  const suggestions = related.length >= 2 ? related : fallback;

  return (
    <article className="mx-auto max-w-3xl px-4 py-12 sm:px-6">
      <Link to="/kitaplar" className="text-sm font-semibold text-petrol underline underline-offset-4">
        Kitaplar
      </Link>

      <header className="mt-5 flex flex-col gap-6 sm:flex-row">
        <BookCover book={book} className="w-40 shrink-0" />
        <div className="min-w-0">
          <h1 className="text-3xl sm:text-4xl">{book.title}</h1>
          <p className="mt-2 text-base text-mure/80">
            {book.author} · {book.publisher}
          </p>
          <span className="mt-3 inline-block rounded-full bg-sari-soft px-3 py-1 text-sm font-semibold text-mure">
            {book.ageBand} yaş
          </span>
          <div className="mt-3 flex items-center gap-2">
            <Stars value={avg} size={18} />
            <span className="font-bold text-petrol">{avg.toFixed(1)}</span>
          </div>
        </div>
      </header>

      <section className="mt-8 grid gap-4 sm:grid-cols-3" aria-label="Üç eksenli puan">
        {[
          ["Yaş uygunluğu", book.ratings.ageFit],
          ["Eğitici değer", book.ratings.educational],
          ["Duygusal güvenlik", book.ratings.emotionalSafety],
        ].map(([label, value]) => (
          <div key={label as string} className="rounded-2xl bg-sis p-4">
            <p className="text-sm font-semibold text-mure">{label}</p>
            <div className="mt-1.5">
              <Stars value={value as number} />
            </div>
          </div>
        ))}
      </section>

      <div className="mt-6 flex flex-wrap gap-2">
        {book.tags.map((t) => (
          <span key={t} className="rounded-full bg-sari-soft px-3 py-1.5 text-sm font-semibold text-mure">
            {t}
          </span>
        ))}
      </div>

      <section className="mt-10">
        <h2>Kitabın konusu</h2>
        <p className="mt-3 text-base leading-relaxed text-mure/90">{book.summary}</p>
      </section>

      <section className="mt-10">
        <h2>Değerlendirmeler</h2>
        <div className="mt-4 space-y-4 text-mure">
          <Meter label="Görsellik" value={book.meters.visual} />
          <Meter label="Pozitif mesaj" value={book.meters.positiveMessage} />
          <Meter label="Öğretici içerik" value={book.meters.educational} />
        </div>
      </section>

      <section className="mt-10 rounded-3xl bg-sis p-6">
        <div className="flex items-center gap-3">
          <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-petrol font-bold text-white">
            {initials(book.expertOpinion.expert)}
          </span>
          <div className="min-w-0">
            <h2 className="truncate text-lg">{book.expertOpinion.expert}</h2>
            <p className="text-sm text-muted-foreground">{book.expertOpinion.title}</p>
          </div>
        </div>
        <p className="mt-4 border-l-4 border-sari pl-4 text-base leading-relaxed text-mure">
          {book.expertOpinion.text}
        </p>
      </section>

      <div className="mt-8">
        <VerdictBadge verdict={book.verdict} full />
      </div>

      <section className="mt-12">
        <h2>Ebeveyn yorumları</h2>
        <ul className="mt-5 space-y-4">
          {book.comments.map((c) => (
            <li key={c.author} className="rounded-2xl border border-border p-5">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <span className="font-bold text-petrol">{c.author}</span>
                <span className="text-sm text-muted-foreground">{c.date}</span>
              </div>
              <div className="mt-1">
                <Stars value={c.stars} size={14} />
              </div>
              <p className="mt-2 text-base leading-relaxed text-mure/90">{c.text}</p>
              <p className="mt-3 inline-flex items-center gap-1.5 text-sm text-muted-foreground">
                <ThumbsUp size={14} aria-hidden="true" /> {c.likes} beğeni
              </p>
              {c.replies?.map((r) => (
                <div key={r.author} className="mt-3 rounded-2xl bg-sis p-4">
                  <p className="flex items-center gap-2 text-sm font-bold text-petrol">
                    <CornerDownRight size={14} aria-hidden="true" /> {r.author}
                    <span className="font-normal text-muted-foreground">{r.date}</span>
                  </p>
                  <p className="mt-1.5 text-sm text-mure/90">{r.text}</p>
                </div>
              ))}
            </li>
          ))}
        </ul>

        <div className="mt-6 rounded-2xl bg-sis p-5">
          <label htmlFor="yorum" className="text-sm font-semibold text-muted-foreground">
            Yorum yazmak için uygulamayı kullanın
          </label>
          <textarea
            id="yorum"
            disabled
            rows={3}
            placeholder="Yorumunuz…"
            className="mt-2 w-full cursor-not-allowed rounded-xl border border-border bg-white/60 p-3 text-base"
          />
        </div>
      </section>

      <section className="mt-12">
        <h2>Bunlar da sevebilirsiniz</h2>
        <div className="mt-5 grid grid-cols-2 gap-5 sm:grid-cols-3">
          {suggestions.map((b) => (
            <BookCard key={b.slug} book={b} />
          ))}
        </div>
      </section>
    </article>
  );
}
