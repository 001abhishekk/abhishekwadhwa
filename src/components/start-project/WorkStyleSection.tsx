import React from 'react';
import { Search, Target, Zap, ArrowDown } from 'lucide-react';

export const WorkStyleSection = () => {
  const steps = [
    {
      number: '1',
      icon: Search,
      title: 'Discovery',
      description: "We'll define the real problem, clearly.",
      color: 'bg-blue-500'
    },
    {
      number: '2',
      icon: Target,
      title: 'Strategy',
      description: "I'll map what's needed, not just what's requested.",
      color: 'bg-purple-500'
    },
    {
      number: '3',
      icon: Zap,
      title: 'Execution',
      description: 'Delivered with speed, clarity, and context.',
      color: 'bg-green-500'
    }
  ];

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact-section');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            What to Expect
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {steps.map((step, index) => {
            const IconComponent = step.icon;
            return (
              <div key={index} className="relative">
                {/* Connector Line */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-16 left-full w-full h-0.5 bg-gray-300 transform translate-x-4 z-0"></div>
                )}
                
                <div className="bg-gray-50 p-8 rounded-2xl hover:shadow-lg transition-all duration-300 relative z-10 text-center">
                  <div className={`w-16 h-16 ${step.color} rounded-2xl flex items-center justify-center mx-auto mb-6`}>
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  
                  <div className="text-4xl font-bold text-gray-300 mb-4">{step.number}</div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{step.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{step.description}</p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="text-center">
          <button 
            onClick={scrollToContact}
            className="group bg-blue-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-700 transition-all duration-300 inline-flex items-center"
          >
            Let's Begin
            <ArrowDown className="ml-2 w-4 h-4 group-hover:translate-y-1 transition-transform duration-300" />
          </button>
        </div>
      </div>
    </section>
  );
};