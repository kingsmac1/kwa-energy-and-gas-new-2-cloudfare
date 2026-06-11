import type { ReactNode } from "react";

export function Section({
  children,
  className = "",
  tone = "light",
  id,
}: {
  children: ReactNode;
  className?: string;
  tone?: "light" | "dark" | "white";
  id?: string;
}) {
  const bg =
    tone === "dark"
      ? "bg-[var(--brand-dark)] text-white"
      : tone === "white"
      ? "bg-white text-[var(--brand-dark)]"
      : "bg-[var(--brand-bg)] text-[var(--brand-dark)]";
  return (
    <section id={id} className={`relative py-20 sm:py-28 ${bg} ${className}`}>
      <div className="container-x">{children}</div>
    </section>
  );
}

export function Eyebrow({ children, tone = "light" }: { children: ReactNode; tone?: "light" | "dark" }) {
  const cls =
    tone === "dark"
      ? "border-white/15 text-[var(--brand-green)]"
      : "border-[var(--brand-dark)]/15 text-[var(--brand-blue)]";
  return (
    <span className={`inline-flex items-center gap-2 rounded-full border ${cls} px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em]`}>
      <span className="inline-block h-1.5 w-1.5 rounded-full bg-[var(--brand-green)]" /> {children}
    </span>
  );
}