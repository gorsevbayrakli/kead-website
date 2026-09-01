import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { articles, type Article } from "@/data/articles";
import { ArticleCard } from "@/components/ArticleCard";
import { Chip } from "@/components/Chip";

const categories = ["Tümü", "Gelişim", "Yeni doğan", "Okul çağı", "+12"] as const;

export const Route = createFileRoute("/konular/")({
  head: () => ({
    meta: [
      { title: "Konular — Çocuk gelişimi üzerine yazılar | Kead" },
      {
        name: "description",
        content:
          "Kitap seçimi, okuma alışkanlığı, duygular ve ekran dengesi üzerine ebeveynler için yazılar.",
      },
      { property: "og:title", content: "Konular — Çocuk gelişimi üzerine yazılar" },
      { property: "og:description", content: "Ebeveynler için çocuk gelişimi ve okuma yazıları." },
      { property: "og:url", content: "/konular" },
    ],
    links: [{ rel: "canonical", href: "/konular" }],
  }),
  component: ArticlesPage,
});

function ArticlesPage() {
  const [cat, setCat] = useState<(typeof categories)[number]>("Tümü");
  const list: Article[] = cat === "Tümü" ? articles : articles.filter((a) => a.category === cat);

  return (
    <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
      <h1>Konular</h1>
      <p className="mt-3 max-w-2xl text-base text-mure/80">
        Kitap seçimi tek başına yetmiyor. Çocuğun hangi dönemde neye ihtiyaç duyduğunu anlatan
        yazılar.
      </p>

      <div className="mt-6 flex flex-wrap gap-2">
        {categories.map((c) => (
          <Chip key={c} active={cat === c} onClick={() => setCat(c)}>
            {c}
          </Chip>
        ))}
      </div>

      <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {list.map((a) => (
          <ArticleCard key={a.slug} article={a} />
        ))}
      </div>
    </div>
  );
}
