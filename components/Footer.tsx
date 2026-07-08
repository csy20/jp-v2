'use client'

import { motion } from 'framer-motion'
import { Youtube, Facebook, Instagram } from 'lucide-react'
import { useTheme } from './ThemeProvider'

const socialLinks = [
  {
    name: 'YouTube',
    url: 'https://youtube.com/@sitasonitrend?si=gt1VUQfxfp_QCnbW',
    icon: Youtube,
    color: 'hover:text-red-400'
  },
  {
    name: 'Instagram',
    url: 'https://www.instagram.com/sitasoni.in?igsh=MXQ0Y25sOXJ2YXd1Zg==',
    icon: Instagram,
    color: 'hover:text-pink-400'
  },
  {
    name: 'Facebook',
    url: 'https://www.facebook.com/share/1ARaNmyZRu/',
    icon: Facebook,
    color: 'hover:text-blue-400'
  }
]

export default function Footer() {
  const { isDark } = useTheme()

  return (
    <motion.footer
      className={`py-8 md:py-10 px-4 ${
        isDark ? 'bg-slate-950/60' : 'bg-white'
      }`}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-5 md:gap-4">
          <motion.div
            className="text-center md:text-left"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h3 className={`font-display text-xl font-bold ${
              isDark ? 'text-white' : 'text-slate-900'
            }`}>Jageshwar Sahu</h3>
            <p className={`text-sm ${
              isDark ? 'text-slate-400' : 'text-slate-500'
            }`}>SITASONI Trend - Quality Fashion Since Years</p>
          </motion.div>

          <motion.div
            className="flex flex-wrap items-center justify-center gap-x-4 gap-y-1"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <motion.a
              href="mailto:support@sitasoni.in"
              className={`text-sm transition-colors duration-300 ${
                isDark ? 'text-slate-400 hover:text-white' : 'text-slate-500 hover:text-slate-900'
              }`}
              whileHover={{ scale: 1.03 }}
            >
              support@sitasoni.in
            </motion.a>
            <span className={`text-xs ${isDark ? 'text-slate-600' : 'text-slate-300'}`}>•</span>
            <motion.a
              href="tel:+917024367848"
              className={`text-sm transition-colors duration-300 ${
                isDark ? 'text-slate-400 hover:text-white' : 'text-slate-500 hover:text-slate-900'
              }`}
              whileHover={{ scale: 1.03 }}
            >
              +91 7024367848
            </motion.a>
          </motion.div>

          <motion.div
            className="hidden md:flex space-x-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            {socialLinks.map((social, index) => (
              <motion.a
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`transition-colors duration-300 ${
                  isDark ? 'text-slate-400 hover:text-white' : 'text-slate-500 hover:text-slate-900'
                } ${social.color}`}
                whileHover={{ scale: 1.3, rotate: 6 }}
                whileTap={{ scale: 0.9 }}
                transition={{ type: 'spring', stiffness: 300, damping: 10 }}
              >
                <social.icon className="w-4 h-4 md:w-5 md:h-5" />
              </motion.a>
            ))}
          </motion.div>
        </div>

        <motion.div
          className={`mt-6 md:mt-8 pt-6 md:pt-8 border-t ${
            isDark ? 'border-slate-800' : 'border-slate-200'
          } text-center ${
            isDark ? 'text-slate-500' : 'text-slate-400'
          } text-xs md:text-sm`}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <p>&copy; 2025 Jageshwar Sahu. All rights reserved.</p>
        </motion.div>
      </div>
    </motion.footer>
  )
}
