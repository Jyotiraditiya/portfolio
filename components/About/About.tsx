'use client'
import { motion } from 'framer-motion'

export default function About() {
  return (
    <section className="mt-28 px-4 md:px-10 font-serif" id="about">
      <h2 className="text-3xl font-semibold mb-6 font-serif md:w-[70%] md:ml-auto">About</h2>

      <div className="flex flex-col md:flex-row items-start justify-start gap-8 w-full">
        {/* Profile image fetched from /public/img_1020.jpg */}
        <motion.img
          src="/img_1020.jpg"
          alt="Jyotiraditiya Misra"
          loading="lazy"
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.5, ease: 'easeOut' }}
          viewport={{ once: true }}
          className="w-56 h-56 md:w-64 md:h-64 rounded-lg object-cover border border-white/20 shadow-xl hidden sm:block hover:scale-105 transition-transform duration-300 mr-auto"
        />

        <div className="relative card-glossy p-8 rounded-2xl bg-white/5 backdrop-blur-2xl border border-white/10 shadow-glow hover:shadow-xl transition-all duration-300 w-full md:w-[70%] overflow-hidden before:absolute before:inset-0 before:bg-gradient-to-br before:from-white/20 before:via-transparent before:to-transparent before:opacity-20 before:pointer-events-none">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-pink-500/10 to-blue-500/10 opacity-40 pointer-events-none" />
          <div className="absolute inset-0 bg-gradient-to-tr from-white/20 via-transparent to-transparent opacity-20 pointer-events-none" />
          <div className="absolute inset-0 backdrop-blur-2xl opacity-10 pointer-events-none" />

          <div>
            <p className="text-gray-200 leading-relaxed text-[15px] md:text-base tracking-wide font-serif">
              I am Jyotiraditiya Misra — a Software Developer with a Computer Science background focused on building scalable, intelligent, and high-performance systems. I specialize in the MERN stack (MongoDB, Express, React, Node.js) and have hands-on experience designing end-to-end applications, RESTful APIs, and data-driven solutions.
            </p>

            <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <h4 className="text-xs uppercase text-gray-400 tracking-widest font-serif">Core Strengths</h4>
                <ul className="mt-3 text-gray-200 list-disc list-inside space-y-1 font-serif">
                  <li>MERN stack (React, Next.js, Node.js, Express)</li>
                  <li>System design & scalable architectures</li>
                  <li>Performance optimization & CI/CD</li>
                </ul>
              </div>

              <div>
                <h4 className="text-xs uppercase text-gray-400 tracking-widest font-serif">Education</h4>
                <p className="mt-2 text-gray-200 font-serif">
                  B.Tech in Computer Science(2023-2027)
                </p>
              </div>
            </div>


            <div className="mt-4 flex gap-3">
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2 border border-white/20 rounded-md text-gray-200 hover:border-accent hover:text-white transition-all duration-300 font-serif"
              >
                View Resume
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}