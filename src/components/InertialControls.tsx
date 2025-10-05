'use client'
import * as React from 'react'
import * as THREE from 'three'
import { useFrame, useThree } from '@react-three/fiber'

type Props = {
  children: React.ReactNode
  /** min/max vertical tilt in radians */
  polar?: [number, number]
  /** per-frame damping factor (1 = no damping). Exponential & delta-corrected */
  drag?: number
  /** pointer -> radians sensitivity */
  sensitivity?: number
  /** stop threshold for velocities (smaller = longer coast) */
  epsilon?: number
  /** callbacks (optional) */
  onStart?: () => void
  onChange?: () => void
  onEnd?: () => void
}

export function InertialControls({
  children,
  polar = [-Math.PI / 12, Math.PI / 12],
  drag = 0.96,
  sensitivity = 0.005,
  epsilon = 0.00008,
  onStart,
  onChange,
  onEnd,
}: Props) {
  const group = React.useRef<THREE.Group>(null!)
  const isDown = React.useRef(false)
  const last = React.useRef<[number, number] | null>(null)
  const vel = React.useRef({ x: 0, y: 0 })
  const hadMotion = React.useRef(false)
  const pointerId = React.useRef<number | null>(null)

  const { invalidate } = useThree()

  const isSleeping = () =>
    Math.abs(vel.current.x) < epsilon && Math.abs(vel.current.y) < epsilon

  const wake = React.useCallback(() => invalidate(), [invalidate])

  React.useEffect(() => {
    const onVis = () => {
      if (document.hidden) {
        vel.current.x = 0
        vel.current.y = 0
      }
    }
    document.addEventListener('visibilitychange', onVis, { passive: true })
    return () => document.removeEventListener('visibilitychange', onVis)
  }, [])

  useFrame((_, delta) => {
    const g = group.current
    if (!g) return

    const d = Math.pow(drag, delta * 60)
    const prevX = g.rotation.x
    const prevY = g.rotation.y

    vel.current.x *= d
    vel.current.y *= d

    if (isSleeping()) {
      if (hadMotion.current) {
        hadMotion.current = false
        onEnd?.()
      }
      return
    }

    g.rotation.y += vel.current.y
    g.rotation.x = THREE.MathUtils.clamp(
      g.rotation.x + vel.current.x,
      polar[0],
      polar[1]
    )

    const changed = g.rotation.x !== prevX || g.rotation.y !== prevY
    if (changed) {
      if (!hadMotion.current) {
        hadMotion.current = true
        onStart?.()
      }
      onChange?.()
      wake()
    }
  })

  const startDrag = (e: React.PointerEvent) => {
    e.stopPropagation()
    try {
      (e.target as Element).setPointerCapture?.(e.pointerId)
      pointerId.current = e.pointerId
    } catch {}
    isDown.current = true
    last.current = [e.clientX, e.clientY]
    onStart?.()
    wake()
  }

  const moveDrag = (e: React.PointerEvent) => {
    if (!isDown.current || !last.current) return
    if (pointerId.current !== null && e.pointerId !== pointerId.current) return
    e.stopPropagation()
    const dx = (e.clientX - last.current[0]) * sensitivity
    const dy = (e.clientY - last.current[1]) * sensitivity
    if (dx === 0 && dy === 0) return
    last.current = [e.clientX, e.clientY]
    vel.current.y += dx
    vel.current.x -= dy
    onChange?.()
    wake()
  }

  const endDrag = (e?: React.PointerEvent) => {
    if (e) {
      e.stopPropagation()
      try {
        (e.target as Element).releasePointerCapture?.(e.pointerId)
      } catch {}
    }
    isDown.current = false
    last.current = null
    pointerId.current = null

    if (isSleeping()) {
      if (hadMotion.current) {
        hadMotion.current = false
        onEnd?.()
      } else {
        onEnd?.()
      }
    } else {
      wake()
    }
  }

  return (
    <group
      onPointerDown={startDrag}
      onPointerMove={moveDrag}
      onPointerUp={endDrag}
      onPointerLeave={endDrag}
      onPointerCancel={endDrag}
    >
      <group ref={group}>{children}</group>
    </group>
  )
}
