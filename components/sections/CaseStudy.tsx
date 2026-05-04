'use client'

import { useRef, useEffect } from 'react'
import { motion } from 'framer-motion'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Quote } from 'lucide-react'
import SectionLabel from '@/components/ui/SectionLabel'
import { caseStudy } from '@/lib/data'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

export default function CaseStudy() {
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (typeof window === 'undefined' || !sectionRef.current) return

    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.case-metric',
        { scale: 0.8, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration: 0.6,
          stagger: 0.1,
          ease: 'back.out(1.5)',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 65%',
            once: true,
          },
        }
      )
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={sectionRef}
      className="relative py-24 lg:py-32 bg-bg-surface overflow-hidden"
    >
      {/* Glow accent */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-blue-700/8 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center space-y-5 mb-16"
        >
          <SectionLabel variant="green" className="mx-auto">
            Caso Real
          </SectionLabel>
          <h2 className="font-display text-4xl lg:text-5xl font-bold text-white leading-tight">
            <span className="text-gradient-brand">{caseStudy.company}</span> — Antes e Depois
          </h2>
          <p className="text-lg text-slate-400">
            Resultados reais num stand português em 30 dias.
          </p>
        </motion.div>

        {/* Before / After */}
        <div className="grid md:grid-cols-2 gap-4 lg:gap-6 mb-12">
          {/* Before */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass-card rounded-2xl p-7 border border-red-500/10"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-8 rounded-lg bg-red-500/15 border border-red-500/20 flex items-center justify-center">
                <div className="w-2 h-2 rounded-full bg-red-500" />
              </div>
              <span className="text-sm font-semibold text-red-400 uppercase tracking-widest">
                Antes
              </span>
            </div>
            <ul className="space-y-4">
              {caseStudy.before.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="text-red-500 mt-0.5 flex-shrink-0">✕</span>
                  <span className="text-sm text-slate-400">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* After */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="glass-card rounded-2xl p-7 border border-green-500/10"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-8 rounded-lg bg-green-500/15 border border-green-500/20 flex items-center justify-center">
                <div className="w-2 h-2 rounded-full bg-green-500" />
              </div>
              <span className="text-sm font-semibold text-green-400 uppercase tracking-widest">
                Depois
              </span>
            </div>
            <ul className="space-y-4">
              {caseStudy.after.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="text-green-500 mt-0.5 flex-shrink-0">✓</span>
                  <span className="text-sm text-slate-300">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Key Metrics */}
        <div className="grid grid-cols-3 gap-4 mb-12">
          {[
            { value: '0%', label: 'Leads sem resposta', color: 'text-green-400' },
            { value: '+25%', label: 'Conversão em 30 dias', color: 'text-blue-400' },
            { value: '90%', label: 'Leads qualificados auto.', color: 'text-cyan-400' },
          ].map((metric, i) => (
            <div
              key={i}
              className="case-metric opacity-0 text-center p-5 glass-card rounded-2xl border border-white/[0.06]"
            >
              <p className={`font-display text-3xl lg:text-4xl font-bold ${metric.color} mb-1`}>
                {metric.value}
              </p>
              <p className="text-xs text-slate-500 leading-tight">{metric.label}</p>
            </div>
          ))}
        </div>

        {/* Testimonial */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto glass-card rounded-2xl p-8 lg:p-10 border border-white/[0.08] relative"
        >
          <Quote
            size={40}
            className="text-blue-500/20 absolute top-6 left-8"
            aria-hidden
          />
          <blockquote className="relative z-10">
            <p className="font-display text-xl lg:text-2xl text-white font-medium leading-relaxed mb-6 pl-8">
              &ldquo;{caseStudy.testimonial}&rdquo;
            </p>
            <div className="flex items-center gap-3 pl-8">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-blue-600 to-cyan-500 flex items-center justify-center">
                <span className="text-xs font-bold text-white">GT</span>
              </div>
              <div>
                <p className="text-sm font-semibold text-white">{caseStudy.author}</p>
                <p className="text-xs text-slate-500">{caseStudy.company}</p>
              </div>
            </div>
          </blockquote>
        </motion.div>
      </div>
    </section>
  )
}
