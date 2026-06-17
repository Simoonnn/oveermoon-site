/**
 * Renders one or more schema.org objects as a single ld+json script tag.
 * Server-rendered so the structured data is present in the raw HTML for
 * crawlers and AI answer engines.
 */
export function JsonLd({ data }: { data: object | object[] }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
