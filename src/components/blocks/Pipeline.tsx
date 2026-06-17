import { pipeline } from '../../data/content'
import { Section } from '../ui/Section'
import { Eyebrow } from '../ui/Eyebrow'
import { Reveal } from '../ui/Reveal'

/** "What we do" — the client journey as a connected, numbered four-stage rail. */
export function Pipeline() {
  return (
    <Section className="bg-paper-raised">
      <div>
        <Reveal>
          <Eyebrow>{pipeline.eyebrow}</Eyebrow>
        </Reveal>
        <Reveal delay={60}>
          <h2 className="h2 mt-5">{pipeline.title}</h2>
        </Reveal>
        <Reveal delay={120}>
          <p className="lead mt-6">{pipeline.lead}</p>
        </Reveal>
      </div>

      <div className="relative mt-14">
        {/* Desktop journey rail running behind the stage nodes (left → right fade = progression). */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-[12.5%] top-[7px] hidden h-px bg-gradient-to-r from-accent/45 via-accent/30 to-accent/10 lg:block"
        />

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {pipeline.stages.map((s, i) => (
            <Reveal key={s.kicker} delay={i * 90} className="relative flex flex-col">
              {/* Node sitting on the rail (desktop only). */}
              <div aria-hidden="true" className="mb-5 hidden justify-center lg:flex">
                <span className="h-3.5 w-3.5 rounded-full bg-accent ring-4 ring-paper-raised" />
              </div>

              <div className="card group flex h-full flex-col rounded-media border border-hairline bg-paper p-6 md:p-7">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium tabular-nums text-faint transition-colors group-hover:text-accent">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <span className="text-[11px] font-semibold uppercase tracking-[0.16em] text-faint">
                    Этап
                  </span>
                </div>

                <h3 className="mt-4 text-lg font-medium tracking-tight text-ink">{s.kicker}</h3>

                <div className="mt-4 h-px w-full bg-hairline" />

                <ul className="mt-4 space-y-3">
                  {s.items.map((it) => (
                    <li key={it} className="flex items-start gap-2.5 text-[15px] leading-snug text-ink/70">
                      <span className="mt-[7px] h-1 w-1 shrink-0 rounded-full bg-accent" />
                      <span>{it}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  )
}
