import React from 'react';
import { Quote, ExternalLink } from 'lucide-react';

export const TestimonialsSection = () => {
  const testimonials = [
    {
      name: 'Sarah Johnson',
      title: 'Marketing Director',
      company: 'TechStart',
      quote: 'Abhishek helped us reposition our brand with clarity and confidence. Our organic traffic increased by 300% in 6 months.',
      avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150'
    },
    {
      name: 'Rajesh Kumar',
      title: 'Founder',
      company: 'StartupHub',
      quote: 'Working with Abhishek was transformative. He doesn\'t just execute—he thinks strategically about long-term growth.',
      avatar: 'https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=150'
    },
    {
      name: 'Emily Rodriguez',
      title: 'CEO',
      company: 'Creative Agency',
      quote: 'His approach to content strategy is refreshingly different. Results-driven but never at the expense of authenticity.',
      avatar: 'https://images.pexels.com/photos/1239288/pexels-photo-1239288.jpeg?auto=compress&cs=tinysrgb&w=150'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Client Success Stories
          </h2>
          <p className="text-xl text-gray-600">
            Real results from real partnerships.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-gray-50 p-8 rounded-2xl hover:shadow-lg transition-all duration-300">
              <Quote className="w-10 h-10 text-blue-600 mb-6" />
              <p className="text-gray-700 mb-6 leading-relaxed italic text-lg">
                "{testimonial.quote}"
              </p>
              <div className="flex items-center">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <p className="font-bold text-gray-900">{testimonial.name}</p>
                  <p className="text-sm text-gray-600">{testimonial.title}</p>
                  <p className="text-sm text-blue-600">{testimonial.company}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors duration-200 inline-flex items-center">
            View Full Portfolio
            <ExternalLink className="ml-2 w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};