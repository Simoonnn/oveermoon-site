import { Section } from '../ui/Section'
import { Eyebrow } from '../ui/Eyebrow'
import { Reveal } from '../ui/Reveal'
import { JsonLd } from '../ui/JsonLd'
import { Plus } from '../ui/icons'
import { buildFaqJsonLd } from '../../lib/jsonld'
import type { FaqItem } from '../../lib/jsonld'

interface FaqProps {
  eyebrow: string
  title: string
  lead?: string
  items: FaqItem[]
  /** Emit FAQPage JSON-LD. Disable when the same FAQ is already in page schema. */
  jsonLd?: boolean
}

/**
 * Reusable FAQ section. Uses native <details>/<summary> so every answer is in
 * the raw HTML and crawlable without JS, while still collapsing for readers.
 * Optionally emits FAQPage JSON-LD for rich results and AI answer surfaces.
 */
export function Faq({ eyebrow, title, lead, items, jsonLd = true }: FaqProps) {
  return (
    <Section id="faq">
      {jsonLd && <JsonLd data={buildFaqJsonLd(items)} />}
      <div>
        <Reveal>
          <Eyebrow>{eyebrow}</Eyebrow>
        </Reveal>
        <Reveal delay={60}>
          <h2 className="h2 mt-5">{title}</h2>
        </Reveal>
        {lead && (
          <Reveal delay={120}>
            <p className="lead mt-6">{lead}</p>
          </Reveal>
        )}
      </div>

      <Reveal delay={80} className="mt-12">
        <div className="border-t border-hairline">
          {items.map((item) => (
            <details key={item.q} className="group border-b border-hairline">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-6 text-left md:py-7">
                <span className="h4 transition-colors group-open:text-accent group-hover:text-accent">
                  {item.q}
                </span>
                <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-hairline text-ink transition-[transform,color,border-color] duration-300 group-open:rotate-45 group-open:border-accent group-open:text-accent">
                  <Plus />
                </span>
              </summary>
              <p className="max-w-[70ch] pb-7 leading-relaxed text-muted md:pr-12">{item.a}</p>
            </details>
          ))}
        </div>
      </Reveal>
    </Section>
  )
}
