import { processSection } from '../../data/content'
import { Section } from '../ui/Section'
import { Eyebrow } from '../ui/Eyebrow'
import { Reveal } from '../ui/Reveal'

/** B7 — Process. Five numbered steps from audit to ongoing support. */
export function Process() {
  return (
    <Section id="process" className="bg-paper-raised">
      <div>
        <Reveal>
          <Eyebrow>{processSection.eyebrow}</Eyebrow>
        </Reveal>
        <Reveal delay={60}>
          <h2 className="h2 mt-5">{processSection.title}</h2>
        </Reveal>
      </div>

      <div className="mt-14 grid gap-x-6 gap-y-10 border-t border-hairline pt-10 md:grid-cols-5">
        {processSection.steps.map((s, i) => (
          <Reveal key={s.n} delay={i * 70}>
            <div className="flex h-full flex-col">
              <div className="text-[2.5rem] font-medium leading-none tabular-nums text-ink/15">{s.n}</div>
              <h3 className="h4 mt-4">{s.title}</h3>
              <p className="mt-2 leading-relaxed text-muted">{s.body}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}
