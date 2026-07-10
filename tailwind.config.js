/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ['var(--font-display)', 'Georgia', 'serif'],
        sans: ['var(--font-sans)', 'system-ui', 'sans-serif'],
      },
      colors: {
        gold: {
          50: '#FBF8EF',
          100: '#F5EDD6',
          200: '#EBD9A8',
          300: '#E0C47A',
          400: '#D4AF37',
          500: '#C9A227',
          600: '#A8841F',
          700: '#876818',
          800: '#654E12',
          900: '#43340C',
        },
        luxury: {
          black: '#0A0A0A',
          charcoal: '#121212',
          card: '#161616',
          border: '#2A2A2A',
          muted: '#9CA3AF',
        },
      },
      boxShadow: {
        gold: '0 0 30px rgba(212, 175, 55, 0.15)',
        'gold-sm': '0 0 15px rgba(212, 175, 55, 0.1)',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gold-shine':
          'linear-gradient(135deg, #D4AF37 0%, #F5EDD6 40%, #C9A227 70%, #A8841F 100%)',
      },
    },
  },
  plugins: [],
}
