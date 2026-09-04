import type { Metadata } from "next";
import Link from "next/link";

const cases = {
  queuewise: {
    name: "QueueWise",
    eyebrow: "CASE STUDY · CIVIC TECH",
    tagline: "Know the queue before you go.",
    description: "A community-powered queue tracker for everyday public services, built around fresh reports and transparent estimates.",
    live: "https://queuewise-app.vercel.app",
    source: "https://github.com/kogleshofficial-hub/queuewise",
    stack: ["Next.js", "Supabase", "PostgreSQL", "OpenStreetMap", "Vercel"],
    sections: [
      ["The problem", "Waiting at clinics, banks, government offices and other services can be unpredictable. QueueWise is designed around a simple idea: give people a clearer picture using recent observations from the community."],
      ["The product approach", "The experience focuses on real places, fresh community reports and transparent estimates rather than presenting made-up precision. The goal is useful information that communicates its limits clearly."],
      ["Engineering focus", "The published stack includes Next.js, Supabase, PostgreSQL and OpenStreetMap. That combination puts the project at the intersection of application UI, persistent data, location-aware experiences and deployment."],
      ["What makes it real", "QueueWise is not presented as a static mockup. It has a public deployment and a public source repository, so the implementation can be inspected and the product can be tested directly."],
      ["What I would improve next", "The next layer of work is deeper measurement: freshness rules, duplicate-report handling, clearer confidence signals, performance profiling and stronger observability. Those decisions should be driven by real usage rather than invented metrics."],
    ],
  },
  beforeyougo: {
    name: "BeforeYouGo",
    eyebrow: "CASE STUDY · UTILITY",
    tagline: "Prepare before you go.",
    description: "A practical checklist experience for visits, travel and important tasks, with private browser-based workspaces.",
    live: "https://beforeyougo-gray.vercel.app",
    source: "https://github.com/kogleshofficial-hub/beforeyougo",
    stack: ["Next.js", "TypeScript", "Local Storage", "SEO", "Vercel"],
    sections: [
      ["The problem", "Preparation tasks are easy to forget when they are scattered across notes, messages and memory. BeforeYouGo turns that preparation into a focused checklist flow."],
      ["The product approach", "The product is intentionally lightweight: create a checklist, work through it and keep the workspace private in the browser. The experience is designed around completing the task rather than adding unnecessary complexity."],
      ["Engineering focus", "The published stack includes Next.js, TypeScript and browser Local Storage, with SEO and Vercel as part of the delivery surface. This makes the project a useful exercise in client-side persistence, typed UI and product-focused UX."],
      ["What makes it real", "The application has a public deployment and public source repository. That makes the project testable rather than relying only on screenshots or a design prototype."],
      ["What I would improve next", "Future iterations could explore import/export, richer checklist templates, accessibility audits, stronger empty states and performance measurement while preserving the simple core workflow."],
    ],
  },
  foodloop: {
    name: "FoodLoop",
    eyebrow: "CASE STUDY · SOCIAL IMPACT",
    tagline: "Turn surplus into something useful.",
    description: "A food-rescue platform connecting surplus food with people who can use it through real accounts, listings and request workflows.",
    live: "https://food-loop-app.vercel.app",
    source: "https://github.com/kogleshofficial-hub/FoodLoop",
    stack: ["Next.js", "Supabase", "PostgreSQL", "Vercel"],
    sections: [
      ["The problem", "Surplus food and people who could use it do not automatically meet. FoodLoop explores a product workflow that makes that connection possible through listings and requests."],
      ["The product approach", "The platform is built around real accounts, food listings and request workflows. Those pieces make the product closer to a real multi-user service than a single-user demo."],
      ["Engineering focus", "The published stack includes Next.js, Supabase and PostgreSQL. That creates a strong foundation for authentication, relational data and application workflows while keeping deployment straightforward."],
      ["What makes it real", "FoodLoop has a public deployment and public source repository. The project can therefore be tested, inspected and iterated on as an actual product."],
      ["What I would improve next", "The next stage should focus on trust and reliability: clearer listing states, safer request transitions, better edge-case handling, stronger validation, accessibility and measured performance."],
    ],
  },
};

