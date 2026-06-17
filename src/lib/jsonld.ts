/**
 * Builders for schema.org JSON-LD objects used across the marketing site.
 * Keeping the shapes here (instead of inline in pages) avoids duplication
 * between the landing page and the service pages and keeps the markup
 * machine-readable for search engines and AI answer surfaces.
 */

import { SITE_URL, SITE_NAME } from "../consts/config";

/** A single question/answer pair rendered both as UI and as FAQPage JSON-LD. */
export interface FaqItem {
  q: string;
  a: string;
}

/** FAQPage schema from a list of question/answer pairs. */
export function buildFaqJsonLd(items: FaqItem[]): object {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  };
}

/** Service schema for a single service page, provided by the brand Organization. */
export function buildServiceJsonLd(params: {
  name: string;
  serviceType: string;
  description: string;
  url: string;
}): object {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: params.name,
    serviceType: params.serviceType,
    description: params.description,
    url: params.url,
    provider: {
      "@type": "Organization",
      name: SITE_NAME,
      url: SITE_URL,
    },
    areaServed: { "@type": "Country", name: "Russia" },
    availableLanguage: "Russian",
  };
}

/** BreadcrumbList schema: Главная → {name}. */
export function buildBreadcrumbJsonLd(name: string, url: string): object {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Главная", item: SITE_URL },
      { "@type": "ListItem", position: 2, name, item: url },
    ],
  };
}
