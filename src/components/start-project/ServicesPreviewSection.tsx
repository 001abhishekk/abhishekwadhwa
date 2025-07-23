import React from 'react';
import { Target, Globe, TrendingUp, Mic, PenTool, Zap } from 'lucide-react';

export const ServicesPreviewSection = () => {
  const services = [
    {
      icon: Target,
      title: 'Brand Positioning & Identity',
      color: 'bg-blue-500'
    },
    {
      icon: Globe,
      title: 'Website / Landing Page Strategy',
      color: 'bg-green-500'
    },
    {
      icon: TrendingUp,
      title: 'SEO or Paid Campaign Setup',
      color: 'bg-purple-500'
    },
    {
      icon: Mic,
      title: 'Podcast Launch & Marketing',
      color: 'bg-red-500'
    },
    {
      icon: PenTool,
      title: 'Thought Leadership / Ghostwriting',
      color: 'bg-orange-500'
    },
    {
      icon: Zap,
      title: 'Custom Strategy Sprints',
      color: 'bg-indigo-500'
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            What Can We Work On?
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div key={index} className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group">
                <div className={`w-12 h-12 ${service.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <IconComponent className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-bold text-gray-900">{service.title}</h3>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};