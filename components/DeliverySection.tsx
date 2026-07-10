'use client'

import { motion } from 'framer-motion'
import { ShoppingCart, Truck, Zap, Globe, ArrowRight } from 'lucide-react'
import SectionHeader from './SectionHeader'
import { DELIVERY, STORE_URL } from '@/lib/constants'

const icons = [ShoppingCart, Truck, Zap, Globe]

export default function DeliverySection() {
  return (
    <section id="delivery" className="px-4 md:px-6 py-8 md:py-12">
      <div className="max-w-7xl mx-auto theme-card border-gold-glow rounded-2xl p-5 sm:p-8 md:p-10">
        <SectionHeader number="05" title="Online Orders & Delivery" />

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {DELIVERY.map((item, i) => {
            const Icon = icons[i]
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="theme-card-soft rounded-xl p-5 border-gold-glow text-center sm:text-left"
              >
                <div className="inline-flex w-11 h-11 rounded-full border border-gold-500/40 items-center justify-center gold-text mb-3">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="font-semibold text-sm gold-text mb-1.5">{item.title}</h3>
                <p className="theme-muted text-xs md:text-sm leading-relaxed mb-3">{item.desc}</p>
                {'cta' in item && item.cta && (
                  <a
                    href={item.href ?? STORE_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-gold text-xs md:text-sm px-4 py-2"
                  >
                    {item.cta}
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                )}
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
