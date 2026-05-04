'use client'

import { useRef, useEffect } from 'react'
import { motion } from 'framer-motion'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import SectionLabel from '@/components/ui/SectionLabel'
import { howItWorksSteps, howItWorksResults } from '@/lib/data'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

export default function HowItWorks() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const stepsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (typeof window === 'undefined' || !stepsRef.current) return

    const ctx = gsap.context(() => {
      const cards = stepsRef.current!.querySelectorAll('.step-card')
      gsap.fromTo(
        cards,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          stagger: 0.18,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: stepsRef.current,
            start: 'top 75%',
            once: true,
          },
        }
      )
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} className="relative py-24 lg:py-32 bg-bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center space-y-5 mb-20"
        >
          <SectionLabel variant="cyan" className="mx-auto">
            Como Funciona
          </SectionLabel>
          <h2 className="font-display text-4xl lg:text-5xl font-bold text-white max-w-2xl mx-auto leading-tight">
            4 Etapas.{' '}
            <span className="text-gradient-brand">Leads Qualificados.</span>
          </h2>
          <p className="text-lg text-slate-400 max-w-lg mx-auto">
            Da chegada do lead ao vendedor certo, sem fricção, sem ruído.
          </p>
        </motion.div>

        {/* Steps */}
        <div
          ref={stepsRef}
          className="relative grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-white/[0.04] rounded-2xl overflow-hidden border border-white/[0.06] mb-12"
        >
          {howItWorksSteps.map((step, i) => (
            <div
              key={i}
              className="step-card opacity-0 bg-bg-surface p-8 relative group hover:bg-bg-card transition-colors duration-300"
            >
              {/* Step number */}
              <div className="font-display text-6xl font-bold text-white/[0.04] absolute top-4 right-6 pointer-events-none select-none">
                {step.number}
              </div>

              {/* Numbered circle */}
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-600 to-cyan-500 flex items-center justify-center mb-6 flex-shrink-0">
                <span className="font-display text-sm font-bold text-white">
                  {step.number}
                </span>
              </div>

              <h3 className="font-display text-xl font-bold text-white mb-3">
                {step.title}
              </h3>
              <p className="text-sm text-slate-400 leading-relaxed mb-4">
                {step.description}
              </p>
              <div className="inline-flex items-center px-3 py-1.5 rounded-lg bg-blue-500/8 border border-blue-500/15 text-xs text-blue-400 font-medium">
                {step.detail}
              </div>

              {/* Arrow connector */}
              {i < howItWorksSteps.length - 1 && (
                <div className="hidden lg:block absolute -right-3 top-1/2 -translate-y-1/2 z-10">
                  <div className="w-6 h-6 rounded-full bg-bg-base border border-blue-500/30 flex items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-blue-500" />
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Results Row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-3 gap-4"
        >
          {howItWorksResults.map((result, i) => (
            <div
              key={i}
              className="text-center p-6 glass-card rounded-2xl border border-white/[0.06]"
            >
              <p className="font-display text-3xl lg:text-4xl font-bold text-gradient-brand mb-2">
                {result.value}
              </p>
              <p className="text-sm text-slate-400">{result.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
