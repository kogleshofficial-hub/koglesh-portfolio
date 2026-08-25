import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Koglesh R. Murugan — Builder, Creator & AI Explorer",
  description:
    "The portfolio of Koglesh R. Murugan — building software, AI products, digital experiences, and content from Malaysia.",
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
    "AERO",
    "portfolio",
  ],
  authors: [{ name: "Koglesh R. Murugan" }],
  creator: "Koglesh R. Murugan",
  metadataBase: new URL("https://koglesh-portfolio.vercel.app"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Koglesh R. Murugan — Builder, Creator & AI Explorer",
    description:
      "Building software, AI products, digital experiences, and content through real projects.",
    type: "website",
    locale: "en_US",
    siteName: "Koglesh R. Murugan",
    url: "https://koglesh-portfolio.vercel.app",
  },
  twitter: {
    card: "summary_large_image",
    title: "Koglesh R. Murugan — Builder, Creator & AI Explorer",
    description:
      "Building software, AI products, digital experiences, and content through real projects.",
  },
  icons: { icon: "/icon.png" },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
