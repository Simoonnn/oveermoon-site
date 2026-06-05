import { NextResponse } from 'next/server'

/**
 * Lead form handler. Sends the submission to Telegram, tagged with an
 * "OVEERMOON" header so leads from this site are unmistakable in the chat.
 * Bot token + chat id come from env (never committed).
 */

const BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN
const CHAT_ID = process.env.TELEGRAM_CHAT_ID

/** Escape user input for Telegram HTML parse mode. */
function esc(s: string): string {
  return s.replace(/[<>&]/g, (c) => (c === '<' ? '&lt;' : c === '>' ? '&gt;' : '&amp;'))
}

export async function POST(req: Request) {
  let body: Record<string, unknown> = {}
  try {
    body = await req.json()
  } catch {
    return NextResponse.json({ error: 'invalid_json' }, { status: 400 })
  }

  const name = String(body.name ?? '').trim().slice(0, 200)
  const phone = String(body.phone ?? '').trim().slice(0, 50)
  const company = String(body.company ?? '').trim().slice(0, 200)
  const task = String(body.task ?? '').trim().slice(0, 1000)

  if (!name || !phone) {
    return NextResponse.json({ error: 'missing_fields' }, { status: 400 })
  }

  if (!BOT_TOKEN || !CHAT_ID) {
    console.error('[lead] TELEGRAM_BOT_TOKEN / TELEGRAM_CHAT_ID not configured')
    return NextResponse.json({ error: 'not_configured' }, { status: 500 })
  }

  const now = new Date().toLocaleString('ru-RU', {
    timeZone: 'Europe/Moscow',
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  })

  const lines = [
    '🌙 <b>OVEERMOON</b> · Новая заявка',
    '',
    `Имя: ${esc(name)}`,
    `Телефон: ${esc(phone)}`,
  ]
  if (company) lines.push(`Компания: ${esc(company)}`)
  if (task) lines.push(`Задача: ${esc(task)}`)
  lines.push('', `🕐 ${now} (МСК)`)
  const text = lines.join('\n')

  try {
    const res = await fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ chat_id: CHAT_ID, text, parse_mode: 'HTML' }),
    })
    if (!res.ok) {
      const detail = await res.text().catch(() => '')
      console.error('[lead] telegram failed', res.status, detail)
      return NextResponse.json({ error: 'telegram_failed' }, { status: 502 })
    }
    return NextResponse.json({ ok: true })
  } catch (err) {
    console.error('[lead] network error', err)
    return NextResponse.json({ error: 'network' }, { status: 502 })
  }
}
