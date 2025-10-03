'use client'

import Image from 'next/image'
import Link from 'next/link'

export default function ProjectsSection() {
  return (
    <>
      <div className="tt-section padding-top-xlg-140 border-top">
        <div className="tt-section-inner tt-wrap">
          <div className="tt-row">
            <div className="tt-col-xl-8">
              <div className="tt-heading tt-heading-xxxlg">
                <h3 className="tt-heading-subtitle tt-text-reveal">Featured Work</h3>
                <h2 className="tt-heading-title tt-text-reveal">Projects</h2>
              </div>
              <div className="tt-text-uppercase max-width-400 margin-left-xlg-10-p text-pretty tt-text-reveal">
                Please explore my selected projects below. Click on each one for an overview
              </div>
            </div>
            
            <div className="tt-col-xl-4 tt-align-self-end margin-top-30">
              <div className="tt-big-round-ptn tt-anim-fadeinup">
                <Link href="/portfolio-preview" className="tt-big-round-ptn-holder tt-magnetic-item">
                  <div className="tt-big-round-ptn-inner">All<br /> Projects</div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="tt-section no-padding-top padding-top-xlg-80 padding-bottom-20 padding-bottom-xlg-80">
        <div className="tt-section-inner">
          <div className="tt-portfolio-preview-list tt-ppli-portrait tt-ppli-hover">
            <div className="tt-ppl-items-list">
              <Link href="/single-project-1" className="tt-ppl-item">
                <div className="tt-ppli-preview">
                  <div className="tt-ppli-preview-image">
                    <Image 
                      src="/assets/img/portfolio/800/portfolio-1.jpg" 
                      alt="Tortillas Project"
                      width={800}
                      height={600}
                    />
                  </div>
                </div>
                <div className="tt-ppl-item-inner">
                  <div className="tt-ppl-item-holder">
                    <div className="tt-ppli-col tt-ppli-col-count">
                      <div className="tt-ppli-count"></div>
                    </div>
                    <div className="tt-ppli-col tt-ppli-col-caption">
                      <div className="tt-ppli-caption">
                        <h2 className="tt-ppli-title">Tortillas</h2>
                        <div className="tt-ppli-categories">
                          <div className="tt-ppli-category">Lifestyle</div>
                        </div>
                      </div>
                    </div>
                    <div className="tt-ppli-col tt-ppli-col-info tt-justify-content-md-end">
                      <div className="tt-ppli-info">Visual / Branding</div>
                    </div>
                  </div>
                </div>
              </Link>

              <Link href="/single-project-2" className="tt-ppl-item">
                <div className="tt-ppli-preview">
                  <div className="tt-ppli-preview-image">
                    <Image 
                      src="/assets/img/portfolio/800/portfolio-2.jpg" 
                      alt="Coffee Shop Project"
                      width={800}
                      height={600}
                    />
                  </div>
                </div>
                <div className="tt-ppl-item-inner">
                  <div className="tt-ppl-item-holder">
                    <div className="tt-ppli-col tt-ppli-col-count">
                      <div className="tt-ppli-count"></div>
                    </div>
                    <div className="tt-ppli-col tt-ppli-col-caption">
                      <div className="tt-ppli-caption">
                        <h2 className="tt-ppli-title">Coffee Shop</h2>
                        <div className="tt-ppli-categories">
                          <div className="tt-ppli-category">Lifestyle</div>
                        </div>
                      </div>
                    </div>
                    <div className="tt-ppli-col tt-ppli-col-info tt-justify-content-md-end">
                      <div className="tt-ppli-info">Art Direction / Visual</div>
                    </div>
                  </div>
                </div>
              </Link>

              <Link href="/single-project-3" className="tt-ppl-item">
                <div className="tt-ppli-preview">
                  <div className="tt-ppli-preview-video">
                    <video loop muted preload="metadata" poster="/assets/vids/800/video-4-800.jpg">
                      <source src="/assets/vids/placeholder.mp4" data-src="/assets/vids/800/video-4-800.mp4" type="video/mp4" />
                      <source src="/assets/vids/placeholder.webm" data-src="/assets/vids/800/video-4-800.webm" type="video/webm" />
                    </video>
                  </div>
                </div>
                <div className="tt-ppl-item-inner">
                  <div className="tt-ppl-item-holder">
                    <div className="tt-ppli-col tt-ppli-col-count">
                      <div className="tt-ppli-count"></div>
                    </div>
                    <div className="tt-ppli-col tt-ppli-col-caption">
                      <div className="tt-ppli-caption">
                        <h2 className="tt-ppli-title">Fashion Shoot</h2>
                        <div className="tt-ppli-categories">
                          <div className="tt-ppli-category">Artistic</div>
                        </div>
                      </div>
                    </div>
                    <div className="tt-ppli-col tt-ppli-col-info tt-justify-content-md-end">
                      <div className="tt-ppli-info">Photographer / Visual / Branding</div>
                    </div>
                  </div>
                </div>
              </Link>

              <Link href="/single-project-4" className="tt-ppl-item">
                <div className="tt-ppli-preview">
                  <div className="tt-ppli-preview-image">
                    <Image 
                      src="/assets/img/portfolio/800/portfolio-3.jpg" 
                      alt="Postorganic Project"
                      width={800}
                      height={600}
                    />
                  </div>
                </div>
                <div className="tt-ppl-item-inner">
                  <div className="tt-ppl-item-holder">
                    <div className="tt-ppli-col tt-ppli-col-count">
                      <div className="tt-ppli-count"></div>
                    </div>
                    <div className="tt-ppli-col tt-ppli-col-caption">
                      <div className="tt-ppli-caption">
                        <h2 className="tt-ppli-title">Postorganic</h2>
                        <div className="tt-ppli-categories">
                          <div className="tt-ppli-category">Artistic</div>
                        </div>
                      </div>
                    </div>
                    <div className="tt-ppli-col tt-ppli-col-info tt-justify-content-md-end">
                      <div className="tt-ppli-info">Design / Branding</div>
                    </div>
                  </div>
                </div>
              </Link>

              <Link href="/single-project-5" className="tt-ppl-item">
                <div className="tt-ppli-preview">
                  <div className="tt-ppli-preview-image">
                    <Image 
                      src="/assets/img/portfolio/800/portfolio-4.jpg" 
                      alt="Embrace Yourself Project"
                      width={800}
                      height={600}
                    />
                  </div>
                </div>
                <div className="tt-ppl-item-inner">
                  <div className="tt-ppl-item-holder">
                    <div className="tt-ppli-col tt-ppli-col-count">
                      <div className="tt-ppli-count"></div>
                    </div>
                    <div className="tt-ppli-col tt-ppli-col-caption">
                      <div className="tt-ppli-caption">
                        <h2 className="tt-ppli-title">Embrace Yourself</h2>
                        <div className="tt-ppli-categories">
                          <div className="tt-ppli-category">Wellness</div>
                        </div>
                      </div>
                    </div>
                    <div className="tt-ppli-col tt-ppli-col-info tt-justify-content-md-end">
                      <div className="tt-ppli-info">Art Direction / Design / Branding</div>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
