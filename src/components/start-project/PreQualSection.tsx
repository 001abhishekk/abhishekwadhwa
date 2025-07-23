import React from 'react';
import { CheckCircle } from 'lucide-react';

export const PreQualSection = () => {
  const qualifications = [
    "You're building something long-term",
    "You value clarity, not fluff",
    "You need a strategist-creator, not a task robot"
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">
          Before We Start…
        </h2>
        
        <div className="space-y-4 mb-8">
          {qualifications.map((qualification, index) => (
            <div key={index} className="flex items-center justify-center text-lg text-gray-700">
              <CheckCircle className="w-6 h-6 text-blue-600 mr-3 flex-shrink-0" />
              <span>{qualification}</span>
            </div>
          ))}
        </div>
        
        <div className="bg-blue-50 p-6 rounded-2xl border-l-4 border-blue-600">
          <p className="text-blue-800 text-lg font-medium">
            If that's you — read on.
          </p>
        </div>
      </div>
    </section>
  );
};