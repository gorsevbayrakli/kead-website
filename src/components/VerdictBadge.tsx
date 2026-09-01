import { CheckCircle2, ShieldAlert, Info } from "lucide-react";
import { verdictLabels, type Verdict } from "@/data/books";

const styles: Record<Verdict, string> = {
  recommended: "bg-nane text-[oklch(0.38_0.09_158)]",
  guided: "bg-sari-soft text-mure",
  restricted: "bg-[oklch(0.94_0.04_25)] text-[oklch(0.45_0.14_25)]",
};

const icons: Record<Verdict, typeof Info> = {
  recommended: CheckCircle2,
  guided: Info,
  restricted: ShieldAlert,
};

export function VerdictBadge({ verdict, full = false }: { verdict: Verdict; full?: boolean }) {
  const Icon = icons[verdict];
  return (
    <span
      className={`inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-sm font-semibold ${styles[verdict]} ${
        full ? "w-full justify-center px-4 py-3 text-base" : ""
      }`}
    >
      <Icon size={full ? 20 : 15} aria-hidden="true" />
      {verdictLabels[verdict]}
    </span>
  );
}
