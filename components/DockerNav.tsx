'use client'

import { motion } from 'framer-motion'
import {
  Home as HomeIcon,
  Sun,
  Moon,
  Youtube,
  Facebook,
  Instagram
} from 'lucide-react'
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

export default function DockerNav() {
  const { isDark, toggleTheme } = useTheme()

  return (
    <motion.div
      className={`fixed bottom-4 md:bottom-6 left-1/2 z-50 ${
        isDark
          ? 'bg-slate-900/80 border-slate-700/50'
          : 'bg-white/80 border-slate-200'
      } backdrop-blur-xl rounded-full px-5 py-2.5 md:px-6 md:py-3 shadow-lg border border-animated`}
      initial={{ y: 80, opacity: 0, x: '-50%' }}
      animate={{ y: 0, opacity: 1, x: '-50%' }}
      transition={{ duration: 0.6, delay: 0.8, type: 'spring', stiffness: 100, damping: 15 }}
      whileHover={{ scale: 1.02 }}
    >
      <div className="flex items-center space-x-5 md:space-x-8">
        {/* Home */}
        <motion.button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className={`p-2 rounded-full transition-colors duration-300 ${
            isDark ? 'text-slate-400 hover:text-white hover:bg-slate-800' : 'text-slate-500 hover:text-slate-900 hover:bg-slate-100'
          }`}
          title="Home"
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
        >
          <HomeIcon className="w-4 h-4 md:w-5 md:h-5" />
        </motion.button>

        {/* Social Icons */}
        {socialLinks.map((social, index) => (
          <motion.a
            key={index}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            className={`p-2 rounded-full transition-colors duration-300 ${
              isDark ? 'text-slate-400 hover:text-white hover:bg-slate-800' : 'text-slate-500 hover:text-slate-900 hover:bg-slate-100'
            } ${social.color}`}
            title={social.name}
            whileHover={{ scale: 1.2, rotate: 6 }}
            whileTap={{ scale: 0.9 }}
          >
            <social.icon className="w-4 h-4 md:w-5 md:h-5" />
          </motion.a>
        ))}

        {/* Separator */}
        <div className={`w-px h-5 md:h-6 ${isDark ? 'bg-slate-700' : 'bg-slate-300'}`} />

        {/* Theme Toggle */}
        <motion.button
          onClick={toggleTheme}
          className={`p-2 rounded-full transition-colors duration-300 ${
            isDark ? 'text-slate-400 hover:text-white hover:bg-slate-800' : 'text-slate-500 hover:text-slate-900 hover:bg-slate-100'
          }`}
          title={isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
        >
          <motion.div
            key={isDark ? 'sun' : 'moon'}
            initial={{ rotate: -90, opacity: 0 }}
            animate={{ rotate: 0, opacity: 1 }}
            exit={{ rotate: 90, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {isDark ? <Sun className="w-4 h-4 md:w-5 md:h-5" /> : <Moon className="w-4 h-4 md:w-5 md:h-5" />}
          </motion.div>
        </motion.button>
      </div>
    </motion.div>
  )
}
