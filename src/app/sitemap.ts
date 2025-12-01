import type { MetadataRoute } from "next";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://marina-eleshaa.com";
const canonicalUrl = SITE_URL.startsWith("http") ? SITE_URL : `https://${SITE_URL}`;

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return [
    {
      url: canonicalUrl,
      lastModified,
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}

