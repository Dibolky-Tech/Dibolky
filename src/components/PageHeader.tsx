'use client'
import React, {
  useMemo,
  useState,
  useEffect,
  useCallback,
  useRef,
} from 'react'
import { Canvas, invalidate } from '@react-three/fiber'
import {
  Center,
  Environment,
  Lightformer,
  PerformanceMonitor,
  AdaptiveDpr,
  AdaptiveEvents,
} from '@react-three/drei'
import { Model } from './Logo'
import { BackgroundText } from './BackgroundText'
import { InertialControls } from './InertialControls'

// Utility to detect small screens (mobile/tablet)
function useIsSmallScreen(breakpoint = 768) {
  const [isSmall, setIsSmall] = useState(false)
  useEffect(() => {
    function check() {
      setIsSmall(window.innerWidth < breakpoint)
    }
    check()
    window.addEventListener('resize', check)
    return () => window.removeEventListener('resize', check)
  }, [breakpoint])
  return isSmall
}

// Utility to detect touch devices
function useIsTouchDevice() {
  const [isTouch, setIsTouch] = useState(false)
  useEffect(() => {
    function check() {
      setIsTouch(
        'ontouchstart' in window ||
          navigator.maxTouchPoints > 0 ||
          // @ts-ignore
          navigator.msMaxTouchPoints > 0
      )
    }
    check()
    window.addEventListener('touchstart', check, { passive: true })
    return () => window.removeEventListener('touchstart', check)
  }, [])
  return isTouch
}

