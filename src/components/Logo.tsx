import markPetrol from "@/assets/kead-mark-petrol.png.asset.json";
import markSari from "@/assets/kead-mark-sari.png.asset.json";
import logoPetrol from "@/assets/kead-petrol.png.asset.json";
import logoSari from "@/assets/kead-sari.png.asset.json";

export function LogoMark({
  className = "h-9 w-9",
  tone = "petrol",
}: {
  className?: string;
  tone?: "petrol" | "sari";
}) {
  return (
    <img
      src={tone === "petrol" ? markPetrol.url : markSari.url}
      alt="Kead"
      className={`${className} object-contain`}
      loading="lazy"
      decoding="async"
    />
  );
}

export function Wordmark({
  tone = "petrol",
  className = "h-8",
}: {
  tone?: "petrol" | "sari";
  className?: string;
}) {
  return (
    <img
      src={tone === "petrol" ? logoPetrol.url : logoSari.url}
      alt="Kead"
      className={`${className} w-auto object-contain`}
      decoding="async"
    />
  );
}
