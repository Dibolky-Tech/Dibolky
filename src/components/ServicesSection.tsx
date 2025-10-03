'use client'

import Link from 'next/link'

export default function ServicesSection() {
  return (
    <>
      <div className="tt-section no-padding-bottom padding-bottom-xlg-80">
        <div className="tt-section-inner tt-wrap">
          <div className="tt-row">
            <div className="tt-col-xl-8">
              <div className="tt-heading tt-heading-xxxlg">
                <h3 className="tt-heading-subtitle tt-text-reveal">What I Do</h3>
                <h2 className="tt-heading-title tt-text-reveal">Services</h2>
              </div>
              <div className="tt-text-uppercase max-width-400 margin-left-xlg-10-p text-pretty tt-text-reveal">
                Comprehensive digital services to boost your online presence and achieve impactful results.
              </div>
            </div>
            
            <div className="tt-col-xl-4 tt-align-self-end margin-top-40">
              <div className="tt-big-arrow tt-ba-angle-bottom-left tt-anim-fadeinup">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                  <path d="M13.025 1l-2.847 2.828 6.176 6.176h-16.354v3.992h16.354l-6.176 6.176 2.847 2.828 10.975-11z"></path>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="tt-section">
        <div className="tt-section-inner">
          <div className="tt-horizontal-accordion tt-hac-alter-hover tt-anim-fadeinup">
            <div className="tt-hac-item cursor-alter">
              <div className="tt-hac-item-count"></div>
              <div className="tt-hac-item-inner">
                <div className="tt-hac-item-content">
                  <div className="tt-haci-content-top">
                    <h2 className="tt-haci-title">Digital<br /> Strategy</h2>
                    <div className="tt-haci-description">
                      Crafting data-driven strategies to elevate your online presence. I align your business goals with innovative digital solutions, ensuring measurable growth and a competitive edge in the digital landscape.
                    </div>
                  </div>
                  <div className="tt-haci-content-bottom">
                    <Link href="/services" className="tt-btn tt-btn-outline tt-magnetic-item">
                      <span data-hover="Read More">Read More</span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="tt-hac-item cursor-alter">
              <div className="tt-hac-item-count"></div>
              <div className="tt-hac-item-inner">
                <div className="tt-hac-item-content">
                  <div className="tt-haci-content-top">
                    <h2 className="tt-haci-title">Branding<br /> &amp; Identity</h2>
                    <div className="tt-haci-description">
                      Building brands that resonate. From logos to messaging, I create cohesive and memorable identities that reflect your values, connect with your audience, and stand out in the market.
                    </div>
                  </div>
                  <div className="tt-haci-content-bottom">
                    <Link href="/services" className="tt-btn tt-btn-outline tt-magnetic-item">
                      <span data-hover="Read More">Read More</span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="tt-hac-item cursor-alter">
              <div className="tt-hac-item-count"></div>
              <div className="tt-hac-item-inner">
                <div className="tt-hac-item-content">
                  <div className="tt-haci-content-top">
                    <h2 className="tt-haci-title">UI / UX<br /> Design</h2>
                    <div className="tt-haci-description">
                      Designing intuitive and engaging experiences. I blend user-centered design principles with cutting-edge aesthetics to create interfaces that are not only beautiful but also functional and easy to navigate.
                    </div>
                  </div>
                  <div className="tt-haci-content-bottom">
                    <Link href="/services" className="tt-btn tt-btn-outline tt-magnetic-item">
                      <span data-hover="Read More">Read More</span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="tt-hac-item cursor-alter">
              <div className="tt-hac-item-count"></div>
              <div className="tt-hac-item-inner">
                <div className="tt-hac-item-content">
                  <div className="tt-haci-content-top">
                    <h2 className="tt-haci-title">Web<br /> Design</h2>
                    <div className="tt-haci-description">
                      Transforming ideas into stunning websites. My custom web designs are tailored to your brand, optimized for performance, and designed to captivate your audience while driving conversions.
                    </div>
                  </div>
                  <div className="tt-haci-content-bottom">
                    <Link href="/services" className="tt-btn tt-btn-outline tt-magnetic-item">
                      <span data-hover="Read More">Read More</span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="tt-hac-item cursor-alter">
              <div className="tt-hac-item-count"></div>
              <div className="tt-hac-item-inner">
                <div className="tt-hac-item-content">
                  <div className="tt-haci-content-top">
                    <h2 className="tt-haci-title">Product<br /> Design</h2>
                    <div className="tt-haci-description">
                      Innovating with purpose. I design products that solve real problems, combining functionality, aesthetics, and user experience to deliver solutions that users love and businesses rely on.
                    </div>
                  </div>
                  <div className="tt-haci-content-bottom">
                    <Link href="/services" className="tt-btn tt-btn-outline tt-magnetic-item">
                      <span data-hover="Read More">Read More</span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
