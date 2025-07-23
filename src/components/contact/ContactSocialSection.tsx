import React from 'react';
import { Globe, Linkedin, Facebook, Instagram, MessageCircle, BookOpen } from 'lucide-react';
import { Link } from 'react-router-dom';


export const ContactSocialSection = () => {
  const socialLinks = [
    {
      icon: Globe,
      platform: 'Website',
      handle: 'www.abhishekwadhwa.com',
      href: '#',
      color: 'hover:text-gray-900 hover:bg-gray-100'
    },
    {
      icon: Linkedin,
      platform: 'LinkedIn',
      handle: 'abhishekwadhwa1',
      href: 'https://www.linkedin.com/in/abhishekwadhwa1',
      color: 'hover:text-blue-600 hover:bg-blue-50'
    },
    {
      icon: Facebook,
      platform: 'Facebook',
      handle: 'facebook.com/people/Abhishek/100070040491893/',
      href: 'https://www.facebook.com/people/Abhishek/100070040491893/',
      color: 'hover:text-blue-700 hover:bg-blue-50'
    },
    {
      icon: Instagram,
      platform: 'Instagram',
      handle: 'abhishekwadhwa_1',
      href: 'https://instagram.com/abhishekwadhwa_1',
      color: 'hover:text-pink-600 hover:bg-pink-50'
    },
    {
      icon: MessageCircle,
      platform: 'Quora',
      handle: 'quora.com/profile/Abhishek-2519',
      href: 'https://www.quora.com/profile/Abhishek-2519',
      color: 'hover:text-red-600 hover:bg-red-50'
    },
    {
      icon: BookOpen,
      platform: 'Medium',
      handle: '01abhishek.medium.com/',
      href: 'https://01abhishek.medium.com/',
      color: 'hover:text-green-600 hover:bg-green-50'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Connect on Social Media
          </h2>
          <p className="text-lg text-gray-600">
            Follow me on these platforms for regular updates and insights.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {socialLinks.map((social, index) => {
            const IconComponent = social.icon;
            return (
              <a
                key={index}
                href={social.href}
                className={`flex items-center p-6 bg-gray-50 rounded-xl transition-all duration-200 ${social.color} group`}
              >
                <div className="p-3 bg-white rounded-lg shadow-sm group-hover:shadow-md transition-shadow duration-200">
                  <IconComponent className="w-6 h-6" />
                </div>
                <div className="ml-4">
                  <h3 className="font-bold text-gray-900 mb-1">{social.platform}</h3>
                  <p className="text-gray-600 text-sm">{social.handle}</p>
                </div>
              </a>
            );
          })}
        </div>

        <div className="mt-12 text-center">
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-8 rounded-2xl">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Let's Build Something Together
            </h3>
            <p className="text-gray-700 mb-6">
              Whether you need content strategy, copywriting, or want to collaborate on a project, 
              I'm always excited to work with passionate people and brands.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/start-project">
              <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors duration-200">
                Start a Project
              </button>
              </Link>

              <Link to="/work">
              <button className="bg-white text-blue-600 border-2 border-blue-600 px-8 py-3 rounded-lg font-medium hover:bg-blue-50 transition-colors duration-200">
                View My Work
              </button></Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};