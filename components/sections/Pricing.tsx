'use client'

import { motion } from 'framer-motion'
import { Check, MessageCircle, ArrowRight } from 'lucide-react'
import SectionLabel from '@/components/ui/SectionLabel'
import Badge from '@/components/ui/Badge'
import { plans, siteConfig } from '@/lib/data'

export default function Pricing() {
  return (
    <section id="precos" className="relative py-24 lg:py-32 bg-bg-base overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-blue-500/30 to-transparent" />
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-blue-700/5 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center space-y-5 mb-16"
        >
          <SectionLabel variant="violet" className="mx-auto">
            Preços
          </SectionLabel>
          <h2 className="font-display text-4xl lg:text-5xl font-bold text-white leading-tight">
            Escolha o plano{' '}
            <span className="text-gradient-brand">certo para o seu stand</span>
          </h2>
          <p className="text-lg text-slate-400 max-w-xl mx-auto">
            O custo real não está no plano. Está nos leads perdidos.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-5 lg:gap-6 mb-12">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.12 }}
              className={`relative rounded-2xl flex flex-col transition-all duration-300 ${
                plan.highlighted
                  ? 'bg-gradient-to-b from-blue-600/10 to-bg-card border-2 border-blue-500/40 shadow-glow-blue'
                  : 'glass-card border border-white/[0.07] glass-card-hover'
              }`}
            >
              {/* Featured glow ring */}
              {plan.highlighted && (
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-blue-600/5 to-transparent pointer-events-none" />
              )}

              <div className="relative p-7 flex flex-col flex-1">
                {/* Badge */}
                {plan.badge && (
                  <div className="mb-4">
                    <Badge variant="featured">{plan.badge}</Badge>
                  </div>
                )}

                {/* Plan name & focus */}
                <div className="mb-6">
                  <h3 className="font-display text-xl font-bold text-white mb-1">
                    {plan.name}
                  </h3>
                  <p className="text-xs text-slate-500">{plan.target}</p>
                </div>

                {/* Price */}
                <div className="mb-2">
                  {plan.price === 'Custom' ? (
                    <div className="font-display text-4xl font-bold text-white">
                      Custom
                    </div>
                  ) : (
                    <div className="flex items-end gap-1">
                      <span className="font-display text-4xl font-bold text-white">
                        €{plan.price}
                      </span>
                      <span className="text-slate-500 text-sm mb-2">/{plan.period}</span>
                      <span className="text-slate-600 text-xs mb-2">+ IVA</span>
                    </div>
                  )}
                </div>

                {/* Focus */}
                <p className="text-sm font-medium text-blue-400 mb-6">{plan.focus}</p>

                {/* Features */}
                <ul className="space-y-3 mb-6 flex-1">
                  {plan.features.map((feature, fi) => (
                    <li key={fi} className="flex items-start gap-2.5 text-sm text-slate-300">
                      <Check
                        size={15}
                        className={`flex-shrink-0 mt-0.5 ${
                          plan.highlighted ? 'text-blue-400' : 'text-slate-500'
                        }`}
                      />
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* Limitation / Insight */}
                {(plan.limitation || plan.insight) && (
                  <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/[0.06] mb-6">
                    <p className="text-xs text-slate-500 leading-relaxed italic">
                      {plan.limitation || plan.insight}
                    </p>
                  </div>
                )}

                {/* CTA */}
                <a
                  href={siteConfig.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`mt-auto inline-flex items-center justify-center gap-2 w-full py-3.5 rounded-xl text-sm font-semibold transition-all duration-300 ${
                    plan.ctaVariant === 'primary'
                      ? 'btn-primary text-white'
                      : plan.ctaVariant === 'whatsapp'
                      ? 'btn-whatsapp text-white'
                      : 'border border-white/15 text-slate-300 hover:border-blue-500/40 hover:text-white hover:bg-blue-500/5'
                  }`}
                >
                  {plan.ctaVariant === 'whatsapp' && <MessageCircle size={15} />}
                  {plan.cta}
                  {plan.ctaVariant !== 'whatsapp' && <ArrowRight size={15} />}
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Pro comparison — expanded */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          {/* Section intro */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold tracking-widest uppercase mb-5">
              <span className="glow-dot w-1.5 h-1.5" />
              Starter vs Pro
            </div>
            <h3 className="font-display text-2xl lg:text-3xl font-bold text-white mb-2">
              Porque a maioria escolhe{' '}
              <span className="text-gradient-brand">Pro</span>
            </h3>
            <p className="text-slate-500 text-sm max-w-md mx-auto">
              A diferença não está no preço — está no que acontece a cada lead.
            </p>
          </div>

          {/* Comparison table */}
          <div className="glass-card rounded-2xl overflow-hidden border border-white/[0.07]">
            {/* Header row */}
            <div className="grid grid-cols-[1fr_140px_160px] lg:grid-cols-[1fr_180px_200px] bg-white/[0.025] border-b border-white/[0.06] px-5 py-3.5">
              <div className="text-[10px] font-semibold text-slate-600 uppercase tracking-widest">
                Cenário real
              </div>
              <div className="text-center">
                <span className="px-3 py-1 rounded-lg bg-white/[0.05] border border-white/[0.08] text-[10px] font-semibold text-slate-400 uppercase tracking-wide">
                  Starter
                </span>
              </div>
              <div className="text-center">
                <span className="px-3 py-1 rounded-lg bg-blue-500/15 border border-blue-500/30 text-[10px] font-semibold text-blue-400 uppercase tracking-wide">
                  Pro ✦
                </span>
              </div>
            </div>

            {[
              {
                scenario: 'Lead chega às 23h',
                starter: 'Responde automaticamente',
                pro: 'Responde, qualifica e prioriza',
                proHighlight: true,
              },
              {
                scenario: '5 leads simultâneos',
                starter: 'Responde sequencialmente',
                pro: 'Todos tratados em paralelo',
                proHighlight: true,
              },
              {
                scenario: 'Lead não responde em 24h',
                starter: 'Aguarda indefinidamente',
                pro: 'Re-engagement automático',
                proHighlight: true,
              },
              {
                scenario: 'Orçamento fora do stock',
                starter: 'Informa o cliente',
                pro: 'Sugere 3 alternativas com fit',
                proHighlight: true,
              },
              {
                scenario: 'Lead HOT identificado',
                starter: 'Marca como interessante',
                pro: 'Notifica + rota ao vendedor certo',
                proHighlight: true,
              },
              {
                scenario: 'Múltiplos canais (WA + email)',
                starter: 'Só WhatsApp',
                pro: 'WhatsApp + email + SMS',
                proHighlight: true,
              },
              {
                scenario: 'Relatório de conversão',
                starter: 'Básico mensal',
                pro: 'Dashboard live + score por lead',
                proHighlight: true,
              },
              {
                scenario: 'Integração CRM',
                starter: '—',
                pro: 'Sim, em tempo real',
                proHighlight: true,
              },
            ].map((row, i) => (
              <div
                key={i}
                className={`grid grid-cols-[1fr_140px_160px] lg:grid-cols-[1fr_180px_200px] px-5 py-4 border-b border-white/[0.04] items-center transition-colors duration-200 hover:bg-white/[0.02] ${
                  i % 2 === 0 ? 'bg-transparent' : 'bg-white/[0.01]'
                }`}
              >
                <div className="text-[13px] text-slate-300 font-medium pr-4">
                  {row.scenario}
                </div>
                <div className="text-center px-2">
                  <span
                    className={`text-[12px] ${
                      row.starter === '—'
                        ? 'text-slate-700 text-base'
                        : 'text-slate-500'
                    }`}
                  >
                    {row.starter}
                  </span>
                </div>
                <div className="text-center px-2">
                  <span className="text-[12px] text-blue-400 font-medium">
                    {row.pro}
                  </span>
                </div>
              </div>
            ))}

            {/* Summary strip */}
            <div className="grid grid-cols-[1fr_140px_160px] lg:grid-cols-[1fr_180px_200px] bg-white/[0.03] px-5 py-4 border-t border-white/[0.07]">
              <div className="text-[11px] text-slate-600 font-semibold uppercase tracking-widest">
                Em resumo
              </div>
              <div className="text-center">
                <span className="text-[12px] text-slate-500 italic">Reactivo</span>
              </div>
              <div className="text-center">
                <span className="text-[12px] text-blue-400 font-semibold">Estratégico</span>
              </div>
            </div>
          </div>

          {/* Bottom CTA bar */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="mt-4 flex flex-col sm:flex-row items-center gap-4 p-5 rounded-2xl bg-blue-500/[0.05] border border-blue-500/[0.18]"
          >
            <div className="w-10 h-10 rounded-xl bg-blue-500/15 border border-blue-500/20 flex items-center justify-center flex-shrink-0">
              <ArrowRight size={16} className="text-blue-400" />
            </div>
            <div className="flex-1 text-center sm:text-left">
              <p className="text-sm font-semibold text-white">
                92% dos stands que testam Starter passam a Pro em 60 dias
              </p>
              <p className="text-xs text-slate-500 mt-0.5">
                A diferença de conversão é imediata e mensurável.
              </p>
            </div>
            <a
              href={siteConfig.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary flex-shrink-0 inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold text-white"
            >
              Começar no Pro
              <ArrowRight size={14} />
            </a>
          </motion.div>
        </motion.div>

        <p className="text-center text-xs text-slate-600 mt-8">
          Valores acrescem IVA à taxa legal em vigor. Preços para empresas. IVA dedutível nos termos legais.
        </p>
      </div>
    </section>
  )
}
