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
                    <li className={`${pathname === '/' ? 'active' : ''}`}>
                        <Link href="/">Home</Link>
                    </li>

                    <li className={`${pathname === '/works' ? 'active' : ''}`}>
                        <Link href="/projects">Work</Link>
                    </li>

                    <li className={pathname === '/about' ? 'active' : ''}><Link href="/about">About</Link></li>

                    <li className={pathname === '/blog' ? 'active' : ''}><Link href="#">Blog</Link></li>
                    <li className={pathname === '/community' ? 'active' : ''}><Link href="#">Community</Link></li>

                    <li className={pathname === '/contact' ? 'active' : ''}><Link href="/contact">Contact</Link></li>

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
