'use client'

import { useState } from 'react'
import { audienceSection } from '../../data/content'
import { Section } from '../ui/Section'
import { Eyebrow } from '../ui/Eyebrow'
import { Reveal } from '../ui/Reveal'
import { Plus, Minus } from '../ui/icons'

/** B8 — Audience accordion. One segment open at a time. */
export function Audience() {
  const [open, setOpen] = useState(0)

  return (
    <Section id="audience">
      <div>
        <Reveal>
          <Eyebrow>{audienceSection.eyebrow}</Eyebrow>
        </Reveal>
        <Reveal delay={60}>
          <h2 className="h2 mt-5">{audienceSection.title}</h2>
        </Reveal>
        <Reveal delay={120}>
          <p className="lead mt-6">{audienceSection.lead}</p>
        </Reveal>
      </div>

      <Reveal delay={80} className="mt-12">
        <div className="border-t border-hairline">
          {audienceSection.segments.map((s, i) => {
            const isOpen = open === i
            return (
              <div key={s.label} className="border-b border-hairline">
                <button
                  type="button"
                  className="group flex w-full items-center justify-between gap-6 py-6 text-left md:py-7"
                  aria-expanded={isOpen}
                  onClick={() => setOpen(isOpen ? -1 : i)}
                >
                  <span className={`h4 transition-colors ${isOpen ? 'text-accent' : 'group-hover:text-accent'}`}>
                    {s.label}
                  </span>
                  <span
                    className={`inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full border transition-colors ${
                      isOpen ? 'border-accent text-accent' : 'border-hairline text-ink'
                    }`}
                  >
                    {isOpen ? <Minus /> : <Plus />}
                  </span>
                </button>
                <div
                  className={`grid transition-[grid-template-rows] duration-300 ease-out ${
                    isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="max-w-[70ch] pb-7 leading-relaxed text-muted md:pr-12">{s.body}</p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </Reveal>
    </Section>
  )
}
