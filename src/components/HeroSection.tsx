import React from 'react';



export const HeroSection = () => {
  return (
    <section id="home" className="relative bg-gradient-to-br from-blue-50 to-indigo-100 min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Hero Text */}
          <div className="text-center lg:text-left">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Content Creator | Author | 
              <span className="text-blue-600"> Digital Marketing Expert</span> | 
              Podcaster
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed">
              Helping Brands Grow | Sharing Insights Through Writing & Podcasts
            </p>
            <a href="/work">
            <button className="bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-medium hover:bg-blue-700 transition-all duration-200 transform hover:scale-105 shadow-lg">
              Explore My Work
              </button>
              </a>

          </div>

          {/* Hero Image */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="w-80 h-80 bg-gradient-to-br from-blue-400 to-indigo-600 rounded-full flex items-center justify-center shadow-2xl">
                <img
                  src="https://drive.usercontent.google.com/download?id=1E7JFnLkYC0D1_-ZWMyreWgQd4uHyzxxo?auto=compress&cs=tinysrgb&w=400"
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
