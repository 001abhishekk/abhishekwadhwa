import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, Mic, GraduationCap, ArrowRight } from 'lucide-react';

export const WorkSection = () => {
  const workItems = [
    {
      icon: BookOpen,
      title: 'Published Books',
      description: 'Author of multiple books on personal growth, career development, and technology.',
      link: '/work#books',
      color: 'bg-blue-50 text-blue-600',
      hoverColor: 'group-hover:bg-blue-600'
    },
    {
      icon: Mic,
      title: 'Podcast',
      description: 'Host of insightful conversations with industry experts and thought leaders.',
      link: '/work#podcast',
      color: 'bg-purple-50 text-purple-600',
      hoverColor: 'group-hover:bg-purple-600'
    },
    {
      icon: GraduationCap,
      title: 'Online Courses',
      description: 'Comprehensive courses on Udemy helping thousands of students worldwide.',
      link: '/work#courses',
      color: 'bg-green-50 text-green-600',
      hoverColor: 'group-hover:bg-green-600'
    }
  ];

  return (
    <section id="work" className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            My Work
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore my books, podcast episodes, and online courses designed to help you grow personally and professionally.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {workItems.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <Link
                key={index}
                to={item.link}
                className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className={`${item.color} ${item.hoverColor} w-16 h-16 rounded-xl flex items-center justify-center mb-6 transition-colors duration-300 group-hover:text-white`}>
                  <IconComponent className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {item.description}
                </p>
                <div className="flex items-center text-blue-600 font-medium group-hover:text-blue-700">
                  Learn More
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                </div>
              </Link>
            );
          })}
        </div>

        <div className="text-center">
          <Link
            to="/work"
            className="inline-flex items-center bg-gray-900 text-white px-8 py-4 rounded-xl hover:bg-gray-800 transition-all duration-200 font-medium text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            View All My Work
            <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
        </div>
      </div>
    </section>
  );
};
