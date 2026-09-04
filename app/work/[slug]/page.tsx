import type { Metadata } from "next";
import Link from "next/link";

const projects = {
  queuewise: {
    title: "QueueWise",
    eyebrow: "01 · CIVIC TECHNOLOGY",
    summary: "A community-powered queue tracker for everyday public services, built around fresh reports and transparent estimates.",
    stack: ["Next.js", "Supabase", "PostgreSQL", "OpenStreetMap", "Vercel"],
    demo: "https://queuewise-app.vercel.app",
    source: "https://github.com/kogleshofficial-hub/queuewise",
    problem: "Waiting at a clinic, bank, government office or other service can be frustrating when people have no useful picture of the current situation. QueueWise approaches that problem with community reports and visible estimates instead of pretending that an exact number is always available.",
    approach: "The product is centered on fresh, user-submitted observations. The interface is designed to make the important information easy to scan: where the place is, what people are reporting and how current that information is.",
    architecture: ["Next.js application", "Supabase-backed data layer", "PostgreSQL persistence", "OpenStreetMap location context", "Vercel deployment"],
    engineering: ["Designing around changing real-world information", "Making estimates transparent instead of presenting guesses as facts", "Connecting location context with community-submitted data", "Shipping a usable product rather than a static concept"],
    lessons: ["Real-world data is messy and time-sensitive.", "A useful interface should communicate uncertainty clearly.", "A small product becomes more credible when every major claim can be traced to actual functionality."]
  },
  beforeyougo: {
    title: "BeforeYouGo",
    eyebrow: "02 · PRODUCTIVITY / UTILITY",
    summary: "A private browser-based preparation tool for building independent checklists before visits, travel and important tasks.",
    stack: ["Next.js", "TypeScript", "Local Storage", "SEO", "Vercel"],
    demo: "https://beforeyougo-gray.vercel.app",
    source: "https://github.com/kogleshofficial-hub/beforeyougo",
    problem: "Important visits and tasks often fail because preparation is scattered across notes, memory and multiple apps. BeforeYouGo focuses the experience around one simple job: make a checklist, work through it and arrive prepared.",
    approach: "The product keeps the flow deliberately focused. A browser-based workspace means the user can work with their checklist without requiring a complicated account system for the core experience.",
    architecture: ["Next.js application", "TypeScript UI logic", "Browser Local Storage for private workspace data", "SEO-friendly public experience", "Vercel deployment"],
    engineering: ["Keeping the main workflow fast and understandable", "Persisting useful state locally in the browser", "Designing a product around a narrow, practical job", "Balancing a polished interface with low complexity"],
    lessons: ["A focused product can be more useful than a feature-heavy one.", "Local-first experiences can remove unnecessary friction.", "Product decisions are engineering decisions when they change complexity and reliability."]
  },
  foodloop: {
    title: "FoodLoop",
    eyebrow: "03 · SOCIAL IMPACT",
    summary: "A food-rescue platform connecting surplus food with people who can use it through real accounts, listings and request workflows.",
    stack: ["Next.js", "Supabase", "PostgreSQL", "Vercel"],
    demo: "https://food-loop-app.vercel.app",
    source: "https://github.com/kogleshofficial-hub/FoodLoop",
    problem: "Usable surplus food can exist at the same time that someone nearby needs food. FoodLoop explores a digital workflow for making that connection easier through listings, accounts and requests.",
    approach: "Rather than treating food rescue as a static information page, FoodLoop models it as a product workflow: people have accounts, surplus food can be listed, and interested users can interact with those listings through requests.",
    architecture: ["Next.js application", "Supabase authentication and backend services", "PostgreSQL relational data", "Account-based workflows", "Vercel deployment"],
    engineering: ["Modeling relationships between users, listings and requests", "Designing multi-step user workflows", "Building around authenticated product behavior", "Keeping the social-impact goal visible in the product experience"],
    lessons: ["Multi-user products require thinking in relationships, not isolated pages.", "Authentication changes how every important workflow must be designed.", "A social-impact idea becomes stronger when the product mechanics are clear and testable."]
  },
  "one-next-step": {
    title: "One Next Step",
    eyebrow: "04 · AI PRODUCT",
    summary: "A focused decision experience designed to turn a situation into one clear, useful next action.",
    stack: ["Next.js", "TypeScript", "AI"],
    demo: "https://one-next-step.vercel.app",
    source: "https://github.com/kogleshofficial-hub/one-next-step",
    problem: "When a situation feels complicated, producing another long list of advice is not always useful. One Next Step experiments with reducing the experience to one actionable next move.",
    approach: "The product is intentionally narrow: understand the situation, process it through an AI experience and return a clear next action instead of overwhelming the user with an entire plan.",
    architecture: ["Next.js application", "TypeScript product logic", "AI-powered experience", "Focused single-purpose interface", "Vercel deployment"],
    engineering: ["Designing a constrained AI product experience", "Turning open-ended input into a focused output", "Keeping the interface simple around the AI interaction", "Separating useful guidance from unnecessary complexity"],
    lessons: ["AI products benefit from strong product constraints.", "The interface around an AI model matters as much as the model call.", "A clear outcome gives an experimental AI product a reason to exist."]
  },
  "truth-checker": {
    title: "Truth Checker",
    eyebrow: "05 · EVIDENCE / AI",
    summary: "An evidence-first claim investigation experience built to make online information easier to examine and question.",
    stack: ["Next.js", "TypeScript", "AI", "Evidence"],
    demo: "https://truth-checker-app.vercel.app",
    source: "https://github.com/kogleshofficial-hub/truth-checker",
    problem: "Online claims can be difficult to evaluate quickly. Truth Checker explores an interface where investigation and evidence are more visible than a simple yes-or-no answer.",
    approach: "The experience is designed around examining a claim rather than blindly trusting an output. That makes evidence and explanation part of the product concept, not an afterthought.",
    architecture: ["Next.js application", "TypeScript interface and logic", "AI-assisted investigation experience", "Evidence-oriented result presentation", "Vercel deployment"],
    engineering: ["Designing for explainability", "Making evidence part of the user journey", "Building an AI experience without presenting uncertainty as certainty", "Keeping a complex investigation flow understandable"],
    lessons: ["AI interfaces need trust boundaries.", "Evidence is most useful when users can understand how it relates to a claim.", "Good product design can make uncertainty easier to navigate."]
  },
  aero: {
    title: "AERO",
    eyebrow: "06 · CREATIVE PROJECT",
    summary: "A challenge-driven creator project built around learning difficult skills, experimenting, storytelling and documenting progress.",
    stack: ["YouTube", "Editing", "Storytelling"],
    demo: "https://www.youtube.com/@ItsAero_Official",
    source: "https://github.com/kogleshofficial-hub",
    problem: "Building software is only one part of becoming a better creator. AERO is an ongoing experiment in learning difficult things, creating under constraints and turning the process into content.",
    approach: "Each challenge creates a feedback loop: choose a difficult goal, document the attempt, publish the result and use what happened to shape the next experiment.",
    architecture: ["Challenge-based content format", "Short-form and long-form experiments", "Video editing workflow", "Storytelling and audience feedback", "Continuous iteration"],
    engineering: ["Working within real constraints", "Turning progress into a story", "Testing ideas through published content", "Learning from failed attempts instead of hiding them"],
    lessons: ["Shipping creates feedback that planning cannot.", "A failed experiment can still produce useful information.", "Technical building and creative storytelling reinforce each other."]
  }
} as const;

