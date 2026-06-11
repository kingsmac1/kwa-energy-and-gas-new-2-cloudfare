import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, CheckCircle2, AlertCircle, Loader2, Package, Truck, ShieldCheck } from "lucide-react";
import { z } from "zod";
import { Section } from "@/components/site/Section";
import { PRODUCTS, formatNaira } from "@/data/products";
import { FORMS_CONFIG, isFormsConfigured } from "@/lib/emailjs";

export const Route = createFileRoute("/products_/$id")({
  loader: ({ params }) => {
    const product = PRODUCTS.find((p) => p.id === params.id);
    if (!product) throw notFound();
    return { product };
  },
  head: ({ loaderData }) => {
    const p = loaderData?.product;
    if (!p) return { meta: [{ title: "Product not found — Kwa Gas and Energy" }] };
    return {
      meta: [
        { title: `${p.name} — Kwa Gas and Energy` },
        { name: "description", content: p.shortDescription },
        { property: "og:title", content: p.name },
        { property: "og:description", content: p.shortDescription },
        { property: "og:image", content: p.image },
        { property: "og:type", content: "product" },
      ],
    };
  },
  component: ProductDetailPage,
});

const PurchaseSchema = z.object({
  fullName: z.string().trim().min(2, "Please enter your full name").max(100),
  company: z.string().trim().max(150).optional().or(z.literal("")),
  email: z.string().trim().email("Please enter a valid email").max(255),
  phone: z.string().trim().min(6, "Please enter a valid phone number").max(40),
  quantity: z.coerce.number().int().min(1, "Quantity must be at least 1").max(999),
  deliveryLocation: z.string().trim().min(2, "Please enter delivery location").max(200),
  notes: z.string().trim().max(2000).optional().or(z.literal("")),
});

type Status = { kind: "idle" } | { kind: "loading" } | { kind: "success" } | { kind: "error"; message: string };

