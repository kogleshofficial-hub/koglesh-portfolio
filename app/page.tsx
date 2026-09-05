"use client";

import { useEffect, useState } from "react";

const projects = [
  { number: "01", title: "GRIDPULSE", label: "LIVE · INFRASTRUCTURE INTELLIGENCE", description: "An evidence-first infrastructure control plane that correlates distributed telemetry, validates corroboration, and prepares bounded AI risk intelligence.", tags: ["Next.js", "PostgreSQL", "Azure ML", "Microsoft Foundry", "Vercel"], href: "https://gridpulse-three.vercel.app", source: "https://github.com/kogleshofficial-hub/GRIDPULSE", slug: "gridpulse", cta: "Open GRIDPULSE" },
  { number: "02", title: "QueueWise", label: "LIVE · CIVIC TECH", description: "A community-powered queue tracker for everyday public services, built around fresh reports and transparent estimates.", tags: ["Next.js", "Supabase", "PostgreSQL", "OpenStreetMap"], href: "https://queuewise-app.vercel.app", source: "https://github.com/kogleshofficial-hub/queuewise", slug: "queuewise", cta: "Open QueueWise" },
  { number: "03", title: "BeforeYouGo", label: "LIVE · UTILITY", description: "A practical preparation tool for building independent checklists before visits, travel and important tasks.", tags: ["Next.js", "TypeScript", "Local Storage", "SEO"], href: "https://beforeyougo-gray.vercel.app", source: "https://github.com/kogleshofficial-hub/beforeyougo", slug: "beforeyougo", cta: "Open BeforeYouGo" },
  { number: "04", title: "FoodLoop", label: "LIVE · SOCIAL IMPACT", description: "A food-rescue platform connecting surplus food with people who can use it through database-backed workflows.", tags: ["Next.js", "Supabase", "PostgreSQL", "Vercel"], href: "https://food-loop-app.vercel.app", source: "https://github.com/kogleshofficial-hub/FoodLoop", slug: "foodloop", cta: "Open FoodLoop" },
  { number: "05", title: "One Next Step", label: "AI PRODUCT", description: "A focused decision experience designed to turn a situation into one clear, useful next action.", tags: ["Next.js", "TypeScript", "AI"], href: "https://one-next-step.vercel.app", source: "https://github.com/kogleshofficial-hub/one-next-step", slug: "one-next-step", cta: "Try it live" },
  { number: "06", title: "Truth Checker", label: "WEB PRODUCT", description: "An evidence-first claim investigation experience built to make online information easier to examine and question.", tags: ["Next.js", "TypeScript", "AI", "Evidence"], href: "https://truth-checker-app.vercel.app", source: "https://github.com/kogleshofficial-hub/truth-checker", slug: "truth-checker", cta: "Open Truth Checker" },
  { number: "07", title: "AERO", label: "CREATIVE PROJECT", description: "A challenge-driven creator project built around learning, experimenting, storytelling and documenting progress.", tags: ["YouTube", "Editing", "Storytelling"], href: "https://www.youtube.com/@ItsAero_Official", source: "https://github.com/kogleshofficial-hub", slug: "aero", cta: "Watch AERO" },
];

const skills = ["Next.js", "React", "TypeScript", "JavaScript", "Tailwind CSS", "Supabase", "PostgreSQL", "Azure", "AI products", "UI design", "Git & GitHub", "Vercel"];

const principles = [
  ["01", "Find the real problem", "Start with something people genuinely experience."],
  ["02", "Build the useful thing", "Prefer working products over impressive-looking demos."],
  ["03", "Test what breaks", "Real feedback is part of the build, not the end of it."],
  ["04", "Improve relentlessly", "Every project is a chance to become a better builder."],
];

const buildLog = [
  ["05 SEP 2026", "GRIDPULSE", "Hardened the live infrastructure control plane, telemetry flow and evidence boundary."],
  ["04 SEP 2026", "Portfolio", "Reframed the portfolio around shipped products, proof of work and active engineering."],
  ["04 SEP 2026", "FoodLoop", "Continued relaunch work with a focus on useful, dependable product workflows."],
  ["03 SEP 2026", "AERO", "Shipped a new challenge stream and short-form content experiment."],
];

