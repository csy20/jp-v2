'use client'

import { motion } from 'framer-motion'
import { Flag, Target, Eye } from 'lucide-react'
import SectionHeader from './SectionHeader'
import { JOURNEY } from '@/lib/constants'

const items = [
  { icon: Flag, title: 'Our Journey', body: JOURNEY.journey },
  { icon: Target, title: 'Our Mission', body: JOURNEY.mission },
  { icon: Eye, title: 'Our Vision', body: JOURNEY.vision },
]

export default function JourneySection() {
  return (
    <section id="journey" className="px-4 md:px-6 py-8 md:py-12">
      <div className="max-w-7xl mx-auto theme-card border-gold-glow rounded-2xl p-5 sm:p-8 md:p-10">
        <SectionHeader number="02" title="Our Journey & Our Purpose" />

        <div className="grid sm:grid-cols-3 gap-4 md:gap-6">
          {items.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="text-center sm:text-left p-4 md:p-5 rounded-xl theme-card-soft border-gold-glow"
            >
              <div className="inline-flex w-11 h-11 rounded-full border border-gold-500/40 items-center justify-center gold-text mb-3">
                <item.icon className="w-5 h-5" />
              </div>
              <h3 className="font-semibold text-base gold-text mb-2">{item.title}</h3>
              <p className="theme-muted text-sm leading-relaxed">{item.body}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
