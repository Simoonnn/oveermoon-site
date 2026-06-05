import type { ReactNode } from 'react'
import { ArrowRight } from './icons'

interface LinkArrowProps {
  href?: string
  children: ReactNode
  dark?: boolean
  className?: string
  external?: boolean
}

/** Characteristic underlined text link with a trailing accent arrow. */
export function LinkArrow({ href = '#', children, dark = false, className = '', external }: LinkArrowProps) {
  const ext = external ? { target: '_blank', rel: 'noreferrer' } : {}
  return (
    <a href={href} className={`link-arrow ${dark ? 'link-arrow-dark' : ''} ${className}`} {...ext}>
      {children}
      <ArrowRight />
    </a>
  )
}
