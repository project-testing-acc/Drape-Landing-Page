import { useEffect } from 'react'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import Hero from '@/components/features/Hero'
import BrandLogos from '@/components/features/BrandLogos'
import Features from '@/components/features/Features'
import VideoDemo from '@/components/features/VideoDemo'
import HowItWorks from '@/components/features/HowItWorks'
import Testimonials from '@/components/features/Testimonials'
import Pricing from '@/components/features/Pricing'
import WaitlistForm from '@/components/features/WaitlistForm'
import CTASection from '@/components/features/CTASection'
import { useScrollReveal } from '@/hooks/useScrollReveal'

// Page transition fade-in on load
function PageTransition({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    document.body.style.opacity = '0'
    document.body.style.transition = 'opacity 0.5s ease'
    const t = setTimeout(() => {
      document.body.style.opacity = '1'
    }, 50)
    return () => clearTimeout(t)
  }, [])
  return <>{children}</>
}

export default function App() {
  // Initialize scroll reveal after mount
  useScrollReveal()

  return (
    <PageTransition>
      <div className="min-h-screen overflow-x-hidden" style={{ backgroundColor: '#07070F', color: '#F0F0FF' }}>
        <Navbar />
        <main>
          <Hero />
          <div className="section-divider mx-auto max-w-5xl" />
          <BrandLogos />
          <div className="section-divider mx-auto max-w-5xl" />
          <Features />
          <div className="section-divider mx-auto max-w-5xl" />
          <VideoDemo />
          <div className="section-divider mx-auto max-w-5xl" />
          <HowItWorks />
          <div className="section-divider mx-auto max-w-5xl" />
          <Testimonials />
          <div className="section-divider mx-auto max-w-5xl" />
          <Pricing />
          <div className="section-divider mx-auto max-w-5xl" />
          <WaitlistForm />
          <CTASection />
        </main>
        <Footer />
      </div>
    </PageTransition>
  )
}
