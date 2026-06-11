import { Link, useNavigate } from "react-router-dom";

import { motion } from "framer-motion";
import { ShieldCheck, Target, Flag, Sparkles, Users, Globe2, Layers, Award, Leaf, ArrowRight } from "lucide-react";
import { Section, Eyebrow } from "@/components/site/Section";
import { Reveal, Stagger, StaggerItem } from "@/components/site/Reveal";


const VALUES = [
  { icon: ShieldCheck, title: "Reliability", desc: "We deliver consistent, dependable, high-performance energy solutions." },
  { icon: Award, title: "Integrity", desc: "Transparency, accountability and ethical business practices in every engagement." },
  { icon: Target, title: "Safety First", desc: "We prioritize the safety of people, assets and the environment in all operations." },
  { icon: Sparkles, title: "Excellence", desc: "Technical competence, quality delivery and continuous improvement." },
  { icon: Layers, title: "Innovation", desc: "Embracing emerging energy technologies and scalable infrastructure solutions." },
];

const SERVES = [
  { title: "International Oil Companies & Indigenous Operators", desc: "Robust supply chains and technical manpower for upstream, midstream and downstream operations." },
  { title: "EPC Contractors & Industrial Facilities", desc: "Integrated CNG/LPG/LNG gas networks and full plant maintenance services." },
  { title: "Government Institutions & Energy Investors", desc: "Utility-scale solar projects, EV infrastructure and hydrogen framework strategies." },
];

const HSSE = ["Zero Fatalities", "Zero Lost Time Injuries (LTI)", "Zero Property Damage", "Environmental Protection & Regulatory Compliance"];

