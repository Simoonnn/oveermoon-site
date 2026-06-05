import { finalCta } from '../../data/content'
import { Section } from '../ui/Section'
import { Eyebrow } from '../ui/Eyebrow'
import { Reveal } from '../ui/Reveal'
import { LeadForm } from './LeadForm'

/** B10 — Final CTA with the lead form. */
export function FinalCta() {
  return (
    <Section id="contact">
      <div className="grid gap-10 lg:grid-cols-2 lg:items-start lg:gap-16">
        <div>
          <Reveal>
            <Eyebrow>{finalCta.eyebrow}</Eyebrow>
          </Reveal>
          <Reveal delay={60}>
            <h2 className="h2 mt-6">{finalCta.title}</h2>
          </Reveal>
          <Reveal delay={120}>
            <p className="lead mt-7">{finalCta.lead}</p>
          </Reveal>
        </div>
        <Reveal delay={120}>
          <LeadForm />
        </Reveal>
      </div>
    </Section>
  )
}
