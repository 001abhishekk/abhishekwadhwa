import React from 'react';
import { BacklinkHeroSection } from '../components/backlink/BacklinkHeroSection';
import { ProblemStatementSection } from '../components/backlink/ProblemStatementSection';
import { ProcessSection } from '../components/backlink/ProcessSection';
import { CaseStudiesSection } from '../components/backlink/CaseStudiesSection';
import { ServicePackagesSection } from '../components/backlink/ServicePackagesSection';
import { WhyWorkWithMeSection } from '../components/backlink/WhyWorkWithMeSection';
import { ClosingCTASection } from '../components/backlink/ClosingCTASection';
import { FAQSection } from '../components/backlink/FAQSection';
import { BacklinkFooter } from '../components/backlink/BacklinkFooter';

export const BacklinkAuditLanding = () => {
  return (
    <div className="min-h-screen bg-white">
      <BacklinkHeroSection />
      <ProblemStatementSection />
      <ProcessSection />
      <CaseStudiesSection />
      <ServicePackagesSection />
      <WhyWorkWithMeSection />
      <ClosingCTASection />
      <FAQSection />
      <BacklinkFooter />
    </div>
  );
};