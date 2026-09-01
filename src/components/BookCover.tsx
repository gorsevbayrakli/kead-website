import type { Book } from "@/data/books";

const paletteBg: Record<Book["palette"], string> = {
  pembe: "bg-pembe",
  nane: "bg-nane",
  seftali: "bg-seftali",
  gok: "bg-gok",
  "sari-soft": "bg-sari-soft",
};

export function BookCover({ book, className = "" }: { book: Book; className?: string }) {
  const letter = book.title.charAt(0).toLocaleUpperCase("tr-TR");
  return (
    <div
      className={`relative flex aspect-[3/4] flex-col justify-between overflow-hidden rounded-3xl p-4 ${paletteBg[book.palette]} ${className}`}
      role="img"
      aria-label={`${book.title} kitabının renkli kapak bloğu`}
    >
      <svg
        className="pointer-events-none absolute inset-0 h-full w-full text-petrol/15"
        viewBox="0 0 120 160"
        aria-hidden="true"
      >
        <circle cx="98" cy="26" r="26" fill="currentColor" />
        <rect x="-12" y="112" width="70" height="70" rx="18" fill="currentColor" />
        <path d="M0 78h120" stroke="currentColor" strokeWidth="2" />
      </svg>
      <span className="relative font-bold leading-none text-petrol" style={{ fontSize: "3.25rem" }}>
        {letter}
      </span>
      <span className="relative text-sm leading-snug font-semibold text-petrol">{book.title}</span>
    </div>
  );
}
