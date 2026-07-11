'use client'

import { createContext, useContext, useState, useEffect, ReactNode } from 'react'

const THEME_STORAGE_KEY = 'sitasoni-theme'

interface ThemeContextType {
  isDark: boolean
  toggleTheme: () => void
}

const ThemeContext = createContext<ThemeContextType>({
  isDark: false,
  toggleTheme: () => {},
})

function applyTheme(dark: boolean) {
  document.documentElement.classList.toggle('dark', dark)
  localStorage.setItem(THEME_STORAGE_KEY, dark ? 'dark' : 'light')
}

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [isDark, setIsDark] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const stored = localStorage.getItem(THEME_STORAGE_KEY)
    const dark = stored === 'dark'
    setIsDark(dark)
    applyTheme(dark)
  }, [])

  useEffect(() => {
    if (!mounted) return
    document.documentElement.classList.toggle('dark', isDark)
  }, [isDark, mounted])

  const toggleTheme = () => {
    const next = !isDark
    setIsDark(next)
    applyTheme(next)
  }

  return (
    <ThemeContext.Provider value={{ isDark, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export const useTheme = () => useContext(ThemeContext)
