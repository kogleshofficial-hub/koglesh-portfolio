import type { Metadata } from "next";
import Link from "next/link";
import { PrintButton } from "@/components/site-chrome";

export const metadata: Metadata = {
  title: "Résumé",
  description: "Printable project résumé for Koglesh R. Murugan — independent student developer and product builder in Malaysia.",
  alternates: { canonical: "/resume" },
  robots: { index: true, follow: true }
};

const projects = [
  { name: "Kyrqen", summary: "Freight-document workflow prototype for organising shipment documents, creating draft records and flagging mismatches for human review.", stack: "Next.js · TypeScript · Supabase · PostgreSQL", href: "https://kryqen.vercel.app", source: "https://github.com/kogleshofficial-hub/kyrqen" },
  { name: "FoodLoop", summary: "Food-rescue MVP for listing surplus food and handling requests. I built the first version entirely on a phone.", stack: "Next.js · TypeScript · Supabase · PostgreSQL", href: "https://food-loop-app.vercel.app", source: "https://github.com/kogleshofficial-hub/FoodLoop" },
  { name: "GRIDPULSE", summary: "Infrastructure-data review concept that keeps simulated telemetry separate from optional AI analysis.", stack: "Next.js · PostgreSQL · Zod · Azure", href: "https://gridpulse-three.vercel.app", source: "https://github.com/kogleshofficial-hub/GRIDPULSE" },
  { name: "PACE", summary: "Academic workload planner with account-based storage and a seven-day planning view.", stack: "Next.js · React · TypeScript · Appwrite", href: "https://pace-nu-seven.vercel.app", source: "https://github.com/kogleshofficial-hub/PACE" },
  { name: "MIRROR", summary: "Local simulation tool for comparing outcomes under different resource constraints.", stack: "Next.js · React · TypeScript", href: "https://mirror-simulation-engine.vercel.app", source: "https://github.com/kogleshofficial-hub/mirror-simulation-engine" },
  { name: "QueueWise", summary: "Community queue-tracking concept based on recent reports and transparent estimates.", stack: "Next.js · Supabase · PostgreSQL · OpenStreetMap", href: "https://queuewise-app.vercel.app", source: "https://github.com/kogleshofficial-hub/queuewise" }
];

const highlightedSubjects = new Set<string>(["Physics", "Chemistry", "Additional Mathematics", "Computer Science"]);

const grades = [
  ["Bahasa Melayu", "A-", "A"],
  ["English", "A", "A"],
  ["Mathematics", "B+", "A-"],
  ["History", "A-", "B+"],
  ["Moral Education", "A-", "A+"],
  ["Tamil", "A-", "A"],
  ["Tamil Literature", "A-", "A-"],
  ["Physics", "A-", "C"],
  ["Chemistry", "E", "G (Fail)"],
  ["Additional Mathematics", "G (Fail)", "G (Fail)"],
  ["Computer Science", "A", "C+"],
  ["Physical Education", "A-", "B"]
] as const;

const sectionClass = "border-b border-white/10 py-7 sm:py-8";
const headingClass = "mb-4 text-xl font-semibold tracking-[-0.04em] text-[#f2f0ed] sm:text-2xl";
const paragraphClass = "max-w-3xl text-sm leading-7 text-white/65";

