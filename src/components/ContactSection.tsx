'use client'

import Link from 'next/link'

export default function ContactSection() {
  return (
    <div className="tt-section padding-top-xlg-120 padding-bottom-xlg-120">
      <div className="tt-section-inner tt-wrap">
        <div className="tt-row margin-bottom-40">
          <div className="tt-col-xl-8">
            <div className="tt-heading tt-heading-xxxlg no-margin">
              <h3 className="tt-heading-subtitle tt-text-reveal">Contact</h3>
              <h2 className="tt-heading-title tt-text-reveal">Let&apos;s Work<br /> Together</h2>
            </div>
          </div>
          
          <div className="tt-col-xl-4 tt-align-self-end tt-xl-column-reverse margin-top-40">
            <div className="max-width-600 margin-bottom-10 tt-text-uppercase text-pretty tt-text-reveal">
              Feeling good about a new project? Write me what&apos;s in your mind<br /> and let&apos;s talk about it!
            </div>

            <div className="tt-big-round-ptn margin-top-30 margin-bottom-xlg-80 tt-anim-fadeinup">
              <Link href="/contact" className="tt-big-round-ptn-holder tt-magnetic-item">
                <div className="tt-big-round-ptn-inner">Let&apos;s<br /> Connect!</div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
