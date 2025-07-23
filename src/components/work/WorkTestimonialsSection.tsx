import React from 'react';
import { Star, Quote } from 'lucide-react';

export const WorkTestimonialsSection = () => {
  const testimonials = [
    {
      name: "Ritika Sharma",
      location: "India",
      platform: "Udemy Student",
      quote: "This course helped me land my first client within 2 weeks!",
      rating: 5,
      avatar: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=100",
      type: "course"
    },
    {
      name: "Amazon Reviewer",
      location: "Verified Purchase",
      platform: "Amazon",
      quote: "Loved the authenticity in his novels. Can't wait for the next one!",
      rating: 5,
      avatar: "https://images.pexels.com/photos/1239288/pexels-photo-1239288.jpeg?auto=compress&cs=tinysrgb&w=100",
      type: "book"
    },
    {
      name: "Sarah Johnson",
      location: "USA",
      platform: "Spotify Listener",
      quote: "Podcasts are short but powerful. Perfect for my commute!",
      rating: 5,
      avatar: "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=100",
      type: "podcast"
    },
    {
      name: "Priya Patel",
      location: "Mumbai",
      platform: "Course Graduate",
      quote: "The AI tools section alone was worth the entire course price.",
      rating: 5,
      avatar: "https://images.pexels.com/photos/1239289/pexels-photo-1239289.jpeg?auto=compress&cs=tinysrgb&w=100",
      type: "course"
    },
    {
      name: "Book Club Reader",
      location: "Goodreads",
      platform: "Goodreads",
      quote: "Unscripted Hearts made me cry and laugh in the same chapter.",
      rating: 5,
      avatar: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=100",
      type: "book"
    },
    {
      name: "Tech Entrepreneur",
      location: "Bangalore",
      platform: "Podcast Guest",
      quote: "Great interviewer! Made me feel comfortable sharing my story.",
      rating: 5,
      avatar: "https://images.pexels.com/photos/1239290/pexels-photo-1239290.jpeg?auto=compress&cs=tinysrgb&w=100",
      type: "podcast"
    }
  ];

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'course': return 'bg-orange-100 text-orange-800';
      case 'book': return 'bg-green-100 text-green-800';
      case 'podcast': return 'bg-purple-100 text-purple-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'course': return '🎓';
      case 'book': return '📚';
      case 'podcast': return '🎙️';
      default: return '💬';
    }
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Community Feedback</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            What readers, students, and listeners are saying about my work.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="flex items-center mb-4">
                <span className={`px-3 py-1 rounded-full text-xs font-medium ${getTypeColor(testimonial.type)}`}>
                  {getTypeIcon(testimonial.type)} {testimonial.type.charAt(0).toUpperCase() + testimonial.type.slice(1)}
                </span>
              </div>
              
              <Quote className="w-8 h-8 text-blue-400 mb-4" />
              
              <p className="text-gray-700 mb-6 leading-relaxed italic">
                "{testimonial.quote}"
              </p>
              
              <div className="flex justify-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              
              <div className="flex items-center">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <p className="font-bold text-gray-900">{testimonial.name}</p>
                  <p className="text-sm text-gray-600">{testimonial.platform}</p>
                  <p className="text-xs text-gray-500">{testimonial.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};