import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const siteUrl = "https://koglesh-portfolio.vercel.app";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: { default: "Koglesh R. Murugan | Student Developer", template: "%s | Koglesh R. Murugan" },
  description: "Portfolio of Koglesh R. Murugan, a student developer in Malaysia. Explore web apps, practical tools, and experiments built around real problems.",
  keywords: ["Koglesh R. Murugan", "Koglesh Murugan", "web developer", "software developer", "product builder", "AI builder", "developer portfolio", "Malaysia developer", "GRIDPULSE", "MIRROR", "GRIDPULSE", "PACE", "SYNAPSE", "QueueWise", "BeforeYouGo", "FoodLoop", "One Next Step", "Truth Checker", "AERO", "Java"],
  authors: [{ name: "Koglesh R. Murugan", url: siteUrl }],
  creator: "Koglesh R. Murugan",
  publisher: "Koglesh R. Murugan",
  alternates: { canonical: "/" },
  openGraph: {
    title: "Koglesh R. Murugan | Student Developer",
    description: "Web apps, practical tools, and personal projects by Koglesh R. Murugan, a student developer in Malaysia. Explore GRIDPULSE, QueueWise, BeforeYouGo, FoodLoop and more.",
    type: "website",
    locale: "en_US",
    siteName: "Koglesh R. Murugan",
    url: siteUrl,
  },
  twitter: { card: "summary_large_image", title: "Koglesh R. Murugan | Student Developer", description: "Real products, AI experiences and creative work by Koglesh R. Murugan." },
  icons: { icon: "/favicon.ico" },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 } },
  verification: { google: "LI6z3Avdq6RsVP2faZ6nlhcbRwvnMIdjJkrSBygvnZM" },
};

const personJsonLd = {
  "@type": "Person",
  "@id": `${siteUrl}/#person`,
  name: "Koglesh R. Murugan",
  url: siteUrl,
  jobTitle: "Developer, Builder & Creator",
  description: "Student developer in Malaysia building web apps, practical tools, and personal projects.",
  sameAs: ["https://github.com/kogleshofficial-hub", "https://www.linkedin.com/in/koglesh-r-murugan-020450430/", "https://www.youtube.com/@ItsAero_Official"],
  knowsAbout: ["Web development", "Artificial intelligence", "Product design", "User interface design", "Software development", "Supabase", "PostgreSQL", "Next.js", "Azure", "Content creation"],
};

const portfolioProjects = [
  { "@type": "CreativeWork", name: "MIRROR", url: "https://mirror-simulation-engine.vercel.app", description: "A local simulation tool for testing how changes to demand and capacity affect a workflow." },
  { "@type": "CreativeWork", name: "PACE", url: "https://pace-nu-seven.vercel.app", description: "A study planner that helps students organize deadlines and available time into a weekly plan." },
  { "@type": "CreativeWork", name: "SYNAPSE", url: "https://synapse-7ldp5tfhy-kogleshofficial-hubs-projects.vercel.app", description: "A local-first weekly planner that organizes tasks by effort, priority, and available time." },
  { "@type": "CreativeWork", name: "GRIDPULSE", url: "https://gridpulse-three.vercel.app", description: "A tool for reviewing infrastructure data while keeping observed evidence separate from optional AI analysis." },
  { "@type": "CreativeWork", name: "QueueWise", url: "https://queuewise-app.vercel.app", description: "A community queue tracker built around recent reports and clear waiting-time estimates." },
  { "@type": "CreativeWork", name: "BeforeYouGo", url: "https://beforeyougo-gray.vercel.app", description: "A browser-based checklist tool for getting ready before visits, travel, and important tasks." },
  { "@type": "CreativeWork", name: "FoodLoop", url: "https://food-loop-app.vercel.app", description: "A food-rescue app for listing surplus food and letting people request available items." },
  { "@type": "CreativeWork", name: "One Next Step", url: "https://one-next-step.vercel.app", description: "A decision tool that helps turn a situation into one practical next action." },
  { "@type": "CreativeWork", name: "Truth Checker", url: "https://truth-checker-app.vercel.app", description: "A web app for examining online claims and reviewing the sources behind them." },
  { "@type": "CreativeWork", name: "AERO", url: "https://www.youtube.com/@ItsAero_Official", description: "A YouTube channel for challenges, experiments, and documenting progress." },
];

const websiteJsonLd = { "@type": "WebSite", "@id": `${siteUrl}/#website`, url: siteUrl, name: "Koglesh R. Murugan", description: "Portfolio of Koglesh R. Murugan, a student developer in Malaysia.", publisher: { "@id": `${siteUrl}/#person` }, inLanguage: "en" };
const graphJsonLd = { "@context": "https://schema.org", "@graph": [personJsonLd, websiteJsonLd, ...portfolioProjects] };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body className={`${geistSans.variable} ${geistMono.variable} antialiased`}><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(graphJsonLd) }} />{children}</body></html>;
}
