import { brand, footerTagline, footerLegal, footerColumns } from '../../data/content'
import logoFull from '../../assets/logo-full.svg'

/** B11 — Footer. Dark, with brand, nav groups, contacts and small print. */
export function Footer() {
  return (
    <footer className="bg-ink text-white">
      <div className="wrap py-16 md:py-20">
        <div className="grid gap-12 md:grid-cols-[1.5fr_1fr_1fr_1fr]">
          <div>
            <img
              src={logoFull}
              alt={brand}
              className="h-[22px] w-auto"
              style={{ filter: 'brightness(0) invert(1)' }}
            />
            <p className="mt-5 max-w-[34ch] leading-relaxed text-white/55">{footerTagline}</p>
          </div>

          {footerColumns.map((col) => (
            <div key={col.title}>
              <div className="eyebrow eyebrow-soft">{col.title}</div>
              <ul className="mt-5 space-y-3">
                {col.links.map((l) => (
                  <li key={l.label}>
                    <a
                      href={l.href}
                      className="text-white/70 transition-colors hover:text-white"
                      {...(l.external ? { target: '_blank', rel: 'noreferrer' } : {})}
                    >
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div
          className="mt-16 flex flex-col gap-4 border-t pt-8 text-sm text-white/45 md:flex-row md:items-center md:justify-between"
          style={{ borderColor: 'var(--hairline-dark)' }}
        >
          <span>{footerLegal}</span>
          <a href="#top" className="transition-colors hover:text-white">
            Наверх ↑
          </a>
        </div>
      </div>
    </footer>
  )
}
