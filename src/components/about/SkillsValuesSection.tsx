import React from 'react';
import { Lightbulb, Target, Mic, Users, Heart, Zap } from 'lucide-react';

export const SkillsValuesSection = () => {
  const skillsValues = [
    {
      icon: Lightbulb,
      title: 'Words That Move',
      description: 'Content should educate, empower, and convert.',
      color: 'bg-yellow-500'
    },
    {
      icon: Target,
      title: 'Strategic Thinking',
      description: 'I believe creativity thrives within purpose.',
      color: 'bg-blue-500'
    },
    {
      icon: Mic,
      title: 'Authentic Voice',
      description: 'Your brand should speak, not shout.',
      color: 'bg-green-500'
    },
    {
      icon: Users,
      title: 'Collaboration Over Competition',
      description: 'Growth is never solo.',
      color: 'bg-purple-500'
    },
    {
      icon: Heart,
      title: 'Purpose-Driven Content',
      description: 'Every word should inspire or inform.',
      color: 'bg-red-500'
    },
    {
      icon: Zap,
      title: 'Continuous Learning',
      description: 'Staying ahead through constant evolution.',
      color: 'bg-orange-500'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Skills & Values</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            The principles and expertise that drive everything I do
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillsValues.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group">
                <div className={`w-16 h-16 ${item.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <IconComponent className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.description}</p>
              </div>
            );
          })}
        </div>

        {/* Additional Skills Section */}
        <div className="mt-20 bg-white p-8 rounded-2xl shadow-lg">
          <h3 className="text-3xl font-bold text-gray-900 text-center mb-8">Technical Expertise</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              'SEO & Content Strategy',
              'Digital Marketing',
              'Copywriting',
              'Podcast Production',
              'Social Media Strategy',
              'Email Marketing',
              'Brand Storytelling',
              'Analytics & Optimization'
            ].map((skill, index) => (
              <div key={index} className="text-center p-4 bg-gray-50 rounded-lg hover:bg-blue-50 transition-colors duration-200">
                <p className="font-medium text-gray-800">{skill}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};