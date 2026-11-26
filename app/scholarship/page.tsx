import type { Metadata } from "next";
import Link from "next/link";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Scholarship Profile",
  description:
    "A student profile for Koglesh R. Murugan, covering school progress, co-curricular activities, martial arts, early software projects and AERO.",
  alternates: { canonical: "/scholarship" },
  openGraph: {
    title: "Koglesh R. Murugan — Scholarship Profile",
    description:
      "Student developer in Malaysia. Building software, learning in public and growing through technical and creative work.",
    url: "https://koglesh-portfolio.vercel.app/scholarship",
    type: "profile",
  },
  robots: { index: true, follow: true },
};

const projects = [
  {
    number: "01",
    name: "Kyrqen",
    theme: "Reducing repeated work in freight documentation",
    summary:
      "A freight document workspace for Bills of Lading, Consignment Notes and commercial invoices. It extracts shipment details into draft records, checks container numbers and flags mismatches across documents. The extraction is a first pass; a person still reviews the source documents before approving a shipment.",
    stack: ["Next.js", "TypeScript", "Supabase", "PostgreSQL"],
    live: "https://kryqen.vercel.app/",
    source: "https://github.com/kogleshofficial-hub/kyrqen",
  },
  {
    number: "02",
    name: "FoodLoop",
    theme: "A practical problem, a phone, and a first version",
    summary:
      "A web app for listing surplus food and handling requests. I built the initial MVP entirely on a phone, then published the product and source code. It is a build milestone—not a claim of measured food saved or community adoption.",
    stack: ["Next.js", "Supabase", "PostgreSQL"],
    live: "https://food-loop-app.vercel.app/",
    source: "https://github.com/kogleshofficial-hub/FoodLoop",
  },
  {
    number: "03",
    name: "PACE",
    theme: "Making a difficult week easier to plan",
    summary:
      "An academic workload planner that turns deadlines, task effort, priorities and available time into a seven-day plan. I built it with sign-in and per-user data permissions, and documented what should happen when a save cannot be confirmed.",
    stack: ["Next.js", "TypeScript", "Appwrite"],
    live: "https://pace-nu-seven.vercel.app/",
    source: "https://github.com/kogleshofficial-hub/PACE",
    details: "https://koglesh-portfolio.vercel.app/projects/pace",
  },
  {
    number: "04",
    name: "MIRROR",
    theme: "Exploring how changing constraints changes outcomes",
    summary:
      "A simulation tool for resource-constrained scenarios. It lets a user change inputs and compare outcomes, with repeatable results for the same supported scenario and clear limits on what the model represents.",
    stack: ["Next.js", "React", "TypeScript"],
    live: "https://mirror-simulation-engine.vercel.app/",
    source: "https://github.com/kogleshofficial-hub/mirror-simulation-engine",
    details: "https://koglesh-portfolio.vercel.app/projects/mirror",
  },
] as const;

const otherWork = [
  {
    name: "GRIDPULSE",
    summary: "An infrastructure-monitoring concept that keeps the public demo's simulated telemetry clearly labelled.",
    href: "https://koglesh-portfolio.vercel.app/projects/gridpulse",
  },
  {
    name: "QueueWise",
    summary: "A community queue-tracking concept built around fresh reports and transparent estimates.",
    href: "https://queuewise-app.vercel.app/",
  },
  {
    name: "One Next Step",
    summary: "A focused tool designed to turn an overwhelming situation into one useful next action.",
    href: "https://one-next-step.vercel.app/",
  },
  {
    name: "Truth Checker",
    summary: "An evidence-focused experience for examining online claims and their supporting sources.",
    href: "https://truth-checker-app.vercel.app/",
  },
];

const skills = [
  {
    label: "Web tools encountered",
    items: "React, Next.js, TypeScript, JavaScript and Tailwind CSS through AI-assisted prototypes and guided experimentation.",
  },
  {
    label: "Data and app services",
    items: "Supabase, PostgreSQL and Appwrite in projects, with more work still needed to understand the underlying systems independently.",
  },
  {
    label: "Workflow and creative tools",
    items: "Git, GitHub, Vercel, AI tools, video editing and storytelling.",
  },
];

