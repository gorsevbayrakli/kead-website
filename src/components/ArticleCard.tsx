import { Link } from "@tanstack/react-router";
import type { Article } from "@/data/articles";
import { ArticleIllustration } from "./ArticleIllustration";

export function ArticleCard({ article }: { article: Article }) {
  return (
    <Link
      to="/konular/$slug"
      params={{ slug: article.slug }}
      className="group hover-lift flex h-full flex-col overflow-hidden rounded-3xl bg-white"
      style={{ boxShadow: "var(--shadow-soft)" }}
    >
      <div className="overflow-hidden">
        <ArticleIllustration
          article={article}
          className="h-44 transition-transform duration-500 group-hover:scale-[1.05]"
        />
      </div>
      <div className="flex flex-1 flex-col p-5">
        <div className="flex flex-wrap items-center gap-2">
          <span className="rounded-full bg-sari-soft px-2.5 py-1 text-xs font-semibold text-mure">
            {article.category}
          </span>
          <span className="text-xs font-semibold text-muted-foreground">{article.ageTag}</span>
        </div>
        <h3 className="mt-3 text-lg leading-snug font-bold text-petrol">{article.title}</h3>
        <p className="mt-2 line-clamp-2 text-sm text-mure/80">{article.excerpt}</p>
        <span className="mt-4 text-xs font-semibold text-muted-foreground">
          {article.readingMinutes} dakikalık okuma
        </span>
      </div>
    </Link>
  );
}
