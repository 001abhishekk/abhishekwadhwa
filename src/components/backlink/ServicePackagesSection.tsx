import React from 'react';
import { FileText, Shield, Rocket, CheckCircle } from 'lucide-react';

export const ServicePackagesSection = () => {
  const packages = [
    {
      icon: FileText,
      title: 'Audit Only',
      price: '₹15,000',
      description: 'Detailed backlink health report with actionable recommendations.',
      features: [
        'Complete backlink profile analysis',
        'Toxic link identification',
        'Competitor comparison',
        'Detailed PDF report',
        'Priority recommendations'
      ],
      color: 'bg-blue-500',
      popular: false
    },
    {
      icon: Shield,
      title: 'Audit + Cleanup',
      price: '₹35,000',
      description: 'Comprehensive audit plus disavow file preparation and submission.',
      features: [
        'Everything in Audit Only',
        'Google disavow file creation',
        'Disavow submission to Google',
        'Link removal outreach',
        '30-day follow-up report'
      ],
      color: 'bg-green-500',
      popular: true
    },
    {
      icon: Rocket,
      title: 'Full Off-Page Strategy',
      price: '₹75,000',
      description: 'Complete backlink transformation with ongoing white-hat link building.',
      features: [
        'Everything in Audit + Cleanup',
        'Strategic link building campaign',
        'Content creation for outreach',
        'Monthly progress reports',
        '6-month strategy roadmap'
      ],
      color: 'bg-purple-500',
      popular: false
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Choose Your Backlink Strategy Plan
          </h2>
          <p className="text-xl text-gray-600">
            Transparent pricing for every stage of backlink optimization.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {packages.map((pkg, index) => {
            const IconComponent = pkg.icon;
            return (
              <div key={index} className={`bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 ${pkg.popular ? 'ring-4 ring-blue-500 ring-opacity-50' : ''}`}>
                {pkg.popular && (
                  <div className="bg-blue-500 text-white text-center py-2 rounded-t-2xl font-medium">
                    Most Popular
                  </div>
                )}
                
                <div className="p-8">
                  <div className={`w-16 h-16 ${pkg.color} rounded-2xl flex items-center justify-center mx-auto mb-6`}>
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-gray-900 text-center mb-4">{pkg.title}</h3>
                  <p className="text-4xl font-bold text-center mb-2">{pkg.price}</p>
                  <p className="text-gray-600 text-center mb-6">{pkg.description}</p>
                  
                  <div className="space-y-3 mb-8">
                    {pkg.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <button className={`w-full ${pkg.popular ? 'bg-blue-600 hover:bg-blue-700' : 'bg-gray-800 hover:bg-gray-900'} text-white py-3 rounded-lg font-medium transition-colors duration-200`}>
                    Start Now
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-12 text-center">
          <div className="bg-blue-50 p-6 rounded-2xl border-l-4 border-blue-500 max-w-3xl mx-auto">
            <p className="text-blue-800 text-lg">
              <strong>Not sure which package fits?</strong> Book a free 15-minute consultation to discuss your specific needs.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};