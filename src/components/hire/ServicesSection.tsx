import React from 'react';
import { Brain, Target, BarChart3, Palette, Compass } from 'lucide-react';

export const ServicesSection = () => {
  const services = [
    {
      icon: Brain,
      title: 'Growth & Demand Generation',
      color: 'bg-blue-500',
      services: [
        {
          name: 'B2B Demand Generation',
          description: 'Lead-generation programs across email, organic and paid channels, built around your ICP.'
        },
        {
          name: 'SEO & Content Systems',
          description: 'Technical audits, keyword strategy and content frameworks that drive organic visibility.'
        }
      ]
    },
    {
      icon: Target,
      title: 'Paid Acquisition',
      color: 'bg-purple-500',
      services: [
        {
          name: 'Meta & Google Ads Management',
          description: 'Campaign strategy, ABO/CBO structuring, and audience targeting across B2B and e-commerce accounts.'
        },
        {
          name: 'Landing Page & Conversion Planning',
          description: 'Conversion-focused website copy and UX planning that turns traffic into leads.'
        }
      ]
    },
    {
      icon: Palette,
      title: 'Brand Strategy',
      color: 'bg-pink-500',
      services: [
        {
          name: 'Positioning & Messaging',
          description: 'Positioning, ICP and differentiation that turns market understanding into a clear proposition.'
        },
        {
          name: 'Brand Systems & Guidelines',
          description: 'Brand direction, values, tone of voice and visual system, developed alongside a designer.'
        },
        {
          name: 'Sales Enablement Assets',
          description: 'Corporate profiles, pitch decks and sales collateral built from positioning through creative direction.'
        }
      ]
    },
    {
      icon: BarChart3,
      title: 'Lifecycle & Marketing Operations',
      color: 'bg-green-500',
      services: [
        {
          name: 'Email & Lifecycle Marketing',
          description: 'Owned-channel growth with attention to list health, segmentation and engagement — not just volume.'
        },
        {
          name: 'CRM & Marketing Automation',
          description: 'Lead workflows, routing logic and CRM requirements defined and coordinated through implementation.'
        },
        {
          name: 'Reporting & Analytics',
          description: 'GA4, Looker Studio and performance reporting for CAC, ROAS and funnel visibility.'
        }
      ]
    },
    {
      icon: Compass,
      title: 'Marketing Strategy',
      color: 'bg-indigo-500',
      services: [
        {
          name: 'Marketing Systems & Planning',
          description: 'Connecting positioning, channels, content and operations into one coordinated growth system.'
        },
        {
          name: 'Cross-Functional Coordination',
          description: 'Translating strategy into execution across design, technical, CRM, sales and operations teams.'
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
            Growth marketing and marketing operations support for businesses ready to scale with purpose and precision.
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
