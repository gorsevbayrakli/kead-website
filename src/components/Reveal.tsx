import { useEffect, useRef, useState, type ReactNode, type ElementType } from "react";

type Variant = "up" | "fade" | "scale" | "left" | "right";

const hidden: Record<Variant, string> = {
  up: "opacity-0 translate-y-8",
  fade: "opacity-0",
  scale: "opacity-0 scale-[0.96]",
  left: "opacity-0 -translate-x-8",
  right: "opacity-0 translate-x-8",
};

export function Reveal({
  children,
  variant = "up",
  delay = 0,
  as: Tag = "div",
  className = "",
  once = true,
}: {
  children: ReactNode;
  variant?: Variant;
  delay?: number;
  as?: ElementType;
  className?: string;
  once?: boolean;
}) {
  const ref = useRef<HTMLElement>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setShown(true);
      return;
    }
    const obs = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            setShown(true);
            if (once) obs.disconnect();
          } else if (!once) {
            setShown(false);
          }
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -8% 0px" },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [once]);

  return (
    <Tag
      ref={ref}
      className={`transition-[opacity,transform] duration-700 ease-[cubic-bezier(0.2,0.7,0.3,1)] will-change-transform ${
        shown ? "translate-x-0 translate-y-0 scale-100 opacity-100" : hidden[variant]
      } ${className}`}
      style={{ transitionDelay: shown ? `${delay}ms` : "0ms" }}
    >
      {children}
    </Tag>
  );
}

export function RevealGroup({
  children,
  className = "",
  step = 90,
  variant = "up",
}: {
  children: ReactNode[];
  className?: string;
  step?: number;
  variant?: Variant;
}) {
  return (
    <div className={className}>
      {children.map((child, i) => (
        <Reveal key={i} variant={variant} delay={i * step} className="h-full">
          {child}
        </Reveal>
      ))}
    </div>
  );
}
