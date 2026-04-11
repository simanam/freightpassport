import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import HeroSection from '@/components/journey/HeroSection';
import ProblemSection from '@/components/journey/ProblemSection';
import JourneySection from '@/components/journey/JourneySection';
import LifecycleStrip from '@/components/journey/LifecycleStrip';
import IntelligenceSection from '@/components/journey/IntelligenceSection';
import IdentitySection from '@/components/journey/IdentitySection';
import NetworkEffect from '@/components/journey/NetworkEffect';
import RoadmapSection from '@/components/journey/RoadmapSection';
import FinalCTA from '@/components/journey/FinalCTA';

export default function Home() {
  return (
    <>
      <Navigation />
      <main id="main">
        <HeroSection />
        <ProblemSection />
        <JourneySection />
        <LifecycleStrip />
        <IntelligenceSection />
        <IdentitySection />
        <NetworkEffect />
        <RoadmapSection />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
