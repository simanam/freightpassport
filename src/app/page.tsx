import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import HeroSection from '@/components/landing/HeroSection';
import PainSection from '@/components/landing/PainSection';
import HowItWorksSection from '@/components/landing/HowItWorksSection';
import FlowDiagram from '@/components/landing/FlowDiagram';
import ViewsSection from '@/components/landing/ViewsSection';
import LoadAnatomy from '@/components/landing/LoadAnatomy';
import MagicLinksSection from '@/components/landing/MagicLinksSection';
import AlertsSection from '@/components/landing/AlertsSection';
import MoreSection from '@/components/landing/MoreSection';
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
        <FlowDiagram />
        <ViewsSection />
        <LoadAnatomy />
        <MagicLinksSection />
        <AlertsSection />
        <MoreSection />
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
