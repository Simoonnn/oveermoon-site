import type { MetadataRoute } from "next";
import { SITE_URL } from "../src/consts/config";
import { serviceSlugs } from "../src/data/services";

/** Sitemap served at https://oveermoon.ru/sitemap.xml (marketing site only). */
export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  const servicePages: MetadataRoute.Sitemap = serviceSlugs.map((slug) => ({
    url: `${SITE_URL}/${slug}`,
    lastModified,
    changeFrequency: "monthly",
    priority: 0.9,
  }));

  return [
    { url: SITE_URL, lastModified, changeFrequency: "weekly", priority: 1 },
    ...servicePages,
  ];
}
