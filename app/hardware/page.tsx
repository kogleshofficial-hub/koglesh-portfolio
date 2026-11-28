import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

const siteUrl = "https://koglesh-portfolio.vercel.app";
const hardwareUrl = `${siteUrl}/hardware`;
const projectUrl = `${hardwareUrl}/aero-01`;

export const metadata: Metadata = {
  title: "Hardware Projects & Physical Engineering",
  description:
    "Hardware projects by Koglesh R. Murugan, a student developer in Malaysia. Explore physical prototypes, experimental physics, material testing and documented design iterations, starting with AERO-01.",
  alternates: { canonical: "/hardware" },
  keywords: [
    "hardware projects Malaysia",
    "hardware prototyping",
    "physical engineering",
    "experimental physics",
    "student engineering projects",
    "AERO-01",
    "Koglesh R. Murugan",
  ],
  robots: { index: true, follow: true },
  openGraph: {
    title: "Hardware Projects | Koglesh R. Murugan",
    description:
      "A collection of hands-on physical prototypes and experimental engineering work, documented with measurements, photographs and test limitations.",
    url: hardwareUrl,
    type: "website",
    images: [{ url: "/aero-01/suspension-detail.webp", width: 520, height: 232, alt: "AERO-01 four-point elastic suspension prototype." }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Hardware Projects | Koglesh R. Murugan",
    description: "Hands-on physical prototypes and experimental engineering work.",
    images: ["/aero-01/suspension-detail.webp"],
  },
};

const collectionJsonLd = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  "@id": hardwareUrl,
  url: hardwareUrl,
  name: "Hardware Projects by Koglesh R. Murugan",
  description:
    "A collection of physical engineering prototypes documented through design iteration, measurement and experiments.",
  author: { "@id": `${siteUrl}/#person` },
  mainEntity: {
    "@type": "ItemList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        item: {
          "@type": "CreativeWork",
          "@id": projectUrl,
          name: "AERO-01 — Passive Elastic Suspension Carrier",
          url: projectUrl,
          description:
            "A four-point elastic suspension prototype built with household materials and documented through preliminary observations and design iteration.",
          creator: { "@id": `${siteUrl}/#person` },
          image: `${siteUrl}/aero-01/suspension-detail.webp`,
        },
      },
    ],
  },
};

export default function HardwareIndexPage() {
  return (
    <main className="min-h-screen bg-[#0b0b0c] px-5 py-12 text-[#f2f0ed] sm:px-8 lg:px-12">
      <div className="mx-auto max-w-6xl">
        <Link href="/" className="text-xs text-white/45 transition hover:text-white">
          ← Back to portfolio
        </Link>

        <header className="mt-20 max-w-4xl">
          <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#d87968]">
            Physical engineering / project directory
          </p>
          <h1 className="mt-5 text-5xl font-semibold tracking-[-0.07em] sm:text-7xl">
            Hardware projects
            <span className="mt-2 block text-white/45">Built, measured, tested.</span>
          </h1>
          <p className="mt-7 max-w-3xl text-base leading-8 text-white/60">
            This section documents my hands-on physical engineering experiments alongside my software projects.
            I record the materials, dimensions, design changes, observations and limitations of each build.
            The goal is to show the actual process, not just the finished object.
          </p>
        </header>

        <section className="mt-16 border-t border-white/10 pt-10">
          <div className="mb-7 flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="font-mono text-[9px] uppercase tracking-[0.18em] text-white/35">
                Current hardware case study / 01
              </p>
              <h2 className="mt-3 text-3xl font-medium tracking-[-0.05em]">Elastic suspension prototype</h2>
            </div>
            <span className="text-xs text-white/35">1 documented project</span>
          </div>

          <article className="grid overflow-hidden rounded-3xl border border-white/10 bg-white/[0.025] md:grid-cols-[.9fr_1.1fr]">
            <a href="/aero-01/suspension-detail.webp" target="_blank" rel="noreferrer noopener" className="flex min-h-64 items-center justify-center bg-[#09090a] p-6" aria-label="Open AERO-01 original suspension photograph">
              <Image
                src="/aero-01/suspension-detail.webp"
                alt="Original photograph of the small pink inner container held by orange elastic strands inside the AERO-01 basket prototype."
                width={520}
                height={232}
                sizes="(max-width: 768px) 100vw, 45vw"
                className="h-auto max-h-80 w-full object-contain"
              />
            </a>
            <div className="flex flex-col items-start justify-center p-7 sm:p-10">
              <p className="font-mono text-[9px] uppercase tracking-[0.18em] text-[#d87968]">
                AERO-01 / 28 November 2026
              </p>
              <h3 className="mt-4 text-2xl font-semibold tracking-[-0.05em] sm:text-3xl">
                Passive Elastic Suspension Carrier
              </h3>
              <p className="mt-4 text-sm leading-7 text-white/55">
                A small physical proof-of-concept built using a household basket, a compact inner container
                and four elastic-band strands. The build documents a first design that did not fit, a smaller
                V2 container, and preliminary observations comparing the two configurations.
              </p>
              <div className="mt-5 flex flex-wrap gap-2 text-[9px] text-white/55">
                {["Physical prototyping", "Elastic suspension", "Experimental physics", "Design iteration"].map((tag) => (
                  <span key={tag} className="rounded-full border border-white/10 px-3 py-2">{tag}</span>
                ))}
              </div>
              <Link href="/hardware/aero-01" className="mt-7 inline-flex items-center gap-2 text-sm text-[#e29a8d] hover:text-white">
                Read the full build and experiment record <span aria-hidden="true">↗</span>
              </Link>
            </div>
          </article>
        </section>

        <div className="mt-14 flex flex-wrap gap-5 border-t border-white/10 pt-7 text-xs text-white/40">
          <Link href="/#work" className="hover:text-white">Software projects ↗</Link>
          <Link href="/about" className="hover:text-white">About my work ↗</Link>
        </div>

        <footer className="mt-20 border-t border-white/10 py-7 text-[10px] text-white/30">
          Koglesh R. Murugan · Software and physical engineering projects
        </footer>
      </div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionJsonLd) }} />
    </main>
  );
}
