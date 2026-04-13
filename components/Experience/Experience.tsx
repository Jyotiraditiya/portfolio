'use client'

import { motion } from 'framer-motion'

type ExperienceItem = {
  company: string
  role: string
  duration: string
  description: string
}

const EXPERIENCES: ExperienceItem[] = [
  {
    company: 'Wells Fargo',
    role: 'Project Analyst (Virtual Internship)',
    duration: '2025',
    description:
      'Worked on investment management technology systems to improve efficiency for financial advisors.',
  },
]

export default function Experience() {
  return (
    <section className="mt-12" id="experience">
      <h2 className="text-3xl font-semibold mb-6">Experience</h2>

      <div className="grid md:grid-cols-2 gap-6">
        {EXPERIENCES.map((exp, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.2 }}
            viewport={{ once: true }}
            className="relative p-6 rounded-xl bg-white/5 backdrop-blur-2xl border border-white/10 hover:bg-white/10 transition-all duration-300 overflow-hidden shadow-glow before:absolute before:inset-0 before:bg-gradient-to-br before:from-white/20 before:via-transparent before:to-transparent before:opacity-20 before:pointer-events-none"
          >
            {/* Glass gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-pink-500/10 to-blue-500/10 opacity-40 pointer-events-none" />
            <div className="absolute inset-0 bg-gradient-to-tr from-white/20 via-transparent to-transparent opacity-20 pointer-events-none" />
            <div className="absolute inset-0 backdrop-blur-2xl opacity-10 pointer-events-none" />

            {/* Content */}
            <h3 className="text-xl font-semibold bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 text-transparent bg-clip-text">{exp.company}</h3>
            <p className="text-sm text-gray-400 mt-1">{exp.role}</p>
            <p className="text-xs text-gray-500 mt-2">{exp.duration}</p>

            <p className="text-gray-300 mt-3 text-sm leading-relaxed tracking-wide">
              {exp.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}