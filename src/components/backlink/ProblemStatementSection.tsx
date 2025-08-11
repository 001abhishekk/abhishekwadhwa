import React from 'react';
import { AlertTriangle, TrendingDown, Link } from 'lucide-react';

export const ProblemStatementSection = () => {
  const problems = [
    {
      icon: AlertTriangle,
      title: 'Google Penalty Risk',
      description: 'Toxic backlinks from spammy domains can trigger manual penalties or algorithmic demotions.',
      color: 'bg-red-500'
    },
    {
      icon: TrendingDown,
      title: 'Low Domain Authority Links',
      description: 'Weak, irrelevant backlinks dilute your site\'s authority and waste your link equity.',
      color: 'bg-orange-500'
    },
    {
      icon: Link,
      title: 'Irrelevant / Paid Links',
      description: 'Links from unrelated niches or obvious paid schemes hurt your topical relevance.',
      color: 'bg-yellow-500'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Why Your Backlinks Might Be Hurting Your Rankings
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Many websites unknowingly carry toxic backlinks that can trigger Google penalties, 
            hurt domain authority, and damage search visibility. Even well-intentioned link building 
            can backfire without proper audit and strategy.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {problems.map((problem, index) => {
            const IconComponent = problem.icon;
            return (
              <div key={index} className="bg-gray-50 p-8 rounded-2xl hover:shadow-lg transition-all duration-300 text-center">
                <div className={`w-16 h-16 ${problem.color} rounded-2xl flex items-center justify-center mx-auto mb-6`}>
                  <IconComponent className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{problem.title}</h3>
                <p className="text-gray-600 leading-relaxed">{problem.description}</p>
              </div>
            );
          })}
        </div>

        <div className="mt-16 bg-red-50 p-8 rounded-2xl border-l-4 border-red-500 text-center">
          <p className="text-red-800 text-lg">
            <strong>The Reality:</strong> 73% of websites have at least one toxic backlink that could be harming their SEO performance.
          </p>
        </div>
      </div>
    </section>
  );
};