"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { CopyEmailButton, MobileNav, StatusClock, SystemChrome } from "@/components/site-chrome";

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
      "MIRROR is deliberately deterministic and local: the same scenario and rules should produce the same result. If inputs exceed the supported single-flow model, the system must mark the case unsupported rather than inventing behavior. The interactive controls below are a portfolio demo, not a live connection to MIRROR.",
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
      "Failure contract: if optional AI routes time out, are rate-limited, or return invalid data, mark the intelligence path unavailable, retain the validated evidence boundary, and withhold the inference. Never turn a failed request into a fabricated prediction. The telemetry panel below is simulated and is not connected to the live API.",
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
      "PACE uses Appwrite authentication, TablesDB and per-user row permissions. Failure boundary: if a write is rate-limited or the network fails, the UI must not claim the task was saved until the server confirms it; any pending work should be identified as unsynced.",
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
      "Local-first keeps the core planning workflow independent of a backend. If browser storage reaches its quota or a write is denied, persistence can fail and recent changes may not survive a refresh. This portfolio does not claim a cloud fallback or verified quota-recovery path.",
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
      "The private checklist workspace is stored in the browser for this MVP. If storage quota is exhausted or a write is denied, checklist changes may not persist across reloads; no shared-database fallback is implied. The UI should surface that failure instead of reporting a false save.",
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
    <div className="architecture-tree mt-7 rounded-2xl border border-white/[0.08] bg-black/30 p-4" aria-label="Architecture node flow">
      <div className="architecture-nodes">
        {steps.map((step, index) => (
          <div key={step} className="architecture-node-wrap">
            {index > 0 && <span aria-hidden="true" className="architecture-edge" /> }
            <div className="architecture-node">
              <span className="font-mono text-[9px] text-white/25">NODE / {String(index + 1).padStart(2, "0")}</span>
              <span className="mt-1 text-[10px] uppercase tracking-[0.12em] text-white/65">{step}</span>
            </div>
          </div>
        ))}
      </div>
      <p className="mt-3 font-mono text-[9px] uppercase tracking-[0.14em] text-white/25">FLOW / VERIFIED DESCRIPTION · NOT A RUNTIME TRACE</p>
    </div>
  );
}

function SchemaPreview({ projectName }: { projectName: string }) {
  const schemaText = "type Project = {\n" +
    "  number: string;\n" +
    "  title: string;\n" +
    "  label: string;\n" +
    "  description: string;\n" +
    "  architecture: string[];\n" +
    "  tradeoff: string;\n" +
    "  tags: string[];\n" +
    "  href: string;\n" +
    "  source: string;\n" +
    "  featured?: boolean;\n" +
    "};";
  return (
    <details className="schema-disclosure mt-5 border border-white/[0.08] bg-black/20 p-4">
      <summary className="cursor-pointer list-none font-mono text-[9px] uppercase tracking-[0.14em] text-white/45">[VIEW_DATA_SCHEMA.JSON]</summary>
      <div className="mt-3 flex flex-wrap items-center justify-between gap-2">
        <p className="font-mono text-[9px] text-white/30">PORTFOLIO CONTRACT · {projectName}</p>
        <span className="font-mono text-[9px] text-white/20">TYPESCRIPT / SOURCE-VERIFIED</span>
      </div>
      <pre className="mt-3 overflow-x-auto rounded-lg border border-white/[0.06] bg-black/40 p-3 text-[10px] leading-6 text-emerald-100/70"><code>{schemaText}</code></pre>
      <p className="mt-3 text-[10px] leading-5 text-white/30">This is the exact typed contract used by this portfolio to render the project index. It is not presented as the internal Zod or database schema of the linked product.</p>
    </details>
  );
}

