import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Koglesh R. Murugan | Builder & Creator",
  description:
    "The portfolio of Koglesh R. Murugan. Exploring software, AI, design, and content through real projects.",
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
    "portfolio",
  ],
  authors: [
    {
      name: "Koglesh R. Murugan",
    },
  ],
  creator: "Koglesh R. Murugan",
  metadataBase: new URL("https://your-domain.com"),
  openGraph: {
    title: "Koglesh R. Murugan | Builder & Creator",
    description:
      "Exploring software, AI, design, and content through real projects.",
    type: "website",
    locale: "en_US",
    siteName: "Koglesh R. Murugan",
  },
  twitter: {
    card: "summary_large_image",
    title: "Koglesh R. Murugan | Builder & Creator",
    description:
      "Exploring software, AI, design, and content through real projects.",
  },
  icons: {
    icon: "/icon.png",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}