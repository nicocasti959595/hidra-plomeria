import type { MetadataRoute } from "next";
import { site } from "@/lib/site";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: site.brandFull,
    short_name: site.name,
    description: "Plomería, gas y destapaciones en CABA y Gran Buenos Aires. Gasista matriculado y urgencias 24 hs.",
    start_url: "/",
    display: "standalone",
    background_color: "#07212c",
    theme_color: "#07212c",
    icons: [
      { src: "/icon.svg", sizes: "any", type: "image/svg+xml" },
    ],
  };
}