function MirrorSandbox() {
  const [pool, setPool] = useState(6);
  const [queueSpeed, setQueueSpeed] = useState(4);
  const pressure = Math.max(0, queueSpeed - pool);
  const capacity = pool * 10;
  const processed = Math.min(capacity, queueSpeed * 10);
  const route = pressure > 0 ? "M 112 70 C 150 70, 145 117, 202 117 S 260 70, 302 70" : "M 112 70 C 160 70, 160 70, 202 70 S 260 70, 302 70";
  return (
    <div className="mt-5 rounded-xl border border-cyan-200/10 bg-cyan-300/[0.025] p-4">
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div><p className="font-mono text-[9px] uppercase tracking-[0.16em] text-cyan-100/50">MIRROR / sandbox</p><h4 className="mt-1 text-sm text-white/80">Change the constraints.</h4></div>
        <span className="font-mono text-[9px] text-white/25">LOCAL DEMO · NO API</span>
      </div>
      <svg viewBox="0 0 420 150" className="mt-4 w-full" role="img" aria-label="Reactive simulation flow showing input, queue, and processed output">
        <path d={route} fill="none" stroke={pressure > 0 ? "#fbbf24" : "#67e8f9"} strokeWidth="2.5" strokeLinecap="round" strokeDasharray={pressure > 0 ? "5 5" : "none"} />
        <rect x="8" y="46" width="104" height="48" rx="8" fill="#0b1115" stroke="#67e8f9" strokeOpacity=".55" />
        <text x="60" y="64" fill="#a5f3fc" fontSize="9" textAnchor="middle">RESOURCE POOL</text>
        <text x="60" y="82" fill="#ffffff" fontSize="16" fontFamily="monospace" textAnchor="middle">{pool}</text>
        <rect x="202" y={pressure > 0 ? "93" : "46"} width="100" height="48" rx="8" fill="#15110b" stroke={pressure > 0 ? "#fbbf24" : "#ffffff"} strokeOpacity=".55" />
        <text x="252" y={pressure > 0 ? "111" : "64"} fill={pressure > 0 ? "#fcd34d" : "#ffffff"} fontSize="9" textAnchor="middle">QUEUE</text>
        <text x="252" y={pressure > 0 ? "128" : "82"} fill="#ffffff" fontSize="14" fontFamily="monospace" textAnchor="middle">{pressure > 0 ? "+" + pressure : "OK"}</text>
        <path d="M302 70 H332" fill="none" stroke="#67e8f9" strokeWidth="2" />
        <rect x="332" y="46" width="80" height="48" rx="8" fill="#0b1510" stroke="#6ee7b7" strokeOpacity=".55" />
        <text x="372" y="64" fill="#a7f3d0" fontSize="9" textAnchor="middle">PROCESSED</text>
        <text x="372" y="82" fill="#ffffff" fontSize="15" fontFamily="monospace" textAnchor="middle">{processed}</text>
      </svg>
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="block"><span className="flex items-center justify-between font-mono text-[9px] uppercase tracking-[0.12em] text-white/45"><span>Resource pool size</span><span>{pool}</span></span><input aria-label="Resource pool size" className="mt-3 w-full accent-cyan-200" type="range" min="1" max="12" value={pool} onChange={(event) => setPool(Number(event.target.value))} /></label>
        <label className="block"><span className="flex items-center justify-between font-mono text-[9px] uppercase tracking-[0.12em] text-white/45"><span>Queue arrival pressure</span><span>{queueSpeed}</span></span><input aria-label="Queue arrival pressure" className="mt-3 w-full accent-cyan-200" type="range" min="1" max="12" value={queueSpeed} onChange={(event) => setQueueSpeed(Number(event.target.value))} /></label>
      </div>
      <div className="mt-4 grid grid-cols-3 gap-2 border-t border-white/[0.07] pt-4">
        <div><p className="font-mono text-[8px] uppercase text-white/25">Capacity index</p><p className="mt-1 text-base tabular-nums text-white/80">{capacity}</p></div>
        <div><p className="font-mono text-[8px] uppercase text-white/25">Work processed</p><p className="mt-1 text-base tabular-nums text-white/80">{processed}</p></div>
        <div><p className="font-mono text-[8px] uppercase text-white/25">Queue pressure</p><p className={"mt-1 text-base tabular-nums " + (pressure > 0 ? "text-amber-200" : "text-emerald-200")}>{pressure > 0 ? "HIGH" : "CLEAR"}</p></div>
      </div>
      <p className="mt-3 text-[9px] leading-5 text-white/25">Illustrative control model only. It demonstrates reactive UI paths, not MIRROR’s full minute-by-minute engine or a measured benchmark.</p>
    </div>
  );
}

type TelemetryLine = { id: number; time: string; kind: string; message: string };
function GridPulseTelemetry() {
  const [lines, setLines] = useState<TelemetryLine[]>([]);
  useEffect(() => {
    const stamp = () => new Intl.DateTimeFormat("en-MY", { hour: "2-digit", minute: "2-digit", second: "2-digit", hour12: false, timeZone: "Asia/Kuala_Lumpur" }).format(new Date());
    const emit = () => {
      const roll = Math.random();
      let kind = "VALIDATION";
      let message = "schema=telemetry.v1 result=PASS evidence_state=OBSERVED";
      if (roll < 0.2) { kind = "BYPASS"; message = "[INTEL_PATH: BYPASS_ACTIVE] optional intelligence unavailable; inference=WITHHELD evidence_store=UNCHANGED status=ONLINE"; }
      else if (roll < 0.52) { kind = "TELEMETRY"; message = "source=demo_snapshot age_ms=" + (180 + Math.floor(Math.random() * 720)) + " evidence_key=DEMO-" + (1000 + Math.floor(Math.random() * 8999)); }
      else if (roll < 0.76) { kind = "CORRELATION"; message = "window=bounded confidence=NOT_ASSERTED evidence_count=" + (1 + Math.floor(Math.random() * 6)); }
      else { kind = "ROUTE"; message = "optional_route=GUARDED response=NO_INFERENCE fallback=FAIL_CLOSED"; }
      const next: TelemetryLine = { id: Date.now() + Math.floor(Math.random() * 1000), time: stamp(), kind, message };
      setLines((previous) => [...previous.slice(-5), next]);
    };
    emit();
    const interval = window.setInterval(emit, 2400);
    return () => window.clearInterval(interval);
  }, []);
  return (
    <div className="mt-5 overflow-hidden rounded-xl border border-emerald-200/10 bg-black/40">
      <div className="flex items-center justify-between border-b border-white/[0.07] px-3 py-3"><span className="font-mono text-[9px] uppercase tracking-[0.14em] text-emerald-100/55">GRIDPULSE / telemetry stream</span><span className="flex items-center gap-2 font-mono text-[8px] text-white/30"><span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-300" /> MOCK STREAM</span></div>
      <div aria-live="polite" className="space-y-2 p-3">
        {lines.map((line) => <div key={line.id} className="grid gap-1 sm:grid-cols-[58px_90px_1fr] sm:gap-2"><span className="font-mono text-[9px] text-white/25">{line.time}</span><span className={"font-mono text-[9px] " + (line.kind === "BYPASS" ? "text-amber-200/80" : "text-emerald-100/60")}>{line.kind}</span><p className="break-words font-mono text-[9px] leading-5 text-white/45">{line.message}</p></div>)}
      </div>
      <p className="border-t border-white/[0.06] px-3 py-2 font-mono text-[8px] leading-5 text-white/25">SIMULATED DEMO DATA · no live endpoint, outage, score, or prediction is being reported.</p>
    </div>
  );
}

