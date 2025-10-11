'use client'
import * as React from 'react'
import * as THREE from 'three'
import { useFrame, useThree } from '@react-three/fiber'

type Props = {
  children: React.ReactNode
  polar?: [number, number]
  drag?: number
  epsilon?: number
  onStart?: () => void
  onChange?: () => void
  onEnd?: () => void
  autoRotate?: boolean
  autoRotateSpeed?: number
  autoRotateDirection?: 'clockwise' | 'counterclockwise'
  /** Space-like floating motion settings */
  floating?: boolean
  floatingIntensity?: number
  floatingSpeed?: number
  rotationVariation?: number
}

export function InertialControls({
  children,
  polar = [-Math.PI / 12, Math.PI / 12],
  drag = 0.96,
  epsilon = 0.00008,
  onStart,
  onChange,
  onEnd,
  autoRotate = false,
  autoRotateSpeed = 0.2,
  autoRotateDirection = 'clockwise',
  floating = false,
  floatingIntensity = 0.1,
  floatingSpeed = 0.5,
  rotationVariation = 0.3,
}: Props) {
  const group = React.useRef<THREE.Group>(null!)
  const vel = React.useRef({ x: 0, y: 0 })
  const hadMotion = React.useRef(false)
  const tiltTime = React.useRef(0)
  
  // Space-like floating motion state
  const floatingTime = React.useRef(0)
  const randomSeed = React.useRef(Math.random() * 1000)
  const lastDirection = React.useRef({ x: 0, y: 0, z: 0 })
  const targetDirection = React.useRef({ x: 0, y: 0, z: 0 })
  const directionChangeTime = React.useRef(0)
  const directionChangeInterval = React.useRef(2 + Math.random() * 3) // Change direction every 2-5 seconds

  const { invalidate } = useThree()
  const wake = React.useCallback(() => invalidate(), [invalidate])

  const sleeping = () => Math.abs(vel.current.x) < epsilon && Math.abs(vel.current.y) < epsilon

  React.useEffect(() => {
    const onVis = () => {
      if (document.hidden) vel.current.x = vel.current.y = 0
    }
    document.addEventListener('visibilitychange', onVis, { passive: true })
    return () => document.removeEventListener('visibilitychange', onVis)
  }, [])

  useFrame((_, delta) => {
    const g = group.current
    if (!g) return

    // Auto-rotation logic
    if (autoRotate) {
      const direction = autoRotateDirection === 'clockwise' ? 1 : -1
      const rotationSpeed = autoRotateSpeed * direction * delta
      g.rotation.y += rotationSpeed
      
      // Space-like floating motion
      if (floating) {
        floatingTime.current += delta * floatingSpeed
        
        // Change direction randomly every few seconds
        directionChangeTime.current += delta
        if (directionChangeTime.current >= directionChangeInterval.current) {
          // Generate new random direction - only X and Y axes, no Z (no upside down)
          targetDirection.current = {
            x: (Math.random() - 0.5) * 2 * floatingIntensity, // X-axis rotation (pitch)
            y: (Math.random() - 0.5) * 2 * floatingIntensity * 0.15, // Reduced Y-axis rotation (18%)
            z: 0 // No Z-axis rotation to prevent upside down
          }
          directionChangeTime.current = 0
          directionChangeInterval.current = 2 + Math.random() * 3
        }
        
        // Smooth interpolation between current and target direction
        const lerpFactor = Math.min(delta * 2, 1) // Smooth transition
        lastDirection.current.x += (targetDirection.current.x - lastDirection.current.x) * lerpFactor
        lastDirection.current.y += (targetDirection.current.y - lastDirection.current.y) * lerpFactor
        lastDirection.current.z += (targetDirection.current.z - lastDirection.current.z) * lerpFactor
        
        // Apply the floating motion - only X and Y axes
        g.rotation.x += lastDirection.current.x * delta
        g.rotation.y += lastDirection.current.y * delta + rotationSpeed // Combine with base rotation
        // No Z-axis rotation to prevent upside down
        
        // Add subtle random variation to rotation speed
        const speedVariation = 1 + (Math.sin(floatingTime.current * 0.5 + randomSeed.current) * rotationVariation)
        g.rotation.y += rotationSpeed * (speedVariation - 1) * 0.1
      }
      
      wake()
      return
    }

    const d = Math.pow(drag, delta * 60)
    vel.current.x *= d
    vel.current.y *= d

    if (sleeping()) {
      if (hadMotion.current) { hadMotion.current = false; onEnd?.() }
      return
    }

    g.rotation.y += vel.current.y
    const nextX = g.rotation.x + vel.current.x
    g.rotation.x = THREE.MathUtils.clamp(nextX, polar[0], polar[1])

    if (!hadMotion.current) { hadMotion.current = true; onStart?.() }
    onChange?.()
    wake()
  })

 

  return (
    <group>
      <group ref={group}>{children}</group>
    </group>
  )
}
