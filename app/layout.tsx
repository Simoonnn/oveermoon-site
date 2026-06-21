import type { Metadata, Viewport } from 'next'
import type { ReactNode } from 'react'
import localFont from 'next/font/local'
import './globals.css'
import { SITE_URL, SITE_NAME } from '../src/consts/config'

// Body — PT Root UI Variable (Paratype, OFL-1.1), self-hosted
const sans = localFont({
  src: './fonts/pt-root-ui/pt-root-ui_vf.ttf',
  weight: '300 700',
  style: 'normal',
  variable: '--font-pt',
  display: 'swap',
})

// Headings — Martian Grotesk (Evil Martians, OFL-1.1), self-hosted
const display = localFont({
  src: [
    { path: './fonts/martian-grotesk/MartianGrotesk-StdRg.woff2', weight: '400', style: 'normal' },
    { path: './fonts/martian-grotesk/MartianGrotesk-StdMd.woff2', weight: '500', style: 'normal' },
    { path: './fonts/martian-grotesk/MartianGrotesk-StdBd.woff2', weight: '700', style: 'normal' },
  ],
  variable: '--font-martian',
  display: 'swap',
})
import { SiteJsonLd } from './structured-data'
import { YandexMetrika } from './yandex-metrika'

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: 'Внедрение ИИ в бизнес под ключ — ИИ-агенты для продаж и поддержки | OVEERMOON',
  description:
    'Внедряем ИИ в продажи, поддержку и документооборот. ИИ-агенты отвечают клиентам за секунды, доводят больше заявок до оплаты, снимают рутину. Аудит бесплатно.',
  alternates: { canonical: '/', languages: { ru: '/' } },
  openGraph: {
    title: 'Внедрение ИИ в бизнес — ИИ-агенты для продаж и поддержки',
    description:
      'Внедряем ИИ в продажи, поддержку и документооборот. ИИ-агенты отвечают за секунды, доводят больше заявок до оплаты и снимают рутину с команды.',
    url: '/',
    siteName: SITE_NAME,
    locale: 'ru_RU',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Внедрение ИИ в бизнес — ИИ-агенты для продаж и поддержки',
    description:
      'Внедряем ИИ в продажи, поддержку и документооборот. ИИ-агенты отвечают за секунды, доводят больше заявок до оплаты и снимают рутину с команды.',
  },
}

export const viewport: Viewport = {
  themeColor: '#F4F2EE',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="ru" className={`${sans.variable} ${display.variable}`}>
      <body>
        <SiteJsonLd />
        {children}
        <YandexMetrika />
      </body>
    </html>
  )
}
