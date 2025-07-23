import React from 'react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { ContactHeroSection } from '../components/contact/ContactHeroSection';
import { ContactFormSection } from '../components/contact/ContactFormSection';
import { DirectContactSection } from '../components/contact/DirectContactSection';
import { ContactSocialSection } from '../components/contact/ContactSocialSection';
import { ContactCTASection } from '../components/contact/ContactCTASection';

export const ContactPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <ContactHeroSection />
      <ContactFormSection />
      <DirectContactSection />
      <ContactSocialSection />
      <ContactCTASection />
      <Footer />
    </div>
  );
};