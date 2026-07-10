'use client'

import { ThemeProvider } from '@/components/ThemeProvider'
import Header from '@/components/Header'
import HeroSection from '@/components/HeroSection'
import AboutSection from '@/components/AboutSection'
import JourneySection from '@/components/JourneySection'
import HoursSection from '@/components/HoursSection'
import StoreInfoSection from '@/components/StoreInfoSection'
import DeliverySection from '@/components/DeliverySection'
import Footer from '@/components/Footer'
import DockerNav from '@/components/DockerNav'

function HomeContent() {
  return (
    <div className="min-h-screen w-full theme-bg pb-24">
      <div
        className="pointer-events-none fixed inset-0 z-0"
        style={{
          background:
            'radial-gradient(ellipse at 50% 0%, rgba(212,175,55,0.07) 0%, transparent 50%)',
        }}
      />

      <div className="relative z-10">
        <Header />
        <HeroSection />
        <AboutSection />
        <JourneySection />
        <HoursSection />
        <StoreInfoSection />
        <DeliverySection />
        <Footer />
      </div>

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
