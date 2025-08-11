import React from 'react';
import { Search, Shield, Users, Target, BarChart3 } from 'lucide-react';

export const ProcessSection = () => {
  const steps = [
    {
      number: '1',
      icon: Search,
      title: 'Backlink Audit & Toxic Link Identification',
      description: 'Comprehensive analysis using Ahrefs, SEMrush, and proprietary tools to identify harmful links.',
      color: 'bg-blue-500'
    },
    {
      number: '2',
      icon: Shield,
      title: 'Disavow File Preparation & Submission',
      description: 'Create and submit Google disavow files to neutralize toxic backlinks affecting your rankings.',
      color: 'bg-red-500'
    },
    {
      number: '3',
      icon: Target,
      title: 'Competitor Backlink Gap Analysis',
      description: 'Identify high-value link opportunities your competitors have that you\'re missing.',
      color: 'bg-green-500'
    },
    {
      number: '4',
      icon: Users,
      title: 'White-Hat Link Building Campaign',
      description: 'Strategic outreach to relevant, high-authority domains for natural link acquisition.',
      color: 'bg-purple-500'
    },
    {
      number: '5',
      icon: BarChart3,
      title: 'Ongoing Monitoring & Reporting',
      description: 'Monthly reports tracking link health, new acquisitions, and ranking improvements.',
      color: 'bg-indigo-500'
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            My Proven Backlink Audit & Off-Page Strategy Process
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A systematic approach to cleaning up your backlink profile and building sustainable link authority.
          </p>
        </div>

        <div className="space-y-8">
          {steps.map((step, index) => {
            const IconComponent = step.icon;
            const isEven = index % 2 === 0;
            
            return (
              <div key={index} className={`flex flex-col lg:flex-row items-center gap-8 ${isEven ? '' : 'lg:flex-row-reverse'}`}>
                <div className="lg:w-1/2">
                  <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
                    <div className="flex items-center mb-6">
                      <div className={`w-16 h-16 ${step.color} rounded-2xl flex items-center justify-center mr-4`}>
                        <IconComponent className="w-8 h-8 text-white" />
                      </div>
                      <div className="text-4xl font-bold text-gray-300">{step.number}</div>
                    </div>
                    
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">{step.title}</h3>
                    <p className="text-gray-600 leading-relaxed text-lg">{step.description}</p>
                  </div>
                </div>
                
                <div className="lg:w-1/2 flex justify-center">
                  <div className={`w-64 h-64 ${step.color} rounded-2xl flex items-center justify-center shadow-lg`}>
                    <IconComponent className="w-24 h-24 text-white opacity-20" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};