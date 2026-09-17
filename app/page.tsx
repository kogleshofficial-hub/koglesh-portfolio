"use client";

import { useEffect, useState } from "react";

type Project = {
  number: string;
  title: string;
  label: string;
  description: string;
  architecture: string[];
  tradeoff: string;
  tags: string[];
  href: string;
  source: string;
  featured?: boolean;
};

const projects: Project[] = [
  {
    number: "01",
    title: "MIRROR",
    label: "LIVE · DETERMINISTIC SIMULATION",
    description:
      "A deterministic decision-simulation engine for measurable, resource-constrained situations. It converts explicit scenario inputs into a structured model, runs a discrete-time simulation locally, and exposes queues, capacity, utilization, events and what-if consequences.",
    architecture: ["Scenario", "Structured model", "Discrete-time engine", "State + metrics", "What-if diff"],
    tradeoff:
      "MIRROR deliberately keeps the current model deterministic and local. That makes runs reproducible and assumptions visible, while limiting the engine to variables the model explicitly represents.",
    tags: ["Next.js", "React", "TypeScript", "Simulation", "Vercel"],
    href: "https://mirror-simulation-engine.vercel.app",
    source: "https://github.com/kogleshofficial-hub/mirror-simulation-engine",
    featured: true,
  },
  {
    number: "02",
    title: "GRIDPULSE",
    label: "LIVE · INFRASTRUCTURE INTELLIGENCE",
    description:
      "An evidence-first infrastructure intelligence control plane that separates observed telemetry, validation, prediction and explanation. PostgreSQL stores the evidence layer while optional Azure ML and Microsoft Foundry services provide bounded intelligence.",
    architecture: ["Human telemetry", "Next.js API + Zod", "PostgreSQL evidence", "Azure ML", "Foundry explanation"],
    tradeoff:
      "The system keeps prediction separate from confirmation. If configured AI services are unavailable or return invalid data, the intelligence path fails closed rather than fabricating a result.",
    tags: ["Next.js", "PostgreSQL", "Zod", "Azure ML", "Microsoft Foundry", "Vercel"],
    href: "https://gridpulse-three.vercel.app",
    source: "https://github.com/kogleshofficial-hub/GRIDPULSE",
    featured: true,
  },
  {
    number: "03",
    title: "PACE",
    label: "LIVE · ACADEMIC WORKLOAD",
    description:
      "A multi-user academic workload planner that combines deadlines, effort, priority and available capacity into a realistic seven-day plan, with automatic rebalancing as work changes.",
    architecture: ["Capture", "Understand", "Allocate", "Act", "Recalculate"],
    tradeoff:
      "PACE uses Appwrite for authentication, database storage and per-user row permissions, keeping the multi-user foundation straightforward while the planning logic stays explainable in the product layer.",
    tags: ["Next.js", "React", "TypeScript", "Appwrite", "Vercel"],
    href: "https://pace-nu-seven.vercel.app",
    source: "https://github.com/kogleshofficial-hub/PACE",
    featured: true,
  },
  {
    number: "04",
    title: "SYNAPSE",
    label: "LIVE · WORKLOAD INTELLIGENCE",
    description:
      "A local-first workload planner that turns deadlines, effort, priority and available time into a deterministic seven-day plan.",
    architecture: ["Tasks", "Local state", "Planning rules", "Seven-day allocation", "Next action"],
    tradeoff:
      "The local-first approach keeps the core planning experience fast and simple without requiring a backend for the foundational workflow.",
    tags: ["Next.js", "React", "TypeScript", "Local Storage", "Vercel"],
    href: "https://synapse-7ldp5tfhy-kogleshofficial-hubs-projects.vercel.app",
    source: "https://github.com/kogleshofficial-hub/synapse",
  },
  {
    number: "05",
    title: "QueueWise",
    label: "LIVE · CIVIC TECH",
    description:
      "A community-powered queue tracker for everyday public services, built around fresh reports and transparent estimates rather than opaque waiting-time guesses.",
    architecture: ["Community report", "Supabase", "PostgreSQL", "Location context", "Queue estimate"],
    tradeoff:
      "Fresh user reports are treated as signals. The product focuses on transparent estimates instead of presenting a queue estimate as guaranteed ground truth.",
    tags: ["Next.js", "Supabase", "PostgreSQL", "OpenStreetMap"],
    href: "https://queuewise-app.vercel.app",
    source: "https://github.com/kogleshofficial-hub/queuewise",
  },
  {
    number: "06",
    title: "FoodLoop",
    label: "LIVE · SOCIAL IMPACT",
    description:
      "A food-rescue platform connecting surplus food with people who can use it through database-backed listings, requests and practical product workflows.",
    architecture: ["Food listing", "Database", "Availability", "Request", "Rescue workflow"],
    tradeoff:
      "The workflow is built around structured listings and database state so the product can represent availability changes instead of relying on static content.",
    tags: ["Next.js", "Supabase", "PostgreSQL", "Vercel"],
    href: "https://food-loop-app.vercel.app",
    source: "https://github.com/kogleshofficial-hub/FoodLoop",
  },
  {
    number: "07",
    title: "BeforeYouGo",
    label: "LIVE · UTILITY",
    description:
      "A practical preparation tool for building independent checklists before visits, travel and important tasks.",
    architecture: ["Context", "Checklist rules", "Local state", "Review", "Ready state"],
    tradeoff:
      "The product keeps preparation data lightweight and local, prioritizing immediate usability over unnecessary infrastructure.",
    tags: ["Next.js", "TypeScript", "Local Storage", "SEO"],
    href: "https://beforeyougo-gray.vercel.app",
    source: "https://github.com/kogleshofficial-hub/beforeyougo",
  },
  {
    number: "08",
    title: "One Next Step",
    label: "LIVE · AI PRODUCT",
    description:
      "A focused decision experience designed to turn a situation into one clear, useful next action instead of an overwhelming full plan.",
    architecture: ["Situation", "Context", "AI reasoning", "Next action", "User decision"],
    tradeoff:
      "The interface intentionally narrows the output to one actionable step, reducing cognitive load rather than presenting a long generated plan.",
    tags: ["Next.js", "TypeScript", "AI"],
    href: "https://one-next-step.vercel.app",
    source: "https://github.com/kogleshofficial-hub/one-next-step",
  },
  {
    number: "09",
    title: "Truth Checker",
    label: "LIVE · WEB PRODUCT",
    description:
      "An evidence-first claim investigation experience built to make online information easier to examine, question and trace back to supporting web evidence.",
    architecture: ["Claim", "Evidence search", "Source context", "Assessment", "Explanation"],
    tradeoff:
      "The product emphasizes evidence and source context so an assessment can be examined instead of being treated as an unexplained verdict.",
    tags: ["Next.js", "TypeScript", "AI", "Evidence"],
    href: "https://truth-checker-app.vercel.app",
    source: "https://github.com/kogleshofficial-hub/truth-checker",
  },
  {
    number: "10",
    title: "AERO",
    label: "CREATIVE · CHALLENGE PROJECT",
    description:
      "A challenge-driven creator project built around learning, experimenting, storytelling and documenting progress through real attempts.",
    architecture: ["Challenge", "Attempt", "Setback", "Progress", "Payoff"],
    tradeoff:
      "AERO treats the attempt itself as the story: real constraints, mistakes and progression matter more than pretending every experiment succeeds immediately.",
    tags: ["YouTube", "Editing", "Storytelling"],
    href: "https://www.youtube.com/@ItsAero_Official",
    source: "https://github.com/kogleshofficial-hub",
  },
];

