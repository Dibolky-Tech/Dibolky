export default function AboutPageHeader() {
  return (
    <div id="page-header" className="ph-full ph-full-m ph-cap-xxxxlg ph-center ph-image-parallax ph-caption-parallax">
      <div className="page-header-inner tt-wrap">
        <div className="ph-caption">
          <div className="ph-caption-inner">
            <h2 className="ph-caption-subtitle">Jesper Dietrich</h2>
            <h1 className="ph-caption-title">About Me</h1>
            <div className="ph-caption-description max-width-700">
              Design that doesn&apos;t just look good,<br /> but works beautifully too.
            </div>
          </div>
        </div>
      </div>

      <div className="page-header-inner ph-mask">
        <div className="ph-mask-inner tt-wrap">
          <div className="ph-caption">
            <div className="ph-caption-inner">
              <h2 className="ph-caption-subtitle">Jesper Dietrich</h2>
              <h1 className="ph-caption-title">Who I Am</h1>
              <div className="ph-caption-description max-width-700">
                Where creativity and strategy come<br /> together for impactful results.
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="ph-social">
        <ul>
          <li>
            <a href="https://www.facebook.com/themetorium" className="tt-magnetic-item" target="_blank" rel="noopener">
              <i className="fa-brands fa-facebook-f"></i>
            </a>
          </li>
          <li>
            <a href="https://dribbble.com/Themetorium" className="tt-magnetic-item" target="_blank" rel="noopener">
              <i className="fa-brands fa-dribbble"></i>
            </a>
          </li>
          <li>
            <a href="https://www.behance.net/Themetorium" className="tt-magnetic-item" target="_blank" rel="noopener">
              <i className="fa-brands fa-behance"></i>
            </a>
          </li>
          <li>
            <a href="https://www.youtube.com/" className="tt-magnetic-item" target="_blank" rel="noopener">
              <i className="fa-brands fa-youtube"></i>
            </a>
          </li>
        </ul>
      </div>

      <div className="tt-scroll-down">
        <a href="#tt-page-content" className="tt-scroll-down-inner tt-magnetic-item" data-offset="0">
          <div className="tt-scrd-icon"></div>
          <svg viewBox="0 0 500 500">
            <defs>
              <path d="M50,250c0-110.5,89.5-200,200-200s200,89.5,200,200s-89.5,200-200,200S50,360.5,50,250" id="textcircle"></path>
            </defs>
            <text dy="30">
              <textPath xlinkHref="#textcircle">Scroll to Explore - Scroll to Explore -</textPath>
            </text>
          </svg>
        </a>
      </div>
    </div>
  )
}
