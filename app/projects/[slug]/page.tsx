import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

const siteUrl = "https://koglesh-portfolio.vercel.app";

type CaseStudy = {
  slug: string; name: string; eyebrow: string; title: string; summary: string;
  problem: string; approach: string[]; architecture: string[];
  decisions: { title: string; detail: string }[]; limits: string[];
  stack: string[]; live: string; source: string;
  evidence: { label: string; href: string }[];
  structure: { path: string; purpose: string }[];
};

const studies: CaseStudy[] = [
  {
    slug: "mirror", name: "MIRROR", eyebrow: "CASE STUDY / 01 · DETERMINISTIC SIMULATION",
    title: "See what a decision changes.",
    summary: "A deterministic decision-simulation engine for measurable, resource-constrained situations. MIRROR models a single flow and calculates how demand, throughput, queue pressure and timed resource changes affect a system over a finite simulation window.",
    problem: "A spreadsheet or intuition can show a snapshot, but the effect of a changed resource level or event over time is harder to reason about. MIRROR makes its assumptions explicit and shows deterministic consequences rather than promising certainty about reality.",
    approach: [
      "Extract measurable quantities from a scenario and normalize them into a structured model.",
      "Run the model locally over discrete time steps, applying demand, service capacity and scheduled resource events.",
      "Expose queue, completion, utilization and waiting-pressure metrics.",
      "Compare a changed scenario with the original so the effect of a specific assumption is visible."
    ],
    architecture: ["Scenario", "Structured model", "Discrete-time engine", "State + metrics", "What-if diff"],
    decisions: [
      { title: "Deterministic before predictive", detail: "The current product does not call an AI model or external inference service for simulation. The same inputs and rules should produce the same outputs." },
      { title: "Constrained scope", detail: "The current supported model is a transparent single-flow simulation with one work population and one resource pool. More complex processes are future work, not a capability claimed here." },
      { title: "Make assumptions visible", detail: "The output is only as useful as the rates, demand, timing and constraints represented in the input model." }
    ],
    limits: [
      "It does not know unprovided human behavior, random arrivals, quality variation or unmodeled failures.",
      "A scenario outside the supported single-flow model should be identified as unsupported rather than presented as a valid result.",
      "The portfolio's interactive sandbox is illustrative and is not a live connection to MIRROR's internal engine."
    ],
    stack: ["Next.js", "React", "TypeScript", "CSS", "Client-side simulation"],
    live: "https://mirror-simulation-engine.vercel.app",
    source: "https://github.com/kogleshofficial-hub/mirror-simulation-engine",
    evidence: [{ label: "Source repository", href: "https://github.com/kogleshofficial-hub/mirror-simulation-engine" }],
    structure: [{ path: "README.md", purpose: "Documents the supported model, core accounting rule, limitations and product direction." }]
  },
  {
    slug: "gridpulse", name: "GRIDPULSE", eyebrow: "CASE STUDY / 02 · INFRASTRUCTURE INTELLIGENCE",
    title: "Evidence before inference.",
    summary: "An evidence-first infrastructure intelligence control plane that separates observed telemetry, validation, prediction and explanation. The core design keeps the evidence record distinct from optional AI-derived analysis.",
    problem: "Infrastructure reports can be fragmented, noisy or delayed. A useful control plane needs to represent what was observed separately from what a model predicts, and must not turn a missing or invalid model result into a fabricated operational answer.",
    approach: [
      "Accept structured telemetry with server-side validation.",
      "Normalize reports into a PostgreSQL-backed evidence layer and correlate reports within a bounded context.",
      "When configured, send structured features to Azure Machine Learning for a bounded score.",
      "When configured, use Microsoft Foundry / Azure OpenAI to produce an explanation grounded in supplied evidence and prediction."
    ],
    architecture: ["Human telemetry", "Next.js API + Zod", "PostgreSQL evidence", "Azure ML", "Foundry explanation"],
    decisions: [
      { title: "Observed is not predicted", detail: "A model prediction is not proof that a disruption occurred. The validation layer and prediction layer are deliberately separate." },
      { title: "Fail closed on missing intelligence", detail: "If required optional AI services are missing, unavailable or return invalid output, the intelligence path should withhold the result instead of inventing one." },
      { title: "Bounded external services", detail: "Model version, confidence, generation time, validation state and evidence are distinct fields rather than a single unexplained verdict." }
    ],
    limits: [
      "AI integrations depend on correct environment configuration and external service availability.",
      "Rate limits, invalid responses and upstream timeouts should produce an unavailable/withheld state, not a fabricated score.",
      "The portfolio telemetry panel is explicitly mocked and is not an operational GRIDPULSE feed."
    ],
    stack: ["Next.js App Router", "React", "TypeScript", "PostgreSQL", "Zod", "Azure ML", "Microsoft Foundry", "Vercel"],
    live: "https://gridpulse-three.vercel.app",
    source: "https://github.com/kogleshofficial-hub/GRIDPULSE",
    evidence: [
      { label: "Source repository", href: "https://github.com/kogleshofficial-hub/GRIDPULSE" },
      { label: "Judge brief", href: "https://gridpulse-three.vercel.app/judge" },
      { label: "Public submission", href: "https://devpost.com/software/gridpulse-mqy46k" }
    ],
    structure: [
      { path: "src/app/api/", purpose: "README-documented routes for dashboard data, health, telemetry ingestion and intelligence." },
      { path: "src/lib/", purpose: "Database access, deterministic demo helpers and intelligence-service integration." },
      { path: "db/schema.sql", purpose: "Database schema reference; incremental changes are under db/migrations/." },
      { path: "ml/ and docs/", purpose: "Model training/scoring contracts and integration, deployment and validation playbooks." }
    ]
  },
  {
    slug: "pace", name: "PACE", eyebrow: "CASE STUDY / 03 · ACADEMIC WORKLOAD PLANNING",
    title: "Make the workload realistic.",
    summary: "PACE (Planning Academic Capacity & Effort) is a student-focused workload planner. It uses task deadlines, estimated effort, priority and daily capacity to create a seven-day plan, then rebalances the schedule as work is completed.",
    problem: "A task list records obligations but does not answer whether the work can fit in the time available. PACE makes capacity and workload pressure part of the planning problem, helping surface a useful next task.",
    approach: [
      "Capture assignments with subject/context, due date, estimated effort and priority.",
      "Use declared daily study capacity and a seven-day horizon to allocate the work.",
      "Expose workload pressure and explain why a task is recommended.",
      "Recalculate the plan after changes instead of treating the schedule as static."
    ],
    architecture: ["Capture", "Understand", "Allocate", "Act", "Recalculate"],
    decisions: [
      { title: "Multi-user architecture", detail: "Authentication and storage use Appwrite. The documented design attaches an authenticated user ID to task rows and applies row-level permissions to protect user data." },
      { title: "Explainable planning", detail: "The product emphasizes deadlines, effort, priority and capacity instead of hiding the schedule behind an unexplained recommendation." },
      { title: "Disclose the foundation", detail: "PACE evolved from SYNAPSE. Its competition-specific interface, authentication, database architecture and workflow are described as an evolution—not as an unrelated invention." }
    ],
    limits: [
      "The plan depends on reasonable estimates for task effort and available time.",
      "If a write is rate-limited or the network fails, the interface must not claim a task has been saved until the server confirms it.",
      "PACE was submitted to the CSC Back-to-School Hackathon; this records submission, not a claimed prize or finalist result."
    ],
    stack: ["Next.js", "React", "TypeScript", "Appwrite", "Vercel"],
    live: "https://pace-nu-seven.vercel.app",
    source: "https://github.com/kogleshofficial-hub/PACE",
    evidence: [
      { label: "Source repository", href: "https://github.com/kogleshofficial-hub/PACE" },
      { label: "Public submission", href: "https://devpost.com/software/pace-a7ouxr" },
      { label: "Hackathon page", href: "https://csc-back-to-school.devpost.com/" }
    ],
    structure: [{ path: "README.md", purpose: "Documents Appwrite TablesDB, user isolation, seven-day planning and the relationship to SYNAPSE." }]
  }
];

