'use client'

import { motion } from 'framer-motion'

type SkillCategory = {
  title: string
  items: string[]
}

const SKILL_CATEGORIES: SkillCategory[] = [
  { title: 'Programming & Databases', items: ['C', 'C++', 'Python', 'SQL', 'MongoDB'] },
  { title: 'Web Technologies', items: ['HTML', 'CSS', 'JavaScript', 'React', 'Node.js', 'Next.js', 'Express.js'] },
  { title: 'Core Concepts', items: ['DSA', 'OOPS', 'DBMS', 'Operating System', 'Computer Networks'] },
  { title: 'Tools & Design', items: ['UI/UX Design', 'VS Code', 'PyCharm', 'Jupyter Notebook'] },
  { title: 'Soft Skills', items: ['Leadership', 'Public Speaking', 'Adaptability', 'Team Collaboration', 'Outreach'] },
]

export default function Skills() {
  return (
    <section className="mt-12" id="skills">
      <h2 className="text-3xl font-semibold mb-6">Skills</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {SKILL_CATEGORIES.map((cat, idx) => (
          <motion.div
            key={`${cat.title}-${idx}`}
            initial={{ opacity: 0, x: idx % 2 === 0 ? -80 : 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ type: 'spring', stiffness: 120, damping: 20 }}
            whileHover={{ scale: 1.05 }}
            className="card-glossy p-6 rounded-xl shadow-glow bg-white/5 backdrop-blur-xl border border-white/10 hover:bg-white/10 transition-all duration-300 relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent opacity-30 pointer-events-none" />
            <h3 className="text-xl font-medium mb-4">{cat.title}</h3>

            <div className="flex flex-wrap gap-3">
              {cat.items.map((item, i) => (
                <div
                  key={`${item}-${i}`}
                  className="px-3 py-1 rounded-full text-sm font-medium text-white transition bg-gradient-to-r from-purple-500/30 via-pink-500/30 to-blue-500/30 hover:from-purple-500/50 hover:via-pink-500/50 hover:to-blue-500/50 backdrop-blur-md border border-white/10"
                >
                  {item}
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
