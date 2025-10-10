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
        {quality === 'low' ?
         <mesh
            geometry={nodes.Curve002?.geometry}
            position={[-0.003, 0.141, -0.442]}
            rotation={[Math.PI / 2, 0, 0]}
            onUpdate={(m) => (m.renderOrder = 2)}
          >
            {/* 
              glossy, realistic white (cheap). 
              - metalness: 0 means the surface is non-metallic, resulting in a more diffuse/lambertian look.
              - roughness: 1.3 (although max roughness is 1, values above will clamp to 1) makes the surface very rough and matte, scattering reflections.
              - envMapIntensity (if used): controls the strength of the environment mapping reflections on the material; higher means more reflection from the environment map.
            */}
            <meshStandardMaterial
              color="#ffffff"
              metalness={0}
              roughness={1.3}
            // envMapIntensity={0.8} // (Uncomment if using an environment map, 0.8 means 80% strength)
              envMapIntensity={1.0}
              dithering
              polygonOffset
              polygonOffsetFactor={1}
              polygonOffsetUnits={1}
            />
            {/* crisp outline — use a concrete material, not material-* props */}
            {/* <Edges threshold={22} renderOrder={3} material={edgeMat} /> */}
          </mesh>
        :
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
            background={ new THREE.Color(1, 1, 1).convertSRGBToLinear().setScalar(1).setRGB(1, 1, 1).lerp(new THREE.Color(0, 0, 0), 0.8)}
            color={new THREE.Color(1, 1, 1).lerp(new THREE.Color(0, 0, 0), 0.7)}
          />
        </mesh>
}
      </group>
    </group>
  )
}

useGLTF.preload('/assets/3d/Logo-Compressed.glb')