const presence = [
  { title: "GitHub", label: "CODE / PROJECTS", description: "Source code, experiments and the products behind the portfolio.", href: "https://github.com/kogleshofficial-hub", action: "View GitHub" },
  { title: "LinkedIn", label: "PROFESSIONAL", description: "Projects, learning and builder updates.", href: "https://www.linkedin.com/in/koglesh-r-murugan-020450430/", action: "View LinkedIn" },
  { title: "YouTube", label: "AERO / CREATOR", description: "Challenges, experiments and the process behind AERO.", href: "https://www.youtube.com/@ItsAero_Official", action: "Watch AERO" },
];

function Arrow() { return <span aria-hidden="true">↗</span>; }

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
    onScroll(); updateTime();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("mousemove", onMove, { passive: true });
    const clock = window.setInterval(updateTime, 1000);
    return () => { window.removeEventListener("scroll", onScroll); window.removeEventListener("mousemove", onMove); window.clearInterval(clock); };
  }, []);

  const scrollTo = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  const copyEmail = async () => {
    try { await navigator.clipboard.writeText("koglesh.official@gmail.com"); setCopied(true); window.setTimeout(() => setCopied(false), 1800); }
    catch { window.location.href = "mailto:koglesh.official@gmail.com"; }
  };

  return (
    <main className="min-h-screen overflow-x-hidden bg-[#050505] text-white selection:bg-white/20">
      <div className="pointer-events-none fixed inset-0 z-0 opacity-70 transition-[background] duration-300" style={{ background: `radial-gradient(520px circle at ${spotlight.x}% ${spotlight.y}%, rgba(255,255,255,.065), transparent 65%)` }} />
      <div className="pointer-events-none fixed inset-0 z-0 bg-[linear-gradient(rgba(255,255,255,.018)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.018)_1px,transparent_1px)] bg-[size:72px_72px]" />
      <div className="pointer-events-none fixed left-0 top-0 z-[60] h-px bg-white/80" style={{ width: `${progress}%` }} />

      <nav className={`fixed left-0 right-0 top-0 z-50 transition-all duration-500 ${scrolled ? "border-b border-white/[0.08] bg-[#050505]/75 backdrop-blur-2xl" : ""}`}>
        <div className="mx-auto flex h-[76px] max-w-7xl items-center justify-between px-6 lg:px-10">
          <button onClick={() => scrollTo("home")} className="group flex items-center gap-3" aria-label="Back to top"><span className="flex h-9 w-9 items-center justify-center rounded-xl border border-white/15 bg-white/[0.045] text-sm font-semibold transition group-hover:border-white/30">K</span><span className="hidden text-[10px] font-semibold uppercase tracking-[0.24em] text-white/55 sm:block">Koglesh R. Murugan</span></button>
          <div className="hidden items-center gap-7 md:flex"><button onClick={() => scrollTo("work")} className="text-xs text-white/40 transition hover:text-white">Work</button><button onClick={() => scrollTo("about")} className="text-xs text-white/40 transition hover:text-white">About</button><button onClick={() => scrollTo("stack")} className="text-xs text-white/40 transition hover:text-white">Stack</button><button onClick={() => scrollTo("log")} className="text-xs text-white/40 transition hover:text-white">Build log</button><button onClick={() => scrollTo("presence")} className="text-xs text-white/40 transition hover:text-white">Elsewhere</button><button onClick={() => scrollTo("contact")} className="rounded-full border border-white/10 bg-white/[0.04] px-5 py-2.5 text-xs text-white/70 transition hover:border-white/25 hover:bg-white/[0.09] hover:text-white">Let&apos;s talk</button></div>
        </div>
      </nav>

      <section id="home" className="relative z-10 mx-auto flex min-h-screen max-w-7xl flex-col justify-center px-6 pb-20 pt-28 lg:px-10">
        <div className="max-w-6xl"><div className="mb-8 flex items-center gap-3"><span className="h-px w-12 bg-white/35" /><span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-white/35">Independent builder · Malaysia · 2026</span></div><h1 className="max-w-5xl text-[clamp(4rem,11vw,10.5rem)] font-semibold leading-[0.82] tracking-[-0.085em]">I make<br /><span className="bg-gradient-to-b from-white to-white/30 bg-clip-text text-transparent">ideas real.</span></h1><div className="mt-12 grid max-w-5xl gap-10 md:grid-cols-[1fr_auto] md:items-end"><p className="max-w-2xl text-base leading-8 text-white/42 sm:text-lg">I&apos;m Koglesh R. Murugan. I build real-world web products, AI experiences and creative digital projects — from problem discovery to design, code, testing and deployment.</p><div className="flex flex-wrap items-center gap-3"><button onClick={() => scrollTo("work")} className="group flex w-fit items-center gap-3 text-sm text-white/70 transition hover:text-white"><span className="flex h-12 w-12 items-center justify-center rounded-full border border-white/12 bg-white/[0.035] transition group-hover:-translate-y-1 group-hover:border-white/30">↓</span>See the work</button><button onClick={() => scrollTo("log")} className="rounded-full border border-white/10 bg-white/[0.04] px-5 py-3 text-xs text-white/55 transition hover:border-white/25 hover:bg-white/[0.09] hover:text-white">Live build log</button></div></div></div><div className="absolute bottom-8 left-6 right-6 flex items-center justify-between border-t border-white/[0.07] pt-5 text-[9px] font-medium uppercase tracking-[0.24em] text-white/20 lg:left-10 lg:right-10"><span>Portfolio / 2026</span><span className="hidden sm:block">Build · Test · Ship · Repeat</span><span>MY · {time || "00:00:00"}</span></div>
      </section>

      <section className="relative z-10 border-y border-white/[0.07]"><div className="mx-auto grid max-w-7xl gap-px bg-white/[0.07] sm:grid-cols-3">{[["07", "Featured projects", "Seven shipped products and experiments"], ["01", "Infrastructure AI", "GRIDPULSE is the current flagship build"], ["LIVE", "Public build log", "The portfolio moves with the work"]].map(([value, title, text]) => <div key={title} className="bg-[#050505] px-6 py-8 lg:px-10"><p className="font-mono text-2xl tracking-[-0.05em] text-white/80">{value}</p><p className="mt-4 text-xs font-medium text-white/55">{title}</p><p className="mt-2 text-[10px] leading-5 text-white/25">{text}</p></div>)}</div></section>

      <section id="work" className="relative z-10 mx-auto max-w-7xl scroll-mt-20 px-6 py-28 lg:px-10 lg:py-40">
        <div className="mb-16 flex flex-col gap-6 md:flex-row md:items-end md:justify-between"><div><p className="mb-4 text-[10px] font-semibold uppercase tracking-[0.28em] text-white/25">Selected work</p><h2 className="text-4xl font-semibold tracking-[-0.06em] sm:text-6xl">Built, not imagined.</h2></div><p className="max-w-sm text-sm leading-7 text-white/30">Real products, experiments and creative work. Each project starts with a problem, gets shipped, and becomes a feedback loop.</p></div>

        <article className="group relative mb-8 overflow-hidden rounded-[2rem] border border-white/[0.1] bg-white/[0.025] transition duration-500 hover:-translate-y-1 hover:border-white/20">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_15%,rgba(255,255,255,.1),transparent_34%)]" />
          <div className="relative grid min-h-[620px] lg:grid-cols-[1.05fr_.95fr]">
            <div className="flex flex-col justify-between border-b border-white/[0.07] p-8 sm:p-12 lg:border-b-0 lg:border-r"><div className="flex items-center justify-between"><span className="text-[10px] font-semibold uppercase tracking-[0.24em] text-white/25">Flagship / GRIDPULSE</span><span className="rounded-full border border-white/10 px-3 py-1.5 text-[9px] text-white/30">01</span></div><div className="py-14"><div className="mb-6 flex items-center gap-3"><span className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.05] text-lg font-semibold">G</span><span className="text-[10px] uppercase tracking-[0.22em] text-white/30">Live infrastructure control plane</span></div><h3 className="max-w-2xl text-5xl font-semibold tracking-[-0.065em] sm:text-7xl">See disruption<br /><span className="text-white/30">before it becomes a blind spot.</span></h3><p className="mt-7 max-w-xl text-sm leading-7 text-white/40 sm:text-base">GRIDPULSE correlates distributed telemetry, validates independent observations, and prepares the evidence layer for AI-powered grid intelligence.</p></div><div className="flex flex-wrap gap-2">{projects[0].tags.map((tag) => <span key={tag} className="rounded-full border border-white/[0.08] bg-black/20 px-3 py-1.5 text-[10px] text-white/30">{tag}</span>)}</div></div>
            <div className="relative flex flex-col justify-between p-8 sm:p-12"><div className="absolute right-10 top-14 h-72 w-72 rounded-full border border-white/[0.07] transition duration-700 group-hover:scale-110 group-hover:rotate-6" /><div className="absolute right-28 top-32 h-36 w-36 rounded-full border border-white/[0.09] transition duration-700 group-hover:scale-125" /><div className="relative"><p className="mb-8 text-[10px] uppercase tracking-[0.22em] text-white/25">Evidence boundary</p><div className="space-y-5">{[["01", "OBSERVED", "Human telemetry"], ["02", "VALIDATED", "PostgreSQL corroboration"], ["03", "PREDICTED", "Azure Machine Learning"], ["04", "EXPLAINED", "Microsoft Foundry"]].map(([num, title, text]) => <div key={num} className="flex gap-5 border-b border-white/[0.06] pb-5"><span className="font-mono text-[9px] text-white/20">{num}</span><div><p className="text-sm text-white/60">{title}</p><p className="mt-1 text-[10px] text-white/25">{text}</p></div></div>)}</div></div><div className="relative flex flex-wrap items-center justify-between gap-3 rounded-2xl border border-white/[0.08] bg-black/20 p-4"><span className="text-[10px] text-white/30">Prediction is not confirmation.</span><a href={projects[0].href} target="_blank" rel="noreferrer" className="rounded-full bg-white px-4 py-2 text-[10px] font-semibold text-black transition hover:bg-white/90">Open control plane <Arrow /></a></div></div>
          </div>
        </article>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">{projects.slice(1).map((project) => <article key={project.slug} className="group flex min-h-[330px] flex-col rounded-[1.6rem] border border-white/[0.08] bg-white/[0.018] p-7 transition duration-500 hover:-translate-y-1 hover:border-white/20 hover:bg-white/[0.03]"><div className="flex items-center justify-between"><span className="text-[9px] font-semibold uppercase tracking-[0.2em] text-white/25">{project.label}</span><span className="font-mono text-[9px] text-white/20">{project.number}</span></div><h3 className="mt-12 text-3xl font-semibold tracking-[-0.05em]">{project.title}</h3><p className="mt-4 text-sm leading-6 text-white/35">{project.description}</p><div className="mt-auto pt-7"><div className="mb-5 flex flex-wrap gap-2">{project.tags.slice(0, 4).map((tag) => <span key={tag} className="rounded-full border border-white/[0.07] px-2.5 py-1 text-[9px] text-white/25">{tag}</span>)}</div><div className="flex items-center justify-between"><a href={project.href} target="_blank" rel="noreferrer" className="text-xs text-white/60 transition hover:text-white">{project.cta} <Arrow /></a><a href={project.source} target="_blank" rel="noreferrer" className="text-[10px] text-white/20 transition hover:text-white/55">Source</a></div></div></article>)}</div>
      </section>

      <section id="about" className="relative z-10 border-y border-white/[0.07] scroll-mt-20"><div className="mx-auto grid max-w-7xl lg:grid-cols-[.8fr_1.2fr]"><div className="border-b border-white/[0.07] p-8 sm:p-12 lg:border-b-0 lg:border-r lg:p-16"><p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-white/25">About the builder</p><h2 className="mt-10 text-4xl font-semibold tracking-[-0.06em] sm:text-5xl">Curious enough to build it. Stubborn enough to ship it.</h2></div><div className="p-8 sm:p-12 lg:p-16"><p className="max-w-2xl text-lg leading-8 text-white/45">I care about the gap between a clever idea and a product that actually works. My projects explore civic technology, social impact, AI, infrastructure intelligence and creative experiments.</p><p className="mt-7 max-w-2xl text-sm leading-7 text-white/30">I learn by building: researching the problem, making a small useful version, testing what breaks, fixing it, deploying it, and then doing the loop again.</p><div className="mt-12 grid gap-8 sm:grid-cols-2">{principles.map(([number, title, text]) => <div key={number} className="border-t border-white/[0.08] pt-5"><span className="font-mono text-[9px] text-white/20">{number}</span><h3 className="mt-4 text-sm text-white/65">{title}</h3><p className="mt-2 text-xs leading-5 text-white/25">{text}</p></div>)}</div></div></div></section>

      <section id="stack" className="relative z-10 mx-auto max-w-7xl scroll-mt-20 px-6 py-28 lg:px-10 lg:py-36"><div className="grid gap-12 lg:grid-cols-[.65fr_1.35fr] lg:items-end"><div><p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-white/25">Stack</p><h2 className="mt-5 text-4xl font-semibold tracking-[-0.06em] sm:text-5xl">Tools are leverage.</h2></div><div className="flex flex-wrap gap-2">{skills.map((skill) => <span key={skill} className="rounded-full border border-white/[0.09] bg-white/[0.025] px-4 py-2.5 text-xs text-white/40">{skill}</span>)}</div></div></section>

      <section id="log" className="relative z-10 border-y border-white/[0.07] scroll-mt-20"><div className="mx-auto max-w-7xl px-6 py-28 lg:px-10 lg:py-36"><div className="mb-14 flex items-end justify-between"><div><p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-white/25">Build log</p><h2 className="mt-5 text-4xl font-semibold tracking-[-0.06em] sm:text-5xl">Still building.</h2></div><span className="hidden font-mono text-[9px] text-white/20 sm:block">PUBLIC / CONTINUOUS</span></div><div className="divide-y divide-white/[0.07] border-y border-white/[0.07]">{buildLog.map(([date, project, text]) => <div key={`${date}-${project}`} className="grid gap-4 py-7 md:grid-cols-[150px_160px_1fr] md:items-start"><span className="font-mono text-[9px] text-white/20">{date}</span><span className="text-xs font-medium text-white/55">{project}</span><p className="max-w-2xl text-sm leading-6 text-white/30">{text}</p></div>)}</div></div></section>

      <section id="presence" className="relative z-10 mx-auto max-w-7xl scroll-mt-20 px-6 py-28 lg:px-10 lg:py-36"><div className="mb-14"><p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-white/25">Elsewhere</p><h2 className="mt-5 text-4xl font-semibold tracking-[-0.06em] sm:text-5xl">The work lives beyond this page.</h2></div><div className="grid gap-4 md:grid-cols-3">{presence.map((item) => <a key={item.title} href={item.href} target="_blank" rel="noreferrer" className="group rounded-[1.5rem] border border-white/[0.08] bg-white/[0.018] p-7 transition duration-300 hover:-translate-y-1 hover:border-white/20"><span className="text-[9px] font-semibold uppercase tracking-[0.22em] text-white/20">{item.label}</span><div className="mt-10 flex items-center justify-between"><h3 className="text-xl font-semibold tracking-[-0.04em]">{item.title}</h3><span className="text-white/20 transition group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-white">↗</span></div><p className="mt-3 text-xs leading-5 text-white/25">{item.description}</p><p className="mt-7 text-[10px] text-white/40">{item.action}</p></a>)}</div></section>

      <section id="contact" className="relative z-10 border-t border-white/[0.07] scroll-mt-20"><div className="mx-auto max-w-7xl px-6 py-28 lg:px-10 lg:py-40"><div className="max-w-4xl"><p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-white/25">Contact</p><h2 className="mt-6 text-5xl font-semibold tracking-[-0.07em] sm:text-7xl">Have a problem<br /><span className="text-white/30">worth building for?</span></h2><div className="mt-10 flex flex-wrap items-center gap-4"><button onClick={copyEmail} className="rounded-full bg-white px-6 py-3 text-xs font-semibold text-black transition hover:bg-white/90">{copied ? "Email copied" : "Copy email"}</button><a href="mailto:koglesh.official@gmail.com" className="rounded-full border border-white/10 bg-white/[0.04] px-6 py-3 text-xs text-white/55 transition hover:border-white/25 hover:text-white">koglesh.official@gmail.com</a></div></div></div></section>

      <footer className="relative z-10 border-t border-white/[0.07]"><div className="mx-auto flex max-w-7xl flex-col gap-5 px-6 py-8 text-[9px] uppercase tracking-[0.22em] text-white/20 sm:flex-row sm:items-center sm:justify-between lg:px-10"><span>Koglesh R. Murugan · Malaysia</span><span>Build · Test · Ship · Repeat</span><span>© 2026</span></div></footer>
    </main>
  );
}
