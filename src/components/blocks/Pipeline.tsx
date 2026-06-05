import { pipeline } from '../../data/content'
import { Section } from '../ui/Section'
import { Eyebrow } from '../ui/Eyebrow'
import { Reveal } from '../ui/Reveal'
import { ArrowRight } from '../ui/icons'

/** "What we do" — the client journey as a four-stage flow. */
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

      <div className="mt-14 flex flex-col md:flex-row md:items-stretch">
        {pipeline.stages.map((s, i) => (
          <div key={s.kicker} className="flex flex-col md:flex-1 md:flex-row md:items-stretch">
            <Reveal delay={i * 90} className="flex-1">
              <div className="flex h-full flex-col rounded-media border border-hairline bg-paper p-6 md:p-7">
                <div className="eyebrow">{s.kicker}</div>
                <ul className="mt-5 space-y-2.5">
                  {s.items.map((it) => (
                    <li key={it} className="flex items-start gap-2 text-muted">
                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
                      {it}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
            {i < pipeline.stages.length - 1 && (
              <div
                className="flex rotate-90 items-center justify-center py-3 text-accent md:rotate-0 md:px-3 md:py-0"
                aria-hidden="true"
              >
                <ArrowRight />
              </div>
            )}
          </div>
        ))}
      </div>
    </Section>
  )
}
