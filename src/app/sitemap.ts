import type { MetadataRoute } from "next";
import { site } from "@/data/site";
export const dynamic = "force-static";
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: site.url, changeFrequency: "monthly", priority: 0.8 },
    { url: `${site.url}/portfolio`, changeFrequency: "monthly", priority: 1 },
  ];
}