export default function AboutPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-[var(--brand-bg)] pt-10 pb-20">
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute right-0 top-0 h-[30rem] w-[30rem] rounded-full bg-[var(--brand-blue)]/15 blur-3xl" />
        </div>
        <div className="container-x">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="max-w-4xl">
            <Eyebrow>About us</Eyebrow>
            <h1 className="mt-6 text-balance text-5xl font-bold leading-[1.05] text-[var(--brand-dark)] sm:text-7xl">
              Indigenous expertise. <span className="text-[var(--brand-blue)]">Global standards.</span>
            </h1>
            <p className="mt-8 max-w-3xl text-lg leading-relaxed text-[var(--brand-dark)]/70 sm:text-xl">
              Kwa Gas and Energy Company Limited is an indigenous Nigerian integrated energy infrastructure and industrial solutions company. We bridge the gap between traditional energy systems and tomorrow's clean energy transition — across oil and gas, gas infrastructure, EV mobility, solar, hydrogen and large-scale industrial turbines.
            </p>
            <p className="mt-4 max-w-3xl text-sm text-[var(--brand-dark)]/55">
              Duly incorporated under the Companies and Allied Matters Act (CAMA) and registered with the Corporate Affairs Commission (CAC) — Registration Number RC 7971986.
            </p>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.8 }} className="mt-16 overflow-hidden rounded-3xl">
            <img src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=2400&q=80" alt="Industrial energy operations site" className="h-[28rem] w-full object-cover" />
          </motion.div>
        </div>
      </section>

      <Section tone="white">
        <div className="grid gap-12 lg:grid-cols-12">
          <Reveal className="lg:col-span-5">
            <Eyebrow>The challenge</Eyebrow>
            <h2 className="mt-5 text-4xl font-bold sm:text-5xl">Solving Africa's critical energy challenge.</h2>
          </Reveal>
          <Reveal delay={0.15} className="lg:col-span-7 space-y-6 text-lg text-[var(--brand-dark)]/75">
            <p>We exist to solve one foundational issue: <strong className="text-[var(--brand-dark)]">how industries, governments, and organizations access reliable, affordable, and sustainable energy systems that drive productivity and growth.</strong></p>
            <p>Rather than functioning merely as a vendor, Kwa Gas operates as a solutions-driven energy partner. We address systemic infrastructure deficits by engineering highly efficient delivery models — ensuring localized power, fuel networks and procurement supply chains remain resilient and operational.</p>
          </Reveal>
        </div>
      </Section>

      <Section tone="light">
        <div className="max-w-3xl">
          <Eyebrow>Who we serve</Eyebrow>
          <h2 className="mt-5 text-4xl font-bold sm:text-5xl">Supporting upstream, midstream and downstream operations.</h2>
        </div>
        <Stagger className="mt-14 grid gap-5 md:grid-cols-3">
          {SERVES.map((s) => (
            <StaggerItem key={s.title} className="rounded-3xl border border-[var(--brand-dark)]/10 bg-white p-7">
              <Users className="h-6 w-6 text-[var(--brand-blue)]" />
              <h3 className="mt-4 text-lg font-semibold">{s.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-[var(--brand-dark)]/65">{s.desc}</p>
            </StaggerItem>
          ))}
        </Stagger>
      </Section>

      <Section tone="dark">
        <div className="grid gap-10 lg:grid-cols-2">
          <Reveal className="rounded-3xl border border-white/10 bg-white/[0.04] p-10">
            <Flag className="h-8 w-8 text-[var(--brand-green)]" />
            <h3 className="mt-6 text-3xl font-bold text-white">Our Vision</h3>
            <p className="mt-5 text-lg leading-relaxed text-white/75">To become Africa's most trusted integrated energy infrastructure and industrial solutions partner — recognized for excellence in oil and gas services, gas and clean energy infrastructure development, technical competence, safety leadership and operational integrity.</p>
          </Reveal>
          <Reveal delay={0.1} className="rounded-3xl border border-white/10 bg-white/[0.04] p-10">
            <Target className="h-8 w-8 text-[var(--brand-green)]" />
            <h3 className="mt-6 text-3xl font-bold text-white">Our Mission</h3>
            <p className="mt-5 text-lg leading-relaxed text-white/75">To deliver reliable, safe and high-quality integrated energy solutions across oil and gas, gas infrastructure (CNG & LPG), LNG systems, renewable energy, hydrogen technologies and industrial power systems — through efficient procurement, skilled manpower deployment and world-class technical support.</p>
          </Reveal>
        </div>
      </Section>

      <Section tone="white">
        <div className="max-w-3xl">
          <Eyebrow>Core values</Eyebrow>
          <h2 className="mt-5 text-4xl font-bold sm:text-5xl">The principles that govern every project.</h2>
        </div>
        <Stagger className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {VALUES.map(({ icon: Icon, title, desc }) => (
            <StaggerItem key={title} className="rounded-3xl border border-[var(--brand-dark)]/10 bg-[var(--brand-bg)] p-6">
              <Icon className="h-7 w-7 text-[var(--brand-blue)]" />
              <h3 className="mt-5 text-lg font-semibold">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-[var(--brand-dark)]/65">{desc}</p>
            </StaggerItem>
          ))}
        </Stagger>
      </Section>

      <Section tone="light">
        <div className="grid gap-12 lg:grid-cols-12">
          <Reveal className="lg:col-span-5">
            <Eyebrow>HSSE</Eyebrow>
            <h2 className="mt-5 text-4xl font-bold leading-tight sm:text-5xl">Safety is not a priority. <span className="text-[var(--brand-blue)]">It is our culture.</span></h2>
            <p className="mt-6 text-lg text-[var(--brand-dark)]/70">We maintain a zero-tolerance approach to unsafe acts and conditions. Our HSSE Management System is designed to achieve consistent operational excellence across every project.</p>
          </Reveal>
          <Stagger className="lg:col-span-7 grid gap-4 sm:grid-cols-2">
            {HSSE.map((h) => (
              <StaggerItem key={h} className="rounded-2xl border border-[var(--brand-dark)]/10 bg-white p-6">
                <div className="font-display text-3xl font-bold text-[var(--brand-blue)]">100%</div>
                <p className="mt-2 text-base font-semibold">{h}</p>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </Section>

      <Section tone="white">
        <div className="grid gap-10 lg:grid-cols-2">
          <Reveal className="rounded-3xl bg-[var(--brand-bg)] p-10">
            <Globe2 className="h-8 w-8 text-[var(--brand-blue)]" />
            <h3 className="mt-6 text-2xl font-bold">Local Content Commitment</h3>
            <p className="mt-4 text-[var(--brand-dark)]/70">Kwa Gas fully supports the objectives of the Nigerian Oil and Gas Industry Content Development Act.</p>
            <ul className="mt-6 space-y-3 text-sm">
              {["Employing Nigerian professionals & developing local talent", "Supporting indigenous vendors", "Structured knowledge transfer and capacity building", "Active community participation and sustainable economic growth"].map((i) => (
                <li key={i} className="flex gap-3"><span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--brand-green)]" /><span>{i}</span></li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={0.1} className="rounded-3xl bg-[var(--brand-bg)] p-10">
            <Leaf className="h-8 w-8 text-[var(--brand-blue)]" />
            <h3 className="mt-6 text-2xl font-bold">Sustainability & CSR</h3>
            <p className="mt-4 text-[var(--brand-dark)]/70">Balancing economic growth with environmental stewardship and social impact.</p>
            <ul className="mt-6 space-y-3 text-sm">
              {["Circular economy practices & resource efficiency", "Climate action advocacy & waste reduction initiatives", "Youth engagement and skills development", "Community development and shared value creation"].map((i) => (
                <li key={i} className="flex gap-3"><span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--brand-green)]" /><span>{i}</span></li>
              ))}
            </ul>
          </Reveal>
        </div>
      </Section>

      <Section tone="white" className="!pt-0">
        <Reveal>
          <div className="rounded-[2rem] bg-[var(--brand-dark)] p-12 text-center sm:p-16">
            <h2 className="text-balance text-4xl font-bold text-white sm:text-5xl">Partner with Kwa Gas and Energy.</h2>
            <p className="mx-auto mt-5 max-w-2xl text-lg text-white/70">Let's discuss how our integrated energy capabilities can support your operations.</p>
            <Link to="/contact" className="mt-8 inline-flex items-center gap-3 rounded-full bg-[var(--brand-green)] px-7 py-4 text-sm font-semibold text-[var(--brand-dark)] transition hover:bg-white">
              Contact us today <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </Reveal>
      </Section>
    </>
  );
}
