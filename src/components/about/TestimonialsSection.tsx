import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';

export const TestimonialsSection = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      name: 'Priya Sharma',
      title: 'Marketing Manager, TechCorp',
      avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150',
      quote: 'Abhishek transformed our content strategy completely. His approach to storytelling helped us connect with our audience in ways we never imagined. Our engagement rates increased by 250%!',
      rating: 5
    },
    {
      name: 'Rajesh Kumar',
      title: 'Founder, StartupHub',
      avatar: 'https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=150',
      quote: 'Working with Abhishek was a game-changer for our startup. His content not only improved our SEO rankings but also established us as thought leaders in our industry.',
      rating: 5
    },
    {
      name: 'Anita Desai',
      title: 'Author & Blogger',
      avatar: 'https://images.pexels.com/photos/1239288/pexels-photo-1239288.jpeg?auto=compress&cs=tinysrgb&w=150',
      quote: 'As a fellow writer, I can appreciate Abhishek\'s craft. His ability to weave compelling narratives while maintaining strategic focus is remarkable. Highly recommended!',
      rating: 5
    },
    {
      name: 'David Thompson',
      title: 'CEO, Digital Solutions',
      avatar: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=150',
      quote: 'Abhishek\'s podcast interviews are incredibly insightful. He has a unique ability to ask the right questions and create meaningful conversations that resonate with audiences.',
      rating: 5
    },
    {
      name: 'Meera Patel',
      title: 'Content Director, MediaFlow',
      avatar: 'https://images.pexels.com/photos/1239289/pexels-photo-1239289.jpeg?auto=compress&cs=tinysrgb&w=150',
      quote: 'I\'ve worked with many content creators, but Abhishek stands out for his strategic thinking and authentic voice. He doesn\'t just write content; he crafts experiences.',
      rating: 5
    }
  ];

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-20 bg-gray-900 text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Voices From My Community</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            What clients, collaborators, and readers say about working with me
          </p>
        </div>

        {/* Main Testimonial Carousel */}
        <div className="relative bg-gray-800 rounded-2xl p-8 md:p-12 shadow-2xl">
          <Quote className="w-16 h-16 text-blue-400 mb-6 mx-auto" />
          
          <div className="text-center">
            <p className="text-xl md:text-2xl text-gray-100 leading-relaxed mb-8 italic">
              "{testimonials[currentTestimonial].quote}"
            </p>
            
            <div className="flex justify-center mb-6">
              {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                <Star key={i} className="w-6 h-6 text-yellow-400 fill-current" />
              ))}
            </div>
            
            <div className="flex items-center justify-center">
              <img
                src={testimonials[currentTestimonial].avatar}
                alt={testimonials[currentTestimonial].name}
                className="w-16 h-16 rounded-full object-cover mr-4 border-4 border-blue-400"
              />
              <div className="text-left">
                <p className="font-bold text-xl text-white">{testimonials[currentTestimonial].name}</p>
                <p className="text-gray-300">{testimonials[currentTestimonial].title}</p>
              </div>
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevTestimonial}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-blue-600 hover:bg-blue-700 p-3 rounded-full transition-colors duration-200"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={nextTestimonial}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-blue-600 hover:bg-blue-700 p-3 rounded-full transition-colors duration-200"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>

        {/* Testimonial Dots */}
        <div className="flex justify-center mt-8 space-x-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentTestimonial(index)}
              className={`w-3 h-3 rounded-full transition-colors duration-200 ${
                index === currentTestimonial ? 'bg-blue-400' : 'bg-gray-600 hover:bg-gray-500'
              }`}
            />
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
          <div className="bg-gray-800 p-6 rounded-lg">
            <p className="text-3xl font-bold text-blue-400 mb-2">500+</p>
            <p className="text-gray-300">Happy Clients</p>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg">
            <p className="text-3xl font-bold text-blue-400 mb-2">1000+</p>
            <p className="text-gray-300">Articles Written</p>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg">
            <p className="text-3xl font-bold text-blue-400 mb-2">50+</p>
            <p className="text-gray-300">Podcast Episodes</p>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg">
            <p className="text-3xl font-bold text-blue-400 mb-2">2</p>
            <p className="text-gray-300">Published Books</p>
          </div>
        </div>
      </div>
    </section>
  );
};