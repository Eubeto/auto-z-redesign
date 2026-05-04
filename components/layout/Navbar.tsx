'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, MessageCircle } from 'lucide-react'
import { siteConfig } from '@/lib/data'
import { cn } from '@/lib/utils'
import { useLang } from '@/contexts/LangContext'
import { useTheme } from '@/contexts/ThemeContext'
import type { Lang } from '@/lib/translations'

const LANGS: Lang[] = ['pt', 'en', 'es']

function SunIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="5" />
      <line x1="12" y1="1"  x2="12" y2="3" />
      <line x1="12" y1="21" x2="12" y2="23" />
      <line x1="4.22" y1="4.22"   x2="5.64" y2="5.64" />
      <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
      <line x1="1"  y1="12" x2="3"  y2="12" />
      <line x1="21" y1="12" x2="23" y2="12" />
      <line x1="4.22" y1="19.78"  x2="5.64" y2="18.36" />
      <line x1="18.36" y1="5.64"  x2="19.78" y2="4.22" />
    </svg>
  )
}

function MoonIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
    </svg>
  )
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const { lang, setLang, tr } = useLang()
  const { theme, toggle } = useTheme()

  const navLinks = [
    { label: tr.nav.features, href: '#funcionalidades' },
    { label: tr.nav.pricing,  href: '#precos' },
    { label: tr.nav.skills,   href: '#skills' },
  ]

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-500',
        scrolled
          ? 'bg-[#03060F]/85 backdrop-blur-2xl border-b border-white/[0.06] shadow-[0_1px_40px_rgba(0,0,0,0.5)]'
          : 'bg-transparent'
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-18">
          {/* Logo */}
          <a href="#" className="flex items-center gap-0 group">
            <span className="font-display font-bold text-xl text-white tracking-tight group-hover:text-white/90 transition-colors">
              AUTO
            </span>
            <span className="font-display font-bold text-xl text-gradient-brand tracking-tight">
              Z
            </span>
          </a>

          {/* Desktop Nav — pill container */}
          <nav className="hidden md:flex items-center gap-0.5 px-2 py-1.5 rounded-2xl bg-white/[0.04] border border-white/[0.06]">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="px-4 py-1.5 text-sm text-slate-400 hover:text-white rounded-xl hover:bg-white/[0.06] transition-all duration-200 font-medium"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right controls */}
          <div className="hidden md:flex items-center gap-3">
            {/* Lang switcher */}
            <div className="flex gap-0.5 p-1 rounded-xl bg-white/[0.05] border border-white/[0.07]">
              {LANGS.map((l) => (
                <button
                  key={l}
                  onClick={() => setLang(l)}
                  className={cn(
                    'px-2.5 py-1 rounded-lg text-[11px] font-semibold uppercase tracking-wider transition-all duration-200',
                    lang === l
                      ? 'bg-blue-500/20 text-blue-400 border border-blue-500/30'
                      : 'text-slate-500 hover:text-slate-300 hover:bg-white/[0.05]'
                  )}
                >
                  {l}
                </button>
              ))}
            </div>

            {/* Theme toggle */}
            <button
              onClick={toggle}
              className="p-2 rounded-xl bg-white/[0.05] border border-white/[0.07] text-slate-400 hover:text-white hover:bg-white/[0.10] transition-all duration-200"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? <SunIcon /> : <MoonIcon />}
            </button>

            {/* WhatsApp CTA */}
            <a
              href={siteConfig.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl btn-whatsapp text-sm font-semibold text-white"
            >
              <MessageCircle size={16} />
              {tr.nav.whatsapp}
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden p-2 rounded-lg text-slate-400 hover:text-white hover:bg-white/5 transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden overflow-hidden bg-bg-surface/95 backdrop-blur-xl border-b border-white/[0.06]"
          >
            <div className="px-4 py-4 space-y-1">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="block px-4 py-3 text-sm text-slate-400 hover:text-white rounded-xl hover:bg-white/5 transition-all"
                >
                  {link.label}
                </a>
              ))}

              {/* Mobile lang + theme controls */}
              <div className="flex items-center gap-2 px-4 py-3">
                <div className="flex gap-0.5 p-1 rounded-xl bg-white/[0.05] border border-white/[0.07]">
                  {LANGS.map((l) => (
                    <button
                      key={l}
                      onClick={() => setLang(l)}
                      className={cn(
                        'px-2.5 py-1 rounded-lg text-[11px] font-semibold uppercase tracking-wider transition-all duration-200',
                        lang === l
                          ? 'bg-blue-500/20 text-blue-400 border border-blue-500/30'
                          : 'text-slate-500 hover:text-slate-300 hover:bg-white/[0.05]'
                      )}
                    >
                      {l}
                    </button>
                  ))}
                </div>
                <button
                  onClick={toggle}
                  className="p-2 rounded-xl bg-white/[0.05] border border-white/[0.07] text-slate-400 hover:text-white transition-all duration-200"
                  aria-label="Toggle theme"
                >
                  {theme === 'dark' ? <SunIcon /> : <MoonIcon />}
                </button>
              </div>

              <div className="pt-2">
                <a
                  href={siteConfig.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full py-3 rounded-xl btn-whatsapp text-sm font-semibold text-white"
                >
                  <MessageCircle size={16} />
                  {tr.nav.whatsapp}
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
