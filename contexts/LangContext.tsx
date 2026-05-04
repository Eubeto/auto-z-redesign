'use client'

import { createContext, useContext, useState, useEffect } from 'react'
import { translations, type Lang } from '@/lib/translations'

const LangContext = createContext<{
  lang: Lang
  setLang: (l: Lang) => void
  tr: typeof translations['pt']
}>({ lang: 'pt', setLang: () => {}, tr: translations['pt'] })

export function LangProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<Lang>('pt')

  const setLang = (l: Lang) => {
    setLangState(l)
    localStorage.setItem('auto-z-lang', l)
  }

  useEffect(() => {
    const saved = localStorage.getItem('auto-z-lang') as Lang | null
    if (saved && ['pt', 'en', 'es'].includes(saved)) setLangState(saved)
  }, [])

  return (
    <LangContext.Provider value={{ lang, setLang, tr: translations[lang] }}>
      {children}
    </LangContext.Provider>
  )
}

export const useLang = () => useContext(LangContext)
