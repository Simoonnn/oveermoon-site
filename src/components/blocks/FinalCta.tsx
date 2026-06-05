import { finalCta, contact } from '../../data/content'
import { Section } from '../ui/Section'
import { Eyebrow } from '../ui/Eyebrow'
import { Reveal } from '../ui/Reveal'

/** B10 — Final CTA on paper, closed by a full-width washed banner. */
export function FinalCta() {
  return (
    <>
      <Section id="contact" className="bg-paper-raised">
        <Reveal>
          <Eyebrow>{finalCta.eyebrow}</Eyebrow>
        </Reveal>
        <Reveal delay={60}>
          <h2 className="h2 mt-6 max-w-[16ch]">{finalCta.title}</h2>
        </Reveal>
        <Reveal delay={120}>
          <p className="lead mt-7 max-w-[46ch]">{finalCta.lead}</p>
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

      <div className="px-5 pb-[72px] md:px-7 md:pb-[120px]">
        <Reveal className="mx-auto max-w-[1240px]">
          <div className="media wash-2 rounded-band px-7 py-14 md:px-16 md:py-24">
            <p
              className="relative z-[2] max-w-[28ch] font-medium tracking-[-0.02em] text-white"
              style={{ fontSize: 'clamp(1.5rem, 3.2vw, 2.6rem)', lineHeight: 1.14 }}
            >
              {finalCta.bannerLine}
            </p>
            <a href={contact.emailHref} className="btn btn-on-dark relative z-[2] mt-8">
              {finalCta.primary}
            </a>
          </div>
        </Reveal>
      </div>
    </>
  )
}
