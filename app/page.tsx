"use client";

import Image from "next/image";
import { useState } from "react";

type ProjectKind = "kyrqen" | "mirror" | "gridpulse" | "pace" | "foodloop" | "truth";
type Project = {
  number: string;
  name: string;
  category: string;
  description: string;
  stack: string[];
  live: string;
  github: string;
  kind: ProjectKind;
  featured?: boolean;
};

const projects: Project[] = [
  {
    number: "01",
    name: "Kyrqen",
    category: "Freight workflow prototype",
    description:
      "An early freight-document workflow prototype exploring how Bills of Lading, Consignment Notes and commercial invoices could be organised into draft shipment records. The project explores document checks and mismatch review. A container check-digit rule and cross-document comparisons flag issues for human review before approval.",
    stack: ["Next.js", "TypeScript", "Supabase RLS", "AI Extraction", "Vercel"],
    live: "https://kryqen.vercel.app/",
    github: "https://github.com/kogleshofficial-hub/kyrqen",
    kind: "kyrqen",
    featured: true,
  },
  {
    number: "02",
    name: "MIRROR",
    category: "Simulation tool",
    description:
      "A small simulation tool for testing how changes in demand and capacity affect a workflow. I kept the model local and repeatable, which makes it easier to test but limits it to the scenarios the model supports.",
    stack: ["Next.js", "React", "TypeScript", "Simulation"],
    live: "https://mirror-simulation-engine.vercel.app",
    github: "https://github.com/kogleshofficial-hub/mirror-simulation-engine",
    kind: "mirror",
  },
  {
    number: "03",
    name: "GRIDPULSE",
    category: "Infrastructure project",
    description:
      "A project for reviewing infrastructure data without mixing observed evidence with optional AI analysis. I kept those paths separate so a failed AI request cannot quietly become a made-up result.",
    stack: ["Next.js", "PostgreSQL", "Zod", "Azure"],
    live: "https://gridpulse-three.vercel.app",
    github: "https://github.com/kogleshofficial-hub/GRIDPULSE",
    kind: "gridpulse",
  },
  {
    number: "04",
    name: "PACE",
    category: "Study planner",
    description:
      "A study planner that helps students organize deadlines and available time into a practical weekly plan. I chose account-based storage and per-user permissions instead of keeping everything only in the browser.",
    stack: ["Next.js", "React", "TypeScript", "Appwrite"],
    live: "https://pace-nu-seven.vercel.app",
    github: "https://github.com/kogleshofficial-hub/PACE",
    kind: "pace",
  },
  {
    number: "05",
    name: "FoodLoop",
    category: "Food rescue",
    description:
      "A food-rescue app built around a simple problem: surplus food is useful only when someone can find and request it in time. I built the first MVP entirely on a phone, so I kept the early version focused on listings and requests.",
    stack: ["Next.js", "Supabase", "PostgreSQL", "Vercel"],
    live: "https://food-loop-app.vercel.app",
    github: "https://github.com/kogleshofficial-hub/FoodLoop",
    kind: "foodloop",
  },
  {
    number: "06",
    name: "Truth Checker",
    category: "Research tool",
    description:
      "A web app for examining online claims and reviewing the sources behind them. I chose to show evidence and context rather than present a confident verdict without an explanation.",
    stack: ["Next.js", "TypeScript", "AI", "Evidence"],
    live: "https://truth-checker-app.vercel.app",
    github: "https://github.com/kogleshofficial-hub/truth-checker",
    kind: "truth",
  },
];

