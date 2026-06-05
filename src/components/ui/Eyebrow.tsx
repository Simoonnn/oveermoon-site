import type { ReactNode } from 'react'

interface EyebrowProps {
  children: ReactNode
  variant?: 'faint' | 'soft'
  className?: string
}

/** Small uppercase tracked kicker shown above section titles. */
export function Eyebrow({ children, variant, className = '' }: EyebrowProps) {
  const v = variant === 'faint' ? 'eyebrow-faint' : variant === 'soft' ? 'eyebrow-soft' : ''
  return <span className={`eyebrow ${v} ${className}`}>{children}</span>
}
