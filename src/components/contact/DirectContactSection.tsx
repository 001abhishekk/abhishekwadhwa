import React from 'react';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';

export const DirectContactSection = () => {
  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      value: 'abhishekw47@gmail.com',
      description: 'Best way to reach me',
      href: 'mailto:abhishekw47@gmail.com',
      color: 'bg-blue-500'
    },
    {
      icon: Phone,
      title: 'Phone',
      value: '+91 99968 50421',
      description: 'Call or WhatsApp',
      href: 'tel:+919996850421',
      color: 'bg-green-500'
    },
    {
      icon: MapPin,
      title: 'Location',
      value: 'Kurukshetra, Haryana',
      description: 'India',
      href: '#https://maps.app.goo.gl/mjxqK27rJqkbkBMJ8',
      color: 'bg-red-500'
    },
    {
      icon: Clock,
      title: 'Availability',
      value: 'Mon–Sat, 10:00 AM – 7:00 PM',
      description: 'IST (Indian Standard Time)',
      href: '#',
      color: 'bg-purple-500'
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Get in Touch Directly
          </h2>
          <p className="text-lg text-gray-600">
            Prefer direct contact? Here are all the ways you can reach me.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {contactInfo.map((info, index) => {
            const IconComponent = info.icon;
            return (
              <div key={index} className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <div className={`w-12 h-12 ${info.color} rounded-xl flex items-center justify-center mb-4`}>
                  <IconComponent className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{info.title}</h3>
                <p className="text-gray-900 font-medium mb-1">{info.value}</p>
                <p className="text-gray-600 text-sm mb-4">{info.description}</p>
                {info.href !== '#' && (
                  <a
                    href={info.href}
                    className="text-blue-600 hover:text-blue-700 font-medium text-sm transition-colors duration-200"
                  >
                    Contact Now →
                  </a>
                )}
              </div>
            );
          })}
        </div>

        {/* Additional Info */}
        <div className="mt-12 bg-blue-50 p-8 rounded-2xl text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Response Time</h3>
          <p className="text-lg text-gray-700 mb-2">
            I typically respond to emails within <span className="font-bold text-blue-600">24 hours</span>
          </p>
          <p className="text-gray-600">
            For urgent matters, please call or send a WhatsApp message.
          </p>
        </div>
      </div>
    </section>
  );
};