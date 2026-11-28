import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";

const siteUrl = "https://koglesh-portfolio.vercel.app";

export const metadata: Metadata = {
  title: "AERO-01 — Passive Elastic Suspension Carrier",
  description:
    "A small physical engineering prototype investigating how a four-point elastic suspension changes the movement of an inner container.",
  alternates: { canonical: "/hardware/aero-01" },
  openGraph: {
    title: "AERO-01 — Passive Elastic Suspension Carrier",
    description:
      "A physical proof-of-concept built from household materials, with preliminary displacement observations and documented design iteration.",
    url: `${siteUrl}/hardware/aero-01`,
    type: "article",
  },
};

const principles = [
  {
    title: "Newton's second law",
    formula: "F = ma",
    detail:
      "The inner container's motion depends on the resultant force acting on it. Acceleration was not measured in this prototype.",
  },
  {
    title: "Elastic restoring force",
    formula: "F ≈ kx",
    detail:
      "A stretched elastic strand exerts a restoring force. Hooke's law is only an approximation here because rubber bands are not ideal linear springs.",
  },
  {
    title: "Equilibrium and oscillation",
    formula: "ΣF = 0",
    detail:
      "At rest, supporting forces balance the container's weight. After displacement, the container can move around its equilibrium position before settling.",
  },
];

const limitations = [
  "The basket movement was applied by hand, not by a calibrated shaker or repeatable test rig.",
  "Displacement was measured manually and is approximate.",
  "No accelerometer or vibration sensor was used, so acceleration and transmitted vibration were not directly measured.",
  "The rubber-band force-extension relationship and stiffness were not measured.",
  "The two settling-time readings came from different movement conditions and are exploratory, not a reliable final average.",
  "The prototype has not been validated as a protective carrier and should not be used to transport fragile or valuable equipment on the strength of these results.",
];

function SectionLabel({ children }: { children: ReactNode }) {
  return (
    <p className="font-mono text-[9px] uppercase tracking-[0.18em] text-white/55">
      {children}
    </p>
  );
}

