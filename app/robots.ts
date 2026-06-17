import type { MetadataRoute } from "next";
import { SITE_URL } from "../src/consts/config";

/**
 * Robots rules served at the domain root (https://oveermoon.ru/robots.txt).
 * Crawlers fetch robots.txt only from the host root, so this single file
 * governs both the marketing site and the blog (served under /blog) and
 * advertises both sitemaps.
 */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/api/", "/blog/api/", "/blog/admin/"],
    },
    sitemap: [`${SITE_URL}/sitemap.xml`, `${SITE_URL}/blog/sitemap.xml`],
    host: SITE_URL,
  };
}
