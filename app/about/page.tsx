import type { Metadata } from "next";

const siteUrl = "https://koglesh-portfolio.vercel.app";

export const metadata: Metadata = {
  title: "About Koglesh R. Murugan",
  description: "About Koglesh R. Murugan — an independent developer and product builder creating real-world web products, AI experiences, and creative digital projects.",
  alternates: { canonical: "/about" },
};

const projects = [
  { name: "QueueWise", description: "A community-powered queue tracker for real-world services, built around fresh reports and transparent estimates.", url: "https://queuewise-app.vercel.app/" },
  { name: "BeforeYouGo", description: "A private browser-based checklist tool for preparing before visits, travel and important tasks.", url: "https://beforeyougo-gray.vercel.app/" },
  { name: "FoodLoop", description: "A food-rescue platform connecting surplus food with people who can use it.", url: "https://food-loop-app.vercel.app/" },
  { name: "One Next Step", description: "A focused AI decision experience designed to turn uncertainty into one useful next action.", url: "https://one-next-step.vercel.app/" },
  { name: "Truth Checker", description: "An evidence-first claim investigation tool built around evidence, reasoning and source context.", url: "https://truth-checker-app.vercel.app/" },
  { name: "AERO", description: "A challenge-driven creative project documenting experiments, learning, storytelling and progress.", url: "https://www.youtube.com/@ItsAero_Official" },
];

const personJsonLd = {
  "@context": "https://schema.org", "@type": "Person", "@id": `${siteUrl}/about#person`, name: "Koglesh R. Murugan", url: `${siteUrl}/about`, jobTitle: "Independent Developer & Builder",
  description: "Independent developer and product builder creating web products, AI experiences and creative digital projects.",
  sameAs: ["https://github.com/kogleshofficial-hub", "https://www.linkedin.com/in/koglesh-r-murugan-020450430/", "https://www.youtube.com/@ItsAero_Official"],
  knowsAbout: ["Web development", "Artificial intelligence", "Software development", "Product design", "User interface design", "Content creation"], mainEntityOfPage: `${siteUrl}/about`,
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#050505] px-6 py-16 text-white sm:px-10 lg:px-20">
      <div className="mx-auto max-w-5xl">
        <a href="/" className="text-xs uppercase tracking-[0.24em] text-white/35 hover:text-white/70">← Back to portfolio</a>
        <header className="mt-24 max-w-4xl"><p className="text-xs uppercase tracking-[0.3em] text-white/30">About</p><h1 className="mt-6 text-5xl font-semibold tracking-[-0.06em] sm:text-7xl">Koglesh R. Murugan</h1><p className="mt-8 max-w-2xl text-lg leading-8 text-white/50">Independent developer and product builder creating real-world web products, AI experiences, and creative digital projects.</p></header>

        <section className="mt-24 grid gap-10 border-t border-white/10 pt-12 md:grid-cols-[.7fr_1.3fr]"><h2 className="text-xs uppercase tracking-[0.28em] text-white/30">How I build</h2><div className="space-y-6 text-white/55 leading-8"><p>I learn by building: find a real problem, make a useful first version, test what actually works, improve what breaks, and ship the next version.</p><p>The projects on this site are meant to be usable products and experiments rather than a collection of imaginary case studies.</p></div></section>

        <section className="mt-24 border-t border-white/10 pt-12"><div className="flex items-end justify-between gap-6"><h2 className="text-3xl font-semibold tracking-[-0.04em] sm:text-4xl">Selected work</h2><a href="/" className="text-xs text-white/35 hover:text-white">View portfolio →</a></div><div className="mt-8 grid gap-4 sm:grid-cols-2">{projects.map((project) => <a key={project.name} href={project.url} target="_blank" rel="noopener noreferrer" className="rounded-3xl border border-white/10 bg-white/[0.025] p-7 transition hover:-translate-y-1 hover:border-white/20"><p className="text-xl font-medium">{project.name}</p><p className="mt-3 text-sm leading-7 text-white/35">{project.description}</p><span className="mt-6 inline-block text-xs text-white/40">Open project ↗</span></a>)}</div></section>

        <section className="mt-24 border-t border-white/10 pt-12"><h2 className="text-xs uppercase tracking-[0.28em] text-white/30">Public work</h2><div className="mt-7 flex flex-wrap gap-3"><a href="https://github.com/kogleshofficial-hub" target="_blank" rel="noopener noreferrer" className="rounded-full border border-white/10 px-5 py-3 text-sm text-white/55 hover:border-white/25 hover:text-white">GitHub ↗</a><a href="https://www.linkedin.com/in/koglesh-r-murugan-020450430/" target="_blank" rel="noopener noreferrer" className="rounded-full border border-white/10 px-5 py-3 text-sm text-white/55 hover:border-white/25 hover:text-white">LinkedIn ↗</a><a href="https://www.youtube.com/@ItsAero_Official" target="_blank" rel="noopener noreferrer" className="rounded-full border border-white/10 px-5 py-3 text-sm text-white/55 hover:border-white/25 hover:text-white">AERO on YouTube ↗</a></div></section>

        <footer className="mt-28 border-t border-white/10 py-10 text-xs text-white/25">Created by Koglesh R. Murugan · {new Date().getFullYear()}</footer>
      </div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }} />
    </main>
  );
}