type Slug = keyof typeof cases;

export function generateStaticParams() {
  return Object.keys(cases).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const item = cases[slug as Slug];
  return item ? { title: `${item.name} — Case Study`, description: item.description } : { title: "Case Study" };
}

export default async function CaseStudy({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const item = cases[slug as Slug];

  if (!item) {
    return <main className="min-h-screen bg-[#050505] px-6 py-24 text-white"><div className="mx-auto max-w-4xl"><p className="text-xs text-white/30">404 · CASE STUDY NOT FOUND</p><h1 className="mt-6 text-5xl font-semibold tracking-[-0.06em]">That project page doesn&apos;t exist.</h1><Link href="/" className="mt-10 inline-block rounded-full border border-white/10 px-5 py-3 text-sm text-white/60 hover:text-white">Back to portfolio</Link></div></main>;
  }

  return (
    <main className="min-h-screen overflow-x-hidden bg-[#050505] text-white selection:bg-white/20">
      <div className="pointer-events-none fixed inset-0 opacity-70" style={{ background: "radial-gradient(600px circle at 70% 10%, rgba(255,255,255,.07), transparent 65%)" }} />
      <div className="pointer-events-none fixed inset-0 bg-[linear-gradient(rgba(255,255,255,.018)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.018)_1px,transparent_1px)] bg-[size:72px_72px]" />
      <div className="relative z-10 mx-auto max-w-5xl px-6 py-8 lg:px-10">
        <div className="flex items-center justify-between"><Link href="/" className="text-xs text-white/40 transition hover:text-white">← Back to portfolio</Link><span className="font-mono text-[9px] uppercase tracking-[0.2em] text-white/20">KRM / {item.name}</span></div>
        <header className="border-b border-white/[0.08] pb-20 pt-28"><p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-white/25">{item.eyebrow}</p><h1 className="mt-7 max-w-4xl text-6xl font-semibold tracking-[-0.075em] sm:text-8xl">{item.name}</h1><p className="mt-7 max-w-3xl text-2xl leading-9 text-white/45">{item.tagline}</p><p className="mt-6 max-w-2xl text-sm leading-7 text-white/30">{item.description}</p><div className="mt-10 flex flex-wrap gap-3"><a href={item.live} target="_blank" rel="noopener noreferrer" className="rounded-full border border-white/15 bg-white/[0.06] px-5 py-3 text-xs text-white/70 hover:border-white/30 hover:text-white">Open live product ↗</a><a href={item.source} target="_blank" rel="noopener noreferrer" className="rounded-full border border-white/10 px-5 py-3 text-xs text-white/40 hover:border-white/25 hover:text-white">View source ↗</a></div></header>

        <section className="border-b border-white/[0.08] py-12"><p className="mb-5 text-[10px] font-semibold uppercase tracking-[0.25em] text-white/20">Stack</p><div className="flex flex-wrap gap-2">{item.stack.map((tech) => <span key={tech} className="rounded-full border border-white/[0.08] bg-white/[0.02] px-4 py-2.5 text-xs text-white/45">{tech}</span>)}</div></section>

        <section className="py-10">{item.sections.map(([heading, body], index) => <article key={heading} className="grid gap-8 border-b border-white/[0.07] py-14 md:grid-cols-[180px_1fr]"><div><span className="font-mono text-[9px] text-white/20">0{index + 1}</span><h2 className="mt-3 text-xs font-semibold uppercase tracking-[0.18em] text-white/45">{heading}</h2></div><p className="max-w-2xl text-base leading-8 text-white/40">{body}</p></article>)}</section>

        <footer className="flex flex-wrap items-center justify-between gap-5 py-16"><p className="text-[10px] uppercase tracking-[0.22em] text-white/20">Proof of work · not a design mockup</p><Link href="/" className="rounded-full border border-white/10 px-5 py-3 text-xs text-white/45 hover:border-white/25 hover:text-white">Back to all work →</Link></footer>
      </div>
    </main>
  );
}
