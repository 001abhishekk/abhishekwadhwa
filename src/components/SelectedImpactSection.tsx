import React from 'react';

const stats = [
  { value: '25K+', label: 'Email contacts', note: 'from approximately 9.4K' },
  { value: '250–300', label: 'Qualified B2B leads / month', note: '' },
  { value: '3,294', label: 'Meta-reported B2B leads', note: 'across 6 campaigns' },
  { value: '3,698', label: 'E-commerce purchases', note: 'across 7 conversion campaigns' },
  { value: '90+', label: 'Qualified leads', note: 'generated in one week' },
  { value: '400 → 610+', label: 'B2B WhatsApp community members', note: '' },
];

export const SelectedImpactSection = () => {
  return (
    <section id="selected-impact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Marketing work, measured.
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-blue-600 mb-2">{stat.value}</div>
              <div className="text-gray-900 font-medium">{stat.label}</div>
              {stat.note && <div className="text-gray-500 text-sm mt-1">{stat.note}</div>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
