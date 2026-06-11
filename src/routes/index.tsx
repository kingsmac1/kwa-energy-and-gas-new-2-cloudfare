import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Flame,
  Fuel,
  Zap,
  Sun,
  Atom,
  Cog,
  ShieldCheck,
  Truck,
  Building2,
  Globe2,
} from "lucide-react";
import { Section, Eyebrow } from "@/components/site/Section";
import { Reveal, Stagger, StaggerItem } from "@/components/site/Reveal";
import { BLOG_POSTS } from "@/data/blog";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Kwa Gas and Energy — Powering Africa's Energy Future" },
      {
        name: "description",
        content:
          "Integrated energy infrastructure across oil & gas, CNG, LPG, LNG, EV mobility, solar, hydrogen and industrial turbines.",
      },
      {
        property: "og:title",
        content: "Kwa Gas and Energy — Powering Africa's Energy Future",
      },
      {
        property: "og:description",
        content:
          "End-to-end energy infrastructure and industrial solutions across Africa.",
      },
    ],
  }),
  component: HomePage,
});

const SOLUTIONS = [
  { icon: Fuel, title: "Oil & Gas Procurement", desc: "Reliable sourcing and supply-chain solutions across upstream, midstream and downstream operations." },
  { icon: Flame, title: "CNG & LPG Infrastructure", desc: "Mother & daughter stations, gas storage, distribution, compression and fleet fueling systems." },
  { icon: Truck, title: "LNG Fueling Systems", desc: "LNG storage, fueling stations and industrial supply solutions for heavy-duty transport." },
  { icon: Zap, title: "EV Mobility", desc: "Vehicle distribution, fleet electrification and charging deployment across Africa." },
  { icon: Sun, title: "Solar & Hybrid Power", desc: "Commercial and industrial solar systems, hybrid solar + battery installations and mini-grids." },
  { icon: Atom, title: "Hydrogen Energy", desc: "Feasibility studies, green hydrogen integration advisory and mobility planning support." },
  { icon: Cog, title: "Turbines & Power Generation", desc: "Gas and steam turbine sourcing, refurbishment and deployment from 1MW to 150MW+." },
  { icon: ShieldCheck, title: "Industrial Technical Support", desc: "Calibration, maintenance, plant operations support and skilled technical manpower deployment." },
];

const STEPS = [
  { n: "01", title: "Understand the Problem", desc: "We begin by identifying client operational, energy, or infrastructure challenges." },
  { n: "02", title: "Design the Solution", desc: "We develop tailored technical and commercial solutions aligned with project requirements." },
  { n: "03", title: "Deliver Integrated Execution", desc: "We combine procurement, engineering, manpower, logistics and technical expertise." },
  { n: "04", title: "Ensure Safety & Compliance", desc: "All operations are executed under strict HSE and regulatory frameworks." },
  { n: "05", title: "Support Long-Term Performance", desc: "Maintenance, optimization and operational support well after project delivery." },
];

