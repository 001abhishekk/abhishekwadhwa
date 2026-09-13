import React from 'react';
import { ArrowRight, Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';

export const ContactCTASection = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-700">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="mb-8">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Let's Build Something Meaningful
          </h2>
          <p className="text-xl text-blue-100 leading-relaxed max-w-2xl mx-auto">
            Have a marketing challenge, growth opportunity, or project you'd like to discuss? 
            Let's talk about how we can work together to achieve your goals.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
          <Link to="/work">
          <button className="bg-white text-blue-600 px-8 py-4 rounded-lg font-bold hover:bg-gray-100 transition-colors duration-200 flex items-center justify-center">
            <ArrowRight className="w-5 h-5 mr-2" />
            View Portfolio
          </button>
          </Link>
          
          <a href="https://calendly.com/abhishekwadhwa/30min" target="_blank" rel="noopener noreferrer">
          <button className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-bold hover:bg-white hover:text-blue-600 transition-colors duration-200 flex items-center justify-center">
            <Calendar className="w-5 h-5 mr-2" />
            Book a Discovery Call
          </button></a>
        </div>

        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 max-w-md mx-auto">
          <p className="text-blue-100 text-sm">
            <strong className="text-white">Quick Response Guarantee:</strong><br />
            I respond to all inquiries within 24 hours, usually much sooner.
          </p>
        </div>
      </div>
    </section>
  );
};