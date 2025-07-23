import React from 'react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { WorkHeroSection } from '../components/work/WorkHeroSection';
import { FeaturedBooksSection } from '../components/work/FeaturedBooksSection';
import { PodcastSection } from '../components/work/PodcastSection';
import { UdemyCourseSection } from '../components/work/UdemyCourseSection';
import { WorkTestimonialsSection } from '../components/work/WorkTestimonialsSection';
import { SocialProofSection } from '../components/work/SocialProofSection';
import { WorkCTASection } from '../components/work/WorkCTASection';

export const WorkPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <WorkHeroSection />
      <FeaturedBooksSection />
      <PodcastSection />
      <UdemyCourseSection />
      <WorkTestimonialsSection />
      <SocialProofSection />
      <WorkCTASection />
      <Footer />
    </div>
  );
};