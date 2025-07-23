import React from 'react';
import { CheckCircle, AlertTriangle } from 'lucide-react';

export const ClientFitSection = () => {
  const idealClients = [
    'Founders building long-term ventures',
    'Marketers tired of generic funnels',
    'Experts / Coaches ready to scale content',
    'Early-stage teams needing clarity, not chaos'
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Who I Work With
          </h2>
          <p className="text-xl text-gray-600">
            I partner with ambitious professionals who value strategic thinking over quick fixes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Ideal Clients */}
          <div className="bg-white p-8 rounded-2xl shadow-lg">
            <div className="flex items-center mb-6">
              <CheckCircle className="w-8 h-8 text-green-600 mr-3" />
              <h3 className="text-2xl font-bold text-gray-900">Perfect Fit</h3>
            </div>
            <div className="space-y-4">
              {idealClients.map((client, index) => (
                <div key={index} className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">{client}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Not a Fit */}
          <div className="bg-white p-8 rounded-2xl shadow-lg">
            <div className="flex items-center mb-6">
              <AlertTriangle className="w-8 h-8 text-amber-600 mr-3" />
              <h3 className="text-2xl font-bold text-gray-900">Not a Fit</h3>
            </div>
            <div className="bg-amber-50 p-6 rounded-lg border-l-4 border-amber-400">
              <p className="text-amber-800 leading-relaxed">
                <strong>I'm not the right fit for:</strong><br />
                Short-term freelance tasks, bulk content writing, or projects focused solely on quick wins without strategic foundation.
              </p>
            </div>
            <div className="mt-6">
              <p className="text-gray-600 leading-relaxed">
                I work best with clients who understand that meaningful results take time and strategic thinking. 
                If you're looking for someone to execute your existing plan without input, I'm probably not your person.
              </p>
            </div>
          </div>
        </div>

        {/* Additional Context */}
        <div className="mt-12 text-center">
          <div className="bg-blue-50 p-8 rounded-2xl border-l-4 border-blue-600">
            <p className="text-blue-800 text-lg">
              <strong>My Philosophy:</strong> I believe in building systems and strategies that compound over time, 
              not just creating content that gets forgotten tomorrow.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};