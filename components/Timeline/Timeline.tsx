'use client'

import { motion } from 'framer-motion'

type TimelineItem = {
  title: string
  subtitle?: string
  date?: string
}

const TIMELINE: TimelineItem[] = [
  {
    title: 'Meta Frontend Certificate',
    date: '2024',
  },
  {
    title: 'Cisco Cybersecurity',
    date: '2024',
  },
  {
    title: 'Meta Advanced React',
    date: '2024',
  },
  {
    title: 'React Basics (Coursera)',
    date: '2024',
  },
  {
    title: 'Database Management Systems',
    date: '2024',
  },
]

export default function Timeline() {
  return (
    <section className="mt-12" id="experience">
      <h2 className="text-3xl font-semibold mb-6">
        Certifications
      </h2>

      <div className="flex flex-col gap-6">
        {TIMELINE.map((item, idx) => (
          <motion.div
            key={`${item.title}-${idx}`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.2 }}
            viewport={{ once: true }}
            className="relative p-6 rounded-xl bg-white/5 backdrop-blur-2xl border border-white/10 hover:bg-white/10 transition-all duration-300 overflow-hidden shadow-glow"
          >
            {/* Glass shine */}
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-pink-500/10 to-blue-500/10 opacity-40 pointer-events-none" />
            <div className="absolute inset-0 bg-gradient-to-tr from-white/20 via-transparent to-transparent opacity-20 pointer-events-none" />
            <div className="absolute inset-0 backdrop-blur-2xl opacity-10 pointer-events-none" />

            {/* Content */}
            <h3 className="text-lg font-semibold bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 text-transparent bg-clip-text">{item.title}</h3>

            {item.subtitle && (
              <p className="text-sm text-gray-400 mt-1">{item.subtitle}</p>
            )}

            {item.date && (
              <p className="text-xs text-gray-400 mt-2 tracking-wide">{item.date}</p>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  )
}
