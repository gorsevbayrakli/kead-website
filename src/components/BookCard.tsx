import { Link } from "@tanstack/react-router";
import { Star } from "lucide-react";
import type { Book } from "@/data/books";
import { BookCover } from "./BookCover";
import { VerdictBadge } from "./VerdictBadge";

export function avgRating(book: Book) {
  const r = book.ratings;
  return (r.ageFit + r.educational + r.emotionalSafety) / 3;
}

export function BookCard({ book }: { book: Book }) {
  return (
    <Link
      to="/kitaplar/$slug"
      params={{ slug: book.slug }}
      className="group block rounded-3xl transition-transform duration-150 hover:-translate-y-0.5"
    >
      <div className="relative">
        <BookCover book={book} />
        <span className="absolute bottom-2 left-2 inline-flex items-center gap-1 rounded-full bg-white px-2.5 py-1 text-sm font-bold text-petrol">
          <Star size={14} className="fill-sari text-sari" aria-hidden="true" />
          {avgRating(book).toFixed(1)}
        </span>
      </div>
      <h3 className="mt-3 text-base leading-snug font-bold text-petrol">{book.title}</h3>
      <p className="mt-0.5 text-sm text-muted-foreground">{book.author}</p>
      <div className="mt-2">
        <VerdictBadge verdict={book.verdict} />
      </div>
    </Link>
  );
}