function ProductDetailPage() {
  const { product: p } = Route.useLoaderData();
  const [status, setStatus] = useState<Status>({ kind: "idle" });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [qty, setQty] = useState(1);

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const fd = new FormData(form);
    const data = Object.fromEntries(fd.entries());
    const parsed = PurchaseSchema.safeParse(data);
    if (!parsed.success) {
      const fe: Record<string, string> = {};
      for (const issue of parsed.error.issues) {
        const k = String(issue.path[0]);
        if (!fe[k]) fe[k] = issue.message;
      }
      setErrors(fe);
      return;
    }
    setErrors({});

    if (!isFormsConfigured()) {
      setStatus({ kind: "error", message: "Order routing isn't fully configured yet. Please email info@kwaenergyltd.com or call +234 703 549 6294 quoting this product." });
      return;
    }

    setStatus({ kind: "loading" });
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          access_key: FORMS_CONFIG.accessKey,
          subject: `Purchase request: ${p.name}`,
          name: parsed.data.fullName,
          company: parsed.data.company || "—",
          email: parsed.data.email,
          phone: parsed.data.phone,
          product_name: p.name,
          product_id: p.id,
          quantity: String(parsed.data.quantity),
          unit_price: formatNaira(p.price),
          estimated_total: formatNaira(p.price * parsed.data.quantity),
          delivery_location: parsed.data.deliveryLocation,
          notes: parsed.data.notes || "—",
          message: `Purchase request for ${parsed.data.quantity} × ${p.name}. Delivery to ${parsed.data.deliveryLocation}. Notes: ${parsed.data.notes || "none"}.`,
        }),
      });
      if (!res.ok) throw new Error("Failed");
      setStatus({ kind: "success" });
      form.reset();
      setQty(1);
    } catch (err) {
      console.error(err);
      setStatus({ kind: "error", message: "We couldn't submit your order right now. Please try again or contact us directly." });
    }
  }

  return (
    <>
      <section className="bg-[var(--brand-bg)] pt-10 pb-20">
        <div className="container-x">
          <Link to="/products" className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--brand-blue)] hover:underline">
            <ArrowLeft className="h-4 w-4" /> All products
          </Link>

          <div className="mt-10 grid gap-12 lg:grid-cols-2">
            <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="overflow-hidden rounded-3xl">
              <img src={p.image} alt={p.name} className="h-full w-full object-cover" />
            </motion.div>

            <div>
              <div className="flex flex-wrap items-center gap-3 text-xs">
                <span className="rounded-full bg-white px-3 py-1 font-semibold text-[var(--brand-blue)]">{p.category}</span>
                <span className={`rounded-full px-3 py-1 font-semibold ${p.stock === "In Stock" ? "bg-emerald-100 text-emerald-700" : p.stock === "Pre-Order" ? "bg-amber-100 text-amber-700" : "bg-[var(--brand-dark)]/5 text-[var(--brand-dark)]/70"}`}>{p.stock}</span>
              </div>
              <h1 className="mt-5 text-balance text-4xl font-bold leading-tight text-[var(--brand-dark)] sm:text-5xl">{p.name}</h1>
              <p className="mt-5 text-lg text-[var(--brand-dark)]/75">{p.description}</p>

              <div className="mt-8 flex flex-wrap items-end gap-6 rounded-3xl border border-[var(--brand-dark)]/10 bg-white p-6">
                <div>
                  <div className="text-xs uppercase tracking-widest text-[var(--brand-dark)]/50">Price from</div>
                  <div className="mt-1 text-3xl font-bold text-[var(--brand-dark)]">{formatNaira(p.price)}</div>
                  <div className="text-xs text-[var(--brand-dark)]/50">{p.unit}</div>
                </div>
                <div className="flex flex-col gap-2 text-sm">
                  <span className="inline-flex items-center gap-2 text-[var(--brand-dark)]/65"><Truck className="h-4 w-4 text-[var(--brand-blue)]" /> Lead time: {p.leadTime}</span>
                  <span className="inline-flex items-center gap-2 text-[var(--brand-dark)]/65"><ShieldCheck className="h-4 w-4 text-[var(--brand-blue)]" /> Engineered & warrantied</span>
                  <span className="inline-flex items-center gap-2 text-[var(--brand-dark)]/65"><Package className="h-4 w-4 text-[var(--brand-blue)]" /> Site delivery across Africa</span>
                </div>
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                <a href="#request-form" className="group inline-flex items-center gap-3 rounded-2xl bg-[var(--brand-dark)] px-6 py-4 text-sm font-semibold text-white transition hover:bg-[var(--brand-blue)]">
                  Request this product
                  <span className="inline-flex h-7 w-7 items-center justify-center rounded-xl bg-[var(--brand-green)] text-[var(--brand-dark)] transition group-hover:translate-x-0.5">→</span>
                </a>
                <Link to="/contact" className="inline-flex items-center gap-2 rounded-2xl border border-[var(--brand-dark)]/15 bg-white px-6 py-4 text-sm font-semibold text-[var(--brand-dark)] transition hover:border-[var(--brand-blue)] hover:text-[var(--brand-blue)]">
                  Talk to sales
                </Link>
              </div>

              <h2 className="mt-10 text-lg font-semibold">Key features</h2>
              <ul className="mt-4 grid gap-2 sm:grid-cols-2">
                {p.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm text-[var(--brand-dark)]/80">
                    <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--brand-green)]" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>

              <h2 className="mt-10 text-lg font-semibold">Technical specifications</h2>
              <div className="mt-4 overflow-hidden rounded-2xl border border-[var(--brand-dark)]/10">
                <dl className="divide-y divide-[var(--brand-dark)]/10 text-sm">
                  {p.specs.map((s) => (
                    <div key={s.label} className="grid grid-cols-2 bg-white">
                      <dt className="bg-[var(--brand-bg)] px-4 py-3 font-semibold text-[var(--brand-dark)]/70">{s.label}</dt>
                      <dd className="px-4 py-3">{s.value}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Section tone="white" className="!pt-0" id="request-form">
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <h2 className="text-3xl font-bold sm:text-4xl">Submit a purchase request.</h2>
            <p className="mt-4 text-lg text-[var(--brand-dark)]/70">
              Tell us how many units you need and where they're going. There's no online payment — our commercial team will reach out within one business day to confirm specifications, agree commercial terms and arrange logistics.
            </p>
            <div className="mt-8 rounded-3xl bg-[var(--brand-bg)] p-6 text-sm text-[var(--brand-dark)]/75">
              <div className="flex items-center justify-between">
                <span>Unit price</span>
                <span className="font-semibold">{formatNaira(p.price)}</span>
              </div>
              <div className="mt-2 flex items-center justify-between">
                <span>Quantity</span>
                <span className="font-semibold">{qty}</span>
              </div>
              <div className="mt-3 flex items-center justify-between border-t border-[var(--brand-dark)]/10 pt-3 text-base">
                <span className="font-semibold text-[var(--brand-dark)]">Estimated total</span>
                <span className="font-bold text-[var(--brand-blue)]">{formatNaira(p.price * qty)}</span>
              </div>
              <p className="mt-3 text-xs text-[var(--brand-dark)]/50">Indicative only — final pricing depends on configuration, logistics and applicable duties.</p>
            </div>
          </div>

          <form onSubmit={onSubmit} className="lg:col-span-7 rounded-3xl border border-[var(--brand-dark)]/10 bg-[var(--brand-bg)] p-8 sm:p-10">
            <div className="grid gap-5 sm:grid-cols-2">
              <PField label="Full name" name="fullName" error={errors.fullName} required />
              <PField label="Company (optional)" name="company" />
              <PField label="Email address" name="email" type="email" error={errors.email} required />
              <PField label="Phone number" name="phone" error={errors.phone} required />
              <div>
                <label className="block text-xs font-semibold uppercase tracking-widest text-[var(--brand-dark)]/55">Quantity</label>
                <input name="quantity" type="number" min={1} max={999} defaultValue={1} onChange={(e) => setQty(Math.max(1, Number(e.target.value) || 1))} className="mt-2 w-full rounded-2xl border border-[var(--brand-dark)]/10 bg-white px-4 py-3 outline-none focus:border-[var(--brand-blue)]" required />
                {errors.quantity && <p className="mt-2 text-sm text-red-600">{errors.quantity}</p>}
              </div>
              <PField label="Delivery location" name="deliveryLocation" placeholder="City, State, Country" error={errors.deliveryLocation} required />
            </div>
            <div className="mt-5">
              <label className="block text-xs font-semibold uppercase tracking-widest text-[var(--brand-dark)]/55">Notes (optional)</label>
              <textarea name="notes" rows={5} placeholder="Site readiness, required commissioning support, target deployment date, customisations…" className="mt-2 w-full rounded-2xl border border-[var(--brand-dark)]/10 bg-white px-4 py-3 outline-none focus:border-[var(--brand-blue)]" />
            </div>

            <input type="hidden" name="product" value={p.name} />

            <button type="submit" disabled={status.kind === "loading"} className="mt-7 inline-flex items-center gap-3 rounded-full bg-[var(--brand-dark)] px-7 py-4 text-sm font-semibold text-white transition hover:bg-[var(--brand-blue)] disabled:opacity-60">
              {status.kind === "loading" ? (<><Loader2 className="h-4 w-4 animate-spin" /> Submitting…</>) : "Submit purchase request"}
            </button>
            <p className="mt-3 text-xs text-[var(--brand-dark)]/50">No payment is collected online. A Kwa Gas representative will contact you to finalize the order.</p>

            {status.kind === "success" && (
              <div className="mt-6 flex items-start gap-3 rounded-2xl border border-emerald-200 bg-emerald-50 p-4 text-sm text-emerald-800">
                <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0" />
                <span>Thank you — your purchase request has been received. Our commercial team will be in touch within one business day.</span>
              </div>
            )}
            {status.kind === "error" && (
              <div className="mt-6 flex items-start gap-3 rounded-2xl border border-red-200 bg-red-50 p-4 text-sm text-red-800">
                <AlertCircle className="mt-0.5 h-5 w-5 flex-shrink-0" />
                <span>{status.message}</span>
              </div>
            )}
          </form>
        </div>
      </Section>
    </>
  );
}

function PField({ label, name, type = "text", error, required, placeholder }: { label: string; name: string; type?: string; error?: string; required?: boolean; placeholder?: string }) {
  return (
    <div>
      <label className="block text-xs font-semibold uppercase tracking-widest text-[var(--brand-dark)]/55">{label}</label>
      <input name={name} type={type} required={required} placeholder={placeholder} className="mt-2 w-full rounded-2xl border border-[var(--brand-dark)]/10 bg-white px-4 py-3 text-[var(--brand-dark)] outline-none transition focus:border-[var(--brand-blue)]" />
      {error && <p className="mt-2 text-sm text-red-600">{error}</p>}
    </div>
  );
}