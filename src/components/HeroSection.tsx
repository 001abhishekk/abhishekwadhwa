import React from 'react';



export const HeroSection = () => {
  return (
    <section id="home" className="relative bg-gradient-to-br from-blue-50 to-indigo-100 min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Hero Text */}
          <div className="text-center lg:text-left">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Abhishek Wadhwa
              <span className="text-blue-600"> Digital & Brand Marketing Manager</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-6 leading-relaxed">
              Growth Marketing & Marketing Operations. I build marketing systems that turn positioning
              into demand, demand into pipeline, and customer interactions into measurable growth.
            </p>
            <p className="text-base md:text-lg text-gray-500 mb-8 leading-relaxed">
              B2B Demand Generation &middot; Paid Acquisition &middot; Lifecycle Marketing &middot; Brand Strategy &middot; Marketing Operations
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a href="/work">
              <button className="bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-medium hover:bg-blue-700 transition-all duration-200 transform hover:scale-105 shadow-lg">
                Explore the Work
                </button>
                </a>
              <a href="https://01abhishek.medium.com/" target="_blank" rel="noopener noreferrer">
              <button className="bg-white text-blue-600 border-2 border-blue-600 px-8 py-4 rounded-lg text-lg font-medium hover:bg-blue-50 transition-all duration-200">
                Read the Latest
                </button>
                </a>
            </div>

          </div>

          {/* Hero Image */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="w-80 h-80 bg-gradient-to-br from-blue-400 to-indigo-600 rounded-full flex items-center justify-center shadow-2xl">
                <img
                  src="/images/me.jpg?auto=compress&cs=tinysrgb&w=400"
                  alt="Abhishek Wadhwa"
                  className="w-72 h-72 rounded-full object-cover border-4 border-white shadow-lg"
                />
              </div>
              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 bg-white p-3 rounded-full shadow-lg animate-bounce">
                <span className="text-2xl">✍️</span>
                </div>
                <div className="absolute -bottom-4 -left-4 bg-white p-3 rounded-full shadow-lg animate-bounce" style={{ animationDelay: '0.5s' }}>
                  <span className="text-2xl">🎙️</span>
                  </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
