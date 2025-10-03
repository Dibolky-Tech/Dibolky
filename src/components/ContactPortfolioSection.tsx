import Link from 'next/link'

export default function ContactPortfolioSection() {
  return (
    <div className="tt-section padding-top-xlg-120 padding-bottom-xlg-120 border-top">
      <div className="tt-section-inner tt-wrap">
        <div className="tt-row margin-bottom-40">
          <div className="tt-col-xl-8">
            <div className="tt-heading tt-heading-xxxlg no-margin">
              <h3 className="tt-heading-subtitle tt-text-reveal">Portfolio</h3>
              <h2 className="tt-heading-title tt-text-reveal">Explore<br /> My Work</h2>
            </div>
          </div>
          
          <div className="tt-col-xl-4 tt-align-self-end tt-xl-column-reverse margin-top-40">
            <div className="max-width-600 margin-bottom-10 tt-text-uppercase tt-text-reveal">
              Discover a showcase of my creative journey that reflects my passion for crafting engaging digital experiences
            </div>

            <div className="tt-big-round-ptn margin-top-30 margin-bottom-xlg-80 tt-anim-fadeinup">
              <Link href="/portfolio" className="tt-big-round-ptn-holder tt-magnetic-item">
                <div className="tt-big-round-ptn-inner">My<br /> Work</div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
