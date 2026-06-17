'use client'

import { useState } from 'react'
import type { FormEvent } from 'react'
import { YM_COUNTER_ID } from '../../consts/config'

type Status = 'idle' | 'submitting' | 'sent' | 'error'

const labelCls = 'text-[13px] font-semibold uppercase tracking-[0.1em] text-faint'

/** Format a raw phone string into +7 (___) ___-__-__. */
function formatPhone(raw: string): string {
  const digits = raw.replace(/\D/g, '').slice(0, 11)
  if (digits.length === 0) return ''
  const rest = digits[0] === '8' || digits[0] === '7' ? digits.slice(1) : digits
  let out = '+7'
  if (rest.length > 0) out += ' (' + rest.slice(0, 3)
  if (rest.length >= 4) out += ') ' + rest.slice(3, 6)
  if (rest.length >= 7) out += '-' + rest.slice(6, 8)
  if (rest.length >= 9) out += '-' + rest.slice(8, 10)
  return out
}

/** Lead capture form. Posts to /api/lead, which notifies Telegram. */
export function LeadForm() {
  const [status, setStatus] = useState<Status>('idle')
  const [phone, setPhone] = useState('')

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setStatus('submitting')
    const data = new FormData(e.currentTarget)
    const payload = {
      name: String(data.get('name') || '').trim(),
      phone: String(data.get('phone') || '').trim(),
      company: String(data.get('company') || '').trim(),
      task: String(data.get('task') || '').trim(),
    }
    try {
      const res = await fetch('/api/lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })
      if (!res.ok) throw new Error('failed')
      if (typeof window !== 'undefined' && typeof window.ym === 'function') {
        window.ym(YM_COUNTER_ID, 'reachGoal', 'lead_form_sent')
      }
      setStatus('sent')
    } catch {
      setStatus('error')
    }
  }

  if (status === 'sent') {
    return (
      <div className="rounded-media border border-hairline bg-paper-raised p-8 md:p-10">
        <div className="eyebrow">Заявка отправлена</div>
        <h3 className="h3 mt-4">Спасибо. Свяжемся в ближайшее время.</h3>
        <p className="mt-3 text-muted">
          Перезвоним и согласуем время аудита — без обязательств.
        </p>
      </div>
    )
  }

  return (
    <form
      onSubmit={onSubmit}
      className="flex flex-col gap-4 rounded-media border border-hairline bg-paper-raised p-7 md:p-8"
    >
      <label className="flex flex-col gap-2">
        <span className={labelCls}>
          Имя <span className="text-accent">*</span>
        </span>
        <input name="name" required placeholder="Иван Иванов" className="input" />
      </label>

      <label className="flex flex-col gap-2">
        <span className={labelCls}>
          Телефон <span className="text-accent">*</span>
        </span>
        <input
          name="phone"
          type="tel"
          inputMode="tel"
          required
          value={phone}
          onChange={(e) => setPhone(formatPhone(e.target.value))}
          placeholder="+7 (___) ___-__-__"
          className="input"
        />
      </label>

      <label className="flex flex-col gap-2">
        <span className={labelCls}>Компания</span>
        <input name="company" placeholder="ООО «Ромашка»" className="input" />
      </label>

      <label className="flex flex-col gap-2">
        <span className={labelCls}>Кратко о задаче</span>
        <textarea
          name="task"
          rows={3}
          placeholder="Теряем заявки ночью, поддержка не справляется…"
          className="input resize-none"
        />
      </label>

      {status === 'error' && (
        <p className="text-sm text-accent">
          Не удалось отправить. Попробуйте ещё раз.
        </p>
      )}

      <div className="mt-1 flex flex-wrap items-center gap-3">
        <button
          type="submit"
          disabled={status === 'submitting'}
          className="btn btn-primary disabled:cursor-not-allowed disabled:opacity-60"
        >
          {status === 'submitting' ? 'Отправляем…' : 'Получить аудит'}
        </button>
        <span className="text-sm text-faint">Нажимая, вы соглашаетесь на обработку данных.</span>
      </div>
    </form>
  )
}
