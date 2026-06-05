import type { Metadata, Viewport } from 'next'
import type { ReactNode } from 'react'
import '@fontsource-variable/inter-tight/index.css'
import './globals.css'

export const metadata: Metadata = {
  title: 'OVEERMOON — ИИ-автоматизация продаж, поддержки и документов',
  description:
    'Подключаем ИИ к продажам, поддержке и документообороту. Клиенты получают ответ за секунды, больше заявок доходит до оплаты, рутину делает ИИ.',
  openGraph: {
    title: 'OVEERMOON — ИИ-автоматизация продаж и поддержки',
    description:
      'ИИ-системы, которые отвечают клиентам за секунды, доводят больше лидов до сделки и снимают рутину с менеджеров.',
    locale: 'ru_RU',
    type: 'website',
  },
}

export const viewport: Viewport = {
  themeColor: '#F4F2EE',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="ru">
      <body>{children}</body>
    </html>
  )
}
