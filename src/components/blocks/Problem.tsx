import { problemSection } from '../../data/content'
import { Section } from '../ui/Section'
import { Eyebrow } from '../ui/Eyebrow'
import { Reveal } from '../ui/Reveal'

/** Problem grid — six places the business loses money. */
export function Problem() {
  return (
    <Section id="problem">
      <div>
        <Reveal>
          <Eyebrow>{problemSection.eyebrow}</Eyebrow>
        </Reveal>
        <Reveal delay={60}>
          <h2 className="h2 mt-5">{problemSection.title}</h2>
        </Reveal>
      </div>

      <Reveal delay={80} className="mt-14">
        <div className="grid gap-px overflow-hidden rounded-media border border-hairline bg-hairline md:grid-cols-2 lg:grid-cols-3">
          {problemSection.items.map((it, i) => (
            <div key={it.title} className="flex h-full flex-col bg-paper p-7 md:p-8">
              <div className="text-sm font-medium tabular-nums text-faint">{String(i + 1).padStart(2, '0')}</div>
              <h3 className="h4 mt-4">{it.title}</h3>
              <p className="mt-3 leading-relaxed text-muted">{it.body}</p>
              {it.stat && <div className="mt-5 font-medium text-accent">{it.stat}</div>}
            </div>
          ))}
        </div>
      </Reveal>
    </Section>
  )
}