const moreProjects = [
  {
    name: "SYNAPSE",
    description: "A local-first planner that turns tasks, deadlines, and available time into a weekly plan.",
    live: "https://synapse-7ldp5tfhy-kogleshofficial-hubs-projects.vercel.app",
    github: "https://github.com/kogleshofficial-hub/synapse",
    stack: "Next.js · TypeScript · Local storage",
  },
  {
    name: "QueueWise",
    description: "A community queue tracker built around recent reports and clear waiting-time estimates.",
    live: "https://queuewise-app.vercel.app",
    github: "https://github.com/kogleshofficial-hub/queuewise",
    stack: "Next.js · Supabase · PostgreSQL",
  },
  {
    name: "BeforeYouGo",
    description: "A checklist tool for getting ready before a visit, trip, or important task.",
    live: "https://beforeyougo-gray.vercel.app",
    github: "https://github.com/kogleshofficial-hub/beforeyougo",
    stack: "Next.js · TypeScript · Local storage",
  },
  {
    name: "One Next Step",
    description: "A focused decision tool that helps turn a situation into one practical next action.",
    live: "https://one-next-step.vercel.app",
    github: "https://github.com/kogleshofficial-hub/one-next-step",
    stack: "Next.js · TypeScript",
  },
  {
    name: "AERO-01",
    description: "A physical engineering proof-of-concept exploring how a four-point elastic suspension changes the movement of an inner container. Built with household materials and documented through preliminary testing.",
    live: "/hardware/aero-01",
    github: undefined,
    stack: "Physical engineering · Experimental Physics · Elastic suspension",
  },
];

const buildLog = [
  {
    date: "28 NOV 2026",
    project: "AERO-01",
    note: "Built a four-point elastic suspension prototype, revised the inner container after a clearance problem, and recorded preliminary movement observations.",
  },
  {
    date: "NOV 2026",
    project: "Kyrqen",
    note: "Launched the public site for my freight document workspace and continued building the extraction and review flow.",
  },
  {
    date: "08 SEP 2026",
    project: "MIRROR",
    note: "Finished the simulation model and documented the scenarios it supports.",
  },
  {
    date: "07 SEP 2026",
    project: "PACE",
    note: "Shipped the study planner with Appwrite sign-in and separate user data.",
  },
  {
    date: "06 SEP 2026",
    project: "SYNAPSE",
    note: "Published a local-first weekly planner built around tasks and available time.",
  },
  {
    date: "05 SEP 2026",
    project: "GRIDPULSE",
    note: "Improved how infrastructure signals are checked before they are explained.",
  },
  {
    date: "04 SEP 2026",
    project: "FoodLoop",
    note: "Worked on the food listing and request flow for the MVP.",
  },
];

function ExternalArrow() {
  return <span aria-hidden="true" className="external-arrow">↗</span>;
}

function WindowDots() {
  return (
    <div className="window-dots" aria-hidden="true">
      <span />
      <span />
      <span />
    </div>
  );
}

function KyrqenPreview() {
  return (
    <div className="preview-app preview-kyrqen">
      <div className="preview-app-top">
        <span className="preview-app-brand"><span className="kyrqen-mark">K</span> kyrqen</span>
        <span className="preview-workspace">Workspace / Shipments</span>
        <span className="preview-avatar">KR</span>
      </div>
      <div className="preview-app-body">
        <div className="preview-sidebar">
          <span className="sidebar-active">Overview</span>
          <span>Documents</span>
          <span>Shipments</span>
          <span>Team</span>
        </div>
        <div className="freight-panel">
          <div className="freight-heading">
            <div>
              <span className="preview-overline">DOCUMENT WORKSPACE</span>
              <strong>Shipment documents</strong>
            </div>
            <span className="preview-outline-action">New upload +</span>
          </div>
          <div className="document-list">
            <div className="document-row">
              <span className="file-type">BL</span>
              <span><strong>Bill of Lading</strong><small>Source document</small></span>
              <span className="file-state">Review</span>
            </div>
            <div className="document-row">
              <span className="file-type">CN</span>
              <span><strong>Consignment Note</strong><small>Source document</small></span>
              <span className="file-state">Review</span>
            </div>
            <div className="document-row">
              <span className="file-type">CI</span>
              <span><strong>Commercial Invoice</strong><small>Source document</small></span>
              <span className="file-state">Review</span>
            </div>
          </div>
          <div className="freight-checks">
            <span>Container check digit</span>
            <span>Document mismatch checks</span>
            <span>Human approval before shipment</span>
          </div>
        </div>
      </div>
    </div>
  );
}

