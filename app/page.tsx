'use client'

import { useMotionValue, useSpring, useTransform, useMotionTemplate, useScroll } from 'framer-motion'
import { motion } from 'framer-motion'
import { ThemeProvider } from '@/components/ThemeProvider'
import { useTheme } from '@/components/ThemeProvider'
import HeroSection from '@/components/HeroSection'
import LocationSection from '@/components/LocationSection'
import Footer from '@/components/Footer'
import DockerNav from '@/components/DockerNav'

function ScrollProgress() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 })

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-blue-500 via-blue-400 to-blue-500 z-[100] origin-left"
      style={{ scaleX }}
    />
  )
}

function SectionDivider() {
  return (
    <div className="max-w-5xl mx-auto px-4">
      <div className="section-divider" />
    </div>
  )
}

function HomeContent() {
  const { isDark } = useTheme()
  const mouseX = useMotionValue(0.5)
  const mouseY = useMotionValue(0.5)
  const smoothX = useSpring(mouseX, { stiffness: 70, damping: 30 })
  const smoothY = useSpring(mouseY, { stiffness: 70, damping: 30 })

  const posX = useTransform(smoothX, [0, 1], ['0%', '100%'])
  const posY = useTransform(smoothY, [0, 1], ['0%', '100%'])
  const spotlightBg = useMotionTemplate`radial-gradient(circle at ${posX} ${posY}, rgba(59, 130, 246, 0.08) 0%, transparent 60%)`
  const darkSpotlightBg = useMotionTemplate`radial-gradient(circle at ${posX} ${posY}, rgba(59, 130, 246, 0.06) 0%, transparent 50%)`

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect()
    mouseX.set((e.clientX - rect.left) / rect.width)
    mouseY.set((e.clientY - rect.top) / rect.height)
  }

  return (
    <div
      className={`min-h-screen w-full transition-colors duration-700 ${
        isDark ? 'bg-slate-950' : 'bg-white'
      } relative`}
      onMouseMove={handleMouseMove}
    >
      <ScrollProgress />

      {/* Noise texture overlay */}
      <div
        className="pointer-events-none fixed inset-0 z-0 opacity-[0.015]"
        style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 256 256\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noise\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.65\' numOctaves=\'3\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noise)\' opacity=\'0.5\'/%3E%3C/svg%3E")',
        }}
      />

      {/* Spotlight overlay - light mode */}
      {!isDark && (
        <motion.div
          className="pointer-events-none fixed inset-0 z-0"
          style={{ background: spotlightBg }}
        />
      )}

      {/* Dark mode ambient glow */}
      {isDark && (
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `
              radial-gradient(circle at 50% 100%, rgba(59, 130, 246, 0.06) 0%, transparent 60%),
              radial-gradient(circle at 50% 100%, rgba(96, 165, 250, 0.04) 0%, transparent 70%)
            `,
          }}
        />
      )}

      {/* Dark mode spotlight */}
      {isDark && (
        <motion.div
          className="pointer-events-none fixed inset-0 z-[1]"
          style={{ background: darkSpotlightBg }}
        />
      )}

      <HeroSection />
      <SectionDivider />
      <LocationSection />
      <SectionDivider />
      <Footer />
      <DockerNav />
    </div>
  )
}

export default function HomePage() {
  return (
    <ThemeProvider>
      <HomeContent />
    </ThemeProvider>
  )
}
