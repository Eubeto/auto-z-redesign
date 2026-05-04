'use client'

import { motion } from 'framer-motion'
import SectionLabel from '@/components/ui/SectionLabel'
import { roiData } from '@/lib/data'

export default function ROI() {
  return (
    <section className="relative py-24 lg:py-32 bg-bg-base overflow-hidden">
      {/* Decorative line */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/8 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left — Costs */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="space-y-6"
          >
            <SectionLabel variant="blue">Retorno sobre Investimento</SectionLabel>
            <h2 className="font-display text-4xl lg:text-5xl font-bold text-white leading-tight">
              ROI positivo{' '}
              <span className="text-gradient-brand">desde o dia 1</span>
            </h2>
            <p className="text-lg text-slate-400 leading-relaxed">
              Um único carro não vendido paga vários meses de AUTO-Z. O investimento não é no plano — é nos leads que já não vai perder.
            </p>

            {/* Cost breakdown */}
            <div className="space-y-3 pt-2">
              <p className="text-xs text-slate-500 uppercase tracking-widest font-semibold mb-4">
                Custos actuais do seu stand
              </p>
              {roiData.costs.map((cost, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  className="flex items-center justify-between p-4 glass-card rounded-xl border border-red-500/8"
                >
                  <span className="text-sm text-slate-400">{cost.label}</span>
                  <span className="text-sm font-semibold text-red-400">{cost.value}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right — Benefits */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="space-y-4"
          >
            <p className="text-xs text-slate-500 uppercase tracking-widest font-semibold mb-6">
              Com AUTO-Z
            </p>

            {roiData.benefits.map((benefit, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="flex items-center gap-4 p-5 glass-card glass-card-hover rounded-2xl border border-green-500/10 group"
              >
                <div className="w-8 h-8 rounded-lg bg-green-500/15 border border-green-500/20 flex items-center justify-center flex-shrink-0">
                  <div className="w-2 h-2 rounded-full bg-green-400" />
                </div>
                <span className="text-sm text-slate-300 font-medium">{benefit}</span>
              </motion.div>
            ))}

            {/* Highlight card */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="mt-6 p-6 rounded-2xl bg-gradient-to-r from-blue-600/10 to-cyan-600/10 border border-blue-500/20"
            >
              <p className="text-sm text-slate-300 leading-relaxed">
                <span className="text-white font-semibold">Vendedores focados em fechar.</span>{' '}
                A IA trata de tudo o resto — qualificação, resposta, follow-up.
                Sem horas desperdiçadas. Sem leads perdidos.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