function MirrorPreview() {
  return (
    <div className="preview-app preview-mirror">
      <div className="mini-app-heading">
        <div><span className="preview-overline">MIRROR / MODEL</span><strong>Scenario overview</strong></div>
        <span className="mini-label">Local simulation</span>
      </div>
      <div className="mirror-workspace">
        <div className="mirror-inputs">
          <span className="mini-section-label">SCENARIO INPUTS</span>
          <div className="input-line"><span>Demand</span><i /></div>
          <div className="input-line"><span>Available capacity</span><i /></div>
          <div className="input-line"><span>Time window</span><i /></div>
          <div className="mini-control">Edit scenario <span>↗</span></div>
        </div>
        <div className="mirror-flow">
          <span className="mini-section-label">MODEL FLOW</span>
          <div className="flow-step"><span>01</span><strong>Inputs</strong><b /></div>
          <div className="flow-connector" />
          <div className="flow-step"><span>02</span><strong>Simulation</strong><b /></div>
          <div className="flow-connector" />
          <div className="flow-step"><span>03</span><strong>Outcome</strong><b /></div>
        </div>
      </div>
    </div>
  );
}

function GridPulsePreview() {
  return (
    <div className="preview-app preview-gridpulse">
      <div className="mini-app-heading">
        <div><span className="preview-overline">GRIDPULSE / REVIEW</span><strong>Infrastructure signals</strong></div>
        <span className="mini-label">Evidence view</span>
      </div>
      <div className="gridpulse-layout">
        <div className="signal-table">
          <div className="signal-table-head"><span>INPUT</span><span>REVIEW</span></div>
          <div><span className="signal-icon">↗</span><strong>Observed source</strong><small>Source record</small></div>
          <div><span className="signal-icon">✓</span><strong>Validation</strong><small>Schema checks</small></div>
          <div><span className="signal-icon">≋</span><strong>Supporting notes</strong><small>Context and history</small></div>
        </div>
        <div className="analysis-card">
          <span className="mini-section-label">OPTIONAL ANALYSIS</span>
          <div className="analysis-orbit"><span /><i /><b /></div>
          <strong>Evidence first</strong>
          <small>Keep observed data separate from analysis.</small>
        </div>
      </div>
    </div>
  );
}

function PacePreview() {
  return (
    <div className="preview-app preview-pace">
      <div className="mini-app-heading">
        <div><span className="preview-overline">PACE / MY WEEK</span><strong>Weekly study plan</strong></div>
        <span className="mini-label">Planner</span>
      </div>
      <div className="pace-week">
        {["MON", "TUE", "WED", "THU", "FRI"].map((day, index) => (
          <div className="pace-day" key={day}>
            <span>{day}</span>
            <b className={index === 2 ? "day-selected" : ""}>{index + 9}</b>
            <i className="pace-task task-one" />
            <i className={index % 2 === 0 ? "pace-task task-two" : "pace-task task-empty"} />
            <i className={index === 3 ? "pace-task task-three" : "pace-task task-empty"} />
          </div>
        ))}
      </div>
      <div className="pace-footer">
        <span><i className="legend-dot legend-coral" /> Focus session</span>
        <span><i className="legend-dot legend-muted" /> Deadline</span>
        <span className="pace-footer-action">Adjust plan ↗</span>
      </div>
    </div>
  );
}

function FoodLoopPreview() {
  return (
    <div className="preview-app preview-foodloop">
      <div className="mini-app-heading">
        <div><span className="preview-overline">FOODLOOP / DISCOVER</span><strong>Available near you</strong></div>
        <span className="mini-label">Food rescue</span>
      </div>
      <div className="food-listings">
        <div className="food-listing">
          <div className="food-art food-art-one"><span>F</span></div>
          <div><strong>Surplus food listing</strong><small>Pickup details available</small></div>
          <span className="food-arrow">↗</span>
        </div>
        <div className="food-listing">
          <div className="food-art food-art-two"><span>+</span></div>
          <div><strong>Community donation</strong><small>Request to collect</small></div>
          <span className="food-arrow">↗</span>
        </div>
      </div>
      <div className="foodloop-bottom"><span>Browse listings</span><span>Make a request</span></div>
    </div>
  );
}

