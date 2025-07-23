import React from 'react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { StartProjectHeroSection } from '../components/start-project/StartProjectHeroSection';
import { PreQualSection } from '../components/start-project/PreQualSection';
import { ServicesPreviewSection } from '../components/start-project/ServicesPreviewSection';
import { WorkStyleSection } from '../components/start-project/WorkStyleSection';
import { ManualContactSection } from '../components/start-project/ManualContactSection';
import { StickyProjectCTA } from '../components/start-project/StickyProjectCTA';

export const StartProjectPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <StartProjectHeroSection />
      <PreQualSection />
      <ServicesPreviewSection />
      <WorkStyleSection />
      <ManualContactSection />
      <StickyProjectCTA />
      <Footer />
    </div>
  );
};