const skills = [
  "Next.js",
  "React",
  "TypeScript",
  "JavaScript",
  "Tailwind CSS",
  "Supabase",
  "PostgreSQL",
  "Appwrite",
  "Azure",
  "AI products",
  "Git & GitHub",
  "Vercel",
];

const principles = [
  ["01", "Model the problem", "Start with the system, constraints and the actual user need."],
  ["02", "Make the data trustworthy", "Keep state, permissions, evidence and assumptions explicit."],
  ["03", "Expose the trade-offs", "A useful system should make important engineering decisions understandable."],
  ["04", "Ship and iterate", "Production feedback is part of the engineering loop, not the end of it."],
];

const buildLog = [
  ["08 SEP 2026", "MIRROR", "Finished the deterministic decision-simulation engine and documented its model boundaries."],
  ["07 SEP 2026", "PACE", "Shipped the academic workload planner with Appwrite authentication, per-user permissions and a production deployment."],
  ["06 SEP 2026", "SYNAPSE", "Shipped the workload planner into the portfolio and prepared the competition submission."],
  ["05 SEP 2026", "GRIDPULSE", "Hardened the infrastructure control plane, telemetry flow and evidence boundary."],
  ["04 SEP 2026", "Portfolio", "Reframed the portfolio around shipped products, architecture, proof of work and active engineering."],
  ["04 SEP 2026", "FoodLoop", "Continued product relaunch work with a focus on useful, dependable workflows."],
];

