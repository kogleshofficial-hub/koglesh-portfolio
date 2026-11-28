import type { Metadata } from "next";
import Link from "next/link";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Scholarship Profile",
  description:
    "Koglesh R. Murugan is a Form 4 Science stream student in Negeri Sembilan, Malaysia. This page covers his education, projects and activities.",
  alternates: { canonical: "/scholarship" },
  openGraph: {
    title: "Koglesh R. Murugan | Scholarship Profile",
    description: "Student profile, school results, projects and co-curricular activities.",
    url: "https://koglesh-portfolio.vercel.app/scholarship",
    type: "profile",
  },
  robots: { index: true, follow: true },
};

const projects = [
  {
    name: "Kyrqen",
    description:
      "A freight document workspace for Bills of Lading, Consignment Notes and commercial invoices. It extracts shipment details into draft records, checks container numbers and flags mismatches across documents. A person reviews the source documents before approving a shipment.",
    stack: "Next.js, TypeScript, Supabase, PostgreSQL",
    live: "https://kryqen.vercel.app/",
    source: "https://github.com/kogleshofficial-hub/kyrqen",
  },
  {
    name: "FoodLoop",
    description:
      "A web app for listing surplus food and handling requests. I built the first version entirely on a phone and kept it focused on the basic listing and request flow. It is an early project, not a claim of measured food saved or community adoption.",
    stack: "Next.js, Supabase, PostgreSQL",
    live: "https://food-loop-app.vercel.app/",
    source: "https://github.com/kogleshofficial-hub/FoodLoop",
  },
  {
    name: "PACE",
    description:
      "A study planner that turns deadlines, task effort and available time into a seven-day plan. It uses sign-in and per-user data permissions so each account has its own information. It is a planning aid, so the schedule still needs to be checked by the student.",
    stack: "Next.js, TypeScript, Appwrite",
    live: "https://pace-nu-seven.vercel.app/",
    source: "https://github.com/kogleshofficial-hub/PACE",
    details: "https://koglesh-portfolio.vercel.app/projects/pace",
  },
  {
    name: "MIRROR",
    description:
      "A simulation tool for trying different demand and capacity settings and comparing how they affect a workflow. The model runs locally and gives repeatable results for the same inputs. It only covers the scenarios included in the model.",
    stack: "Next.js, React, TypeScript",
    live: "https://mirror-simulation-engine.vercel.app/",
    source: "https://github.com/kogleshofficial-hub/mirror-simulation-engine",
    details: "https://koglesh-portfolio.vercel.app/projects/mirror",
  },
] as const;

const otherWork = [
  {
    name: "GRIDPULSE",
    description:
      "An infrastructure data review concept that keeps source records separate from optional automated analysis. The public demo uses simulated telemetry.",
    href: "https://koglesh-portfolio.vercel.app/projects/gridpulse",
  },
  {
    name: "QueueWise",
    description:
      "A community queue-tracking concept based on recent reports and estimated waiting times.",
    href: "https://queuewise-app.vercel.app/",
  },
  {
    name: "One Next Step",
    description:
      "A small tool designed to turn a difficult situation into one practical next action.",
    href: "https://one-next-step.vercel.app/",
  },
  {
    name: "Truth Checker",
    description:
      "A tool for examining online claims alongside their sources and supporting context.",
    href: "https://truth-checker-app.vercel.app/",
  },
] as const;

const grades = [
  ["Bahasa Melayu", "A−", "A", "Improved"],
  ["English", "A", "A", "Maintained"],
  ["Mathematics", "B+", "A−", "Improved"],
  ["History", "A−", "B+", "Lower"],
  ["Moral Education", "A−", "A+", "Improved"],
  ["Tamil", "A−", "A", "Improved"],
  ["Tamil Literature", "A−", "A−", "Maintained"],
  ["Physics", "A−", "C", "Lower"],
  ["Chemistry", "E", "G (Fail)", "Lower"],
  ["Additional Mathematics", "G (Fail)", "G (Fail)", "Still not passed"],
  ["Computer Science", "A", "C+", "Lower"],
  ["Physical Education", "A−", "B", "Lower"],
] as const;

