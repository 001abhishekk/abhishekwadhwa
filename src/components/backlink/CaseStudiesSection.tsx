import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, TrendingUp, Award, Quote } from 'lucide-react';

export const CaseStudiesSection = () => {
  const [currentCase, setCurrentCase] = useState(0);

  const caseStudies = [
    {
      client: 'E-commerce Fashion Brand',
      industry: 'Fashion & Retail',
      challenge: 'Toxic backlinks from PBN networks causing ranking drops',
      results: {
        rankingImprovement: '+127%',
        domainAuthority: '32 → 58',
        organicTraffic: '+89%',
        timeframe: '6 months'
      },
      testimonial: 'Abhishek saved our website from a Google penalty. His audit identified 847 toxic links we never knew existed.',
      clientName: 'Sarah Johnson',
      clientTitle: 'Marketing Director'
    },
    {
      client: 'SaaS Technology Company',
      industry: 'Software & Technology',
      challenge: 'Low domain authority and missing high-value link opportunities',
      results: {
        rankingImprovement: '+203%',
        domainAuthority: '28 → 67',
        organicTraffic: '+156%',
        timeframe: '8 months'
      },
      testimonial: 'The competitor analysis revealed gaps we never considered. Our backlink profile is now stronger than our main competitors.',
      clientName: 'Michael Chen',
      clientTitle: 'CEO & Founder'
    },
    {
      client: 'Healthcare Practice',
      industry: 'Healthcare & Medical',
      challenge: 'Irrelevant backlinks from unrelated industries hurting topical authority',
      results: {
        rankingImprovement: '+94%',
        domainAuthority: '41 → 72',
        organicTraffic: '+67%',
        timeframe: '4 months'
      },
      testimonial: 'Professional, thorough, and results-driven. Our local search visibility improved dramatically.',
      clientName: 'Dr. Emily Rodriguez',
      clientTitle: 'Practice Owner'
    }
  ];

  const nextCase = () => {
    setCurrentCase((prev) => (prev + 1) % caseStudies.length);
  };

  const prevCase = () => {
    setCurrentCase((prev) => (prev - 1 + caseStudies.length) % caseStudies.length);
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Real Results from My Backlink Campaigns
          </h2>
          <p className="text-xl text-gray-600">
            See how strategic backlink audits and cleanup transformed these businesses.
          </p>
        </div>

        {/* Case Study Carousel */}
        <div className="relative bg-gray-50 rounded-2xl p-8 md:p-12 shadow-lg">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Results Stats */}
            <div>
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{caseStudies[currentCase].client}</h3>
                <span className="inline-block bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium">
                  {caseStudies[currentCase].industry}
                </span>
              </div>
              
              <p className="text-gray-700 mb-8 text-lg leading-relaxed">
                <strong>Challenge:</strong> {caseStudies[currentCase].challenge}
              </p>
              
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                  <p className="text-3xl font-bold text-green-600 mb-1">{caseStudies[currentCase].results.rankingImprovement}</p>
                  <p className="text-sm text-gray-600">Ranking Improvement</p>
                </div>
                <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                  <p className="text-3xl font-bold text-blue-600 mb-1">{caseStudies[currentCase].results.domainAuthority}</p>
                  <p className="text-sm text-gray-600">Domain Authority</p>
                </div>
                <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                  <p className="text-3xl font-bold text-purple-600 mb-1">{caseStudies[currentCase].results.organicTraffic}</p>
                  <p className="text-sm text-gray-600">Organic Traffic</p>
                </div>
                <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                  <p className="text-3xl font-bold text-indigo-600 mb-1">{caseStudies[currentCase].results.timeframe}</p>
                  <p className="text-sm text-gray-600">Timeframe</p>
                </div>
              </div>
            </div>

            {/* Testimonial */}
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <Quote className="w-12 h-12 text-blue-400 mb-6" />
              <p className="text-xl text-gray-700 leading-relaxed mb-6 italic">
                "{caseStudies[currentCase].testimonial}"
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                  <Award className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <p className="font-bold text-gray-900">{caseStudies[currentCase].clientName}</p>
                  <p className="text-gray-600">{caseStudies[currentCase].clientTitle}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevCase}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-blue-600 hover:bg-blue-700 p-3 rounded-full transition-colors duration-200 text-white"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={nextCase}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-blue-600 hover:bg-blue-700 p-3 rounded-full transition-colors duration-200 text-white"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>

        {/* Case Study Dots */}
        <div className="flex justify-center mt-8 space-x-2">
          {caseStudies.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentCase(index)}
              className={`w-3 h-3 rounded-full transition-colors duration-200 ${
                index === currentCase ? 'bg-blue-600' : 'bg-gray-300 hover:bg-gray-400'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};