/**
 * Site content for OVERMOON, adapted from OVERMOON.md.
 * All user-facing copy lives here so structure (components) stays separate
 * from words (copywriting). Edit text here, not inside components.
 */

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
  title: string
  items: string[]
}

export interface Product {
  category: string
  title: string
  body: string
  href: string
  wash: string
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
    'Бизнес отвечает клиентам за секунды, доводит больше заявок до оплаты и снимает рутину с менеджеров.',
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
  'Мессенджеры',
  'Сайт',
]

/* B4 — Quote band */
export const quote = {
  text:
    'Строим ИИ-системы, которые отвечают клиентам за секунды, доводят больше лидов до сделки и снимают рутину с менеджеров.',
  by: 'Подход OVERMOON',
}

/* Problem grid */
export const problemSection = {
  eyebrow: 'Проблема',
  title: 'Бизнес теряет деньги в шести местах',
  items: [
    {
      title: 'Заявки уходят к конкурентам',
      body: 'Клиент пишет ночью или в выходной — менеджер отвечает утром. Реклама оплачена, лид пришёл, продажа не состоялась.',
      stat: 'до 40% лидов',
    },
    {
      title: 'Менеджеры заняты рутиной',
      body: 'Обзвон базы, копирование данных между системами, одинаковые письма и одни и те же вопросы.',
      stat: 'до 65% времени',
    },
    {
      title: 'Поддержка растёт с расходами',
      body: 'Больше клиентов — больше операторов. Клиенты ждут в очереди, ответы у каждого свои.',
    },
    {
      title: 'Знания лежат мёртвым грузом',
      body: 'Регламенты и инструкции — в файлах и головах. Эксперт уволился — забрал опыт с собой.',
    },
    {
      title: 'Документы обрабатывают вручную',
      body: 'Счета, договоры, заявки заполняют люди — медленно и с ошибками.',
    },
    {
      title: 'Сайт не приносит заявок',
      body: 'Медленный, без формы захвата, без аналитики. Трафик уходит впустую.',
    },
  ] as ProblemItem[],
}

/* Pipeline — "what we do" */
export const pipeline = {
  eyebrow: 'Что мы делаем',
  title: 'Автоматизируем путь клиента целиком',
  lead:
    'Клиент заходит с одной задачей — например, «теряем заявки» — и закрывает с нами всю воронку.',
  stages: [
    { kicker: 'Привлечение', title: 'Сайт', items: ['Быстрый сайт с формой захвата'] },
    {
      kicker: 'Продажа',
      title: 'Конвейер сделки',
      items: ['Автообзвон', 'Email под клиента', 'Ведение по воронке'],
    },
    {
      kicker: 'Поддержка',
      title: 'Ответ за секунды',
      items: ['ИИ отвечает 24/7', 'RAG по базе знаний'],
    },
    { kicker: 'Документы', title: 'Без рутины', items: ['Обработка документов'] },
  ] as Stage[],
}

