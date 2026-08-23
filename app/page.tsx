"use client";

import { useEffect, useState } from "react";

const projects = [
  {
    number: "01",
    title: "One Next Step",
    category: "AI PRODUCT",
    description:
      "A focused decision tool that turns an overwhelming problem into one clear action a person can take right now.",
    stack: ["Next.js", "TypeScript", "Tailwind", "AI"],
    href: "https://one-next-step.vercel.app",
    featured: true,
  },
  {
    number: "02",
    title: "AERO",
    category: "CONTENT PROJECT",
    description:
      "A challenge based content project built around learning difficult skills, documenting progress, and turning the process into engaging videos.",
    stack: ["YouTube", "Editing", "Storytelling"],
    href: "#",
    featured: false,
  },
  {
    number: "03",
    title: "More coming",
    category: "IN PROGRESS",
    description:
      "New experiments, products, and ideas are being built. This space will evolve as the work grows.",
    stack: ["Building", "Learning", "Experimenting"],
    href: "#work",
    featured: false,
  },
];

const skills = [
  "Next.js",
  "React",
  "TypeScript",
  "Tailwind CSS",
  "AI integration",
  "UI design",
  "Video editing",
  "Content creation",
  "Git & GitHub",
];

export default function Home() {
  const [scrolled, setScrolled] = useState(false);
  const [activeProject, setActiveProject] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <main className="min-h-screen overflow-x-hidden bg-[#070707] text-white">
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute left-1/2 top-[-420px] h-[800px] w-[800px] -translate-x-1/2 rounded-full bg-white/[0.025] blur-[140px]" />

        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.5) 1px, transparent 1px)",
            backgroundSize: "72px 72px",
          }}
        />
      </div>

      <nav
        className={`fixed left-0 right-0 top-0 z-50 transition-all duration-500 ${
          scrolled
            ? "border-b border-white/[0.07] bg-[#070707]/80 backdrop-blur-xl"
            : "bg-transparent"
        }`}
      >
        <div className="mx-auto flex h-20 w-full max-w-7xl items-center justify-between px-6 lg:px-10">
          <button
            onClick={() => scrollTo("home")}
            className="group flex items-center gap-3"
            aria-label="Back to top"
          >
            <span className="flex h-9 w-9 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-sm font-semibold transition-all duration-300 group-hover:border-white/20 group-hover:bg-white/[0.07]">
              K
            </span>

            <span className="hidden text-[11px] font-semibold uppercase tracking-[0.22em] text-white/60 sm:block">
              Koglesh R. Murugan
            </span>
          </button>

          <div className="hidden items-center gap-8 md:flex">
            <button
              onClick={() => scrollTo("work")}
              className="text-xs font-medium text-white/40 transition-colors hover:text-white"
            >
              Work
            </button>

            <button
              onClick={() => scrollTo("about")}
              className="text-xs font-medium text-white/40 transition-colors hover:text-white"
            >
              About
            </button>

            <button
              onClick={() => scrollTo("contact")}
              className="rounded-full border border-white/10 bg-white/[0.04] px-5 py-2.5 text-xs font-medium text-white/70 transition-all hover:border-white/20 hover:bg-white/[0.08] hover:text-white"
            >
              Get in touch
            </button>
          </div>
        </div>
      </nav>

      <section
        id="home"
        className="relative mx-auto flex min-h-screen w-full max-w-7xl flex-col justify-center px-6 pb-24 pt-32 lg:px-10"
      >
        <div className="max-w-5xl">
          <div className="mb-8 flex items-center gap-3">
            <span className="h-px w-10 bg-white/30" />
            <span className="text-[10px] font-semibold uppercase tracking-[0.28em] text-white/35">
              Independent builder
            </span>
          </div>

          <h1 className="text-[clamp(3.8rem,10vw,9rem)] font-semibold leading-[0.88] tracking-[-0.075em]">
            I build
            <br />
            <span className="text-white/35">things that matter.</span>
          </h1>

          <div className="mt-10 flex max-w-2xl flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
            <p className="max-w-xl text-base leading-7 text-white/40 sm:text-lg">
              I&apos;m Koglesh R. Murugan, a young builder exploring software,
              AI, design, and content through real projects.
            </p>

            <button
              onClick={() => scrollTo("work")}
              className="group flex w-fit shrink-0 items-center gap-3 text-sm font-medium text-white/70 transition-colors hover:text-white"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] transition-all duration-300 group-hover:border-white/25 group-hover:bg-white/[0.07]">
                <span className="transition-transform duration-300 group-hover:translate-y-1">
                  ↓
                </span>
              </span>
              Explore my work
            </button>
          </div>
        </div>

        <div className="absolute bottom-8 left-6 right-6 flex items-center justify-between border-t border-white/[0.06] pt-5 lg:left-10 lg:right-10">
          <span className="text-[9px] font-medium uppercase tracking-[0.24em] text-white/20">
            Portfolio 2026
          </span>

          <span className="text-[9px] font-medium uppercase tracking-[0.24em] text-white/20">
            Malaysia
          </span>
        </div>
      </section>

      <section
        id="work"
        className="mx-auto w-full max-w-7xl scroll-mt-20 px-6 py-28 lg:px-10 lg:py-40"
      >
        <div className="mb-16 flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="mb-4 text-[10px] font-semibold uppercase tracking-[0.25em] text-white/25">
              Selected work
            </p>

            <h2 className="text-4xl font-semibold tracking-[-0.055em] sm:text-6xl">
              Things I&apos;ve built.
            </h2>
          </div>

          <p className="max-w-sm text-sm leading-6 text-white/30">
            Projects are where ideas become real. Each one represents something
            I chose to learn by actually building.
          </p>
        </div>

        <div className="mb-6 overflow-hidden rounded-[2rem] border border-white/[0.08] bg-white/[0.025]">
          <div className="grid lg:grid-cols-[1.1fr_0.9fr]">
            <div className="relative min-h-[460px] overflow-hidden border-b border-white/[0.07] p-8 sm:p-12 lg:border-b-0 lg:border-r">
              <div className="absolute right-[-100px] top-[-100px] h-[400px] w-[400px] rounded-full bg-white/[0.035] blur-[100px]" />

              <div className="relative flex h-full flex-col justify-between">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-semibold uppercase tracking-[0.22em] text-white/25">
                    Featured project
                  </span>

                  <span className="rounded-full border border-white/10 px-3 py-1.5 text-[9px] font-medium uppercase tracking-[0.15em] text-white/30">
                    01
                  </span>
                </div>

                <div className="mt-20">
                  <div className="mb-5 flex items-center gap-3">
                    <span className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.05] text-lg font-semibold">
                      1
                    </span>

                    <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-white/30">
                      One Next Step
                    </span>
                  </div>

                  <h3 className="max-w-xl text-4xl font-semibold tracking-[-0.055em] sm:text-6xl">
                    Less thinking.
                    <br />
                    <span className="text-white/30">More moving.</span>
                  </h3>

                  <p className="mt-7 max-w-xl text-sm leading-7 text-white/40 sm:text-base">
                    A focused tool for people who are stuck. Instead of giving
                    you another giant plan, it identifies one useful action
                    you can take next.
                  </p>
                </div>

                <div className="mt-12 flex flex-wrap gap-2">
                  {["Next.js", "TypeScript", "AI", "Tailwind CSS"].map(
                    (item) => (
                      <span
                        key={item}
                        className="rounded-full border border-white/[0.08] bg-black/20 px-3 py-1.5 text-[10px] text-white/30"
                      >
                        {item}
                      </span>
                    )
                  )}
                </div>
              </div>
            </div>

            <div className="flex min-h-[460px] flex-col justify-between p-8 sm:p-12">
              <div>
                <p className="mb-8 text-[10px] font-semibold uppercase tracking-[0.22em] text-white/25">
                  The idea
                </p>

                <div className="space-y-5">
                  {[
                    ["01", "Understand the actual problem"],
                    ["02", "Reduce it to one useful action"],
                    ["03", "Move forward without the noise"],
                  ].map(([number, text]) => (
                    <div
                      key={number}
                      className="flex items-center gap-5 border-b border-white/[0.06] pb-5"
                    >
                      <span className="text-[9px] font-medium text-white/20">
                        {number}
                      </span>

                      <span className="text-sm text-white/55">{text}</span>
                    </div>
                  ))}
                </div>
              </div>

              <a
                href="https://one-next-step.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
                className="group mt-12 flex items-center justify-between rounded-2xl border border-white/10 bg-white/[0.04] p-5 transition-all duration-300 hover:border-white/20 hover:bg-white/[0.07]"
              >
                <span>
                  <span className="block text-xs font-medium text-white/70">
                    Visit project
                  </span>

                  <span className="mt-1 block text-[10px] text-white/25">
                    Open One Next Step
                  </span>
                </span>

                <span className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-sm transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </a>
            </div>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {projects.slice(1).map((project, index) => (
            <a
              key={project.number}
              href={project.href}
              onMouseEnter={() => setActiveProject(index + 1)}
              className="group rounded-[2rem] border border-white/[0.07] bg-white/[0.02] p-8 transition-all duration-500 hover:-translate-y-1 hover:border-white/[0.13] hover:bg-white/[0.035] sm:p-10"
            >
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-semibold uppercase tracking-[0.22em] text-white/20">
                  {project.category}
                </span>

                <span className="text-[10px] text-white/20">
                  {project.number}
                </span>
              </div>

              <div className="mt-20">
                <h3 className="text-3xl font-semibold tracking-[-0.045em] text-white/85 transition-colors group-hover:text-white">
                  {project.title}
                </h3>

                <p className="mt-5 max-w-lg text-sm leading-7 text-white/30">
                  {project.description}
                </p>
              </div>

              <div className="mt-10 flex items-center justify-between">
                <div className="flex flex-wrap gap-2">
                  {project.stack.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-white/[0.07] px-3 py-1.5 text-[9px] text-white/25"
                    >
                      {item}
                    </span>
                  ))}
                </div>

                <span className="ml-4 flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/10 text-xs text-white/30 transition-all duration-300 group-hover:translate-x-1 group-hover:border-white/20 group-hover:text-white">
                  →
                </span>
              </div>
            </a>
          ))}
        </div>

        <div className="mt-8 flex items-center justify-end gap-3 text-[9px] uppercase tracking-[0.2em] text-white/15">
          <span>Projects evolve</span>
          <span className="h-px w-8 bg-white/10" />
          <span>{String(activeProject + 1).padStart(2, "0")}</span>
        </div>
      </section>

      <section
        id="about"
        className="scroll-mt-20 border-y border-white/[0.06] bg-white/[0.015]"
      >
        <div className="mx-auto grid w-full max-w-7xl gap-20 px-6 py-28 lg:grid-cols-[0.75fr_1.25fr] lg:px-10 lg:py-40">
          <div>
            <p className="mb-5 text-[10px] font-semibold uppercase tracking-[0.25em] text-white/25">
              About
            </p>

            <h2 className="text-4xl font-semibold tracking-[-0.055em] sm:text-6xl">
              Still learning.
              <br />
              <span className="text-white/30">Already building.</span>
            </h2>
          </div>

          <div className="max-w-2xl">
            <p className="text-xl leading-9 tracking-[-0.02em] text-white/65 sm:text-2xl sm:leading-10">
              I&apos;m interested in the space where technology, creativity,
              and curiosity meet.
            </p>

            <p className="mt-8 text-sm leading-8 text-white/30 sm:text-base">
              I learn by making things. Websites, AI experiments, content
              projects, and ideas that start as rough concepts and become
              something people can actually interact with.
            </p>

            <p className="mt-6 text-sm leading-8 text-white/30 sm:text-base">
              I&apos;m not trying to pretend I know everything. I&apos;m
              building the skills, shipping the projects, and documenting the
              journey as I go.
            </p>

            <div className="mt-12 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-white/[0.07] bg-white/[0.07] sm:grid-cols-3">
              {[
                ["01", "Build"],
                ["02", "Learn"],
                ["03", "Improve"],
              ].map(([number, label]) => (
                <div key={number} className="bg-[#090909] p-5">
                  <span className="text-[9px] text-white/20">{number}</span>
                  <p className="mt-8 text-xs font-medium text-white/55">
                    {label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-6 py-28 lg:px-10 lg:py-40">
        <div className="grid gap-16 lg:grid-cols-[0.65fr_1.35fr]">
          <div>
            <p className="mb-5 text-[10px] font-semibold uppercase tracking-[0.25em] text-white/25">
              Capabilities
            </p>

            <h2 className="text-4xl font-semibold tracking-[-0.055em] sm:text-5xl">
              Tools I use
              <br />
              <span className="text-white/30">to build.</span>
            </h2>
          </div>

          <div className="flex flex-wrap content-start gap-3">
            {skills.map((skill, index) => (
              <div
                key={skill}
                className="group rounded-full border border-white/[0.08] bg-white/[0.025] px-5 py-3 transition-all duration-300 hover:border-white/20 hover:bg-white/[0.06]"
              >
                <span className="mr-3 text-[9px] text-white/15">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <span className="text-sm text-white/45 transition-colors group-hover:text-white/75">
                  {skill}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        id="contact"
        className="scroll-mt-20 border-t border-white/[0.06]"
      >
        <div className="mx-auto w-full max-w-7xl px-6 py-32 lg:px-10 lg:py-48">
          <div className="max-w-5xl">
            <p className="mb-7 text-[10px] font-semibold uppercase tracking-[0.25em] text-white/25">
              Contact
            </p>

            <h2 className="text-[clamp(3.5rem,9vw,8rem)] font-semibold leading-[0.88] tracking-[-0.075em]">
              Have an idea?
              <br />
              <span className="text-white/30">Let&apos;s talk.</span>
            </h2>

            <p className="mt-10 max-w-xl text-base leading-7 text-white/35">
              Whether you want to talk about a project, technology, or just
              share an interesting idea, you can find me online.
            </p>

            <div className="mt-10 flex flex-wrap gap-3">
              <a
                href="https://github.com/kogleshofficial-hub"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 rounded-full border border-white/10 bg-white/[0.04] px-5 py-3 text-xs font-medium text-white/60 transition-all hover:border-white/20 hover:bg-white/[0.08] hover:text-white"
              >
                GitHub
                <span className="transition-transform group-hover:translate-x-1">
                  →
                </span>
              </a>

              <a
                href="https://www.youtube.com/@ItsAero_Official"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 rounded-full border border-white/10 bg-white/[0.04] px-5 py-3 text-xs font-medium text-white/60 transition-all hover:border-white/20 hover:bg-white/[0.08] hover:text-white"
              >
                YouTube
                <span className="transition-transform group-hover:translate-x-1">
                  →
                </span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-white/[0.06]">
        <div className="mx-auto flex w-full max-w-7xl flex-col gap-5 px-6 py-8 sm:flex-row sm:items-center sm:justify-between lg:px-10">
          <div>
            <p className="text-xs font-medium text-white/50">
              Koglesh R. Murugan
            </p>

            <p className="mt-1 text-[10px] text-white/20">
              Building, learning, and moving forward.
            </p>
          </div>

          <div className="flex items-center gap-5 text-[9px] uppercase tracking-[0.2em] text-white/15">
            <span>© 2026</span>
            <span>Malaysia</span>
          </div>
        </div>
      </footer>
    </main>
  );
}