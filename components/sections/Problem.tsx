'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Inbox, AlertTriangle, TrendingUp, Clock } from 'lucide-react'
import SectionLabel from '@/components/ui/SectionLabel'
import AnimatedNumber from '@/components/ui/AnimatedNumber'
import { problemStats, problemsResolved } from '@/lib/data'

const icons = [Inbox, AlertTriangle, TrendingUp, Clock]

const colorMap = {
  blue: {
    text: 'text-blue-400',
    glow: 'shadow-[0_0_40px_rgba(59,130,246,0.12)]',
    border: 'border-blue-500/15',
    icon: 'text-blue-400 bg-blue-500/10',
  },
  red: {
    text: 'text-red-400',
    glow: 'shadow-[0_0_40px_rgba(239,68,68,0.10)]',
    border: 'border-red-500/15',
    icon: 'text-red-400 bg-red-500/10',
  },
  cyan: {
    text: 'text-cyan-400',
    glow: 'shadow-[0_0_40px_rgba(6,182,212,0.10)]',
    border: 'border-cyan-500/15',
    icon: 'text-cyan-400 bg-cyan-500/10',
  },
  violet: {
    text: 'text-violet-400',
    glow: 'shadow-[0_0_40px_rgba(139,92,246,0.10)]',
    border: 'border-violet-500/15',
    icon: 'text-violet-400 bg-violet-500/10',
  },
}

const cardVariants = {
  hidden: { opacity: 0, y: 32 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.12, ease: [0.16, 1, 0.3, 1] },
  }),
}

export default function Problem() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-15% 0px' })

  return (
    <section
      id="funcionalidades"
      className="relative py-24 lg:py-32 bg-bg-base overflow-hidden"
    >
      {/* Subtle background */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage:
              'linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)',
            backgroundSize: '48px 48px',
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
          className="text-center space-y-5 mb-16"
        >
          <SectionLabel variant="blue" className="mx-auto">
            O Problema
          </SectionLabel>
          <h2 className="font-display text-4xl lg:text-5xl font-bold text-white max-w-3xl mx-auto leading-tight">
            Quantos leads do seu stand ficam{' '}
            <span className="text-gradient-brand">sem resposta</span> esta semana?
          </h2>
          <p className="text-lg text-slate-400 max-w-xl mx-auto">
            O problema não é falta de leads. É falta de controlo sobre eles.
          </p>
        </motion.div>

        {/* Stats Cards */}
        <div ref={ref} className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-20">
          {problemStats.map((stat, i) => {
            const Icon = icons[i]
            const colors = colorMap[stat.color as keyof typeof colorMap]
            return (
              <motion.div
                key={i}
                custom={i}
                variants={cardVariants}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className={`glass-card glass-card-hover rounded-2xl p-6 ${colors.glow} ${colors.border} border`}
              >
                <div
                  className={`w-10 h-10 rounded-xl flex items-center justify-center mb-5 ${colors.icon}`}
                >
                  <Icon size={18} />
                </div>
                <div
                  className={`font-display text-4xl font-bold mb-2 ${colors.text}`}
                >
                  {inView ? (
                    <AnimatedNumber value={stat.value} suffix={stat.suffix} />
                  ) : (
                    `0${stat.suffix}`
                  )}
                </div>
                <p className="text-white font-semibold text-sm mb-1">{stat.label}</p>
                <p className="text-slate-500 text-xs leading-relaxed">{stat.description}</p>
              </motion.div>
            )
          })}
        </div>

        {/* Problems → Solutions Grid */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass-card rounded-2xl border border-white/[0.06] overflow-hidden"
        >
          <div className="grid sm:grid-cols-2 divide-y sm:divide-y-0 sm:divide-x divide-white/[0.06]">
            <div className="p-6 lg:p-8">
              <p className="text-xs font-semibold text-slate-500 uppercase tracking-widest mb-5">
                Situação Actual
              </p>
              <div className="space-y-4">
                {problemsResolved.map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-red-500 mt-2 flex-shrink-0" />
                    <span className="text-sm text-slate-400">{item.problem}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="p-6 lg:p-8">
              <p className="text-xs font-semibold text-blue-400 uppercase tracking-widest mb-5">
                Com AUTO-Z
              </p>
              <div className="space-y-4">
                {problemsResolved.map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-green-500 mt-2 flex-shrink-0" />
                    <span className="text-sm text-slate-300">{item.solution}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
