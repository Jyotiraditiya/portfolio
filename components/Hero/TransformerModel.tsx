'use client'

import React, { useEffect, useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { useGLTF, useAnimations } from '@react-three/drei'
import * as THREE from 'three'

type Props = {
  onLoad?: () => void
}

export default function TransformerModel({ onLoad }: Props) {
  const group = useRef<THREE.Group | null>(null)

  // Load GLTF model
  const gltf = useGLTF('/models/transformer.glb') as any
  const { scene, animations } = gltf || {}

  useEffect(() => {
    if (!scene) return
    scene.traverse((obj: any) => {
      if (obj.isMesh && obj.material) {
        obj.material.transparent = true
        obj.material.opacity = 1
        obj.frustumCulled = false
      }
    })
  }, [scene])

  const { mixer } = useAnimations(animations ?? [], group)

  // Play animation
  useEffect(() => {
    if (animations && animations.length > 0 && mixer) {
      const assembleClip =
        animations.find((a: any) =>
          /assemble|intro|transform/i.test(a.name)
        ) ?? animations[0]

      const action = mixer.clipAction(assembleClip)
      action.reset()
      action.play()
      action.setLoop(THREE.LoopOnce, 0)
      action.fadeIn(0.3)
    }
  }, [animations, mixer])

  // Notify parent when loaded
  useEffect(() => {
    if (scene && onLoad) {
      try {
        onLoad()
      } catch (e) {
        // ignore
      }
    }
  }, [scene, onLoad])

  // Subtle rotation
  useFrame((_, delta) => {
    if (group.current) {
      group.current.rotation.y += delta * 0.12
    }
  })

  // Fallback if model fails
  if (!gltf || !gltf.scene) {
    return (
      <group ref={group} scale={[3.5, 3.5, 3.5]} position={[-0.7, -1.9, 0]}>
        <mesh rotation={[0, Math.PI / 8, 0]}>
          <boxGeometry args={[4.5, 2.8, 8]} />
          <meshStandardMaterial
            color="#0b0b0b"
            metalness={0.95}
            roughness={0.15}
          />
        </mesh>
      </group>
    )
  }

  return (
    <group ref={group} dispose={null} scale={[3,3,3]} position={[-0.7,-1.9,0]} rotation={[0,-0.5,0]}>
      <primitive object={scene} />
    </group>
  )
}

useGLTF.preload('/models/transformer.glb')