import React from 'react';

const work = [
  { num: '01', title: 'B2B Demand Generation', org: 'SWT Club', detail: '250–300 qualified B2B leads/month.' },
  { num: '02', title: 'Email & Lifecycle', org: 'SWT Club', detail: '9.4K → 25K+ database growth.' },
  { num: '03', title: 'Paid Acquisition', org: 'SWT Club / Client Campaigns', detail: '3,294 B2B leads + 3,698 e-commerce purchases.' },
  { num: '04', title: 'Brand Strategy', org: 'SWT Club', detail: 'Brand direction, positioning, values, tone, visual system and application.' },
  { num: '05', title: 'Marketing Operations', org: 'SWT Club', detail: 'Business requirements → workflow logic → CRM → sales follow-up → reporting.' },
  { num: '06', title: 'SEO & Content', org: '', detail: 'Technical SEO, search visibility and content strategy.' },
];

export const SelectedWorkSection = () => {
  return (
    <section id="selected-work" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Selected work</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            From B2B demand generation and paid acquisition to lifecycle marketing, brand strategy and SEO,
            these projects show how I approach marketing as a connected system rather than a collection of
            individual channels.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {work.map((item) => (
            <div key={item.num} className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 flex gap-4">
              <span className="text-2xl font-bold text-blue-600 flex-shrink-0">{item.num}</span>
              <div>
                <h3 className="text-lg font-bold text-gray-900">{item.title}</h3>
                {item.org && <div className="text-sm text-gray-500 mb-1">{item.org}</div>}
                <p className="text-gray-600 text-sm leading-relaxed">{item.detail}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a href="/work">
            <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors duration-200">
              Explore the Work
            </button>
          </a>
        </div>
      </div>
    </section>
  );
};
