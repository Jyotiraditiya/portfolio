'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'

export default function About() {
  return (
    <section className="mt-20 px-6 md:px-16 font-serif" id="about">
      <div className="flex flex-col md:flex-row items-center justify-between gap-10">

        {/* LEFT CONTENT */}
        <div className="w-full md:w-[60%]">
          <p className="text-sm tracking-widest text-gray-300 mb-4">
            FULL STACK DEVELOPER & AIML ENTHUSIAST
          </p>

          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            JYOTIRADITIYA MISRA
          </h1>

          <p className="text-gray-200 leading-relaxed text-[15px] md:text-base tracking-wide">
            I am Jyotiraditiya Misra — a Software Developer with a Computer Science background focused on building scalable, intelligent, and high-performance systems. I specialize in the MERN stack (MongoDB, Express, React, Node.js) and have hands-on experience designing end-to-end applications, RESTful APIs, and data-driven solutions.
          </p>

          <div className="mt-6">
            <h4 className="text-xs uppercase text-gray-400 tracking-widest">Core Strengths</h4>
            <ul className="mt-3 text-gray-200 list-disc list-inside space-y-1">
              <li>MERN stack (React, Next.js, Node.js, Express)</li>
              <li>System design & scalable architectures</li>
              <li>Performance optimization & CI/CD</li>
            </ul>
          </div>

          <div className="mt-6">
            <h4 className="text-xs uppercase text-gray-400 tracking-widest">Education</h4>
            <p className="mt-2 text-gray-200">
              B.Tech in Computer Science (2023-2027)
            </p>
          </div>

          <div className="mt-6">
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2 border border-white/20 rounded-md text-gray-200 hover:border-white hover:text-white transition-all duration-300"
            >
              View Resume
            </a>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: 'easeOut' }}
          viewport={{ once: true }}
          className="w-full md:w-[35%] flex justify-center"
        >
          <Image
            src="/images/IMG_1020.JPG"
            alt="Jyotiraditiya Misra"
            width={350}
            height={350}
            className="rounded-xl object-cover shadow-2xl"
            priority
          />
        </motion.div>

      </div>
    </section>
  )
}