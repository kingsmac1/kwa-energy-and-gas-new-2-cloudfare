import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Fuel, Flame, Truck, Zap, Sun, Atom, Cog, ShieldCheck, ArrowRight } from "lucide-react";
import { Section, Eyebrow } from "@/components/site/Section";
import { Reveal, Stagger, StaggerItem } from "@/components/site/Reveal";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Kwa Gas and Energy" },
      { name: "description", content: "Eight integrated energy and industrial solution pathways: oil & gas procurement, CNG/LPG/LNG infrastructure, EV mobility, solar, hydrogen, turbines and industrial technical support." },
      { property: "og:title", content: "Services — Kwa Gas and Energy" },
      { property: "og:description", content: "Specialized engineering, infrastructure and technical services for Africa's energy sector." },
    ],
  }),
  component: ServicesPage,
});

const SERVICES = [
  { icon: Fuel, title: "Oil & Gas Procurement Solutions", summary: "Reliable sourcing and supply chain solutions for energy and industrial operations.", items: ["Oilfield equipment and spare parts", "Instrumentation and control systems", "Electrical and mechanical systems", "Industrial consumables and PPE", "Vendor sourcing and logistics coordination"] },
  { icon: Flame, title: "Gas Infrastructure (CNG & LPG)", summary: "Integrated gas systems for transportation, industry and commercial energy use.", items: ["CNG & LPG stations (Mother & Daughter networks)", "Gas storage and distribution systems", "Compression and pressure systems", "Industrial gas supply systems", "Fleet fueling infrastructure"] },
  { icon: Truck, title: "LNG Fueling Infrastructure", summary: "LNG systems for heavy-duty transport and industrial users.", items: ["LNG storage systems", "LNG fueling stations", "Industrial LNG supply solutions", "LNG logistics and distribution systems"] },
  { icon: Zap, title: "Electric Vehicle (EV) Mobility", summary: "Electric transportation infrastructure across Africa.", items: ["EV vehicle distribution", "Fleet electrification programs", "EV charging station deployment", "Mobility advisory services"] },
  { icon: Sun, title: "Solar Energy Solutions", summary: "Renewable energy systems for industrial and community use.", items: ["Commercial and industrial solar systems", "Hybrid solar + battery systems", "Solar mini-grids", "Solar street lighting", "EPC solar project delivery"] },
  { icon: Atom, title: "Hydrogen Energy Solutions", summary: "Supporting the transition to next-generation clean energy systems.", items: ["Hydrogen feasibility studies", "Green hydrogen integration advisory", "Renewable energy-to-hydrogen concepts", "Hydrogen mobility planning support"] },
  { icon: Cog, title: "Power Generation Systems", summary: "Sourcing, refurbishment and deployment support for industrial turbines.", items: ["Gas and Steam turbine sourcing", "Turbine refurbishment & overhaul", "Power plant equipment supply", "Installation and commissioning support"] },
  { icon: ShieldCheck, title: "Industrial Technical Support", summary: "Skilled technical manpower and maintenance services.", items: ["Instrument calibration & maintenance", "Electrical & mechanical support", "Plant operations support", "Shutdown & turnaround services", "Technical manpower deployment"] },
];

const TURBINE_CAPACITY: [string, string][] = [
  ["Small Industrial Systems", "1MW – 10MW"],
  ["Commercial Power Systems", "10MW – 50MW"],
  ["Industrial Power Plants", "50MW – 150MW"],
  ["Large-Scale Utility Support", "150MW+ (Project-Based)"],
];

function ServicesPage() {
  return (
    <>
      <section className="bg-[var(--brand-bg)] pt-10 pb-16">
        <div className="container-x">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="max-w-4xl">
            <Eyebrow>Our services</Eyebrow>
            <h1 className="mt-6 text-balance text-5xl font-bold leading-[1.05] text-[var(--brand-dark)] sm:text-7xl">
              Integrated energy & industrial <span className="text-[var(--brand-blue)]">solutions.</span>
            </h1>
            <p className="mt-8 max-w-3xl text-lg text-[var(--brand-dark)]/70 sm:text-xl">
              Eight specialized pathways — from upstream procurement to renewable energy deployment — delivered with safety and operational integrity.
            </p>
          </motion.div>
        </div>
      </section>

      <Section tone="white" className="!pt-6">
        <Stagger className="grid gap-6 md:grid-cols-2">
          {SERVICES.map(({ icon: Icon, title, summary, items }) => (
            <StaggerItem key={title} className="rounded-3xl border border-[var(--brand-dark)]/10 bg-[var(--brand-bg)] p-8">
              <Icon className="h-8 w-8 text-[var(--brand-blue)]" />
              <h3 className="mt-5 text-2xl font-bold">{title}</h3>
              <p className="mt-3 text-[var(--brand-dark)]/70">{summary}</p>
              <ul className="mt-5 space-y-2 text-sm">
                {items.map((it) => (
                  <li key={it} className="flex items-start gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--brand-green)]" />
                    <span>{it}</span>
                  </li>
                ))}
              </ul>
            </StaggerItem>
          ))}
        </Stagger>
      </Section>

      <Section tone="dark">
        <div className="grid gap-12 lg:grid-cols-12">
          <Reveal className="lg:col-span-5">
            <Eyebrow tone="dark">Power generation</Eyebrow>
            <h2 className="mt-5 text-4xl font-bold text-white sm:text-5xl">From 1MW industrial systems to utility-scale support beyond 150MW.</h2>
            <p className="mt-6 text-lg text-white/70">We source, refurbish, deploy, install and commission gas and steam turbines across four system classifications.</p>
          </Reveal>
          <Reveal delay={0.15} className="lg:col-span-7 rounded-3xl border border-white/10 bg-white/[0.04] p-2">
            <table className="w-full text-left">
              <thead className="text-xs uppercase tracking-widest text-[var(--brand-green)]">
                <tr><th className="p-5">Classification</th><th className="p-5">Capacity range</th></tr>
              </thead>
              <tbody className="divide-y divide-white/10">
                {TURBINE_CAPACITY.map(([k, v]) => (
                  <tr key={k} className="text-white/85"><td className="p-5 font-medium">{k}</td><td className="p-5">{v}</td></tr>
                ))}
              </tbody>
            </table>
          </Reveal>
        </div>
      </Section>

      <Section tone="white">
        <Reveal>
          <div className="rounded-[2rem] border border-[var(--brand-dark)]/10 bg-[var(--brand-bg)] p-12 sm:p-16">
            <div className="grid items-end gap-8 lg:grid-cols-2">
              <div>
                <Eyebrow>Request a consultation</Eyebrow>
                <h2 className="mt-5 text-balance text-4xl font-bold sm:text-5xl">Tell us about your project.</h2>
                <p className="mt-5 text-lg text-[var(--brand-dark)]/70">We provide tailored solutions based on your operational and energy needs.</p>
              </div>
              <div className="flex flex-wrap gap-4 lg:justify-end">
                <Link to="/contact" className="inline-flex items-center gap-3 rounded-full bg-[var(--brand-dark)] px-7 py-4 text-sm font-semibold text-white transition hover:bg-[var(--brand-blue)]">
                  Get a technical quote <ArrowRight className="h-4 w-4" />
                </Link>
                <Link to="/products" className="inline-flex items-center gap-2 rounded-full border border-[var(--brand-dark)]/15 bg-white px-7 py-4 text-sm font-semibold transition hover:border-[var(--brand-blue)]">
                  Browse products
                </Link>
              </div>
            </div>
          </div>
        </Reveal>
      </Section>
    </>
  );
}
