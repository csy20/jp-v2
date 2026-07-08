'use client'

import { motion } from 'framer-motion'
import { TrendingUp, Users, Package, Star } from 'lucide-react'
import { useTheme } from './ThemeProvider'

const iconMap: Record<string, React.ElementType> = {
  TrendingUp,
  Users,
  Package,
  Star
}

interface StatsCardProps {
  label: string
  value: string
  icon: string
  index: number
}

function AnimatedValue({ value }: { value: string }) {
  const numericValue = parseInt(value.replace(/[+,]/g, ''))
  const suffix = value.replace(/[0-9]/g, '')
  const isNumeric = !isNaN(numericValue)

  if (!isNumeric) {
    return (
      <motion.span
        initial={{ opacity: 0, scale: 0.5 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        {value}
      </motion.span>
    )
  }

  return (
    <motion.span
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.3 }}
    >
      {numericValue}{suffix}
    </motion.span>
  )
}

export default function StatsCard({ label, value, icon, index }: StatsCardProps) {
  const { isDark } = useTheme()
  const Icon = iconMap[icon]

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{
        type: 'spring',
        stiffness: 100,
        damping: 15,
        delay: index * 0.1,
      }}
      whileHover={{ scale: 1.03, y: -4 }}
      whileTap={{ scale: 0.98 }}
      className={`p-3.5 md:p-4 rounded-xl ${
        isDark
          ? 'bg-slate-800/50 border border-slate-700/50'
          : 'bg-white border border-slate-200'
      } shadow-sm hover:shadow-md transition-all duration-500 cursor-default group`}
    >
      <motion.div
        animate={{ scale: [1, 1.08, 1] }}
        transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut', delay: index * 0.3 }}
      >
        <Icon className={`w-5 h-5 md:w-6 md:h-6 mb-2 ${
          isDark ? 'text-blue-400' : 'text-blue-600'
        }`} />
      </motion.div>
      <div className={`text-lg md:text-xl font-bold ${
        isDark ? 'text-white' : 'text-slate-900'
      }`}>
        <AnimatedValue value={value} />
      </div>
      <div className={`text-xs md:text-sm ${
        isDark ? 'text-slate-400' : 'text-slate-500'
      }`}>{label}</div>
    </motion.div>
  )
}
