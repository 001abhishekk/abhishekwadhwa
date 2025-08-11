import React from 'react';
import { Clock, Shield, Target, Award } from 'lucide-react';

export const WhyWorkWithMeSection = () => {
  const differentiators = [
    {
      icon: Clock,
      title: '10+ Years in SEO & Digital Growth',
      description: 'Extensive experience across industries, from startups to enterprise clients.',
      color: 'bg-blue-500'
    },
    {
      icon: Shield,
      title: 'No PBNs, No Link Farms, No Shortcuts',
      description: 'Only white-hat, sustainable strategies that protect your long-term rankings.',
      color: 'bg-green-500'
    },
    {
      icon: Target,
      title: 'Results-Focused, Long-Term Strategies',
      description: 'Building authority that lasts, not quick fixes that break with algorithm updates.',
      color: 'bg-purple-500'
    },
    {
      icon: Award,
      title: 'Proven Track Record',
      description: 'Successfully audited and improved 200+ websites with measurable results.',
      color: 'bg-orange-500'
    }
  ];

  const tools = [
    'Ahrefs', 'SEMrush', 'Moz', 'Majestic', 'Google Search Console', 'Screaming Frog'
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Why I'm Not Just Another Link Builder
          </h2>
          <p className="text-xl text-gray-600">
            Strategic expertise that goes beyond basic link building.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Profile Image */}
          <div className="flex justify-center lg:justify-start">
            <div className="relative">
              <img
                src="/images/me.jpg"
                alt="Abhishek Wadhwa - SEO Consultant"
                className="w-80 h-80 rounded-2xl object-cover shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-600/20 to-transparent rounded-2xl"></div>
            </div>
          </div>

          {/* Differentiators */}
          <div className="space-y-6">
            {differentiators.map((item, index) => {
              const IconComponent = item.icon;
              return (
                <div key={index} className="flex items-start">
                  <div className={`w-12 h-12 ${item.color} rounded-xl flex items-center justify-center mr-4 flex-shrink-0`}>
                    <IconComponent className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{item.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Tools & Certifications */}
        <div className="bg-gray-50 p-8 rounded-2xl">
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">Professional Tools & Expertise</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {tools.map((tool, index) => (
              <div key={index} className="bg-white p-4 rounded-lg text-center hover:shadow-md transition-shadow duration-200">
                <p className="font-medium text-gray-800">{tool}</p>
              </div>
            ))}
          </div>
          
          <div className="mt-8 text-center">
            <div className="inline-flex items-center bg-blue-100 px-6 py-3 rounded-full">
              <Award className="w-5 h-5 text-blue-600 mr-2" />
              <span className="text-blue-800 font-medium">Google Analytics & Search Console Certified</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};