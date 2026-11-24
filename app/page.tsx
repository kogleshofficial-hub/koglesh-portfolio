"use client";

import { useState } from "react";

type Project = {
  number: string;
  name: string;
  category: string;
  domain: string;
  preview: string;
  description: string;
  stack: string[];
  live: string;
  github: string;
};

const featuredProjects: Project[] = [
  {
    number: "01",
    name: "MIRROR",
    category: "Simulation tool",
    domain: "mirror-simulation-engine.vercel.app",
    preview: "https://mirror-simulation-engine.vercel.app",
    description:
      "I built MIRROR to see how changes in demand and capacity affect a simple workflow. I kept the simulation local and repeatable, which makes it easier to test but limits it to the scenarios the model supports.",
    stack: ["Next.js", "React", "TypeScript", "Simulation"],
    live: "https://mirror-simulation-engine.vercel.app",
    github: "https://github.com/kogleshofficial-hub/mirror-simulation-engine",
  },
  {
    number: "02",
    name: "GRIDPULSE",
    category: "Infrastructure project",
    domain: "gridpulse-three.vercel.app",
    preview: "https://gridpulse-three.vercel.app",
    description:
      "I built GRIDPULSE to make infrastructure data easier to review. I kept observed evidence separate from optional AI analysis, so a failed AI service cannot quietly turn into a made-up result.",
    stack: ["Next.js", "PostgreSQL", "Zod", "Azure"],
    live: "https://gridpulse-three.vercel.app",
    github: "https://github.com/kogleshofficial-hub/GRIDPULSE",
  },
  {
    number: "03",
    name: "PACE",
    category: "Study planner",
    domain: "pace-nu-seven.vercel.app",
    preview: "https://pace-nu-seven.vercel.app",
    description:
      "I built PACE to help students plan work around real deadlines and available time. I chose accounts and per-user saved data instead of a local-only planner, which makes permissions and unreliable connections part of the product.",
    stack: ["Next.js", "React", "TypeScript", "Appwrite"],
    live: "https://pace-nu-seven.vercel.app",
    github: "https://github.com/kogleshofficial-hub/PACE",
  },
  {
    number: "04",
    name: "FoodLoop",
    category: "Food rescue",
    domain: "food-loop-app.vercel.app",
    preview: "https://food-loop-app.vercel.app",
    description:
      "I built FoodLoop around a simple problem: surplus food is useful only when someone can find and request it in time. I built the first MVP entirely on a phone, so I kept the early version focused on listings and requests.",
    stack: ["Next.js", "Supabase", "PostgreSQL", "Vercel"],
    live: "https://food-loop-app.vercel.app",
    github: "https://github.com/kogleshofficial-hub/FoodLoop",
  },
  {
    number: "05",
    name: "Truth Checker",
    category: "Research tool",
    domain: "truth-checker-app.vercel.app",
    preview: "https://truth-checker-app.vercel.app",
    description:
      "I built Truth Checker to make it easier to inspect an online claim and follow the sources behind it. I chose to show evidence and context instead of presenting a confident verdict without an explanation.",
    stack: ["Next.js", "TypeScript", "AI", "Evidence"],
    live: "https://truth-checker-app.vercel.app",
    github: "https://github.com/kogleshofficial-hub/truth-checker",
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
    name: "AERO",
    description: "My YouTube channel for challenges, experiments, and documenting progress.",
    live: "https://www.youtube.com/@ItsAero_Official",
    github: "https://github.com/kogleshofficial-hub/AERO",
    stack: "YouTube · Editing · Storytelling",
  },
];

const buildLog = [
  {
    date: "08 Sep 2026",
    project: "MIRROR",
    note: "Finished the simulation model and documented which scenarios it supports.",
  },
  {
    date: "07 Sep 2026",
    project: "PACE",
    note: "Shipped the study planner with Appwrite sign-in and separate user data.",
  },
  {
    date: "06 Sep 2026",
    project: "SYNAPSE",
    note: "Published a local-first weekly planner built around tasks and available time.",
  },
  {
    date: "05 Sep 2026",
    project: "GRIDPULSE",
    note: "Improved how infrastructure signals are checked before they are explained.",
  },
  {
    date: "04 Sep 2026",
    project: "FoodLoop",
    note: "Worked on the food listing and request flow for the MVP.",
  },
];

function ExternalArrow() {
  return <span aria-hidden="true" className="external-arrow">↗</span>;
}

