import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

const siteUrl = "https://koglesh-portfolio.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Koglesh R. Murugan — Builder, Creator & AI Explorer",
    template: "%s — Koglesh R. Murugan",
  },
  description:
    "Portfolio of Koglesh R. Murugan — building software, AI products, digital experiences, and creative work.",
  keywords: [
    "Koglesh R. Murugan",
    "Koglesh",
    "developer",
    "builder",
    "AI",
    "Next.js",
    "React",
    "TypeScript",
    "One Next Step",
    "Truth Checker",
    "AERO",
    "portfolio",
  ],
  authors: [{ name: "Koglesh R. Murugan" }],
  creator: "Koglesh R. Murugan",
  alternates: { canonical: "/" },
  openGraph: {
    title: "Koglesh R. Murugan — Builder, Creator & AI Explorer",
    description:
      "Building software, AI products, digital experiences, and content through real projects.",
    type: "website",
    locale: "en_US",
    siteName: "Koglesh R. Murugan",
    url: siteUrl,
  },
  twitter: {
    card: "summary_large_image",
    title: "Koglesh R. Murugan — Builder, Creator & AI Explorer",
    description:
      "Building software, AI products, digital experiences, and creative work.",
  },
  icons: { icon: "/favicon.ico" },
  robots: { index: true, follow: true },
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Koglesh R. Murugan",
  url: siteUrl,
  jobTitle: "Developer, AI Builder, Designer & Content Creator",
  sameAs: [
    "https://github.com/kogleshofficial-hub",
    "https://www.youtube.com/@ItsAero_Official",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
