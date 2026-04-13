

'use client'

import { motion } from 'framer-motion'

type EducationItem = {
  degree: string
  institute: string
  duration: string
  details: string
}

const EDUCATION: EducationItem[] = [
  {
    degree: 'B.Tech in Computer Science',
    institute: 'Sikkim Manipal Institute of Technology',
    duration: '2023 – 2027',
    details:
      'Focused on software development, data structures, AI/ML, and system design with hands-on project experience.',
  },
]

export default function Education() {
  return (
    <section className="mt-12" id="education">
      <h2 className="text-3xl font-semibold mb-6">Education</h2>

      <div className="flex flex-col gap-6">
        {EDUCATION.map((edu, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.2 }}
            viewport={{ once: true }}
            className="relative p-6 rounded-xl bg-white/5 backdrop-blur-2xl border border-white/10 shadow-glow overflow-hidden"
          >
            {/* Glass gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-pink-500/10 to-blue-500/10 opacity-40 pointer-events-none" />
            <div className="absolute inset-0 bg-gradient-to-tr from-white/20 via-transparent to-transparent opacity-20 pointer-events-none" />

            <h3 className="text-xl font-semibold bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 text-transparent bg-clip-text">
              {edu.degree}
            </h3>

            <p className="text-gray-300 mt-1">{edu.institute}</p>
            <p className="text-gray-400 text-sm mt-1">{edu.duration}</p>

            <p className="text-gray-300 mt-3 text-sm leading-relaxed">
              {edu.details}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}