function TerminalPanel({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [command, setCommand] = useState("");
  const [lines, setLines] = useState<string[]>(["PORTFOLIO SHELL / LOCAL ROUTER", "Type help to list supported commands."]);
  const inputRef = useRef<HTMLInputElement>(null);
  useEffect(() => { if (open) inputRef.current?.focus(); }, [open]);
  if (!open) return null;
  const execute = (raw: string) => {
    const parts = raw.trim().split(/\s+/);
    const cmd = (parts[0] || "").toLowerCase();
    const arg = (parts[1] || "").toLowerCase();
    if (!cmd) return;
    if (cmd === "clear") { setLines([]); setCommand(""); return; }
    let response = "";
    if (cmd === "help") response = "help · projects · cat about.md · ls · whoami · status · open mirror|gridpulse|pace|github|linkedin|youtube · clear";
    else if (cmd === "projects") response = "MIRROR · GRIDPULSE · PACE · SYNAPSE · QueueWise · FoodLoop · BeforeYouGo · One Next Step · Truth Checker · AERO";
    else if (cmd === "cat" && parts.slice(1).join(" ") === "about.md") response = "Koglesh R. Murugan / Malaysia. Independent student builder. Focus: typed web products, deterministic systems, evidence boundaries, and shipping."; 
    else if (cmd === "ls") response = "about.md  projects/  milestones/  build-log/  contact/  system-status";
    else if (cmd === "whoami") response = "koglesh-r-murugan · independent builder · MY";
    else if (cmd === "status") response = "PORTFOLIO: CLIENT_READY · ENV: PRODUCTION · TELEMETRY: MOCK_ONLY · BENCHMARKS: NOT_MEASURED_UNLESS_SHOWN";
    else if (cmd === "open") {
      const routes: Record<string, string> = { mirror: "https://mirror-simulation-engine.vercel.app", gridpulse: "https://gridpulse-three.vercel.app", pace: "https://pace-nu-seven.vercel.app", github: "https://github.com/kogleshofficial-hub", linkedin: "https://www.linkedin.com/in/koglesh-r-murugan-020450430/", youtube: "https://www.youtube.com/@ItsAero_Official" };
      if (routes[arg]) { window.open(routes[arg], "_blank", "noopener,noreferrer"); response = "Requested route opened in a new tab: " + arg; }
      else response = "Unknown route. Try open mirror, gridpulse, pace, github, linkedin, or youtube.";
    } else response = "Command not found: " + cmd + ". Type help for supported commands.";
    setLines((previous) => [...previous, "$ " + raw, response]);
    setCommand("");
  };
  return (
    <div className="fixed inset-0 z-[90] flex items-end justify-center bg-black/70 p-3 backdrop-blur-sm sm:items-center sm:p-6" role="dialog" aria-modal="true" aria-label="Interactive portfolio terminal">
      <div className="w-full max-w-3xl overflow-hidden rounded-2xl border border-emerald-100/20 bg-[#050807] shadow-2xl shadow-black/60">
        <div className="flex items-center justify-between border-b border-white/[0.08] px-4 py-3"><div className="flex items-center gap-2"><span className="h-2 w-2 rounded-full bg-red-300/70" /><span className="h-2 w-2 rounded-full bg-amber-200/70" /><span className="h-2 w-2 rounded-full bg-emerald-200/70" /><span className="ml-2 font-mono text-[9px] uppercase tracking-[0.16em] text-white/40">KRM / PORTFOLIO SHELL</span></div><button type="button" onClick={onClose} className="font-mono text-[10px] text-white/45 hover:text-white" aria-label="Close terminal">ESC / CLOSE</button></div>
        <div className="max-h-[55vh] min-h-48 space-y-2 overflow-y-auto px-4 py-4 font-mono text-[10px] leading-5 sm:text-xs">{lines.map((line, index) => <p key={index} className={line.startsWith("$") ? "text-emerald-100/80" : "break-words text-white/55"}>{line}</p>)}</div>
        <form onSubmit={(event) => { event.preventDefault(); execute(command); }} className="flex items-center gap-3 border-t border-white/[0.08] px-4 py-3"><label htmlFor="terminal-command" className="font-mono text-xs text-emerald-200">&gt;</label><input ref={inputRef} id="terminal-command" value={command} onChange={(event) => setCommand(event.target.value)} autoComplete="off" spellCheck={false} className="min-w-0 flex-1 bg-transparent font-mono text-xs text-white outline-none placeholder:text-white/20" placeholder="type a command…" /><button type="submit" className="font-mono text-[9px] text-emerald-100/60 hover:text-emerald-100">RUN ↵</button></form>
        <div className="border-t border-white/[0.06] px-4 py-2 font-mono text-[8px] text-white/25">CTRL + ` TOGGLE · ESC CLOSES · LOCAL COMMANDS ONLY</div>
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
          <a href={project.source} target="_blank" rel="noopener noreferrer" className="text-[10px] uppercase tracking-[0.16em] text-white/30 transition hover:text-white">Source <Arrow /></a>
        </div>

        <div className="mt-9 grid gap-8 lg:grid-cols-[.9fr_1.1fr] lg:gap-14">
          <div>
            <h3 className="text-4xl font-semibold tracking-[-0.065em] text-white sm:text-5xl">{project.title}</h3>
            <p className="mt-5 max-w-xl text-sm leading-7 text-white/38 sm:text-base">{project.description}</p>
            <div className="mt-7 flex flex-wrap gap-2">
              {project.tags.map((tag) => <span key={tag} className="border border-white/[0.08] bg-white/[0.025] px-2.5 py-1.5 text-[9px] uppercase tracking-[0.12em] text-white/35">{tag}</span>)}
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href={project.href} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.08] px-5 py-3 text-xs font-medium text-white/80 transition hover:border-white/30 hover:bg-white/[0.13] hover:text-white">Live deployment <Arrow /></a>
              <a href={project.source} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-11 items-center gap-2 rounded-full border border-white/[0.14] px-5 py-3 text-xs text-white/65 transition hover:border-white/30 hover:text-white">Source & architecture <Arrow /></a>
              {project.featured && <Link href={`/projects/${project.title.toLowerCase()}`} className="inline-flex min-h-11 items-center gap-2 rounded-full border border-cyan-100/25 bg-cyan-100/[0.04] px-5 py-3 text-xs text-cyan-50/90 transition hover:border-cyan-100/40 hover:bg-cyan-100/[0.08]">Case study <Arrow /></Link>}
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between">
              <p className="text-[9px] font-semibold uppercase tracking-[0.24em] text-white/25">System architecture</p>
              <span className="font-mono text-[9px] text-white/15">FLOW / {project.number}</span>
            </div>
            <Architecture steps={project.architecture} />
            {project.title === "MIRROR" && <MirrorSandbox />}
            {project.title === "GRIDPULSE" && <GridPulseTelemetry />}
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
  const [terminalOpen, setTerminalOpen] = useState(false);
  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.ctrlKey && event.code === "Backquote" && !(event.target instanceof HTMLInputElement) && !(event.target instanceof HTMLTextAreaElement)) {
        event.preventDefault();
        setTerminalOpen((value) => !value);
      }
      if (event.key === "Escape") setTerminalOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  return (
    <main id="main-content" className="min-h-screen overflow-x-hidden bg-[#050505] text-white selection:bg-white/20">
      <a href="#main-content" className="skip-link print-hide">Skip to content</a>
      <SystemChrome />
      <div className="system-status-bar print-hide fixed inset-x-0 top-0 z-[70] flex h-7 items-center justify-between gap-3 border-b border-white/[0.1] bg-[#050505]/95 px-4 font-mono text-[8px] uppercase tracking-[0.12em] text-white/65 backdrop-blur-xl sm:px-6"><span>LOC: MY</span><span className="hidden sm:inline">ZONE: ASIA/KL · UTC+08</span><span>LOCAL: <StatusClock /></span><span className="hidden sm:inline">SURFACE: PORTFOLIO</span><span className="text-emerald-100/80">STATUS: INTERACTIVE</span></div>
      <nav className="print-hide fixed left-0 right-0 top-7 z-50 border-b border-white/[0.12] bg-[#050505]/90 backdrop-blur-2xl">
        <div className="mx-auto flex h-[76px] max-w-7xl items-center justify-between px-6 lg:px-10">
          <a href="#home" className="group flex min-h-11 items-center gap-3" aria-label="Back to top">
            <span className="flex h-9 w-9 items-center justify-center rounded-xl border border-white/15 bg-white/[0.045] text-sm font-semibold transition group-hover:border-white/30">K</span>
            <span className="hidden text-[10px] font-semibold uppercase tracking-[0.24em] text-white/55 sm:block">Koglesh R. Murugan</span>
          </a>
          <div className="hidden items-center gap-7 md:flex">
            <a href="#work" className="text-xs text-white/65 transition hover:text-white">Work</a>
            <a href="#about" className="text-xs text-white/65 transition hover:text-white">About</a>
            <a href="#stack" className="text-xs text-white/65 transition hover:text-white">Stack</a>
            <a href="#milestones" className="text-xs text-white/65 transition hover:text-white">Milestones</a>
            <a href="#log" className="text-xs text-white/65 transition hover:text-white">Build log</a>
            <a href="#contact" className="inline-flex min-h-11 items-center rounded-full border border-white/15 bg-white/[0.05] px-5 py-2.5 text-xs text-white/85 transition hover:border-white/30 hover:bg-white/[0.09] hover:text-white">Let&apos;s talk</a>
          </div>
        <Link href="/resume" className="hidden md:inline-flex min-h-11 items-center rounded-full border border-white/15 bg-white/[0.04] px-4 py-2 text-xs text-white/80 transition hover:bg-white/[0.08]">Résumé</Link>
        <Link href="/scholarship" className="hidden md:inline-flex min-h-11 items-center rounded-full border border-cyan-100/30 bg-cyan-100/[0.09] px-4 py-2 text-xs font-medium text-cyan-50 transition hover:border-cyan-100/50 hover:bg-cyan-100/[0.14]">Scholarship profile ↗</Link>
        <MobileNav />
        </div>
      </nav>

      <section id="home" className="relative z-10 mx-auto flex min-h-screen max-w-7xl flex-col justify-center px-6 pb-20 pt-28 lg:px-10">
        <div className="max-w-6xl">
          <div className="mb-8 flex items-center gap-3"><span className="h-px w-12 bg-white/35" /><span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-white/35">Independent builder · Malaysia · 2026</span></div>
          <h1 className="max-w-6xl text-[clamp(4rem,10.5vw,10rem)] font-semibold leading-[0.82] tracking-[-0.085em]">I build<br /><span className="bg-gradient-to-b from-white to-white/30 bg-clip-text text-transparent">systems that work.</span><span aria-hidden="true" className="terminal-cursor">_</span></h1>
          <div className="mt-12 grid max-w-6xl gap-10 md:grid-cols-[1fr_auto] md:items-end">
            <div>
              <p className="max-w-2xl text-base leading-8 text-white/70 sm:text-lg">I&apos;m Koglesh R. Murugan. I build full-stack products, deterministic systems and practical digital tools — from problem discovery and architecture to code, testing and deployment.</p>
              <p className="mt-4 font-mono text-[9px] font-semibold uppercase tracking-[0.16em] text-cyan-100/70">Build with purpose. Learn by shipping.</p>
              <p className="mt-3 max-w-2xl text-xs leading-6 text-white/25">My work is centered on clear system boundaries, dependable data, explainable behavior and shipping software people can actually use.</p>
            </div>
            <div className="flex flex-wrap items-center gap-3">
              <a href="#work" className="group flex min-h-12 w-fit items-center gap-3 text-sm text-white/85 transition hover:text-white"><span className="flex h-12 w-12 items-center justify-center rounded-full border border-white/20 bg-white/[0.035] transition group-hover:-translate-y-1 group-hover:border-white/40">↓</span>Explore the work</a>
              <a href="#log" className="inline-flex min-h-11 items-center rounded-full border border-white/15 bg-white/[0.04] px-5 py-3 text-xs text-white/80 transition hover:border-white/30 hover:bg-white/[0.09] hover:text-white">Build log</a>
              <Link href="/resume" className="inline-flex min-h-11 items-center rounded-full border border-white/15 bg-white/[0.04] px-5 py-3 text-xs text-white/80 transition hover:border-white/30 hover:bg-white/[0.08]">Résumé / Save as PDF</Link>
              <Link href="/scholarship" className="inline-flex min-h-11 items-center rounded-full border border-cyan-100/30 bg-cyan-100/[0.09] px-5 py-3 text-xs font-medium text-cyan-50 transition hover:border-cyan-100/50 hover:bg-cyan-100/[0.14]">Scholarship profile ↗</Link>
            </div>
          </div>
        </div>
        <div className="absolute bottom-8 left-6 right-6 flex items-center justify-between border-t border-white/[0.07] pt-5 text-[9px] font-medium uppercase tracking-[0.24em] text-white/20 lg:left-10 lg:right-10"><span>Portfolio / 2026</span><span className="hidden sm:block">Model · Build · Test · Ship</span><span>MY · <StatusClock /></span></div>
      </section>

      <section className="relative z-10 border-y border-white/[0.07]">
        <div className="mx-auto grid max-w-7xl gap-px bg-white/[0.07] sm:grid-cols-3">
          {[["10", "Shipped projects", "Products, experiments and creative work"], ["03", "Architecture-led builds", "MIRROR · GRIDPULSE · PACE"], ["LIVE", "Public build log", "The portfolio moves with the work"]].map(([value, title, text]) => <div key={title} className="bg-[#050505] px-6 py-8 lg:px-10"><p className="font-mono text-2xl tracking-[-0.05em] text-white/80">{value}</p><p className="mt-4 text-xs font-medium text-white/55">{title}</p><p className="mt-2 text-[10px] leading-5 text-white/25">{text}</p></div>)}
        </div>
      </section>

      <section id="work" className="relative z-10 mx-auto max-w-7xl scroll-mt-20 px-6 py-28 lg:px-10 lg:py-40">
        <div className="mb-16 flex flex-col gap-6 md:flex-row md:items-end md:justify-between"><div><p className="mb-4 text-[10px] font-semibold uppercase tracking-[0.28em] text-white/25">Selected work</p><h2 className="text-4xl font-semibold tracking-[-0.06em] sm:text-6xl">Built, not imagined.</h2></div><p className="max-w-sm text-sm leading-7 text-white/30">Every project is presented as a working system: what it does, how data moves, what trade-offs shaped it, and where the source lives.</p></div>
        <div className="mb-7 flex items-end justify-between gap-4 border-b border-white/[0.08] pb-4"><div><p className="font-mono text-[9px] uppercase tracking-[0.18em] text-white/35">TIER 01 / CORE SYSTEM ENGINES</p><h3 className="mt-2 text-2xl font-medium tracking-[-0.04em] text-white/85 sm:text-3xl">Core architecture first.</h3></div><span className="font-mono text-[9px] text-white/25">03 SYSTEMS</span></div>
        <div className="space-y-6">{projects.filter((project) => ["MIRROR", "GRIDPULSE", "PACE"].includes(project.title)).map((project) => <ProjectCard key={project.title} project={project} />)}</div>
        <div className="mb-7 mt-20 flex items-end justify-between gap-4 border-b border-white/[0.08] pb-4"><div><p className="font-mono text-[9px] uppercase tracking-[0.18em] text-white/35">TIER 02 / MICRO-UTILITIES &amp; FUNCTIONAL EXPERIMENTS</p><h3 className="mt-2 text-2xl font-medium tracking-[-0.04em] text-white/85 sm:text-3xl">The supporting systems.</h3><p className="mt-2 max-w-2xl text-xs leading-6 text-white/30">Additional shipped products, practical utilities and experiments — organized below the three core engines, not mixed into the same visual tier.</p></div><span className="font-mono text-[9px] text-white/25">07 BUILDS</span></div>
        <div className="space-y-6">{projects.filter((project) => !["MIRROR", "GRIDPULSE", "PACE"].includes(project.title)).map((project) => <ProjectCard key={project.title} project={project} />)}</div>
        <div className="mt-12 border border-white/[0.08] bg-white/[0.02] p-5 sm:p-6"><p className="font-mono text-[9px] uppercase tracking-[0.16em] text-white/35">PORTFOLIO SOURCE MAP</p><div className="mt-4 grid gap-4 sm:grid-cols-3"><div><code className="font-mono text-[10px] text-white/70">app/page.tsx</code><p className="mt-2 text-[10px] leading-5 text-white/30">Project contract, architecture views, command terminal, local demos, and milestone content.</p></div><div><code className="font-mono text-[10px] text-white/70">app/globals.css</code><p className="mt-2 text-[10px] leading-5 text-white/30">Global system styling, motion preferences, status shell, and print layout.</p></div><div><code className="font-mono text-[10px] text-white/70">app/layout.tsx</code><p className="mt-2 text-[10px] leading-5 text-white/30">Site metadata, font setup, and schema.org structured data.</p></div></div><p className="mt-4 text-[10px] leading-5 text-white/25">Product-specific repository directories vary. Source links point to each real repository so internal paths are not guessed or represented as verified when they have not been inspected.</p></div>

        <div className="mt-12 grid gap-4 lg:grid-cols-2">
          <article className="border border-white/[0.12] bg-white/[0.025] p-5 sm:p-6">
            <p className="font-mono text-[9px] uppercase tracking-[0.16em] text-white/65">PERFORMANCE / MEASUREMENT REGISTER</p>
            <h3 className="mt-3 text-xl font-medium tracking-[-0.04em] text-white/90">Measure first. Publish second.</h3>
            <p className="mt-3 text-xs leading-6 text-white/80">The portfolio does not yet publish measured bundle, cold-start or client-calculation numbers. These require a reproducible test environment; a successful build is not a performance benchmark.</p>
            <div className="mt-5 grid gap-2 sm:grid-cols-3"><div className="border border-white/10 bg-black/30 p-3"><p className="font-mono text-[8px] uppercase text-white/65">Bundle size</p><p className="mt-1 text-xs text-white/85">Not measured</p></div><div className="border border-white/10 bg-black/30 p-3"><p className="font-mono text-[8px] uppercase text-white/65">Cold start</p><p className="mt-1 text-xs text-white/85">Not measured / route dependent</p></div><div className="border border-white/10 bg-black/30 p-3"><p className="font-mono text-[8px] uppercase text-white/65">Client compute</p><p className="mt-1 text-xs text-white/85">Not instrumented</p></div></div>
            <p className="mt-4 text-[10px] leading-5 text-white/70">Method: record commit, device/browser, repeated samples and median; distinguish lab measurements from real-user Core Web Vitals.</p>
          </article>
          <article className="border border-white/[0.12] bg-white/[0.025] p-5 sm:p-6">
            <p className="font-mono text-[9px] uppercase tracking-[0.16em] text-white/65">DATA CONTRACT / PORTFOLIO INDEX</p>
            <p className="mt-3 text-xs leading-6 text-white/80">The portfolio uses one shared TypeScript project model. Product-specific API and database schemas belong in each source repository and are shown only when verified.</p>
            <SchemaPreview projectName="shared project index" />
          </article>
        </div>

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

             <section id="milestones" aria-labelledby="milestones-heading" className="relative z-10 border-y border-white/[0.07] scroll-mt-20">
        <div className="mx-auto max-w-7xl px-6 py-28 lg:px-10 lg:py-36">
          <div className="mb-12 grid gap-8 lg:grid-cols-[.8fr_1.2fr] lg:items-end">
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-white/25">Out-of-band achievements</p>
              <h2 id="milestones-heading" className="mt-5 text-4xl font-semibold tracking-[-0.06em] sm:text-6xl">Milestones &amp;<br />Runtimes.</h2>
            </div>
            <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
              <p className="max-w-xl text-sm leading-7 text-white/30">A bounded record of competitive results, published submissions, shipped experiments, and creator analytics. Every metric has a time window; every external claim has a source for context to verify execution where available.</p>
              <span className="shrink-0 font-mono text-[9px] uppercase tracking-[0.18em] text-white/20">ARCHIVE / 06 RECORDS</span>
            </div>
          </div>

          <div className="grid gap-4 lg:grid-cols-3">
            <article className="flex min-w-0 flex-col border border-white/[0.1] bg-white/[0.025] p-6 sm:p-7">
              <div className="flex flex-wrap items-start justify-between gap-3">
                <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-white/25">SPORT / 001</p>
                <span className="border border-amber-200/20 bg-amber-200/[0.045] px-3 py-2 font-mono text-[9px] uppercase tracking-[0.12em] text-amber-100/80">[RESULT: GOLD]</span>
              </div>
              <h3 className="mt-5 text-xl font-medium leading-tight tracking-[-0.04em]">VIFA Gewinn India Open International Taekwondo Championship</h3>
              <p className="mt-3 text-xs leading-6 text-white/35">Peddem Multipurpose Indoor Sports Complex (Peddem Indoor Stadium) · Mapusa, Goa, India</p>
              <dl className="mt-6 grid grid-cols-2 gap-4 border-t border-white/[0.07] pt-5">
                <div><dt className="font-mono text-[9px] uppercase tracking-[0.16em] text-white/25">Dates</dt><dd className="mt-2 text-sm text-white/75">28–29 Sep 2024</dd></div>
                <div><dt className="font-mono text-[9px] uppercase tracking-[0.16em] text-white/25">Result</dt><dd className="mt-2 text-sm text-white/75">Gold medalist</dd></div>
              </dl>
              <div className="mt-auto border-t border-white/[0.07] pt-5">
                <a href="https://www.facebook.com/vifataekwondo/posts/welcome-to-vifa-gewwin-india-open-international-championship-24confirmed-partici/1064356138727220/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 font-mono text-[9px] uppercase tracking-[0.14em] text-white/45 transition hover:text-white/80">Event announcement <span aria-hidden="true">↗</span></a>
              </div>
            </article>

            <article className="flex min-w-0 flex-col border border-white/[0.1] bg-white/[0.025] p-6 sm:p-7">
              <div className="flex flex-wrap items-start justify-between gap-3">
                <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-white/25">SPORT / 002</p>
                <span className="border border-white/10 bg-white/[0.035] px-3 py-2 font-mono text-[9px] uppercase tracking-[0.12em] text-white/55">[RESULT: BRONZE]</span>
              </div>
              <h3 className="mt-5 text-xl font-medium leading-tight tracking-[-0.04em]">10th MBC Cup Open International Taekwondo Championship</h3>
              <p className="mt-3 text-xs leading-6 text-white/35">Korea · 2025</p>
              <dl className="mt-6 grid grid-cols-2 gap-4 border-t border-white/[0.07] pt-5">
                <div><dt className="font-mono text-[9px] uppercase tracking-[0.16em] text-white/25">Scope</dt><dd className="mt-2 text-sm text-white/75">International</dd></div>
                <div><dt className="font-mono text-[9px] uppercase tracking-[0.16em] text-white/25">Result</dt><dd className="mt-2 text-sm text-white/75">Bronze medalist</dd></div>
              </dl>
              <div className="mt-auto border-t border-white/[0.07] pt-5">
                <p className="text-xs leading-6 text-white/40">International competition experience. Preparation, technical precision, timing, and composure under tournament pressure.</p>
              </div>
            </article>

            <article className="flex min-w-0 flex-col border border-white/[0.1] bg-white/[0.025] p-6 sm:p-7">
              <div className="flex flex-wrap items-start justify-between gap-3">
                <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-white/25">SPORT / 003</p>
                <span className="border border-white/10 bg-white/[0.035] px-3 py-2 font-mono text-[9px] uppercase tracking-[0.12em] text-white/55">[RANK: BLACK BELT]</span>
              </div>
              <h3 className="mt-5 text-xl font-medium leading-tight tracking-[-0.04em]">Taekwondo Black Belt</h3>
              <p className="mt-3 text-xs leading-6 text-white/35">Rank milestone · Competitive Taekwondo</p>
              <div className="mt-6 border-t border-white/[0.07] pt-5">
                <p className="text-xs leading-6 text-white/40">Sustained practice in technical execution, conditioning, timing, and composure under competitive pressure.</p>
              </div>
              <div className="mt-auto pt-5">
                <span className="font-mono text-[9px] uppercase tracking-[0.14em] text-white/25">DISCIPLINE / REPEATABILITY</span>
              </div>
            </article>
          </div>

          <div className="mt-4 grid gap-4 lg:grid-cols-[1.2fr_.8fr]">
            <article className="min-w-0 border border-white/[0.1] bg-white/[0.025] p-6 sm:p-8">
              <div className="flex flex-wrap items-start justify-between gap-4 border-b border-white/[0.07] pb-6">
                <div>
                  <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-white/25">CREATOR / AERO</p>
                  <h3 className="mt-3 text-2xl font-medium tracking-[-0.04em] sm:text-3xl">Audience signal, measured.</h3>
                  <p className="mt-2 text-xs leading-6 text-white/35">YouTube Studio snapshot · 12 Sep–09 Oct 2026 · 28-day window</p>
                </div>
                <a href="https://www.youtube.com/@ItsAero_Official" target="_blank" rel="noopener noreferrer" className="font-mono text-[9px] uppercase tracking-[0.14em] text-white/45 transition hover:text-white/80">Open channel ↗</a>
              </div>
              <dl className="grid grid-cols-3 gap-3 py-7 sm:gap-5">
                <div className="min-w-0"><dt className="font-mono text-[9px] uppercase leading-4 tracking-[0.12em] text-white/25">Views</dt><dd className="mt-2 text-2xl font-medium tracking-[-0.05em] tabular-nums text-white/85 sm:text-3xl">35,550</dd></div>
                <div className="min-w-0"><dt className="font-mono text-[9px] uppercase leading-4 tracking-[0.12em] text-white/25">Watch hours</dt><dd className="mt-2 text-2xl font-medium tracking-[-0.05em] tabular-nums text-white/85 sm:text-3xl">125.3</dd></div>
                <div className="min-w-0"><dt className="font-mono text-[9px] uppercase leading-4 tracking-[0.12em] text-white/25">Subscribers</dt><dd className="mt-2 text-2xl font-medium tracking-[-0.05em] tabular-nums text-white/85 sm:text-3xl">+42</dd></div>
              </dl>
              <div className="border-t border-white/[0.07] pt-5">
                <div className="flex flex-wrap items-start justify-between gap-4">
                  <div>
                    <p className="font-mono text-[9px] uppercase tracking-[0.16em] text-white/25">Top Short in this window</p>
                    <p className="mt-2 text-sm text-white/75">I Tried Making a Zack D. Films Style Short</p>
                    <p className="mt-1 text-xs text-white/35">6 Oct 2026 · 8,435 views in the snapshot</p>
                  </div>
                  <span className="border border-white/10 bg-white/[0.035] px-3 py-2 font-mono text-[9px] uppercase tracking-[0.12em] text-white/50">[FORMAT: SHORTS]</span>
                </div>
                <p className="mt-4 text-xs leading-6 text-white/35">Multiple editing, skill, and student-life Shorts also crossed 1,000 views. These are dated historical analytics, not a live counter or a forecast.</p>
              </div>
            </article>

            <div className="flex min-w-0 flex-col gap-4">
              <article className="flex-1 border border-white/[0.1] bg-white/[0.025] p-6 sm:p-7">
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-white/25">BUILDER / GRIDPULSE</p>
                  <span className="border border-white/10 bg-white/[0.035] px-3 py-2 font-mono text-[9px] uppercase tracking-[0.12em] text-white/50">[STATUS: SUBMITTED]</span>
                </div>
                <h3 className="mt-4 text-xl font-medium tracking-[-0.04em]">NextStep Hacks 2026</h3>
                <p className="mt-3 text-xs leading-6 text-white/40">GRIDPULSE was submitted as a public hackathon project. This records participation and shipped work, not a prize or finalist result.</p>
                <div className="mt-5 flex flex-wrap gap-4 font-mono text-[9px] uppercase tracking-[0.14em]">
                  <a href="https://devpost.com/software/gridpulse-mqy46k" target="_blank" rel="noopener noreferrer" className="text-white/50 transition hover:text-white/85">Submission ↗</a>
                  <a href="https://nextstep2026.devpost.com/" target="_blank" rel="noopener noreferrer" className="text-white/35 transition hover:text-white/75">Hackathon ↗</a>
                </div>
              </article>

              <article className="flex-1 border border-white/[0.1] bg-white/[0.025] p-6 sm:p-7">
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-white/25">BUILDER / FOODLOOP</p>
                  <span className="border border-white/10 bg-white/[0.035] px-3 py-2 font-mono text-[9px] uppercase tracking-[0.12em] text-white/50">[BUILD MODE: PHONE-ONLY]</span>
                </div>
                <h3 className="mt-4 text-xl font-medium tracking-[-0.04em]">Mobile-first execution</h3>
                <p className="mt-3 text-xs leading-6 text-white/40">Built the initial FoodLoop MVP entirely on a phone, then published the product and source. Real-world adoption and impact remain separate from the build milestone.</p>
                <div className="mt-5 flex flex-wrap gap-4 font-mono text-[9px] uppercase tracking-[0.14em]">
                  <a href="https://food-loop-app.vercel.app/" target="_blank" rel="noopener noreferrer" className="text-white/50 transition hover:text-white/85">Live product ↗</a>
                  <a href="https://github.com/kogleshofficial-hub/FoodLoop" target="_blank" rel="noopener noreferrer" className="text-white/35 transition hover:text-white/75">Source ↗</a>
                </div>
              </article>
            </div>
          </div>
        </div>
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
          <div className="mt-8 grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end"><div><h2 className="max-w-3xl text-5xl font-semibold tracking-[-0.07em] sm:text-7xl">Have a real problem<br />worth building for?</h2><p className="mt-6 max-w-xl text-sm leading-7 text-white/30">I&apos;m interested in thoughtful products, engineering challenges and opportunities to turn a clear problem into something useful.</p></div><div className="flex flex-wrap gap-3"><CopyEmailButton /><a href="https://www.linkedin.com/in/koglesh-r-murugan-020450430/" target="_blank" rel="noopener noreferrer" className="rounded-full border border-white/[0.08] px-6 py-3 text-xs text-white/40 transition hover:border-white/20 hover:text-white">LinkedIn <Arrow /></a></div></div>
        </div>
      </section>

      <section id="elsewhere" className="relative z-10 border-y border-white/[0.07] scroll-mt-20">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-28">
          <div className="mb-12 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-white/25">Elsewhere</p>
              <h2 className="mt-5 text-4xl font-semibold tracking-[-0.06em] sm:text-6xl">Network &amp; Protocol Control Planes</h2>
            </div>
            <span className="font-mono text-[9px] uppercase tracking-[0.18em] text-white/20">PUBLIC / ACTIVE NODES</span>
          </div>
          <div className="grid gap-px overflow-hidden border border-white/[0.08] bg-white/[0.08] md:grid-cols-3">
            <a href="https://github.com/kogleshofficial-hub" target="_blank" rel="noopener noreferrer" className="group bg-[#050505] p-7 transition hover:bg-white/[0.035] lg:p-8">
              <div className="flex items-center justify-between"><span className="font-mono text-[10px] tracking-[0.16em] text-white/25">SRC / GITHUB</span><Arrow /></div>
              <h3 className="mt-8 text-lg font-medium text-white/75 group-hover:text-white">src/github/kogleshofficial-hub</h3>
              <p className="mt-3 text-xs leading-6 text-white/30">[STATUS: PUBLIC_REPOS] — Production source trees, schema architectures, and deterministic state engine implementations.</p>
            </a>
            <a href="https://www.linkedin.com/in/koglesh-r-murugan-020450430/" target="_blank" rel="noopener noreferrer" className="group bg-[#050505] p-7 transition hover:bg-white/[0.035] lg:p-8">
              <div className="flex items-center justify-between"><span className="font-mono text-[10px] tracking-[0.16em] text-white/25">SYS / LINKEDIN</span><Arrow /></div>
              <h3 className="mt-8 text-lg font-medium text-white/75 group-hover:text-white">sys/linkedin/koglesh-r-murugan</h3>
              <p className="mt-3 text-xs leading-6 text-white/30">[STATUS: ACTIVE_NODE] — Professional engineering network, product launches, and infrastructure updates.</p>
            </a>
            <a href="https://www.youtube.com/@ItsAero_Official" target="_blank" rel="noopener noreferrer" className="group bg-[#050505] p-7 transition hover:bg-white/[0.035] lg:p-8">
              <div className="flex items-center justify-between"><span className="font-mono text-[10px] tracking-[0.16em] text-white/25">CDN / YOUTUBE</span><Arrow /></div>
              <h3 className="mt-8 text-lg font-medium text-white/75 group-hover:text-white">cdn/youtube/broadcast</h3>
              <p className="mt-3 text-xs leading-6 text-white/30">[STATUS: LIVE_STREAM] — AERO challenges, build experiments, and creator-side engineering projects.</p>
            </a>
          </div>
        </div>
      </section>

      <footer className="relative z-10 border-t border-white/[0.07]">
        <div className="mx-auto flex max-w-7xl flex-col gap-5 px-6 py-8 text-[9px] uppercase tracking-[0.2em] text-white/20 sm:flex-row sm:items-center sm:justify-between lg:px-10"><span>© 2026 Koglesh R. Murugan</span><span>Build · Test · Ship · Repeat</span><a href="https://github.com/kogleshofficial-hub" target="_blank" rel="noopener noreferrer" className="transition hover:text-white/50">GitHub <Arrow /></a></div>
      </footer>
      <button type="button" onClick={() => setTerminalOpen((isOpen) => !isOpen)} className="print-hide fixed bottom-5 right-5 z-[80] inline-flex items-center gap-2 rounded-full border border-emerald-100/20 bg-[#07100d]/95 px-4 py-3 font-mono text-[9px] uppercase tracking-[0.12em] text-emerald-100/80 shadow-xl shadow-black/40 backdrop-blur transition hover:border-emerald-100/40 hover:text-emerald-50" aria-label="Open portfolio terminal"><span aria-hidden="true">›_</span> Terminal <span className="hidden sm:inline text-white/30">CTRL + `</span></button>
      <TerminalPanel open={terminalOpen} onClose={() => setTerminalOpen(false)} />
    </main>
  );
}
