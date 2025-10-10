'use client'

import Link from 'next/link'

export default function AboutSection() {
  return (
    <div className="tt-section padding-top-xlg-140 padding-bottom-xlg-120">
      <div className="tt-section-inner tt-wrap">
        <div className="tt-row">
          <div className="tt-col-lg-4">
            <div className="tt-heading tt-heading-xlg">
              <h2 style={{ fontFamily: "'Barracuda', 'Barracuda-regular', sans-serif" }} className="tt-heading-title tt-text-reveal">ABOUT UUS</h2>
            </div>
            {/* <div className="tt-text-uppercase margin-top-30 tt-text-reveal">
              Creative designer<br /> based in Melbourne
            </div> */}
          </div>

          <div className="tt-col-lg-1 padding-top-30">
          </div>

          <div className="tt-col-lg-7 tt-align-self-center">
            <div className="text-xlg font-500 tt-text-reveal">
              we're passionate about crafting exceptional
digital experiences that ignite connections
and propel brands forward. We're more than
just a digital marketing agency; we're a team
of enthusiastic storytellers, meticulous
strategists, and creative minds driven by the
desire to make a lasting impact.
            </div>
            <Link href="/about" className="tt-btn tt-btn-outline margin-top-40 tt-magnetic-item tt-anim-fadeinup">
              <span data-hover="Read More">Read More</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