function TruthPreview() {
  return (
    <div className="preview-app preview-truth">
      <div className="mini-app-heading">
        <div><span className="preview-overline">TRUTH CHECKER / REVIEW</span><strong>Examine a claim</strong></div>
        <span className="mini-label">Research</span>
      </div>
      <div className="claim-card">
        <span className="mini-section-label">CLAIM TO REVIEW</span>
        <strong>What does the original source actually say?</strong>
        <span className="claim-focus">Review the wording, context, and date.</span>
      </div>
      <div className="source-review">
        <div className="source-row"><span className="source-mark">01</span><span><strong>Original source</strong><small>Open the source material</small></span><b>↗</b></div>
        <div className="source-row"><span className="source-mark">02</span><span><strong>Additional context</strong><small>Compare the supporting details</small></span><b>↗</b></div>
      </div>
    </div>
  );
}

function ProjectPreview({ kind, name }: { kind: ProjectKind; name: string }) {
  return (
    <div className="browser-frame" aria-label={name + " interface preview"}>
      <div className="browser-toolbar">
        <WindowDots />
        <div className="browser-address"><span className="address-lock">•</span>{kind === "kyrqen" ? "kryqen.vercel.app" : name.toLowerCase().replace(/\s+/g, "") + ".vercel.app"}</div>
        <span className="browser-live"><i /> UI PREVIEW</span>
      </div>
      <div className="browser-canvas">
        {kind === "kyrqen" && <KyrqenPreview />}
        {kind === "mirror" && <MirrorPreview />}
        {kind === "gridpulse" && <GridPulsePreview />}
        {kind === "pace" && <PacePreview />}
        {kind === "foodloop" && <FoodLoopPreview />}
        {kind === "truth" && <TruthPreview />}
      </div>
    </div>
  );
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <article className={"project-card" + (project.featured ? " project-card-featured" : "")}>
      <div className="project-visual">
        <ProjectPreview kind={project.kind} name={project.name} />
      </div>
      <div className="project-content">
        <div className="project-meta">
          <span className="project-number">{project.number}</span>
          <span className={project.featured ? "project-category project-category-featured" : "project-category"}>
            {project.category}
          </span>
        </div>
        <h3>{project.name}</h3>
        <p className="project-description">{project.description}</p>
        {project.featured && <p className="project-review-note">Extraction is a first pass. An operator checks the source documents before approving a shipment.</p>}
        <div className="project-tags" aria-label={project.name + " technology stack"}>
          {project.stack.map((item) => <span className="tag" key={item}>{item}</span>)}
        </div>
        <div className="project-links">
          <a className="project-live-link" href={project.live} target="_blank" rel="noreferrer noopener">
            Visit live site <ExternalArrow />
          </a>
          {project.github && (
            <a href={project.github} target="_blank" rel="noreferrer noopener">
              GitHub <ExternalArrow />
            </a>
          )}
        </div>
      </div>
    </article>
  );
}

function StoryIcon({ type }: { type: "phone" | "medal" | "play" }) {
  if (type === "phone") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <rect x="6.5" y="2.5" width="11" height="19" rx="2.2" />
        <path d="M10 5.5h4M10.5 18.5h3" />
      </svg>
    );
  }
  if (type === "medal") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <circle cx="12" cy="8" r="4.2" />
        <path d="m8.9 11.1-1.3 9 4.4-2.7 4.4 2.7-1.3-9M12 5.9v4.2M9.9 8h4.2" />
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <rect x="3" y="5" width="18" height="14" rx="3" />
      <path d="m10 9 5 3-5 3z" />
    </svg>
  );
}

