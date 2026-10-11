import type { MetadataRoute } from "next";

const baseUrl = "https://koglesh-portfolio.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = [
    { path: "/", priority: 1, changeFrequency: "weekly" as const },
    { path: "/resume", priority: 0.85, changeFrequency: "monthly" as const },
    { path: "/scholarship", priority: 0.95, changeFrequency: "monthly" as const },
    { path: "/projects/mirror", priority: 0.9, changeFrequency: "monthly" as const },
    { path: "/projects/gridpulse", priority: 0.9, changeFrequency: "monthly" as const },
    { path: "/projects/pace", priority: 0.9, changeFrequency: "monthly" as const }
  ];
  return paths.map(({ path, priority, changeFrequency }) => ({
    url: `${baseUrl}${path}`, lastModified: new Date(), changeFrequency, priority
  }));
}