type ProjectSlug = keyof typeof projects;

export async function generateStaticParams() {
  return Object.keys(projects).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const project = projects[slug as ProjectSlug];
  if (!project) return { title: "Project" };
  return { title: `${project.title} — Case Study`, description: project.summary };
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = projects[slug as ProjectSlug];

  if (!project) {
    return <main className="min-h-screen bg-[#050505] px-6 py-24 text-white"><div className="mx-auto max-w-3xl"><p className="text-xs uppercase tracking-[0.25em] text-white/30">404 · Project not found</p><h1 className="mt-5 text-5xl font-semibold tracking-[-0.06em]">That case study doesn&apos;t exist.</h1><Link href="/" className="mt-8 inline-flex rounded-full border border-white/15 px-5 py-3 text-sm text-white/70 hover:border-white/30 hover:text-white">Back to portfolio</Link></div></main>;
  }

  return (
    <main className="min-h-screen overflow-x-hidden bg-[#050505] text-white selection:bg-white/20">
      <div className="pointer-events-none fixed inset-0 opacity-70" style={{ background: "radial-gradient(650px circle at 75% 10%, rgba(255,255,255,.075), transparent 60%)" }} />
      <div className="pointer-events-none fixed inset-0 bg-[linear-gradient(rgba(255,255,255,.018)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.018)_1px,transparent_1px)] bg-[size:72px_72px]" />

      <nav className="relative z-10 mx-auto flex max-w-7xl items-center justify-between px-6 py-7 lg:px-10">
        <Link href="/" className="text-xs font-semibold uppercase tracking-[0.25em] text-white/45 hover:text-white">K / Portfolio</Link>
        <Link href="/" className="text-xs text-white/35 hover:text-white">← Back</Link>
      </nav>

      <section className="relative z-10 mx-auto max-w-7xl px-6 pb-24 pt-20 lg:px-10 lg:pb-32 lg:pt-28">
        <div className="max-w-5xl">
          <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-white/30">{project.eyebrow}</p>
          <h1 className="mt-7 text-[clamp(4rem,10vw,8.5rem)] font-semibold leading-[.86] tracking-[-0.085em]">{project.title}</h1>
          <p className="mt-10 max-w-3xl text-xl leading-9 text-white/45 sm:text-2xl">{project.summary}</p>
          <div className="mt-10 flex flex-wrap gap-3"><a href={project.demo} target="_blank" rel="noopener noreferrer" className="rounded-full bg-white px-6 py-3 text-sm font-medium text-black transition hover:scale-[1.02]">Open live project ↗</a><a href={project.source} target="_blank" rel="noopener noreferrer" className="rounded-full border border-white/12 bg-white/[0.04] px-6 py-3 text-sm text-white/65 transition hover:border-white/25 hover:text-white">View source ↗</a></div>
        </div>
      </section>

      <section className="relative z-10 border-y border-white/[0.07]"><div className="mx-auto grid max-w-7xl gap-px bg-white/[0.07] md:grid-cols-2"><div className="bg-[#050505] p-8 sm:p-12 lg:p-16"><p className="text-[10px] uppercase tracking-[0.25em] text-white/25">The problem</p><p className="mt-7 text-base leading-8 text-white/50">{project.problem}</p></div><div className="bg-[#050505] p-8 sm:p-12 lg:p-16"><p className="text-[10px] uppercase tracking-[0.25em] text-white/25">The approach</p><p className="mt-7 text-base leading-8 text-white/50">{project.approach}</p></div></div></section>

      <section className="relative z-10 mx-auto max-w-7xl px-6 py-28 lg:px-10 lg:py-36"><div className="grid gap-14 lg:grid-cols-[.7fr_1.3fr]"><div><p className="text-[10px] uppercase tracking-[0.25em] text-white/25">Architecture</p><h2 className="mt-5 text-4xl font-semibold tracking-[-0.06em] sm:text-5xl">How it fits together.</h2><p className="mt-6 max-w-md text-sm leading-7 text-white/30">A deliberately simple architecture view. Only technologies and product behavior represented by the project are listed here.</p></div><div className="space-y-3">{project.architecture.map((item, index) => <div key={item} className="flex items-center gap-5 rounded-2xl border border-white/[0.08] bg-white/[0.02] p-5"><span className="font-mono text-[10px] text-white/20">0{index + 1}</span><span className="text-sm text-white/60">{item}</span></div>)}</div></div></section>

      <section className="relative z-10 border-y border-white/[0.07]"><div className="mx-auto grid max-w-7xl gap-14 px-6 py-28 lg:grid-cols-[.7fr_1.3fr] lg:px-10 lg:py-36"><div><p className="text-[10px] uppercase tracking-[0.25em] text-white/25">Engineering notes</p><h2 className="mt-5 text-4xl font-semibold tracking-[-0.06em] sm:text-5xl">What had to be solved.</h2></div><div className="space-y-5">{project.engineering.map((item, index) => <div key={item} className="flex gap-5 border-b border-white/[0.07] pb-5"><span className="font-mono text-[10px] text-white/20">0{index + 1}</span><p className="text-base leading-7 text-white/50">{item}</p></div>)}</div></div></section>

      <section className="relative z-10 mx-auto max-w-7xl px-6 py-28 lg:px-10 lg:py-36"><div className="grid gap-14 lg:grid-cols-[.7fr_1.3fr]"><div><p className="text-[10px] uppercase tracking-[0.25em] text-white/25">Lessons</p><h2 className="mt-5 text-4xl font-semibold tracking-[-0.06em] sm:text-5xl">What I took forward.</h2></div><div className="grid gap-4 sm:grid-cols-3">{project.lessons.map((lesson, index) => <article key={lesson} className="rounded-2xl border border-white/[0.08] bg-white/[0.02] p-6"><span className="font-mono text-[10px] text-white/20">0{index + 1}</span><p className="mt-8 text-sm leading-7 text-white/45">{lesson}</p></article>)}</div></div></section>

      <section className="relative z-10 border-t border-white/[0.07]"><div className="mx-auto flex max-w-7xl flex-col gap-8 px-6 py-20 sm:flex-row sm:items-end sm:justify-between lg:px-10"><div><p className="text-[10px] uppercase tracking-[0.25em] text-white/25">Stack</p><div className="mt-5 flex max-w-2xl flex-wrap gap-2">{project.stack.map((item) => <span key={item} className="rounded-full border border-white/[0.08] px-4 py-2 text-[10px] text-white/35">{item}</span>)}</div></div><Link href="/" className="text-sm text-white/45 hover:text-white">Explore the rest of the work →</Link></div></section>
    </main>
  );
}
