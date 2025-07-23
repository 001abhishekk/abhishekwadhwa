import React from 'react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { HireMeHeroSection } from '../components/hire/HireMeHeroSection';
import { ServicesSection } from '../components/hire/ServicesSection';
import { ClientFitSection } from '../components/hire/ClientFitSection';
import { TestimonialsSection } from '../components/hire/TestimonialsSection';
import { ProcessSection } from '../components/hire/ProcessSection';
import { PricingSection } from '../components/hire/PricingSection';
import { HireMeCTASection } from '../components/hire/HireMeCTASection';

export const HireMePage = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <HireMeHeroSection />
      <ServicesSection />
      <ClientFitSection />
      <TestimonialsSection />
      <ProcessSection />
      <PricingSection />
      <HireMeCTASection />
      <Footer />
    </div>
  );
};