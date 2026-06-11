import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { BrandMark } from "./BrandMark";

const NAV = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/products", label: "Products" },
  { to: "/blog", label: "Insights" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (open) {
      const prev = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => { document.body.style.overflow = prev; };
    }
  }, [open]);

  return (
    <header className={`sticky top-0 z-50 transition-all ${scrolled ? "bg-[var(--brand-bg)]/85 backdrop-blur-md border-b border-[var(--brand-dark)]/10" : "bg-transparent"}`}>
      <div className="container-x flex h-20 items-center justify-between">
        <Link to="/" className="flex items-center" aria-label="Kwa Gas and Energy — Home">
          <BrandMark tone="dark" className="h-10" />
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          {NAV.map((item) => {
            const active = item.to === "/" ? pathname === "/" : pathname.startsWith(item.to);
            return (
              <Link key={item.to} to={item.to} className={`rounded-full px-4 py-2 text-sm font-medium transition ${active ? "bg-[var(--brand-dark)] text-white" : "text-[var(--brand-dark)]/75 hover:text-[var(--brand-blue)]"}`}>
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden lg:block">
          <Link to="/contact" className="group inline-flex items-center gap-2 rounded-full bg-[var(--brand-dark)] px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-[var(--brand-blue)]">
            Request a quote
            <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-[var(--brand-green)] text-[var(--brand-dark)] transition group-hover:translate-x-0.5">→</span>
          </Link>
        </div>

        <button onClick={() => setOpen((v) => !v)} aria-label="Toggle menu" className="relative z-[60] inline-flex h-11 w-11 items-center justify-center rounded-full bg-[var(--brand-dark)] text-white lg:hidden">
          {open ? <X className="h-5 w-5 text-[var(--brand-green)]" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      <div className={`fixed inset-0 z-40 lg:hidden transition-opacity duration-300 ${open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`} onClick={() => setOpen(false)} aria-hidden={!open}>
        <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />
      </div>

      <aside className={`fixed right-0 top-0 z-50 h-[100dvh] w-full max-w-md bg-[var(--brand-dark)] text-white shadow-2xl transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] lg:hidden ${open ? "translate-x-0" : "translate-x-full"}`} aria-hidden={!open}>
        <div className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full bg-[var(--brand-blue)]/30 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-40 -left-32 h-96 w-96 rounded-full bg-[var(--brand-green)]/10 blur-3xl" />
        <div className="relative flex h-full flex-col px-8 pb-10 pt-6 sm:px-12">
          <div className="flex items-center justify-between">
            <BrandMark tone="light" className="h-9" />
          </div>
          <nav className="mt-16 flex flex-col gap-2">
            {NAV.map((item, i) => {
              const active = item.to === "/" ? pathname === "/" : pathname.startsWith(item.to);
              return (
                <Link key={item.to} to={item.to} onClick={() => setOpen(false)} style={{ transitionDelay: open ? `${120 + i * 60}ms` : "0ms" }} className={`group flex items-center justify-between border-b border-white/10 py-5 text-2xl font-semibold transition-all duration-500 sm:text-3xl ${open ? "translate-x-0 opacity-100" : "translate-x-6 opacity-0"} ${active ? "text-[var(--brand-green)]" : "text-white hover:text-[var(--brand-green)]"}`}>
                  <span>{item.label}</span>
                  <span className="text-[var(--brand-green)] opacity-0 transition group-hover:translate-x-1 group-hover:opacity-100">→</span>
                </Link>
              );
            })}
          </nav>
          <div className="mt-auto pt-10">
            <Link to="/contact" onClick={() => setOpen(false)} className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-[var(--brand-green)] px-6 py-4 text-sm font-semibold text-[var(--brand-dark)] transition hover:bg-white">
              Request a quote <span>→</span>
            </Link>
            <p className="mt-6 text-xs uppercase tracking-[0.3em] text-white/40">Kwa Gas & Energy</p>
          </div>
        </div>
      </aside>
    </header>
  );
}
