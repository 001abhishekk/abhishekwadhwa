import React from 'react';
import { CheckCircle } from 'lucide-react';

export const AboutSection = () => {
  const skills = [
    'Content Writing & Copywriting',
    'Digital Marketing Strategies',
    'Podcasting & Public Speaking',
    'Passion for Technology & Personal Development',
    'Author of Unscripted Hearts and The Almost Real Thing'
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">About Me</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Profile Image */}
          <div className="flex justify-center lg:justify-start">
            <div className="relative">
              <img
                src="/src/photos/me-2.jpg?auto=compress&cs=tinysrgb&w=400"
                alt="Abhishek Wadhwa"
                className="w-80 h-180 rounded-2xl object-cover shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-600/20 to-transparent rounded-2xl"></div>
            </div>
          </div>

          {/* About Content */}
          <div>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Hello, I'm Abhishek Wadhwa – a content creator, digital marketing expert, author, and podcaster. 
              With a deep passion for helping brands grow through creative content, I've had the privilege of 
              working with numerous clients in the digital space. When I'm not writing, you'll find me diving 
              deep into tech, reading, or discussing personal development.
            </p>

            <div className="mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Key Skills & Passions:</h3>
              <div className="space-y-3">
                {skills.map((skill, index) => (
                  <div key={index} className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-blue-600 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">{skill}</span>
                  </div>
                ))}
              </div>
            </div>

            <a href="/about">
            <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors duration-200">
              Learn More About Me
            </button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};