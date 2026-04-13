'use client'

import { motion } from 'framer-motion'

type Project = {
  title: string
  desc: string
  details: string
  stack: string[]
  github: string
  demo: string
}

const PROJECTS: Project[] = [
  {
    title: 'Smart Parking System',
    desc: 'IoT + Computer Vision based parking management',
    details: 'Designed a smart system that detects available parking slots using computer vision and optimizes space utilization in real-time through IoT integration.',
    stack: ['React', 'Node', 'Python'],
    github: '#',
    demo: 'https://spmos.vercel.app/',
  },
  {
    title: 'EventPlanner AI',
    desc: 'AI-driven event planning assistant',
    details: 'Built an intelligent assistant that recommends venues, manages tasks, and personalizes event planning using machine learning and user preferences.',
    stack: ['Next.js', 'Python', 'TensorFlow'],
    github: '#',
    demo: '#',
  },
]

export default function Projects() {
  return (
    <section className="mt-12" id="projects">
      <h2 className="text-3xl font-semibold mb-6">Projects</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {PROJECTS.map((p, idx) => (
          <motion.div
            key={`${p.title}-${idx}`}
            whileHover={{ y: -6 }}
            transition={{ type: 'spring', stiffness: 200, damping: 15 }}
            className="card-glossy p-6 rounded-xl shadow-glow bg-white/5 backdrop-blur-2xl border border-white/10 hover:bg-white/10 before:absolute before:inset-0 before:bg-gradient-to-br before:from-white/20 before:via-transparent before:to-transparent before:opacity-20 before:pointer-events-none relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent opacity-30 pointer-events-none" />
            <div className="absolute inset-0 backdrop-blur-2xl opacity-20 pointer-events-none" />
            <h3 className="text-2xl font-semibold">{p.title}</h3>

            <p className="text-gray-300 mt-2">{p.desc}</p>
            <p className="text-gray-400 text-sm mt-2 leading-relaxed">{p.details}</p>

            <div className="mt-4 flex flex-wrap gap-2">
              {p.stack.map((s, i) => (
                <span
                  key={`${s}-${i}`}
                  className="px-2 py-1 rounded text-sm text-white bg-gradient-to-r from-purple-500/30 via-pink-500/30 to-blue-500/30 border border-white/10 backdrop-blur-md"
                >
                  {s}
                </span>
              ))}
            </div>

            <div className="mt-4 flex gap-3">
              <a
                href={p.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-2 rounded border border-white/10 text-white bg-white/5 backdrop-blur-md hover:bg-white/10 transition"
              >
                Live Demo
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
