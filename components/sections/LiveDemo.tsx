'use client'

import { useEffect, useRef, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Car, DollarSign, Phone, User, Zap, MessageCircle, MapPin, Clock } from 'lucide-react'
import SectionLabel from '@/components/ui/SectionLabel'
import { useLang } from '@/contexts/LangContext'

/* ─── Data ─────────────────────────────────────────── */

const chatFlow = [
  { from: 'lead' as const, text: 'Olá, tenho interesse num BMW Série 3', time: '23:47', delay: 0 },
  { from: 'agent' as const, text: 'Olá! 👋 Que orçamento tem em mente para este BMW?', time: '23:47', delay: 1600 },
  { from: 'lead' as const, text: 'Até 28.000€', time: '23:48', delay: 3200 },
  { from: 'agent' as const, text: 'Temos 3 opções disponíveis. Prefere novo ou usado?', time: '23:48', delay: 4800 },
  { from: 'lead' as const, text: 'Usado, com menos de 80.000 km', time: '23:49', delay: 6400 },
  { from: 'agent' as const, text: 'Perfeito! Temos um BMW 320d 2021 com 62.000 km a 26.900€. Quer agendar um test drive?', time: '23:49', delay: 8000 },
]

const crmFields = [
  { icon: User,          label: 'Nome',       value: 'João Silva',           color: 'text-blue-400',    delay: 300 },
  { icon: Phone,         label: 'Telefone',   value: '+351 912 345 678',     color: 'text-slate-400',   delay: 500 },
  { icon: MessageCircle, label: 'Canal',      value: 'WhatsApp',             color: 'text-emerald-400', delay: 700 },
  { icon: DollarSign,    label: 'Orçamento',  value: '28.000€',              color: 'text-emerald-400', delay: 3400 },
  { icon: Car,           label: 'Preferência',value: 'BMW S3 · Usado · <80k km', color: 'text-cyan-400', delay: 6600 },
  { icon: MapPin,        label: 'Fonte',      value: 'OLX Automóveis',       color: 'text-violet-400',  delay: 6800 },
]

const timeline = [
  { label: 'Lead recebido via WhatsApp',     time: '23:47', delay: 400 },
  { label: 'Perfil identificado automaticamente', time: '23:47', delay: 600 },
  { label: 'Qualificação iniciada',          time: '23:47', delay: 1700 },
  { label: 'Score calculado · HOT 91/100',   time: '23:49', delay: 7900 },
  { label: 'Atribuído → João Ferreira',      time: '23:49', delay: 8100 },
]

const SCORE_DELAY = 7800

/* ─── Sub-components ────────────────────────────────── */

