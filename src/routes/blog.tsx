import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Section, Eyebrow } from "@/components/site/Section";
import { Stagger, StaggerItem } from "@/components/site/Reveal";
import { BLOG_POSTS } from "@/data/blog";

export const Route = createFileRoute("/blog")({
  head: () => ({
    meta: [
      { title: "Insights & Blog — Kwa Gas and Energy" },
      { name: "description", content: "Trends, regulatory updates and technological advancements driving Africa's energy market — from CNG and LPG to hydrogen, EV mobility and industrial power generation." },
      { property: "og:title", content: "Insights & Blog — Kwa Gas and Energy" },
      { property: "og:description", content: "Articles on Africa's energy infrastructure, transition fuels and industrial power." },
    ],
  }),
  component: BlogIndex,
});

function BlogIndex() {
  const [featured, ...rest] = BLOG_POSTS;
  return (
    <>
      <section className="bg-[var(--brand-bg)] pt-10 pb-16">
        <div className="container-x">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="max-w-3xl">
            <Eyebrow>Insights & updates</Eyebrow>
            <h1 className="mt-6 text-balance text-5xl font-bold leading-[1.05] text-[var(--brand-dark)] sm:text-7xl">From the blog.</h1>
            <p className="mt-6 text-lg text-[var(--brand-dark)]/70">Stay informed on the latest trends, regulatory updates and technological advancements driving Africa's energy market.</p>
          </motion.div>
        </div>
      </section>

      <Section tone="white" className="!pt-0">
        <Link to="/blog/$slug" params={{ slug: featured.slug }} className="group grid gap-8 overflow-hidden rounded-3xl bg-[var(--brand-bg)] lg:grid-cols-2">
          <div className="aspect-[4/3] overflow-hidden lg:aspect-auto">
            <img src={featured.cover} alt={featured.title} className="h-full w-full object-cover transition duration-700 group-hover:scale-105" />
          </div>
          <div className="flex flex-col justify-center p-8 lg:p-12">
            <div className="flex items-center gap-3 text-xs">
              <span className="rounded-full bg-[var(--brand-dark)] px-3 py-1 font-semibold text-[var(--brand-green)]">Featured</span>
              <span className="rounded-full bg-white px-3 py-1 font-semibold text-[var(--brand-blue)]">{featured.category}</span>
              <span className="text-[var(--brand-dark)]/50">{featured.date}</span>
            </div>
            <h2 className="mt-5 text-3xl font-bold leading-tight transition group-hover:text-[var(--brand-blue)] sm:text-4xl">{featured.title}</h2>
            <p className="mt-4 text-[var(--brand-dark)]/70">{featured.excerpt}</p>
            <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[var(--brand-blue)]">Read article →</span>
          </div>
        </Link>

        <Stagger className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {rest.map((post) => (
            <StaggerItem key={post.slug}>
              <Link to="/blog/$slug" params={{ slug: post.slug }} className="group block overflow-hidden rounded-3xl bg-[var(--brand-bg)] transition hover:shadow-xl hover:shadow-[var(--brand-dark)]/5">
                <div className="aspect-[4/3] overflow-hidden">
                  <img src={post.cover} alt={post.title} loading="lazy" className="h-full w-full object-cover transition duration-700 group-hover:scale-105" />
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between text-xs">
                    <span className="rounded-full bg-white px-3 py-1 font-semibold text-[var(--brand-blue)]">{post.category}</span>
                    <span className="text-[var(--brand-dark)]/50">{post.date}</span>
                  </div>
                  <h3 className="mt-4 text-lg font-semibold transition group-hover:text-[var(--brand-blue)]">{post.title}</h3>
                  <p className="mt-3 text-sm text-[var(--brand-dark)]/65 line-clamp-3">{post.excerpt}</p>
                </div>
              </Link>
            </StaggerItem>
          ))}
        </Stagger>
      </Section>
    </>
  );
}
