'use client'

import { useRef } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'
import { MapPin, Phone, Mail } from 'lucide-react'
import { useTheme } from './ThemeProvider'

function TiltCard({ children, className }: { children: React.ReactNode; className: string }) {
  const ref = useRef<HTMLDivElement>(null)
  const rotateX = useMotionValue(0)
  const rotateY = useMotionValue(0)
  const springX = useSpring(rotateX, { stiffness: 200, damping: 20 })
  const springY = useSpring(rotateY, { stiffness: 200, damping: 20 })

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = ref.current?.getBoundingClientRect()
    if (!rect) return
    const x = (e.clientX - rect.left) / rect.width - 0.5
    const y = (e.clientY - rect.top) / rect.height - 0.5
    rotateX.set(-y * 8)
    rotateY.set(x * 8)
  }

  const handleMouseLeave = () => {
    rotateX.set(0)
    rotateY.set(0)
  }

  return (
    <motion.div
      ref={ref}
      className={className}
      style={{ rotateX: springX, rotateY: springY, perspective: 1000 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {children}
    </motion.div>
  )
}

function UnderlineLink({ href, children, className }: { href: string; children: React.ReactNode; className: string }) {
  return (
    <motion.a
      href={href}
      className={`${className} relative inline-block`}
      whileHover={{ x: 3 }}
      transition={{ type: 'spring', stiffness: 300 }}
    >
      {children}
      <motion.span
        className="absolute bottom-0 left-0 h-[1px] bg-blue-500"
        initial={{ width: 0 }}
        whileHover={{ width: '100%' }}
        transition={{ duration: 0.3, ease: 'easeOut' }}
      />
    </motion.a>
  )
}

export default function LocationSection() {
  const { isDark } = useTheme()

  return (
    <motion.section
      className="relative px-4 py-16 md:py-20"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
    >
      <div className="max-w-4xl mx-auto">
        <TiltCard
          className={`rounded-2xl overflow-hidden shadow-xl ${
            isDark
              ? 'bg-slate-800/50 border border-slate-700/50'
              : 'bg-white border border-slate-200'
          }`}
        >
          <div className="grid md:grid-cols-2 gap-0">
            {/* Map */}
            <motion.div
              className="h-72 md:h-96 w-full"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <iframe
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3689.7394024371477!2d83.37425!3d21.828889!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a2d1e1e1e1e1e1d%3A0x1e1e1e1e1e1e1e1e!2sNawagarh%2C%20Chhattisgarh%20491001%2C%20India!5e0!3m2!1sen!2sin!4v1234567890"
              />
            </motion.div>

            {/* Info */}
            <motion.div
              className={`p-6 md:p-8 flex flex-col justify-center ${
                isDark ? 'bg-slate-900/30' : 'bg-slate-50'
              }`}
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <h3 className={`font-display text-2xl md:text-3xl font-bold mb-5 ${
                isDark ? 'text-white' : 'text-slate-900'
              }`}>Visit Our Store</h3>

              <div className="space-y-4 md:space-y-5">
                <motion.div
                  className="flex items-start gap-3"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.4 }}
                >
                  <MapPin className={`w-5 h-5 flex-shrink-0 mt-0.5 ${
                    isDark ? 'text-blue-400' : 'text-blue-600'
                  }`} />
                  <div>
                    <p className={`font-semibold text-sm ${
                      isDark ? 'text-white' : 'text-slate-900'
                    }`}>Address</p>
                    <p className={`text-sm ${
                      isDark ? 'text-slate-400' : 'text-slate-500'
                    }`}>SITASONI Trend, Nawagarh, Chhattisgarh, India</p>
                  </div>
                </motion.div>

                <motion.div
                  className="flex items-start gap-3"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.5 }}
                >
                  <Phone className={`w-5 h-5 flex-shrink-0 mt-0.5 ${
                    isDark ? 'text-blue-400' : 'text-blue-600'
                  }`} />
                  <div>
                    <p className={`font-semibold text-sm ${
                      isDark ? 'text-white' : 'text-slate-900'
                    }`}>Phone</p>
                    <UnderlineLink
                      href="tel:+917024367848"
                      className={`text-sm ${
                        isDark ? 'text-slate-400 hover:text-blue-400' : 'text-slate-500 hover:text-blue-600'
                      } transition-colors`}
                    >
                      +91 7024367848
                    </UnderlineLink>
                  </div>
                </motion.div>

                <motion.div
                  className="flex items-start gap-3"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.6 }}
                >
                  <Mail className={`w-5 h-5 flex-shrink-0 mt-0.5 ${
                    isDark ? 'text-blue-400' : 'text-blue-600'
                  }`} />
                  <div>
                    <p className={`font-semibold text-sm ${
                      isDark ? 'text-white' : 'text-slate-900'
                    }`}>Email</p>
                    <UnderlineLink
                      href="mailto:support@sitasoni.in"
                      className={`text-sm ${
                        isDark ? 'text-slate-400 hover:text-blue-400' : 'text-slate-500 hover:text-blue-600'
                      } transition-colors`}
                    >
                      support@sitasoni.in
                    </UnderlineLink>
                  </div>
                </motion.div>
              </div>

              <motion.a
                href="https://www.google.com/search?sca_esv=4371f740622c0d3e&cs=1&output=search&kgmid=/g/11xmr19hff&q=SITASONI+trend&shndl=30&shem=dais,lcuae,uaasie,shrtsdl&source=sh/x/loc/uni/m1/1&kgs=c6e8b2dea1d3b652&utm_source=dais,lcuae,uaasie,shrtsdl,sh/x/loc/uni/m1/1"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white px-5 py-2.5 md:px-6 md:py-3 rounded-lg font-semibold shadow-md transition-all duration-300"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                <MapPin className="w-4 h-4" />
                View on Google Maps
              </motion.a>
            </motion.div>
          </div>
        </TiltCard>
      </div>
    </motion.section>
  )
}
