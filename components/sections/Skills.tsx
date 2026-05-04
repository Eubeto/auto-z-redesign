'use client'

import { motion } from 'framer-motion'
import SectionLabel from '@/components/ui/SectionLabel'
import Badge from '@/components/ui/Badge'
import { useLang } from '@/contexts/LangContext'

export default function Skills() {
  const { tr } = useLang()
  const { skills } = tr

  const activeSkills = skills.items.filter((s) => s.status === 'Ativo')
  const addonSkills = skills.items.filter((s) => s.status === 'Add-on')

  return (
    <section id="skills" className="relative py-24 lg:py-32 bg-bg-surface">
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
            {skills.label}
          </SectionLabel>
          <h2 className="font-display text-4xl lg:text-5xl font-bold text-white leading-tight">
            {skills.title}{' '}
            <span className="text-gradient-vibrant">{skills.titleAccent}</span>
          </h2>
          <p className="text-lg text-slate-400 max-w-lg mx-auto">
            {skills.subtitle}
          </p>
        </motion.div>

        {/* Active skills */}
        <div className="mb-6">
          <p className="text-xs font-semibold text-slate-500 uppercase tracking-widest mb-4 text-center">
            {skills.activeLabel}
          </p>
          <div className="grid sm:grid-cols-2 gap-4">
            {activeSkills.map((skill, i) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="glass-card glass-card-hover rounded-2xl p-6 border border-green-500/10 group"
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="font-display text-xl font-bold text-white">
                        {skill.name}
                      </h3>
                      <Badge variant="active">{skills.activeBadge}</Badge>
                    </div>
                    <p className="text-sm text-slate-400 leading-relaxed">
                      {skill.desc}
                    </p>
                  </div>
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-600 to-cyan-500 flex items-center justify-center flex-shrink-0">
                    <span className="text-xs font-bold text-white">
                      {skill.name.slice(0, 2)}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Add-on skills */}
        <div>
          <p className="text-xs font-semibold text-slate-500 uppercase tracking-widest mb-4 text-center">
            {skills.addonLabel}
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {addonSkills.map((skill, i) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="glass-card glass-card-hover rounded-2xl p-5 border border-white/[0.07] group"
              >
                <div className="flex items-center justify-between mb-3">
                  <h3 className="font-display text-base font-bold text-white">
                    {skill.name}
                  </h3>
                  <Badge variant="addon">{skills.addonBadge}</Badge>
                </div>
                <p className="text-xs text-slate-500 leading-relaxed">
                  {skill.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom note */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12 text-center"
        >
          <p className="text-sm text-slate-500">
            {skills.bottomNote}{' '}
            <span className="text-slate-300 font-medium">{skills.bottomNoteAccent}</span>
          </p>
        </motion.div>
      </div>
    </section>
  )
}
