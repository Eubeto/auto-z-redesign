'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, MessageCircle, CheckCircle } from 'lucide-react'
import GlowButton from '@/components/ui/GlowButton'
import { siteConfig } from '@/lib/data'
import { useLang } from '@/contexts/LangContext'

/* ─── Chat demo data ────────────────────────────────── */
const chatMessages = [
  { from: 'lead',  text: 'Olá, tenho interesse num BMW Série 3', time: '23:47' },
  { from: 'agent', text: 'Olá! Que orçamento tem em mente para este BMW?', time: '23:47' },
  { from: 'lead',  text: 'Até 28.000€', time: '23:48' },
  { from: 'agent', text: 'Temos 3 opções disponíveis. Prefere novo ou usado?', time: '23:48' },
  { from: 'lead',  text: 'Usado, com menos de 80.000 km', time: '23:49' },
]

/* ─── Floating metric cards ─────────────────────────── */
function FloatingCard({
  children,
  className,
  delay = 0,
  floatDir = 'up',
}: {
  children: React.ReactNode
  className?: string
  delay?: number
  floatDir?: 'up' | 'down'
}) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.88, y: floatDir === 'up' ? 12 : -12 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] }}
      className={`float-card rounded-2xl ${className}`}
      style={{
        animation: `${floatDir === 'up' ? 'float' : 'float-reverse'} ${6 + delay}s ease-in-out infinite`,
        animationDelay: `${delay}s`,
      }}
    >
      {children}
    </motion.div>
  )
}

/* ─── Agent demo card ───────────────────────────────── */
function AgentDemo() {
  const [visibleMessages, setVisibleMessages] = useState(0)

  useEffect(() => {
    const timers: ReturnType<typeof setTimeout>[] = []
    chatMessages.forEach((_, i) => {
      timers.push(setTimeout(() => setVisibleMessages(i + 1), 900 * (i + 1)))
    })
    return () => timers.forEach(clearTimeout)
  }, [])

  return (
    <div className="relative w-full max-w-sm mx-auto lg:mx-0 lg:ml-auto">
      {/* Floating metric — top right */}
      <FloatingCard
        className="absolute -top-5 -right-6 z-20 hidden xl:flex items-center gap-2.5 px-3.5 py-2.5"
        delay={1.4}
        floatDir="up"
      >
        <div className="w-2 h-2 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.9)]" />
        <div>
          <div className="text-[11px] font-bold text-white leading-none">0.4s</div>
          <div className="text-[9px] text-slate-500 mt-0.5">resposta média</div>
        </div>
      </FloatingCard>

      {/* Floating metric — bottom left */}
      <FloatingCard
        className="absolute -bottom-5 -left-6 z-20 hidden xl:flex items-center gap-2.5 px-3.5 py-2.5"
        delay={1.8}
        floatDir="down"
      >
        <div className="w-7 h-7 rounded-xl bg-blue-500/20 border border-blue-500/30 flex items-center justify-center flex-shrink-0">
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#60A5FA" strokeWidth="2.5">
            <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
            <polyline points="16 7 22 7 22 13" />
          </svg>
        </div>
        <div>
          <div className="text-[11px] font-bold text-white leading-none">+47 leads</div>
          <div className="text-[9px] text-slate-500 mt-0.5">qualificados hoje</div>
        </div>
      </FloatingCard>

      {/* Glow beneath card */}
      <div className="absolute inset-0 blur-3xl bg-blue-600/18 rounded-3xl scale-110 pointer-events-none" />

      {/* Main card */}
      <div className="relative glass-card rounded-2xl p-5 border border-white/[0.09]">
        {/* Card header */}
        <div className="flex items-center gap-3 mb-5 pb-4 border-b border-white/[0.06]">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center shadow-[0_4px_12px_rgba(59,130,246,0.4)]">
            <span className="text-xs font-bold text-white">AZ</span>
          </div>
          <div>
            <p className="text-sm font-semibold text-white">ATZ Agent</p>
            <div className="flex items-center gap-1.5 mt-0.5">
              <span className="glow-dot w-2 h-2" />
              <span className="text-xs text-slate-400">Ativo · Lead recebido</span>
            </div>
          </div>
          <div className="ml-auto text-right">
            <p className="text-[10px] text-slate-600">23:47</p>
            <p className="text-xs text-emerald-400 font-semibold">0.4s resposta</p>
          </div>
        </div>

        {/* Messages */}
        <div className="space-y-2.5 min-h-[180px]">
          {chatMessages.slice(0, visibleMessages).map((msg, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 8, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className={`flex ${msg.from === 'agent' ? 'justify-start' : 'justify-end'}`}
            >
              <div
                className={`max-w-[80%] px-3.5 py-2 rounded-2xl text-xs leading-relaxed ${
                  msg.from === 'agent'
                    ? 'bg-blue-500/12 text-blue-100 rounded-tl-sm border border-blue-500/18'
                    : 'bg-white/[0.08] text-slate-200 rounded-tr-sm border border-white/[0.06]'
                }`}
              >
                {msg.text}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Score footer */}
        {visibleMessages >= chatMessages.length && (
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="mt-4 pt-4 border-t border-white/[0.06] flex items-center justify-between"
          >
            <div className="flex items-center gap-2">
              <span className="text-xs text-slate-500">Score Lead:</span>
              <span className="px-2.5 py-1 bg-emerald-500/12 text-emerald-400 text-xs font-bold rounded-lg border border-emerald-500/22">
                HOT · 91
              </span>
            </div>
            <div className="flex items-center gap-1.5">
              <div className="w-1.5 h-1.5 rounded-full bg-blue-400" />
              <span className="text-xs text-slate-500">→ João Silva</span>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  )
}

/* ─── Background ────────────────────────────────────── */
function Background() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden>
      {/* Top-center spotlight — the key premium effect */}
      <div className="absolute inset-0 hero-spotlight" />

      {/* Ambient blobs */}
      <div className="absolute -top-32 -left-48 w-[700px] h-[700px] rounded-full bg-blue-700/10 blur-[120px] animate-blob-1" />
      <div className="absolute -bottom-48 -right-24 w-[600px] h-[600px] rounded-full bg-violet-700/9 blur-[110px] animate-blob-2" />
      <div className="absolute top-1/2 left-1/3 w-[400px] h-[400px] rounded-full bg-cyan-700/7 blur-[90px] animate-blob-3" />

      {/* Right glow near demo */}
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] rounded-full bg-blue-600/7 blur-[100px]" />

      {/* Dot grid */}
      <div className="absolute inset-0 grid-dots opacity-[0.045]" />

      {/* Top gradient fade */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-blue-500/30 to-transparent" />
    </div>
  )
}

/* ─── Animation variants ────────────────────────────── */
const containerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.11, delayChildren: 0.15 } },
}

