'use client'
import * as THREE from 'three'
import React, { useMemo } from 'react'
import { useGLTF, MeshTransmissionMaterial } from '@react-three/drei'

interface ModelProps extends React.ComponentProps<'group'> {
  quality?: 'low' | 'high'
}

export function Model({ quality = 'high', ...props }: ModelProps) {
  const { nodes } = useGLTF('/assets/3d/Logo-Compressed.glb') as any

  // Optimized material properties for consistent high quality with better performance
  const matProps = useMemo(() => ({
    backside: true,
    samples: 3,
    resolution: 256,
    transmission: 1,
    ior: 1.5,
    chromaticAberration: 0.04,
    anisotropy: 0.3,
    distortion: 0.2,
    distortionScale: 0.5,
    temporalDistortion: 0.1,
    color: new THREE.Color(0xffffff),
    attenuationDistance: 0.5,
    attenuationColor: new THREE.Color(0xffffff),
    roughness: 0,
    thickness: 1.5,
    clearcoat: 1,
    clearcoatRoughness: 0,
  }), []);

  return (
    <group {...props} dispose={null} scale={6}>
      <group position={[0.003, -0.141, 0.21]}>
        <mesh
          castShadow={false}
          receiveShadow={false}
          geometry={nodes.Curve002?.geometry}
          position={[-0.003, 0.141, -0.442]}
          rotation={[Math.PI / 2, 0, 0]}
          renderOrder={2}
        >
          <MeshTransmissionMaterial {...matProps} />
        </mesh>
      </group>
    </group>
  )
}

useGLTF.preload('/assets/3d/Logo-Compressed.glb')