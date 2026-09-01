import { useEffect, useRef, useState } from "react";

export function Meter({ label, value }: { label: string; value: number }) {
  const [width, setWidth] = useState(0);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) {
      setWidth(value);
      return;
    }
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          setWidth(value);
          obs.disconnect();
        }
      },
      { threshold: 0.3 },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [value]);

  return (
    <div ref={ref}>
      <div className="flex items-center justify-between text-sm font-semibold">
        <span>{label}</span>
        <span className="tabular-nums">%{value}</span>
      </div>
      <div className="mt-1.5 h-2 w-full overflow-hidden rounded-full bg-current/10">
        <div
          className="h-full rounded-full bg-sari transition-[width] duration-700 ease-out"
          style={{ width: `${width}%` }}
        />
      </div>
    </div>
  );
}
