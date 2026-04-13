'use client'

import { useState } from 'react'
import dynamic from 'next/dynamic'
import HeroContent from './HeroContent'

const HeroScene = dynamic(() => import('./HeroScene'), {
  ssr: false,
  loading: () => (
    <div className="absolute inset-0 flex items-center justify-center text-gray-400">
      Loading 3D...
    </div>
  ),
})

export default function Hero() {
  const [loaded, setLoaded] = useState(false)

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background 3D Scene */}
      <div className="absolute inset-0 z-0">
        <HeroScene onLoad={() => setLoaded(true)} />
      </div>

      {/* Foreground Content */}
      <div className="relative z-20 max-w-4xl mx-auto px-6">
        <HeroContent loaded={loaded} />
      </div>
    </section>
  )
}
