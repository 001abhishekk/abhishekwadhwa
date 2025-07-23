import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Mail } from 'lucide-react';

export const HireMeHeroSection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-indigo-50 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 text-6xl">💼</div>
        <div className="absolute top-40 right-20 text-5xl">🎯</div>
        <div className="absolute bottom-20 left-20 text-4xl">📈</div>
        <div className="absolute bottom-40 right-10 text-5xl">✨</div>
      </div>
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="mb-8">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Work With Abhishek Wadhwa
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 leading-relaxed max-w-3xl mx-auto mb-8">
            Strategy, storytelling, and smart execution — for brands building beyond buzzwords.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/start-project"
              className="bg-blue-600 text-white px-8 py-4 rounded-lg font-medium hover:bg-blue-700 transition-all duration-200 transform hover:scale-105 shadow-lg inline-flex items-center justify-center"
            >
              <Mail className="w-5 h-5 mr-2" />
              Start a Project
            </Link>
            <button className="bg-white text-blue-600 border-2 border-blue-600 px-8 py-4 rounded-lg font-medium hover:bg-blue-50 transition-all duration-200 inline-flex items-center justify-center">
              <ArrowRight className="w-5 h-5 mr-2" />
              View Portfolio
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};