import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import Problem from '@/components/Problem';
import Solution from '@/components/Solution';
import PreVerification from '@/components/PreVerification';
import HowItWorks from '@/components/HowItWorks';
import AICapabilities from '@/components/AICapabilities';
import Testimonials from '@/components/Testimonials';
import CTA from '@/components/CTA';
import Footer from '@/components/Footer';
import ThemeToggle from '@/components/ThemeToggle';

export default function Home() {
  return (
    <>
      {/* Background Grid */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px'
          }}
        />
      </div>

      {/* Background Gradient - Theme Aware */}
      <div className="fixed top-0 left-1/2 -translate-x-1/2 w-full max-w-[1400px] h-[800px] pointer-events-none z-0">
        <div
          className="absolute inset-0"
          style={{
            background: 'var(--gradient-hero)'
          }}
        />
      </div>

      <Navigation />

      <main>
        <Hero />
        <Problem />
        <Solution />
        <PreVerification />
        <HowItWorks />
        <AICapabilities />
        <Testimonials />
        <CTA />
      </main>

      <Footer />

      {/* Theme Toggle - Fixed position */}
      <ThemeToggle />
    </>
  );
}
