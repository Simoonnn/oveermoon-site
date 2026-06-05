import { quote } from '../../data/content'
import { Reveal } from '../ui/Reveal'

/** B4 — Quote band. A soft violet-tinted breather between hero and content. */
export function QuoteBand() {
  return (
    <section className="pt-[64px] md:pt-[96px]">
      <div className="wrap">
        <Reveal>
          <figure className="relative overflow-hidden rounded-band bg-[var(--tint)] px-7 py-12 md:px-16 md:py-16">
            <span
              aria-hidden="true"
              className="pointer-events-none absolute left-5 top-1 select-none font-medium leading-none text-accent/25 md:left-10 md:top-3"
              style={{ fontSize: '120px' }}
            >
              “
            </span>
            <blockquote className="quote-text relative max-w-[26ch]">{quote.text}</blockquote>
            <figcaption className="eyebrow relative mt-7">{quote.by}</figcaption>
          </figure>
        </Reveal>
      </div>
    </section>
  )
}
