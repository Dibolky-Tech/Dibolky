'use client'

export default function ShowreelSection() {
  return (
    <div className="tt-section no-padding-top">
      <div className="tt-section-inner">
        <div className="tt-clipper">
          <a 
            href="https://www.youtube.com/watch?v=6nGs9iGrpok" 
            className="tt-clipper-inner" 
            data-cursor="Play<br>Reel" 
            data-fancybox 
            data-caption="My awesome showreel. :)"
          >
            <div className="tt-clipper-bg">
              <video loop muted autoPlay playsInline preload="metadata" poster="/assets/vids/1920/showreel-1920.jpg">
                <source src="/assets/vids/placeholder.mp4" data-src="/assets/vids/1920/showreel-1920.mp4" type="video/mp4" />
                <source src="/assets/vids/placeholder.webm" data-src="/assets/vids/1920/showreel-1920.webm" type="video/webm" />
              </video>
            </div>

            <div className="tt-clipper-content">
              <div className="tt-clipper-btn">
                <i className="fa-solid fa-play"></i>
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
  )
}
