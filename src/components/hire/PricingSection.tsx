import React from 'react';
import { Calendar, Package, TrendingUp, AlertCircle } from 'lucide-react';

export const PricingSection = () => {
  const pricingOptions = [
    {
      icon: Calendar,
      title: 'Strategy Days',
      price: '₹25,000/day',
      description: 'Intensive strategy sessions for brand positioning, content planning, or campaign development.',
      color: 'bg-blue-500'
    },
    {
      icon: Package,
      title: 'Fixed Projects',
      price: 'Start from ₹50,000',
      description: 'Complete project delivery including strategy, execution, and optimization.',
      color: 'bg-purple-500'
    },
    {
      icon: TrendingUp,
      title: 'Retainers',
      price: 'Custom Pricing',
      description: 'Ongoing partnership for long-term clients who need consistent strategic support.',
      color: 'bg-green-500'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Pricing & Engagement Models
          </h2>
          <p className="text-xl text-gray-600">
            Transparent pricing for serious partnerships.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {pricingOptions.map((option, index) => {
            const IconComponent = option.icon;
            return (
              <div key={index} className="bg-gray-50 p-8 rounded-2xl hover:shadow-lg transition-all duration-300 text-center">
                <div className={`w-16 h-16 ${option.color} rounded-2xl flex items-center justify-center mx-auto mb-6`}>
                  <IconComponent className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{option.title}</h3>
                <p className="text-3xl font-bold text-blue-600 mb-4">{option.price}</p>
                <p className="text-gray-600 leading-relaxed">{option.description}</p>
              </div>
            );
          })}
        </div>

        {/* Important Notes */}
        <div className="bg-amber-50 p-8 rounded-2xl border-l-4 border-amber-400">
          <div className="flex items-start">
            <AlertCircle className="w-6 h-6 text-amber-600 mr-3 mt-1 flex-shrink-0" />
            <div>
              <h3 className="text-xl font-bold text-amber-800 mb-4">Important Notes</h3>
              <div className="space-y-3 text-amber-700">
                <p>• I only take 2–3 new projects per quarter to ensure quality delivery.</p>
                <p>• All projects require a 50% deposit to begin work.</p>
                <p>• Pricing may vary based on project complexity and timeline requirements.</p>
                <p>• Rush jobs (less than 2 weeks) include a 50% urgency fee.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <div className="bg-blue-50 p-8 rounded-2xl max-w-3xl mx-auto">
            <p className="text-blue-800 text-lg">
              <strong>Not sure which option fits your needs?</strong><br />
              Let's have a quick conversation to determine the best approach for your project.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};