function CopyEmailButton() {
  const [copied, setCopied] = useState(false);

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText("koglesh.official@gmail.com");
      setCopied(true);
    } catch {
      window.location.href = "mailto:koglesh.official@gmail.com";
    }
  }

  return (
    <button type="button" className="copy-button" onClick={copyEmail} aria-live="polite">
      {copied ? "Email copied" : "Copy email"}
    </button>
  );
}

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <div className="site-shell header-inner">
          <a className="wordmark" href="#top" aria-label="Koglesh, back to top">
            <span className="wordmark-mark">K</span>
            <span>Koglesh</span>
          </a>
          <nav className="site-nav" aria-label="Main navigation">
            <a href="#work">Work</a>
            <a href="#about">About</a>
            <a href="#build-log">Build Log</a>
            <a href="/scholarship">Scholarship Profile</a>
            <a href="#contact">Contact</a>
          </nav>
        </div>
      </header>

      <div id="top" className="site-shell">
        <section className="hero">
          <div className="hero-main">
            <p className="eyebrow"><span className="availability-dot" /> Student developer based in Malaysia</p>
            <div className="hero-status"><span className="status-pulse" /> Currently building Kyrqen</div>
            <h1>I build useful things <span>for real people.</span></h1>
            <p className="hero-copy">
              I&apos;m Koglesh R. Murugan, a Form 4 Science stream student in Negeri Sembilan, Malaysia. I study Physics, Chemistry, Additional Mathematics and Computer Science. Alongside school, I build web app prototypes and make videos about self-improvement through AERO.
            </p>
            <div className="hero-bottom">
              <div className="hero-actions">
                <a className="button button-primary" href="#work">Explore my projects <ExternalArrow /></a>
                <a className="text-link" href="https://github.com/kogleshofficial-hub" target="_blank" rel="noreferrer noopener">
                  GitHub <ExternalArrow />
                </a>
              </div>
              <div className="stack-focus">
                <span className="stack-focus-label">Tools I have used</span>
                <div className="stack-focus-items">
                  {["Next.js", "TypeScript", "PostgreSQL", "Supabase", "Product Design"].map((item) => (
                    <span key={item}>{item}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <figure className="hero-portrait" aria-label="Portrait of Koglesh R. Murugan">
            <div className="hero-portrait-frame">
              <Image
                src="/koglesh-portrait.jpg"
                alt="Koglesh R. Murugan in a black shirt, photographed in monochrome."
                width={340}
                height={336}
                priority
                sizes="(max-width: 950px) min(100vw - 48px, 430px), 420px"
                className="hero-portrait-image"
              />
            </div>
            <figcaption className="hero-portrait-caption">
              <div className="hero-portrait-identity">
                <strong>Koglesh R. Murugan</strong>
                <span>Student developer · Malaysia</span>
              </div>
              <a href="https://kryqen.vercel.app/" target="_blank" rel="noreferrer noopener" className="hero-portrait-link">
                Building Kyrqen <ExternalArrow />
              </a>
            </figcaption>
          </figure>
        </section>

        <section id="work" className="page-section work-section">
          <div className="section-heading">
            <div>
              <p className="section-kicker">Selected work</p>
              <h2>Projects</h2>
              <p className="section-intro">Products and experiments I&apos;ve been building, with a look at how each one works.</p>
            </div>
            <span className="section-count">06 featured projects</span>
          </div>

          <div className="project-grid">
            {projects.map((project) => <ProjectCard key={project.name} project={project} />)}
          </div>

          <div className="more-projects-heading">
            <div><p className="section-kicker">Also in the workshop</p><h3>More projects</h3></div>
            <span>Other things I&apos;ve made</span>
          </div>
          <div className="more-projects-grid">
            {moreProjects.map((project) => (
              <article className="more-project-card" key={project.name}>
                <div className="more-project-top">
                  <h4>{project.name}</h4>
                  <a href={project.live} target="_blank" rel="noreferrer noopener" aria-label={"Open " + project.name + " live site"}>
                    <ExternalArrow />
                  </a>
                </div>
                <p>{project.description}</p>
                <span className="more-project-stack">{project.stack}</span>
                <div className="more-project-links">
                  <a href={project.live} target="_blank" rel="noreferrer noopener">{project.live.startsWith("/") ? "Case study" : "Live Site"}</a>
                  <a href={project.github} target="_blank" rel="noreferrer noopener">GitHub</a>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="about" className="page-section about-section">
          <div className="section-heading">
            <div>
              <p className="section-kicker">A little more about me</p>
              <h2>Outside of Coding</h2>
              <p className="section-intro">
                Building software is one part of my life. I also compete, make videos, and learn outside the screen.
              </p>
            </div>
          </div>

          <div className="story-grid">
            <article className="story-card">
              <div className="story-card-top"><span className="story-icon"><StoryIcon type="phone" /></span><span className="story-index">01</span></div>
              <h3>FoodLoop built on a phone</h3>
              <p>
                I built the first FoodLoop MVP entirely on a phone. Limited tools meant keeping the first version focused on the core idea: list surplus food and let someone request it.
              </p>
              <a href="https://food-loop-app.vercel.app" target="_blank" rel="noreferrer noopener">See FoodLoop <ExternalArrow /></a>
            </article>

            <article className="story-card">
              <div className="story-card-top"><span className="story-icon"><StoryIcon type="medal" /></span><span className="story-index">02</span></div>
              <h3>Taekwondo</h3>
              <p>
                Gold in Poomsae Taeguk 6 at the VIFA Gewinn International Taekwondo Championship in India (2024), bronze in Poomsae Taeguk 7 at the 10th MBC Cup in Korea (2025), and a 2nd Dan Black Belt awarded in December 2025.
              </p>
              <span className="story-footnote">Gold · India 2024 / Bronze · Korea 2025</span>
            </article>

            <article className="story-card">
              <div className="story-card-top"><span className="story-icon"><StoryIcon type="play" /></span><span className="story-index">03</span></div>
              <h3>AERO</h3>
              <p>
                I run AERO, a YouTube channel about self-improvement, personal growth and psychology. A channel-page snapshot on 26 November 2026 showed 109 subscribers and 89,549 views. I paused uploads during exams and plan to return afterward.
              </p>
              <a href="https://www.youtube.com/@ItsAero_Official" target="_blank" rel="noreferrer noopener">Visit AERO <ExternalArrow /></a>
            </article>
          </div>
        </section>

        <section id="build-log" className="page-section build-section">
          <div className="section-heading">
            <div>
              <p className="section-kicker">Notes from the process</p>
              <h2>Build Log</h2>
              <p className="section-intro">A few checkpoints from things I&apos;ve shipped, tested, and improved.</p>
            </div>
          </div>
          <div className="timeline">
            {buildLog.map((entry, index) => (
              <article className={"timeline-entry" + (index === 0 ? " timeline-entry-recent" : "")} key={entry.date + entry.project}>
                <span className="timeline-marker" aria-hidden="true" />
                <time>{entry.date}</time>
                <div className="timeline-copy"><h3>{entry.project}</h3><p>{entry.note}</p></div>
                {index === 0 && <span className="timeline-recent-label">Recent</span>}
              </article>
            ))}
          </div>
        </section>

        <section id="contact" className="page-section contact-section">
          <div className="contact-panel">
            <div>
              <p className="section-kicker">Contact</p>
              <h2>Have something worth building?</h2>
              <p className="contact-copy">
                I&apos;m open to thoughtful conversations about products, software, and interesting problems.
              </p>
            </div>
            <div className="contact-actions">
              <a className="button button-primary" href="mailto:koglesh.official@gmail.com">Email me <ExternalArrow /></a>
              <CopyEmailButton />
            </div>
          </div>
        </section>

        <section id="links" className="page-section links-section">
          <div className="section-heading">
            <div>
              <p className="section-kicker">Find me elsewhere</p>
              <h2>Links</h2>
            </div>
          </div>
          <div className="links-grid">
            <a className="link-card" href="https://github.com/kogleshofficial-hub" target="_blank" rel="noreferrer noopener">
              <span>GitHub</span><ExternalArrow /><small>Code and projects</small>
            </a>
            <a className="link-card" href="https://www.linkedin.com/in/koglesh-r-murugan-020450430/" target="_blank" rel="noreferrer noopener">
              <span>LinkedIn</span><ExternalArrow /><small>Professional profile</small>
            </a>
            <a className="link-card" href="https://www.youtube.com/@ItsAero_Official" target="_blank" rel="noreferrer noopener">
              <span>YouTube / AERO</span><ExternalArrow /><small>Videos and experiments</small>
            </a>
            <a className="link-card" href="/scholarship">
              <span>Scholarship Profile</span><ExternalArrow /><small>Education, results and achievements</small>
            </a>
            <a className="link-card" href="mailto:koglesh.official@gmail.com">
              <span>Email</span><ExternalArrow /><small>koglesh.official@gmail.com</small>
            </a>
          </div>
        </section>

        <footer className="site-footer">
          <a className="wordmark footer-wordmark" href="#top">
            <span className="wordmark-mark">K</span>
            <span>Koglesh R. Murugan</span>
          </a>
          <p>Personal projects and experiments. Features may change as I keep working on them.</p>
          <span>© 2026</span>
        </footer>
      </div>
    </main>
  );
}