function Arrow() {
  return <span aria-hidden="true">↗</span>;
}

function Architecture({ steps }: { steps: string[] }) {
  return (
    <div className="mt-7 overflow-x-auto rounded-2xl border border-white/[0.08] bg-black/30 p-4">
      <div className="flex min-w-max items-center gap-2">
        {steps.map((step, index) => (
          <div key={step} className="flex items-center gap-2">
            <div className="border border-white/[0.1] bg-white/[0.035] px-3 py-2 font-mono text-[10px] uppercase tracking-[0.14em] text-white/55">
              {step}
            </div>
            {index < steps.length - 1 && <span className="text-white/20">→</span>}
          </div>
        ))}
      </div>
    </div>
  );
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <article className={`group relative overflow-hidden border border-white/[0.09] bg-white/[0.02] transition duration-500 hover:-translate-y-1 hover:border-white/20 ${project.featured ? "rounded-[2rem]" : "rounded-3xl"}`}>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_85%_10%,rgba(255,255,255,.07),transparent_32%)] opacity-0 transition group-hover:opacity-100" />
      <div className="relative p-6 sm:p-8 lg:p-10">
        <div className="flex flex-wrap items-start justify-between gap-5">
          <div className="flex items-center gap-4">
            <span className="font-mono text-[10px] tracking-[0.2em] text-white/20">{project.number}</span>
            <span className="h-px w-8 bg-white/15" />
            <span className="text-[9px] font-semibold uppercase tracking-[0.22em] text-white/30">{project.label}</span>
          </div>
          <a href={project.source} target="_blank" rel="noreferrer" className="text-[10px] uppercase tracking-[0.16em] text-white/30 transition hover:text-white">Source <Arrow /></a>
        </div>

        <div className="mt-9 grid gap-8 lg:grid-cols-[.9fr_1.1fr] lg:gap-14">
          <div>
            <h3 className="text-4xl font-semibold tracking-[-0.065em] text-white sm:text-5xl">{project.title}</h3>
            <p className="mt-5 max-w-xl text-sm leading-7 text-white/38 sm:text-base">{project.description}</p>
            <div className="mt-7 flex flex-wrap gap-2">
              {project.tags.map((tag) => <span key={tag} className="border border-white/[0.08] bg-white/[0.025] px-2.5 py-1.5 text-[9px] uppercase tracking-[0.12em] text-white/35">{tag}</span>)}
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href={project.href} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.08] px-5 py-3 text-xs font-medium text-white/80 transition hover:border-white/30 hover:bg-white/[0.13] hover:text-white">Live deployment <Arrow /></a>
              <a href={project.source} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-white/[0.08] px-5 py-3 text-xs text-white/40 transition hover:border-white/20 hover:text-white">Source & architecture <Arrow /></a>
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between">
              <p className="text-[9px] font-semibold uppercase tracking-[0.24em] text-white/25">System architecture</p>
              <span className="font-mono text-[9px] text-white/15">FLOW / {project.number}</span>
            </div>
            <Architecture steps={project.architecture} />
            <div className="mt-6 border-l border-white/15 pl-4">
              <p className="text-[9px] font-semibold uppercase tracking-[0.2em] text-white/20">Technical trade-off</p>
              <p className="mt-2 text-xs leading-6 text-white/30">{project.tradeoff}</p>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}