export default function ResumePage() {
  return (
    <main className="resume-page min-h-screen text-[#f2f0ed]">
      <a href="#resume-content" className="print-hide sr-only focus:not-sr-only">Skip to résumé content</a>

      <header className="site-header print-hide">
        <div className="site-shell header-inner">
          <Link href="/" className="wordmark" aria-label="Koglesh, back to main portfolio">
            <span className="wordmark-mark">K</span>
            <span>Koglesh</span>
          </Link>
          <nav aria-label="Résumé navigation" className="site-nav">
            <Link href="/scholarship">Scholarship Profile</Link>
            <Link href="/">Portfolio</Link>
            <PrintButton />
          </nav>
        </div>
      </header>

      <article id="resume-content" className="resume-content mx-auto max-w-4xl px-5 py-10 sm:px-8 sm:py-14">
        <header className="border-b border-white/10 pb-7 sm:pb-9">
          <p className="section-kicker">Résumé / Student profile</p>
          <h1 className="mt-4 text-4xl font-semibold tracking-[-0.075em] text-[#f2f0ed] sm:text-5xl">Koglesh R. Murugan</h1>
          <p className="mt-3 text-sm text-white/65 sm:text-base">Student · Software projects · Malaysia</p>
          <div className="mt-5 flex flex-wrap gap-x-5 gap-y-2 text-xs text-white/65">
            <a className="underline decoration-[#d87968] underline-offset-4 hover:text-white" href="mailto:koglesh.official@gmail.com">koglesh.official@gmail.com</a>
            <a className="underline decoration-[#d87968] underline-offset-4 hover:text-white" href="https://koglesh-portfolio.vercel.app/" target="_blank" rel="noopener noreferrer">Portfolio</a>
            <a className="underline decoration-[#d87968] underline-offset-4 hover:text-white" href="https://github.com/kogleshofficial-hub" target="_blank" rel="noopener noreferrer">GitHub</a>
            <a className="underline decoration-[#d87968] underline-offset-4 hover:text-white" href="https://www.linkedin.com/in/koglesh-r-murugan-020450430/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <a className="underline decoration-[#d87968] underline-offset-4 hover:text-white" href="https://www.youtube.com/@ItsAero_Official" target="_blank" rel="noopener noreferrer">AERO / YouTube</a>
          </div>
        </header>

        <section className={sectionClass}>
          <h2 className={headingClass}>Profile</h2>
          <p className={paragraphClass}>I am a Form 4 Science stream student at Sekolah Menengah Kebangsaan Desa Cempaka in Negeri Sembilan, Malaysia. My subjects include Physics, Chemistry, Additional Mathematics and Computer Science. I explore ideas through early software prototypes and creative projects. I am still strengthening my programming fundamentals so I can understand, test and maintain more of my own code.</p>
        </section>

        <section className={sectionClass}>
          <h2 className={headingClass}>Education</h2>
          <p className={paragraphClass}><strong className="font-medium text-white">Form 4 Science stream · Sekolah Menengah Kebangsaan Desa Cempaka · Negeri Sembilan, Malaysia</strong></p>
          <p className={"mt-3 " + paragraphClass}>Preparing for SPM 2027. Current school work includes Computer Science coursework. My subject combination includes Physics, Chemistry, Additional Mathematics and Computer Science.</p>
          <h3 className="mb-3 mt-6 text-base font-semibold text-white">Examination grades</h3>
          <p className="mb-4 text-xs leading-6 text-white/45">End-year grades are estimates using the published 2024 SPM grade bands. Internal school examinations may use different boundaries, so these are not official SPM grades.</p>
          <div className="overflow-x-auto">
            <table className="w-full min-w-[520px] border-collapse text-left text-sm">
              <thead>
                <tr className="border-y border-white/10 text-xs text-white/45">
                  <th scope="col" className="py-3 pr-4 font-medium">Subject</th>
                  <th scope="col" className="px-3 py-3 font-medium">Mid-year</th>
                  <th scope="col" className="py-3 pl-3 font-medium">End-year</th>
                </tr>
              </thead>
              <tbody>
                {grades.map(([subject, midYear, endYear]) => (
                  <tr key={subject} className="border-b border-white/10">
                    <th scope="row" className={"py-3 pr-4 font-medium " + (highlightedSubjects.has(subject) ? "text-[#d99a8d]" : "text-white/75")}>{subject}</th>
                    <td className="px-3 py-3 text-white/65">{midYear}</td>
                    <td className="py-3 pl-3 text-white/65">{endYear}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className={"mt-5 " + paragraphClass}>My stronger subjects at present are English, Bahasa Melayu, Tamil and Mathematics. Chemistry and Additional Mathematics are my main areas for improvement. I am working to raise my Physics and Computer Science results as well. This is a personal results summary, not an official transcript.</p>
        </section>

        <section className={sectionClass}>
          <h2 className={headingClass}>Tools used in projects</h2>
          <div className="space-y-3 text-sm leading-7 text-white/65">
            <p><strong className="font-medium text-white">Web technologies:</strong> React, Next.js, TypeScript, JavaScript and Tailwind CSS.</p>
            <p><strong className="font-medium text-white">Data and services:</strong> Supabase, PostgreSQL, Appwrite and Zod.</p>
            <p><strong className="font-medium text-white">Workflow:</strong> Git, GitHub, Vercel and version control.</p>
            <p className="text-xs leading-6 text-white/45">These are tools I have used across my projects, not a claim of independent proficiency. I am working through the fundamentals so I can understand, debug and maintain my code myself.</p>
          </div>
        </section>

        <section className={sectionClass}>
          <h2 className={headingClass}>Selected project work</h2>
          <div className="divide-y divide-white/10">
            {projects.map((project) => (
              <article key={project.name} className="resume-project py-5 first:pt-0 last:pb-0">
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h3 className="text-base font-semibold text-white">{project.name}</h3>
                  <span className="text-xs text-white/40">{project.stack}</span>
                </div>
                <p className="mt-2 text-sm leading-7 text-white/65">{project.summary}</p>
                <div className="mt-3 flex flex-wrap gap-x-5 gap-y-2 text-xs">
                  <a className="text-[#d99a8d] underline decoration-[#d87968] underline-offset-4 hover:text-[#f0b0a2]" href={project.href} target="_blank" rel="noopener noreferrer">Live product ↗</a>
                  <a className="text-[#d99a8d] underline decoration-[#d87968] underline-offset-4 hover:text-[#f0b0a2]" href={project.source} target="_blank" rel="noopener noreferrer">Source repository ↗</a>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className={sectionClass}>
          <h2 className={headingClass}>Selected achievements</h2>
          <ul className="list-disc space-y-2 pl-5 text-sm leading-7 text-white/65">
            <li>Gold medal, Poomsae Taeguk 6 — VIFA Gewinn International Taekwondo Championship, India, 2024.</li>
            <li>Bronze medal, Poomsae Taeguk 7 — 10th MBC Cup International Open Taekwondo Championships, Korea, 2025.</li>
            <li>Taekwondo 2nd Dan Black Belt, awarded December 2025, with a certificate from Kukkiwon headquarters.</li>
            <li>First place with a partner in a primary-school solar-powered car challenge at age 12, using materials provided by the school.</li>
            <li>2026 Pengakap Kawad Kaki team results: first at school level and second at state level.</li>
            <li>Form 3 school recognition for district-level Pengakap Kawad Kaki and state-level Pengakap Kem participation.</li>
            <li>Participation certificates: Spelling Bee and HIPPO Olympiad.</li>
            <li>Public hackathon submissions: GRIDPULSE at NextStep Hacks 2026 and PACE at the CSC Back-to-School Hackathon. These are submissions, not prize claims.</li>
          </ul>
        </section>

        <section className={sectionClass}>
          <h2 className={headingClass}>Peer learning</h2>
          <p className={paragraphClass}>I have helped classmates get started with website building and personal portfolios. This is informal peer support, not a formal teaching appointment. I also take part in Pengakap (Scouts), the STEM Club and Seni Bela Diri, and I am a Pembimbing Rakan Sebaya (PRS) member.</p>
        </section>

        <section className={sectionClass}>
          <h2 className={headingClass}>Creator project</h2>
          <p className={paragraphClass}>AERO is my YouTube creator project, currently focused on Self-Improvement &amp; Personal Growth and Self-Improvement &amp; Psychology. A channel-page snapshot shared on 26 November 2026 showed 109 subscribers and 89,549 total channel views. I paused uploading during exams and plan to resume afterward.</p>
        </section>

        <section className={sectionClass}>
          <h2 className={headingClass}>Current martial arts practice</h2>
          <div className="space-y-3 text-sm leading-7 text-white/65">
            <p><strong className="font-medium text-white">Silambam:</strong> Brown-Black belt level, preparing for grading in December 2026. The next grade has not yet been awarded.</p>
            <p><strong className="font-medium text-white">Taekwondo:</strong> I began training at age six and help teach younger students during training sessions.</p>
          </div>
        </section>

        <section className="py-7 sm:py-8">
          <h2 className={headingClass}>Study goals</h2>
          <div className="space-y-3 text-sm leading-7 text-white/65">
            <p>My next academic milestone is SPM 2027. I hope to study Computer Science or an AI-related subject through a fully funded scholarship. The United States is my first-choice destination, and I am also researching Australia.</p>
          </div>
        </section>

        <footer className="border-t border-white/10 pt-6 text-xs text-white/45">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <span>Project case studies and detailed source links</span>
            <a className="text-[#d99a8d] underline decoration-[#d87968] underline-offset-4" href="https://koglesh-portfolio.vercel.app/" target="_blank" rel="noopener noreferrer">koglesh-portfolio.vercel.app</a>
          </div>
        </footer>
      </article>
    </main>
  );
}
