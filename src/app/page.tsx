import ClientWrapper from '@/components/ClientWrapper'
import PageTransition from '@/components/PageTransition'
import MagicCursor from '@/components/MagicCursor'
import Header from '@/components/Header'
import PageHeader from '@/components/PageHeader'
import AboutSection from '@/components/AboutSection'
import ProjectsSection from '@/components/ProjectsSection'
import ScrollingText from '@/components/ScrollingText'
import ServicesSection from '@/components/ServicesSection'
import ShowreelSection from '@/components/ShowreelSection'
import TestimonialsSection from '@/components/TestimonialsSection'
import AwardsSection from '@/components/AwardsSection'
import ContactSection from '@/components/ContactSection'
import Footer from '@/components/Footer'
import ScrollToTop from '@/components/ScrollToTop'

export default function Home() {
  return (
    <>
      <ClientWrapper>
        <PageTransition />
        <MagicCursor />
      </ClientWrapper>
      
      <Header />
      
      <div id="tt-content-wrap">
        <PageHeader />
        
        <div id="tt-page-content">
          <AboutSection />
          <ProjectsSection />
          <ScrollingText />
          <ServicesSection />
          <ShowreelSection />
          <TestimonialsSection />
          <AwardsSection />
          <ContactSection />
        </div>
        
        <Footer />
        <ClientWrapper>
          <ScrollToTop />
        </ClientWrapper>
      </div>
    </>
  )
}