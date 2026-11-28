import type { MetadataRoute } from "next";

const baseUrl = "https://koglesh-portfolio.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = [
    { path: "/", priority: 1, changeFrequency: "weekly" as const },
    { path: "/resume", priority: 0.85, changeFrequency: "monthly" as const },
    { path: "/scholarship", priority: 0.95, changeFrequency: "monthly" as const },
    { path: "/projects/mirror", priority: 0.9, changeFrequency: "monthly" as const },
    { path: "/projects/gridpulse", priority: 0.9, changeFrequency: "monthly" as const },
    { path: "/projects/pace", priority: 0.9, changeFrequency: "monthly" as const },
    {
      path: "/hardware",
      priority: 0.9,
      changeFrequency: "monthly" as const,
      images: [`${baseUrl}/aero-01/suspension-detail.webp`],
    },
    {
      path: "/hardware/aero-01",
      priority: 0.9,
      changeFrequency: "monthly" as const,
      images: [
        `${baseUrl}/aero-01/engineering-notebook.webp`,
        `${baseUrl}/aero-01/suspension-detail.webp`,
        `${baseUrl}/aero-01/control-motion-poster.webp`,
        `${baseUrl}/aero-01/suspension-motion-poster.webp`,
        `${baseUrl}/aero-01/settling-30-47.webp`,
        `${baseUrl}/aero-01/settling-10-83.webp`,
      ],
    },
  ];
  return paths.map(({ path, priority, changeFrequency, images }) => ({
    url: `${baseUrl}${path}`,
    lastModified: new Date(),
    changeFrequency,
    priority,
    ...(images ? { images } : {}),
  }));
}
