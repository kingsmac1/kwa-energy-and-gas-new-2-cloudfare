import { Link, useNavigate } from "react-router-dom";

import { motion } from "framer-motion";
import { useState, type FormEvent } from "react";
import emailjs from "@emailjs/browser";
import { Phone, Mail, MapPin, Clock, Loader2, CheckCircle2, AlertCircle } from "lucide-react";
import { z } from "zod";
import { Section, Eyebrow } from "@/components/site/Section";
import { Reveal } from "@/components/site/Reveal";
import { EMAILJS_CONFIG, isEmailJsConfigured } from "@/lib/emailjs";


const ContactSchema = z.object({
  fullName: z.string().trim().min(2, "Please enter your full name").max(100),
  email: z.string().trim().email("Please enter a valid email").max(255),
  phone: z.string().trim().min(6, "Please enter a valid phone number").max(40),
  subject: z.string().trim().min(2, "Please enter a subject").max(150),
  message: z.string().trim().min(10, "Please share a few more details").max(2000),
});

type Status = { kind: "idle" } | { kind: "loading" } | { kind: "success" } | { kind: "error"; message: string };

export default function ContactPage() {
  const [status, setStatus] = useState<Status>({ kind: "idle" });
  const [errors, setErrors] = useState<Record<string, string>>({});

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = {
      fullName: (form.elements.namedItem("fullName") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      phone: (form.elements.namedItem("phone") as HTMLInputElement).value,
      subject: (form.elements.namedItem("subject") as HTMLInputElement).value,
      message: (form.elements.namedItem("message") as HTMLTextAreaElement).value,
    };

    const parsed = ContactSchema.safeParse(data);
    if (!parsed.success) {
      const fieldErrors: Record<string, string> = {};
      for (const issue of parsed.error.issues) {
        const k = String(issue.path[0]);
        if (!fieldErrors[k]) fieldErrors[k] = issue.message;
      }
      setErrors(fieldErrors);
      return;
    }
    setErrors({});

    if (!isEmailJsConfigured()) {
      setStatus({ kind: "error", message: "Email sending isn't configured yet. Please email info@kwagasandenergy.com or call +234 703 549 6294." });
      return;
    }

    setStatus({ kind: "loading" });
    try {
      await emailjs.send(
        EMAILJS_CONFIG.serviceId!,
        EMAILJS_CONFIG.templateId!,
        { from_name: parsed.data.fullName, from_email: parsed.data.email, phone: parsed.data.phone, subject: parsed.data.subject, message: parsed.data.message },
        { publicKey: EMAILJS_CONFIG.publicKey! },
      );
      setStatus({ kind: "success" });
      form.reset();
    } catch (err) {
      console.error(err);
      setStatus({ kind: "error", message: "We couldn't send your message right now. Please try again or email info@kwagasandenergy.com." });
    }
  }

  return (
    <>
      <section className="bg-[var(--brand-bg)] pt-10 pb-16">
        <div className="container-x">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="max-w-4xl">
            <Eyebrow>Partner with us</Eyebrow>
            <h1 className="mt-6 text-balance text-5xl font-bold leading-[1.05] text-[var(--brand-dark)] sm:text-7xl">
              Let's build reliable energy <span className="text-[var(--brand-blue)]">solutions</span> together.
            </h1>
            <p className="mt-8 max-w-3xl text-lg text-[var(--brand-dark)]/70 sm:text-xl">
              Whether you require technical manpower, procurement support, calibration services, gas infrastructure development or maintenance solutions, Kwa Gas and Energy Company Limited is ready to support your operations across Africa.
            </p>
          </motion.div>
        </div>
      </section>

      <Section tone="white" className="!pt-0">
        <div className="grid gap-12 lg:grid-cols-12">
          <Reveal className="lg:col-span-5">
            <h2 className="text-3xl font-bold">Contact information</h2>
            <p className="mt-3 text-[var(--brand-dark)]/65">Our technical team will respond within one business day.</p>

            <ul className="mt-10 space-y-6 text-base">
              <li className="flex gap-4">
                <Phone className="mt-1 h-5 w-5 text-[var(--brand-blue)]" />
                <div>
                  <div className="text-xs font-semibold uppercase tracking-widest text-[var(--brand-dark)]/50">Phone</div>
                  <a href="tel:+2347035496294" className="mt-1 block text-lg font-semibold hover:text-[var(--brand-blue)]">+234 703 549 6294</a>
                </div>
              </li>
              <li className="flex gap-4">
                <Mail className="mt-1 h-5 w-5 text-[var(--brand-blue)]" />
                <div>
                  <div className="text-xs font-semibold uppercase tracking-widest text-[var(--brand-dark)]/50">Email</div>
                  <a href="mailto:info@kwagasandenergy.com" className="mt-1 block text-lg font-semibold hover:text-[var(--brand-blue)]">info@kwagasandenergy.com</a>
                </div>
              </li>
              <li className="flex gap-4">
                <MapPin className="mt-1 h-5 w-5 text-[var(--brand-blue)]" />
                <div>
                  <div className="text-xs font-semibold uppercase tracking-widest text-[var(--brand-dark)]/50">Headquarters</div>
                  <p className="mt-1 text-lg font-semibold">Uyo, Akwa Ibom State, Nigeria</p>
                </div>
              </li>
              <li className="flex gap-4">
                <Clock className="mt-1 h-5 w-5 text-[var(--brand-blue)]" />
                <div>
                  <div className="text-xs font-semibold uppercase tracking-widest text-[var(--brand-dark)]/50">Office hours</div>
                  <p className="mt-1 text-lg font-semibold">Mon – Fri · 8:00 AM – 5:00 PM WAT</p>
                </div>
              </li>
            </ul>

            <div className="mt-10 overflow-hidden rounded-3xl border border-[var(--brand-dark)]/10">
              <iframe
                title="Kwa Gas and Energy office location — Uyo"
                src="https://www.google.com/maps?q=Uyo,+Akwa+Ibom,+Nigeria&output=embed"
                className="h-72 w-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </Reveal>

          <Reveal delay={0.15} className="lg:col-span-7">
            <form onSubmit={onSubmit} className="rounded-3xl border border-[var(--brand-dark)]/10 bg-[var(--brand-bg)] p-8 sm:p-10">
              <div className="grid gap-5 sm:grid-cols-2">
                <Field label="Full name" name="fullName" error={errors.fullName} />
                <Field label="Email address" name="email" type="email" error={errors.email} />
                <Field label="Phone number" name="phone" error={errors.phone} />
                <Field label="Subject" name="subject" error={errors.subject} />
              </div>
              <div className="mt-5">
                <label className="block text-xs font-semibold uppercase tracking-widest text-[var(--brand-dark)]/55">Project details</label>
                <textarea name="message" rows={6} className="mt-2 w-full rounded-2xl border border-[var(--brand-dark)]/10 bg-white px-4 py-3 text-[var(--brand-dark)] outline-none transition focus:border-[var(--brand-blue)]" placeholder="Briefly describe your operational need, project scope or technical requirement." />
                {errors.message && <p className="mt-2 text-sm text-red-600">{errors.message}</p>}
              </div>

              <button type="submit" disabled={status.kind === "loading"} className="mt-7 inline-flex items-center gap-3 rounded-full bg-[var(--brand-dark)] px-7 py-4 text-sm font-semibold text-white transition hover:bg-[var(--brand-blue)] disabled:opacity-60">
                {status.kind === "loading" ? (<><Loader2 className="h-4 w-4 animate-spin" /> Sending…</>) : "Send message"}
              </button>

              {status.kind === "success" && (
                <div className="mt-6 flex items-start gap-3 rounded-2xl border border-emerald-200 bg-emerald-50 p-4 text-sm text-emerald-800">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0" />
                  <span>Thank you — your message has been received. Our team will reach out within one business day.</span>
                </div>
              )}
              {status.kind === "error" && (
                <div className="mt-6 flex items-start gap-3 rounded-2xl border border-red-200 bg-red-50 p-4 text-sm text-red-800">
                  <AlertCircle className="mt-0.5 h-5 w-5 flex-shrink-0" />
                  <span>{status.message}</span>
                </div>
              )}
            </form>
          </Reveal>
        </div>
      </Section>
    </>
  );
}

function Field({ label, name, type = "text", error }: { label: string; name: string; type?: string; error?: string }) {
  return (
    <div>
      <label className="block text-xs font-semibold uppercase tracking-widest text-[var(--brand-dark)]/55">{label}</label>
      <input name={name} type={type} className="mt-2 w-full rounded-2xl border border-[var(--brand-dark)]/10 bg-white px-4 py-3 text-[var(--brand-dark)] outline-none transition focus:border-[var(--brand-blue)]" />
      {error && <p className="mt-2 text-sm text-red-600">{error}</p>}
    </div>
  );
}
