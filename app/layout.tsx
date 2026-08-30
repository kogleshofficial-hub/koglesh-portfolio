import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

const siteUrl = "https://koglesh-portfolio.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Koglesh R. Murugan — Independent Developer & Builder",
    template: "%s — Koglesh R. Murugan",
  },
  description:
    "Official website of Koglesh R. Murugan, an independent developer and builder creating real-world web products, AI experiences, and creative digital projects.",
  keywords: [
    "Koglesh R. Murugan",
    "Koglesh Murugan",
    "Koglesh",
    "developer",
    "independent developer",
    "web developer",
    "AI builder",
    "software builder",
    "FoodLoop",
    "One Next Step",
    "Truth Checker",
    "AERO",
    "portfolio",
  ],
  authors: [{ name: "Koglesh R. Murugan", url: siteUrl }],
  creator: "Koglesh R. Murugan",
  publisher: "Koglesh R. Murugan",
  alternates: { canonical: "/" },
  openGraph: {
    title: "Koglesh R. Murugan — Independent Developer & Builder",
    description:
      "Official website of Koglesh R. Murugan — real products, experiments, and creative work.",
    type: "website",
    locale: "en_US",
    siteName: "Koglesh R. Murugan",
    url: siteUrl,
  },
  twitter: {
    card: "summary_large_image",
    title: "Koglesh R. Murugan — Independent Developer & Builder",
    description:
      "Real products, experiments, and creative work by Koglesh R. Murugan.",
  },
  icons: { icon: "/favicon.ico" },
  robots: { index: true, follow: true },
  verification: {
    google: "LI6z3Avdq6RsVP2faZ6nlhcbRwvnMIdjJkrSBygvnZM",
  },
};

const personJsonLd = {
  "@type": "Person",
  "@id": `${siteUrl}/#person`,
  name: "Koglesh R. Murugan",
  url: siteUrl,
  jobTitle: "Independent Developer & Builder",
  description:
    "Independent developer and builder creating web products, AI experiences, and creative digital projects.",
  sameAs: [
    "https://github.com/kogleshofficial-hub",
    "https://www.youtube.com/@ItsAero_Official",
  ],
  knowsAbout: [
    "Web development",
    "Artificial intelligence",
    "Product design",
    "User interface design",
    "Software development",
    "Content creation",
  ],
};

const websiteJsonLd = {
  "@type": "WebSite",
  "@id": `${siteUrl}/#website`,
  url: siteUrl,
  name: "Koglesh R. Murugan",
  description:
    "Official website of Koglesh R. Murugan — independent developer, builder, and creator.",
  publisher: { "@id": `${siteUrl}/#person` },
  inLanguage: "en",
};

const graphJsonLd = {
  "@context": "https://schema.org",
  "@graph": [personJsonLd, websiteJsonLd],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(graphJsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
