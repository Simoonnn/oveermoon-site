import type { ReactNode } from 'react'

interface SectionProps {
  id?: string
  children: ReactNode
  className?: string
  inner?: string
}

/** Major page section: consistent vertical rhythm + centered container. */
export function Section({ id, children, className = '', inner = '' }: SectionProps) {
  return (
    <section id={id} className={`py-[72px] md:py-[104px] lg:py-[140px] ${className}`}>
      <div className={`wrap ${inner}`}>{children}</div>
    </section>
  )
}
