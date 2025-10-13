import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { BooksAndPodcastsSection } from './components/BooksAndPodcastsSection';
import { FeaturedBlogSection } from './components/FeaturedBlogSection';
import { SocialMediaSection } from './components/SocialMediaSection';
import { WorkSection } from './components/WorkSection';
import { CTASection } from './components/CTASection';
import { Footer } from './components/Footer';
import { AboutPage } from './pages/AboutPage';
import { WorkPage } from './pages/WorkPage';
import { ContactPage } from './pages/ContactPage';
import { HireMePage } from './pages/HireMePage';
import { StartProjectPage } from './pages/StartProjectPage';
import { BacklinkAuditLanding } from './pages/BacklinkAuditLanding';

function HomePage() {
  return (
    <>
      <Header />
      <HeroSection />
      <AboutSection />
      <WorkSection />
      <BooksAndPodcastsSection />
      <FeaturedBlogSection />
      <SocialMediaSection />
      <CTASection />
      <Footer />
    </>
  );
}

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/work" element={<WorkPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/hire-me" element={<HireMePage />} />
          <Route path="/start-project" element={<StartProjectPage />} />
          <Route path="/backlink-audit" element={<BacklinkAuditLanding />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;