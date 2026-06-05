/**
 * Site content for OVERMOON, adapted from OVERMOON.md.
 * Copy follows "Пиши, сокращай": concrete facts, no filler, cut what is empty.
 * All user-facing text lives here so structure (components) stays separate
 * from words (copywriting). Edit text here, not inside components.
 */

import salesImg from '../assets/products/sales.jpg'
import supportImg from '../assets/products/support.jpg'
import ragImg from '../assets/products/rag.jpg'
import docsImg from '../assets/products/docs.jpg'
import webImg from '../assets/products/web.jpg'

export interface Link {
  label: string
  href: string
  external?: boolean
}

export interface Stat {
  value: string
  label: string
}

export interface ProblemItem {
  title: string
  body: string
  stat?: string
}

export interface Stage {
  kicker: string
  items: string[]
}

export interface Product {
  category: string
  title: string
  body: string
  href: string
  image: string
  wide?: boolean
  tools?: string[]
}

export interface Step {
  n: string
  title: string
  body: string
}

export interface Point {
  title: string
  body: string
}

export interface Segment {
  label: string
  body: string
}

/* ---- contacts (placeholders — replace with real channels) ---- */
export const contact = {
  telegram: 'https://t.me/overmoon',
  email: 'hello@overmoon.ai',
  emailHref: 'mailto:hello@overmoon.ai?subject=Запрос аудита — OVERMOON',
}

export const brand = 'OVERMOON'

export const navLinks: Link[] = [
  { label: 'Продукты', href: '#products' },
  { label: 'Как мы работаем', href: '#process' },
  { label: 'Кому подходит', href: '#audience' },
  { label: 'Почему мы', href: '#why' },
]

/* B2 — Hero */
export const hero = {
  eyebrow: 'OVERMOON · ИИ-АВТОМАТИЗАЦИЯ',
  titleLines: ['ИИ для продаж,', 'поддержки', 'и документов.'],
  lead:
    'Клиенты получают ответ за секунды, больше заявок доходит до оплаты, рутину делает ИИ.',
  primary: 'Получить аудит',
  secondary: 'Смотреть продукты',
}

/* B3 — Integration marquee */
export const integrationsKicker = 'Встраиваемся в ваши системы'
export const integrations = [
  'CRM',
  'Телефония',
  'Telegram',
  'WhatsApp',
  '1С',
  'amoCRM',
  'Битрикс24',
  'Email',
  'Сайт',
]

/* B4 — Quote band: one concrete idea, not a repeat of the hero */
export const quote = {
  text: 'Клиент пишет в три ночи — ИИ отвечает за секунды. Не «ответим в рабочее время».',
  by: 'Так работает OVERMOON',
}

/* Problem grid */
export const problemSection = {
  eyebrow: 'Проблема',
  title: 'Где бизнес теряет деньги',
  items: [
    {
      title: 'Заявки уходят к конкурентам',
      body: 'Клиент пишет ночью — менеджер отвечает утром. Реклама оплачена, а лид ушёл к тем, кто ответил первым.',
      stat: 'до 40% лидов',
    },
    {
      title: 'Менеджеры заняты рутиной',
      body: 'Обзвон базы, копипаст между системами, одинаковые письма и одни и те же вопросы. Продажи — в остатке.',
      stat: 'до 65% времени',
    },
    {
      title: 'Поддержка растёт с расходами',
      body: 'Больше клиентов — больше операторов. Очереди растут, ответы у всех разные.',
    },
    {
      title: 'Знания живут в головах',
      body: 'Регламенты и инструкции — в файлах и у сотрудников в голове. Человек уходит — знания уходят с ним.',
    },
    {
      title: 'Документы забивают руками',
      body: 'Счета, договоры, накладные переносят люди. Медленно и с опечатками.',
    },
    {
      title: 'Сайт не приносит заявок',
      body: 'Грузится долго, формы захвата нет, аналитики нет. Деньги за рекламу уходят впустую.',
    },
  ] as ProblemItem[],
}

/* Pipeline — "what we do" */
export const pipeline = {
  eyebrow: 'Что мы делаем',
  title: 'Автоматизируем весь путь клиента',
  lead: 'Приходите с одной задачей — закрываем всю воронку: от первого касания до повторной продажи.',
  stages: [
    { kicker: 'Привлечение', items: ['Сайт с формой захвата'] },
    { kicker: 'Продажа', items: ['Автообзвон', 'Email под клиента', 'Ведение по воронке'] },
    { kicker: 'Поддержка', items: ['ИИ-ответ 24/7', 'RAG по базе знаний'] },
    { kicker: 'Документы', items: ['Обработка счетов и договоров'] },
  ] as Stage[],
}

/* B5 — Products */
export const productsSection = {
  eyebrow: 'Продукты',
  title: 'Пять продуктов. Одна воронка.',
  all: 'Обсудить задачу',
  items: [
    {
      category: 'Продажи · Лидогенерация',
      title: 'Продажи и лидогенерация',
      body: 'Автообзвон квалифицирует базу и возвращает корзины. Email пишется под конкретного человека: что смотрел, что купил. Воронка не даёт лиду потеряться.',
      href: '#contact',
      image: salesImg,
      wide: true,
      tools: ['Автообзвон', 'Email под клиента', 'Ведение по воронке'],
    },
    {
      category: 'Поддержка · 24/7',
      title: 'Поддержка клиентов',
      body: 'Отвечает в чате на сайте, в Telegram и WhatsApp. Простое закрывает сам, сложное отдаёт оператору с историей диалога.',
      href: '#contact',
      image: supportImg,
    },
    {
      category: 'База знаний',
      title: 'RAG-ассистент',
      body: 'Отвечает по вашим регламентам и договорам, показывает источник. Не выдумывает, как обычный чат-бот. Режимы для клиентов и для сотрудников.',
      href: '#contact',
      image: ragImg,
    },
    {
      category: 'Документооборот',
      title: 'Обработка документов',
      body: 'Распознаёт счета, договоры и накладные. Достаёт данные и кладёт в 1С или CRM. Без ручного ввода.',
      href: '#contact',
      image: docsImg,
    },
    {
      category: 'Веб',
      title: 'Сайты',
      body: 'Сайт грузится за секунду и собирает заявки. На нём стоят ИИ-поддержка, формы и аналитика.',
      href: '#contact',
      image: webImg,
    },
  ] as Product[],
}

