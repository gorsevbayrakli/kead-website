import type { Book } from "@/data/books";
import { bookCovers } from "@/data/covers";

export function BookCover({ book, className = "" }: { book: Book; className?: string }) {
  const src = bookCovers[book.slug];
  return (
    <div
      className={`relative aspect-[3/4] overflow-hidden rounded-3xl ${className}`}
      role="img"
      aria-label={`${book.title} kitap kapağı`}
    >
      {src ? (
        <img
          src={src}
          alt={`${book.title} — ${book.author} kitap kapağı`}
          loading="lazy"
          width={768}
          height={1024}
          className="h-full w-full object-cover"
        />
      ) : (
        <div className="flex h-full w-full items-center justify-center bg-nane">
          <span className="text-5xl font-bold text-petrol">
            {book.title.charAt(0).toLocaleUpperCase("tr-TR")}
          </span>
        </div>
      )}
    </div>
  );
}
