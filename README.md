# OVEERMOON — landing

Одностраничный лендинг OVEERMOON. Контент — из `../OVERMOON.md`, визуальная
система — из `../design.md` («Editorial Grotesk», акцент `#6408F7`).

## Стек
- **Next.js 14** (app router) + **React 18** + **TypeScript**
- **Tailwind CSS v4** через `@tailwindcss/postcss` (CSS-first `@theme`, без `tailwind.config`)
- **Inter Tight Variable** через `@fontsource` (design.md-санкционированная замена
  Host Grotesk — тот же узкий гротеск, но с кириллицей)
- Фото продуктов — в `public/products/` (можно заменить/перегенерить)

## Запуск
```bash
npm install
cp .env.example .env.local   # вписать токен бота и chat id
npm run dev      # дев-сервер (http://localhost:3000)
npm run build    # прод-сборка
npm run start    # запуск прод-сборки
```

## Форма заявки → Telegram
- Форма в секции `#contact` (`src/components/blocks/LeadForm.tsx`) шлёт `POST /api/lead`.
- `app/api/lead/route.ts` отправляет сообщение в Telegram **напрямую**, с заголовком
  `🌙 OVEERMOON · Новая заявка` — чтобы заявки с этого сайта были видны сразу.
- Секреты — в `.env.local` (gitignored), в коде их нет:
  ```
  TELEGRAM_BOT_TOKEN=...   # бот @BotFather
  TELEGRAM_CHAT_ID=...     # ваш chat id (@userinfobot)
  ```
  Сейчас используется тот же бот/чат, что и у TenderScan (заявки различаются по заголовку).
- На проде эти переменные нужно прокинуть в окружение контейнера.

## Структура
```
app/
├─ layout.tsx             ← <html>, метаданные, подключение шрифта
├─ page.tsx               ← композиция блоков
├─ globals.css            ← дизайн-токены (§1–§5 design.md) + база
├─ icon.svg               ← фавикон
└─ api/lead/route.ts      ← обработчик формы → Telegram
src/
├─ data/content.ts        ← ВЕСЬ копирайтинг (RU). Меняйте текст здесь
├─ components/ui/         ← Section, Eyebrow, LinkArrow, Reveal, icons
└─ components/blocks/     ← блоки страницы (см. ниже)
public/
├─ logo-full.svg          ← логотип (навбар, футер)
└─ products/*.jpg         ← фото карточек продуктов
```

### Блоки → шаблон design.md
| Файл | Блок design.md | Секция |
|---|---|---|
| `Nav` | B1 | навигация |
| `Hero` | B2 | первый экран |
| `Marquee` | B3 | интеграции |
| `QuoteBand` | B4 | цитата-питч |
| `Problem` | — | «где бизнес теряет деньги» |
| `Pipeline` | — | путь клиента (4 этапа) |
| `Products` | B5 | 5 продуктов |
| `Process` | B7 | как мы работаем (5 шагов) |
| `WhyUs` | B6 | тёмная секция «почему мы» + метрики |
| `Audience` | B8 | аккордеон «кому подходит» |
| `FinalCta` + `LeadForm` | B10 | финальный CTA + форма заявки |
| `Footer` | B11 | подвал |

## Что заменить перед публикацией
- **Бот/чат Telegram** — `.env.local` (если нужен отдельный бот/чат для OVEERMOON).
- **Контакты в футере** — `src/data/content.ts` → `contact` (пока плейсхолдеры).
- Тексты — там же, в `content.ts`.
- Дизайн-токены (цвета, радиусы, шрифт) — `app/globals.css`, блок `@theme`.
