import React from 'react';
import { Mail, MessageCircle, Send, Clock } from 'lucide-react';

export const ManualContactSection = () => {
  const briefPoints = [
    'What you\'re working on',
    'What outcome you\'re aiming for',
    'Budget range (if known)',
    'Timeline or urgency'
  ];

  const contactOptions = [
    {
      icon: Mail,
      title: 'Email',
      handle: 'abhishekw47@gmail.com',
      href: 'mailto:abhishekw47@gmail.com',
      color: 'bg-blue-500 hover:bg-blue-600'
    },
    {
      icon: Send,
      title: 'Telegram',
      handle: 't.me/searching4abhi',
      href: 'https://t.me/searching4abhi',
      color: 'bg-blue-400 hover:bg-blue-500'
    },
    {
      icon: MessageCircle,
      title: 'WhatsApp',
      handle: 'Send a message',
      href: 'https://api.whatsapp.com/send?phone=919996850421',
      color: 'bg-green-500 hover:bg-green-600'
    }
  ];

  return (
    <section id="contact-section" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            How to Start
          </h2>
          <p className="text-xl text-gray-600">
            To begin, send me a quick message with:
          </p>
        </div>

        {/* Brief Requirements */}
        <div className="bg-white p-8 rounded-2xl shadow-lg mb-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {briefPoints.map((point, index) => (
              <div key={index} className="flex items-center">
                <div className="w-8 h-8 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center font-bold text-sm mr-4 flex-shrink-0">
                  {index + 1}
                </div>
                <span className="text-gray-700 text-lg">{point}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Contact Options */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {contactOptions.map((option, index) => {
            const IconComponent = option.icon;
            return (
              <a
                key={index}
                href={option.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`${option.color} text-white p-6 rounded-2xl transition-all duration-300 transform hover:scale-105 hover:shadow-xl text-center group`}
              >
                <IconComponent className="w-8 h-8 mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
                <h3 className="text-xl font-bold mb-2">{option.title}</h3>
                <p className="text-white/90">{option.handle}</p>
              </a>
            );
          })}
        </div>

        {/* Response Promise */}
        <div className="bg-white p-8 rounded-2xl shadow-lg text-center">
          <div className="flex items-center justify-center mb-4">
            <Clock className="w-6 h-6 text-blue-600 mr-2" />
            <span className="text-lg font-medium text-gray-900">Response Guarantee</span>
          </div>
          <p className="text-gray-700 mb-4">
            I'll reply within <strong className="text-blue-600">24–48 hours</strong>. If it's a good fit, we'll book a 30-min discovery call.
          </p>
          <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-600">
            <p className="text-blue-800 italic">
              "I read every message personally. No bots. No templates. Just clarity."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};