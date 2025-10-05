'use client'
import * as THREE from 'three'
import React, { useMemo } from 'react'
import { useGLTF, MeshTransmissionMaterial } from '@react-three/drei'

interface ModelProps extends React.ComponentProps<'group'> {
  quality?: 'low' | 'high'
}

export function Model({ quality = 'high', ...props }: ModelProps) {
  const { nodes } = useGLTF('/assets/3d/Logo-Compressed.glb') as any

  // High-quality transmission preset (kept modest to avoid spikes)
  const matPropsHigh = useMemo(
    () => ({
      backside: true,
      samples: 2,          // modest; 3–5 gets costly
      resolution: 192,     // lower than default
      ior: 1.6,
      chromaticAberration: 0.003,
      distortion: 0.03,
      distortionScale: 0.15,
      temporalDistortion: 0.0,
      color: new THREE.Color(0xffffff),
      attenuationDistance: 1.5,
      attenuationColor: new THREE.Color(0xffffff),
      roughness: 0.06,
      anisotropicBlur: 0.01,
      thickness: 0.8,
      depthWrite: true,
      depthTest: true,
    }),
    []
  )

  return (
    <group {...props} dispose={null} scale={6}>
      <group position={[0.003, -0.141, 0.21]}>
        <mesh
          castShadow={false}
          receiveShadow={false}
          geometry={nodes.Curve002?.geometry}
          position={[-0.003, 0.141, -0.442]}
          rotation={[Math.PI / 2, 0, 0]}
          onUpdate={(m) => {
            m.renderOrder = 2
          }}
        >
          {quality === 'high' ? (
            <MeshTransmissionMaterial {...matPropsHigh} />
          ) : (
            // Ultra-cheap during interaction / low FPS
            <meshStandardMaterial color={new THREE.Color(0xffffff)}
            metalness={0.1} roughness={0.25} />
          )}
        </mesh>
      </group>
    </group>
  )
}

useGLTF.preload('/assets/3d/Logo-Compressed.glb')
