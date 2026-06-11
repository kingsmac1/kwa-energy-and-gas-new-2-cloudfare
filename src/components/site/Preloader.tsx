import { useEffect, useState } from "react";
import icon from "@/assets/kwa-icon.png";

const SESSION_KEY = "__kwa_preloaded__";

export function Preloader() {
  const [visible, setVisible] = useState(true);
  const [hiding, setHiding] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (sessionStorage.getItem(SESSION_KEY)) {
      setVisible(false);
      return;
    }
    sessionStorage.setItem(SESSION_KEY, "1");
    const minDuration = 900;
    const start = performance.now();
    const finish = () => {
      const elapsed = performance.now() - start;
      const wait = Math.max(0, minDuration - elapsed);
      window.setTimeout(() => {
        setHiding(true);
        window.setTimeout(() => setVisible(false), 700);
      }, wait);
    };
    if (document.readyState === "complete") finish();
    else window.addEventListener("load", finish, { once: true });
    return () => window.removeEventListener("load", finish);
  }, []);

  if (!visible) return null;

  return (
    <div
      aria-hidden="true"
      className={`fixed inset-0 z-[100] flex items-center justify-center bg-[var(--brand-dark)] transition-transform duration-700 ease-[cubic-bezier(0.77,0,0.175,1)] ${hiding ? "-translate-y-full" : "translate-y-0"}`}
    >
      <div className="flex flex-col items-center gap-6">
        <div className="relative">
          <span className="absolute inset-0 -m-4 rounded-full border-2 border-[var(--brand-green)]/40 animate-ping" />
          <img src={icon} alt="Kwa Gas & Energy" className="relative h-24 w-auto drop-shadow-2xl" />
        </div>
        <div className="h-[2px] w-40 overflow-hidden rounded-full bg-white/10">
          <div className="h-full w-1/3 animate-[kwaLoad_1.1s_ease-in-out_infinite] bg-[var(--brand-green)]" />
        </div>
        <p className="text-xs font-semibold uppercase tracking-[0.4em] text-white/60">
          Kwa Gas &amp; Energy
        </p>
      </div>
      <style>{`@keyframes kwaLoad { 0% { transform: translateX(-100%); } 100% { transform: translateX(300%); } }`}</style>
    </div>
  );
}
