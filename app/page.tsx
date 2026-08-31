"use client";

import { useEffect, useState } from "react";

const projects = [
  {
    number: "01",
    title: "QueueWise",
    label: "LIVE · CIVIC TECH",
    description:
      "A real-time community queue tracker for clinics, banks, government offices, schools and other public services. Fresh reports, transparent estimates and no invented queue numbers.",
    tags: ["Next.js", "Supabase", "PostgreSQL", "OpenStreetMap", "Vercel"],
    href: "https://queuewise-app.vercel.app",
    source: "https://github.com/kogleshofficial-hub/queuewise",
    cta: "Open QueueWise",
  },
  {
    number: "02",
    title: "FoodLoop",
    label: "SOCIAL IMPACT",
    description:
      "A real food-rescue platform connecting surplus food with people who can use it, built around real accounts, listings and request workflows.",
    tags: ["Next.js", "Supabase", "PostgreSQL", "Vercel"],
    href: "https://food-loop-app.vercel.app",
    source: "https://github.com/kogleshofficial-hub/FoodLoop",
    cta: "Open FoodLoop",
  },
  {
    number: "03",
    title: "One Next Step",
    label: "AI PRODUCT",
    description:
      "A focused decision experience designed to turn an overwhelming situation into one clear, useful next action.",
    tags: ["Next.js", "TypeScript", "AI"],
    href: "https://one-next-step.vercel.app",
    source: "https://github.com/kogleshofficial-hub/one-next-step",
    cta: "Try it live",
  },
  {
    number: "04",
    title: "Truth Checker",
    label: "WEB PRODUCT",
    description:
      "An evidence-first claim investigation experience built to make online information easier to examine, understand and question.",
    tags: ["Next.js", "TypeScript", "AI", "Evidence"],
    href: "https://truth-checker-app.vercel.app",
    source: "https://github.com/kogleshofficial-hub/truth-checker",
    cta: "Open Truth Checker",
  },
  {
    number: "05",
    title: "AERO",
    label: "CREATIVE PROJECT",
    description:
      "A challenge-driven content project built around learning difficult skills, experimenting, storytelling and documenting progress.",
    tags: ["YouTube", "Editing", "Storytelling"],
    href: "https://www.youtube.com/@ItsAero_Official",
    source: "https://github.com/kogleshofficial-hub",
    cta: "Watch AERO",
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
  "AI products",
  "UI design",
  "OpenStreetMap",
  "Git & GitHub",
  "Vercel",
];

const principles = [
  ["01", "Find the real problem", "Start with something people genuinely experience."],
  ["02", "Build the useful thing", "Prefer working products over impressive-looking demos."],
  ["03", "Test what breaks", "Real feedback is part of the build, not the end of it."],
  ["04", "Improve relentlessly", "Every project is a chance to become a better builder."],
];

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
    const onMove = (event: MouseEvent) =>
      setSpotlight({
        x: (event.clientX / window.innerWidth) * 100,
        y: (event.clientY / window.innerHeight) * 100,
      });
    const updateTime = () =>
      setTime(
        new Intl.DateTimeFormat("en-MY", {
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
          hour12: false,
          timeZone: "Asia/Kuala_Lumpur",
        }).format(new Date()),
      );

    onScroll();
    updateTime();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("mousemove", onMove, { passive: true });
    const clock = window.setInterval(updateTime, 1000);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("mousemove", onMove);
      window.clearInterval(clock);
    };
  }, []);

  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

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
      <div
        className="pointer-events-none fixed inset-0 z-0 opacity-70 transition-[background] duration-300"
        style={{
          background: `radial-gradient(520px circle at ${spotlight.x}% ${spotlight.y}%, rgba(255,255,255,.065), transparent 65%)`,
        }}
      />
      <div className="pointer-events-none fixed inset-0 z-0 bg-[linear-gradient(rgba(255,255,255,.018)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.018)_1px,transparent_1px)] bg-[size:72px_72px]" />
      <div
        className="pointer-events-none fixed left-0 top-0 z-[60] h-px bg-white/80"
        style={{ width: `${progress}%` }}
      />

      <nav
        className={`fixed left-0 right-0 top-0 z-50 transition-all duration-500 ${
          scrolled
            ? "border-b border-white/[0.08] bg-[#050505]/75 backdrop-blur-2xl"
            : ""
        }`}
      >
        <div className="mx-auto flex h-[76px] max-w-7xl items-center justify-between px-6 lg:px-10">
          <button
            onClick={() => scrollTo("home")}
            className="group flex items-center gap-3"
            aria-label="Back to top"
          >
            <span className="relative flex h-9 w-9 items-center justify-center rounded-xl border border-white/15 bg-white/[0.045] text-sm font-semibold shadow-[0_0_30px_rgba(255,255,255,.04)] transition group-hover:border-white/30 group-hover:bg-white/[0.08]">
              K
            </span>
            <span className="hidden text-[10px] font-semibold uppercase tracking-[0.24em] text-white/55 sm:block">
              Koglesh R. Murugan
            </span>
          </button>
          <div className="hidden items-center gap-7 md:flex">
            <button onClick={() => scrollTo("work")} className="text-xs text-white/40 transition hover:text-white">Work</button>
            <button onClick={() => scrollTo("about")} className="text-xs text-white/40 transition hover:text-white">About</button>
            <a href="https://github.com/kogleshofficial-hub" target="_blank" rel="noopener noreferrer" className="text-xs text-white/40 transition hover:text-white">GitHub</a>
            <button onClick={() => scrollTo("contact")} className="rounded-full border border-white/10 bg-white/[0.04] px-5 py-2.5 text-xs text-white/70 transition hover:border-white/25 hover:bg-white/[0.09] hover:text-white">Let&apos;s talk</button>
          </div>
        </div>
      </nav>

      <section id="home" className="relative z-10 mx-auto flex min-h-screen max-w-7xl flex-col justify-center px-6 pb-20 pt-28 lg:px-10">
        <div className="max-w-6xl">
          <div className="mb-8 flex items-center gap-3 animate-[fadeIn_.8s_ease-out_both]">
            <span className="h-px w-12 bg-white/35" />
            <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-white/35">Independent builder · Malaysia</span>
          </div>
          <h1 className="max-w-5xl text-[clamp(4rem,11vw,10.5rem)] font-semibold leading-[0.82] tracking-[-0.085em] animate-[rise_.9s_ease-out_both]">
            I make<br /><span className="bg-gradient-to-b from-white to-white/30 bg-clip-text text-transparent">ideas real.</span>
          </h1>
          <div className="mt-12 grid max-w-5xl gap-10 md:grid-cols-[1fr_auto] md:items-end">
            <p className="max-w-2xl text-base leading-8 text-white/42 sm:text-lg">
              I&apos;m Koglesh R. Murugan. I build real-world web products, AI experiences and creative digital projects — from idea to working software.
            </p>
            <div className="flex flex-wrap items-center gap-3">
              <button onClick={() => scrollTo("work")} className="group flex w-fit items-center gap-3 text-sm text-white/70 transition hover:text-white">
                <span className="flex h-12 w-12 items-center justify-center rounded-full border border-white/12 bg-white/[0.035] transition group-hover:-translate-y-1 group-hover:border-white/30">↓</span>
                See the work
              </button>
              <a href="https://queuewise-app.vercel.app" target="_blank" rel="noopener noreferrer" className="rounded-full border border-white/10 bg-white/[0.04] px-5 py-3 text-xs text-white/55 transition hover:border-white/25 hover:bg-white/[0.09] hover:text-white">
                Explore QueueWise ↗
              </a>
            </div>
          </div>
        </div>
        <div className="absolute bottom-8 left-6 right-6 flex items-center justify-between border-t border-white/[0.07] pt-5 text-[9px] font-medium uppercase tracking-[0.24em] text-white/20 lg:left-10 lg:right-10">
          <span>Portfolio / 2026</span><span className="hidden sm:block">Build · Learn · Repeat</span><span>{time || "MY · 00:00:00"}</span>
        </div>
      </section>

      <section id="work" className="relative z-10 mx-auto max-w-7xl scroll-mt-20 px-6 py-28 lg:px-10 lg:py-40">
        <div className="mb-16 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div><p className="mb-4 text-[10px] font-semibold uppercase tracking-[0.28em] text-white/25">Selected work</p><h2 className="text-4xl font-semibold tracking-[-0.06em] sm:text-6xl">Built, not imagined.</h2></div>
          <p className="max-w-sm text-sm leading-7 text-white/30">Real products, experiments and creative work. Each project starts with a problem, gets shipped, and becomes a feedback loop.</p>
        </div>

        <a href={projects[0].href} target="_blank" rel="noopener noreferrer" className="group relative mb-6 block overflow-hidden rounded-[2rem] border border-white/[0.09] bg-white/[0.025] transition duration-500 hover:-translate-y-1 hover:border-white/20">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_20%,rgba(255,255,255,.08),transparent_35%)] opacity-70 transition duration-700 group-hover:scale-110" />
          <div className="relative grid min-h-[590px] lg:grid-cols-[1.05fr_.95fr]">
            <div className="flex flex-col justify-between border-b border-white/[0.07] p-8 sm:p-12 lg:border-b-0 lg:border-r">
              <div className="flex items-center justify-between"><span className="text-[10px] font-semibold uppercase tracking-[0.24em] text-white/25">Featured / QueueWise</span><span className="rounded-full border border-white/10 px-3 py-1.5 text-[9px] text-white/30">01</span></div>
              <div className="py-14">
                <div className="mb-6 flex items-center gap-3"><span className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.05] text-lg font-semibold">Q</span><span className="text-[10px] uppercase tracking-[0.22em] text-white/30">Live civic-tech product</span></div>
                <h3 className="max-w-xl text-5xl font-semibold tracking-[-0.065em] sm:text-7xl">Know the queue<br /><span className="text-white/30">before you go.</span></h3>
                <p className="mt-7 max-w-xl text-sm leading-7 text-white/40 sm:text-base">A real community-powered queue tracker for everyday services. People report what they genuinely observe, and fresh reports create transparent live estimates.</p>
              </div>
              <div className="flex flex-wrap gap-2">{projects[0].tags.map((tag) => <span key={tag} className="rounded-full border border-white/[0.08] bg-black/20 px-3 py-1.5 text-[10px] text-white/30">{tag}</span>)}</div>
            </div>
            <div className="relative flex min-h-[460px] flex-col justify-between p-8 sm:p-12">
              <div className="absolute right-12 top-16 h-64 w-64 rounded-full border border-white/[0.07] opacity-60 transition duration-700 group-hover:scale-110 group-hover:rotate-12" />
              <div className="absolute right-28 top-32 h-32 w-32 rounded-full border border-white/[0.09] opacity-70 transition duration-700 group-hover:scale-125" />
              <div className="relative"><p className="mb-8 text-[10px] uppercase tracking-[0.22em] text-white/25">What makes it real</p><div className="space-y-5">{["Real places", "Fresh community reports", "Transparent estimates"].map((item, index) => <div key={item} className="flex gap-5 border-b border-white/[0.06] pb-5"><span className="font-mono text-[9px] text-white/20">0{index + 1}</span><span className="text-sm text-white/55">{item}</span></div>)}</div></div>
              <div className="relative flex items-center justify-between rounded-2xl border border-white/10 bg-white/[0.035] p-5 transition group-hover:bg-white/[0.06]"><div><span className="block text-xs text-white/70">Open live product</span><span className="mt-1 block text-[10px] text-white/25">queuewise-app.vercel.app</span></div><span className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 transition group-hover:translate-x-1 group-hover:border-white/25">↗</span></div>
            </div>
          </div>
        </a>

        <div className="grid gap-6 md:grid-cols-2">{projects.slice(1).map((project) => <a key={project.number} href={project.href} target="_blank" rel="noopener noreferrer" className="group relative min-h-[360px] overflow-hidden rounded-[2rem] border border-white/[0.07] bg-white/[0.02] p-8 transition duration-500 hover:-translate-y-1 hover:border-white/[0.16] hover:bg-white/[0.035] sm:p-10"><div className="absolute -right-20 -top-20 h-56 w-56 rounded-full bg-white/[0.035] blur-3xl transition duration-700 group-hover:scale-150" /><div className="relative flex h-full flex-col justify-between"><div className="flex items-center justify-between"><span className="text-[10px] font-semibold uppercase tracking-[0.22em] text-white/20">{project.label}</span><span className="text-[10px] text-white/20">{project.number}</span></div><div className="py-12"><h3 className="text-4xl font-semibold tracking-[-0.055em] text-white/85 group-hover:text-white">{project.title}</h3><p className="mt-5 max-w-lg text-sm leading-7 text-white/30">{project.description}</p></div><div className="flex items-end justify-between gap-4"><div className="flex flex-wrap gap-2">{project.tags.map((tag) => <span key={tag} className="rounded-full border border-white/[0.07] px-3 py-1.5 text-[9px] text-white/25">{tag}</span>)}</div><span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/10 text-xs text-white/30 transition group-hover:translate-x-1 group-hover:border-white/25 group-hover:text-white">↗</span></div><span className="mt-6 text-[10px] font-semibold uppercase tracking-[0.2em] text-white/25 transition group-hover:text-white/60">{project.cta} ↗</span></div></a>)}</div>
      </section>

      <section id="about" className="relative z-10 border-y border-white/[0.07] scroll-mt-20">
        <div className="mx-auto grid max-w-7xl gap-16 px-6 py-28 lg:grid-cols-[.9fr_1.1fr] lg:px-10 lg:py-36">
          <div><p className="mb-4 text-[10px] font-semibold uppercase tracking-[0.28em] text-white/25">About the builder</p><h2 className="text-4xl font-semibold tracking-[-0.06em] sm:text-6xl">Curiosity<br /><span className="text-white/30">with execution.</span></h2></div>
          <div className="space-y-8"><p className="text-lg leading-8 text-white/50">I&apos;m Koglesh R. Murugan, a developer and product builder focused on turning real problems into useful digital experiences.</p><p className="text-sm leading-7 text-white/30">I learn by shipping. That means building the interface, connecting the database, testing the uncomfortable parts, fixing what breaks, and putting the result in front of real people.</p><div className="grid gap-3 sm:grid-cols-2">{principles.map(([n, t, d]) => <div key={n} className="rounded-2xl border border-white/[0.07] bg-white/[0.018] p-5"><span className="font-mono text-[9px] text-white/20">{n}</span><h3 className="mt-5 text-sm font-medium text-white/65">{t}</h3><p className="mt-2 text-xs leading-5 text-white/25">{d}</p></div>)}</div></div>
        </div>
      </section>

      <section id="stack" className="relative z-10 mx-auto max-w-7xl scroll-mt-20 px-6 py-28 lg:px-10 lg:py-36">
        <div className="grid gap-12 md:grid-cols-[.7fr_1.3fr] md:items-start"><div><p className="mb-4 text-[10px] font-semibold uppercase tracking-[0.28em] text-white/25">Toolkit</p><h2 className="text-4xl font-semibold tracking-[-0.06em] sm:text-5xl">Tools I use<br /><span className="text-white/30">to ship.</span></h2></div><div className="flex flex-wrap gap-3">{skills.map((skill) => <span key={skill} className="rounded-full border border-white/[0.09] bg-white/[0.02] px-5 py-3 text-xs text-white/45 transition hover:border-white/20 hover:bg-white/[0.05] hover:text-white">{skill}</span>)}</div></div>
      </section>

      <section id="contact" className="relative z-10 border-t border-white/[0.07] scroll-mt-20">
        <div className="mx-auto max-w-7xl px-6 py-28 lg:px-10 lg:py-40"><p className="mb-5 text-[10px] font-semibold uppercase tracking-[0.28em] text-white/25">Contact</p><h2 className="max-w-4xl text-5xl font-semibold tracking-[-0.07em] sm:text-7xl">Have a problem worth<br /><span className="text-white/30">building around?</span></h2><div className="mt-12 flex flex-wrap items-center gap-4"><button onClick={copyEmail} className="rounded-full border border-white/15 bg-white/[0.06] px-6 py-3 text-sm text-white/75 transition hover:border-white/30 hover:bg-white/[0.1] hover:text-white">{copied ? "Email copied ✓" : "Copy my email"}</button><a href="mailto:koglesh.official@gmail.com" className="rounded-full border border-white/[0.08] px-6 py-3 text-sm text-white/40 transition hover:border-white/20 hover:text-white">koglesh.official@gmail.com</a><a href="https://github.com/kogleshofficial-hub" target="_blank" rel="noopener noreferrer" className="rounded-full border border-white/[0.08] px-6 py-3 text-sm text-white/40 transition hover:border-white/20 hover:text-white">GitHub ↗</a></div></div>
      </section>

      <footer className="relative z-10 border-t border-white/[0.07] px-6 py-8 lg:px-10"><div className="mx-auto flex max-w-7xl flex-col gap-4 text-[9px] font-medium uppercase tracking-[0.22em] text-white/20 sm:flex-row sm:items-center sm:justify-between"><span>© 2026 Koglesh R. Murugan</span><span>Developer · Builder · Creator</span><span>Built with Next.js · Deployed on Vercel</span></div></footer>
    </main>
  );
}