/* B5 — Products */
export const productsSection = {
  eyebrow: 'Продукты',
  title: 'Пять продуктов. Одна воронка.',
  all: 'Обсудить ваш сценарий',
  items: [
    {
      category: 'Продажи · Лидогенерация',
      title: 'Продажи и лидогенерация',
      body: 'Конвейер из трёх инструментов: голосовой автообзвон квалифицирует базу и возвращает корзины, персональный email пишется под конкретного человека, а ведение по воронке не даёт лиду потеряться.',
      href: '#contact',
      wash: 'wash-1',
      wide: true,
      tools: ['Автообзвон', 'Email под клиента', 'Ведение по воронке'],
    },
    {
      category: 'Поддержка · 24/7',
      title: 'Поддержка клиентов',
      body: 'ИИ-ассистент в чате на сайте, в мессенджерах и Telegram. Простое закрывает сам, сложное передаёт оператору с готовым контекстом.',
      href: '#contact',
      wash: 'wash-4',
    },
    {
      category: 'База знаний',
      title: 'RAG-ассистент',
      body: 'Отвечает по вашим документам и показывает источник — не выдумывает. Два режима: для клиентов и для сотрудников.',
      href: '#contact',
      wash: 'wash-3',
    },
    {
      category: 'Документооборот',
      title: 'Обработка документов',
      body: 'Распознаёт счета, договоры и накладные, достаёт данные и переносит в нужные программы — без участия человека.',
      href: '#contact',
      wash: 'wash-2',
    },
    {
      category: 'Веб',
      title: 'Сайты',
      body: 'Быстрые сайты, которые захватывают заявки. Фундамент автоматизации: ИИ-поддержка, формы, аналитика.',
      href: '#contact',
      wash: 'wash-5',
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
    { n: '03', title: 'Внедрение', body: 'Строим решение и встраиваем в ваши процессы.' },
    { n: '04', title: 'Запуск', body: 'Выводим в работу, замеряем результат, улучшаем.' },
    {
      n: '05',
      title: 'Сопровождение',
      body: 'Поддерживаем и расширяем на следующие участки воронки.',
    },
  ] as Step[],
}

/* B6 — Why us (dark) + stats */
export const whySection = {
  eyebrow: 'Почему мы',
  title: 'Отвечаем за результат, а не за процесс.',
  lead:
    'OVERMOON автоматизирует путь клиента целиком — от заявки до повторной продажи. Не коробочный бот, а система под ваш бизнес.',
  points: [
    {
      title: 'Кастом, а не конструктор',
      body: 'Строим под процессы клиента, а не подгоняем бизнес под шаблон.',
    },
    {
      title: 'Встраиваем в рабочие системы',
      body: 'CRM, телефония, мессенджеры, 1С — всё работает вместе, а не отдельной коробкой.',
    },
    {
      title: 'Отвечаем за метрики',
      body: 'Фиксируем до старта: скорость ответа, долю автоматизации, конверсию, сэкономленные часы.',
    },
    {
      title: 'Вся воронка в одном месте',
      body: 'От сайта до документов закрываем сами — не нужно пять подрядчиков.',
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
  lead:
    'Малый и средний бизнес с потоком заявок. Если продажи или поддержка не справляются — или стоят слишком дорого — вам сюда.',
  segments: [
    {
      label: 'E-commerce и маркетплейсы',
      body: 'Поток заказов, брошенные корзины, подтверждения и отзывы. ИИ закрывает рутину и возвращает клиентов в воронку.',
    },
    {
      label: 'Онлайн-образование',
      body: 'Квалификация лидов, ответы на типовые вопросы и доведение до оплаты курса — без расширения отдела продаж.',
    },
    {
      label: 'Недвижимость и услуги',
      body: 'Быстрый первый ответ, запись и квалификация заявок — пока менеджер занят другим клиентом.',
    },
    {
      label: 'Финансы',
      body: 'Обработка документов и заявок, поддержка по регламентам с указанием источника — точно и без ошибок.',
    },
    {
      label: 'Не уверены, что подходит?',
      body: 'Если есть входящий поток лидов, а отдел продаж или поддержки не справляется, много рутины и документов или база знаний, которой никто не пользуется — мы поможем. Начнём с аудита.',
    },
  ] as Segment[],
}

/* B10 — Final CTA */
export const finalCta = {
  eyebrow: 'Начнём',
  title: 'Покажем, где вы теряете деньги.',
  lead:
    'Аудит: находим, где утекают деньги и время, и считаем эффект ещё до старта.',
  primary: 'Получить аудит',
  secondary: 'Написать в Telegram',
  bannerLine:
    'Подключаем ИИ к продажам и поддержке. Клиенты получают ответ за секунды, больше заявок доходит до оплаты.',
}

/* B11 — Footer */
export const footerTagline = 'ИИ-автоматизация продаж, поддержки и документооборота.'
export const footerLegal = '© 2026 OVERMOON. Автоматизируем путь клиента — от заявки до повторной продажи.'
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
