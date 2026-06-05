'use client'

import { useEffect, useState } from 'react'
import { Chat } from '../ui/icons'

/** Floating action button — quick jump to the contact CTA after scrolling. */
export function Fab() {
  const [show, setShow] = useState(false)

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 600)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <a
      href="#contact"
      aria-label="Обсудить задачу"
      className={`fixed bottom-5 right-5 z-40 inline-flex h-14 w-14 items-center justify-center rounded-full bg-accent text-white shadow-[0_12px_34px_rgba(100,8,247,0.35)] transition-all duration-300 hover:bg-accent-hover ${
        show ? 'translate-y-0 opacity-100' : 'pointer-events-none translate-y-4 opacity-0'
      }`}
    >
      <Chat />
    </a>
  )
}
