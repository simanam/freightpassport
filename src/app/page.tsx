import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import HeroSection from '@/components/journey/HeroSection';
import IdentitySection from '@/components/journey/IdentitySection';
import JourneySection from '@/components/journey/JourneySection';
import LifecycleStrip from '@/components/journey/LifecycleStrip';
import ProblemSection from '@/components/journey/ProblemSection';
import IntelligenceSection from '@/components/journey/IntelligenceSection';
import NetworkEffect from '@/components/journey/NetworkEffect';
import RoadmapSection from '@/components/journey/RoadmapSection';
import FinalCTA from '@/components/journey/FinalCTA';

export default function Home() {
  return (
    <>
      <Navigation />
      <main id="main">
        <HeroSection />
        <IdentitySection />
        <JourneySection />
        <LifecycleStrip />
        <ProblemSection />
        <IntelligenceSection />
        <NetworkEffect />
        <RoadmapSection />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
