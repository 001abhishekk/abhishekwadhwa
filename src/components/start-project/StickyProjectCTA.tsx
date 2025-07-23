import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

export const StickyProjectCTA = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact-section');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  if (!isVisible) return null;

  return (
    <>
      {/* Desktop Sticky CTA */}
      <div className="hidden md:block fixed bottom-8 right-8 z-50">
        <button
          onClick={scrollToContact}
          className="bg-blue-600 text-white px-6 py-3 rounded-full shadow-lg hover:bg-blue-700 hover:shadow-xl transition-all duration-300 transform hover:scale-105 font-medium"
        >
          Start a Project
        </button>
      </div>

      {/* Mobile Bottom Bar CTA */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-gray-200 p-4 shadow-lg">
        <button
          onClick={scrollToContact}
          className="w-full bg-blue-600 text-white py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors duration-200 flex items-center justify-center"
        >
          <ArrowUp className="w-4 h-4 mr-2" />
          Start Your Project
        </button>
      </div>
    </>
  );
};