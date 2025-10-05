'use client'

import { useEffect, useRef } from 'react'

export default function PerformanceMonitor() {
  const frameCount = useRef(0)
  const lastTime = useRef(performance.now())
  const fpsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    let animationId: number

    const measureFPS = () => {
      frameCount.current++
      const currentTime = performance.now()
      
      if (currentTime - lastTime.current >= 1000) {
        const fps = Math.round((frameCount.current * 1000) / (currentTime - lastTime.current))
        
        if (fpsRef.current) {
          fpsRef.current.textContent = `FPS: ${fps}`
          fpsRef.current.style.color = fps >= 55 ? '#4ade80' : fps >= 30 ? '#fbbf24' : '#ef4444'
        }
        
        frameCount.current = 0
        lastTime.current = currentTime
      }
      
      animationId = requestAnimationFrame(measureFPS)
    }

    // Only show in development
    if (process.env.NODE_ENV === 'development') {
      animationId = requestAnimationFrame(measureFPS)
    }

    return () => {
      if (animationId) {
        cancelAnimationFrame(animationId)
      }
    }
  }, [])

  // Only render in development
  if (process.env.NODE_ENV !== 'development') {
    return null
  }

  return (
    <div 
      ref={fpsRef}
      style={{
        position: 'fixed',
        top: '10px',
        right: '10px',
        zIndex: 9999,
        background: 'rgba(0, 0, 0, 0.8)',
        color: 'white',
        padding: '8px 12px',
        borderRadius: '4px',
        fontFamily: 'monospace',
        fontSize: '12px',
        pointerEvents: 'none'
      }}
    >
      FPS: --
    </div>
  )
}
