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
        // Don't render the inside faces of the mesh (better performance, less realism)
        backside: false,
        // Only use 1 sample for transmission material (super fast, low quality)
        samples: 1,
        // Set very low render resolution for the effect (faster, but more pixelated)
        resolution: 32, // super low for max performance
        // Index of refraction - makes refraction basically "flat" (no bending)
        ior: 1.0,
        // Chromatic aberration (colored fringe effect at edges) disabled
        chromaticAberration: 0,
        // No distortion to transmission (no glassy warping)
        distortion: 0,
        // No extra scaling for distortion
        distortionScale: 0,
        // No temporal distortion (i.e., no animated distortion)
        temporalDistortion: 0,
        // Set base color to white
        color: new THREE.Color(0xffffff), // pure white
        // No attenuation distance for light passing through
        attenuationDistance: 0,
        // Set attenuation color to white (so no color tint)
        attenuationColor: new THREE.Color(0xffffff),
        // Medium surface roughness (not fully glossy, not fully matte)
        roughness: 0.4,
        // Zero thickness, so mesh is infinitely thin (fast, not realistic)
        thickness: 0,
        // Not transparent (fully opaque)
        transparent: false,
        // Fully visible
        opacity: 1,
        // Do write into the depth buffer (important for correct 3D rendering)
        depthWrite: true,
        // Do depth test (ensure object is correctly occluded by others)
        depthTest: true,
        // No blur for transmission (crisper, but less realistic)
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