export default function Home() {
  const [scrolled, setScrolled] = useState(false);
  const [progress, setProgress] = useState(0);
  const [spotlight, setSpotlight] = useState({ x: 50, y: 20 });
  const [time, setTime] = useState("");
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(max > 0 ? (window.scrollY / max) * 100 : 0);
      setScrolled(window.scrollY > 24);
    };
    const onMove = (event: MouseEvent) => setSpotlight({ x: (event.clientX / window.innerWidth) * 100, y: (event.clientY / window.innerHeight) * 100 });
    const updateTime = () => setTime(new Intl.DateTimeFormat("en-MY", { hour: "2-digit", minute: "2-digit", second: "2-digit", hour12: false, timeZone: "Asia/Kuala_Lumpur" }).format(new Date()));
    onScroll();
    updateTime();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("mousemove", onMove, { passive: true });
    const clock = window.setInterval(updateTime, 1000);
    return () => { window.removeEventListener("scroll", onScroll); window.removeEventListener("mousemove", onMove); window.clearInterval(clock); };
  }, []);

  const scrollTo = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText("koglesh.official@gmail.com");
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1800);
    } catch {
      window.location.href = "mailto:koglesh.official@gmail.com";
    }
  };

  return (
    <main className="min-h-screen overflow-x-hidden bg-[#050505] text-white selection:bg-white/20">
      <div className="pointer-events-none fixed inset-0 z-0 opacity-70 transition-[background] duration-300" style={{ background: `radial-gradient(520px circle at ${spotlight.x}% ${spotlight.y}%, rgba(255,255,255,.065), transparent 65%)` }} />
      <div className="pointer-events-none fixed inset-0 z-0 bg-[linear-gradient(rgba(255,255,255,.018)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.018)_1px,transparent_1px)] bg-[size:72px_72px]" />
      <div className="pointer-events-none fixed left-0 top-0 z-[60] h-px bg-white/80" style={{ width: `${progress}%` }} />

      <nav className={`fixed left-0 right-0 top-0 z-50 transition-all duration-500 ${scrolled ? "border-b border-white/[0.08] bg-[#050505]/75 backdrop-blur-2xl" : ""}`}>
        <div className="mx-auto flex h-[76px] max-w-7xl items-center justify-between px-6 lg:px-10">
          <button onClick={() => scrollTo("home")} className="group flex items-center gap-3" aria-label="Back to top">
            <span className="flex h-9 w-9 items-center justify-center rounded-xl border border-white/15 bg-white/[0.045] text-sm font-semibold transition group-hover:border-white/30">K</span>
            <span className="hidden text-[10px] font-semibold uppercase tracking-[0.24em] text-white/55 sm:block">Koglesh R. Murugan</span>
          </button>
          <div className="hidden items-center gap-7 md:flex">
            <button onClick={() => scrollTo("work")} className="text-xs text-white/40 transition hover:text-white">Work</button>
            <button onClick={() => scrollTo("about")} className="text-xs text-white/40 transition hover:text-white">About</button>
            <button onClick={() => scrollTo("stack")} className="text-xs text-white/40 transition hover:text-white">Stack</button>
            <button onClick={() => scrollTo("log")} className="text-xs text-white/40 transition hover:text-white">Build log</button>
            <button onClick={() => scrollTo("contact")} className="rounded-full border border-white/10 bg-white/[0.04] px-5 py-2.5 text-xs text-white/70 transition hover:border-white/25 hover:bg-white/[0.09] hover:text-white">Let&apos;s talk</button>
          </div>
        </div>
      </nav>

      <section id="home" className="relative z-10 mx-auto flex min-h-screen max-w-7xl flex-col justify-center px-6 pb-20 pt-28 lg:px-10">
        <div className="max-w-6xl">
          <div className="mb-8 flex items-center gap-3"><span className="h-px w-12 bg-white/35" /><span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-white/35">Independent builder · Malaysia · 2026</span></div>
          <h1 className="max-w-6xl text-[clamp(4rem,10.5vw,10rem)] font-semibold leading-[0.82] tracking-[-0.085em]">I build<br /><span className="bg-gradient-to-b from-white to-white/30 bg-clip-text text-transparent">systems that work.</span></h1>
          <div className="mt-12 grid max-w-6xl gap-10 md:grid-cols-[1fr_auto] md:items-end">
            <div>
              <p className="max-w-2xl text-base leading-8 text-white/42 sm:text-lg">I&apos;m Koglesh R. Murugan. I build full-stack products, deterministic systems and practical digital tools — from problem discovery and architecture to code, testing and deployment.</p>
              <p className="mt-4 max-w-2xl text-xs leading-6 text-white/25">My work is centered on clear system boundaries, dependable data, explainable behavior and shipping software people can actually use.</p>
            </div>
            <div className="flex flex-wrap items-center gap-3">
              <button onClick={() => scrollTo("work")} className="group flex w-fit items-center gap-3 text-sm text-white/70 transition hover:text-white"><span className="flex h-12 w-12 items-center justify-center rounded-full border border-white/12 bg-white/[0.035] transition group-hover:-translate-y-1 group-hover:border-white/30">↓</span>See the work</button>
              <button onClick={() => scrollTo("log")} className="rounded-full border border-white/10 bg-white/[0.04] px-5 py-3 text-xs text-white/55 transition hover:border-white/25 hover:bg-white/[0.09] hover:text-white">Build log</button>
            </div>
          </div>
        </div>
        <div className="absolute bottom-8 left-6 right-6 flex items-center justify-between border-t border-white/[0.07] pt-5 text-[9px] font-medium uppercase tracking-[0.24em] text-white/20 lg:left-10 lg:right-10"><span>Portfolio / 2026</span><span className="hidden sm:block">Model · Build · Test · Ship</span><span>MY · {time || "00:00:00"}</span></div>
      </section>

      <section className="relative z-10 border-y border-white/[0.07]">
        <div className="mx-auto grid max-w-7xl gap-px bg-white/[0.07] sm:grid-cols-3">
          {[["10", "Shipped projects", "Products, experiments and creative work"], ["03", "Architecture-led builds", "MIRROR · GRIDPULSE · PACE"], ["LIVE", "Public build log", "The portfolio moves with the work"]].map(([value, title, text]) => <div key={title} className="bg-[#050505] px-6 py-8 lg:px-10"><p className="font-mono text-2xl tracking-[-0.05em] text-white/80">{value}</p><p className="mt-4 text-xs font-medium text-white/55">{title}</p><p className="mt-2 text-[10px] leading-5 text-white/25">{text}</p></div>)}
        </div>
      </section>

      <section id="work" className="relative z-10 mx-auto max-w-7xl scroll-mt-20 px-6 py-28 lg:px-10 lg:py-40">
        <div className="mb-16 flex flex-col gap-6 md:flex-row md:items-end md:justify-between"><div><p className="mb-4 text-[10px] font-semibold uppercase tracking-[0.28em] text-white/25">Selected work</p><h2 className="text-4xl font-semibold tracking-[-0.06em] sm:text-6xl">Built, not imagined.</h2></div><p className="max-w-sm text-sm leading-7 text-white/30">Every project is presented as a working system: what it does, how data moves, what trade-offs shaped it, and where the source lives.</p></div>
        <div className="space-y-6">{projects.map((project) => <ProjectCard key={project.title} project={project} />)}</div>
      </section>

      <section id="about" className="relative z-10 border-y border-white/[0.07] scroll-mt-20">
        <div className="mx-auto grid max-w-7xl gap-16 px-6 py-28 lg:grid-cols-[.8fr_1.2fr] lg:px-10 lg:py-36">
          <div><p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-white/25">Engineering principles</p><h2 className="mt-5 text-4xl font-semibold tracking-[-0.06em] sm:text-6xl">Make the system<br />understandable.</h2></div>
          <div className="divide-y divide-white/[0.07]">{principles.map(([number, title, text]) => <div key={number} className="grid gap-4 py-7 sm:grid-cols-[70px_1fr] sm:gap-8"><span className="font-mono text-[10px] tracking-[0.2em] text-white/20">{number}</span><div><h3 className="text-base font-medium text-white/75">{title}</h3><p className="mt-2 max-w-xl text-sm leading-7 text-white/30">{text}</p></div></div>)}</div>
        </div>
      </section>

      <section id="stack" className="relative z-10 mx-auto max-w-7xl scroll-mt-20 px-6 py-28 lg:px-10 lg:py-36">
        <div className="grid gap-16 lg:grid-cols-[.8fr_1.2fr]"><div><p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-white/25">Stack</p><h2 className="mt-5 text-4xl font-semibold tracking-[-0.06em] sm:text-6xl">Tools I ship with.</h2><p className="mt-6 max-w-md text-sm leading-7 text-white/30">The stack changes with the problem. The consistent part is the focus on typed code, clear state, useful interfaces and deployable products.</p></div><div className="flex flex-wrap content-start gap-3">{skills.map((skill) => <span key={skill} className="border border-white/[0.09] bg-white/[0.025] px-4 py-3 text-xs text-white/45 transition hover:border-white/20 hover:text-white/75">{skill}</span>)}</div></div>
      </section>

      <section id="log" className="relative z-10 border-y border-white/[0.07] scroll-mt-20">
        <div className="mx-auto max-w-7xl px-6 py-28 lg:px-10 lg:py-36">
          <div className="mb-14 flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between"><div><p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-white/25">Build log</p><h2 className="mt-5 text-4xl font-semibold tracking-[-0.06em] sm:text-6xl">What shipped recently.</h2></div><span className="font-mono text-[9px] uppercase tracking-[0.18em] text-white/20">PUBLIC / ACTIVE</span></div>
          <div className="divide-y divide-white/[0.07]">{buildLog.map(([date, title, text]) => <div key={`${date}-${title}`} className="grid gap-4 py-7 md:grid-cols-[150px_150px_1fr] md:items-start"><span className="font-mono text-[9px] tracking-[0.14em] text-white/20">{date}</span><span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-white/45">{title}</span><p className="max-w-2xl text-sm leading-7 text-white/30">{text}</p></div>)}</div>
        </div>
      </section>

      <section id="contact" className="relative z-10 mx-auto max-w-7xl scroll-mt-20 px-6 py-28 lg:px-10 lg:py-40">
        <div className="overflow-hidden rounded-[2rem] border border-white/[0.1] bg-white/[0.025] p-8 sm:p-12 lg:p-16">
          <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-white/25">Contact</p>
          <div className="mt-8 grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end"><div><h2 className="max-w-3xl text-5xl font-semibold tracking-[-0.07em] sm:text-7xl">Have a real problem<br />worth building for?</h2><p className="mt-6 max-w-xl text-sm leading-7 text-white/30">I&apos;m interested in thoughtful products, engineering challenges and opportunities to turn a clear problem into something useful.</p></div><div className="flex flex-wrap gap-3"><button onClick={copyEmail} className="rounded-full border border-white/15 bg-white/[0.08] px-6 py-3 text-xs font-medium text-white/75 transition hover:border-white/30 hover:bg-white/[0.13] hover:text-white">{copied ? "Email copied" : "Copy email"}</button><a href="https://www.linkedin.com/in/koglesh-r-murugan-020450430/" target="_blank" rel="noreferrer" className="rounded-full border border-white/[0.08] px-6 py-3 text-xs text-white/40 transition hover:border-white/20 hover:text-white">LinkedIn <Arrow /></a></div></div>
        </div>
      </section>

      <footer className="relative z-10 border-t border-white/[0.07]">
        <div className="mx-auto flex max-w-7xl flex-col gap-5 px-6 py-8 text-[9px] uppercase tracking-[0.2em] text-white/20 sm:flex-row sm:items-center sm:justify-between lg:px-10"><span>© 2026 Koglesh R. Murugan</span><span>Build · Test · Ship · Repeat</span><a href="https://github.com/kogleshofficial-hub" target="_blank" rel="noreferrer" className="transition hover:text-white/50">GitHub <Arrow /></a></div>
      </footer>
    </main>
  );
}
