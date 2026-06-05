import { hero } from '../../data/content'
import { Eyebrow } from '../ui/Eyebrow'
import { Reveal } from '../ui/Reveal'
import { LinkArrow } from '../ui/LinkArrow'

/** B2 — Hero. Type-led, with a soft violet corner glow. */
export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pb-[80px] pt-[136px] md:pb-[120px] md:pt-[184px]">
      <div className="glow-hero" aria-hidden="true" />
      <div className="wrap relative">
        <Reveal>
          <Eyebrow>{hero.eyebrow}</Eyebrow>
        </Reveal>
        <Reveal delay={70}>
          <h1 className="display mt-6 max-w-[15ch]">
            {hero.titleLines.map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
          </h1>
        </Reveal>
        <Reveal delay={150}>
          <p className="lead mt-7 max-w-[46ch]">{hero.lead}</p>
        </Reveal>
        <Reveal delay={230}>
          <div className="mt-10 flex flex-wrap items-center gap-x-7 gap-y-4">
            <a href="#contact" className="btn btn-primary">
              {hero.primary}
            </a>
            <LinkArrow href="#products">{hero.secondary}</LinkArrow>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