/* B7 — Process */
export const processSection = {
  eyebrow: 'Как мы работаем',
  title: 'От аудита до результата',
  steps: [
    { n: '01', title: 'Аудит', body: 'Находим, где утекают деньги и время. Считаем эффект.' },
    { n: '02', title: 'Цель', body: 'Договариваемся о метрике, за которую отвечаем.' },
    { n: '03', title: 'Внедрение', body: 'Строим решение, встраиваем в CRM, телефонию и 1С.' },
    { n: '04', title: 'Запуск', body: 'Выводим в работу, замеряем результат, улучшаем.' },
    { n: '05', title: 'Сопровождение', body: 'Поддерживаем и подключаем следующие участки воронки.' },
  ] as Step[],
}

/* B6 — Why us (dark) + stats */
export const whySection = {
  eyebrow: 'Почему мы',
  title: 'Отвечаем за результат, а не за процесс.',
  lead: 'Не коробочный бот, а система под ваши процессы. От заявки до повторной продажи.',
  points: [
    {
      title: 'Кастом, а не конструктор',
      body: 'Строим под ваши процессы, а не натягиваем шаблон.',
    },
    {
      title: 'Встраиваем в рабочие системы',
      body: 'Подключаем к CRM, телефонии, 1С и мессенджерам. Работает внутри ваших систем, не сбоку.',
    },
    {
      title: 'Отвечаем за метрики',
      body: 'Фиксируем до старта: скорость ответа, долю автоматизации, конверсию, сэкономленные часы.',
    },
    {
      title: 'Вся воронка в одном месте',
      body: 'От сайта до документов — один подрядчик вместо пяти.',
    },
  ] as Point[],
  links: [
    { label: 'Как мы работаем', href: '#process' },
    { label: 'Получить аудит', href: '#contact' },
  ] as Link[],
}

export const stats: Stat[] = [
  { value: '40–80%', label: 'обращений закрывает ИИ' },
  { value: 'за секунды', label: 'первый ответ клиенту' },
  { value: '24/7', label: 'без выходных и пауз' },
  { value: 'в разы', label: 'дешевле колл-центра' },
]

/* B8 — Audience accordion */
export const audienceSection = {
  eyebrow: 'Кому подходит',
  title: 'Кому подходит',
  lead: 'Малый и средний бизнес с потоком заявок. Продажи или поддержка не справляются или дорого обходятся — вам сюда.',
  segments: [
    {
      label: 'E-commerce и маркетплейсы',
      body: 'Брошенные корзины, подтверждения заказов, отзывы. ИИ возвращает корзины и снимает обзвон с менеджеров.',
    },
    {
      label: 'Онлайн-образование',
      body: 'ИИ квалифицирует лидов, отвечает на типовые вопросы и доводит до оплаты курса. Отдел продаж не растёт.',
    },
    {
      label: 'Недвижимость и услуги',
      body: 'Отвечаем и квалифицируем заявку за секунды — пока менеджер занят другим клиентом.',
    },
    {
      label: 'Финансы',
      body: 'Обрабатываем документы и заявки. Поддержка отвечает по регламентам и показывает источник.',
    },
    {
      label: 'Не уверены, что подходит?',
      body: 'Есть входящий поток лидов, а продажи или поддержка не справляются? Много рутины и документов? База знаний, которой никто не пользуется? Начнём с аудита.',
    },
  ] as Segment[],
}

/* B10 — Final CTA */
export const finalCta = {
  eyebrow: 'Начнём',
  title: 'Покажем, где вы теряете деньги.',
  lead: 'Аудит: находим, где утекают деньги и время, и считаем эффект до старта.',
  primary: 'Получить аудит',
  secondary: 'Написать в Telegram',
}

/* B11 — Footer */
export const footerTagline = 'ИИ-автоматизация продаж, поддержки и документооборота.'
export const footerLegal = '© 2026 OVERMOON'
export const footerColumns: { title: string; links: Link[] }[] = [
  {
    title: 'Продукты',
    links: [
      { label: 'Поддержка клиентов', href: '#products' },
      { label: 'Продажи и лидген', href: '#products' },
      { label: 'RAG-ассистент', href: '#products' },
      { label: 'Обработка документов', href: '#products' },
      { label: 'Сайты', href: '#products' },
    ],
  },
  {
    title: 'Компания',
    links: [
      { label: 'Как мы работаем', href: '#process' },
      { label: 'Кому подходит', href: '#audience' },
      { label: 'Почему мы', href: '#why' },
    ],
  },
  {
    title: 'Контакты',
    links: [
      { label: 'Telegram', href: contact.telegram, external: true },
      { label: contact.email, href: contact.emailHref },
    ],
  },
]
