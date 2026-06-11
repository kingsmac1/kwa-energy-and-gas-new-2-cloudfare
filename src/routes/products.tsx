import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowRight, Package } from "lucide-react";
import { Section, Eyebrow } from "@/components/site/Section";
import { Stagger, StaggerItem } from "@/components/site/Reveal";
import { PRODUCTS, formatNaira } from "@/data/products";

export const Route = createFileRoute("/products")({
  head: () => ({
    meta: [
      { title: "Products — Kwa Gas and Energy" },
      { name: "description", content: "Browse Kwa Gas and Energy's catalogue: CNG and LPG infrastructure skids, LNG ISO tanks, solar hybrid systems, EV chargers and refurbished industrial turbines." },
      { property: "og:title", content: "Products — Kwa Gas and Energy" },
      { property: "og:description", content: "Energy infrastructure & equipment available to order across Africa." },
    ],
  }),
  component: ProductsPage,
});

function ProductsPage() {
  return (
    <>
      <section className="bg-[var(--brand-bg)] pt-10 pb-16">
        <div className="container-x">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="max-w-4xl">
            <Eyebrow>Catalogue</Eyebrow>
            <h1 className="mt-6 text-balance text-5xl font-bold leading-[1.05] text-[var(--brand-dark)] sm:text-7xl">
              Energy infrastructure, <span className="text-[var(--brand-blue)]">ready to deploy.</span>
            </h1>
            <p className="mt-8 max-w-3xl text-lg text-[var(--brand-dark)]/70 sm:text-xl">
              Pre-engineered, fully integrated equipment packages — from CNG mother stations to refurbished turbines and DC fast chargers. Submit an order request and our commercial team will contact you to confirm specifications and logistics.
            </p>
          </motion.div>
        </div>
      </section>

      <Section tone="white" className="!pt-4">
        <Stagger className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {PRODUCTS.map((p) => (
            <StaggerItem key={p.id}>
              <Link to="/products/$id" params={{ id: p.id }} className="group flex h-full flex-col overflow-hidden rounded-3xl border border-[var(--brand-dark)]/10 bg-[var(--brand-bg)] transition hover:-translate-y-1 hover:shadow-2xl hover:shadow-[var(--brand-dark)]/5">
                <div className="aspect-[4/3] overflow-hidden">
                  <img src={p.image} alt={p.name} loading="lazy" className="h-full w-full object-cover transition duration-700 group-hover:scale-105" />
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <div className="flex items-center justify-between text-xs">
                    <span className="rounded-full bg-white px-3 py-1 font-semibold text-[var(--brand-blue)]">{p.category}</span>
                    <span className={`rounded-full px-3 py-1 font-semibold ${p.stock === "In Stock" ? "bg-emerald-100 text-emerald-700" : p.stock === "Pre-Order" ? "bg-amber-100 text-amber-700" : "bg-[var(--brand-dark)]/5 text-[var(--brand-dark)]/70"}`}>{p.stock}</span>
                  </div>
                  <h3 className="mt-4 text-lg font-semibold leading-snug transition group-hover:text-[var(--brand-blue)]">{p.name}</h3>
                  <p className="mt-3 line-clamp-2 text-sm text-[var(--brand-dark)]/65">{p.shortDescription}</p>
                  <div className="mt-auto flex items-end justify-between pt-6">
                    <div>
                      <div className="text-xs uppercase tracking-widest text-[var(--brand-dark)]/50">From</div>
                      <div className="text-xl font-bold text-[var(--brand-dark)]">{formatNaira(p.price)}</div>
                      <div className="text-xs text-[var(--brand-dark)]/50">{p.unit}</div>
                    </div>
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-[var(--brand-dark)] text-white transition group-hover:bg-[var(--brand-blue)]">
                      <ArrowRight className="h-4 w-4" />
                    </span>
                  </div>
                </div>
              </Link>
            </StaggerItem>
          ))}
        </Stagger>

        <div className="mt-16 flex items-center gap-4 rounded-3xl border border-[var(--brand-dark)]/10 bg-[var(--brand-bg)] p-6 sm:p-8">
          <Package className="h-8 w-8 flex-shrink-0 text-[var(--brand-blue)]" />
          <div className="text-sm text-[var(--brand-dark)]/70">
            <strong className="block text-[var(--brand-dark)]">Need something custom?</strong>
            Our engineering team builds bespoke energy infrastructure packages on request — talk to us about your project.
          </div>
        </div>
      </Section>
    </>
  );
}
