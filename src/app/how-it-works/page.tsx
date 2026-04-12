import type { Metadata } from 'next';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import HowHero from '@/components/how-it-works/HowHero';
import IdentityDeepDive from '@/components/how-it-works/IdentityDeepDive';
import LoadLifecycle from '@/components/how-it-works/LoadLifecycle';
import CryptoDeepDive from '@/components/how-it-works/CryptoDeepDive';
import SecurityLayers from '@/components/how-it-works/SecurityLayers';
import FraudRulesDeepDive from '@/components/how-it-works/FraudRulesDeepDive';
import EdgeCasesGrid from '@/components/how-it-works/EdgeCasesGrid';

export const metadata: Metadata = {
  title: 'How It Works — FreightPassport',
  description:
    'Complete technical walkthrough of FreightPassport: load lifecycle, cryptographic signing, identity tiers, 34 fraud detection rules, edge case handling, and system architecture.',
  openGraph: {
    title: 'How It Works — FreightPassport',
    description:
      'From load creation to cryptographic proof. Every step verified, every handoff signed, every edge case handled.',
    type: 'website',
    siteName: 'FreightPassport',
  },
};

export default function HowItWorks() {
  return (
    <>
      <Navigation />
      <main id="main">
        <HowHero />
        <LoadLifecycle />
        <CryptoDeepDive />
        <FraudRulesDeepDive />
        <IdentityDeepDive />
        <SecurityLayers />
        <EdgeCasesGrid />
      </main>
      <Footer />
    </>
  );
}
