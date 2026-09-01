import type { ReactNode } from "react";

export function Chip({
  active,
  onClick,
  children,
}: {
  active?: boolean;
  onClick?: () => void;
  children: ReactNode;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={!!active}
      className={`shrink-0 rounded-full px-4 py-2 text-sm font-semibold transition-colors duration-150 ${
        active
          ? "bg-petrol text-white"
          : "border-[1.5px] border-petrol/35 bg-white text-petrol hover:border-petrol"
      }`}
    >
      {children}
    </button>
  );
}