export function generateStaticParams() { return studies.map(({ slug }) => ({ slug })); }

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const study = studies.find((item) => item.slug === slug);
  if (!study) return { title: "Project not found" };
  return {
    title: `${study.name} — Engineering Case Study`,
    description: study.summary,
    alternates: { canonical: `/projects/${study.slug}` },
    openGraph: { title: `${study.name} — Engineering Case Study`, description: study.summary, url: `${siteUrl}/projects/${study.slug}`, type: "article" }
  };
}

function Arrow() { return <span aria-hidden="true">↗</span>; }

function NodeFlow({ nodes }: { nodes: string[] }) {
  return <ol className="case-node-flow" aria-label="Architecture steps">
    {nodes.map((node, i) => <li key={node} className="case-node"><span className="font-mono text-[9px] text-white/70">NODE / {String(i + 1).padStart(2, "0")}</span><span className="mt-2 text-sm text-white/90">{node}</span></li>)}
  </ol>;
}

export default async function ProjectCaseStudy({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const study = studies.find((item) => item.slug === slug);
  if (!study) notFound();

  const jsonLd = {
    "@context": "https://schema.org", "@type": "SoftwareApplication",
    name: study.name, description: study.summary, url: study.live,
    author: { "@type": "Person", name: "Koglesh R. Murugan", url: siteUrl },
    applicationCategory: "DeveloperApplication"
  };

  return (
    <main id="main-content" className="min-h-screen bg-[#050505] text-white">
      <a href="#main-content" className="skip-link print-hide">Skip to content</a>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="case-topbar print-hide"><Link href="/" className="font-mono text-[10px] uppercase tracking-[0.14em] text-white/75 hover:text-white">← Koglesh R. Murugan</Link><span className="font-mono text-[9px] uppercase tracking-[0.14em] text-white/65">Engineering / Case files</span></div>
      <header className="mx-auto max-w-5xl px-6 pb-16 pt-16 sm:pb-20 lg:px-10 lg:pt-20">
        <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-cyan-100/80">{study.eyebrow}</p>
        <h1 className="mt-6 max-w-4xl text-5xl font-semibold leading-[0.96] tracking-[-0.07em] sm:text-7xl">{study.name}<span className="text-white/60"> / {study.title}</span></h1>
        <p className="mt-7 max-w-3xl text-base leading-8 text-white/80 sm:text-lg">{study.summary}</p>
        <div className="mt-8 flex flex-wrap gap-3">
          <a href={study.live} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-11 items-center gap-2 rounded-full border border-cyan-100/30 bg-cyan-100/[0.06] px-5 py-3 text-xs text-cyan-50 hover:bg-cyan-100/[0.1]">Open live product <Arrow /></a>
          <a href={study.source} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-11 items-center gap-2 rounded-full border border-white/25 px-5 py-3 text-xs text-white/85 hover:border-white/40">Read source <Arrow /></a>
        </div>
        <div className="mt-12 flex flex-wrap gap-2">{study.stack.map((tag) => <span key={tag} className="border border-white/[0.14] bg-white/[0.03] px-3 py-2 font-mono text-[9px] uppercase tracking-[0.1em] text-white/75">{tag}</span>)}</div>
      </header>

      <section className="border-y border-white/[0.12] bg-white/[0.018]">
        <div className="mx-auto grid max-w-5xl gap-10 px-6 py-16 lg:grid-cols-[.7fr_1.3fr] lg:px-10">
          <div><p className="font-mono text-[9px] uppercase tracking-[0.17em] text-white/65">01 / Problem statement</p><h2 className="mt-4 text-3xl font-medium tracking-[-0.05em]">Why it exists.</h2></div>
          <p className="text-sm leading-8 text-white/85">{study.problem}</p>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-16 lg:px-10">
        <p className="font-mono text-[9px] uppercase tracking-[0.17em] text-white/65">02 / System path</p>
        <h2 className="mt-4 text-3xl font-medium tracking-[-0.05em]">Architecture at a glance.</h2>
        <div className="mt-8"><NodeFlow nodes={study.architecture} /></div>
        <div className="mt-10 grid gap-4 md:grid-cols-2">{study.approach.map((step, i) => <article key={step} className="border border-white/[0.14] bg-white/[0.025] p-5"><p className="font-mono text-[9px] uppercase tracking-[0.14em] text-white/65">STEP / {String(i + 1).padStart(2, "0")}</p><p className="mt-3 text-sm leading-7 text-white/85">{step}</p></article>)}</div>
      </section>

      <section className="border-y border-white/[0.12]">
        <div className="mx-auto max-w-5xl px-6 py-16 lg:px-10">
          <p className="font-mono text-[9px] uppercase tracking-[0.17em] text-white/65">03 / Engineering decisions</p>
          <h2 className="mt-4 text-3xl font-medium tracking-[-0.05em]">Trade-offs are part of the system.</h2>
          <div className="mt-8 grid gap-4 md:grid-cols-3">{study.decisions.map((item, i) => <article key={item.title} className="border border-white/[0.14] bg-white/[0.025] p-5"><p className="font-mono text-[9px] uppercase text-white/65">DECISION / {String(i + 1).padStart(2, "0")}</p><h3 className="mt-3 text-lg font-medium">{item.title}</h3><p className="mt-3 text-xs leading-7 text-white/80">{item.detail}</p></article>)}</div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-16 lg:px-10">
        <p className="font-mono text-[9px] uppercase tracking-[0.17em] text-amber-100/80">04 / Failure modes &amp; limits</p>
        <h2 className="mt-4 text-3xl font-medium tracking-[-0.05em]">Where it can fail.</h2>
        <ul className="mt-8 grid gap-3">{study.limits.map((limit) => <li key={limit} className="border-l border-amber-100/40 bg-amber-100/[0.025] px-5 py-4 text-sm leading-7 text-white/85">{limit}</li>)}</ul>
      </section>

      <section className="border-y border-white/[0.12] bg-white/[0.018]">
        <div className="mx-auto max-w-5xl px-6 py-16 lg:px-10">
          <p className="font-mono text-[9px] uppercase tracking-[0.17em] text-white/65">05 / Source map</p>
          <h2 className="mt-4 text-3xl font-medium tracking-[-0.05em]">Where to inspect.</h2>
          <div className="mt-8 divide-y divide-white/[0.12] border-y border-white/[0.12]">{study.structure.map((item) => <div key={item.path} className="grid gap-2 py-5 sm:grid-cols-[190px_1fr]"><code className="font-mono text-xs text-cyan-100/85">{item.path}</code><p className="text-xs leading-7 text-white/80">{item.purpose}</p></div>)}</div>
          <p className="mt-4 text-[10px] leading-6 text-white/65">The map identifies only paths confirmed by available project documentation. Follow the repository link for the full current tree.</p>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-16 lg:px-10">
        <p className="font-mono text-[9px] uppercase tracking-[0.17em] text-white/65">06 / External evidence</p>
        <div className="mt-6 flex flex-wrap gap-3">{study.evidence.map((item) => <a key={item.href} href={item.href} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-11 items-center gap-2 border border-white/[0.18] px-4 py-3 text-xs text-white/85 transition hover:border-white/40">{item.label} <Arrow /></a>)}</div>
      </section>
      <footer className="border-t border-white/[0.12] px-6 py-8"><div className="mx-auto flex max-w-5xl flex-wrap items-center justify-between gap-4"><Link href="/" className="font-mono text-[10px] uppercase tracking-[0.14em] text-white/75 hover:text-white">← Back to portfolio</Link><span className="font-mono text-[9px] uppercase tracking-[0.14em] text-white/65">Build · Test · Verify</span></div></footer>
    </main>
  );
}
