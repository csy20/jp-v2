'use client'

import { motion } from 'framer-motion'
import { User, Store } from 'lucide-react'
import SectionHeader from './SectionHeader'
import { ABOUT } from '@/lib/constants'

const cards = [
  {
    icon: User,
    title: 'About Me',
    body: ABOUT.me,
  },
  {
    icon: Store,
    title: 'About SITASONI™ trend',
    body: ABOUT.store,
  },
]

export default function AboutSection() {
  return (
    <section id="about" className="px-4 md:px-6 py-8 md:py-12">
      <div className="max-w-7xl mx-auto theme-card border-gold-glow rounded-2xl p-5 sm:p-8 md:p-10">
        <SectionHeader number="01" title="About Me & Store" />

        <div className="grid md:grid-cols-2 gap-4 md:gap-6">
          {cards.map((card, i) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="theme-card-soft rounded-xl p-5 md:p-6 border-gold-glow"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-full border border-gold-500/40 flex items-center justify-center gold-text">
                  <card.icon className="w-5 h-5" />
                </div>
                <h3 className="font-semibold text-base md:text-lg gold-text">{card.title}</h3>
              </div>
              <p className="theme-muted text-sm md:text-base leading-relaxed">{card.body}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
