'use client'

import { Canvas } from '@react-three/fiber'
import { Suspense } from 'react'
import { OrbitControls, PerspectiveCamera, Environment } from '@react-three/drei'
import TransformerModel from './TransformerModel'

interface HeroSceneProps {
  onLoad: () => void
}

export default function HeroScene({ onLoad }: HeroSceneProps) {
  return (
    <div className="absolute inset-0 w-[120vw] h-full -z-10 -left-[10vw]">
  <Canvas
  shadows
  camera={{ position: [-1.5, 1.2, 5], fov: 70 }}
  style={{ width: '100vw', height: '100vh' }}
>
        <Suspense fallback={null}>
          {/* Optional: you can remove this since Canvas camera is set */}
          {/* <PerspectiveCamera makeDefault position={[0, 1.5, 7]} fov={65} /> */}

          <ambientLight intensity={0.4} />
          <directionalLight position={[5, 5, 5]} intensity={1} />

          <TransformerModel onLoad={onLoad} />

          <Environment preset="city" />

          <OrbitControls enableZoom={false} enablePan={false} />
        </Suspense>
      </Canvas>
    </div>
  )
}