function ProjectPreview({ project }: { project: Project }) {
  return (
    <div className="preview-shell">
      <div className="preview-chrome">
        <div className="preview-dots" aria-hidden="true">
          <span />
          <span />
          <span />
        </div>
        <span className="preview-domain">{project.domain}</span>
        <a href={project.live} target="_blank" rel="noreferrer noopener" className="preview-open">
          Open <ExternalArrow />
        </a>
      </div>
      <div className="preview-viewport">
        <iframe
          src={project.preview}
          title={project.name + " live website preview"}
          loading="lazy"
          referrerPolicy="strict-origin-when-cross-origin"
          sandbox="allow-scripts allow-same-origin allow-forms"
          tabIndex={-1}
        />
      </div>
    </div>
  );
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="project-card">
      <ProjectPreview project={project} />
      <div className="project-copy">
        <div className="project-meta">
          <span>{project.number}</span>
          <span>{project.category}</span>
        </div>
        <h3>{project.name}</h3>
        <p className="project-description">{project.description}</p>
        <div className="project-tags" aria-label={project.name + " technology stack"}>
          {project.stack.map((item) => (
            <span className="tag" key={item}>{item}</span>
          ))}
        </div>
        <div className="project-links">
          <a href={project.live} target="_blank" rel="noreferrer noopener" className="primary-text-link">
            Live Site <ExternalArrow />
          </a>
          <a href={project.github} target="_blank" rel="noreferrer noopener">
            GitHub <ExternalArrow />
          </a>
        </div>
      </div>
    </article>
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
            <a href="#contact">Contact</a>
          </nav>
        </div>
      </header>

      <div id="top" className="site-shell">
        <section className="hero">
          <div className="hero-main">
            <p className="eyebrow"><span className="availability-dot" /> Student developer based in Malaysia</p>
            <h1>I build useful things <span>for real people.</span></h1>
            <p className="hero-copy">
              I&apos;m Koglesh. I design and build web products, try ideas, and learn by shipping them.
              Most of my work starts with a problem I want to make a little easier.
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href="#work">Explore my projects <ExternalArrow /></a>
              <a className="text-link" href="https://github.com/kogleshofficial-hub" target="_blank" rel="noreferrer noopener">
                GitHub <ExternalArrow />
              </a>
            </div>
          </div>
          <aside className="hero-note" aria-label="A little about my work">
            <p className="hero-note-label">A little about my work</p>
            <p>I like clear interfaces, useful details, and products that solve a real problem.</p>
            <div className="hero-note-rule" />
            <p className="hero-note-small">Design, code, test, learn, repeat.</p>
          </aside>
        </section>

        <section id="work" className="page-section">
          <div className="section-heading">
            <div>
              <p className="section-kicker">Selected work</p>
              <h2>Projects</h2>
              <p className="section-intro">A few things I&apos;ve been working on, and the decisions behind them.</p>
            </div>
            <span className="section-count">05 featured projects</span>
          </div>

          <div className="featured-projects">
            {featuredProjects.map((project) => (
              <ProjectCard key={project.name} project={project} />
            ))}
          </div>

          <div className="more-projects-heading">
            <h3>More projects</h3>
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
                  <a href={project.live} target="_blank" rel="noreferrer noopener">Live Site</a>
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
                Building software is one part of my life. I also enjoy competing, learning new skills, and making videos.
              </p>
            </div>
          </div>

          <div className="story-grid">
            <article className="story-card">
              <span className="story-number">01</span>
              <h3>FoodLoop, built on a phone</h3>
              <p>
                I built the first FoodLoop MVP entirely on a phone. It meant working with limited tools and keeping my attention on the core idea: listing surplus food and letting someone request it.
              </p>
              <a href="https://food-loop-app.vercel.app" target="_blank" rel="noreferrer noopener">
                See FoodLoop <ExternalArrow />
              </a>
            </article>

            <article className="story-card">
              <span className="story-number">02</span>
              <h3>Taekwondo</h3>
              <p>
                Gold at the VIFA Gewinn India Open International Taekwondo Championship in 2024, bronze at the 10th MBC Cup Open International Taekwondo Championship in Korea in 2025, and a Taekwondo Black Belt.
              </p>
            </article>

            <article className="story-card">
              <span className="story-number">03</span>
              <h3>AERO</h3>
              <p>
                I also run AERO, my YouTube Shorts channel. It reached 35.5k views in a 28-day YouTube Studio snapshot from 12 September to 9 October 2026.
              </p>
              <a href="https://www.youtube.com/@ItsAero_Official" target="_blank" rel="noreferrer noopener">
                Visit AERO <ExternalArrow />
              </a>
            </article>
          </div>
        </section>

        <section id="build-log" className="page-section build-section">
          <div className="section-heading">
            <div>
              <p className="section-kicker">Notes from the process</p>
              <h2>Build Log</h2>
              <p className="section-intro">A few checkpoints from projects I&apos;ve shipped and improved.</p>
            </div>
          </div>
          <div className="build-log-list">
            {buildLog.map((entry) => (
              <article className="build-row" key={entry.date + entry.project}>
                <time>{entry.date}</time>
                <h3>{entry.project}</h3>
                <p>{entry.note}</p>
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
              <span>GitHub</span><ExternalArrow />
              <small>Code and projects</small>
            </a>
            <a className="link-card" href="https://www.linkedin.com/in/koglesh-r-murugan-020450430/" target="_blank" rel="noreferrer noopener">
              <span>LinkedIn</span><ExternalArrow />
              <small>Professional profile</small>
            </a>
            <a className="link-card" href="https://www.youtube.com/@ItsAero_Official" target="_blank" rel="noreferrer noopener">
              <span>YouTube / AERO</span><ExternalArrow />
              <small>Videos and experiments</small>
            </a>
            <a className="link-card" href="mailto:koglesh.official@gmail.com">
              <span>Email</span><ExternalArrow />
              <small>koglesh.official@gmail.com</small>
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
