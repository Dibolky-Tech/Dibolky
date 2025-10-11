"use client";
import { Canvas } from "@react-three/fiber";
import {
  Center,
  Environment,
  PerformanceMonitor,
  AdaptiveDpr,
  AdaptiveEvents,
} from "@react-three/drei";
import { Model } from "./Logo";
import { BackgroundText } from "./BackgroundText";
import { InertialControls } from "./InertialControls";
import React, {
  useMemo,
  useState,
  useRef,
} from "react";

export default function PageHeader() {
  const [fpsFactor, setFpsFactor] = useState(1);
  const canvasWrapperRef = useRef<HTMLDivElement>(null);

  const canvasConfig = useMemo(
    () => ({
      camera: { position: [0, 0, 3] as [number, number, number], fov: 50 },
      gl: {
        alpha: true,
        antialias: false,
        powerPreference: "high-performance" as const,
        stencil: false,
        depth: true,
        failIfMajorPerformanceCaveat: false,
      },
      dpr: [1, 1.25] as [number, number],
      performance: { min: 0.3 },
      frameloop: "demand" as const,
    }),
    []
  );



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
          pointerEvents: "auto",
          touchAction: "pan-y", // Always allow vertical scroll
        }}
      >
        <Canvas
          {...canvasConfig}
        >
          <AdaptiveDpr pixelated />
          <AdaptiveEvents />

          <PerformanceMonitor
            onChange={({ factor }) => setFpsFactor(factor)}
            flipflops={2}
          />
          <ambientLight intensity={0.6} />
          <directionalLight position={[4, 6, 3]} intensity={0.9} />

          <Environment preset="city" />

          <BackgroundText />

<InertialControls
  autoRotate={true}
  autoRotateSpeed={0.3}
  autoRotateDirection="clockwise"
  floating={true}
  floatingIntensity={0.15}
  floatingSpeed={0.4}
  rotationVariation={0.2}
  polar={[-Math.PI / 12, Math.PI / 12]}
  drag={0.96}
>
            <Center>
              <Model quality={"high"} />
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

      <div className="tt-scroll-down " style={{zIndex: 30}}>
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
  );
}
