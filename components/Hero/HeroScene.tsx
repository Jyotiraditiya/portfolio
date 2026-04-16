'use client'

import { Canvas } from '@react-three/fiber'
import { Suspense } from 'react'
import { OrbitControls, Environment } from '@react-three/drei'
import TransformerModel from './TransformerModel'

interface HeroSceneProps {
  onLoad?: () => void
}

export default function HeroScene({ onLoad }: HeroSceneProps) {
  return (
    <div className="absolute inset-0 w-full h-full">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 50 }}
        style={{ width: '100%', height: '100%' }}
      >
        <Suspense fallback={null}>
          {/* LIGHTING (IMPORTANT) */}
          <ambientLight intensity={1.5} />
          <directionalLight position={[2, 2, 2]} intensity={2} />

          {/* MODEL */}
          <TransformerModel onLoad={onLoad} />

          {/* ENVIRONMENT */}
          <Environment preset="city" />

          {/* CONTROLS */}
          <OrbitControls enableZoom={false} enablePan={false} />
        </Suspense>
      </Canvas>
    </div>
  )
}