'use client'
import * as THREE from 'three'
import React, { useMemo } from 'react'
import { useGLTF, MeshTransmissionMaterial } from '@react-three/drei'

interface ModelProps extends React.ComponentProps<'group'> {
  quality?: 'low' | 'high'
}

export function Model({ quality = 'high', ...props }: ModelProps) {
  const { nodes } = useGLTF('/assets/3d/Logo-Compressed.glb') as any

  const matProps = useMemo(() => {
    if (quality === 'low') {
      return {
        // very cheap, good for interaction
        backside: false,
        samples: 1,
        resolution: 32, // super low for max performance
        ior: 1.0,
        chromaticAberration: 0,
        distortion: 0,
        distortionScale: 0,
        temporalDistortion: 0,
        color: new THREE.Color(0xffffff), // pure white
        attenuationDistance: 0,
        attenuationColor: new THREE.Color(0xffffff),
        roughness: 0.4,
        thickness: 0,
        transparent: false,
        opacity: 1,
        depthWrite: true,
        depthTest: true,
        anisotropicBlur: 0,
      } as const
    }
    return {
      backside: true,
      samples: 2,        
      resolution: 192,     //
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
      depthTest: true
    } as const
  }, [quality])

  

  return (
    <group {...props} dispose={null} scale={6}>
      <group position={[0.003, -0.141, 0.21]}>
        <mesh
          // Shadows off for perf
          castShadow={false}
          receiveShadow={false}
          geometry={nodes.Curve002?.geometry}
          position={[-0.003, 0.141, -0.442]}
          rotation={[Math.PI / 2, 0, 0]}
          onUpdate={(m) => { m.renderOrder = 2 }}
        >
          <MeshTransmissionMaterial
            {...matProps}
            background={new THREE.Color(1, 1, 1).convertSRGBToLinear().setScalar(1).setRGB(1, 1, 1).lerp(new THREE.Color(0, 0, 0), 0.8)}
            color={new THREE.Color(1, 1, 1).lerp(new THREE.Color(0, 0, 0), 0.7)}
          />
        </mesh>
      </group>
    </group>
  )
}

useGLTF.preload('/assets/3d/Logo-Compressed.glb')
