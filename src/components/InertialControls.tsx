// InertialControls.tsx
'use client'
import * as React from 'react'
import * as THREE from 'three'
import { useFrame, useThree } from '@react-three/fiber'

type Props = {
  children: React.ReactNode
  polar?: [number, number]
  drag?: number
  sensitivity?: number
  epsilon?: number
  verticalEnabled?: boolean
  /** If true, a vertical-first gesture will be ignored so the page scrolls */
  isLow?: boolean
  preferScrollOnVertical?: boolean
  gestureThreshold?: number // pixels to decide intent
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
  verticalEnabled = true,
  isLow = false,
  preferScrollOnVertical = true,
  gestureThreshold = 6,
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
  const intent = React.useRef<'undecided' | 'horizontal' | 'vertical'>('undecided')

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

  const startDrag = (e: React.PointerEvent) => {
    // DO NOT stopPropagation here; we don’t know the intent yet
    isDown.current = true
    last.current = [e.clientX, e.clientY]
    intent.current = 'undecided'
  }

  const moveDrag = (e: React.PointerEvent) => {
    if (!isDown.current || !last.current) return

    const [lx, ly] = last.current
    const dxPx = e.clientX - lx
    const dyPx = e.clientY - ly

    // Decide intent on first significant movement
    if (intent.current === 'undecided') {
      if (Math.abs(dxPx) < gestureThreshold && Math.abs(dyPx) < gestureThreshold && isLow) return
      intent.current = Math.abs(dxPx) >= Math.abs(dyPx) ? 'horizontal' : 'vertical'

      if (intent.current === 'horizontal') {
        // Now we capture to keep control
        try {
          (e.target as Element).setPointerCapture?.(e.pointerId)
          pointerId.current = e.pointerId
        } catch {}
        e.stopPropagation()
      } else {
        // Vertical: let page handle scroll (don’t stopPropagation, don’t capture)
        if (isLow && preferScrollOnVertical) {
          endDrag() // reset internal state; let the page scroll
          return
        }
      }
    }

    // From here we already decided
    if (intent.current === 'horizontal') {
      if (pointerId.current !== null && e.pointerId !== pointerId.current) return
      e.stopPropagation()
      last.current = [e.clientX, e.clientY]

      const dx = dxPx * sensitivity
      const dy = dyPx * sensitivity

      vel.current.y += dx
      if (verticalEnabled) vel.current.x -= dy // if disabled, ignore vertical tilt

      onChange?.()
      wake()
    }
  }

  const endDrag = (e?: React.PointerEvent) => {
    // Only stopPropagation if we actually captured
    if (pointerId.current !== null && e) {
      e.stopPropagation()
      try { (e.target as Element).releasePointerCapture?.(e.pointerId) } catch {}
    }
    isDown.current = false
    last.current = null
    pointerId.current = null
    intent.current = 'undecided'

    if (sleeping()) {
      if (hadMotion.current) { hadMotion.current = false; onEnd?.() }
      else onEnd?.()
    } else {
      wake() // will coast and call onEnd when stopped
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
