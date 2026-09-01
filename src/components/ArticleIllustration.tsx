import type { ReactElement } from "react";
import type { Article } from "@/data/articles";

const bg: Record<Article["palette"], string> = {
  pembe: "bg-pembe",
  nane: "bg-nane",
  seftali: "bg-seftali",
  gok: "bg-gok",
};

const shapes: Record<Article["illustration"], ReactElement> = {
  kitap: (
    <>
      <path d="M22 34h26v26H22z" />
      <path d="M52 34h26v26H52z" />
      <path d="M50 30v34" />
    </>
  ),
  uyku: (
    <>
      <path d="M64 24a22 22 0 1 1-24 32 26 26 0 0 0 24-32Z" />
      <circle cx="30" cy="26" r="3" />
      <circle cx="76" cy="66" r="3" />
    </>
  ),
  konusma: (
    <>
      <path d="M18 26h40v26H32l-9 9v-9h-5z" />
      <path d="M58 40h24v20h-4l-7 7v-7h-13z" />
    </>
  ),
  ekran: (
    <>
      <rect x="24" y="22" width="52" height="36" rx="5" />
      <path d="M40 66h20M50 58v8" />
    </>
  ),
  okul: (
    <>
      <path d="M28 38h44v28H28z" />
      <path d="M22 38 50 22l28 16" />
      <path d="M44 66V50h12v16" />
    </>
  ),
  kalp: (
    <>
      <path d="M50 68S24 54 24 38a13 13 0 0 1 26-5 13 13 0 0 1 26 5c0 16-26 30-26 30Z" />
    </>
  ),
};

export function ArticleIllustration({
  article,
  className = "",
}: {
  article: Article;
  className?: string;
}) {
  return (
    <div className={`flex items-center justify-center ${bg[article.palette]} ${className}`}>
      <svg
        viewBox="0 0 100 88"
        className="h-3/5 w-3/5 max-h-40 text-petrol"
        fill="none"
        stroke="currentColor"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
        role="img"
        aria-label={`${article.title} yazısı için sade illüstrasyon`}
      >
        {shapes[article.illustration]}
      </svg>
    </div>
  );
}
