'use client'

import Link from 'next/link'

export default function TestimonialsSection() {
  return (
    <div className="tt-section border-bottom">
      <div className="tt-section-inner tt-wrap">
        <div className="tt-sticker">
          <div className="tt-row">
            <div className="tt-col-lg-4 margin-bottom-40">
              <div className="tt-sticker-sticky tt-sticky-element">
                <div className="tt-heading tt-heading-xxlg">
                  <h3 className="tt-heading-subtitle tt-text-reveal">Testimonials</h3>
                  <h2 className="tt-heading-title tt-text-reveal">What<br /> They Say</h2>
                  <p className="max-width-500 tt-text-uppercase tt-text-reveal">Genuine words from the people I&apos;ve had the pleasure to work with.</p>
                </div>
                <Link href="/dummy" className="tt-btn tt-btn-outline tt-magnetic-item tt-anim-fadeinup">
                  <span data-hover="Read More">Read More</span>
                </Link>
              </div>
            </div>

            <div className="tt-col-lg-8">
              <div className="tt-sticker-scroller">
                <div className="tt-sticky-testimonials tt-stte-reversed-colors">
                  <div className="tt-stte-item">
                    <div className="tt-stte-card cursor-alter">
                      <div className="tt-stte-card-counter"></div>
                      <div className="tt-stte-card-caption">
                        <div className="tt-stte-text">
                          &ldquo;One of the best template I&apos;ve ever had. I love it! It&apos;s fully customizable, well coded, fast and responsive - fitting for all kind of devices&rdquo;.
                        </div>
                        <div className="tt-stte-subtext">
                          <Link href="https://themetorium.net/" className="tt-link" target="_blank" rel="noopener">- Wironimo</Link>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="tt-stte-item">
                    <div className="tt-stte-card cursor-alter">
                      <div className="tt-stte-card-counter"></div>
                      <div className="tt-stte-card-caption">
                        <div className="tt-stte-text">
                          &ldquo;Brilliant template. Tons of options, many concepts, design flexibility, code quality, explanatory comments in each section for easy styling&rdquo;.
                        </div>
                        <div className="tt-stte-subtext">- Gneto</div>
                      </div>
                    </div>
                  </div>

                  <div className="tt-stte-item">
                    <div className="tt-stte-card cursor-alter">
                      <div className="tt-stte-card-counter"></div>
                      <div className="tt-stte-card-caption">
                        <div className="tt-stte-text">
                          &ldquo;Easy to customize, plenty of choices to display your portfolio, fast loading times. Excellent support&rdquo;.
                        </div>
                        <div className="tt-stte-subtext">
                          <Link href="https://themetorium.net/" className="tt-link" target="_blank" rel="noopener">- Brendak</Link>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="tt-stte-item">
                    <div className="tt-stte-card cursor-alter">
                      <div className="tt-stte-card-counter"></div>
                      <div className="tt-stte-card-caption">
                        <div className="tt-stte-text">
                          &ldquo;Very nice design and well organised and commented code. Also good customer service&rdquo;.
                        </div>
                        <div className="tt-stte-subtext">- Gazzzzz</div>
                      </div>
                    </div>
                  </div>

                  <div className="tt-stte-item">
                    <div className="tt-stte-card cursor-alter">
                      <div className="tt-stte-card-counter"></div>
                      <div className="tt-stte-card-caption">
                        <div className="tt-stte-text">
                          &ldquo;I founded a bug on Iphone and Ipad and the author fixed very quickly. I appreciated his efforts and his quickness in solving the problem&rdquo;.
                        </div>
                        <div className="tt-stte-subtext">- Admanente</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
