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
  { name: "MIRROR", summary: "Deterministic decision-simulation engine for resource-constrained scenarios.", stack: "Next.js · React · TypeScript", href: "https://mirror-simulation-engine.vercel.app", source: "https://github.com/kogleshofficial-hub/mirror-simulation-engine" },
  { name: "GRIDPULSE", summary: "Evidence-first infrastructure intelligence control plane separating validation, prediction and explanation.", stack: "Next.js · PostgreSQL · Zod · Azure ML · Microsoft Foundry", href: "https://gridpulse-three.vercel.app", source: "https://github.com/kogleshofficial-hub/GRIDPULSE" },
  { name: "PACE", summary: "Multi-user academic workload planner with Appwrite authentication, per-user permissions and seven-day capacity planning.", stack: "Next.js · React · TypeScript · Appwrite", href: "https://pace-nu-seven.vercel.app", source: "https://github.com/kogleshofficial-hub/PACE" },
  { name: "FoodLoop", summary: "Food-rescue MVP for listing surplus food and managing requests; the initial MVP was built entirely on a phone.", stack: "Next.js · TypeScript · Supabase · PostgreSQL", href: "https://food-loop-app.vercel.app", source: "https://github.com/kogleshofficial-hub/FoodLoop" },
  { name: "SYNAPSE", summary: "Local-first workload planner that creates a seven-day plan from effort, priority and available time.", stack: "Next.js · React · TypeScript · Local Storage", href: "https://synapse-7ldp5tfhy-kogleshofficial-hubs-projects.vercel.app", source: "https://github.com/kogleshofficial-hub/synapse" },
  { name: "QueueWise", summary: "Community queue-tracking concept built around fresh reports and transparent estimates.", stack: "Next.js · Supabase · PostgreSQL · OpenStreetMap", href: "https://queuewise-app.vercel.app", source: "https://github.com/kogleshofficial-hub/queuewise" }
];

export default function ResumePage() {
  return (
    <main className="resume-page min-h-screen bg-[#050505] text-white">
      <a href="#resume-content" className="skip-link print-hide">Skip to résumé content</a>
      <div className="resume-actions print-hide"><Link href="/" className="font-mono text-[10px] uppercase tracking-[0.14em] text-white/80 hover:text-white">← Portfolio</Link><PrintButton /></div>
      <article id="resume-content" className="mx-auto max-w-4xl px-6 py-12 sm:py-16 lg:px-10">
        <header className="border-b border-white/20 pb-8">
          <p className="font-mono text-[9px] uppercase tracking-[0.18em] text-cyan-100/80">Résumé / Project-focused</p>
          <h1 className="mt-4 text-5xl font-semibold tracking-[-0.07em] sm:text-7xl">Koglesh R. Murugan</h1>
          <p className="mt-4 text-lg text-white/85">Independent student developer · Product builder · Malaysia</p>
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
          <p>I build and ship practical web products, deterministic simulation systems and data-aware interfaces. My focus is clear system boundaries, typed code, trustworthy data, explainable behavior, and learning through implementation, testing and iteration.</p>
        </section>
        <section className="resume-section">
          <h2>Technical skills</h2>
          <p><strong>Frontend:</strong> React, Next.js, TypeScript, JavaScript, Tailwind CSS</p>
          <p><strong>Data &amp; backend:</strong> Supabase, PostgreSQL, Appwrite, API validation with Zod</p>
          <p><strong>Platform &amp; tools:</strong> Java, Git, GitHub, Vercel, Azure AI service integration</p>
          <p><strong>Product work:</strong> technical documentation, interface design, debugging, deployment, short-form video editing and storytelling</p>
        </section>
        <section className="resume-section">
          <h2>Selected project work</h2>
          <div className="resume-project-list">{projects.map((project) => <article key={project.name} className="resume-project"><div className="flex flex-wrap items-baseline justify-between gap-2"><h3>{project.name}</h3><span className="resume-stack">{project.stack}</span></div><p>{project.summary}</p><div className="resume-links"><a href={project.href} target="_blank" rel="noopener noreferrer">Live product ↗</a><a href={project.source} target="_blank" rel="noopener noreferrer">Source repository ↗</a></div></article>)}</div>
        </section>
        <section className="resume-section">
          <h2>Selected achievements</h2>
          <ul>
            <li>Gold medal — VIFA Gewinn India Open International Taekwondo Championship, 28–29 September 2024, Mapusa, Goa, India.</li>
            <li>Bronze medal — 10th MBC Cup Open International Taekwondo Championship, Korea, 2025.</li>
            <li>Taekwondo Black Belt rank.</li>
            <li>Public hackathon submissions: GRIDPULSE at NextStep Hacks 2026 and PACE at the CSC Back-to-School Hackathon. These are submission records, not prize claims.</li>
            <li>FoodLoop initial MVP built entirely on a phone.</li>
          </ul>
        </section>
        <section className="resume-section">
          <h2>Creator project</h2>
          <p>AERO is a challenge-driven video project focused on real attempts, learning, editing experiments and documenting progress. A dated YouTube Studio snapshot for 12 September–9 October 2026 recorded 35,550 views, 125.3 watch hours and +42 subscribers; these are historical period metrics, not live or lifetime totals.</p>
        </section>
        <footer className="resume-footer"><span>Project case studies and detailed source links</span><a href="https://koglesh-portfolio.vercel.app/" target="_blank" rel="noopener noreferrer">koglesh-portfolio.vercel.app</a></footer>
      </article>
    </main>
  );
}
