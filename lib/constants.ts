import { Youtube, Facebook, Instagram } from 'lucide-react'

/** WhatsApp / phone (India): 7024367848 */
export const WHATSAPP_NUMBER = '917024367848'
export const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}`
export const PHONE_DISPLAY = '+91 7024367848'
export const PHONE_TEL = 'tel:+917024367848'

export const STORE_NAME = 'SITASONI™ trend'
export const STORE_TAGLINE = "PREMIUM MEN'S & WOMEN'S WEAR"
export const OWNER_NAME = 'Jageshwar Sahu'
export const EMAIL = 'support@sitasoni.in'
export const STORE_URL = 'https://sitasoni.in'

const MAP_QUERY = 'SITASONI trend, Nawagarh, Bemetara Road, Chhattisgarh, India'

export const ADDRESS = {
  line1: 'SITASONI™ trend',
  line2: 'Nawagarh, Bemetara Road,',
  line3: 'Chhattisgarh, India — 491337',
  lat: 21.907166,
  lng: 81.611244,
  mapsUrl: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(MAP_QUERY)}`,
  embedUrl: `https://maps.google.com/maps?q=${encodeURIComponent(MAP_QUERY)}&hl=en&z=17&output=embed`,
}

/** Store open hours — 9 AM – 8 PM every day */
export const STORE_HOURS = {
  open: 9,
  close: 20,
  label: '9:00 AM – 8:00 PM',
  supportLabel: '9:00 AM – 8:00 PM',
}

export const QUOTE = {
  text: "Quality is not an act, it's our habit.",
  author: 'Jageshwar Sahu',
}

export const ABOUT = {
  me: "I'm Jageshwar Sahu, the founder of SITASONI™ trend. My vision is to bring premium quality fashion within everyone's reach. We believe in honest service, great quality & customer satisfaction.",
  store:
    'SITASONI™ trend is a premium fashion brand for men and women — shirts, jeans, t-shirts, ethnic wear, and more. Visit our store for the best quality and style.',
}

export const JOURNEY = {
  journey:
    'Started with a small dream to provide quality fashion to our local community. Today, SITASONI™ trend is growing with your trust and support.',
  mission:
    'To deliver premium quality fashion with honesty, affordability and the best customer service.',
  vision:
    'To become a trusted fashion brand in India known for quality, style and customer satisfaction.',
}

export const DELIVERY = [
  {
    title: 'Order Online',
    desc: 'Shop your favorite looks from anywhere.',
    cta: 'Shop Now',
    href: STORE_URL,
  },
  {
    title: 'Free Delivery',
    desc: 'All orders with free delivery.',
  },
  {
    title: 'Same-Day Delivery within 100 km',
    desc: 'Fast delivery on the same day.',
  },
  {
    title: 'Other Locations',
    desc: 'Delivery within 5 days.',
  },
]

export const NAV_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Journey', href: '#journey' },
  { label: 'Store Info', href: '#store' },
  { label: 'Collections', href: '#delivery' },
  { label: 'Contact', href: '#contact' },
]

export const socialLinks = [
  {
    name: 'Instagram',
    url: 'https://www.instagram.com/sitasoni.in?igsh=MXQ0Y25sOXJ2YXd1Zg==',
    icon: Instagram,
  },
  {
    name: 'YouTube',
    url: 'https://youtube.com/@sitasonitrend?si=gt1VUQfxfp_QCnbW',
    icon: Youtube,
  },
  {
    name: 'Facebook',
    url: 'https://www.facebook.com/share/1ARaNmyZRu/',
    icon: Facebook,
  },
]
