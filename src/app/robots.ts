import type { MetadataRoute } from "next";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://marina-eleshaa.com";
const canonicalUrl = SITE_URL.startsWith("http") ? SITE_URL : `https://${SITE_URL}`;

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${canonicalUrl}/sitemap.xml`,
    host: canonicalUrl,
  };
}

