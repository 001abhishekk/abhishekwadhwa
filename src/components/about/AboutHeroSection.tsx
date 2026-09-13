import React from 'react';
import { ArrowRight } from 'lucide-react';

export const AboutHeroSection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100 min-h-[80vh] flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Hero Text */}
          <div className="text-center lg:text-left">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-4 leading-tight">
              About Abhishek Wadhwa
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-6 leading-relaxed">
              Digital & Brand Marketing Manager &middot; Growth Marketing & Marketing Operations
            </p>
            <p className="text-lg text-gray-500 mb-4 leading-relaxed">
              Abhishek Wadhwa is a Digital & Brand Marketing Manager specializing in B2B demand generation,
              paid acquisition, lifecycle marketing, brand strategy and marketing operations.
            </p>
            <p className="text-xl text-gray-700 mb-8 leading-relaxed">
              Hi, I'm Abhishek <span className="wave">👋</span>
            </p>
            <a href="/work">
            <button className="bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-medium hover:bg-blue-700 transition-all duration-200 transform hover:scale-105 shadow-lg inline-flex items-center">
              Explore My Work
              <ArrowRight className="ml-2 w-5 h-5" />
            </button>
            </a>
          </div>

          {/* Hero Image */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="w-80 h-80 bg-gradient-to-br from-blue-400 to-indigo-600 rounded-full flex items-center justify-center shadow-2xl">
                <img
                  src="/images/me.jpg?auto=compress&cs=tinysrgb&w=400"
                  alt="Abhishek Wadhwa"
                  className="w-72 h-72 rounded-full object-cover border-4 border-white shadow-lg"
                />
              </div>
              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 bg-white p-3 rounded-full shadow-lg animate-bounce">
                <span className="text-2xl">💡</span>
              </div>
              <div className="absolute -bottom-4 -left-4 bg-white p-3 rounded-full shadow-lg animate-bounce" style={{ animationDelay: '0.5s' }}>
                <span className="text-2xl">📚</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
