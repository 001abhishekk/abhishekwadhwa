import React from 'react';

export const SocialProofSection = () => {
  const platforms = [
    { name: 'Amazon', logo: '/src/photos/logos/amazon.svg?auto=compress&cs=tinysrgb&w=200' },
    { name: 'Udemy', logo: '/src/photos/logos/udemy.svg?auto=compress&cs=tinysrgb&w=200' },
    { name: 'Spotify', logo: '/src/photos/logos/spotify.svg?auto=compress&cs=tinysrgb&w=200' },
    { name: 'Medium', logo: '/src/photos/logos/medium-logo.svg?auto=compress&cs=tinysrgb&w=200' },
    { name: 'Quora', logo: '/src/photos/logos/quora.svg?auto=compress&cs=tinysrgb&w=200' },
    { name: 'Goodreads', logo: '/src/photos/logos/goodreads.svg?auto=compress&cs=tinysrgb&w=200' }
  ];

  const stats = [
    { number: '10+', label: 'Book Readers' },
    { number: '2+', label: 'Course Students' },
    { number: '50K+', label: 'Podcast Downloads' },
    { number: '4.8/5', label: 'Average Rating' }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Platform Logos */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Featured In / Trusted By</h2>
          <p className="text-lg text-gray-600 mb-12">Platforms where my work is published and recognized</p>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
            {platforms.map((platform, index) => (
              <div key={index} className="group cursor-pointer">
                <div className="bg-gray-50 p-6 rounded-lg hover:bg-gray-100 transition-colors duration-300 group-hover:scale-105 transform">
                  <img
                    src={platform.logo}
                    alt={platform.name}
                    className="w-full h-12 object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300"
                  />
                </div>
                <p className="mt-2 text-sm font-medium text-gray-600">{platform.name}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <div className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-2xl p-8 md:p-12">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold text-white mb-4">Impact by Numbers</h3>
            <p className="text-blue-100">The reach and impact of my creative work</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <p className="text-4xl md:text-5xl font-bold text-white mb-2">{stat.number}</p>
                <p className="text-blue-100">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};