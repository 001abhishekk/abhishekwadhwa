import React from 'react';
import { Search, Target, Zap } from 'lucide-react';

export const ProcessSection = () => {
  const steps = [
    {
      number: '1',
      icon: Search,
      title: 'Discovery',
      description: '15-min call or email exchange to understand your goals, challenges, and vision.',
      color: 'bg-blue-500'
    },
    {
      number: '2',
      icon: Target,
      title: 'Strategy & Scope',
      description: 'I suggest a custom plan or phased roadmap tailored to your specific needs and budget.',
      color: 'bg-purple-500'
    },
    {
      number: '3',
      icon: Zap,
      title: 'Execution',
      description: 'I deliver results and align every step with your long-term goals and growth objectives.',
      color: 'bg-green-500'
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            My Approach
          </h2>
          <p className="text-xl text-gray-600">
            Simple. Effective. Results-driven.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => {
            const IconComponent = step.icon;
            return (
              <div key={index} className="relative">
                {/* Connector Line */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-16 left-full w-full h-0.5 bg-gray-300 transform translate-x-4 z-0"></div>
                )}
                
                <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 relative z-10">
                  <div className="flex items-center mb-6">
                    <div className={`w-16 h-16 ${step.color} rounded-2xl flex items-center justify-center mr-4`}>
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    <div className="text-4xl font-bold text-gray-300">{step.number}</div>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{step.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{step.description}</p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-blue-50 p-8 rounded-2xl border-l-4 border-blue-600 max-w-3xl mx-auto">
            <p className="text-blue-800 text-lg">
              <strong>Timeline:</strong> Most projects take 2-8 weeks depending on scope. 
              I'll give you a realistic timeline upfront—no surprises, no rushed work.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};