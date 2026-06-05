import { useEffect, useState } from 'react'
import { brand, navLinks, contact } from '../../data/content'
import { Mark, Menu, Close } from '../ui/icons'

/** Sticky top navigation with scroll state and a mobile overlay menu. */
export function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b transition-[background-color,border-color] duration-300 ${
        scrolled ? 'border-hairline bg-paper/90 backdrop-blur-md' : 'border-transparent'
      }`}
    >
      <div className="wrap flex h-[68px] items-center justify-between gap-6">
        <a href="#top" className="flex items-center gap-2 text-ink" aria-label={`${brand} — на главную`}>
          <Mark className="text-accent" />
          <span className="text-[15px] font-medium tracking-[0.16em]">{brand}</span>
        </a>

        <nav className="hidden items-center gap-8 lg:flex">
          {navLinks.map((l) => (
            <a key={l.href} href={l.href} className="text-sm text-ink/75 transition-colors hover:text-accent">
              {l.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a href={contact.telegram} target="_blank" rel="noreferrer" className="btn btn-ghost">
            Telegram
          </a>
          <a href="#contact" className="btn btn-primary">
            Получить аудит
          </a>
        </div>

        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center text-ink lg:hidden"
          aria-label="Открыть меню"
          onClick={() => setOpen(true)}
        >
          <Menu />
        </button>
      </div>

      {open && (
        <div className="fixed inset-0 z-[60] flex flex-col bg-paper lg:hidden">
          <div className="wrap flex h-[68px] items-center justify-between">
            <span className="flex items-center gap-2 text-[15px] font-medium tracking-[0.16em]">
              <Mark className="text-accent" />
              {brand}
            </span>
            <button
              type="button"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-hairline"
              aria-label="Закрыть меню"
              onClick={() => setOpen(false)}
            >
              <Close />
            </button>
          </div>

          <nav className="wrap mt-6 flex flex-col">
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="border-b border-hairline py-4 text-[18px] font-medium"
              >
                {l.label}
              </a>
            ))}
          </nav>

          <div className="wrap mt-auto mb-10 flex flex-col gap-3">
            <a href={contact.telegram} target="_blank" rel="noreferrer" className="btn btn-ghost w-full">
              Telegram
            </a>
            <a href="#contact" onClick={() => setOpen(false)} className="btn btn-primary w-full">
              Получить аудит
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
