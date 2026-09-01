import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const siteUrl = "https://koglesh-portfolio.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: { default: "Koglesh R. Murugan — Developer, Builder & Creator", template: "%s — Koglesh R. Murugan" },
  description: "Official portfolio of Koglesh R. Murugan — an independent developer and product builder creating real-world web products, AI experiences and creative digital projects.",
  keywords: ["Koglesh R. Murugan", "Koglesh Murugan", "web developer", "software developer", "product builder", "AI builder", "developer portfolio", "Malaysia developer", "QueueWise", "BeforeYouGo", "FoodLoop", "One Next Step", "Truth Checker", "AERO"],
  authors: [{ name: "Koglesh R. Murugan", url: siteUrl }],
  creator: "Koglesh R. Murugan",
  publisher: "Koglesh R. Murugan",
  alternates: { canonical: "/" },
  openGraph: { title: "Koglesh R. Murugan — Developer, Builder & Creator", description: "Real products, AI experiences and creative projects by Koglesh R. Murugan. Explore QueueWise, BeforeYouGo, FoodLoop, One Next Step and Truth Checker.", type: "website", locale: "en_US", siteName: "Koglesh R. Murugan", url: siteUrl },
  twitter: { card: "summary_large_image", title: "Koglesh R. Murugan — Developer, Builder & Creator", description: "Real products, AI experiences and creative work by Koglesh R. Murugan." },
  icons: { icon: "/favicon.ico", apple: "/favicon.ico" },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 } },
  verification: { google: "LI6z3Avdq6RsVP2faZ6nlhcbRwvnMIdjJkrSBygvnZM" },
};

const personJsonLd = {
  "@type": "Person", "@id": `${siteUrl}/#person`, name: "Koglesh R. Murugan", url: siteUrl,
  jobTitle: "Developer, Builder & Creator",
  description: "Independent developer and product builder creating real-world web products, AI experiences and creative digital projects.",
  sameAs: ["https://github.com/kogleshofficial-hub", "https://www.linkedin.com/in/koglesh-r-murugan-020450430/", "https://www.youtube.com/@ItsAero_Official"],
  knowsAbout: ["Web development", "Artificial intelligence", "Product design", "User interface design", "Software development", "Supabase", "PostgreSQL", "Next.js", "Content creation"],
};

const portfolioProjects = [
  { "@type": "CreativeWork", name: "QueueWise", url: "https://queuewise-app.vercel.app", description: "A community-powered queue tracker using fresh reports from real-world services." },
  { "@type": "CreativeWork", name: "BeforeYouGo", url: "https://beforeyougo-gray.vercel.app", description: "A private browser-based checklist tool for preparing before visits, travel and important tasks." },
  { "@type": "CreativeWork", name: "FoodLoop", url: "https://food-loop-app.vercel.app", description: "A real food-rescue platform connecting surplus food with people who can use it." },
  { "@type": "CreativeWork", name: "One Next Step", url: "https://one-next-step.vercel.app", description: "A focused decision-support experience that turns a situation into one clear next action." },
  { "@type": "CreativeWork", name: "Truth Checker", url: "https://truth-checker-app.vercel.app", description: "An evidence-first claim investigation web experience." },
  { "@type": "CreativeWork", name: "AERO", url: "https://www.youtube.com/@ItsAero_Official", description: "A challenge-driven creative project focused on learning, experimentation and storytelling." },
];

const websiteJsonLd = { "@type": "WebSite", "@id": `${siteUrl}/#website`, url: siteUrl, name: "Koglesh R. Murugan", description: "Official portfolio of Koglesh R. Murugan — developer, builder and creator.", publisher: { "@id": `${siteUrl}/#person` }, inLanguage: "en" };
const graphJsonLd = { "@context": "https://schema.org", "@graph": [personJsonLd, websiteJsonLd, ...portfolioProjects] };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body className={`${Geist({ variable: "--font-geist-sans" }).variable} ${Geist_Mono({ variable: "--font-geist-mono" }).variable} antialiased`}><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(graphJsonLd) }} />{children}</body></html>;
}
