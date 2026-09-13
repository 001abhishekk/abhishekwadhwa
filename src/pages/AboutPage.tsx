import React from 'react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { AboutHeroSection } from '../components/about/AboutHeroSection';
import { MyStorySection } from '../components/about/MyStorySection';
import { AboutSpecializeSection } from '../components/about/AboutSpecializeSection';
import { JourneyTimelineSection } from '../components/about/JourneyTimelineSection';
import { PressMediaSection } from '../components/about/PressMediaSection';
import { SkillsValuesSection } from '../components/about/SkillsValuesSection';
import { AboutCTASection } from '../components/about/AboutCTASection';

export const AboutPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <AboutHeroSection />
      <MyStorySection />
      <AboutSpecializeSection />
      <JourneyTimelineSection />
      <PressMediaSection />
      <SkillsValuesSection />
      <AboutCTASection />
      <Footer />
    </div>
  );
};