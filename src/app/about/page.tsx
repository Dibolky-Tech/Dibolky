import ClientWrapper from '@/components/ClientWrapper'
import PageTransition from '@/components/PageTransition'
import MagicCursor from '@/components/MagicCursor'
import Header from '@/components/Header'
import AboutPageHeader from '@/components/AboutPageHeader'
import AboutIntroSection from '@/components/AboutIntroSection'
import AboutScrollingText from '@/components/AboutScrollingText'
import AboutServicesSection from '@/components/AboutServicesSection'
import AboutContactSection from '@/components/AboutContactSection'
import Footer from '@/components/Footer'
import ScrollToTop from '@/components/ScrollToTop'

export default function About() {
  return (
    <>
      <ClientWrapper>
        <PageTransition />
        <MagicCursor />
      </ClientWrapper>
      
      <Header />
      
      <div id="tt-content-wrap">
        <AboutPageHeader />
        
        <div id="tt-page-content">
          <AboutIntroSection />
          <AboutScrollingText />
          <AboutServicesSection />
          <AboutContactSection />
        </div>
        
        <Footer />
        <ClientWrapper>
          <ScrollToTop />
        </ClientWrapper>
      </div>
    </>
  )
}
