import { productsSection } from '../../data/content'
import type { Product } from '../../data/content'
import { Section } from '../ui/Section'
import { Eyebrow } from '../ui/Eyebrow'
import { Reveal } from '../ui/Reveal'
import { LinkArrow } from '../ui/LinkArrow'
import { ArrowRight } from '../ui/icons'

/** Wide feature card (the sales pipeline product) — media beside content. */
function WideCard({ p }: { p: Product }) {
  return (
    <Reveal className="h-full md:col-span-2">
      <a
        href={p.href}
        className="card group grid h-full overflow-hidden rounded-media border border-hairline bg-paper-raised md:grid-cols-2"
      >
        <div className={`media ${p.wash} min-h-[220px] md:min-h-full`} />
        <div className="flex flex-col p-7 md:p-10">
          <div className="eyebrow">{p.category}</div>
          <h3 className="h3 mt-3 transition-colors group-hover:text-accent">{p.title}</h3>
          <p className="mt-4 max-w-[48ch] leading-relaxed text-muted">{p.body}</p>
          {p.tools && (
            <div className="mt-6 flex flex-wrap gap-2">
              {p.tools.map((t) => (
                <span key={t} className="rounded-sharp border border-hairline px-3 py-1.5 text-sm text-ink/70">
                  {t}
                </span>
              ))}
            </div>
          )}
          <span className="link-arrow mt-7">
            Подробнее
            <ArrowRight />
          </span>
        </div>
      </a>
    </Reveal>
  )
}

/** Standard product card — washed media on top, content below. */
function ProductCard({ p, i }: { p: Product; i: number }) {
  return (
    <Reveal delay={(i % 2) * 80} className="h-full">
      <a
        href={p.href}
        className="card group flex h-full flex-col overflow-hidden rounded-media border border-hairline bg-paper-raised"
      >
        <div className={`media ${p.wash} aspect-[16/10]`} />
        <div className="flex flex-1 flex-col p-6 md:p-8">
          <div className="eyebrow">{p.category}</div>
          <h3 className="h3 mt-3 transition-colors group-hover:text-accent">{p.title}</h3>
          <p className="mt-3 leading-relaxed text-muted">{p.body}</p>
          <span className="link-arrow mt-6">
            Подробнее
            <ArrowRight />
          </span>
        </div>
      </a>
    </Reveal>
  )
}

/** B5 — Products. One wide feature card + a 2×2 grid. */
export function Products() {
  const [wide, ...rest] = productsSection.items
  return (
    <Section id="products">
      <div className="max-w-[28ch]">
        <Reveal>
          <Eyebrow>{productsSection.eyebrow}</Eyebrow>
        </Reveal>
        <Reveal delay={60}>
          <h2 className="h2 mt-5">{productsSection.title}</h2>
        </Reveal>
      </div>

      <div className="mt-14 grid gap-5 md:grid-cols-2 md:gap-6">
        <WideCard p={wide} />
        {rest.map((p, i) => (
          <ProductCard key={p.title} p={p} i={i} />
        ))}
      </div>

      <div className="mt-10">
        <LinkArrow href="#contact">{productsSection.all}</LinkArrow>
      </div>
    </Section>
  )
}
