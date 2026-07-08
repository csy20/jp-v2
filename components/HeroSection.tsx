'use client'

import { useRef } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'
import Image from 'next/image'
import { ExternalLink } from 'lucide-react'
import { useTheme } from './ThemeProvider'
import StatsCard from './StatsCard'

const stats = [
  { label: 'Expert Guidance', value: 'Trusted', icon: 'TrendingUp' },
  { label: 'Happy Customers', value: '1000+', icon: 'Users' },
  { label: 'Clothing Items', value: '5000+', icon: 'Package' },
  { label: 'Fashion Trends', value: '100+', icon: 'Star' }
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.3,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
}

const imageFloatVariants = {
  animate: {
    y: [0, -12, 0],
    transition: {
      duration: 6,
      repeat: Infinity,
      ease: 'easeInOut',
    },
  },
}

const particles = Array.from({ length: 8 }, (_, i) => ({
  id: i,
  x: Math.random() * 100,
  y: Math.random() * 100,
  size: Math.random() * 6 + 3,
  delay: Math.random() * 5,
  duration: Math.random() * 4 + 4,
}))

function WordReveal({ text, className }: { text: string; className: string }) {
  const words = text.split(' ')
  return (
    <span className={className}>
      {words.map((word, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 + i * 0.2, duration: 0.5, ease: 'easeOut' }}
          className="inline-block mr-[0.25em] last:mr-0"
        >
          {word}
        </motion.span>
      ))}
    </span>
  )
}

function MagneticButton({ children, href, className }: { children: React.ReactNode; href: string; className: string }) {
  const ref = useRef<HTMLAnchorElement>(null)
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const springX = useSpring(x, { stiffness: 150, damping: 12 })
  const springY = useSpring(y, { stiffness: 150, damping: 12 })

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = ref.current?.getBoundingClientRect()
    if (!rect) return
    const offsetX = e.clientX - rect.left - rect.width / 2
    const offsetY = e.clientY - rect.top - rect.height / 2
    x.set(offsetX * 0.25)
    y.set(offsetY * 0.25)
  }

  const handleMouseLeave = () => {
    x.set(0)
    y.set(0)
  }

  return (
    <motion.a
      ref={ref}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
      style={{ x: springX, y: springY }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {children}
    </motion.a>
  )
}

export default function HeroSection() {
  const { isDark } = useTheme()

  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 pt-20 pb-24 overflow-hidden">
      {/* Particles */}
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className={`absolute rounded-full pointer-events-none ${
            isDark ? 'bg-blue-400/10' : 'bg-blue-500/15'
          }`}
          style={{
            left: `${p.x}%`,
            top: `${p.y}%`,
            width: p.size,
            height: p.size,
          }}
          animate={{
            y: [0, -40, 0],
            x: [0, 15, 0],
            opacity: [0.2, 0.7, 0.2],
          }}
          transition={{
            duration: p.duration,
            repeat: Infinity,
            delay: p.delay,
            ease: 'easeInOut',
          }}
        />
      ))}

      <motion.div
        className="relative z-10 max-w-6xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="grid md:grid-cols-2 gap-8 md:gap-14 items-center">
          {/* Left - Content */}
          <motion.div className="text-left order-2 md:order-1" variants={itemVariants}>
            <WordReveal
              text="Jageshwar Sahu"
              className={`font-display text-5xl md:text-7xl font-bold mb-4 block leading-tight ${
                isDark ? 'text-white' : 'text-slate-900'
              }`}
            />

            <WordReveal
              text="Premium Cloth Merchant • Fashion Expert"
              className={`text-base md:text-lg tracking-[0.15em] uppercase mb-6 block ${
                isDark ? 'text-blue-400' : 'text-blue-600'
              }`}
            />

            <motion.p
              className={`text-base md:text-lg leading-relaxed max-w-xl text-balance ${
                isDark ? 'text-slate-400' : 'text-slate-600'
              }`}
              variants={itemVariants}
            >
              SITASONI trend, founded by Jageshwar Sahu, is redefining premium fashion in India. From luxury fabrics to statement wear, every design is crafted to celebrate individuality.
              With deep roots in <a href="https://share.google/gN3YEmaXIgcK6dUwc" target="_blank" rel="noopener noreferrer" className="text-blue-500 font-semibold hover:underline cursor-pointer">Nawagarh</a>, Chhattisgarh, and a growing digital presence, we blend tradition with modern fashion tech to deliver premium looks that trend nationwide.
            </motion.p>

            {/* Stats */}
            <motion.div className="grid grid-cols-2 gap-3 md:gap-4 mb-8" variants={itemVariants}>
              {stats.map((stat, index) => (
                <StatsCard
                  key={index}
                  label={stat.label}
                  value={stat.value}
                  icon={stat.icon}
                  index={index}
                />
              ))}
            </motion.div>

            {/* CTA Button */}
            <motion.div variants={itemVariants}>
              <MagneticButton
                href="https://sitasoni.in"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-blue-500 text-white px-7 py-3.5 md:px-8 md:py-4 rounded-full text-base md:text-lg font-semibold hover:from-blue-700 hover:to-blue-600 transition-all duration-500 shadow-lg hover:shadow-xl hover:shadow-blue-500/25 cursor-pointer"
              >
                Visit Our Store <ExternalLink className="w-4 h-4 md:w-5 md:h-5" />
              </MagneticButton>
            </motion.div>
          </motion.div>

          {/* Right - Profile Image */}
          <motion.div
            className="relative flex justify-center order-1 md:order-2"
            variants={itemVariants}
          >
            <div className="relative">
              {/* Glow behind image */}
              <motion.div
                className={`absolute inset-0 rounded-full blur-3xl ${
                  isDark ? 'bg-blue-500/10' : 'bg-blue-500/10'
                }`}
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              />

              <motion.div
                className="relative w-44 h-44 sm:w-52 sm:h-52 md:w-64 md:h-64 lg:w-72 lg:h-72 mx-auto rounded-full overflow-hidden ring-2 ring-blue-300/30 shadow-xl"
                variants={imageFloatVariants}
                animate="animate"
                whileHover={{ scale: 1.03 }}
                transition={{ type: 'spring', stiffness: 200, damping: 15 }}
              >
                <Image
                  src="/jaggu_profile.jpeg"
                  alt="Jageshwar Sahu Profile"
                  fill
                  className="object-cover"
                  priority
                />
                <div className={`absolute inset-0 ${
                  isDark ? 'bg-gradient-to-t from-blue-950/30 to-transparent' : 'bg-gradient-to-t from-blue-900/10 to-transparent'
                }`} />
              </motion.div>

              {/* Floating Elements */}
              <motion.div
                className={`absolute -top-3 -right-3 w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full ${
                  isDark ? 'bg-blue-400/20' : 'bg-blue-500/20'
                }`}
                animate={{
                  scale: [1, 1.2, 1],
                  rotate: [0, 180, 360],
                  y: [0, -10, 0],
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: 'linear',
                }}
              />
              <motion.div
                className={`absolute -bottom-3 -left-3 w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 rounded-full ${
                  isDark ? 'bg-blue-300/20' : 'bg-blue-400/20'
                }`}
                animate={{
                  scale: [1, 1.3, 1],
                  rotate: [360, 180, 0],
                  y: [0, 10, 0],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: 'linear',
                }}
              />
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}