function HomePage() {
  return (
    <>
      <section className="relative overflow-hidden bg-[var(--brand-bg)]">
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute right-[-10%] top-[-10%] h-[40rem] w-[40rem] rounded-full bg-[var(--brand-blue)]/15 blur-3xl" />
          <div className="absolute left-[-15%] bottom-[-10%] h-[36rem] w-[36rem] rounded-full bg-[var(--brand-green)]/15 blur-3xl" />
        </div>

        <div className="mx-auto w-full max-w-[1425px] px-5 sm:px-8 lg:px-12 py-12 lg:py-16">
          <div className="flex items-center gap-3 mb-10">
            <span className="inline-flex items-center gap-2 rounded-full border border-[var(--brand-dark)]/10 bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-[var(--brand-dark)]">
              <span className="inline-block h-2 w-2 rounded-full bg-[var(--brand-green)]" />
              Trusted energy partner
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
            <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }} className="lg:col-span-7">
              <h1 className="text-balance font-bold leading-[1.02] tracking-tight text-[var(--brand-dark)] text-5xl sm:text-6xl lg:text-[72px]" style={{ fontFamily: "var(--font-display)" }}>
                Fueling dreams. <span className="text-[var(--brand-blue)]">Delivering</span> reliable energy solutions.
              </h1>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.15 }} className="lg:col-span-5">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[var(--brand-blue)]">// POWERING AFRICA //</p>
              <p className="mt-5 text-lg leading-relaxed text-[var(--brand-dark)]/75">
                Kwa Gas and Energy Company Limited is an integrated energy infrastructure and industrial solutions company powering Africa's evolving energy landscape.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link to="/services" className="group inline-flex items-center gap-3 rounded-2xl bg-[var(--brand-dark)] px-6 py-4 text-sm font-semibold text-white transition hover:bg-[var(--brand-blue)]">
                  Explore our solutions
                  <span className="inline-flex h-7 w-7 items-center justify-center rounded-xl bg-[var(--brand-green)] text-[var(--brand-dark)] transition group-hover:translate-x-0.5">
                    <ArrowRight className="h-4 w-4" />
                  </span>
                </Link>
                <Link to="/contact" className="inline-flex items-center gap-2 rounded-2xl border border-[var(--brand-dark)]/15 bg-white px-6 py-4 text-sm font-semibold text-[var(--brand-dark)] transition hover:border-[var(--brand-blue)] hover:text-[var(--brand-blue)]">
                  Request a quote
                </Link>
              </div>
            </motion.div>
          </div>

          <div className="mt-12 flex flex-wrap items-center justify-between gap-4 border-t border-[var(--brand-dark)]/10 pt-6 text-xs uppercase tracking-[0.2em] text-[var(--brand-dark)]/60">
            <span>Based in: Uyo, Akwa Ibom, Nigeria</span>
            <span className="hidden sm:inline">Scroll down ↓</span>
            <span>RC 7971986</span>
          </div>
        </div>

      </section>

      <section className="relative overflow-hidden bg-[var(--brand-dark)] text-white py-20 sm:py-28">
        <Reveal>
          <div className="relative">
            <div className="pointer-events-none absolute inset-0 -z-0">
              <img
                src="https://images.unsplash.com/photo-1605331932948-c9a929d8f0e9?auto=format&fit=crop&w=2400&q=80"
                alt=""
                aria-hidden="true"
                className="h-full w-full object-cover opacity-25"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-[var(--brand-dark)] via-[var(--brand-dark)]/85 to-[var(--brand-blue)]/40" />
              <div className="absolute -right-32 -top-32 h-96 w-96 rounded-full bg-[var(--brand-blue)]/30 blur-3xl" />
              <div className="absolute -bottom-40 -left-32 h-96 w-96 rounded-full bg-[var(--brand-green)]/20 blur-3xl" />
            </div>

            <div className="relative container-x grid gap-10 lg:grid-cols-12 lg:gap-16">
              <div className="lg:col-span-7">
                <Eyebrow tone="dark">The core challenge we solve</Eyebrow>
                <h2 className="mt-5 text-balance text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
                  How industries access <span className="text-[var(--brand-green)]">reliable</span>, affordable and sustainable energy.
                </h2>
                <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/75">
                  We put customer operational needs first — combining technical expertise, strong procurement networks, and multi-energy infrastructure capabilities to deliver reliable, safe, and cost-effective energy solutions across Africa's oil, gas, and industrial sectors.
                </p>
                <div className="mt-8 flex flex-wrap gap-3">
                  {[
                    { icon: Globe2, label: "Pan-African footprint" },
                    { icon: ShieldCheck, label: "Safety-first culture" },
                    { icon: Building2, label: "Indigenous + global" },
                  ].map(({ icon: Icon, label }) => (
                    <span key={label} className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm text-white/85 backdrop-blur-sm">
                      <Icon className="h-4 w-4 text-[var(--brand-green)]" /> {label}
                    </span>
                  ))}
                </div>
                <div className="mt-8">
                  <Link to="/about" className="inline-flex items-center gap-2 rounded-full bg-[var(--brand-green)] px-6 py-3 text-sm font-semibold text-[var(--brand-dark)] transition hover:bg-white">
                    Inside Kwa Gas <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
              <div className="lg:col-span-5">
                <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 shadow-2xl shadow-black/30">
                  <img
                    src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=1600&q=80"
                    alt="Industrial energy infrastructure powering Africa"
                    loading="lazy"
                    className="h-64 w-full object-cover sm:h-80 lg:h-full lg:min-h-[420px]"
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-[var(--brand-dark)]/60 via-transparent to-transparent" />
                </div>
              </div>
            </div>

            <div className="relative container-x mt-12 grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
              {[
                { value: "8", label: "Integrated solution pathways" },
                { value: "150MW+", label: "Power generation capability" },
                { value: "100%", label: "HSSE-driven operations" },
                { value: "1", label: "Mission — Africa's energy future" },
              ].map((s) => (
                <div key={s.label} className="rounded-2xl border border-white/10 bg-white/[0.04] p-5 backdrop-blur-sm">
                  <div className="text-3xl font-bold text-white sm:text-4xl" style={{ fontFamily: "var(--font-display)" }}>{s.value}</div>
                  <div className="mt-2 text-xs leading-snug text-white/65 sm:text-sm">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </section>

      <Section tone="light">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <div className="max-w-2xl">
            <Eyebrow>How we do business</Eyebrow>
            <h2 className="mt-5 text-4xl font-bold sm:text-5xl">A five-step delivery model engineered around your operation.</h2>
          </div>
          <Link to="/services" className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--brand-blue)] hover:underline">
            See our services <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
        <Stagger className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-5">
          {STEPS.map((s) => (
            <StaggerItem key={s.n} className="group relative overflow-hidden rounded-3xl border border-[var(--brand-dark)]/10 bg-white p-6">
              <span className="font-display text-4xl font-bold text-[var(--brand-blue)]/80">{s.n}</span>
              <h3 className="mt-5 text-lg font-semibold leading-snug">{s.title}</h3>
              <p className="mt-3 text-sm text-[var(--brand-dark)]/65">{s.desc}</p>
            </StaggerItem>
          ))}
        </Stagger>
      </Section>

      <Section tone="white">
        <div className="max-w-3xl">
          <Eyebrow>Our solution pathways</Eyebrow>
          <h2 className="mt-5 text-4xl font-bold sm:text-5xl">Eight integrated energy & industrial capabilities.</h2>
        </div>
        <Stagger className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {SOLUTIONS.map(({ icon: Icon, title, desc }) => (
            <StaggerItem key={title} className="group rounded-3xl border border-[var(--brand-dark)]/10 bg-[var(--brand-bg)] p-6 transition hover:-translate-y-1 hover:border-[var(--brand-blue)]/30 hover:bg-white">
              <Icon className="h-7 w-7 text-[var(--brand-blue)]" />
              <h3 className="mt-5 text-base font-semibold">{title}</h3>
              <p className="mt-2 text-sm text-[var(--brand-dark)]/65">{desc}</p>
            </StaggerItem>
          ))}
        </Stagger>
        <div className="mt-10 text-center">
          <Link to="/services" className="inline-flex items-center gap-2 rounded-full bg-[var(--brand-dark)] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[var(--brand-blue)]">
            See all services <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </Section>

      <Section tone="dark">
        <div className="grid gap-12 lg:grid-cols-12">
          <Reveal className="lg:col-span-5">
            <Eyebrow tone="dark">Why choose Kwa Gas</Eyebrow>
            <h2 className="mt-5 text-4xl font-bold leading-tight text-white sm:text-5xl">
              A solutions-driven energy partner — <span className="text-[var(--brand-green)]">not just a supplier.</span>
            </h2>
            <p className="mt-6 text-lg text-white/70">
              We engineer and integrate energy systems that power industries, strengthen energy security, and enable businesses to operate more efficiently.
            </p>
            <Link to="/about" className="mt-8 inline-flex items-center gap-2 rounded-full bg-[var(--brand-green)] px-6 py-3 text-sm font-semibold text-[var(--brand-dark)] transition hover:bg-white">
              Inside the company <ArrowRight className="h-4 w-4" />
            </Link>
          </Reveal>
          <Stagger className="lg:col-span-7 grid gap-4 sm:grid-cols-2">
            {[
              ["Skilled & experienced workforce", "Technical specialists trained to international criteria."],
              ["Safety-driven operations", "A culture built entirely around risk mitigation."],
              ["Reliable procurement network", "Global supply chains ensuring authenticated parts."],
              ["Strong local content commitment", "Maximizing domestic value creation."],
              ["Timely project delivery", "Efficient workflows that protect project timelines."],
              ["Regulatory compliance & QA", "Stringent adherence to local and international codes."],
            ].map(([t, d]) => (
              <StaggerItem key={t} className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm">
                <h3 className="text-base font-semibold text-white">{t}</h3>
                <p className="mt-2 text-sm text-white/65">{d}</p>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </Section>

      <Section tone="light">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <div className="max-w-2xl">
            <Eyebrow>Latest insights & updates</Eyebrow>
            <h2 className="mt-5 text-4xl font-bold sm:text-5xl">From the blog.</h2>
            <p className="mt-4 text-lg text-[var(--brand-dark)]/70">Trends, regulatory updates and technological advancements driving Africa's energy market.</p>
          </div>
          <Link to="/blog" className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--brand-blue)] hover:underline">
            All articles <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
        <Stagger className="mt-14 grid gap-6 md:grid-cols-3">
          {BLOG_POSTS.slice(0, 3).map((post) => (
            <StaggerItem key={post.slug}>
              <Link to="/blog/$slug" params={{ slug: post.slug }} className="group block overflow-hidden rounded-3xl bg-white transition hover:shadow-xl hover:shadow-[var(--brand-dark)]/5">
                <div className="aspect-[4/3] overflow-hidden">
                  <img src={post.cover} alt={post.title} className="h-full w-full object-cover transition duration-700 group-hover:scale-105" loading="lazy" />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 text-xs">
                    <span className="rounded-full bg-[var(--brand-bg)] px-3 py-1 font-semibold text-[var(--brand-blue)]">{post.category}</span>
                    <span className="text-[var(--brand-dark)]/50">{post.date}</span>
                  </div>
                  <h3 className="mt-4 text-lg font-semibold leading-snug transition group-hover:text-[var(--brand-blue)]">{post.title}</h3>
                </div>
              </Link>
            </StaggerItem>
          ))}
        </Stagger>
      </Section>

      <Section tone="white" className="!pt-0">
        <Reveal>
          <div className="relative overflow-hidden rounded-[2rem] bg-[var(--brand-dark)] p-10 sm:p-16">
            <div className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full bg-[var(--brand-blue)]/30 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-32 -left-32 h-96 w-96 rounded-full bg-[var(--brand-green)]/20 blur-3xl" />
            <div className="relative grid gap-8 lg:grid-cols-2 lg:items-end">
              <div>
                <Eyebrow tone="dark">Connect with our team</Eyebrow>
                <h2 className="mt-5 text-balance text-4xl font-bold text-white sm:text-5xl">
                  Have a project or operational challenge? <span className="text-[var(--brand-green)]">Let's talk.</span>
                </h2>
              </div>
              <div className="flex flex-wrap items-center gap-4 lg:justify-end">
                <Link to="/contact" className="inline-flex items-center gap-3 rounded-full bg-[var(--brand-green)] px-7 py-4 text-sm font-semibold text-[var(--brand-dark)] transition hover:bg-white">
                  Submit an inquiry <ArrowRight className="h-4 w-4" />
                </Link>
                <a href="tel:+2347035496294" className="inline-flex items-center gap-2 rounded-full border border-white/20 px-7 py-4 text-sm font-semibold text-white transition hover:border-[var(--brand-green)] hover:text-[var(--brand-green)]">
                  +234 703 549 6294
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      </Section>
    </>
  );
}
