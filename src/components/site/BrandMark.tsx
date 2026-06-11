import logoDark from "@/assets/kwa-logo-dark.png";
import logoLight from "@/assets/kwa-logo-light.png";

export function BrandMark({ tone = "dark", className = "h-10" }: { tone?: "dark" | "light"; className?: string }) {
  const src = tone === "light" ? logoLight : logoDark;
  return (
    <img
      src={src}
      alt="Kwa Gas & Energy"
      className={`${className} w-auto object-contain`}
      loading="eager"
      decoding="async"
    />
  );
}
