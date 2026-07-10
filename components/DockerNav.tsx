'use client'

import { motion } from 'framer-motion'
import { Home as HomeIcon, Sun, Moon, Youtube, Facebook, Instagram } from 'lucide-react'
import { useTheme } from './ThemeProvider'
import WhatsAppIcon from './WhatsAppIcon'
import { WHATSAPP_URL, socialLinks } from '@/lib/constants'

const iconMap = {
  YouTube: Youtube,
  Instagram: Instagram,
  Facebook: Facebook,
} as const

export default function DockerNav() {
  const { isDark, toggleTheme } = useTheme()

  return (
    <motion.div
      className={`fixed bottom-4 md:bottom-6 left-1/2 z-50 backdrop-blur-xl rounded-full px-4 py-2 md:px-5 md:py-2.5 shadow-lg border ${
        isDark
          ? 'bg-luxury-card/90 border-luxury-border shadow-gold-sm'
          : 'bg-white/90 border-slate-200'
      }`}
      initial={{ y: 80, opacity: 0, x: '-50%' }}
      animate={{ y: 0, opacity: 1, x: '-50%' }}
      transition={{ duration: 0.6, delay: 0.5, type: 'spring', stiffness: 100, damping: 15 }}
    >
      <div className="flex items-center space-x-3 md:space-x-5">
        <motion.a
          href="#home"
          className={`p-2 rounded-full transition-colors ${
            isDark
              ? 'text-slate-400 hover:text-gold-400 hover:bg-white/5'
              : 'text-slate-500 hover:text-gold-600 hover:bg-slate-100'
          }`}
          title="Home"
          whileHover={{ scale: 1.15 }}
          whileTap={{ scale: 0.9 }}
        >
          <HomeIcon className="w-4 h-4 md:w-5 md:h-5" />
        </motion.a>

        <motion.a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 rounded-full text-[#25D366] hover:bg-[#25D366]/10 transition-colors"
          title="Chat on WhatsApp"
          aria-label="Chat on WhatsApp"
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
        >
          <WhatsAppIcon className="w-4 h-4 md:w-5 md:h-5" />
        </motion.a>

        {socialLinks.map((social) => {
          const Icon = iconMap[social.name as keyof typeof iconMap]
          if (!Icon) return null
          return (
            <motion.a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`p-2 rounded-full transition-colors ${
                isDark
                  ? 'text-slate-400 hover:text-white hover:bg-white/5'
                  : 'text-slate-500 hover:text-slate-900 hover:bg-slate-100'
              }`}
              title={social.name}
              whileHover={{ scale: 1.15, rotate: 6 }}
              whileTap={{ scale: 0.9 }}
            >
              <Icon className="w-4 h-4 md:w-5 md:h-5" />
            </motion.a>
          )
        })}

        <div className={`w-px h-5 ${isDark ? 'bg-luxury-border' : 'bg-slate-300'}`} />

        <motion.button
          type="button"
          onClick={toggleTheme}
          className={`p-2 rounded-full transition-colors ${
            isDark
              ? 'text-gold-400 hover:text-gold-300 hover:bg-white/5'
              : 'text-slate-500 hover:text-gold-600 hover:bg-slate-100'
          }`}
          title={isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
          whileHover={{ scale: 1.15 }}
          whileTap={{ scale: 0.9 }}
        >
          {isDark ? (
            <Sun className="w-4 h-4 md:w-5 md:h-5" />
          ) : (
            <Moon className="w-4 h-4 md:w-5 md:h-5" />
          )}
        </motion.button>
      </div>
    </motion.div>
  )
}
