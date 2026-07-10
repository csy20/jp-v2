import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
})

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://sitasoni.in'),
  title: 'SITASONI™ trend — Premium Men\'s Wear | Jageshwar Sahu',
  description:
    'SITASONI trend by Jageshwar Sahu — premium menswear in Nawagarh, Chhattisgarh. Quality shirts, jeans, t-shirts and more.',
  keywords:
    'SITASONI Trend, Jageshwar Sahu, premium menswear, cloth store, Nawagarh, Chhattisgarh, fashion',
  authors: [{ name: 'Jageshwar Sahu' }],
  openGraph: {
    title: 'SITASONI™ trend — Premium Men\'s Wear',
    description:
      'Premium quality fashion by Jageshwar Sahu. Visit our store in Nawagarh, Chhattisgarh.',
    url: 'https://sitasoni.in',
    siteName: 'SITASONI Trend',
    images: [
      {
        url: '/jaggu_profile.jpeg',
        width: 800,
        height: 600,
        alt: 'Jageshwar Sahu — SITASONI trend',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var theme = localStorage.getItem('theme');
                  if (theme === 'dark') {
                    document.documentElement.classList.add('dark');
                  } else {
                    document.documentElement.classList.remove('dark');
                  }
                } catch (e) {}
              })();
            `,
          }}
        />
      </head>
      <body className={`${inter.variable} ${playfair.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  )
}
