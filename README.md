# OVERMOON — landing

Одностраничный лендинг OVERMOON. Контент — из `../OVERMOON.md`, визуальная
система — из `../design.md` («Editorial Grotesk», акцент `#6408F7`).

## Стек
- **Vite + React 19 + TypeScript**
- **Tailwind CSS v4** (CSS-first `@theme`, без `tailwind.config`)
- **Inter Tight Variable** через `@fontsource` (design.md-санкционированная замена
  Host Grotesk — тот же характер узкого гротеска, но с поддержкой кириллицы)
- Визуалы — только CSS-градиенты, без внешних изображений

## Запуск
```bash
npm install
npm run dev      # дев-сервер
npm run build    # прод-сборка (tsc + vite) в dist/
npm run preview  # предпросмотр прод-сборки
```

## Структура
```
src/
├─ index.css              ← дизайн-токены (§1–§5 design.md) + базовые стили
├─ data/content.ts        ← ВЕСЬ копирайтинг (RU). Меняйте текст здесь
├─ components/ui/         ← Section, Eyebrow, LinkArrow, Reveal, icons
└─ components/blocks/     ← блоки страницы (см. ниже)
```

### Блоки → шаблон design.md
| Файл | Блок design.md | Секция |
|---|---|---|
| `Nav` | B1 | навигация |
| `Hero` | B2 | первый экран |
| `Marquee` | B3 | интеграции |
| `QuoteBand` | B4 | цитата-питч |
| `Problem` | — | «теряете деньги в 6 местах» |
| `Pipeline` | — | путь клиента (4 этапа) |
| `Products` | B5 | 5 продуктов |
| `Process` | B7 | как мы работаем (5 шагов) |
| `WhyUs` | B6 | тёмная секция «почему мы» + метрики |
| `Audience` | B8 | аккордеон «кому подходит» |
| `FinalCta` | B10 | финальный CTA + баннер |
| `Footer` | B11 | подвал |

## Что заменить перед публикацией
- **Контакты** в `src/data/content.ts` → `contact` (Telegram, email — сейчас плейсхолдеры).
- Тексты продуктов/кейсов при необходимости — там же.
- Дизайн-токены (цвета, радиусы, шрифт) — `src/index.css`, блок `@theme`.
