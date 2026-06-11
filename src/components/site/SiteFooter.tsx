import { Link } from "react-router-dom";
import { Facebook, Linkedin, Twitter, Mail, Phone, MapPin } from "lucide-react";
import { BrandMark } from "./BrandMark";

export function SiteFooter() {
  return (
    <footer className="relative mt-24 overflow-hidden bg-[var(--brand-dark)] text-white">
      <div className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full bg-[var(--brand-blue)]/20 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-40 -left-32 h-96 w-96 rounded-full bg-[var(--brand-green)]/10 blur-3xl" />

      <div className="container-x relative grid gap-12 py-16 pr-8 sm:pr-12 md:grid-cols-12 lg:pr-12">
        <div className="md:col-span-4">
          <BrandMark tone="light" className="h-12" />
          <p className="mt-5 max-w-sm text-sm leading-relaxed text-white/70">
            Integrated energy infrastructure and industrial solutions across Africa — combining technical expertise, procurement networks, and multi-energy capability.
          </p>
          <div className="mt-6 flex gap-3">
            {[Linkedin, Twitter, Facebook].map((Icon, i) => (
              <a key={i} href="#" aria-label="social link" className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/15 transition hover:border-[var(--brand-green)] hover:text-[var(--brand-green)]">
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        <div className="md:col-span-2">
          <h4 className="text-xs font-semibold uppercase tracking-widest text-[var(--brand-green)]">Navigate</h4>
          <ul className="mt-5 space-y-3 text-sm">
            {[
              ["/", "Home"],
              ["/about", "About"],
              ["/services", "Services"],
              ["/products", "Products"],
              ["/blog", "Insights"],
              ["/contact", "Contact"],
            ].map(([to, label]) => (
              <li key={to}>
                <Link to={to} className="text-white/70 transition hover:text-white">{label}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="md:col-span-3">
          <h4 className="text-xs font-semibold uppercase tracking-widest text-[var(--brand-green)]">Solutions</h4>
          <ul className="mt-5 space-y-3 text-sm text-white/70">
            <li>Oil & Gas Procurement</li>
            <li>CNG & LPG Infrastructure</li>
            <li>LNG Fueling Systems</li>
            <li>EV Mobility</li>
            <li>Solar & Hybrid Power</li>
            <li>Hydrogen Energy</li>
            <li>Turbines & Power Generation</li>
          </ul>
        </div>

        <div className="md:col-span-3">
          <h4 className="text-xs font-semibold uppercase tracking-widest text-[var(--brand-green)]">Contact</h4>
          <ul className="mt-5 space-y-4 text-sm text-white/80">
            <li className="flex gap-3"><Phone className="h-4 w-4 flex-shrink-0 text-[var(--brand-green)]" /><a href="tel:+2347035496294">+234 703 549 6294</a></li>
            <li className="flex gap-3"><Mail className="h-4 w-4 flex-shrink-0 text-[var(--brand-green)]" /><a href="mailto:info@kwagasandenergy.com">info@kwagasandenergy.com</a></li>
            <li className="flex gap-3"><MapPin className="h-4 w-4 flex-shrink-0 text-[var(--brand-green)]" />Uyo, Akwa Ibom State, Nigeria</li>
          </ul>
          <p className="mt-5 text-xs text-white/40">Office Hours · Mon–Fri · 8:00 – 17:00 WAT</p>
        </div>
      </div>

      <div className="relative border-t border-white/10">
        <div className="container-x flex flex-col gap-3 py-6 text-xs text-white/50 md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} Kwa Gas and Energy Company Limited. RC 7971986. All rights reserved.</p>
          <p>Indigenous expertise. Global standards.</p>
        </div>
      </div>
    </footer>
  );
}