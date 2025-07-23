import React from 'react';
import { Brain, Mic, BarChart3 } from 'lucide-react';

export const ServicesSection = () => {
  const services = [
    {
      icon: Brain,
      title: 'Strategy',
      color: 'bg-blue-500',
      services: [
        {
          name: 'Brand Positioning',
          description: 'Clear messaging that cuts through the noise and connects with your audience.'
        },
        {
          name: 'Content Systems & SEO Foundations',
          description: 'Scalable content frameworks that drive organic growth and engagement.'
        },
        {
          name: 'Paid Media Setup',
          description: 'Strategic Google, Meta, and TikTok campaigns that convert.'
        }
      ]
    },
    {
      icon: Mic,
      title: 'Creative Execution',
      color: 'bg-purple-500',
      services: [
        {
          name: 'Long-form Ghostwriting / Thought Leadership',
          description: 'Authentic content that establishes authority and builds trust.'
        },
        {
          name: 'Website Copy + UX Planning',
          description: 'Conversion-focused copy that guides users to action.'
        },
        {
          name: 'Podcast / Course / Personal Brand Launch',
          description: 'End-to-end content strategy for new platform launches.'
        }
      ]
    },
    {
      icon: BarChart3,
      title: 'Performance',
      color: 'bg-green-500',
      services: [
        {
          name: 'Analytics Setup',
          description: 'GA4, GTM, and Looker implementation for data-driven decisions.'
        },
        {
          name: 'Conversion Optimization',
          description: 'Testing and optimization to maximize your marketing ROI.'
        },
        {
          name: 'SEM Audits & Landing Page Planning',
          description: 'Strategic analysis and optimization for better performance.'
        }
      ]
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            What I Can Help You With
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive solutions for brands ready to scale with purpose and precision.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {services.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <div key={index} className="bg-gray-50 p-8 rounded-2xl hover:shadow-lg transition-all duration-300">
                <div className={`w-16 h-16 ${category.color} rounded-2xl flex items-center justify-center mb-6`}>
                  <IconComponent className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">{category.title}</h3>
                
                <div className="space-y-6">
                  {category.services.map((service, serviceIndex) => (
                    <div key={serviceIndex}>
                      <h4 className="text-lg font-semibold text-gray-900 mb-2">{service.name}</h4>
                      <p className="text-gray-600 leading-relaxed">{service.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};