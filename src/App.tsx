import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { FeaturedBlogSection } from './components/FeaturedBlogSection';
import { BooksAndPodcastsSection } from './components/BooksAndPodcastsSection';
import { CTASection } from './components/CTASection';
import { SocialMediaSection } from './components/SocialMediaSection';
import { Footer } from './components/Footer';
import { AboutPage } from './pages/AboutPage';
import { ContactPage } from './pages/ContactPage';
import { WorkPage } from './pages/WorkPage';
import { HireMePage } from './pages/HireMePage';
import { StartProjectPage } from './pages/StartProjectPage';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Routes>
          <Route path="/" element={
            <>
              <Header />
              <HeroSection />
              <AboutSection />
              <FeaturedBlogSection />
              <BooksAndPodcastsSection />
              <CTASection />
              <SocialMediaSection />
              <Footer />
            </>
          } />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/work" element={<WorkPage />} />
          <Route path="/hire" element={<HireMePage />} />
          <Route path="/start-project" element={<StartProjectPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;