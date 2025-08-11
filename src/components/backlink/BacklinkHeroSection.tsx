import React from 'react';
import { TrendingUp, Shield, BarChart3 } from 'lucide-react';

export const BacklinkHeroSection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-indigo-50 min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Hero Text */}
          <div className="text-center lg:text-left">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Backlink Audit Consultant & 
              <span className="text-blue-600"> Off-Page SEO Expert</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed">
              I help brands build powerful backlink profiles that boost rankings, authority, and trust — without spammy tactics.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button className="bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-medium hover:bg-blue-700 transition-all duration-200 transform hover:scale-105 shadow-lg">
                Book Your Backlink Audit
              </button>
              <button className="bg-white text-blue-600 border-2 border-blue-600 px-8 py-4 rounded-lg text-lg font-medium hover:bg-blue-50 transition-all duration-200">
                See Case Studies
              </button>
            </div>
          </div>

          {/* Hero Visual */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="w-80 h-80 bg-gradient-to-br from-blue-400 to-indigo-600 rounded-2xl flex items-center justify-center shadow-2xl">
                <div className="bg-white p-8 rounded-xl shadow-lg">
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div className="bg-green-100 p-3 rounded-lg text-center">
                      <TrendingUp className="w-6 h-6 text-green-600 mx-auto mb-1" />
                      <p className="text-xs font-medium text-green-800">Rankings ↗</p>
                    </div>
                    <div className="bg-blue-100 p-3 rounded-lg text-center">
                      <Shield className="w-6 h-6 text-blue-600 mx-auto mb-1" />
                      <p className="text-xs font-medium text-blue-800">Clean Profile</p>
                    </div>
                  </div>
                  <div className="bg-purple-100 p-3 rounded-lg text-center">
                    <BarChart3 className="w-6 h-6 text-purple-600 mx-auto mb-1" />
                    <p className="text-xs font-medium text-purple-800">Authority Boost</p>
                  </div>
                </div>
              </div>
              
              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 bg-white p-3 rounded-full shadow-lg animate-bounce">
                <span className="text-2xl">🔗</span>
              </div>
              <div className="absolute -bottom-4 -left-4 bg-white p-3 rounded-full shadow-lg animate-bounce" style={{ animationDelay: '0.5s' }}>
                <span className="text-2xl">📈</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};