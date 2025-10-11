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
  autoRotateSpeed = 0.5,
  autoRotateDirection = 'clockwise',
}: Props) {
  const group = React.useRef<THREE.Group>(null!)
  const vel = React.useRef({ x: 0, y: 0 })
  const hadMotion = React.useRef(false)

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
