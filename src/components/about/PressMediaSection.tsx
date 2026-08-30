import React from 'react';

export const PressMediaSection = () => {
  const mediaLogos = [
    { name: 'Medium', logo: '/images/medium.svg?auto=compress&cs=tinysrgb&w=200' },
    { name: 'Spotify', logo: '/images/spotify.svg?auto=compress&cs=tinysrgb&w=200' },
    { name: 'LinkedIn', logo: '/images/linkedin.svg?auto=compress&cs=tinysrgb&w=200' },
    { name: 'Quora', logo: '/images/quora.svg?auto=compress&cs=tinysrgb&w=200' },
    { name: 'Udemy', logo: '/images/udemy.svg?auto=compress&cs=tinysrgb&w=200' },
    { name: 'Google', logo: '/images/google.svg?auto=compress&cs=tinysrgb&w=200' }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Also On</h2>
          <p className="text-xl text-gray-600 mb-12">Platforms where my work and writing appear</p>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
            {mediaLogos.map((media, index) => (
              <div key={index} className="group cursor-pointer">
                <div className="bg-gray-100 p-6 rounded-lg hover:bg-gray-200 transition-colors duration-300 group-hover:scale-105 transform">
                  <img
                    src={media.logo}
                    alt={media.name}
                    className="w-full h-12 object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300"
                  />
                </div>
                <p className="mt-2 text-sm font-medium text-gray-600">{media.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
