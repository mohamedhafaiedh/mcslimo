import type { MetadataRoute } from "next";
import { SITE_URL, SITE_ROUTES } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const frEntries: MetadataRoute.Sitemap = SITE_ROUTES.map((route) => {
    const path = route ? `${route}/` : "";
    const isHome = route === "";
    const isLegal = ["mentions-legales", "politique-de-confidentialite", "cgv"].includes(route);

    return {
      url: `${SITE_URL}/${path}`,
      lastModified: now,
      changeFrequency: isHome ? "daily" : isLegal ? "monthly" : "weekly",
      priority: isHome ? 1.0 : isLegal ? 0.5 : 0.8,
    };
  });

  const enEntries: MetadataRoute.Sitemap = SITE_ROUTES.map((route) => {
    const path = route ? `${route}/` : "";
    const isHome = route === "";
    const isLegal = ["mentions-legales", "politique-de-confidentialite", "cgv"].includes(route);

    return {
      url: `${SITE_URL}/en/${path}`,
      lastModified: now,
      changeFrequency: isHome ? "daily" : isLegal ? "monthly" : "weekly",
      priority: isHome ? 0.9 : isLegal ? 0.4 : 0.7,
    };
  });

  return [...frEntries, ...enEntries];
}
