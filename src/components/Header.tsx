'use client'

import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Header() {
  const pathname = usePathname()
  return (
    <header id="tt-header" className="tt-header-alter tt-header-scroll tt-header-filled">
      <div className="tt-header-inner tt-noise">
        <div className="tt-header-col tt-header-col-left">
          <div className="tt-logo">
            <Link href="/" className="tt-magnetic-item">
              <Image 
                src="/assets/img/logo-light.png" 
                className="tt-logo-light " 
                alt="Logo"
                width={50}
                height={30}
                priority
              />
              <Image 
                src="/assets/img/logo-dark.png" 
                className="tt-logo-dark" 
                alt="Logo"
                width={50}
                height={30}
              />
            </Link>
          </div>
        </div>

        <div className="tt-header-col tt-header-col-center">
          <nav className="tt-main-menu tt-m-menu-center">
            <div className="tt-main-menu-holder">
              <div className="tt-main-menu-inner">
                <div className="tt-main-menu-content">
                  <ul className="tt-main-menu-list">
                    <li className={`tt-submenu-wrap tt-submenu-master ${pathname === '/' ? 'active' : ''}`}>
                      <div className="tt-submenu-trigger">
                        <Link href="#">Home</Link>
                      </div>
                      <div className="tt-submenu">
                        <ul className="tt-submenu-list">
                          <li className={pathname === '/' ? 'active' : ''}>
                            <Link href="/">Landing Page v.1</Link>
                          </li>
                          <li>
                            <Link href="/landing-page-2">Landing Page v.2</Link>
                          </li>
                          <li>
                            <Link href="/landing-page-3">Landing Page v.3</Link>
                          </li>
                        </ul>
                      </div>
                    </li>

                    <li className="tt-submenu-wrap tt-submenu-master">
                      <div className="tt-submenu-trigger">
                        <Link href="#">Work</Link>
                      </div>
                      <div className="tt-submenu">
                        <ul className="tt-submenu-list">
                          <li><Link href="/portfolio">Creative Grid</Link></li>
                          <li><Link href="/portfolio-masonry">Masonry Grid</Link></li>
                          <li><Link href="/portfolio-classic">Classic Grid</Link></li>
                          <li><Link href="/portfolio-compact">Compact List</Link></li>
                          <li><Link href="/portfolio-preview">Preview List</Link></li>
                          <li><Link href="/portfolio-sticky">Portfolio Sticky</Link></li>
                          <li><Link href="/portfolio-slider">Fullscreen Slider</Link></li>
                        </ul>
                      </div>
                    </li>

                    <li className={pathname === '/about' ? 'active' : ''}><Link href="/about">About</Link></li>

                    <li className="tt-submenu-wrap tt-submenu-master">
                      <div className="tt-submenu-trigger">
                        <Link href="#">Blog</Link>
                      </div>
                      <div className="tt-submenu">
                        <ul className="tt-submenu-list">
                          <li><Link href="/blog">Blog List</Link></li>
                          <li><Link href="/blog-sidebar">Blog Sidebar</Link></li>
                          <li><Link href="/blog-compact">Blog Compact</Link></li>
                          <li><Link href="/blog-post">Blog Post</Link></li>
                          <li><Link href="/blog-post-sidebar">Blog Post Sidebar</Link></li>
                        </ul>
                      </div>
                    </li>

                    <li className={`tt-submenu-wrap tt-submenu-master ${pathname === '/contact' ? 'active' : ''}`}>
                      <div className="tt-submenu-trigger">
                        <Link href="#">Contact</Link>
                      </div>
                      <div className="tt-submenu">
                        <ul className="tt-submenu-list">
                          <li className={pathname === '/contact' ? 'active' : ''}><Link href="/contact">Contact Form</Link></li>
                          <li><Link href="/contact-simple">Contact Simple</Link></li>
                        </ul>
                      </div>
                    </li>

                    <li className="tt-submenu-wrap tt-submenu-master">
                      <div className="tt-submenu-trigger">
                        <Link href="#">More</Link>
                      </div>
                      <div className="tt-submenu">
                        <ul className="tt-submenu-list">
                          <li className="tt-submenu-wrap">
                            <div className="tt-submenu-trigger">
                              <Link href="#">Extra Pages</Link>
                            </div>
                            <div className="tt-submenu">
                              <ul className="tt-submenu-list">
                                <li><Link href="/services">Services</Link></li>
                                <li><Link href="/faq">FAQ</Link></li>
                                <li><Link href="/dummy">Dummy Page v.1</Link></li>
                                <li><Link href="/dummy-2">Dummy Page v.2</Link></li>
                                <li><Link href="/404">404 Error</Link></li>
                              </ul>
                            </div>
                          </li>
                          <li><Link href="/elements">Elements</Link></li>
                          <li><Link href="/elements-buttons">Buttons</Link></li>
                          <li><Link href="/elements-forms">Forms</Link></li>
                          <li><Link href="/elements-media">Multimedia</Link></li>
                          <li><Link href="/elements-typography">Typography</Link></li>
                        </ul>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </nav>
        </div>

        <div className="tt-header-col tt-header-col-right">
          <div id="tt-m-menu-toggle-btn-wrap">
            <div className="tt-m-menu-toggle-btn-text">
              <span className="tt-m-menu-text-menu">Menu</span>
              <span className="tt-m-menu-text-close">Close</span>
            </div>
            <div className="tt-m-menu-toggle-btn-holder">
              <Link href="#" className="tt-m-menu-toggle-btn">
                <span></span>
              </Link>
            </div>
          </div>

          <Link href="/contact" className="tt-btn tt-btn-secondary hide-from-xlg tt-magnetic-item">
            <span data-hover="Contact">Contact</span>
          </Link>

          <div className="tt-style-switch">
            <div className="tt-style-switch-inner tt-magnetic-item">
              <div className="tt-stsw-light">
                <i className="fas fa-sun"></i>
              </div>
              <div className="tt-stsw-dark">
                <i className="fas fa-moon"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
