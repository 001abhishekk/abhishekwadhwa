import React from 'react';
import { Play, CheckCircle, Users, Clock, Award } from 'lucide-react';

export const UdemyCourseSection = () => {
  const courseFeatures = [
    "19+ comprehensive lessons",
    "AI tools and templates",
    "Lifetime access",
    "Certificate of completion",
    "Community support",
    "Real-world projects"
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Udemy Course</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Master content writing with my comprehensive course designed for beginners and professionals.
          </p>
        </div>

        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8 md:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Course Preview */}
            <div className="relative">
              <div className="bg-gray-900 rounded-lg overflow-hidden shadow-2xl">
                <img
                  src="https://img-c.udemycdn.com/course/480x270/6429001_c3ea.jpg?auto=compress&cs=tinysrgb&w=600"
                  alt="Content Writing Blueprint Course"
                  className="w-full h-64 object-cover"
                />
                <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                  <button className="bg-white text-gray-900 p-4 rounded-full hover:scale-110 transition-transform duration-200 shadow-lg">
                    <Play className="w-8 h-8" />
                  </button>
                </div>
              </div>
              
              {/* Course Stats */}
              <div className="mt-6 grid grid-cols-3 gap-4">
                <div className="text-center">
                  <Users className="w-6 h-6 text-blue-600 mx-auto mb-2" />
                  <p className="text-2xl font-bold text-gray-900">2</p>
                  <p className="text-sm text-gray-600">Students</p>
                </div>
                <div className="text-center">
                  <Clock className="w-6 h-6 text-blue-600 mx-auto mb-2" />
                  <p className="text-2xl font-bold text-gray-900">1.5 Hours</p>
                  <p className="text-sm text-gray-600">Content</p>
                </div>
                <div className="text-center">
                  <Award className="w-6 h-6 text-blue-600 mx-auto mb-2" />
                  <p className="text-2xl font-bold text-gray-900">27</p>
                  <p className="text-sm text-gray-600">Downloadable Resources</p>
                </div>
              </div>
            </div>

            {/* Course Details */}
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-4">
                Complete SEO, Keywords & Content Marketing Guide
              </h3>
              <p className="text-xl text-blue-600 font-medium mb-6">
                "From zero to hire-worthy in 30 days."
              </p>
              <p className="text-gray-700 mb-8 leading-relaxed">
                Learn the fundamentals of content writing, SEO optimization, and client acquisition. 
                This comprehensive course covers everything from writing compelling headlines to 
                building a sustainable freelance business.
              </p>

              {/* Course Features */}
              <div className="mb-8">
                <h4 className="text-xl font-bold text-gray-900 mb-4">What You'll Get:</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {courseFeatures.map((feature, index) => (
                    <div key={index} className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-600 mr-3 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA Button */}
              <a href="https://www.udemy.com/course/complete-seo-keywords-content-marketing-guide/">
              <button className="bg-orange-600 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-orange-700 transition-colors duration-200 transform hover:scale-105 shadow-lg w-full sm:w-auto">
                Enroll Now on Udemy
              </button>
              </a>
              
              <p className="text-sm text-gray-600 mt-4">
                30-day money-back guarantee • Lifetime access • Mobile & TV access
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};