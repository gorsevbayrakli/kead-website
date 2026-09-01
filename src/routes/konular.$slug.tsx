import { createFileRoute, notFound, Link } from "@tanstack/react-router";
import { Clock } from "lucide-react";
import { getArticle } from "@/data/articles";
import { books } from "@/data/books";
import { ArticleIllustration } from "@/components/ArticleIllustration";
import { BookCard } from "@/components/BookCard";

export const Route = createFileRoute("/konular/$slug")({
  loader: ({ params }) => {
    const article = getArticle(params.slug);
    if (!article) throw notFound();
    return { article };
  },
  head: ({ loaderData, params }) => {
    if (!loaderData) {
      return { meta: [{ title: "Yazı bulunamadı — Kead" }, { name: "robots", content: "noindex" }] };
    }
    const a = loaderData.article;
    return {
      meta: [
        { title: `${a.title} — Kead` },
        { name: "description", content: a.excerpt.slice(0, 155) },
        { property: "og:title", content: a.title },
        { property: "og:description", content: a.excerpt.slice(0, 155) },
        { property: "og:type", content: "article" },
        { property: "og:url", content: `/konular/${params.slug}` },
      ],
      links: [{ rel: "canonical", href: `/konular/${params.slug}` }],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: a.title,
            description: a.excerpt,
            inLanguage: "tr-TR",
          }),
        },
      ],
    };
  },
  component: ArticlePage,
});

function ArticlePage() {
  const { article } = Route.useLoaderData();
  const related = article.relatedBooks.map((s) => books.find((b) => b.slug === s)!).filter(Boolean);

  return (
    <article>
      <header className="mx-auto max-w-3xl px-4 pt-10 sm:px-6">
        <Link to="/konular" className="text-sm font-semibold text-petrol underline underline-offset-4">
          Konular
        </Link>
        <ArticleIllustration article={article} className="mt-4 h-56 rounded-3xl sm:h-72" />
        <div className="mt-6 flex flex-wrap items-center gap-3">
          <span className="rounded-full bg-sari-soft px-3 py-1 text-sm font-semibold text-mure">
            {article.category}
          </span>
          <span className="text-sm font-semibold text-muted-foreground">{article.ageTag}</span>
          <span className="inline-flex items-center gap-1.5 text-sm text-muted-foreground">
            <Clock size={14} aria-hidden="true" /> {article.readingMinutes} dakikalık okuma
          </span>
        </div>
        <h1 className="mt-4 text-3xl sm:text-4xl">{article.title}</h1>
      </header>

      <div className="prose-kead mx-auto mt-8 max-w-[38rem] px-4 text-[1.0625rem] sm:px-6">
        {article.body.map((b, i) => {
          if (b.type === "h2") return <h2 key={i}>{b.text}</h2>;
          if (b.type === "quote") return <blockquote key={i}>{b.text}</blockquote>;
          return <p key={i}>{b.text}</p>;
        })}
      </div>

      <section className="mx-auto mt-14 max-w-3xl px-4 pb-16 sm:px-6">
        <h2>İlgili kitaplar</h2>
        <div className="mt-5 grid grid-cols-2 gap-5 sm:grid-cols-3">
          {related.map((b) => (
            <BookCard key={b.slug} book={b} />
          ))}
        </div>
      </section>
    </article>
  );
}
