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
  { name: "QueueWise", summary: "Community queue-tracking concept based on recent reports and estimated waiting times.", stack: "Next.js · Supabase · PostgreSQL · OpenStreetMap", href: "https://queuewise-app.vercel.app", source: "https://github.com/kogleshofficial-hub/queuewise" }
];

export default function ResumePage() {
  return (
    <main className="resume-page min-h-screen bg-[#050505] text-white">
      <a href="#resume-content" className="skip-link print-hide">Skip to résumé content</a>
      <div className="resume-actions print-hide"><Link href="/" className="font-mono text-[10px] uppercase tracking-[0.14em] text-white/80 hover:text-white">← Portfolio</Link><PrintButton /></div>
      <article id="resume-content" className="mx-auto max-w-4xl px-6 py-12 sm:py-16 lg:px-10">
        <header className="border-b border-white/20 pb-8">
          <p className="font-mono text-[9px] uppercase tracking-[0.18em] text-cyan-100/80">Résumé / Student profile</p>
          <h1 className="mt-4 text-5xl font-semibold tracking-[-0.07em] sm:text-7xl">Koglesh R. Murugan</h1>
          <p className="mt-4 text-lg text-white/85">Student · Software projects · Malaysia</p>
          <div className="mt-5 flex flex-wrap gap-x-5 gap-y-2 text-xs text-white/80">
            <a href="mailto:koglesh.official@gmail.com" className="underline underline-offset-4">koglesh.official@gmail.com</a>
            <a href="https://koglesh-portfolio.vercel.app/" target="_blank" rel="noopener noreferrer" className="underline underline-offset-4">Portfolio</a>
            <a href="https://github.com/kogleshofficial-hub" target="_blank" rel="noopener noreferrer" className="underline underline-offset-4">GitHub</a>
            <a href="https://www.linkedin.com/in/koglesh-r-murugan-020450430/" target="_blank" rel="noopener noreferrer" className="underline underline-offset-4">LinkedIn</a>
            <a href="https://www.youtube.com/@ItsAero_Official" target="_blank" rel="noopener noreferrer" className="underline underline-offset-4">AERO / YouTube</a>
          </div>
        </header>
        <section className="resume-section">
          <h2>Profile</h2>
          <p>I am a Form 4 Science stream student at Sekolah Menengah Kebangsaan Desa Cempaka in Negeri Sembilan, Malaysia. My subjects include Physics, Chemistry, Additional Mathematics and Computer Science. I explore ideas through early software prototypes and creative projects. I am still strengthening my programming fundamentals so I can understand, test and maintain more of my own code.</p>
        </section>
        <section className="resume-section">
          <h2>Education</h2>
          <p><strong>Form 4 Science stream · Sekolah Menengah Kebangsaan Desa Cempaka · Negeri Sembilan, Malaysia</strong></p>
          <p>Preparing for SPM 2027. Current school work includes Computer Science coursework. My subject combination includes Physics, Chemistry, Additional Mathematics and Computer Science.</p>
          <p><strong>Examination grades</strong></p>
          <p>End-year grades are estimates using the published 2024 SPM grade bands. Internal school examinations may use different boundaries, so these are not official SPM grades.</p>
          <div className="overflow-x-auto">
            <table className="w-full min-w-[520px] border-collapse text-xs">
              <thead><tr><th className="border-b border-white/20 py-2 text-left">Subject</th><th className="border-b border-white/20 py-2 text-left">Mid-year</th><th className="border-b border-white/20 py-2 text-left">End-year</th></tr></thead>
              <tbody>
                <tr><td className="border-b border-white/10 py-2 ">Bahasa Melayu</td><td className="border-b border-white/10 py-2">A-</td><td className="border-b border-white/10 py-2">A</td></tr>
                <tr><td className="border-b border-white/10 py-2 ">English</td><td className="border-b border-white/10 py-2">A</td><td className="border-b border-white/10 py-2">A</td></tr>
                <tr><td className="border-b border-white/10 py-2 ">Mathematics</td><td className="border-b border-white/10 py-2">B+</td><td className="border-b border-white/10 py-2">A-</td></tr>
                <tr><td className="border-b border-white/10 py-2 ">History</td><td className="border-b border-white/10 py-2">A-</td><td className="border-b border-white/10 py-2">B+</td></tr>
                <tr><td className="border-b border-white/10 py-2 ">Moral Education</td><td className="border-b border-white/10 py-2">A-</td><td className="border-b border-white/10 py-2">A+</td></tr>
                <tr><td className="border-b border-white/10 py-2 ">Tamil</td><td className="border-b border-white/10 py-2">A-</td><td className="border-b border-white/10 py-2">A</td></tr>
                <tr><td className="border-b border-white/10 py-2 ">Tamil Literature</td><td className="border-b border-white/10 py-2">A-</td><td className="border-b border-white/10 py-2">A-</td></tr>
                <tr><td className="border-b border-white/10 py-2 font-semibold text-cyan-100">Physics</td><td className="border-b border-white/10 py-2">A-</td><td className="border-b border-white/10 py-2">C</td></tr>
                <tr><td className="border-b border-white/10 py-2 font-semibold text-cyan-100">Chemistry</td><td className="border-b border-white/10 py-2">E</td><td className="border-b border-white/10 py-2">G (Fail)</td></tr>
                <tr><td className="border-b border-white/10 py-2 font-semibold text-cyan-100">Additional Mathematics</td><td className="border-b border-white/10 py-2">G (Fail)</td><td className="border-b border-white/10 py-2">G (Fail)</td></tr>
                <tr><td className="border-b border-white/10 py-2 font-semibold text-cyan-100">Computer Science</td><td className="border-b border-white/10 py-2">A</td><td className="border-b border-white/10 py-2">C+</td></tr>
                <tr><td className="py-2 ">Physical Education</td><td className="py-2">A-</td><td className="py-2">B</td></tr>
                </tbody>
            </table>
          </div>
          <p>My stronger subjects at present are English, Bahasa Melayu, Tamil and Mathematics. Chemistry and Additional Mathematics are my main areas for improvement. I am working to raise my Physics and Computer Science results as well. This is a personal results summary, not an official transcript.</p>
        </section>
        <section className="resume-section">
          <h2>Tools used in projects</h2>
          <p><strong>Web technologies:</strong> React, Next.js, TypeScript, JavaScript and Tailwind CSS.</p>
          <p><strong>Data and services:</strong> Supabase, PostgreSQL, Appwrite and Zod.</p>
          <p><strong>Workflow:</strong> Git, GitHub, Vercel and version control.</p>
          <p>These are tools I have used across my projects, not a claim of independent proficiency. I am working through the fundamentals so I can understand, debug and maintain my code myself.</p>
        </section>
        <section className="resume-section">
          <h2>Selected project work</h2>
          <div className="resume-project-list">{projects.map((project) => <article key={project.name} className="resume-project"><div className="flex flex-wrap items-baseline justify-between gap-2"><h3>{project.name}</h3><span className="resume-stack">{project.stack}</span></div><p>{project.summary}</p><div className="resume-links"><a href={project.href} target="_blank" rel="noopener noreferrer">Live product ↗</a><a href={project.source} target="_blank" rel="noopener noreferrer">Source repository ↗</a></div></article>)}</div>
        </section>
        <section className="resume-section">
          <h2>Selected achievements</h2>
          <ul>
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
        <section className="resume-section">
          <h2>Peer learning</h2>
          <p>I have helped classmates get started with website building and personal portfolios. This is informal peer support, not a formal teaching appointment. I also take part in Pengakap (Scouts), the STEM Club and Seni Bela Diri, and I am a Pembimbing Rakan Sebaya (PRS) member.</p>
        </section>
        <section className="resume-section">
          <h2>Creator project</h2>
          <p>AERO is my YouTube creator project, currently focused on Self-Improvement &amp; Personal Growth and Self-Improvement &amp; Psychology. A channel-page snapshot shared on 26 November 2026 showed 109 subscribers and 89,549 total channel views. I paused uploading during exams and plan to resume afterward.</p>
        </section>
        <section className="resume-section">
          <h2>Current martial arts practice</h2>
          <p><strong>Silambam:</strong> Brown-Black belt level, preparing for grading in December 2026. The next grade has not yet been awarded.</p>
          <p><strong>Taekwondo:</strong> I began training at age six and help teach younger students during training sessions.</p>
        </section>
        <section className="resume-section">
          <h2>Study goals</h2>
          <p>My next academic milestone is SPM 2027. I hope to study Computer Science or an AI-related subject through a fully funded scholarship. The United States is my first-choice destination, and I am also researching Australia.</p>
        </section>
        <footer className="resume-footer"><span>Project case studies and detailed source links</span><a href="https://koglesh-portfolio.vercel.app/" target="_blank" rel="noopener noreferrer">koglesh-portfolio.vercel.app</a></footer>
      </article>
    </main>
  );
}
