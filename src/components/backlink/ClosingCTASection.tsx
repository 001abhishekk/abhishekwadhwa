import React from 'react';
import { Calendar, FileText, ArrowRight } from 'lucide-react';

export const ClosingCTASection = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-700">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="mb-8">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready for a Backlink Audit That Actually Improves Rankings?
          </h2>
          <p className="text-xl text-blue-100 leading-relaxed max-w-3xl mx-auto">
            Stop guessing about your backlink health. Get a professional audit that identifies 
            exactly what's helping and what's hurting your SEO performance.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <button className="bg-white text-blue-600 px-8 py-4 rounded-lg font-bold hover:bg-gray-100 transition-colors duration-200 flex items-center justify-center">
            <Calendar className="w-5 h-5 mr-2" />
            Book a Free Consultation
          </button>
          <button className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-bold hover:bg-white hover:text-blue-600 transition-colors duration-200 flex items-center justify-center">
            <FileText className="w-5 h-5 mr-2" />
            Request a Sample Audit Report
          </button>
        </div>

        {/* Trust Indicators */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
            <p className="text-3xl font-bold text-white mb-2">200+</p>
            <p className="text-blue-100">Websites Audited</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
            <p className="text-3xl font-bold text-white mb-2">24-48h</p>
            <p className="text-blue-100">Response Time</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
            <p className="text-3xl font-bold text-white mb-2">100%</p>
            <p className="text-blue-100">White-Hat Methods</p>
          </div>
        </div>

        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 max-w-2xl mx-auto">
          <p className="text-blue-100 text-sm">
            <strong className="text-white">Money-Back Guarantee:</strong><br />
            If my audit doesn't reveal actionable insights to improve your backlink profile, 
            I'll refund 100% of your investment.
          </p>
        </div>
      </div>
    </section>
  );
};