import React from 'react';
import { ExternalLink, Quote } from 'lucide-react';

export const PressMediaSection = () => {
  const mediaLogos = [
    { name: 'Medium', logo: '/images/medium.svg?auto=compress&cs=tinysrgb&w=200' },
    { name: 'Spotify', logo: '/images/spotify.svg?auto=compress&cs=tinysrgb&w=200' },
    { name: 'LinkedIn', logo: '/images/linkedin.svg?auto=compress&cs=tinysrgb&w=200' },
    { name: 'Quora', logo: '/images/quora.svg?auto=compress&cs=tinysrgb&w=200' },
    { name: 'Udemy', logo: '/images/udemy.svg?auto=compress&cs=tinysrgb&w=200' },
    { name: 'Google', logo: '/images/google.svg?auto=compress&cs=tinysrgb&w=200' }
  ];

  const testimonials = [
    {
      quote: "Abhishek's content strategy helped us increase our organic traffic by 300% in just 6 months.",
      author: "Sarah Johnson",
      title: "Marketing Director, TechStart",
      avatar: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=100"
    },
    {
      quote: "His podcast interviews are insightful and engaging. A true professional in the content space.",
      author: "Michael Chen",
      title: "CEO, Digital Innovations",
      avatar: "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=100"
    },
    {
      quote: "Working with Abhishek transformed our brand voice. His writing is both strategic and authentic.",
      author: "Emily Rodriguez",
      title: "Founder, Creative Agency",
      avatar: "https://images.pexels.com/photos/1239288/pexels-photo-1239288.jpeg?auto=compress&cs=tinysrgb&w=100"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Media Mentions */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Featured & Recognized By</h2>
          <p className="text-xl text-gray-600 mb-12">Platforms where my work has been featured and recognized</p>
          
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

        {/* Testimonials */}
        <div className="mt-20">
          <h3 className="text-3xl font-bold text-gray-900 text-center mb-12">What People Say</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                <Quote className="w-8 h-8 text-blue-600 mb-4" />
                <p className="text-gray-700 mb-6 leading-relaxed italic">"{testimonial.quote}"</p>
                <div className="flex items-center">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.author}
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <p className="font-bold text-gray-900">{testimonial.author}</p>
                    <p className="text-sm text-gray-600">{testimonial.title}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Press Kit CTA */}
        <div className="text-center mt-12">
          <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors duration-200 inline-flex items-center">
            See My Full Press Kit
            <ExternalLink className="ml-2 w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};
