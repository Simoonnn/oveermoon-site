import { finalCta, contact } from '../../data/content'
import { Section } from '../ui/Section'
import { Eyebrow } from '../ui/Eyebrow'
import { Reveal } from '../ui/Reveal'

/** B10 — Final CTA. */
export function FinalCta() {
  return (
    <Section id="contact">
      <Reveal>
        <Eyebrow>{finalCta.eyebrow}</Eyebrow>
      </Reveal>
      <Reveal delay={60}>
        <h2 className="h2 mt-6">{finalCta.title}</h2>
      </Reveal>
      <Reveal delay={120}>
        <p className="lead mt-7">{finalCta.lead}</p>
      </Reveal>
      <Reveal delay={180}>
        <div className="mt-10 flex flex-wrap gap-4">
          <a href={contact.emailHref} className="btn btn-primary">
            {finalCta.primary}
          </a>
          <a href={contact.telegram} target="_blank" rel="noreferrer" className="btn btn-ghost">
            {finalCta.secondary}
          </a>
        </div>
      </Reveal>
    </Section>
  )
}
