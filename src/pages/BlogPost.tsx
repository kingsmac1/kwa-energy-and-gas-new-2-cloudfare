import { Link, useParams } from "react-router-dom";

import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Section } from "@/components/site/Section";
import { BLOG_POSTS } from "@/data/blog";


export default function BlogPostPage() {
  const { slug } = useParams();
  const post = BLOG_POSTS.find((p) => p.slug === slug);
  const others = BLOG_POSTS.filter((p) => p.slug !== post.slug).slice(0, 3);

  return (
    <>
      <article className="bg-[var(--brand-bg)] pt-10 pb-20">
        <div className="container-x">
          <Link to="/blog" className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--brand-blue)] hover:underline">
            <ArrowLeft className="h-4 w-4" /> All articles
          </Link>
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="mx-auto mt-10 max-w-3xl text-center">
            <div className="flex items-center justify-center gap-3 text-xs">
              <span className="rounded-full bg-[var(--brand-dark)] px-3 py-1 font-semibold text-[var(--brand-green)]">{post.date}</span>
              <span className="rounded-full bg-white px-3 py-1 font-semibold text-[var(--brand-blue)]">{post.category}</span>
            </div>
            <h1 className="mt-6 text-balance text-4xl font-bold leading-[1.1] text-[var(--brand-dark)] sm:text-6xl">{post.title}</h1>
            <p className="mt-6 text-lg text-[var(--brand-dark)]/70">{post.excerpt}</p>
          </motion.div>

          <div className="mx-auto mt-12 max-w-5xl overflow-hidden rounded-3xl">
            <img src={post.cover} alt={post.title} className="h-[26rem] w-full object-cover" />
          </div>

          <div className="mx-auto mt-12 max-w-3xl space-y-6 text-lg leading-relaxed text-[var(--brand-dark)]/80">
            {post.body.map((p, i) => <p key={i}>{p}</p>)}
          </div>
        </div>
      </article>

      <Section tone="white">
        <div className="text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-[var(--brand-dark)]/15 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-[var(--brand-blue)]">
            <span className="h-1.5 w-1.5 rounded-full bg-[var(--brand-green)]" /> Insights & Articles
          </span>
          <h2 className="mt-5 text-3xl font-bold sm:text-4xl">Recent blogs</h2>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {others.map((p) => (
            <Link key={p.slug} to={`/blog/${p.slug}`} className="group overflow-hidden rounded-3xl bg-[var(--brand-bg)]">
              <div className="aspect-[4/3] overflow-hidden">
                <img src={p.cover} alt={p.title} loading="lazy" className="h-full w-full object-cover transition duration-700 group-hover:scale-105" />
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between text-xs">
                  <span className="font-semibold text-[var(--brand-blue)]">{p.category}</span>
                  <span className="text-[var(--brand-dark)]/50">{p.date}</span>
                </div>
                <h3 className="mt-3 text-lg font-semibold transition group-hover:text-[var(--brand-blue)]">{p.title}</h3>
              </div>
            </Link>
          ))}
        </div>
        <div className="mt-12 text-center">
          <Link to="/contact" className="inline-flex items-center gap-2 rounded-full bg-[var(--brand-dark)] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[var(--brand-blue)]">
            Discuss your energy project <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </Section>
    </>
  );
}
