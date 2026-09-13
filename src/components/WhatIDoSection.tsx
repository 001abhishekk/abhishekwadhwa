import React from 'react';

const areas = [
  {
    title: 'B2B Demand Generation',
    description: 'Building demand around the right audience, proposition and channels.',
  },
  {
    title: 'Paid Acquisition',
    description: 'Planning and managing performance campaigns across B2B, travel, e-commerce and other markets.',
  },
  {
    title: 'Lifecycle Marketing',
    description: 'Building owned channels and workflows that turn audience attention into ongoing commercial engagement.',
  },
  {
    title: 'Brand Strategy',
    description: 'Connecting positioning, messaging, differentiation and brand systems.',
  },
  {
    title: 'Marketing Operations',
    description: 'Turning marketing requirements into workflows, processes, reporting and coordinated execution.',
  },
];

export const WhatIDoSection = () => {
  return (
    <section id="what-i-do" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            From strategy to measurable growth.
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            I work across growth marketing, demand generation, paid acquisition, lifecycle marketing,
            brand strategy and marketing operations — connecting the strategy behind a campaign with
            the systems, execution and measurement required to make it work.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
          {areas.map((area) => (
            <div key={area.title} className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
              <h3 className="text-lg font-bold text-gray-900 mb-3">{area.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{area.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