export default function Aero01CaseStudy() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-[#050505] text-white selection:bg-white/20">
      <div
        className="pointer-events-none fixed inset-0 opacity-60"
        style={{
          background:
            "radial-gradient(700px circle at 78% 5%, rgba(255,255,255,.075), transparent 62%)",
        }}
      />
      <div className="pointer-events-none fixed inset-0 bg-[linear-gradient(rgba(255,255,255,.016)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.016)_1px,transparent_1px)] bg-[size:72px_72px]" />

      <nav className="relative z-10 mx-auto flex max-w-6xl items-center justify-between px-6 py-7 lg:px-10">
        <Link
          href="/"
          className="font-mono text-[10px] uppercase tracking-[0.16em] text-white/70 transition hover:text-white"
        >
          ← Koglesh R. Murugan
        </Link>
        <span className="font-mono text-[9px] uppercase tracking-[0.15em] text-white/45">
          Physical systems / Case file 01
        </span>
      </nav>

      <header className="relative z-10 mx-auto max-w-6xl px-6 pb-20 pt-16 lg:px-10 lg:pb-24">
        <SectionLabel>Independent physical prototype · 28 November 2026</SectionLabel>
        <h1 className="mt-7 max-w-5xl text-5xl font-semibold leading-[0.94] tracking-[-0.07em] sm:text-7xl lg:text-8xl">
          AERO-01
          <span className="mt-3 block text-white/55">
            Passive elastic suspension carrier.
          </span>
        </h1>
        <p className="mt-8 max-w-3xl text-base leading-8 text-white/75 sm:text-lg">
          A small proof-of-concept built from household materials to investigate
          whether four-point elastic suspension changes the movement of an inner
          container when its outer basket is disturbed.
        </p>
        <div className="mt-9 flex flex-wrap gap-2">
          {["Physical engineering", "Experimental physics", "Four-point suspension", "RM0 materials"].map((item) => (
            <span
              key={item}
              className="border border-white/[0.14] bg-white/[0.035] px-3 py-2 font-mono text-[9px] uppercase tracking-[0.1em] text-white/70"
            >
              {item}
            </span>
          ))}
        </div>
        <div className="mt-12 grid gap-3 sm:grid-cols-3">
          <div className="border border-white/[0.12] bg-white/[0.025] p-5">
            <span className="font-mono text-[9px] uppercase tracking-[0.13em] text-white/50">Observed / no suspension</span>
            <p className="mt-3 text-4xl font-semibold tracking-[-0.06em]">15 cm</p>
            <p className="mt-2 text-xs leading-6 text-white/55">Container slid from its original centre position.</p>
          </div>
          <div className="border border-white/[0.12] bg-white/[0.025] p-5">
            <span className="font-mono text-[9px] uppercase tracking-[0.13em] text-white/50">Observed / suspension</span>
            <p className="mt-3 text-4xl font-semibold tracking-[-0.06em]">≈ 3 cm</p>
            <p className="mt-2 text-xs leading-6 text-white/55">Maximum displacement reported from the centre.</p>
          </div>
          <div className="border border-white/[0.12] bg-white/[0.025] p-5">
            <span className="font-mono text-[9px] uppercase tracking-[0.13em] text-white/50">Preliminary difference</span>
            <p className="mt-3 text-4xl font-semibold tracking-[-0.06em]">80%</p>
            <p className="mt-2 text-xs leading-6 text-white/55">Lower observed displacement in this reported comparison; not a measured vibration reduction.</p>
          </div>
        </div>
      </header>

      <section className="relative z-10 border-y border-white/[0.12] bg-white/[0.018]">
        <div className="mx-auto grid max-w-6xl gap-8 px-6 py-16 lg:grid-cols-[.65fr_1.35fr] lg:px-10">
          <div>
            <SectionLabel>01 / Research question</SectionLabel>
            <h2 className="mt-4 text-3xl font-medium tracking-[-0.05em]">What was being tested?</h2>
          </div>
          <div className="space-y-5 text-sm leading-8 text-white/80">
            <p>
              Can a four-point elastic suspension change the observed displacement
              of an inner container compared with placing it directly on the
              bottom of an outer basket?
            </p>
            <p>
              The control configuration allowed the inner container to rest on
              the basket floor. The modified configuration supported it with
              four elastic-band strands, allowing relative movement instead of
              direct floor contact.
            </p>
            <p className="text-white/55">
              The investigation compares observed movement. It does not claim
              that the prototype has proven isolation across a known vibration
              frequency range.
            </p>
          </div>
        </div>
      </section>

      <section className="relative z-10 mx-auto max-w-6xl px-6 py-16 lg:px-10">
        <SectionLabel>02 / Design evolution</SectionLabel>
        <h2 className="mt-4 max-w-3xl text-3xl font-medium tracking-[-0.05em] sm:text-4xl">
          The first design did not fit. The dimensions changed.
        </h2>
        <div className="mt-9 grid gap-4 md:grid-cols-2">
          <article className="border border-white/[0.14] bg-white/[0.025] p-6">
            <p className="font-mono text-[9px] uppercase tracking-[0.15em] text-amber-100/75">Iteration 01 / V1</p>
            <h3 className="mt-4 text-2xl font-medium tracking-[-0.04em]">Original container</h3>
            <p className="mt-4 text-sm leading-7 text-white/70">
              The first transparent container measured approximately 12.5–13 cm
              long, 14.5–15 cm wide and 22 cm high without its cap (about 24 cm
              with the cap). The available clearance and band geometry made a
              stable suspended arrangement impractical.
            </p>
            <p className="mt-5 border-l border-amber-100/35 pl-4 text-xs leading-6 text-white/55">
              Design constraint identified: payload dimensions and available
              clearance limited the suspension geometry.
            </p>
          </article>
          <article className="border border-white/[0.14] bg-white/[0.025] p-6">
            <p className="font-mono text-[9px] uppercase tracking-[0.15em] text-emerald-100/75">Iteration 02 / V2</p>
            <h3 className="mt-4 text-2xl font-medium tracking-[-0.04em]">Smaller inner container</h3>
            <p className="mt-4 text-sm leading-7 text-white/70">
              The design was revised using a smaller container measuring
              approximately 9 × 9 × 3.5 cm. Eight small rubber bands were
              connected in pairs to form four strands. The container could then
              be positioned near the centre without touching the basket during
              gentle movement.
            </p>
            <p className="mt-5 border-l border-emerald-100/35 pl-4 text-xs leading-6 text-white/55">
              Design change: reduce the payload footprint to create usable
              clearance for the four-point suspension.
            </p>
          </article>
        </div>
        <div className="mt-7 border border-white/[0.12] bg-white/[0.02] p-5">
          <SectionLabel>Outer structure / measured dimensions</SectionLabel>
          <div className="mt-4 grid gap-4 sm:grid-cols-3">
            <div><p className="text-2xl font-semibold">40 cm</p><p className="mt-1 text-xs text-white/55">Upper basket diameter</p></div>
            <div><p className="text-2xl font-semibold">28 cm</p><p className="mt-1 text-xs text-white/55">Lower basket diameter</p></div>
            <div><p className="text-2xl font-semibold">24 cm</p><p className="mt-1 text-xs text-white/55">Basket height</p></div>
          </div>
        </div>
      </section>

      <section className="relative z-10 border-y border-white/[0.12] bg-white/[0.018]">
        <div className="mx-auto max-w-6xl px-6 py-16 lg:px-10">
          <SectionLabel>03 / Physical principles</SectionLabel>
          <h2 className="mt-4 text-3xl font-medium tracking-[-0.05em] sm:text-4xl">The physics behind the prototype.</h2>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {principles.map((item, index) => (
              <article key={item.title} className="border border-white/[0.13] bg-[#080808] p-5">
                <p className="font-mono text-[9px] uppercase tracking-[0.13em] text-white/45">Principle / 0{index + 1}</p>
                <h3 className="mt-4 text-lg font-medium">{item.title}</h3>
                <p className="mt-4 font-mono text-2xl text-cyan-100/85">{item.formula}</p>
                <p className="mt-4 text-xs leading-7 text-white/65">{item.detail}</p>
              </article>
            ))}
          </div>
          <p className="mt-6 max-w-4xl text-xs leading-7 text-white/55">
            Damping is the dissipation of mechanical energy. The prototype showed
            motion that eventually settled, but damping was not isolated or
            measured as a separate variable.
          </p>
        </div>
      </section>

      <section className="relative z-10 mx-auto max-w-6xl px-6 py-16 lg:px-10">
        <SectionLabel>04 / Preliminary results</SectionLabel>
        <h2 className="mt-4 text-3xl font-medium tracking-[-0.05em] sm:text-4xl">Observed displacement from the centre.</h2>
        <div className="mt-8 overflow-hidden border border-white/[0.14]">
          <table className="w-full border-collapse text-left text-sm">
            <thead className="bg-white/[0.045] text-[10px] uppercase tracking-[0.12em] text-white/55">
              <tr><th className="px-4 py-4 font-medium sm:px-6">Configuration</th><th className="px-4 py-4 font-medium sm:px-6">Reported displacement</th><th className="px-4 py-4 font-medium sm:px-6">Observation</th></tr>
            </thead>
            <tbody className="divide-y divide-white/[0.1] text-white/75">
              <tr><td className="px-4 py-5 sm:px-6">Without suspension</td><td className="px-4 py-5 font-mono sm:px-6">15 cm</td><td className="px-4 py-5 sm:px-6">Slid across the basket floor.</td></tr>
              <tr><td className="px-4 py-5 sm:px-6">With four-point suspension</td><td className="px-4 py-5 font-mono sm:px-6">≈ 3 cm</td><td className="px-4 py-5 sm:px-6">Moved within the suspension and returned towards the centre.</td></tr>
            </tbody>
          </table>
        </div>
        <div className="mt-6 grid gap-6 border border-white/[0.12] bg-white/[0.025] p-6 sm:grid-cols-[.55fr_1.45fr] sm:items-center">
          <div><p className="font-mono text-[9px] uppercase tracking-[0.13em] text-white/50">Arithmetic comparison</p><p className="mt-3 text-5xl font-semibold tracking-[-0.07em]">80%</p></div>
          <div className="text-sm leading-7 text-white/70">
            <p className="font-mono text-white/85">((15 − 3) ÷ 15) × 100 = 80%</p>
            <p className="mt-2">This describes the lower observed displacement in the two reported measurements. It is not evidence of an 80% reduction in acceleration, vibration, damage risk or payload safety.</p>
          </div>
        </div>
        <div className="mt-9 grid gap-4 md:grid-cols-2">
          <article className="border border-white/[0.13] p-5">
            <SectionLabel>Settling-time reading / 01</SectionLabel>
            <p className="mt-3 text-3xl font-semibold">30.47 s</p>
            <p className="mt-2 text-xs leading-6 text-white/55">Time recorded until the container was considered completely still.</p>
          </article>
          <article className="border border-white/[0.13] p-5">
            <SectionLabel>Settling-time reading / 02</SectionLabel>
            <p className="mt-3 text-3xl font-semibold">10.83 s</p>
            <p className="mt-2 text-xs leading-6 text-white/55">A second exploratory reading under a different movement condition.</p>
          </article>
        </div>
        <p className="mt-4 text-xs leading-7 text-white/55">
          The arithmetic mean of these two readings is 20.65 seconds. Because
          the input movement differed between trials, this mean is recorded only
          as an exploratory calculation and is not treated as a reliable
          controlled-test result.
        </p>
      </section>

      <section className="relative z-10 border-y border-white/[0.12] bg-white/[0.018]">
        <div className="mx-auto grid max-w-6xl gap-8 px-6 py-16 lg:grid-cols-[.65fr_1.35fr] lg:px-10">
          <div><SectionLabel>05 / Materials and method</SectionLabel><h2 className="mt-4 text-3xl font-medium tracking-[-0.05em]">A simple physical build.</h2></div>
          <div className="space-y-6 text-sm leading-7 text-white/75">
            <div><h3 className="font-medium text-white">Materials used</h3><p className="mt-2">Plastic basket, small plastic inner container, eight small rubber bands connected into four strands, ruler and scissors.</p></div>
            <div><h3 className="font-medium text-white">Control configuration</h3><p className="mt-2">The small container rested directly on the basket floor. The basket was moved and the container&apos;s displacement from its original centre position was observed and measured.</p></div>
            <div><h3 className="font-medium text-white">Suspended configuration</h3><p className="mt-2">The container was supported by four elastic strands attached at separate basket points. It was gently disturbed, and its maximum displacement and return towards the centre were observed.</p></div>
            <div><h3 className="font-medium text-white">Physical authorship</h3><p className="mt-2">The prototype was physically assembled, modified, measured and tested by the builder using household materials. An AI assistant was used for explanatory guidance and report organisation; no AI-generated hardware or test footage is presented.</p></div>
          </div>
        </div>
      </section>

      <section className="relative z-10 mx-auto max-w-6xl px-6 py-16 lg:px-10">
        <SectionLabel>06 / Limitations and next tests</SectionLabel>
        <h2 className="mt-4 text-3xl font-medium tracking-[-0.05em]">What these results do not establish.</h2>
        <ul className="mt-8 grid gap-3 md:grid-cols-2">
          {limitations.map((item) => <li key={item} className="border-l border-amber-100/35 bg-amber-100/[0.025] px-5 py-4 text-xs leading-7 text-white/75">{item}</li>)}
        </ul>
        <div className="mt-8 border border-white/[0.13] bg-white/[0.025] p-6">
          <SectionLabel>Next experimental improvements</SectionLabel>
          <p className="mt-3 text-sm leading-7 text-white/75">
            Use the same measured initial displacement and repeatable basket
            movement for every trial; record the maximum displacement for each
            repeat; keep the control and suspended setup conditions consistent;
            and, if suitable measurement equipment becomes available, measure
            acceleration directly.
          </p>
        </div>
      </section>

      <section className="relative z-10 border-y border-white/[0.12] bg-white/[0.018]">
        <div className="mx-auto max-w-6xl px-6 py-14 lg:px-10">
          <SectionLabel>07 / Evidence record</SectionLabel>
          <h2 className="mt-4 text-3xl font-medium tracking-[-0.05em]">Original documentation.</h2>
          <p className="mt-5 max-w-3xl text-sm leading-7 text-white/70">
            These photographs and excerpts come from the physical build and test
            recordings made on 28 November 2026. They show the handwritten
            calculations, the actual elastic-band arrangement, both movement
            configurations and the two recorded settling-time readings. The
            images are resized copies of the builder&apos;s original files; no
            synthetic or stock evidence has been used.
          </p>

          <div className="mt-9 grid gap-5 md:grid-cols-2">
            <figure className="overflow-hidden border border-white/[0.14] bg-[#080808]">
              <Image
                src="/aero-01/engineering-notebook.webp"
                alt="Original handwritten AERO-01 experiment notebook page with the design sketch, physics notes and preliminary measurements."
                width={472}
                height={620}
                className="h-auto w-full object-contain"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <figcaption className="border-t border-white/[0.1] px-4 py-3">
                <p className="text-xs font-medium text-white/85">Handwritten engineering notes</p>
                <p className="mt-1 text-[10px] leading-5 text-white/50">The builder&apos;s original page documenting dimensions, physics concepts and preliminary calculations.</p>
              </figcaption>
            </figure>

            <figure className="overflow-hidden border border-white/[0.14] bg-[#080808]">
              <Image
                src="/aero-01/suspension-detail.webp"
                alt="Close-up photograph of orange elastic-band strands attached around the small pink inner container."
                width={520}
                height={232}
                className="h-auto w-full object-contain"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <figcaption className="border-t border-white/[0.1] px-4 py-3">
                <p className="text-xs font-medium text-white/85">Four-point elastic attachment detail</p>
                <p className="mt-1 text-[10px] leading-5 text-white/50">A close-up from the actual V2 build, showing the orange elastic strands and inner container.</p>
              </figcaption>
            </figure>
          </div>

          <div className="mt-12">
            <p className="font-mono text-[9px] uppercase tracking-[0.18em] text-white/55">Movement recordings</p>
            <h3 className="mt-3 text-xl font-medium tracking-[-0.04em]">Control configuration vs suspended configuration.</h3>
            <div className="mt-6 grid gap-5 md:grid-cols-2">
              <figure className="overflow-hidden border border-white/[0.14] bg-[#080808]">
                <video className="aspect-video w-full bg-black object-contain" controls preload="metadata" playsInline poster="/aero-01/control-motion-poster.webp">
                  <source src="/aero-01/control-motion.mp4" type="video/mp4" />
                  Your browser does not support embedded video.
                </video>
                <figcaption className="border-t border-white/[0.1] px-4 py-3">
                  <p className="text-xs font-medium text-white/85">Without suspension / control</p>
                  <p className="mt-1 text-[10px] leading-5 text-white/50">Compressed 10.5-second web copy made from the builder's original control-configuration recording.</p>
                </figcaption>
              </figure>
              <figure className="overflow-hidden border border-white/[0.14] bg-[#080808]">
                <video className="aspect-video w-full bg-black object-contain" controls preload="metadata" playsInline poster="/aero-01/suspension-motion-poster.webp">
                  <source src="/aero-01/suspended-motion.mp4" type="video/mp4" />
                  Your browser does not support embedded video.
                </video>
                <figcaption className="border-t border-white/[0.1] px-4 py-3">
                  <p className="text-xs font-medium text-white/85">With four-point suspension</p>
                  <p className="mt-1 text-[10px] leading-5 text-white/50">Compressed 19.3-second web copy made from the builder's original suspended-configuration recording.</p>
                </figcaption>
              </figure>
            </div>
          </div>

          <div className="mt-12">
            <p className="font-mono text-[9px] uppercase tracking-[0.18em] text-white/55">Timekeeping evidence</p>
            <h3 className="mt-3 text-xl font-medium tracking-[-0.04em]">Two exploratory settling-time readings.</h3>
            <div className="mt-6 grid gap-5 sm:grid-cols-2">
              <figure className="overflow-hidden border border-white/[0.14] bg-[#080808]">
                <Image src="/aero-01/settling-30-47.webp" alt="Frame from the original stopwatch video showing a recorded time of 30.47 seconds." width={300} height={534} className="mx-auto h-[300px] w-auto object-contain" sizes="(max-width: 640px) 100vw, 50vw" />
                <figcaption className="border-t border-white/[0.1] px-4 py-3">
                  <p className="text-xs font-medium text-white/85">Reading 01 / 30.47 seconds</p>
                  <p className="mt-1 text-[10px] leading-5 text-white/50">Still frame extracted from one of the original stopwatch recordings.</p>
                </figcaption>
              </figure>
              <figure className="overflow-hidden border border-white/[0.14] bg-[#080808]">
                <Image src="/aero-01/settling-10-83.webp" alt="Frame from the original stopwatch video showing a recorded time of 10.83 seconds." width={360} height={203} className="h-[300px] w-full object-contain" sizes="(max-width: 640px) 100vw, 50vw" />
                <figcaption className="border-t border-white/[0.1] px-4 py-3">
                  <p className="text-xs font-medium text-white/85">Reading 02 / 10.83 seconds</p>
                  <p className="mt-1 text-[10px] leading-5 text-white/50">Still frame extracted from the second original stopwatch recording.</p>
                </figcaption>
              </figure>
            </div>
            <p className="mt-5 max-w-3xl text-xs leading-7 text-white/50">
              Both movement players are low-resolution, silent web copies made directly
              from the builder's original camera recordings for practical
              streaming. The full-resolution originals are retained by the
              builder. The two stopwatch images below are still frames from the
              other original recordings and preserve the displayed time readings.
            </p>
          </div>
        </div>
      </section>

      <footer className="relative z-10 border-t border-white/[0.12] px-6 py-8">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4">
          <Link href="/" className="font-mono text-[10px] uppercase tracking-[0.14em] text-white/65 hover:text-white">← Back to portfolio</Link>
          <span className="font-mono text-[9px] uppercase tracking-[0.14em] text-white/45">Build · Observe · Revise</span>
        </div>
      </footer>
    </main>
  );
}
