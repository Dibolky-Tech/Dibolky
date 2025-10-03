'use client'

import Image from 'next/image'
import Link from 'next/link'

export default function Footer() {
  return (
    <footer id="tt-footer" className="border-top">
      <div className="tt-footer-inner tt-wrap">
        <div className="tt-row">
          <div className="tt-col-xl-3 tt-col-sm-6">
            <div className="tt-footer-widget">
              <h5 className="tt-footer-widget-heading">Links</h5>
              <ul className="tt-footer-widget-list">
                <li><Link href="/dummy" className="tt-link">Support</Link></li>
                <li><Link href="/dummy" className="tt-link">Licenses</Link></li>
                <li><Link href="/dummy" className="tt-link">Terms of Use</Link></li>
                <li><Link href="/dummy" className="tt-link">Privacy Policy</Link></li>
              </ul>
            </div>
          </div>

          <div className="tt-col-xl-3 tt-col-sm-6">
            <div className="tt-footer-widget">
              <h5 className="tt-footer-widget-heading">Sitemap</h5>
              <ul className="tt-footer-widget-list">
                <li><Link href="/about" className="tt-link">About Me</Link></li>
                <li><Link href="/portfolio" className="tt-link">My Work</Link></li>
                <li><Link href="/services" className="tt-link">Services</Link></li>
                <li><Link href="/contact" className="tt-link">Contact</Link></li>
              </ul>
            </div>
          </div>

          <div className="tt-col-xl-3 tt-col-sm-6">
            <div className="tt-footer-widget">
              <h5 className="tt-footer-widget-heading">Contact</h5>
              <ul className="tt-footer-widget-list">
                <li>
                  <Link 
                    href="https://www.google.com/maps/place/121+King+St,+Melbourne+VIC+3000,+Austraalia/@-37.817251,144.955775,17z/data=!3m1!4b1!4m6!3m5!1s0x6ad65d4dd5a05d97:0x3e64f855a564844d!8m2!3d-37.817251!4d144.955775!16s%2Fg%2F11g0g8c54h" 
                    className="tt-link" 
                    target="_blank" 
                    rel="nofollow noopener"
                  >
                    121 King Street,<br /> Melbourne, Australia
                  </Link>
                </li>
                <li><Link href="mailto:company@email.com" className="tt-link">company@email.com</Link></li>
                <li><Link href="tel:+(123)456789000" className="tt-link"> +(123) 456 789 000</Link></li>
                <li>
                  <div className="tt-social-buttons">
                    <ul>
                      <li>
                        <Link href="https://www.facebook.com/themetorium" className="tt-magnetic-item" target="_blank" rel="noopener">
                          <i className="fa-brands fa-facebook-f"></i>
                        </Link>
                      </li>
                      <li>
                        <Link href="https://dribbble.com/Themetorium" className="tt-magnetic-item" target="_blank" rel="noopener">
                          <i className="fa-brands fa-dribbble"></i>
                        </Link>
                      </li>
                      <li>
                        <Link href="https://www.behance.net/Themetorium" className="tt-magnetic-item" target="_blank" rel="noopener">
                          <i className="fa-brands fa-behance"></i>
                        </Link>
                      </li>
                      <li>
                        <Link href="https://www.youtube.com/" className="tt-magnetic-item" target="_blank" rel="noopener">
                          <i className="fa-brands fa-youtube"></i>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          <div className="tt-col-xl-3 tt-col-sm-6 tt-justify-content-xl-end">
            <div className="tt-footer-widget">
              <ul className="tt-footer-widget-list">
                <li>
                  <div className="tt-footer-logo">
                    <Link href="/" className="tt-magnetic-item">
                      <Image 
                        src="/assets/img/logo-light.png" 
                        className="tt-logo-light" 
                        alt="Logo"
                        width={120}
                        height={40}
                      />
                      <Image 
                        src="/assets/img/logo-dark.png" 
                        className="tt-logo-dark" 
                        alt="Logo"
                        width={120}
                        height={40}
                      />
                    </Link>
                  </div>
                </li>
                <li>
                  <div className="tt-footer-copyright">
                    © <span className="tt-copyright-year"></span> <Link href="https://themetorium.net/" className="tt-link" target="_blank" rel="nofollow noopener"> Themetorium.net</Link><br /> 
                    All Rights Reserved
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