function ExternalLink({ href, children }: { href: string; children: ReactNode }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="text-sm text-[#315d73] underline decoration-[#9aafb9] underline-offset-4 hover:text-[#172e3a]"
    >
      {children} <span aria-hidden="true">↗</span>
    </a>
  );
}

function SectionHeading({ children }: { children: ReactNode }) {
  return <h2 className="mb-5 text-xl font-semibold tracking-tight text-[#202522] sm:text-2xl">{children}</h2>;
}

export default function ScholarshipPage() {
  return (
    <main id="main-content" className="min-h-screen bg-[#fafaf8] text-[#303632]">
      <a href="#main-content" className="skip-link print-hide">Skip to content</a>

      <header className="border-b border-[#e4e6e1]">
        <div className="mx-auto flex max-w-4xl flex-wrap items-center justify-between gap-4 px-5 py-5 sm:px-8">
          <Link href="/scholarship" className="text-sm font-semibold text-[#202522]">
            Koglesh R. Murugan
            <span className="mt-1 block text-xs font-normal text-[#788079]">Scholarship profile</span>
          </Link>
          <nav aria-label="Page navigation" className="flex flex-wrap gap-x-4 gap-y-2 text-sm text-[#56615a]">
            <a href="#education" className="hover:text-black">Education</a>
            <a href="#projects" className="hover:text-black">Projects</a>
            <a href="#activities" className="hover:text-black">Activities</a>
            <a href="#achievements" className="hover:text-black">Achievements</a>
            <Link href="/resume" className="hover:text-black">Résumé</Link>
            <Link href="/" className="hover:text-black">Main portfolio</Link>
          </nav>
        </div>
      </header>

      <div className="mx-auto max-w-4xl px-5 sm:px-8">
        <section className="border-b border-[#e4e6e1] py-12 sm:py-16">
          <p className="text-sm text-[#6d776f]">Form 4 Science stream student · Negeri Sembilan, Malaysia</p>
          <h1 className="mt-3 text-3xl font-semibold tracking-tight text-[#202522] sm:text-4xl">
            Koglesh R. Murugan
          </h1>
          <p className="mt-5 max-w-3xl text-base leading-7 text-[#465049]">
            I study Physics, Chemistry, Additional Mathematics and Computer Science. Outside school, I build web projects and run AERO, a YouTube channel about self-improvement and psychology. I am preparing for SPM in 2027 and working on my programming fundamentals.
          </p>
          <div className="mt-5 flex flex-wrap gap-x-5 gap-y-2">
            <ExternalLink href="https://github.com/kogleshofficial-hub">GitHub</ExternalLink>
            <ExternalLink href="https://www.youtube.com/@ItsAero_Official">AERO / YouTube</ExternalLink>
            <a href="mailto:koglesh.official@gmail.com" className="text-sm text-[#315d73] underline decoration-[#9aafb9] underline-offset-4">Email</a>
          </div>
        </section>

        <section id="about" className="border-b border-[#e4e6e1] py-10">
          <SectionHeading>About</SectionHeading>
          <div className="max-w-3xl space-y-4 text-sm leading-7 text-[#465049] sm:text-base">
            <p>
              I started making websites because I wanted to understand how an idea could become something people could use. I have learned by trying things, reading documentation and working through problems as they come up.
            </p>
            <p>
              Publishing a project is only one step. A public link does not prove that a product has real users or has solved a problem at scale. I want to keep improving how I test my work, respond to feedback and maintain what I build.
            </p>
          </div>
          <p className="mt-5 max-w-3xl text-sm leading-7 text-[#465049]">
            When I build something, I try to start with a clear problem, keep the first version manageable and explain what it can and cannot do.
          </p>
        </section>

        <section id="education" className="border-b border-[#e4e6e1] py-10">
          <SectionHeading>Education and examination results</SectionHeading>
          <p className="max-w-3xl text-sm leading-7 text-[#465049]">
            I attend Sekolah Menengah Kebangsaan Desa Cempaka in Negeri Sembilan. I am in Form 4 and preparing for SPM in 2027. My Science stream subjects include Physics, Chemistry, Additional Mathematics and Computer Science.
          </p>
          <p className="mt-3 max-w-3xl text-sm leading-7 text-[#465049]">
            I am also completing my SPM Computer Science coursework. English, Bahasa Melayu, Tamil and Mathematics are among my stronger subjects. Chemistry and Additional Mathematics need more attention.
          </p>

          <div className="mt-7">
            <h3 className="mb-3 text-base font-semibold text-[#202522]">Examination grades</h3>
            <div className="overflow-x-auto">
              <table className="w-full min-w-[570px] border-collapse text-left text-sm">
                <thead>
                  <tr className="border-y border-[#dfe3dd] text-xs text-[#6d776f]">
                    <th scope="col" className="py-3 pr-4 font-medium">Subject</th>
                    <th scope="col" className="py-3 px-3 font-medium">Mid-year</th>
                    <th scope="col" className="py-3 px-3 font-medium">End-year</th>
                    <th scope="col" className="py-3 pl-3 font-medium">Progress</th>
                  </tr>
                </thead>
                <tbody>
                  {grades.map(([subject, midYear, endYear, progress]) => (
                    <tr key={subject} className="border-b border-[#eceeea]">
                      <th scope="row" className={"py-3 pr-4 font-medium " + (["Physics", "Chemistry", "Additional Mathematics", "Computer Science"].includes(subject) ? "text-[#234d60]" : "text-[#303632]")}>{subject}</th>
                      <td className="px-3 py-3 text-[#465049]">{midYear}</td>
                      <td className="px-3 py-3 text-[#465049]">{endYear}</td>
                      <td className="py-3 pl-3 text-xs text-[#667168]">{progress}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-4 max-w-3xl text-xs leading-6 text-[#707970]">
              End-year grades are estimates using published 2024 SPM grade bands. Internal school examinations may use different boundaries, so these are not official SPM grades. <a href="https://sinarbestari.sinarharian.com.my/buletin/takrifan-11-gred-dan-julat-pemarkahan-spm-2024" target="_blank" rel="noopener noreferrer" className="underline underline-offset-4">See the grade bands</a>.
            </p>
          </div>
        </section>

        <section id="activities" className="border-b border-[#e4e6e1] py-10">
          <SectionHeading>School and co-curricular activities</SectionHeading>
          <div className="space-y-6 text-sm leading-7 text-[#465049]">
            <div>
              <h3 className="font-semibold text-[#202522]">School involvement</h3>
              <p className="mt-1">I take part in Pengakap (Scouts), the STEM Club and Seni Bela Diri. I am also a Pembimbing Rakan Sebaya (PRS) member.</p>
            </div>
            <div>
              <h3 className="font-semibold text-[#202522]">Scouting</h3>
              <ul className="mt-1 list-disc space-y-1 pl-5">
                <li>In Form 3, I received recognition at the school&apos;s M.A.S.T.E.R. ceremony for district-level Pengakap Kawad Kaki and state-level Pengakap Kem participation.</li>
                <li>In 2026, our Pengakap Kawad Kaki team placed first at school level and second at state level.</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-[#202522]">Other school experiences</h3>
              <ul className="mt-1 list-disc space-y-1 pl-5">
                <li>I placed first with a partner in a primary-school solar-powered car challenge at age 12. We built the car using materials provided by the school.</li>
                <li>I received participation certificates for the Spelling Bee and HIPPO Olympiad.</li>
                <li>I am completing my SPM Computer Science coursework as a school project.</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-[#202522]">Silambam</h3>
              <p className="mt-1">I currently hold the Brown-Black belt level and am preparing for a grading in December 2026. I have not completed the next grading yet.</p>
            </div>
          </div>
        </section>

        <section id="projects" className="border-b border-[#e4e6e1] py-10">
          <SectionHeading>Selected projects</SectionHeading>
          <p className="mb-6 max-w-3xl text-sm leading-7 text-[#465049]">
            These are projects I have spent time building. Some are still early versions, and their limits are part of the work.
          </p>
          <div className="divide-y divide-[#e4e6e1]">
            {projects.map((project) => (
              <article key={project.name} className="py-6 first:pt-0 last:pb-0">
                <h3 className="text-lg font-semibold text-[#202522]">{project.name}</h3>
                <p className="mt-2 max-w-3xl text-sm leading-7 text-[#465049]">{project.description}</p>
                <p className="mt-2 text-xs text-[#7a837c]">{project.stack}</p>
                <div className="mt-3 flex flex-wrap gap-x-5 gap-y-2">
                  <ExternalLink href={project.live}>Open project</ExternalLink>
                  <ExternalLink href={project.source}>Source code</ExternalLink>
                  {"details" in project && <Link href={project.details} className="text-sm text-[#315d73] underline decoration-[#9aafb9] underline-offset-4">Project notes ↗</Link>}
                </div>
              </article>
            ))}
          </div>

          <div className="mt-8 border-t border-[#e4e6e1] pt-6">
            <h3 className="font-semibold text-[#202522]">Other projects</h3>
            <ul className="mt-3 space-y-4">
              {otherWork.map((item) => (
                <li key={item.name} className="text-sm leading-6 text-[#465049]">
                  <a href={item.href} className="font-medium text-[#315d73] underline decoration-[#9aafb9] underline-offset-4">{item.name}</a>
                  <span> — {item.description}</span>
                </li>
              ))}
            </ul>
          </div>
          <p className="mt-6 text-xs leading-6 text-[#707970]">
            The main engineering portfolio has additional project notes and links.
            {" "}
            <Link href="/" className="underline underline-offset-4">View the main portfolio</Link>.
          </p>
        </section>

        <section id="achievements" className="border-b border-[#e4e6e1] py-10">
          <SectionHeading>Achievements and interests</SectionHeading>
          <div className="space-y-7 text-sm leading-7 text-[#465049]">
            <div>
              <h3 className="font-semibold text-[#202522]">Taekwondo</h3>
              <ul className="mt-1 list-disc space-y-1 pl-5">
                <li>Gold medal in Poomsae, Taeguk 6, at the VIFA Gewinn International Taekwondo Championship in India (2024).</li>
                <li>Bronze medal in Poomsae, Taeguk 7, at the 10th MBC Cup International Open Taekwondo Championships in Korea (2025).</li>
                <li>2nd Dan Black Belt, awarded in December 2025. I also received a certificate from Kukkiwon headquarters.</li>
                <li>I began Taekwondo at age six and now help teach younger students during training. I also participated in the 8th Gewinn Malaysia Open Taekwondo Championship in December 2025.</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-[#202522]">AERO</h3>
              <p className="mt-1">
                AERO is my YouTube channel about self-improvement and psychology. I make content about mindset, habits, self-awareness and personal challenges. I paused uploads during exams and plan to return after the exam period.
              </p>
              <p className="mt-2 text-xs text-[#707970]">
                Channel snapshot from 26 November 2026: 109 subscribers and 89,549 views.
                {" "}
                <ExternalLink href="https://www.youtube.com/@ItsAero_Official">Visit the channel</ExternalLink>.
              </p>
            </div>
          </div>
        </section>

        <section id="submissions" className="border-b border-[#e4e6e1] py-10">
          <SectionHeading>Project submissions</SectionHeading>
          <div className="space-y-5 text-sm leading-7 text-[#465049]">
            <div>
              <h3 className="font-semibold text-[#202522]">GRIDPULSE · NextStep Hacks 2026</h3>
              <p>A public submission describing the infrastructure project and its approach.</p>
              <div className="mt-2 flex flex-wrap gap-5">
                <ExternalLink href="https://devpost.com/software/gridpulse-mqy46k">Project submission</ExternalLink>
                <ExternalLink href="https://nextstep2026.devpost.com/">Hackathon page</ExternalLink>
              </div>
            </div>
            <div>
              <h3 className="font-semibold text-[#202522]">PACE · CSC Back-to-School Hackathon</h3>
              <p>A public submission for an academic workload-planning product.</p>
              <div className="mt-2 flex flex-wrap gap-5">
                <ExternalLink href="https://devpost.com/software/pace-a7ouxr">Project submission</ExternalLink>
                <ExternalLink href="https://csc-back-to-school.devpost.com/">Hackathon page</ExternalLink>
              </div>
            </div>
            <p className="text-xs text-[#707970]">These links document project submissions and participation. They are not claims of winning, finalist status or judging outcomes.</p>
          </div>
        </section>

        <section id="peer-learning" className="border-b border-[#e4e6e1] py-10">
          <SectionHeading>Peer learning</SectionHeading>
          <div className="max-w-3xl space-y-4 text-sm leading-7 text-[#465049]">
            <p>I have helped classmates get started with website building and personal portfolios. In one case, I walked a friend through the process of making a first portfolio, and he later built his own version.</p>
            <p>This was informal help between friends, not a formal teaching role. Explaining the steps also showed me which parts I needed to understand better.</p>
          </div>
        </section>

        <section id="tools" className="border-b border-[#e4e6e1] py-10">
          <SectionHeading>Tools I have used</SectionHeading>
          <div className="space-y-4 text-sm leading-7 text-[#465049]">
            <div>
              <h3 className="font-semibold text-[#202522]">Web development</h3>
              <p>React, Next.js, TypeScript, JavaScript and Tailwind CSS.</p>
            </div>
            <div>
              <h3 className="font-semibold text-[#202522]">Data and app services</h3>
              <p>Supabase, PostgreSQL and Appwrite.</p>
            </div>
            <div>
              <h3 className="font-semibold text-[#202522]">Other tools</h3>
              <p>Git, GitHub and Vercel.</p>
            </div>
          </div>
          <p className="mt-4 max-w-3xl text-xs leading-6 text-[#707970]">
            These are tools I have used in projects, not a claim of professional proficiency. I am still learning the fundamentals and improving my understanding of the code.
          </p>
        </section>

        <section id="plans" className="py-10">
          <SectionHeading>Plans</SectionHeading>
          <div className="max-w-3xl space-y-4 text-sm leading-7 text-[#465049]">
            <p>My next academic milestone is SPM in 2027. After that, I hope to study Computer Science or an AI-related subject through a fully funded scholarship. The United States is my first choice, and I am also researching Australia. These are goals I am working towards, not outcomes I have already secured.</p>
            <p>I want to keep learning, make useful things and treat people with kindness. I know I still have a lot to learn.</p>
          </div>
          <div className="mt-6 flex flex-wrap gap-5">
            <a href="mailto:koglesh.official@gmail.com" className="text-sm font-medium text-[#315d73] underline decoration-[#9aafb9] underline-offset-4">Contact me</a>
            <ExternalLink href="https://github.com/kogleshofficial-hub">GitHub</ExternalLink>
            <ExternalLink href="https://www.linkedin.com/in/koglesh-r-murugan-020450430/">LinkedIn</ExternalLink>
            <ExternalLink href="https://www.youtube.com/@ItsAero_Official">AERO / YouTube</ExternalLink>
          </div>
        </section>
      </div>

      <footer className="border-t border-[#e4e6e1]">
        <div className="mx-auto flex max-w-4xl flex-col gap-2 px-5 py-6 text-xs text-[#7a837c] sm:flex-row sm:items-center sm:justify-between sm:px-8">
          <span>Koglesh R. Murugan · Malaysia</span>
          <div className="flex gap-5">
            <Link href="/">Main portfolio</Link>
            <Link href="/resume">Résumé</Link>
          </div>
        </div>
      </footer>
    </main>
  );
}
