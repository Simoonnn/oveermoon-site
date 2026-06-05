import { integrations, integrationsKicker } from '../../data/content'
import { Eyebrow } from '../ui/Eyebrow'

/** B3 — Integration marquee. Replaces ae.studio's client-logo band. */
export function Marquee() {
  const items = [...integrations, ...integrations]
  return (
    <section className="border-y border-hairline py-12 md:py-16">
      <div className="wrap mb-8 flex justify-center">
        <Eyebrow variant="faint">{integrationsKicker}</Eyebrow>
      </div>
      <div className="marquee">
        <div className="marquee-track">
          {items.map((it, i) => (
            <span
              key={`${it}-${i}`}
              className="mx-7 whitespace-nowrap text-2xl font-medium text-ink/30 md:mx-12 md:text-3xl"
            >
              {it}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
