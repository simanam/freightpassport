import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import HeroSection from '@/components/landing/HeroSection';
import PainSection from '@/components/landing/PainSection';
import HowItWorksSection from '@/components/landing/HowItWorksSection';
import WhatYouGetSection from '@/components/landing/WhatYouGetSection';
import CredibilitySection from '@/components/landing/CredibilitySection';
import DesignPartnersSection from '@/components/landing/DesignPartnersSection';
import PrivacySection from '@/components/landing/PrivacySection';
import FAQSection from '@/components/landing/FAQSection';
import FinalCTA from '@/components/landing/FinalCTA';

export default function Home() {
  return (
    <>
      <Navigation />
      <main id="main">
        <HeroSection />
        <PainSection />
        <HowItWorksSection />
        <WhatYouGetSection />
        <CredibilitySection />
        <DesignPartnersSection />
        <PrivacySection />
        <FAQSection />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
