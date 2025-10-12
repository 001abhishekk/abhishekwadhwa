import React from 'react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { BacklinkHeroSection } from '../components/backlink/BacklinkHeroSection';
import { ProblemStatementSection } from '../components/backlink/ProblemStatementSection';
import { ProcessSection } from '../components/backlink/ProcessSection';
import { CaseStudiesSection } from '../components/backlink/CaseStudiesSection';
import { ServicePackagesSection } from '../components/backlink/ServicePackagesSection';
import { WhyWorkWithMeSection } from '../components/backlink/WhyWorkWithMeSection';
import { ClosingCTASection } from '../components/backlink/ClosingCTASection';
import { FAQSection } from '../components/backlink/FAQSection';

export const BacklinkAuditLanding = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <BacklinkHeroSection />
      <ProblemStatementSection />
      <ProcessSection />
      <CaseStudiesSection />
      <ServicePackagesSection />
      <WhyWorkWithMeSection />
      <ClosingCTASection />
      <FAQSection />
      <Footer />
    </div>
  );
};