export default function PageHeader() {
  const [interacting, setInteracting] = useState(false)
  const [fpsFactor, setFpsFactor] = useState(1)
  const isSmallScreen = useIsSmallScreen()
  const isTouchDevice = useIsTouchDevice()
  const canvasWrapperRef = useRef<HTMLDivElement>(null)

  const canvasConfig = useMemo(() => {
    const baseDprSmall: [number, number] = [0.75, 1]
    const baseDprLarge: [number, number] = [1, 1.25]
    return {
      camera: { position: [0, 0, 3] as [number, number, number], fov: 50 },
      gl: {
        alpha: true,
        antialias: false,
        powerPreference: 'high-performance' as const,
        stencil: false,
        depth: true,
        failIfMajorPerformanceCaveat: false,
      },
      dpr: isSmallScreen ? baseDprSmall : baseDprLarge,
      performance: { min: 0.3 },
      frameloop: 'demand' as const,
    }
  }, [isSmallScreen])

  // Low during interaction or when FPS dips
  const quality: 'low' | 'high' = interacting || fpsFactor < 0.8 ? 'low' : 'high'

  // Allow 3D interaction on all screens; on touch screens, allow scrolling as well
  const onPointerDown = useCallback(() => setInteracting(true), [])
  const onPointerUp = useCallback(() => setInteracting(false), [])

  // IMPORTANT: We DO NOT add a manual RAF loop here; InertialControls + demand
  // invalidations already keep the renderer awake while motion exists.

  return (
    <div
      id="page-header"
      className="relative ph-full ph-full-m ph-center ph-cap-xxxxlg ph-image-parallax ph-caption-parallax"
    >
      <div className="bg-dots" aria-hidden />

      <div
        ref={canvasWrapperRef}
        className="absolute top-0 left-0 w-full h-screen"
        style={{
          zIndex: 10,
          pointerEvents: 'auto',
          touchAction: isTouchDevice ? 'pan-y' : undefined, // allow vertical scroll on touch devices
        }}
      >
        <Canvas
          {...canvasConfig}
          onPointerDown={onPointerDown}
          onPointerUp={onPointerUp}
          onPointerCancel={onPointerUp}
          onPointerOut={onPointerUp}
        >
          <AdaptiveDpr pixelated />
          <AdaptiveEvents />

          <PerformanceMonitor
            onChange={({ factor }) => setFpsFactor(factor)}
            flipflops={2}
          />

          {/* Simple, cheap light rig */}
          <ambientLight intensity={0.5} />
          <directionalLight position={[4, 6, 3]} intensity={0.9} />

          {/* Environment: HDR when idle, ultra-cheap while moving */}
          {quality === 'high' ? (
            // Bake once, modest resolution
            <Environment preset="city" resolution={256} frames={1} />
          ) : (
            <Environment resolution={64}>
              <group>
                <Lightformer
                  intensity={1}
                  position={[5, 2, 2]}
                  scale={[10, 10, 1]}
                />
                <Lightformer
                  intensity={0.5}
                  position={[-5, -2, -2]}
                  scale={[10, 10, 1]}
                />
              </group>
            </Environment>
          )}

          <BackgroundText />

          <InertialControls
            polar={[-Math.PI / 12, Math.PI / 12]}
            drag={0.96}
            sensitivity={0.005}
            onStart={() => {
              setInteracting(true)
            }}
            onChange={() => {
              invalidate()
            }}
            onEnd={() => {
              setInteracting(false)
            }}
          >
            <Center>
              {/* ✅ pass dynamic quality */}
              <Model quality={quality} />
            </Center>
          </InertialControls>
        </Canvas>
      </div>

      <div className="ph-social">
        <ul>
          <li>
            <a
              href="https://www.facebook.com/themetorium"
              className="tt-magnetic-item"
              target="_blank"
              rel="noopener"
            >
              <i className="fa-brands fa-facebook-f"></i>
            </a>
          </li>
          <li>
            <a
              href="https://dribbble.com/Themetorium"
              className="tt-magnetic-item"
              target="_blank"
              rel="noopener"
            >
              <i className="fa-brands fa-dribbble"></i>
            </a>
          </li>
          <li>
            <a
              href="https://www.behance.net/Themetorium"
              className="tt-magnetic-item"
              target="_blank"
              rel="noopener"
            >
              <i className="fa-brands fa-behance"></i>
            </a>
          </li>
          <li>
            <a
              href="https://www.youtube.com/"
              className="tt-magnetic-item"
              target="_blank"
              rel="noopener"
            >
              <i className="fa-brands fa-youtube"></i>
            </a>
          </li>
        </ul>
      </div>

      <div className="tt-scroll-down z-30">
        <a
          href="#tt-page-content"
          className="tt-scroll-down-inner tt-magnetic-item"
          data-offset="0"
        >
          <div className="tt-scrd-icon"></div>
          <svg viewBox="0 0 500 500">
            <defs>
              <path
                d="M50,250c0-110.5,89.5-200,200-200s200,89.5,200,200s-89.5,200-200,200S50,360.5,50,250"
                id="textcircle"
              ></path>
            </defs>
            <text dy="30">
              <textPath xlinkHref="#textcircle">
                Scroll to Explore - Scroll to Explore -
              </textPath>
            </text>
          </svg>
        </a>
      </div>

      <style jsx>{`
        .page-header {
          background: #0f1013;
          overflow: hidden;
          will-change: auto;
          transform: translateZ(0);
          backface-visibility: hidden;
        }
        .bg-dots {
          position: absolute;
          inset: 0;
          z-index: 0;
          pointer-events: none;
          will-change: auto;
          transform: translateZ(0);
          backface-visibility: hidden;

          --bg: #0f1013;
          --dot: 202, 255, 102;
          --dot-alpha: 0.12;
          --tile: 180px;
          --radius: 40%;

          background: radial-gradient(
                circle,
                rgba(var(--dot), var(--dot-alpha)) 0 var(--radius),
                transparent var(--radius)
              )
              0 0 / var(--tile) var(--tile),
            var(--bg);

          -webkit-mask-image: linear-gradient(
            to right,
            rgba(0, 0, 0, 1) 70%,
            rgba(0, 0, 0, 0) 100%
          );
          mask-image: linear-gradient(
            to right,
            rgba(0, 0, 0, 1) 70%,
            rgba(0, 0, 0, 0) 100%
          );
        }
        @supports not (mask-image: linear-gradient(#000, #000)) {
          .bg-dots {
            background: radial-gradient(
                  circle,
                  rgba(var(--dot), var(--dot-alpha)) 0 var(--radius),
                  transparent var(--radius)
                )
                0 0 / var(--tile) var(--tile),
              linear-gradient(
                to right,
                rgba(15, 16, 19, 0) 0%,
                rgba(15, 16, 19, 0.8) 100%
              ),
              var(--bg);
          }
        }
      `}</style>
    </div>
  )
}
