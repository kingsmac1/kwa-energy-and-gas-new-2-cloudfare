import {
  HeadContent,
  Outlet,
  Scripts,
  createRootRoute,
  useRouterState,
} from "@tanstack/react-router";
import type { ReactNode } from "react";
import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";
import { Preloader } from "@/components/site/Preloader";
import appCss from "@/styles.css?url";


export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        title:
          "Kwa Gas and Energy Company Limited — Powering Africa's Energy Future",
      },
      {
        name: "description",
        content:
          "Integrated energy infrastructure and industrial solutions across oil & gas, CNG/LPG/LNG, EV mobility, solar, hydrogen and power generation across Africa.",
      },
      { name: "author", content: "Kwa Gas and Energy Company Limited" },
      {
        property: "og:title",
        content: "Kwa Gas and Energy Company Limited",
      },
      {
        property: "og:description",
        content:
          "Integrated energy infrastructure and industrial solutions across Africa — oil & gas, CNG, LPG, LNG, EV, solar, hydrogen and turbines.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
    links: [
      { rel: "icon", type: "image/png", href: "/kwa-icon.png" },
      { rel: "apple-touch-icon", href: "/kwa-icon.png" },
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      {
        rel: "preconnect",
        href: "https://fonts.gstatic.com",
        crossOrigin: "anonymous",
      },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=Inter:wght@300;400;500;600;700&display=swap",
      },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "Kwa Gas and Energy Company Limited",
          telephone: "+234 703 549 6294",
          email: "info@kwagasandenergy.com",
          address: {
            "@type": "PostalAddress",
            addressLocality: "Uyo",
            addressRegion: "Akwa Ibom",
            addressCountry: "NG",
          },
        }),
      },
    ],
  }),
  component: RootComponent,
  notFoundComponent: NotFound,
});

function RootDocument({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const isLoading = useRouterState({ select: (s) => s.status === "pending" });
  return (
    <RootDocument>
      <Preloader />
      <div className="flex min-h-screen flex-col bg-[var(--brand-bg)]">
        <SiteHeader />
        <main className="flex-1" data-loading={isLoading}>
          <Outlet />
        </main>
        <SiteFooter />
      </div>
    </RootDocument>
  );
}

function NotFound() {
  return (
    <RootDocument>
      <div className="flex min-h-screen flex-col bg-[var(--brand-bg)]">
        <SiteHeader />
        <main className="flex flex-1 items-center justify-center">
          <div className="container-x py-32 text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[var(--brand-blue)]">
              404
            </p>
            <h1 className="mt-6 text-5xl font-bold text-[var(--brand-dark)] sm:text-7xl">
              Page not found.
            </h1>
            <p className="mt-6 text-lg text-[var(--brand-dark)]/65">
              The page you're looking for doesn't exist or has been moved.
            </p>
            <a
              href="/"
              className="mt-10 inline-flex items-center gap-2 rounded-full bg-[var(--brand-dark)] px-7 py-4 text-sm font-semibold text-white transition hover:bg-[var(--brand-blue)]"
            >
              Back to home
            </a>
          </div>
        </main>
        <SiteFooter />
      </div>
    </RootDocument>
  );
}