function ExternalLink({ href, children }: { href: string; children: ReactNode }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex min-h-10 items-center gap-2 text-sm text-white/75 underline decoration-white/25 underline-offset-4 transition hover:text-white hover:decoration-white/70"
    >
      {children} <span aria-hidden="true">↗</span>
    </a>
  );
}

export default function ScholarshipPage() {
  return (
    <main id="main-content" className="min-h-screen overflow-x-hidden bg-[#070707] text-[#f5f5f5] selection:bg-cyan-100/25">
      <a href="#main-content" className="skip-link print-hide">Skip to content</a>

      <header className="border-b border-white/10">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-6 py-5 lg:px-10">
          <Link href="/scholarship" aria-label="Koglesh R. Murugan — Scholarship Profile" className="flex min-h-11 items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/15 bg-white/[0.04] text-sm font-semibold">K</span>
            <span>
              <span className="block text-sm font-medium text-white">Koglesh R. Murugan</span>
              <span className="mt-1 block text-[10px] uppercase tracking-[0.17em] text-white/45">Scholarship profile</span>
            </span>
          </Link>
          <nav aria-label="Page navigation" className="flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-white/65">
            <a href="#education" className="transition hover:text-white">Education</a>
            <a href="#school-activities" className="transition hover:text-white">School &amp; activities</a>
            <a href="#projects" className="transition hover:text-white">Projects</a>
            <a href="#achievements" className="transition hover:text-white">Achievements</a>
            <a href="#peer-learning" className="transition hover:text-white">Peer learning</a>
            <a href="#about" className="transition hover:text-white">About</a>
            <Link href="/resume" className="transition hover:text-white">Résumé</Link>
            <Link href="/" className="inline-flex min-h-10 items-center rounded-full border border-white/20 bg-white/[0.04] px-4 transition hover:bg-white/[0.09] hover:text-white">Engineering portfolio ↗</Link>
          </nav>
        </div>
      </header>

      <section className="relative border-b border-white/10">
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(165,243,252,0.09),transparent_45%)]" />
        <div className="relative mx-auto grid max-w-6xl gap-12 px-6 py-20 sm:py-28 lg:grid-cols-[1.35fr_.65fr] lg:items-end lg:px-10 lg:py-32">
          <div>
            <p className="mb-6 flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.24em] text-cyan-100/75">
              <span className="h-px w-9 bg-cyan-100/60" />
              Student developer · Malaysia
            </p>
            <h1 className="max-w-3xl text-5xl font-semibold leading-[0.98] tracking-[-0.065em] sm:text-7xl lg:text-[5.5rem]">
              I learn by
              <br />
              <span className="text-white/55">building things.</span>
            </h1>
            <p className="mt-8 max-w-2xl text-base leading-8 text-white/75 sm:text-lg">
              I&apos;m Koglesh, a 16-year-old Form 4 Science stream student from Negeri Sembilan, Malaysia. I&apos;m interested in Computer Science and AI, and I spend time exploring ideas through small software projects and creative challenges. Some of my early coding work involved substantial AI assistance. I&apos;m now focused on understanding the programming fundamentals behind what I build, not just getting a demo online.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#projects" className="inline-flex min-h-12 items-center rounded-full bg-white px-6 py-3 text-sm font-medium text-black transition hover:bg-cyan-50">Explore selected projects ↓</a>
              <Link href="/resume" className="inline-flex min-h-12 items-center rounded-full border border-white/20 px-6 py-3 text-sm text-white/85 transition hover:border-white/40 hover:bg-white/[0.05]">Résumé / Save as PDF</Link>
            </div>
          </div>

          <aside className="border border-white/12 bg-white/[0.025] p-6 sm:p-7" aria-label="What guides my work">
            <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-white/45">What guides my work</p>
            <div className="mt-5 divide-y divide-white/10">
              <div className="py-4">
                <p className="text-sm font-medium text-white">Start with a real question</p>
                <p className="mt-1 text-sm leading-6 text-white/55">Build because there is something worth understanding or improving.</p>
              </div>
              <div className="py-4">
                <p className="text-sm font-medium text-white">Finish a version people can inspect</p>
                <p className="mt-1 text-sm leading-6 text-white/55">Publish the project, document the choices and share the source when possible.</p>
              </div>
              <div className="py-4">
                <p className="text-sm font-medium text-white">Be honest about the evidence</p>
                <p className="mt-1 text-sm leading-6 text-white/55">Separate a working demo from proven real-world results.</p>
              </div>
            </div>
          </aside>
        </div>
      </section>

      <section id="about" className="mx-auto grid max-w-6xl gap-8 px-6 py-20 sm:py-24 lg:grid-cols-[.7fr_1.3fr] lg:gap-20 lg:px-10">
        <div>
          <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-white/40">01 / A little about me</p>
          <h2 className="mt-5 text-3xl font-semibold leading-tight tracking-[-0.05em] sm:text-4xl">Curiosity became a habit of shipping.</h2>
        </div>
        <div className="space-y-5 text-sm leading-7 text-white/70 sm:text-base sm:leading-8">
          <p>
            I started exploring software because I was curious about what I could make with a computer. That curiosity led me to build websites and early product prototypes, often by experimenting with tools and asking questions as I went. I have used AI heavily in parts of this process, and I do not want to present that as the same thing as writing and understanding every line myself. I am going back through the fundamentals so I can explain, debug and improve my own work with more confidence.
          </p>
          <p>
            I have learned that publishing a project is only one step. A public link does not prove that a product has real users or has solved a problem at scale. I want to learn how to test properly, listen to feedback and understand the code well enough to maintain what I make.
          </p>
        </div>
      </section>

      <section id="education" className="border-y border-white/10 bg-white/[0.015]">
        <div className="mx-auto max-w-6xl px-6 py-20 sm:py-24 lg:px-10">
          <div className="grid gap-8 lg:grid-cols-[.7fr_1.3fr] lg:gap-20">
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-white/40">02 / Education</p>
              <h2 className="mt-4 text-3xl font-semibold leading-tight tracking-[-0.05em] sm:text-4xl">School is part of the work.</h2>
            </div>
            <div className="space-y-5 text-sm leading-7 text-white/70 sm:text-base sm:leading-8">
              <p>I&apos;m a Form 4 student in the Science stream in Negeri Sembilan, preparing for SPM in 2027. My subjects include Mathematics, Additional Mathematics, Physics, Chemistry and Computer Science, alongside languages and humanities.</p>
              <p>My stronger areas at the moment are English, Bahasa Melayu, Tamil, Mathematics and Computer Science. Chemistry and Additional Mathematics are the subjects I need to work on most. I am also completing my school Computer Science coursework.</p>
              <p>I&apos;m sharing the results as a progress record, not as a claim that every subject is already where I want it to be. The end-of-year English result is pending. I have not added grades where only a mark or pass status was supplied.</p>
            </div>
          </div>
          <div className="mt-10 grid gap-8 lg:grid-cols-2">
            <div className="border border-white/10 bg-[#080808] p-5 sm:p-6">
              <h3 className="text-lg font-semibold">Mid-year examination</h3>
              <p className="mt-1 text-xs text-white/45">Clearly aligned core subjects from the school report</p>
              <dl className="mt-5 divide-y divide-white/10">
                {[
                  ["Bahasa Melayu", "78 · A−"],
                  ["English", "84 · A"],
                  ["Mathematics", "69 · B+"],
                  ["History", "79 · A−"],
                ].map(([subject, result]) => <div key={subject} className="flex items-center justify-between gap-4 py-3 text-sm"><dt className="text-white/65">{subject}</dt><dd className="font-medium tabular-nums text-white">{result}</dd></div>)}
              </dl>
            </div>
            <div className="border border-white/10 bg-[#080808] p-5 sm:p-6">
              <h3 className="text-lg font-semibold">End-of-year examination</h3>
              <p className="mt-1 text-xs text-white/45">Marks and statuses as currently reported</p>
              <dl className="mt-5 grid grid-cols-2 gap-x-5">
                {[
                  ["Moral Education", "91"],
                  ["History", "67"],
                  ["Mathematics", "71"],
                  ["Bahasa Melayu", "80"],
                  ["Physics", "50"],
                  ["Chemistry", "Not passed"],
                  ["Additional Mathematics", "Not passed"],
                  ["Physical Education", "64"],
                  ["Bahasa Tamil", "82"],
                  ["Tamil Literature", "76"],
                  ["Computer Science", "56"],
                  ["English", "Pending"],
                ].map(([subject, result]) => <div key={subject} className="border-t border-white/10 py-3"><dt className="text-xs leading-5 text-white/50">{subject}</dt><dd className="mt-1 text-sm font-medium text-white">{result}</dd></div>)}
              </dl>
            </div>
          </div>
          <p className="mt-5 text-xs leading-6 text-white/40">These figures are a personal summary of my school results. They are not a replacement for an official school transcript.</p>
        </div>
      </section>

       
      <section id="school-activities" className="border-y border-white/10 bg-white/[0.015]">
        <div className="mx-auto grid max-w-6xl gap-8 px-6 py-20 sm:py-24 lg:grid-cols-[.7fr_1.3fr] lg:gap-20 lg:px-10">
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-white/40">03 / School and co-curricular</p>
            <h2 className="mt-4 text-3xl font-semibold leading-tight tracking-[-0.05em] sm:text-4xl">Learning with people, not only screens.</h2>
          </div>
          <div className="space-y-6">
            <article className="border border-white/10 p-6 sm:p-7">
              <h3 className="text-lg font-semibold">School involvement</h3>
              <p className="mt-3 text-sm leading-7 text-white/65">I take part in Pengakap (Scouts), the STEM Club and Seni Bela Diri. I am also a Pembimbing Rakan Sebaya (PRS) member, supporting peers in an ordinary student capacity.</p>
            </article>
            <article className="border border-white/10 p-6 sm:p-7">
              <h3 className="text-lg font-semibold">Scouting and team recognition</h3>
              <ul className="mt-3 space-y-3 text-sm leading-7 text-white/65">
                <li>At the school&apos;s annual M.A.S.T.E.R. recognition ceremony in Form 3, I received recognition for district-level Pengakap Kawad Kaki and state-level Pengakap Kem participation.</li>
                <li>In 2026, our Pengakap Kawad Kaki team placed first at an earlier competition level and second at state level.</li>
              </ul>
            </article>
            <article className="border border-white/10 p-6 sm:p-7">
              <h3 className="text-lg font-semibold">Other school experiences</h3>
              <ul className="mt-3 space-y-3 text-sm leading-7 text-white/65">
                <li>First place with a partner in a primary-school solar-powered car challenge at age 12. We built the car using the materials provided by the school.</li>
                <li>Participation certificates for the Spelling Bee and HIPPO Olympiad.</li>
                <li>Currently completing my SPM Computer Science coursework as a school project.</li>
              </ul>
            </article>
            <article className="border border-white/10 p-6 sm:p-7">
              <h3 className="text-lg font-semibold">Silambam</h3>
              <p className="mt-3 text-sm leading-7 text-white/65">I am currently at Brown-Black belt level and preparing for a grading in December 2026. This is my current level; I have not yet completed the next grading.</p>
            </article>
          </div>
        </div>
      </section>
      <section id="projects" className="border-y border-white/10 bg-white/[0.015]">
        <div className="mx-auto max-w-6xl px-6 py-20 sm:py-24 lg:px-10">
          <div className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-white/40">04 / Selected work</p>
              <h2 className="mt-4 text-3xl font-semibold tracking-[-0.05em] sm:text-5xl">Ideas made tangible.</h2>
            </div>
            <p className="max-w-md text-sm leading-6 text-white/55">Four projects that show different sides of how I think, build and learn.</p>
          </div>

          <div className="grid gap-4 lg:grid-cols-3">
            {projects.map((project) => (
              <article key={project.name} className="flex min-w-0 flex-col border border-white/10 bg-[#080808] p-6 sm:p-7">
                <p className="font-mono text-[10px] tracking-[0.15em] text-cyan-100/65">PROJECT {project.number}</p>
                <h3 className="mt-5 text-2xl font-semibold tracking-[-0.045em]">{project.name}</h3>
                <p className="mt-2 text-sm font-medium leading-6 text-white/80">{project.theme}</p>
                <p className="mt-4 flex-1 text-sm leading-7 text-white/60">{project.summary}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {project.stack.map((item) => <span key={item} className="border border-white/10 px-2.5 py-1.5 text-[11px] text-white/55">{item}</span>)}
                </div>
                <div className="mt-6 flex flex-wrap gap-x-5 gap-y-2 border-t border-white/10 pt-5">
                  <ExternalLink href={project.live}>Open project</ExternalLink>
                  <ExternalLink href={project.source}>Source code</ExternalLink>
                  {"details" in project && <Link href={project.details} className="inline-flex min-h-10 items-center text-sm text-cyan-100/80 underline decoration-cyan-100/25 underline-offset-4 transition hover:text-cyan-50">How it works ↗</Link>}
                </div>
              </article>
            ))}
          </div>

          <div className="mt-10 border-t border-white/10 pt-8">
            <p className="text-sm font-medium text-white/80">More work</p>
            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              {otherWork.map((item) => (
                <a key={item.name} href={item.href} className="group flex min-h-24 flex-col justify-between border border-white/10 p-4 transition hover:border-white/25 hover:bg-white/[0.025]">
                  <span className="flex items-center justify-between text-sm font-medium text-white/85">{item.name}<span aria-hidden="true" className="text-white/40 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5">↗</span></span>
                  <span className="mt-2 text-sm leading-6 text-white/55">{item.summary}</span>
                </a>
              ))}
            </div>
            <p className="mt-5 text-xs leading-6 text-white/40">The full engineering portfolio includes deeper case studies, architecture decisions, project limits and additional builds.</p>
            <Link href="/" className="mt-3 inline-flex min-h-10 items-center text-sm text-cyan-100/80 underline decoration-cyan-100/25 underline-offset-4 transition hover:text-cyan-50">Explore the full engineering portfolio ↗</Link>
          </div>
        </div>
      </section>

      <section id="achievements" className="mx-auto max-w-6xl px-6 py-20 sm:py-24 lg:px-10">
        <div className="grid gap-10 lg:grid-cols-[.7fr_1.3fr] lg:gap-20">
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-white/40">05 / Awards and activities</p>
            <h2 className="mt-4 text-3xl font-semibold leading-tight tracking-[-0.05em] sm:text-5xl">Practice, patience and showing up.</h2>
            <p className="mt-5 text-sm leading-7 text-white/60">Taekwondo and creating videos give me different ways to practise, experiment and learn from results.</p>
          </div>
          <div className="space-y-4">
            <article className="border border-white/10 p-6 sm:p-7">
              <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-white/40">Taekwondo</p>
              <h3 className="mt-3 text-xl font-semibold">International competition experience</h3>
              <ul className="mt-5 space-y-4 text-sm leading-6 text-white/70">
                <li><span className="font-medium text-white">Gold medal · Poomsae, Taeguk 6</span> — VIFA Gewinn International Taekwondo Championship, India (2024).</li>
                <li><span className="font-medium text-white">Bronze medal · Poomsae, Taeguk 7</span> — 10th MBC Cup International Open Taekwondo Championships, Korea (2025).</li>
                <li><span className="font-medium text-white">2nd Dan Black Belt</span> — awarded in December 2025. I also received a certificate from Kukkiwon headquarters.</li>
                <li>I began Taekwondo at age six and now help teach younger students during training. I also participated in the 8th Gewinn Malaysia Open Taekwondo Championship in December 2025.</li>
              </ul>
            </article>

            <article className="border border-white/10 p-6 sm:p-7">
              <div className="flex flex-wrap items-start justify-between gap-4">
                <div>
                  <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-white/40">AERO / Creator project</p>
                  <h3 className="mt-3 text-xl font-semibold">Learning to tell a story with real attempts</h3>
                </div>
                <ExternalLink href="https://www.youtube.com/@ItsAero_Official">Visit channel</ExternalLink>
              </div>
              <p className="mt-3 text-sm leading-7 text-white/60">AERO is my main long-term creator project. Its current niche is Self-Improvement &amp; Personal Growth, with a focus on psychology, mindset, habits, self-awareness and personal challenges. I use real attempts and honest progress rather than presenting improvement as an overnight change. I paused uploads during exams and plan to return after the exam period.</p>
              <p className="mt-5 text-xs leading-6 text-white/45">Channel page snapshot shared on 26 November 2026. Figures can change and are not a live counter.</p>
              <dl className="mt-4 grid grid-cols-2 gap-3 border-t border-white/10 pt-5">
                <div><dt className="text-xs text-white/45">Subscribers</dt><dd className="mt-1 text-xl font-semibold tabular-nums">109</dd></div>
                <div><dt className="text-xs text-white/45">Channel views</dt><dd className="mt-1 text-xl font-semibold tabular-nums">89,549</dd></div>
              </dl>
            </article>
          </div>
        </div>
      </section>

      <section className="border-y border-white/10 bg-white/[0.015]">
        <div className="mx-auto grid max-w-6xl gap-10 px-6 py-20 sm:py-24 lg:grid-cols-[.7fr_1.3fr] lg:gap-20 lg:px-10">
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-white/40">06 / Public submissions</p>
            <h2 className="mt-4 text-3xl font-semibold leading-tight tracking-[-0.05em] sm:text-4xl">Work shared beyond my own site.</h2>
          </div>
          <div className="space-y-5">
            <div className="border-b border-white/10 pb-5">
              <h3 className="font-medium text-white">GRIDPULSE · NextStep Hacks 2026</h3>
              <p className="mt-2 text-sm leading-6 text-white/60">A public submission describing the infrastructure project and its approach.</p>
              <div className="mt-2 flex flex-wrap gap-x-5 gap-y-2"><ExternalLink href="https://devpost.com/software/gridpulse-mqy46k">Project submission</ExternalLink><ExternalLink href="https://nextstep2026.devpost.com/">Hackathon page</ExternalLink></div>
            </div>
            <div className="pb-2">
              <h3 className="font-medium text-white">PACE · CSC Back-to-School Hackathon</h3>
              <p className="mt-2 text-sm leading-6 text-white/60">A public submission for an academic workload-planning product.</p>
              <div className="mt-2 flex flex-wrap gap-x-5 gap-y-2"><ExternalLink href="https://devpost.com/software/pace-a7ouxr">Project submission</ExternalLink><ExternalLink href="https://csc-back-to-school.devpost.com/">Hackathon page</ExternalLink></div>
            </div>
            <p className="text-xs leading-6 text-white/40">These links document project submissions and participation. They are not claims of winning, finalist status or judging outcomes.</p>
          </div>
        </div>
      </section>

      <section id="peer-learning" className="border-y border-white/10 bg-white/[0.015]">
        <div className="mx-auto grid max-w-6xl gap-8 px-6 py-20 sm:py-24 lg:grid-cols-[.7fr_1.3fr] lg:gap-20 lg:px-10">
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-white/40">07 / Learning with others</p>
            <h2 className="mt-4 text-3xl font-semibold leading-tight tracking-[-0.05em] sm:text-4xl">Helping other students get started.</h2>
          </div>
          <div className="space-y-5 text-sm leading-7 text-white/70 sm:text-base sm:leading-8">
            <p>I have helped classmates get started with website building and personal portfolios. In one case, I walked a friend through the process of creating a first portfolio, which helped him make his own version. I found that explaining a process to someone else also showed me what I still needed to understand.</p>
            <p>It is informal peer support rather than a formal teaching position. Explaining something to another person often shows me which parts I understand and which parts I still need to learn properly.</p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20 sm:py-24 lg:px-10">
        <div className="grid gap-8 lg:grid-cols-[.7fr_1.3fr] lg:gap-20">
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-white/40">08 / Tools used in projects</p>
            <h2 className="mt-4 text-3xl font-semibold leading-tight tracking-[-0.05em] sm:text-4xl">Tools, practice and an honest skill gap.</h2>
          </div>
          <div className="divide-y divide-white/10 border-y border-white/10">
            {skills.map((skill) => (
              <div key={skill.label} className="grid gap-2 py-5 sm:grid-cols-[190px_1fr] sm:gap-8">
                <h3 className="text-sm font-medium text-white/85">{skill.label}</h3>
                <p className="text-sm leading-6 text-white/60">{skill.items}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <p className="mx-auto mt-6 max-w-6xl px-6 text-xs leading-6 text-white/40 lg:px-10">These are tools I have encountered while building prototypes, often with AI assistance. This list is not a claim of professional or independent mastery. My current priority is learning programming fundamentals and understanding the code behind my projects.</p>
      </section>

      <section className="border-t border-white/10">
        <div className="mx-auto grid max-w-6xl gap-8 px-6 py-20 sm:py-24 lg:grid-cols-[.7fr_1.3fr] lg:gap-20 lg:px-10">
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-white/40">09 / What comes next</p>
            <h2 className="mt-4 text-3xl font-semibold leading-tight tracking-[-0.05em] sm:text-4xl">I&apos;m still at the beginning. That&apos;s the point.</h2>
          </div>
          <div>
            <p className="text-sm leading-7 text-white/70 sm:text-base sm:leading-8">
              My next academic milestone is SPM in 2027. After that, I hope to pursue Computer Science or an AI-related degree through a fully funded scholarship. The United States is my first-choice study destination, and I am also researching Australia. These are goals I am working toward, not offers or outcomes I have already secured.
            </p>
            <p className="mt-5 text-sm leading-7 text-white/70 sm:text-base sm:leading-8">
              I want to keep learning in public, become more capable through practice and use what I learn to make useful things. I also want to be known as someone who treats people with kindness. I am still a student, and there is a lot I have to learn.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="mailto:koglesh.official@gmail.com" className="inline-flex min-h-12 items-center rounded-full bg-white px-6 py-3 text-sm font-medium text-black transition hover:bg-cyan-50">Contact me ↗</a>
              <ExternalLink href="https://github.com/kogleshofficial-hub">GitHub</ExternalLink>
              <ExternalLink href="https://www.linkedin.com/in/koglesh-r-murugan-020450430/">LinkedIn</ExternalLink>
              <ExternalLink href="https://www.youtube.com/@ItsAero_Official">AERO / YouTube</ExternalLink>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-white/10">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 px-6 py-7 text-xs text-white/40 sm:flex-row sm:items-center sm:justify-between lg:px-10">
          <p>© 2026 Koglesh R. Murugan · Malaysia</p>
          <div className="flex flex-wrap gap-x-5 gap-y-2">
            <Link href="/" className="transition hover:text-white/80">Engineering portfolio</Link>
            <Link href="/resume" className="transition hover:text-white/80">Résumé</Link>
            <a href="mailto:koglesh.official@gmail.com" className="transition hover:text-white/80">Email</a>
          </div>
        </div>
      </footer>
    </main>
  );
}
