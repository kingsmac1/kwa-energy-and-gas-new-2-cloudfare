export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  cover: string;
  body: string[];
}

const modules = import.meta.glob('../content/blog/*.json', { eager: true });

const cmsPosts: BlogPost[] = Object.values(modules).map((mod: any) => ({
  slug: mod.slug,
  title: mod.title,
  excerpt: mod.excerpt,
  category: mod.category,
  date: mod.date,
  readTime: mod.readTime,
  cover: mod.cover,
  body: mod.body,
}));

export const BLOG_POSTS: BlogPost[] = cmsPosts.length > 0 ? cmsPosts : [
  {
    slug: "cng-lpg-infrastructure-africa",
    title: "Why CNG & LPG infrastructure is the bridge to Africa's energy transition",
    excerpt: "Gas infrastructure is the practical, scalable foundation for Africa's industrial growth and clean-energy roadmap.",
    category: "Gas Infrastructure",
    date: "March 4, 2026",
    readTime: "6 min read",
    cover: "https://images.unsplash.com/photo-1581094288338-2314dddb7ece?auto=format&fit=crop&w=1600&q=80",
    body: [
      "Across Sub-Saharan Africa, industrial operators face a familiar bottleneck: power and fuel costs that swing wildly with global markets. CNG and LPG networks offer a path to stabilizing both — domestically sourced, cleaner than diesel, and ready to scale today.",
      "At Kwa Gas and Energy we design Mother & Daughter station networks, gas storage and distribution systems, and fleet fueling infrastructure for industrial users that need predictable energy economics.",
      "The transition is not a binary jump from fossil to renewable. CNG and LPG are the bridge fuels that keep production lines running while solar, hydrogen, and EV infrastructure is layered in — and that bridge has to be engineered with the same discipline as the systems it is supporting.",
    ],
  },
  {
    slug: "ev-mobility-fleet-electrification",
    title: "Fleet electrification: what African operators get wrong about charging strategy",
    excerpt: "Charging is a network design problem, not a hardware purchase. Here's how we model it for commercial fleets.",
    category: "EV Mobility",
    date: "February 18, 2026",
    readTime: "5 min read",
    cover: "https://images.unsplash.com/photo-1593941707882-a5bba14938c7?auto=format&fit=crop&w=1600&q=80",
    body: [
      "Most fleet electrification programs stall not because the vehicles fail but because the charging network was procured before being designed.",
      "Our advisory model starts with route, dwell, and energy density analysis — then layers depot, destination, and on-route charging in the right ratios for the duty cycle.",
      "When done right, electrification cuts opex by 30–55% versus diesel equivalents at current Nigerian energy prices — but only if the underlying network is built around the operation, not the other way around.",
    ],
  },
  {
    slug: "industrial-turbines-refurbishment",
    title: "The case for refurbished industrial turbines in West Africa",
    excerpt: "Refurbished gas and steam turbines deliver utility-grade power at a fraction of new-build lead time.",
    category: "Power Generation",
    date: "January 29, 2026",
    readTime: "7 min read",
    cover: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=1600&q=80",
    body: [
      "Lead time on a new utility-scale turbine has stretched past 30 months for many OEMs. For projects that need power on the ground in 6–9 months, refurbishment is no longer a compromise — it is the strategy.",
      "We source, refurbish, and deploy turbines across four classifications, from small industrial 1MW systems to utility-scale assets above 150MW, with full installation and commissioning support.",
      "Combined with hybrid solar and gas-fired peaking, refurbished turbines give industrial operators a credible, financeable path to firm baseload power.",
    ],
  },
  {
    slug: "hydrogen-feasibility-nigeria",
    title: "Green hydrogen in Nigeria: separating signal from hype",
    excerpt: "Where hydrogen makes sense today, where it doesn't, and what feasibility actually looks like.",
    category: "Hydrogen",
    date: "January 14, 2026",
    readTime: "8 min read",
    cover: "https://images.unsplash.com/photo-1466611653911-95081537e5b7?auto=format&fit=crop&w=1600&q=80",
    body: [
      "Hydrogen is real, but the use cases that actually pencil out in Nigeria today are narrow. We run feasibility studies focused on industrial heat, fertilizer feedstock, and heavy mobility — the places where electrons alone don't deliver.",
      "Our framework looks at renewable resource quality, water availability, offtake economics, and integration with existing gas and grid assets.",
      "Done well, hydrogen is a strategic hedge against carbon-priced exports. Done poorly, it is a press release. The difference is engineering.",
    ],
  },
  {
    slug: "hsse-culture-zero-tolerance",
    title: "Building a zero-tolerance HSSE culture in heavy energy operations",
    excerpt: "Safety isn't a policy document. It's the operating system everything else runs on.",
    category: "HSSE",
    date: "December 20, 2025",
    readTime: "4 min read",
    cover: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=1600&q=80",
    body: [
      "Zero fatalities. Zero LTI. Zero property damage. These are not aspirational slogans — they are the measurable outputs of an HSSE system that is wired into procurement, training, and field execution.",
      "Our culture starts at supplier qualification and ends at post-project audit, with structured incident learnings flowing back into the next mobilization.",
      "Safety is not a priority. It is our culture.",
    ],
  },
  {
    slug: "solar-mini-grids-industrial",
    title: "Solar mini-grids for industrial parks: design lessons from the field",
    excerpt: "What we've learned engineering hybrid solar + battery + gas systems for industrial loads.",
    category: "Solar",
    date: "December 5, 2025",
    readTime: "5 min read",
    cover: "https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=1600&q=80",
    body: [
      "Industrial loads don't behave like residential ones. Step changes, motor inrush, and 24/7 process heat all demand a hybrid architecture that residential solar designs simply don't address.",
      "We size battery storage against actual load profiles, not nameplate ratings, and pair PV with gas-fired backup for true firm capacity.",
      "The result is energy cost reductions of 35–60% with availability metrics that match or exceed grid supply.",
    ],
  },
];