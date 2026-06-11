import { Link } from "react-router-dom";
import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col bg-[var(--brand-bg)]">
      <main className="flex flex-1 items-center justify-center">
        <div className="container-x py-32 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[var(--brand-blue)]">404</p>
          <h1 className="mt-6 text-5xl font-bold text-[var(--brand-dark)] sm:text-7xl">Page not found.</h1>
          <p className="mt-6 text-lg text-[var(--brand-dark)]/65">The page you're looking for doesn't exist or has been moved.</p>
          <Link to="/" className="mt-10 inline-flex items-center gap-2 rounded-full bg-[var(--brand-dark)] px-7 py-4 text-sm font-semibold text-white transition hover:bg-[var(--brand-blue)]">
            Back to home
          </Link>
        </div>
      </main>
    </div>
  );
}
