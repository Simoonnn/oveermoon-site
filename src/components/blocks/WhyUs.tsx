import { whySection, stats } from '../../data/content'
import { Eyebrow } from '../ui/Eyebrow'
import { Reveal } from '../ui/Reveal'
import { LinkArrow } from '../ui/LinkArrow'

/** B6 — Inverted "why us" statement section, closed by a metrics strip. */
export function WhyUs() {
  return (
    <section id="why" className="relative overflow-hidden bg-ink py-[72px] text-white md:py-[140px]">
      <div className="glow-dark" aria-hidden="true" />
      <div className="wrap relative">
        <div className="max-w-[26ch]">
          <Reveal>
            <Eyebrow variant="soft">{whySection.eyebrow}</Eyebrow>
          </Reveal>
          <Reveal delay={60}>
            <h2 className="h2 mt-5">{whySection.title}</h2>
          </Reveal>
        </div>
        <Reveal delay={120}>
          <p className="lead mt-7 max-w-[52ch] text-white/70">{whySection.lead}</p>
        </Reveal>
        <Reveal delay={180}>
          <div className="mt-8 flex flex-wrap gap-x-8 gap-y-3">
            {whySection.links.map((l) => (
              <LinkArrow key={l.href} href={l.href} dark>
                {l.label}
              </LinkArrow>
            ))}
          </div>
        </Reveal>

        <Reveal delay={120} className="mt-16">
          <div className="grid gap-px overflow-hidden rounded-media border bg-[var(--hairline-dark)] md:grid-cols-2" style={{ borderColor: 'var(--hairline-dark)' }}>
            {whySection.points.map((p) => (
              <div key={p.title} className="h-full bg-ink p-7 md:p-9">
                <h3 className="h4">{p.title}</h3>
                <p className="mt-3 leading-relaxed text-white/70">{p.body}</p>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal delay={120} className="mt-6">
          <div className="grid grid-cols-2 gap-px overflow-hidden rounded-media border bg-[var(--hairline-dark)] md:grid-cols-4" style={{ borderColor: 'var(--hairline-dark)' }}>
            {stats.map((s) => (
              <div key={s.label} className="h-full bg-ink p-6 md:p-8">
                <div className="text-3xl font-medium leading-none tracking-[-0.02em] text-white md:text-[2.6rem]">
                  {s.value}
                </div>
                <div className="mt-3 text-sm text-white/55">{s.label}</div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
