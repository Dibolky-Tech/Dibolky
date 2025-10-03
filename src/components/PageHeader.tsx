'use client'

export default function PageHeader() {
  return (
    <div id="page-header" className="ph-full ph-full-m ph-center ph-cap-xxxxlg ph-image-parallax ph-caption-parallax">
      <div className="ph-video ph-video-grayscale ph-video-cover-1">
        <div className="ph-video-inner">
          <video loop muted autoPlay playsInline preload="metadata" poster="/assets/vids/1920/video-1-1920.jpg">
            <source src="/assets/vids/placeholder.mp4" data-src="/assets/vids/1920/video-1-1920.mp4" type="video/mp4" />
            <source src="/assets/vids/placeholder.webm" data-src="/assets/vids/1920/video-1-1920.webm" type="video/webm" />
          </video>
        </div>
      </div>

      <div className="page-header-inner tt-wrap">
        <div className="ph-caption">
          <div className="ph-caption-inner">
            <h1 className="ph-caption-title">Jesper<br /> Dietrich</h1>
            <div className="ph-caption-description max-width-700">
              Over 15 years of experience<br /> in the design industry
            </div>
          </div>
        </div>
      </div>

      <div className="page-header-inner ph-mask">
        <div className="ph-mask-inner tt-wrap">
          <div className="ph-caption">
            <div className="ph-caption-inner">
              <h1 className="ph-caption-title">Digital<br /> Designer</h1>
              <div className="ph-caption-description max-width-700">
                Over 15 years of experience<br /> in the design industry
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
