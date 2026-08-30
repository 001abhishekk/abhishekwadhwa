import React from 'react';
import { CheckCircle } from 'lucide-react';

export const AboutSection = () => {
  const skills = [
    'B2B Demand Generation & Paid Acquisition',
    'Brand & Product Positioning',
    'Email & Lifecycle Marketing',
    'SEO & Marketing Operations',
    'Team Leadership & Cross-Functional Coordination'
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">About Me</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Profile Image */}
          <div className="flex justify-center lg:justify-start">
            <div className="relative">
              <img
                src="/images/me-2.jpg?auto=compress&cs=tinysrgb&w=400"
                alt="Abhishek Wadhwa"
                className="w-80 h-180 rounded-2xl object-cover shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-600/20 to-transparent rounded-2xl"></div>
            </div>
          </div>

          {/* About Content */}
          <div>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Hello, I'm Abhishek Wadhwa – a Digital & Brand Marketing Manager with 5+ years building growth 
              programs across B2B demand generation, paid acquisition, lifecycle marketing and brand strategy. 
              My career started in SEO and content, and has evolved into performance marketing, brand strategy 
              and marketing operations — connecting positioning, acquisition and channels into one growth system.
            </p>

            <div className="mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Key Skills & Passions:</h3>
              <div className="space-y-3">
                {skills.map((skill, index) => (
                  <div key={index} className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-blue-600 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">{skill}</span>
                  </div>
                ))}
              </div>
            </div>

            <a href="/about">
            <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors duration-200">
              Learn More About Me
            </button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
