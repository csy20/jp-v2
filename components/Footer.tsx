'use client'

import Logo from './Logo'
import WhatsAppIcon from './WhatsAppIcon'
import {
  EMAIL,
  NAV_LINKS,
  PHONE_DISPLAY,
  PHONE_TEL,
  socialLinks,
  WHATSAPP_URL,
} from '@/lib/constants'

export default function Footer() {
  return (
    <footer
      id="contact"
      className="mt-4 border-t border-slate-200 dark:border-luxury-border bg-slate-50 dark:bg-[#0d0d0d] transition-colors duration-500"
    >
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-10 md:py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-6">
          <div className="col-span-2 md:col-span-1">
            <Logo size="sm" />
            <p className="theme-muted text-xs mt-3 max-w-[200px] leading-relaxed">
              Premium men&apos;s wear from Nawagarh, Chhattisgarh.
            </p>
          </div>

          <div>
            <h4 className="text-xs font-bold tracking-[0.2em] uppercase theme-heading mb-3">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {NAV_LINKS.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="text-sm theme-muted hover:text-gold-600 dark:hover:text-gold-400 transition-colors"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-bold tracking-[0.2em] uppercase theme-heading mb-3">
              Follow Us
            </h4>
            <div className="flex gap-3">
              {socialLinks.map((s) => (
                <a
                  key={s.name}
                  href={s.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full border border-slate-200 dark:border-luxury-border flex items-center justify-center theme-muted hover:border-gold-500 hover:text-gold-500 transition-colors"
                  title={s.name}
                >
                  <s.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-xs font-bold tracking-[0.2em] uppercase theme-heading mb-3">
              Contact
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 theme-muted hover:text-[#25D366] transition-colors"
                >
                  <WhatsAppIcon className="w-4 h-4 text-[#25D366]" />
                  {PHONE_DISPLAY}
                </a>
              </li>
              <li>
                <a
                  href={PHONE_TEL}
                  className="theme-muted hover:text-gold-600 dark:hover:text-gold-400 transition-colors"
                >
                  Call {PHONE_DISPLAY}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${EMAIL}`}
                  className="theme-muted hover:text-gold-600 dark:hover:text-gold-400 transition-colors break-all"
                >
                  {EMAIL}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-slate-200 dark:border-luxury-border flex flex-col sm:flex-row justify-between gap-2 text-xs theme-muted">
          <p>© {new Date().getFullYear()} SITASONI™ trend. All Rights Reserved.</p>
          <p>
            Designed with <span className="text-red-500">♥</span> for our customers
          </p>
        </div>
      </div>
    </footer>
  )
}
