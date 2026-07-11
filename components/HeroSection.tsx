'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import {
  OWNER_NAME,
  QUOTE,
  socialLinks,
  STORE_NAME,
  STORE_TAGLINE,
  STORE_URL,
  STORE_DOMAIN,
  WHATSAPP_URL,
  PHONE_DISPLAY,
} from '@/lib/constants'
import WhatsAppIcon from './WhatsAppIcon'

export default function HeroSection() {
  return (
    <section
      id="home"
      className="relative pt-[4.25rem] sm:pt-24 md:pt-28 pb-8 sm:pb-10 md:pb-14 px-3 sm:px-4 md:px-6 overflow-hidden"
    >
      {/* Ambient scene light */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-24 left-1/3 w-[480px] h-[480px] rounded-full bg-gold-400/10 dark:bg-gold-500/12 blur-3xl" />
        <div className="absolute bottom-0 right-0 w-[420px] h-[420px] rounded-full bg-amber-200/20 dark:bg-gold-600/10 blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto">
        <div className="relative rounded-2xl md:rounded-3xl overflow-hidden border border-gold-500/20 dark:border-gold-500/25 shadow-xl shadow-gold-900/5 dark:shadow-gold dark:bg-[#0c0c0c] bg-white">
          {/* Soft gold edge line */}
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold-400/60 to-transparent z-20" />

          <div className="grid lg:grid-cols-12 min-h-0 lg:min-h-[560px]">
            {/* ── Left: copy ── */}
            <motion.div
              className="relative z-10 lg:col-span-6 xl:col-span-5 flex flex-col justify-center px-4 sm:px-8 md:px-12 lg:px-14 py-6 sm:py-10 md:py-14
                bg-gradient-to-br from-white via-white to-amber-50/40
                dark:from-[#0c0c0c] dark:via-[#0e0e0e] dark:to-[#14100a]"
              initial={{ opacity: 0, x: -28 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, ease: 'easeOut' }}
            >
              {/* Eyebrow */}
              <div className="flex items-center gap-3 mb-5">
                <span className="h-px w-8 bg-gradient-to-r from-gold-500 to-transparent" />
                <p className="text-[11px] md:text-xs tracking-[0.28em] uppercase text-gold-600 dark:text-gold-400 font-semibold">
                  Founder & Owner
                </p>
              </div>

              <h1 className="font-display text-[2rem] sm:text-5xl md:text-6xl font-bold leading-[1.08] tracking-tight text-slate-900 dark:text-white mb-3 sm:mb-4">
                {OWNER_NAME.split(' ').map((word, i) => (
                  <span key={word} className="inline-block mr-[0.28em] last:mr-0">
                    <motion.span
                      className="inline-block"
                      initial={{ opacity: 0, y: 18 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.15 + i * 0.12, duration: 0.5 }}
                    >
                      {word}
                    </motion.span>
                  </span>
                ))}
              </h1>

              <p className="text-sm sm:text-base md:text-lg text-slate-500 dark:text-slate-400 mb-5 sm:mb-7 max-w-md">
                Founder & Owner of{' '}
                <span className="font-semibold text-gold-600 dark:text-gold-400">
                  {STORE_NAME}
                </span>
              </p>

              {/* Socials */}
              <div className="flex items-center gap-2.5 mb-5 sm:mb-8">
                {socialLinks.map((s, i) => (
                  <motion.a
                    key={s.name}
                    href={s.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    title={s.name}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.4 + i * 0.08 }}
                    className="w-10 h-10 rounded-full flex items-center justify-center
                      border border-slate-200 dark:border-white/10
                      bg-white/80 dark:bg-white/5
                      text-slate-500 dark:text-slate-400
                      hover:border-gold-500 hover:text-gold-600 dark:hover:text-gold-400
                      hover:shadow-gold-sm transition-all duration-300"
                  >
                    <s.icon className="w-4 h-4" />
                  </motion.a>
                ))}
              </div>

              {/* Quote */}
              <motion.blockquote
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.55, duration: 0.5 }}
                className="relative max-w-md rounded-2xl px-5 py-4
                  border border-gold-500/20 dark:border-gold-500/25
                  bg-gradient-to-br from-amber-50/90 to-white
                  dark:from-gold-500/10 dark:to-white/[0.03]
                  backdrop-blur-sm"
              >
                <span className="absolute -top-3 left-4 text-4xl leading-none text-gold-500/70 dark:text-gold-400/80 font-display select-none">
                  “
                </span>
                <p className="text-sm md:text-[15px] leading-relaxed text-slate-600 dark:text-slate-300 italic pl-1">
                  {QUOTE.text}
                </p>
                <footer className="mt-2.5 text-right text-sm font-medium text-gold-600 dark:text-gold-400">
                  — {QUOTE.author}
                </footer>
              </motion.blockquote>

              {/* CTA row */}
              <motion.div
                className="mt-5 sm:mt-8 flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center gap-2.5 sm:gap-3"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
              >
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-white text-sm font-semibold px-5 py-2.5 shadow-md transition-colors w-full sm:w-auto"
                >
                  <WhatsAppIcon className="w-4 h-4" />
                  Chat on WhatsApp
                </a>
                <a
                  href={STORE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex flex-col items-center justify-center rounded-full border border-slate-200 dark:border-gold-500/30 bg-white dark:bg-white/5 text-slate-800 dark:text-gold-300 text-sm font-semibold px-5 py-2 hover:bg-slate-50 dark:hover:bg-gold-500/10 transition-colors w-full sm:w-auto shadow-sm"
                >
                  <span>Visit Store</span>
                  <span className="text-[10px] font-medium text-[#0033A0] dark:text-[#5b8fd9] tracking-wide">
                    {STORE_DOMAIN}
                  </span>
                </a>
              </motion.div>
            </motion.div>

            {/* ── Right: portrait stage ── */}
            <motion.div
              className="relative lg:col-span-6 xl:col-span-7 min-h-[300px] sm:min-h-[400px] md:min-h-[440px] lg:min-h-full"
              initial={{ opacity: 0, x: 28 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.75, delay: 0.12, ease: 'easeOut' }}
            >
              {/* Stage background — light */}
              <div
                className="absolute inset-0 dark:hidden"
                style={{
                  background: `
                    radial-gradient(ellipse 80% 70% at 70% 45%, rgba(212,175,55,0.18) 0%, transparent 55%),
                    linear-gradient(145deg, #f7f3ea 0%, #ebe4d4 35%, #d9d0bc 70%, #cfc4ae 100%)
                  `,
                }}
              />
              {/* Stage background — dark (luxury boutique feel) */}
              <div
                className="absolute inset-0 hidden dark:block"
                style={{
                  background: `
                    radial-gradient(ellipse 70% 60% at 65% 40%, rgba(212,175,55,0.22) 0%, transparent 50%),
                    radial-gradient(ellipse 50% 40% at 20% 80%, rgba(212,175,55,0.08) 0%, transparent 50%),
                    linear-gradient(160deg, #1a1510 0%, #0d0c0a 45%, #12100c 100%)
                  `,
                }}
              />

              {/* Soft bokeh / light orbs */}
              <div className="absolute top-[12%] left-[15%] w-24 h-24 rounded-full bg-gold-300/25 dark:bg-gold-400/15 blur-2xl" />
              <div className="absolute bottom-[20%] left-[10%] w-32 h-32 rounded-full bg-amber-200/20 dark:bg-gold-600/10 blur-3xl" />
              <div className="absolute top-[20%] right-[18%] w-16 h-16 rounded-full bg-white/40 dark:bg-gold-300/10 blur-xl" />

              {/* Vertical gold accent rail */}
              <div className="absolute left-0 top-8 bottom-8 w-px bg-gradient-to-b from-transparent via-gold-500/40 to-transparent hidden lg:block" />

              {/* Portrait frame */}
              <div className="absolute inset-0 flex items-end justify-center lg:justify-end px-3 sm:px-8 lg:pr-10 xl:pr-16 pb-2 sm:pb-0 pt-2 sm:pt-0">
                <div className="relative w-full max-w-[260px] sm:max-w-[340px] md:max-w-[380px] lg:max-w-[400px]">
                  {/* Glow behind portrait */}
                  <div className="absolute -inset-6 sm:-inset-8 rounded-[50%] bg-gold-400/20 dark:bg-gold-500/25 blur-3xl" />

                  {/* Arch frame */}
                  <div className="relative aspect-[3/4] w-full">
                    {/* Outer gold ring — stays behind photo content */}
                    <div className="absolute -inset-[3px] rounded-t-full rounded-b-2xl bg-gradient-to-b from-gold-300 via-gold-500/80 to-gold-700/40 dark:from-gold-400 dark:via-gold-600/70 dark:to-transparent opacity-90 z-0" />

                    {/* Inner photo clip */}
                    <div className="absolute inset-0 z-[1] rounded-t-full rounded-b-2xl overflow-hidden bg-slate-200 dark:bg-[#1a1510] shadow-2xl">
                      <Image
                        src="/jaggu_profile.jpeg"
                        alt={OWNER_NAME}
                        fill
                        className="object-cover object-[center_15%] scale-[1.02]"
                        sizes="(max-width: 768px) 300px, 400px"
                        priority
                      />
                      {/* Cinematic overlays */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent dark:from-black/60" />
                      <div className="absolute inset-0 bg-gradient-to-r from-black/10 via-transparent to-transparent dark:from-black/25" />
                    </div>

                    {/* Floating brand badge — sits on photo, clear of gold arch edge */}
                    <div className="absolute top-5 sm:top-6 left-1/2 -translate-x-1/2 z-20 w-[88%] max-w-[210px] sm:max-w-[240px]">
                      <div className="flex items-center gap-2 rounded-xl px-2.5 py-2 sm:px-3 sm:py-2.5 bg-white/95 dark:bg-[#0c0c0c]/92 backdrop-blur-md shadow-lg border border-white/90 dark:border-white/10">
                        <div className="shrink-0 rounded-md overflow-hidden bg-[#0033A0]">
                          <Image
                            src="/sitasoni-logo.jpg"
                            alt="SITASONI trend logo"
                            width={40}
                            height={40}
                            className="w-9 h-9 sm:w-10 sm:h-10 object-cover"
                          />
                        </div>
                        <div className="leading-tight min-w-0">
                          <p className="text-[10px] sm:text-[11px] font-bold theme-heading tracking-wide truncate">
                            SITASONI<span className="text-[7px] align-super">™</span>{' '}
                            <span className="text-[#F4C430] font-semibold">trend</span>
                          </p>
                          <p className="text-[6px] sm:text-[7px] tracking-[0.12em] uppercase font-semibold text-[#0033A0] dark:text-[#5b8fd9] leading-snug">
                            {STORE_TAGLINE}
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Floating name chip on photo */}
                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 w-[90%]">
                      <div className="rounded-xl px-3 py-2.5 text-center
                        bg-white/85 dark:bg-black/55 backdrop-blur-md
                        border border-white/50 dark:border-gold-500/20
                        shadow-lg"
                      >
                        <p className="text-xs sm:text-sm font-semibold text-slate-900 dark:text-white truncate">
                          {OWNER_NAME}
                        </p>
                        <p className="text-[10px] sm:text-[11px] text-gold-700 dark:text-gold-400 tracking-wide">
                          {PHONE_DISPLAY} · Nawagarh
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
