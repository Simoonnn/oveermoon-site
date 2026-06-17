import type { Metadata, Viewport } from 'next'
import type { ReactNode } from 'react'
import '@fontsource-variable/inter-tight/index.css'
import './globals.css'
import { SITE_URL, SITE_NAME } from '../src/consts/config'
import { SiteJsonLd } from './structured-data'
import { YandexMetrika } from './yandex-metrika'

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: 'OVEERMOON — ИИ-автоматизация продаж, поддержки и документов',
  description:
    'Подключаем ИИ к продажам, поддержке и документообороту. Клиенты получают ответ за секунды, больше заявок доходит до оплаты, рутину делает ИИ.',
  alternates: { canonical: '/', languages: { ru: '/' } },
  openGraph: {
    title: 'OVEERMOON — ИИ-автоматизация продаж и поддержки',
    description:
      'ИИ-системы, которые отвечают клиентам за секунды, доводят больше лидов до сделки и снимают рутину с менеджеров.',
    url: '/',
    siteName: SITE_NAME,
    locale: 'ru_RU',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'OVEERMOON — ИИ-автоматизация продаж и поддержки',
    description:
      'ИИ-системы, которые отвечают клиентам за секунды, доводят больше лидов до сделки и снимают рутину с менеджеров.',
  },
}

export const viewport: Viewport = {
  themeColor: '#F4F2EE',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="ru">
      <body>
        <SiteJsonLd />
        {children}
        <YandexMetrika />
      </body>
    </html>
  )
}
