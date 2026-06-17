/**
 * Site-wide SEO, contact and legal constants for the OVEERMOON marketing site.
 * Keeps URLs, analytics ids, contacts and legal-entity details in one place so
 * they are not duplicated as magic values across metadata, JSON-LD and chrome.
 */

/** Canonical origin of the marketing site (no trailing slash). */
export const SITE_URL = "https://oveermoon.ru";

/** Brand wordmark. */
export const SITE_NAME = "OVEERMOON";

/** Yandex.Metrika counter id (analytics for the marketing site). */
export const YM_COUNTER_ID = 109743232;

/** Public contact channels shown across the site. */
export const CONTACTS = {
  telegram: "https://t.me/oveermoon",
  phone: "+7 (987) 239-36-71",
  /** Machine-readable phone for `tel:` links. */
  phoneHref: "tel:+79872393671",
  email: "oveermoon@oveermoon.ru",
} as const;

/**
 * Legal entity behind the OVEERMOON brand. Used in the footer, the privacy
 * policy and Organization JSON-LD. OVEERMOON is a brand operated by this sole
 * proprietor (ИП).
 */
export const LEGAL = {
  entity: "ИП Метелёв Семён Вадимович",
  inn: "165917642538",
  ogrnip: "324169000223424",
  address: "г. Казань, ул. Чистопольская, д. 22",
} as const;
