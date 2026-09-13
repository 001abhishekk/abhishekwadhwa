import React from 'react';

const areas = [
  'B2B Demand Generation',
  'Paid Acquisition',
  'Lifecycle Marketing',
  'Brand Strategy',
  'Marketing Operations',
];

const stats = [
  { value: '25K+', label: 'Email contacts' },
  { value: '250–300', label: 'Qualified B2B leads / month' },
  { value: '3,294', label: 'Meta-reported B2B leads' },
  { value: '3,698', label: 'E-commerce purchases' },
  { value: '3–4', label: 'Person team managed' },
  { value: '50+', label: 'Writers/SEO pros trained' },
];

export const AboutSpecializeSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">What I Specialize In</h2>
        </div>
        <div className="flex flex-wrap justify-center gap-3 mb-16">
          {areas.map((area) => (
            <span
              key={area}
              className="px-5 py-2 bg-blue-50 text-blue-700 rounded-full font-medium text-sm md:text-base"
            >
              {area}
            </span>
          ))}
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-8 text-center">
          {stats.map((stat) => (
            <div key={stat.label}>
              <div className="text-3xl font-bold text-blue-600 mb-1">{stat.value}</div>
              <div className="text-gray-600 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
