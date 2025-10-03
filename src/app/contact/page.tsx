import ClientWrapper from '@/components/ClientWrapper'
import PageTransition from '@/components/PageTransition'
import MagicCursor from '@/components/MagicCursor'
import Header from '@/components/Header'
import ContactPageHeader from '@/components/ContactPageHeader'
import ContactFormSection from '@/components/ContactFormSection'
import ContactPortfolioSection from '@/components/ContactPortfolioSection'
import Footer from '@/components/Footer'
import ScrollToTop from '@/components/ScrollToTop'

export default function Contact() {
  return (
    <>
      <ClientWrapper>
        <PageTransition />
        <MagicCursor />
      </ClientWrapper>
      
      <Header />
      
      <div id="tt-content-wrap">
        <ContactPageHeader />
        
        <div id="tt-page-content">
          <ContactFormSection />
          <ContactPortfolioSection />
        </div>
        
        <Footer />
        <ClientWrapper>
          <ScrollToTop />
        </ClientWrapper>
      </div>
    </>
  )
}
