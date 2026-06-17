import { SITE_URL, SITE_NAME, CONTACTS, LEGAL } from "../src/consts/config";

/**
 * Organization + WebSite JSON-LD for the marketing site. Gives search engines
 * machine-readable brand signals (logo, legal entity, contacts) for the brand
 * panel and richer SERP presence. Rendered once in the root layout.
 */
export function SiteJsonLd() {
  const data = [
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      name: SITE_NAME,
      legalName: LEGAL.entity,
      url: SITE_URL,
      logo: `${SITE_URL}/logo-full.svg`,
      description:
        "ИИ-автоматизация продаж, поддержки и документооборота для бизнеса.",
      email: CONTACTS.email,
      telephone: CONTACTS.phone,
      address: {
        "@type": "PostalAddress",
        addressCountry: "RU",
        addressLocality: "Казань",
        streetAddress: "ул. Чистопольская, д. 22",
      },
      contactPoint: {
        "@type": "ContactPoint",
        contactType: "sales",
        telephone: CONTACTS.phone,
        email: CONTACTS.email,
        availableLanguage: "Russian",
        url: CONTACTS.telegram,
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      name: SITE_NAME,
      url: SITE_URL,
      inLanguage: "ru-RU",
    },
  ];

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
