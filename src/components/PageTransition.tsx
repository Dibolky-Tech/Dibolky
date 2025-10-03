'use client'

import Image from 'next/image'

export default function PageTransition() {
  return (
    <div id="tt-page-transition">
      <div className="tt-ptr-overlay-top tt-noise"></div>
      <div className="tt-ptr-overlay-bottom tt-noise"></div>
      <div className="tt-ptr-preloader">
        <div className="tt-ptr-prel-content">
          <Image 
            src="/assets/img/logo-light.png" 
            className="tt-ptr-prel-image" 
            alt="Logo"
            width={120}
            height={40}
            priority
          />
        </div>
      </div>
    </div>
  )
}
