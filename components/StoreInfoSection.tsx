'use client'

import { motion } from 'framer-motion'
import { MapPin, Clock, Phone, ExternalLink, Play } from 'lucide-react'
import SectionHeader from './SectionHeader'
import WhatsAppIcon from './WhatsAppIcon'
import {
  ADDRESS,
  PHONE_DISPLAY,
  PHONE_TEL,
  STORE_HOURS,
  WHATSAPP_URL,
  socialLinks,
} from '@/lib/constants'

const youtube = socialLinks.find((s) => s.name === 'YouTube')?.url ?? '#'

export default function StoreInfoSection() {
  return (
    <section id="store" className="px-4 md:px-6 py-8 md:py-12">
      <div className="max-w-7xl mx-auto theme-card border-gold-glow rounded-2xl p-5 sm:p-8 md:p-10">
        <SectionHeader number="04" title="Store Information" />

        <div className="grid sm:grid-cols-2 xl:grid-cols-4 gap-4 md:gap-5">
          {/* Location */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="theme-card-soft rounded-xl p-4 md:p-5 border-gold-glow flex flex-col"
          >
            <div className="flex items-center gap-2 mb-3">
              <MapPin className="w-4 h-4 gold-text" />
              <h3 className="font-semibold text-sm gold-text">Our Location</h3>
            </div>
            <p className="theme-heading text-sm font-medium">{ADDRESS.line1}</p>
            <p className="theme-muted text-xs mb-3">
              {ADDRESS.line2}
              <br />
              {ADDRESS.line3}
            </p>
            <div className="relative h-36 sm:h-40 rounded-lg overflow-hidden mb-3 bg-slate-200 dark:bg-black/40">
              <iframe
                title="SITASONI trend store location on Google Maps"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
                src={ADDRESS.embedUrl}
                className="dark:opacity-90"
              />
            </div>
            <a
              href={ADDRESS.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-auto inline-flex items-center justify-center gap-1.5 rounded-lg bg-luxury-black dark:bg-white text-white dark:text-luxury-black text-xs font-semibold px-3 py-2.5 hover:opacity-90 transition-opacity"
            >
              View on Google Maps
              <ExternalLink className="w-3 h-3" />
            </a>
          </motion.div>

          {/* Timing */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.05 }}
            className="theme-card-soft rounded-xl p-4 md:p-5 border-gold-glow"
          >
            <div className="flex items-center gap-2 mb-3">
              <Clock className="w-4 h-4 gold-text" />
              <h3 className="font-semibold text-sm gold-text">Store Timing</h3>
            </div>
            <p className="theme-heading text-2xl font-bold mb-1">{STORE_HOURS.label}</p>
            <p className="theme-muted text-xs">Open all 7 days</p>
            <ul className="mt-4 space-y-1.5 text-xs theme-muted">
              {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map((d) => (
                <li key={d} className="flex justify-between border-b border-slate-200/60 dark:border-luxury-border/60 pb-1">
                  <span>{d}</span>
                  <span className="theme-heading font-medium">{STORE_HOURS.shortLabel}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Call & WhatsApp */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="theme-card-soft rounded-xl p-4 md:p-5 border-gold-glow flex flex-col"
          >
            <div className="flex items-center gap-2 mb-3">
              <Phone className="w-4 h-4 gold-text" />
              <h3 className="font-semibold text-sm gold-text">Call & WhatsApp Support</h3>
            </div>
            <p className="theme-heading text-lg font-bold mb-1">{STORE_HOURS.supportLabel}</p>
            <p className="theme-muted text-xs mb-6">Available during store hours</p>
            <div className="mt-auto space-y-2">
              <a href={PHONE_TEL} className="btn-outline-gold w-full text-sm py-2.5 rounded-lg">
                <Phone className="w-4 h-4" />
                Call {PHONE_DISPLAY}
              </a>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp w-full text-sm"
              >
                <WhatsAppIcon className="w-4 h-4" />
                {PHONE_DISPLAY}
              </a>
            </div>
          </motion.div>

          {/* Store reel */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className="theme-card-soft rounded-xl p-4 md:p-5 border-gold-glow flex flex-col"
          >
            <div className="flex items-center gap-2 mb-3">
              <Play className="w-4 h-4 gold-text" />
              <h3 className="font-semibold text-sm gold-text">Store Reel</h3>
            </div>
            <a
              href={youtube}
              target="_blank"
              rel="noopener noreferrer"
              className="relative flex-1 min-h-[140px] rounded-lg overflow-hidden group bg-gradient-to-br from-slate-800 to-slate-900"
            >
              <div
                className="absolute inset-0 opacity-60 bg-cover bg-center"
                style={{
                  backgroundImage:
                    'linear-gradient(135deg, #1a1510 0%, #0d0d0d 50%, #2a2010 100%)',
                }}
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="w-14 h-14 rounded-full bg-white/15 backdrop-blur border border-white/30 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Play className="w-6 h-6 text-white fill-white ml-0.5" />
                </span>
              </div>
            </a>
            <p className="theme-muted text-xs mt-3">
              Watch our store reel for more information
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
