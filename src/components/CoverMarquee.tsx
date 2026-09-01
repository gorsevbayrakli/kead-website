import { books } from "@/data/books";
import { BookCover } from "./BookCover";

function Row({
  items,
  reverse = false,
  duration = 46,
}: {
  items: typeof books;
  reverse?: boolean;
  duration?: number;
}) {
  const loop = [...items, ...items];
  return (
    <div className="flex w-max gap-4" style={{ animation: `kead-marquee ${duration}s linear infinite${reverse ? " reverse" : ""}` }}>
      {loop.map((b, i) => (
        <div key={`${b.slug}-${i}`} className="w-32 shrink-0 sm:w-40">
          <BookCover book={b} className="transition-transform duration-300 hover:-rotate-2 hover:scale-[1.04]" />
        </div>
      ))}
    </div>
  );
}

export function CoverMarquee() {
  const first = books.slice(0, 6);
  const second = books.slice(6, 12);
  return (
    <div
      className="kead-marquee-mask space-y-4 overflow-hidden"
      aria-hidden="true"
    >
      <Row items={first} />
      <Row items={second} reverse duration={54} />
    </div>
  );
}
