import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Koglesh R. Murugan — Portfolio",
    short_name: "Koglesh",
    description:
      "Portfolio of Koglesh R. Murugan — software, AI products, digital experiences, and creative work.",
    start_url: "/",
    display: "standalone",
    background_color: "#050505",
    theme_color: "#050505",
    icons: [
      {
        src: "/favicon.ico",
        type: "image/x-icon",
      },
    ],
  };
}
