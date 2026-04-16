'use client'

import { motion } from 'framer-motion'

interface HeroContentProps {
  loaded: boolean
}

export default function HeroContent({ loaded }: HeroContentProps) {
  return (
    <div className="relative z-20 flex flex-col items-start w-full px-2 md:px-4">
      <motion.div
        className="w-full md:w-auto text-left"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: loaded ? 1 : 0, y: loaded ? 0 : 30 }}
        transition={{ delay: 1.2, duration: 0.8, ease: 'easeOut' }}
      >
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight font-[Orbitron] tracking-widest bg-gradient-to-r from-white via-gray-300 to-gray-500 text-transparent bg-clip-text">
          Jyotiraditiya Misra
        </h1>
      </motion.div>

      <motion.div
        className="w-full md:w-auto text-left mt-4"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: loaded ? 1 : 0, y: loaded ? 0 : 30 }}
        transition={{ delay: 1.4, duration: 0.8, ease: 'easeOut' }}
      >

        <p className="text-gray-400">
          Software Developer · Full Stack Developer
        </p>

        <p className="mt-4 text-gray-300 max-w-md">
          Building Scalable, Intelligent & High-Performance Systems
        </p>
        
      </motion.div>
    </div>
  )
}