function TypingDots() {
  return (
    <div className="flex justify-start">
      <div className="bg-white rounded-2xl rounded-tl-none px-4 py-3 shadow-sm">
        <div className="flex gap-1.5 items-center h-4">
          {[0, 150, 300].map((d) => (
            <span
              key={d}
              className="w-2 h-2 rounded-full bg-[#9AA3AC] inline-block animate-bounce"
              style={{ animationDelay: `${d}ms`, animationDuration: '900ms' }}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

function WhatsAppPhone({ visible, showTyping }: { visible: number; showTyping: boolean }) {
  const msgRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (msgRef.current) {
      msgRef.current.scrollTop = msgRef.current.scrollHeight
    }
  }, [visible, showTyping])

  return (
    <div className="relative mx-auto" style={{ width: 340 }}>
      {/* Ambient glow beneath phone */}
      <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-64 h-16 bg-emerald-500/25 blur-3xl rounded-full pointer-events-none" />
      <div className="absolute -inset-4 blur-2xl bg-emerald-900/20 rounded-[4rem] pointer-events-none" />

      {/* ── Outer frame (titanium/metal gradient) ── */}
      <div
        className="relative"
        style={{
          borderRadius: '3.4rem',
          padding: '3px',
          background: 'linear-gradient(160deg, #5a5a5a 0%, #2a2a2a 40%, #1a1a1a 70%, #3a3a3a 100%)',
          boxShadow: '0 60px 120px rgba(0,0,0,0.85), 0 20px 40px rgba(0,0,0,0.6), inset 0 1px 0 rgba(255,255,255,0.12)',
        }}
      >
        {/* ── Inner black bezel ── */}
        <div
          className="bg-black overflow-hidden relative"
          style={{ borderRadius: '3.2rem', padding: '10px' }}
        >
          {/* Screen glare overlay */}
          <div
            className="absolute inset-0 pointer-events-none z-10"
            style={{
              borderRadius: '3.2rem',
              background: 'linear-gradient(135deg, rgba(255,255,255,0.04) 0%, transparent 50%)',
            }}
          />

          {/* ── Screen content ── */}
          <div className="bg-[#ECE5DD] overflow-hidden relative" style={{ borderRadius: '2.5rem' }}>

            {/* ── Status bar with Dynamic Island ── */}
            <div className="relative bg-[#075E54] h-12 flex items-center px-6">
              {/* Time — left */}
              <span className="text-white text-[12px] font-semibold z-20 relative">23:47</span>

              {/* Dynamic Island — center */}
              <div
                className="absolute left-1/2 -translate-x-1/2 top-[6px] bg-black z-30 flex items-center justify-center gap-1.5"
                style={{ width: 110, height: 30, borderRadius: 20 }}
              >
                <div className="w-2 h-2 rounded-full bg-[#1a1a1a] border border-[#2a2a2a]" />
                <div className="w-3 h-3 rounded-full bg-[#111] border border-[#222]" />
              </div>

              {/* Icons — right */}
              <div className="ml-auto flex items-center gap-1.5 z-20 relative">
                {/* Signal bars */}
                <svg width="16" height="11" viewBox="0 0 16 11" fill="white">
                  <rect x="0"   y="5" width="3" height="6" rx="0.8" />
                  <rect x="4.5" y="3" width="3" height="8" rx="0.8" />
                  <rect x="9"   y="1" width="3" height="10" rx="0.8" />
                  <rect x="13.5" y="0" width="2.5" height="11" rx="0.8" opacity="0.3" />
                </svg>
                {/* WiFi */}
                <svg width="14" height="10" viewBox="0 0 24 17" fill="none" strokeLinecap="round">
                  <path d="M1 5.5C5.5 1 18.5 1 23 5.5"   stroke="rgba(255,255,255,0.35)" strokeWidth="2.8"/>
                  <path d="M4.5 9.5c4-3.5 11-3.5 15 0"   stroke="rgba(255,255,255,0.65)" strokeWidth="2.8"/>
                  <path d="M8.5 13.5c2-1.8 5-1.8 7 0"    stroke="white"                  strokeWidth="2.8"/>
                  <circle cx="12" cy="17" r="2" fill="white" />
                </svg>
                {/* Battery */}
                <div className="flex items-center gap-[1px]">
                  <div className="relative flex items-center border border-white/70 rounded-[3px]" style={{ width: 22, height: 11 }}>
                    <div className="m-[1.5px] rounded-[1.5px] bg-white" style={{ width: '75%', height: 'calc(100% - 3px)' }} />
                  </div>
                  <div className="w-[2px] h-[5px] bg-white/50 rounded-r-sm" />
                </div>
              </div>
            </div>

            {/* ── WA Chat Header ── */}
            <div className="bg-[#075E54] px-4 py-3 flex items-center gap-3 shadow-sm">
              {/* Back arrow */}
              <button className="text-white/80 p-0.5 flex-shrink-0">
                <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M19 12H5M12 5l-7 7 7 7" />
                </svg>
              </button>

              {/* Avatar */}
              <div className="relative flex-shrink-0">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-cyan-400 flex items-center justify-center shadow-md ring-2 ring-white/20">
                  <span className="text-white text-[11px] font-bold tracking-tight">AZ</span>
                </div>
                <div className="absolute -bottom-0.5 -right-0.5 w-3.5 h-3.5 rounded-full bg-[#25D366] border-2 border-[#075E54]" />
              </div>

              {/* Name & status */}
              <div className="flex-1 min-w-0">
                <div className="text-white text-[13.5px] font-semibold leading-tight">Auto-Z Agent</div>
                <div className="text-[#A8D5C9] text-[10.5px] mt-0.5">online agora · resposta imediata</div>
              </div>

              {/* Action icons */}
              <div className="flex gap-4 ml-1 flex-shrink-0">
                <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.8)" strokeWidth="2" strokeLinecap="round">
                  <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 014.69 12a19.79 19.79 0 01-3.07-8.67A2 2 0 013.6 1.18l3-.02a2 2 0 012 1.72c.13.96.36 1.9.71 2.81a2 2 0 01-.45 2.11L7.91 8.91a16 16 0 006 6l1.27-.95a2 2 0 012.11-.45c.91.35 1.85.58 2.81.71a2 2 0 011.72 2.02z"/>
                </svg>
                <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.8)" strokeWidth="2">
                  <circle cx="12" cy="5"  r="1.2" fill="rgba(255,255,255,0.8)" />
                  <circle cx="12" cy="12" r="1.2" fill="rgba(255,255,255,0.8)" />
                  <circle cx="12" cy="19" r="1.2" fill="rgba(255,255,255,0.8)" />
                </svg>
              </div>
            </div>

            {/* ── Date chip ── */}
            <div
              className="flex justify-center py-2.5"
              style={{
                background: '#ECE5DD',
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23C9BFB5' fill-opacity='0.25'%3E%3Ccircle cx='20' cy='20' r='1'/%3E%3C/g%3E%3C/svg%3E")`,
              }}
            >
              <span className="px-3.5 py-1 rounded-full bg-[#CEC2B8] text-[10px] text-[#6B6258] font-medium shadow-sm">
                Hoje
              </span>
            </div>

            {/* ── Messages ── */}
            <div
              ref={msgRef}
              className="overflow-y-auto px-3 pt-1 pb-2 space-y-2 scroll-smooth"
              style={{
                height: 400,
                scrollbarWidth: 'none',
                background: '#ECE5DD',
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23C9BFB5' fill-opacity='0.22'%3E%3Ccircle cx='20' cy='20' r='1'/%3E%3C/g%3E%3C/svg%3E")`,
              }}
            >
              <AnimatePresence initial={false}>
                {chatFlow.slice(0, visible).map((msg, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0.86, y: 12 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    transition={{ type: 'spring', stiffness: 500, damping: 38 }}
                    className={`flex ${msg.from === 'agent' ? 'justify-start' : 'justify-end'}`}
                  >
                    <div
                      className={`max-w-[82%] px-3.5 py-2.5 text-[13px] leading-relaxed text-[#111] ${
                        msg.from === 'agent'
                          ? 'bg-white rounded-[18px] rounded-tl-[4px] shadow-[0_1px_2px_rgba(0,0,0,0.13)]'
                          : 'bg-[#DCF8C6] rounded-[18px] rounded-tr-[4px] shadow-[0_1px_2px_rgba(0,0,0,0.10)]'
                      }`}
                    >
                      <p>{msg.text}</p>
                      <div className={`text-[9.5px] mt-1 flex gap-1 items-center ${
                        msg.from === 'lead' ? 'justify-end text-[#8c8c8c]' : 'text-[#a0a0a0]'
                      }`}>
                        {msg.time}
                        {msg.from === 'lead' && (
                          <svg width="15" height="10" viewBox="0 0 16 11" fill="#53BDEB">
                            <path d="M11.071.552L4.715 7.456 1.429 4.06.367 5.158l4.348 4.557 7.418-7.962z" />
                            <path d="M15.071.552L8.715 7.456 7.715 6.4l-1 1.056 2.348 2.258 7.069-7.587z" />
                          </svg>
                        )}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>

              {showTyping && (
                <motion.div
                  key="typing"
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                >
                  <TypingDots />
                </motion.div>
              )}
            </div>

            {/* ── Input bar ── */}
            <div className="bg-[#F0F0F0] px-3 py-2.5 flex items-center gap-2.5 border-t border-black/[0.07]">
              {/* Emoji */}
              <button className="flex-shrink-0 text-[#8696A0]">
                <svg width="23" height="23" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                  <circle cx="12" cy="12" r="10" />
                  <path d="M8 13s1.5 2 4 2 4-2 4-2" strokeLinecap="round" />
                  <circle cx="9" cy="10" r="1" fill="currentColor" />
                  <circle cx="15" cy="10" r="1" fill="currentColor" />
                </svg>
              </button>

              {/* Text field */}
              <div className="flex-1 bg-white rounded-full px-4 py-2 flex items-center">
                <span className="text-[12px] text-[#b0b0b0] flex-1">Mensagem</span>
                {/* Paperclip */}
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#8696A0" strokeWidth="1.8" strokeLinecap="round">
                  <path d="M21.44 11.05l-9.19 9.19a6 6 0 01-8.49-8.49l9.19-9.19a4 4 0 015.66 5.66l-9.2 9.19a2 2 0 01-2.83-2.83l8.49-8.48" />
                </svg>
              </div>

              {/* Camera */}
              <button className="flex-shrink-0 text-[#8696A0]">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                  <path d="M23 19a2 2 0 01-2 2H3a2 2 0 01-2-2V8a2 2 0 012-2h4l2-3h6l2 3h4a2 2 0 012 2z" />
                  <circle cx="12" cy="13" r="4" />
                </svg>
              </button>

              {/* Mic / Send */}
              <div className="w-10 h-10 rounded-full bg-[#25D366] flex items-center justify-center flex-shrink-0 shadow-md">
                <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.2" strokeLinecap="round">
                  <path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z" />
                  <path d="M19 10v2a7 7 0 0 1-14 0v-2" />
                  <line x1="12" y1="19" x2="12" y2="23" />
                  <line x1="8"  y1="23" x2="16" y2="23" />
                </svg>
              </div>
            </div>

          </div>{/* end screen */}
        </div>{/* end inner bezel */}

        {/* ── Side buttons ── */}
        {/* Silent switch */}
        <div className="absolute -left-[4px] top-[88px] w-[4px] h-7 rounded-l-sm"
          style={{ background: 'linear-gradient(to right, #555, #444)' }} />
        {/* Volume down */}
        <div className="absolute -left-[4px] top-[132px] w-[4px] h-14 rounded-l-sm"
          style={{ background: 'linear-gradient(to right, #555, #444)' }} />
        {/* Volume up */}
        <div className="absolute -left-[4px] top-[196px] w-[4px] h-14 rounded-l-sm"
          style={{ background: 'linear-gradient(to right, #555, #444)' }} />
        {/* Power */}
        <div className="absolute -right-[4px] top-[148px] w-[4px] h-20 rounded-r-sm"
          style={{ background: 'linear-gradient(to left, #555, #444)' }} />

      </div>{/* end outer frame */}
    </div>
  )
}

function CrmPanel({
  fieldsVisible,
  timelineVisible,
  scoreVisible,
}: {
  fieldsVisible: number
  timelineVisible: number
  scoreVisible: boolean
}) {
  return (
    <div className="relative w-full h-full">
      {/* Glow */}
      <div className="absolute -inset-6 blur-3xl bg-blue-600/20 rounded-full pointer-events-none" />

      <div className="relative glass-card rounded-2xl overflow-hidden border border-white/[0.10] h-full flex flex-col">
        {/* Header */}
        <div className="bg-gradient-to-br from-blue-600 to-blue-800 px-6 py-5 border-b border-white/[0.08] flex-shrink-0">
          <div className="flex items-center gap-4">
            <div className="w-11 h-11 rounded-2xl bg-white/15 border border-white/25 flex items-center justify-center flex-shrink-0">
              <Zap size={18} className="text-white" />
            </div>
            <div className="flex-1 min-w-0">
              <div className="text-white font-bold text-base leading-tight">Lead Automático · CRM</div>
              <div className="flex items-center gap-1.5 mt-1">
                <span className="glow-dot w-2 h-2" />
                <span className="text-white/65 text-xs">Dados capturados em tempo real</span>
              </div>
            </div>
            <div className="text-right flex-shrink-0">
              <div className="text-white/35 text-[10px] uppercase tracking-widest">Lead</div>
              <div className="text-white/80 text-sm font-mono font-bold">#4827</div>
              <div className="text-white/50 text-[10px] mt-0.5">GTBAuto</div>
            </div>
          </div>
        </div>

        <div className="flex-1 overflow-y-auto p-5 space-y-4" style={{ scrollbarWidth: 'none' }}>
          {/* Fields grid */}
          <div>
            <div className="text-[10px] text-slate-600 uppercase tracking-widest mb-3 font-semibold">Dados do Lead</div>
            <div className="space-y-2">
              <AnimatePresence>
                {crmFields.slice(0, fieldsVisible).map(({ icon: Icon, label, value, color }, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -14, height: 0 }}
                    animate={{ opacity: 1, x: 0, height: 'auto' }}
                    transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                    className="overflow-hidden"
                  >
                    <div className="flex items-center gap-3 px-4 py-3 rounded-xl bg-white/[0.04] border border-white/[0.06]">
                      <div className={`w-9 h-9 rounded-xl bg-white/[0.05] border border-white/[0.08] flex items-center justify-center flex-shrink-0`}>
                        <Icon size={15} className={color} />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="text-[10px] text-slate-600 uppercase tracking-widest">{label}</div>
                        <div className="text-sm font-medium text-slate-100 truncate mt-0.5">{value}</div>
                      </div>
                      <div className="w-5 h-5 rounded-full bg-emerald-500/15 border border-emerald-500/25 flex items-center justify-center flex-shrink-0">
                        <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#22C55E" strokeWidth="3">
                          <path d="M20 6L9 17l-5-5" />
                        </svg>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>

              {fieldsVisible === 0 && (
                <div className="flex flex-col items-center justify-center py-8 gap-2">
                  <div className="w-10 h-10 rounded-xl bg-white/[0.03] border border-white/[0.05] flex items-center justify-center">
                    <Clock size={18} className="text-slate-700" />
                  </div>
                  <p className="text-sm text-slate-700">A aguardar dados...</p>
                </div>
              )}
            </div>
          </div>

          {/* Score */}
          <AnimatePresence>
            {scoreVisible && (
              <motion.div
                initial={{ opacity: 0, scale: 0.92, y: 8 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ type: 'spring', stiffness: 320, damping: 22 }}
              >
                <div className="text-[10px] text-slate-600 uppercase tracking-widest mb-3 font-semibold">Score & Atribuição</div>
                <div className="p-4 rounded-xl bg-amber-500/[0.09] border border-amber-500/[0.22]">
                  <div className="flex items-center justify-between gap-4">
                    <div>
                      <div className="text-[10px] text-amber-500/60 uppercase tracking-widest mb-2">Score Lead</div>
                      <div className="flex items-center gap-2.5">
                        <span className="px-3 py-1.5 rounded-xl bg-amber-500/15 border border-amber-500/30 text-amber-400 text-xs font-bold">
                          🔥 HOT
                        </span>
                        <span className="font-display text-3xl font-bold text-amber-400">91</span>
                        <span className="text-amber-400/40">/100</span>
                      </div>
                    </div>
                    <div className="w-px h-12 bg-white/[0.06]" />
                    <div className="text-right">
                      <div className="text-[10px] text-slate-600 mb-1.5">Atribuído a</div>
                      <div className="text-sm font-semibold text-slate-200">João Ferreira</div>
                      <div className="text-[10px] text-emerald-400 mt-1 flex items-center gap-1 justify-end">
                        <span className="glow-dot w-1.5 h-1.5" />
                        Notificado · 0.4s
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Timeline */}
          {timelineVisible > 0 && (
            <div>
              <div className="text-[10px] text-slate-600 uppercase tracking-widest mb-3 font-semibold">Actividade</div>
              <div className="space-y-0">
                <AnimatePresence>
                  {timeline.slice(0, timelineVisible).map((item, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -8 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, ease: 'easeOut' }}
                      className="flex gap-3 relative"
                    >
                      <div className="flex flex-col items-center flex-shrink-0">
                        <div className={`w-2 h-2 rounded-full mt-1.5 flex-shrink-0 ${
                          i === timelineVisible - 1
                            ? 'bg-blue-400 shadow-[0_0_6px_rgba(96,165,250,0.8)]'
                            : 'bg-slate-700'
                        }`} />
                        {i < timelineVisible - 1 && (
                          <div className="w-px flex-1 bg-white/[0.05] my-1" style={{ minHeight: 16 }} />
                        )}
                      </div>
                      <div className="pb-3 flex-1">
                        <div className="flex items-center justify-between gap-2">
                          <span className={`text-xs ${i === timelineVisible - 1 ? 'text-slate-300' : 'text-slate-500'}`}>
                            {item.label}
                          </span>
                          <span className="text-[10px] text-slate-700 flex-shrink-0 font-mono">{item.time}</span>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </AnimatePresence>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

/* ─── Main section ──────────────────────────────────── */

export default function LiveDemo() {
  const { tr } = useLang()
  const [phase, setPhase] = useState<'idle' | 'running' | 'done'>('idle')
  const [visibleMessages, setVisibleMessages] = useState(0)
  const [fieldsVisible, setFieldsVisible] = useState(0)
  const [timelineVisible, setTimelineVisible] = useState(0)
  const [scoreVisible, setScoreVisible] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)
  const started = useRef(false)

  const lastMsg = visibleMessages > 0 ? chatFlow[visibleMessages - 1] : null
  const nextMsg = visibleMessages < chatFlow.length ? chatFlow[visibleMessages] : null
  const showTyping = lastMsg?.from === 'lead' && nextMsg?.from === 'agent'

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true
          setPhase('running')
        }
      },
      { threshold: 0.2 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (phase !== 'running') return
    const t: ReturnType<typeof setTimeout>[] = []

    chatFlow.forEach((msg, i) => {
      t.push(setTimeout(() => setVisibleMessages(i + 1), msg.delay))
    })
    crmFields.forEach((field, i) => {
      t.push(setTimeout(() => setFieldsVisible(i + 1), field.delay))
    })
    timeline.forEach((item, i) => {
      t.push(setTimeout(() => setTimelineVisible(i + 1), item.delay))
    })
    t.push(setTimeout(() => {
      setScoreVisible(true)
      setPhase('done')
    }, SCORE_DELAY))

    return () => t.forEach(clearTimeout)
  }, [phase])

  const replay = () => {
    setVisibleMessages(0)
    setFieldsVisible(0)
    setTimelineVisible(0)
    setScoreVisible(false)
    setPhase('idle')
    setTimeout(() => setPhase('running'), 200)
  }

  return (
    <section ref={sectionRef} className="relative py-24 lg:py-32 bg-bg-surface overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[500px] bg-blue-700/5 blur-[120px] rounded-full" />
        <div className="absolute top-1/3 -left-32 w-[400px] h-[400px] rounded-full bg-emerald-700/6 blur-[100px]" />
        <div className="absolute bottom-0 -right-32 w-[400px] h-[400px] rounded-full bg-blue-700/6 blur-[100px]" />
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.9) 1px, transparent 1px)',
            backgroundSize: '36px 36px',
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center space-y-4 mb-16"
        >
          <SectionLabel variant="green" className="mx-auto">
            {tr.liveDemo.label}
          </SectionLabel>
          <h2 className="font-display text-4xl lg:text-5xl font-bold text-white">
            {tr.liveDemo.title}{' '}
            <span className="text-gradient-brand">{tr.liveDemo.titleAccent}</span>
          </h2>
          <p className="text-lg text-slate-400 max-w-lg mx-auto">
            {tr.liveDemo.subtitle}
          </p>
        </motion.div>

        {/* Demo grid */}
        <div className="grid lg:grid-cols-[360px_1fr] gap-8 lg:gap-12 items-start max-w-5xl mx-auto">
          {/* Phone */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <WhatsAppPhone visible={visibleMessages} showTyping={showTyping} />
          </motion.div>

          {/* CRM */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="h-full"
          >
            <CrmPanel
              fieldsVisible={fieldsVisible}
              timelineVisible={timelineVisible}
              scoreVisible={scoreVisible}
            />
          </motion.div>
        </div>

        {/* Replay */}
        {phase === 'done' && (
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="text-center mt-12"
          >
            <button
              onClick={replay}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white/[0.05] border border-white/[0.09] text-sm text-slate-400 hover:text-white hover:bg-white/[0.10] transition-all duration-200"
            >
              {tr.liveDemo.replay}
            </button>
          </motion.div>
        )}

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-16 grid grid-cols-3 gap-4 max-w-xl mx-auto"
        >
          {tr.liveDemo.stats.map((stat, i) => (
            <div key={i} className="text-center p-5 glass-card rounded-2xl border border-white/[0.07]">
              <p className="font-display text-2xl font-bold text-gradient-brand mb-1">{stat.value}</p>
              <p className="text-[11px] text-slate-500">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
