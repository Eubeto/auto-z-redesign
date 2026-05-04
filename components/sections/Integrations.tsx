'use client'

import { motion } from 'framer-motion'
import SectionLabel from '@/components/ui/SectionLabel'
import { integrations } from '@/lib/data'

const platformIcons: Record<string, string> = {
  Standvirtual: 'SV',
  OLX: 'OLX',
  AutoSapo: 'AS',
  Facebook: 'fb',
  WhatsApp: 'WA',
  Instagram: 'IN',
  Email: '✉',
}

export default function Integrations() {
  return (
    <section className="relative py-24 lg:py-32 bg-bg-base overflow-hidden">
      {/* Gradient accent */}
      <div
        className="absolute inset-x-0 top-0 h-px"
        style={{
          background:
            'linear-gradient(90deg, transparent, rgba(59,130,246,0.4), transparent)',
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="space-y-6"
          >
            <SectionLabel variant="blue">Integrações</SectionLabel>
            <h2 className="font-display text-4xl lg:text-5xl font-bold text-white leading-tight">
              Sem integrações complexas.{' '}
              <span className="text-gradient-brand">Tudo automático.</span>
            </h2>
            <p className="text-lg text-slate-400 leading-relaxed">
              O autoz captura leads de todos os canais onde o seu stand está
              presente — portais, redes sociais e mensagens — sem qualquer
              configuração técnica da sua parte.
            </p>

            {/* Feature list */}
            <div className="space-y-3 pt-2">
              {[
                'Activação em menos de 24 horas',
                'Sem intervenção técnica necessária',
                'Novos canais adicionados automaticamente',
                'Histórico unificado por lead',
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-blue-500/15 border border-blue-500/25 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                  </div>
                  <span className="text-sm text-slate-300">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right — Integration Cards */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <div className="grid grid-cols-3 sm:grid-cols-4 gap-3">
              {integrations.map((integration, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.07 }}
                  whileHover={{ scale: 1.05, y: -2 }}
                  className="glass-card rounded-2xl p-4 border border-white/[0.07] flex flex-col items-center gap-2.5 cursor-default group hover:border-blue-500/20 transition-all duration-300"
                >
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center text-xs font-bold text-white"
                    style={{ background: integration.color + '22', border: `1px solid ${integration.color}33` }}
                  >
                    <span style={{ color: integration.color }}>
                      {platformIcons[integration.name]}
                    </span>
                  </div>
                  <div className="text-center">
                    <p className="text-xs font-semibold text-slate-300 leading-tight">
                      {integration.name}
                    </p>
                    <p className="text-[10px] text-slate-600 mt-0.5">{integration.category}</p>
                  </div>
                </motion.div>
              ))}

              {/* "And more" card */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: integrations.length * 0.07 }}
                className="glass-card rounded-2xl p-4 border border-white/[0.07] flex flex-col items-center justify-center gap-1.5"
              >
                <span className="text-2xl">+</span>
                <p className="text-[10px] text-slate-500 text-center leading-tight">
                  Mais canais
                </p>
              </motion.div>
            </div>

            {/* Live indicator */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="mt-6 flex items-center gap-3 p-4 glass-card rounded-xl border border-white/[0.06]"
            >
              <span className="glow-dot" />
              <div>
                <p className="text-xs font-semibold text-white">
                  Resposta em tempo real
                </p>
                <p className="text-[11px] text-slate-500">
                  Mesmo às 3h da manhã ou ao domingo
                </p>
              </div>
              <div className="ml-auto text-right">
                <p className="text-xs font-bold text-green-400">&lt; 30s</p>
                <p className="text-[10px] text-slate-600">resposta</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
