export function LogoMark({ className = "h-9 w-9" }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" className={className} role="img" aria-label="Kead simgesi">
      <path
        d="M8 8c0-1.6 1.8-2.5 3.1-1.6L20 12.7V26c0 6.6-2.7 10-6 10s-6-3.4-6-10V8Z"
        fill="currentColor"
      />
      <path
        d="M40 8c0-1.6-1.8-2.5-3.1-1.6L28 12.7V26c0 6.6 2.7 10 6 10s6-3.4 6-10V8Z"
        fill="currentColor"
      />
      <path d="M8 20h32v6c0 9.4-7.2 16-16 16S8 35.4 8 26v-6Z" fill="currentColor" />
      <path
        d="m24 21 2.6 4.3 4.9 1.2-3.3 3.9.4 5-4.6-2-4.6 2 .4-5-3.3-3.9 4.9-1.2L24 21Z"
        fill="var(--color-sari)"
      />
    </svg>
  );
}

export function Wordmark({ tone = "petrol" }: { tone?: "petrol" | "sari" }) {
  const color = tone === "petrol" ? "text-petrol" : "text-sari";
  return (
    <span className={`flex items-center gap-2 ${color}`}>
      <LogoMark className="h-8 w-8" />
      <span className="text-2xl font-bold tracking-tight lowercase">kead</span>
    </span>
  );
}
