'use client'

import { motion } from 'framer-motion'
import { MessageCircle, CheckCircle } from 'lucide-react'
import { siteConfig } from '@/lib/data'

export default function FinalCTA() {
  return (
    <section
      id="contacto"
      className="relative py-24 lg:py-32 overflow-hidden bg-bg-base"
    >
      {/* Background effects */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-blue-500/30 to-transparent" />
        <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-[900px] h-[500px] bg-blue-700/8 blur-[120px] rounded-full" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[300px] bg-violet-700/6 blur-[80px] rounded-full" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[300px] bg-cyan-700/6 blur-[80px] rounded-full" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="space-y-8"
        >
          {/* Label */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-green-500/25 bg-green-500/8 text-green-400 text-xs font-semibold tracking-widest uppercase">
            <span className="glow-dot" />
            Diagnóstico Gratuito
          </div>

          {/* Headline */}
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight">
            Quer saber quantos leads
            <br />
            <span className="text-gradient-brand">o seu stand está a perder?</span>
          </h2>

          {/* Description */}
          <p className="text-lg lg:text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed">
            Fazemos um diagnóstico gratuito ao seu fluxo de leads e mostramos
            onde o dinheiro está a escapar.
          </p>

          {/* CTA */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <motion.a
              href={siteConfig.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-8 py-4 rounded-xl btn-whatsapp text-white font-semibold text-base"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <MessageCircle size={20} />
              Falar connosco no WhatsApp
            </motion.a>
          </div>

          {/* Trust */}
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
            {['Sem compromisso', 'Resposta imediata', 'ROI em menos de 30 dias'].map(
              (item, i) => (
                <div key={i} className="flex items-center gap-1.5 text-sm text-slate-500">
                  <CheckCircle size={13} className="text-green-500" />
                  {item}
                </div>
              )
            )}
          </div>

          {/* Differentiators */}
          <div className="pt-8 border-t border-white/[0.06]">
            <p className="text-xs text-slate-600 uppercase tracking-widest mb-6 font-semibold">
              Porque AUTO-Z é diferente
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 max-w-3xl mx-auto">
              {[
                'Treinado para o mercado português',
                'Construído de raiz para stands',
                'Implementação assistida incluída',
                'Skills personalizadas',
                'Foco em vendas perdidas',
                'Sem dependência técnica',
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex items-center gap-2 p-3 glass-card rounded-xl border border-white/[0.05] text-left"
                >
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-500 flex-shrink-0" />
                  <span className="text-xs text-slate-400">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
