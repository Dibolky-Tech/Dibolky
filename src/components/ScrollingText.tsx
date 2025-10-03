'use client'

export default function ScrollingText() {
  return (
    <div className="tt-section no-padding padding-top-xlg-40 padding-bottom-xlg-40">
      <div className="tt-section-inner">
        <div className="tt-scrolling-text-crossed">
          <div className="tt-scrolling-text-crossed-inner">
            <div
              className="tt-scrolling-text scrt-dyn-separator scrt-color-reverse"
              data-scroll-speed="7"
              data-change-direction="true"
              data-opposite-direction="true"
              style={{ backgroundColor: '#CAFF00' }}
            >
              <div className="tt-scrt-inner" >
                <div className="tt-scrt-content" >
                  Over 15 years of experience 
                  <span className="tt-scrt-separator">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                      <path d="M13.025 1l-2.847 2.828 6.176 6.176h-16.354v3.992h16.354l-6.176 6.176 2.847 2.828 10.975-11z"></path>
                    </svg>
                  </span> 
                </div>
              </div>
            </div>

            <div className="tt-scrolling-text scrt-dyn-separator" data-scroll-speed="7" data-change-direction="true">
              <div className="tt-scrt-inner">
                <div className="tt-scrt-content"
                style={{ color: '#CAFF00' }}
                >
                  Over 15 years of experience 
                  <span className="tt-scrt-separator">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      style={{ color: '#CAFF00', fill: 'currentColor' }}
                    >
                      <path
                        d="M13.025 1l-2.847 2.828 6.176 6.176h-16.354v3.992h16.354l-6.176 6.176 2.847 2.828 10.975-11z"
                        fill="currentColor"
                      ></path>
                    </svg>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
