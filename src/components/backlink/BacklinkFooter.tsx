import React from 'react';
import { Mail, Phone, MapPin, Linkedin, Twitter, Globe } from 'lucide-react';

export const BacklinkFooter = () => {
  const services = [
    'Backlink Audits',
    'Toxic Link Cleanup',
    'Link Building Strategy',
    'Competitor Analysis',
    'SEO Consulting',
    'Content Marketing'
  ];

  const socialLinks = [
    { icon: Linkedin, href: 'https://www.linkedin.com/in/abhishekwadhwa1', label: 'LinkedIn' },
    { icon: Twitter, href: 'https://x.com/abhishekwadhwa_', label: 'Twitter' },
    { icon: Globe, href: 'https://01abhishek.medium.com/', label: 'Blog' }
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About */}
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold mb-6">Abhishek Wadhwa</h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Professional SEO consultant specializing in backlink audits and off-page optimization. 
              Helping businesses build sustainable search visibility through strategic link building 
              and toxic link cleanup.
            </p>
            <div className="space-y-2 text-gray-300">
              <div className="flex items-center">
                <Mail className="w-4 h-4 mr-2" />
                <span>abhishekw47@gmail.com</span>
              </div>
              <div className="flex items-center">
                <Phone className="w-4 h-4 mr-2" />
                <span>+91-9996850421</span>
              </div>
              <div className="flex items-center">
                <MapPin className="w-4 h-4 mr-2" />
                <span>Kurukshetra, Haryana, India</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-bold mb-6">SEO Services</h3>
            <div className="space-y-2">
              {services.map((service, index) => (
                <a
                  key={index}
                  href="#"
                  className="block text-gray-300 hover:text-white transition-colors duration-200"
                >
                  {service}
                </a>
              ))}
            </div>
          </div>

          {/* Contact & Social */}
          <div>
            <h3 className="text-xl font-bold mb-6">Connect</h3>
            <div className="flex space-x-4 mb-6">
              {socialLinks.map((social, index) => {
                const IconComponent = social.icon;
                return (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-gray-800 rounded-lg text-gray-300 hover:text-white hover:bg-gray-700 transition-all duration-200"
                    aria-label={social.label}
                  >
                    <IconComponent className="w-5 h-5" />
                  </a>
                );
              })}
            </div>
            
            <div className="bg-gray-800 p-4 rounded-lg">
              <p className="text-sm text-gray-300 mb-2">
                <strong className="text-white">Free Consultation</strong>
              </p>
              <p className="text-xs text-gray-400">
                15-minute call to discuss your backlink challenges
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <p className="text-gray-400">
            © 2024 Abhishek Wadhwa. All rights reserved. Professional SEO consulting services for sustainable growth.
          </p>
        </div>
      </div>
    </footer>
  );
};