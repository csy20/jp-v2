'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Phone, Menu, X } from 'lucide-react'
import Logo from './Logo'
import { NAV_LINKS, PHONE_DISPLAY, PHONE_TEL } from '@/lib/constants'

export default function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-40 backdrop-blur-xl border-b border-slate-200/60 dark:border-luxury-border/80 bg-white/80 dark:bg-luxury-black/80 transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-4 md:px-6 h-16 md:h-[72px] flex items-center justify-between gap-4">
        <a href="#home" className="shrink-0">
          <Logo size="sm" showTagline={false} />
        </a>

        <nav className="hidden lg:flex items-center gap-7">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium theme-muted hover:text-gold-600 dark:hover:text-gold-400 transition-colors relative group"
            >
              {link.label}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gold-500 group-hover:w-full transition-all duration-300" />
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={PHONE_TEL}
            className="hidden sm:inline-flex items-center gap-2 rounded-full border border-gold-500/40 px-4 py-2 text-sm font-medium gold-text hover:bg-gold-500/10 transition-colors"
          >
            <Phone className="w-3.5 h-3.5" />
            {PHONE_DISPLAY}
          </a>

          <button
            type="button"
            className="lg:hidden p-2 rounded-lg theme-muted hover:bg-slate-100 dark:hover:bg-white/5"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="lg:hidden overflow-hidden border-t border-slate-200 dark:border-luxury-border bg-white dark:bg-luxury-charcoal"
          >
            <nav className="flex flex-col px-4 py-3 gap-1">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="py-2.5 px-3 rounded-lg text-sm font-medium theme-heading hover:bg-gold-500/10 hover:text-gold-600 dark:hover:text-gold-400"
                >
                  {link.label}
                </a>
              ))}
              <a
                href={PHONE_TEL}
                className="mt-2 inline-flex items-center justify-center gap-2 rounded-full border border-gold-500/40 px-4 py-2.5 text-sm font-medium gold-text"
              >
                <Phone className="w-3.5 h-3.5" />
                {PHONE_DISPLAY}
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
