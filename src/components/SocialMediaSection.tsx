import React from 'react';
import { Instagram, Linkedin, Twitter, Facebook, Youtube, MessageCircle } from 'lucide-react';

export const SocialMediaSection = () => {
  const socialLinks = [
    { icon: Instagram, label: 'Instagram', href: 'https://instagram.com/abhishekwadhwa_1', color: 'hover:text-pink-600' },
    { icon: Linkedin, label: 'LinkedIn', href: 'https://www.linkedin.com/in/abhishekwadhwa1', color: 'hover:text-blue-600' },
    { icon: Twitter, label: 'X (Twitter)', href: 'https://x.com/abhishekwadhwa_', color: 'hover:text-blue-400' },
    { icon: Facebook, label: 'Facebook', href: 'https://www.facebook.com/people/Abhishek/100070040491893/', color: 'hover:text-blue-700' },
    { icon: Youtube, label: 'YouTube', href: 'https://youtube.com/@abhishekwadhwa_1?si=VlvL_9ZALSUcbH8w', color: 'hover:text-red-600' },
    { icon: MessageCircle, label: 'WhatsApp', href: 'https://api.whatsapp.com/send?phone=919996850421', color: 'hover:text-green-600' }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          Let's Connect
        </h2>
        <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
          Stay updated with my latest books, podcasts, and insights by following me on social media.
        </p>

        <div className="flex flex-wrap justify-center gap-6 mb-12">
          {socialLinks.map((social, index) => {
            const IconComponent = social.icon;
            return (
              <a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`p-4 bg-gray-100 rounded-full text-gray-600 ${social.color} transition-all duration-200 hover:scale-110 hover:shadow-lg`}
                aria-label={social.label}
              >
                <IconComponent className="w-8 h-8" />
              </a>
            );
          })}
        </div>

        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Join My Exclusive Community
          </h3>
          <p className="text-gray-600 mb-6">
            Connect with like-minded people and get access to exclusive content and updates.
          </p>
<a
  href="https://t.me/+bJvD9opbvadiNDk1"
  target="_blank"
  rel="noopener noreferrer"
>
  <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors duration-200">
    Join Now
  </button>
</a>

        </div>
      </div>
    </section>
  );
};