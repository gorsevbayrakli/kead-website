import { Star } from "lucide-react";

export function Stars({
  value,
  size = 16,
  label,
}: {
  value: number;
  size?: number;
  label?: string;
}) {
  return (
    <span className="inline-flex items-center gap-0.5" aria-label={label ?? `5 üzerinden ${value}`}>
      {[1, 2, 3, 4, 5].map((i) => (
        <Star
          key={i}
          width={size}
          height={size}
          aria-hidden="true"
          className={i <= Math.round(value) ? "fill-sari text-sari" : "text-border"}
        />
      ))}
    </span>
  );
}
