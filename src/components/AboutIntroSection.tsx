import Link from 'next/link'

export default function AboutIntroSection() {
  return (
    <div className="tt-section no-padding-bottom padding-bottom-xlg-40">
      <div className="tt-section-inner tt-wrap">
        <div className="tt-row tt-lg-row-reverse">
          <div className="tt-col-lg-6 margin-bottom-20">
            <div className="tt-video ttv-portrait ttv-grayscale">
              <video playsInline muted autoPlay loop preload="metadata" poster="/assets/vids/1200/video-3-1200.jpg" className="tt-anim-zoomin">
                <source src="/assets/vids/placeholder.mp4" data-src="/assets/vids/1200/video-3-1200.mp4" type="video/mp4" />
                <source src="/assets/vids/placeholder.webm" data-src="/assets/vids/1200/video-3-1200.webm" type="video/webm" />
              </video>
            </div>
          </div>

          <div className="tt-col-lg-1">
          </div>

          <div className="tt-col-lg-5">
            <h2 className="tt-font-alter tt-anim-fadeinup">Hello!</h2>
            <div className="text-lg tt-anim-fadeinup">
              <p>I&apos;m Jesper Dietrich, a Melbourne-based creative designer with over 15 years of crafting impactful digital solutions.</p>

              <p>I believe great design is more than just aesthetics—it&apos;s about strategy, usability, and creating meaningful connections between brands and their audiences.</p>

              <p>With a keen eye for detail, a passion for innovation, and a user-centered approach, I collaborate with brands of all sizes to bring their vision to life. Let&apos;s work together to create something extraordinary.</p>

              <div className="tt-big-round-ptn margin-top-20 margin-left-xlg-10-p">
                <Link href="/portfolio" className="tt-big-round-ptn-holder tt-magnetic-item">
                  <div className="tt-big-round-ptn-inner">Explore<br /> My Work</div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
