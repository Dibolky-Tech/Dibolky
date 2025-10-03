'use client'

export default function ScrollToTop() {
  return (
    <a href="#" className="tt-scroll-to-top">
      <div className="tt-stt-progress tt-magnetic-item">
        <svg className="tt-stt-progress-circle" width="100%" height="100%" viewBox="-1 -1 102 102">
          <path d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98"></path>
        </svg>
      </div>
    </a>
  )
}
