'use client'

import { useMemo } from 'react'
import { motion } from 'framer-motion'
import { CalendarDays } from 'lucide-react'
import SectionHeader from './SectionHeader'
import { STORE_HOURS, STORE_NAME } from '@/lib/constants'

const DAY_NAMES = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
const MONTH_SHORT = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

function pad(n: number) {
  return n.toString().padStart(2, '0')
}

function isOpenNow(now: Date) {
  const h = now.getHours() + now.getMinutes() / 60
  return h >= STORE_HOURS.open && h < STORE_HOURS.close
}

export default function HoursSection() {
  const { openNow, days } = useMemo(() => {
    const now = new Date()
    const open = isOpenNow(now)
    const list = Array.from({ length: 5 }, (_, i) => {
      const d = new Date(now)
      d.setDate(now.getDate() + i)
      // All days open 9–8 per business hours
      const dayOpen = true
      return {
        key: d.toISOString(),
        isToday: i === 0,
        label: DAY_NAMES[d.getDay()],
        date: `${pad(d.getDate())} ${MONTH_SHORT[d.getMonth()]}`,
        open: dayOpen,
        hoursLabel: STORE_HOURS.label,
      }
    })
    return { openNow: open, days: list }
  }, [])

  return (
    <section id="hours" className="px-4 md:px-6 py-8 md:py-12">
      <div className="max-w-7xl mx-auto theme-card border-gold-glow rounded-2xl p-5 sm:p-8 md:p-10">
        <SectionHeader number="03" title="Store Hours" />

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 md:gap-4">
          {/* Status card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="col-span-2 sm:col-span-3 lg:col-span-1 theme-card-soft rounded-xl p-4 md:p-5 border-gold-glow flex flex-col justify-center"
          >
            <div className="flex items-center gap-2 mb-2">
              <span
                className={`w-2.5 h-2.5 rounded-full ${
                  openNow ? 'bg-emerald-500 animate-pulse' : 'bg-red-500'
                }`}
              />
              <span
                className={`font-bold tracking-wide text-sm ${
                  openNow ? 'text-emerald-500' : 'text-red-500'
                }`}
              >
                {openNow ? 'OPEN' : 'CLOSED'}
              </span>
            </div>
            <p className="theme-heading font-semibold text-sm mb-1">
              {openNow ? 'We are Open Today' : 'We are Closed Now'}
            </p>
            <p className="theme-muted text-xs">Welcome to {STORE_NAME}</p>
          </motion.div>

          {days.map((day, i) => (
            <motion.div
              key={day.key}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.05 * (i + 1) }}
              className={`theme-card-soft rounded-xl p-4 border-gold-glow text-center ${
                day.isToday ? 'ring-1 ring-gold-500/50' : ''
              }`}
            >
              <div className="flex items-center justify-center gap-1.5 theme-muted text-xs mb-1">
                <CalendarDays className="w-3.5 h-3.5" />
                <span className={day.isToday ? 'gold-text font-semibold' : ''}>
                  {day.isToday ? 'Today' : day.label}
                </span>
              </div>
              <p className="theme-heading text-sm font-medium mb-2">{day.date}</p>
              <span
                className={`inline-block text-[10px] font-bold tracking-wider px-2.5 py-0.5 rounded-full mb-2 ${
                  day.open
                    ? 'bg-emerald-500/15 text-emerald-500'
                    : 'bg-red-500/15 text-red-500'
                }`}
              >
                {day.open ? 'OPEN' : 'CLOSED'}
              </span>
              <p className="theme-muted text-[11px] leading-snug">
                {day.open ? day.hoursLabel : '—'}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