const itemVariants = {
  hidden: { opacity: 0, y: 22 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } },
}

const statColors = ['text-blue-400', 'text-red-400', 'text-cyan-400', 'text-violet-400']

/* ─── Section ───────────────────────────────────────── */
export default function Hero() {
  const { tr } = useLang()

  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-bg-base pt-20">
      <Background />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* ── Left — Content ── */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="show"
            className="space-y-7"
          >
            {/* Badge with shimmer */}
            <motion.div variants={itemVariants}>
              <div className="hero-badge inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full relative">
                <span className="glow-dot w-2 h-2 relative z-10" />
                <span className="text-blue-400 text-xs font-semibold tracking-widest uppercase relative z-10">
                  {tr.hero.badge}
                </span>
              </div>
            </motion.div>

            {/* Headline */}
            <motion.div variants={itemVariants}>
              <h1 className="font-display text-5xl sm:text-6xl lg:text-[68px] font-bold leading-[1.05] tracking-tight">
                <span className="text-gradient-hero">{tr.hero.h1[0]}</span>
                <br />
                <span className="text-white">{tr.hero.h1[1]}</span>
                <br />
                <span className="text-gradient-brand">{tr.hero.h1[2]}</span>
              </h1>
            </motion.div>

            {/* Sub-heading */}
            <motion.div variants={itemVariants}>
              <p className="text-xl text-slate-300 font-medium">
                {tr.hero.subtitle}
              </p>
            </motion.div>

            {/* Body copy */}
            <motion.div variants={itemVariants}>
              <p className="text-base text-slate-400 leading-relaxed max-w-xl">
                {tr.hero.body}
              </p>
            </motion.div>

            {/* CTAs */}
            <motion.div variants={itemVariants} className="flex flex-wrap gap-3">
              <GlowButton
                variant="whatsapp"
                size="lg"
                href={siteConfig.whatsapp}
                icon={<MessageCircle size={18} />}
              >
                {tr.hero.ctaWhatsapp}
              </GlowButton>
              <GlowButton
                variant="outline"
                size="lg"
                href="#funcionalidades"
                icon={<ArrowRight size={18} />}
              >
                {tr.hero.ctaHow}
              </GlowButton>
            </motion.div>

            {/* Trust row */}
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap items-center gap-x-5 gap-y-2 pt-1"
            >
              {tr.hero.trust.map((item, i) => (
                <div key={i} className="flex items-center gap-1.5 text-xs text-slate-500">
                  <CheckCircle size={12} className="text-blue-500/80 flex-shrink-0" />
                  {item}
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* ── Right — Demo ── */}
          <motion.div
            initial={{ opacity: 0, x: 40, scale: 0.97 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.95, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
          >
            <AgentDemo />
          </motion.div>
        </div>

        {/* ── Stats row — floating cards ── */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.85 }}
          className="mt-20 grid grid-cols-2 lg:grid-cols-4 gap-4"
        >
          {tr.hero.stats.map((stat, i) => (
            <div
              key={i}
              className="relative glass-card rounded-2xl px-5 py-5 text-center border border-white/[0.07] overflow-hidden group hover:border-white/[0.12] transition-all duration-300"
            >
              {/* Hover glow */}
              <div className="absolute inset-0 bg-gradient-to-b from-blue-600/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <p className={`font-display text-2xl font-bold mb-1.5 ${statColors[i]}`}>
                {stat.value}
              </p>
              <p className="text-xs text-slate-500 leading-tight">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-bg-base to-transparent pointer-events-none" />
    </section>
  )
}
