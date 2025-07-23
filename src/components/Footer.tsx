import React, { useState } from 'react';
import { Instagram, Linkedin, Twitter, Facebook, Youtube, MessageCircle, Mail, CheckCircle, AlertCircle } from 'lucide-react';

export const Footer = () => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');
    setErrorMessage('');
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: 'Newsletter Subscriber',
          email: email,
          subject: 'Newsletter Subscription',
          message: 'I would like to subscribe to your newsletter and receive updates on your latest content, books, and insights.',
          honeypot: '',
          isNewsletter: true
        }),
      });

      const data = await response.json();

      if (response.ok) {
        setSubmitStatus('success');
        setEmail('');
      } else {
        setSubmitStatus('error');
        setErrorMessage(data.details || data.error || 'Something went wrong. Please try again.');
      }
    } catch (error) {
      console.error('Newsletter subscription error:', error);
      setSubmitStatus('error');
      setErrorMessage('Network error. Please check your connection and try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  // Reset status messages after 5 seconds
  React.useEffect(() => {
    if (submitStatus !== 'idle') {
      const timer = setTimeout(() => {
        setSubmitStatus('idle');
        setErrorMessage('');
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [submitStatus]);

  const socialLinks = [
    { icon: Instagram, href: 'https://instagram.com/abhishekwadhwa_1', label: 'Instagram' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/abhishekwadhwa1', label: 'LinkedIn' },
    { icon: Twitter, href: 'https://x.com/abhishekwadhwa_', label: 'X (Twitter)' },
    { icon: Facebook, href: 'https://www.facebook.com/people/Abhishek/100070040491893/', label: 'Facebook' },
    { icon: Youtube, href: 'https://youtube.com/@abhishekwadhwa_1?si=VlvL_9ZALSUcbH8w', label: 'YouTube' },
    { icon: MessageCircle, href: 'https://api.whatsapp.com/send?phone=919996850421', label: 'WhatsApp' }
  ];

  const quickLinks = [
    { label: 'Home', href: '#home' },
    { label: 'Blog', href: '#blog' },
    { label: 'Books', href: '#books' },
    { label: 'Podcasts', href: '#books' },
    { label: 'About Me', href: '#about' },
    { label: 'Contact', href: '#contact' }
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* About & Contact Information */}
          <div>
            <h3 className="text-2xl font-bold mb-6">About Abhishek</h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Abhishek Wadhwa is a content writer, author, and podcaster passionate about 
              personal growth, technology, and helping people succeed in their careers and lives.
            </p>
            <div className="space-y-2 text-gray-300">
              <p>Email: abhishekw47@gmail.com</p>
              <p>Phone: +91-9996850421</p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-2xl font-bold mb-6">Quick Links</h3>
            <div className="grid grid-cols-2 gap-2">
              {quickLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="text-gray-300 hover:text-white transition-colors duration-200"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Social Media & Newsletter */}
          <div>
            <h3 className="text-2xl font-bold mb-6">Stay Connected</h3>
            
            {/* Social Media Icons */}
            <div className="flex flex-wrap gap-4 mb-8">
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

            {/* Newsletter Signup */}
            <div>
              <p className="text-gray-300 mb-4">Subscribe to get the latest updates</p>
              
              {submitStatus === 'success' && (
                <div className="mb-4 p-3 bg-green-50 border border-green-200 rounded-lg flex items-center">
                  <CheckCircle className="w-4 h-4 text-green-600 mr-2" />
                  <p className="text-green-800 text-sm">Thanks for subscribing!</p>
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-lg flex items-center">
                  <AlertCircle className="w-4 h-4 text-red-600 mr-2" />
                  <p className="text-red-800 text-sm">{errorMessage}</p>
                </div>
              )}
              
              <form onSubmit={handleNewsletterSubmit} className="flex flex-col sm:flex-row gap-2">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  required
                  className="flex-1 px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-white placeholder-gray-400"
                />
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-200 font-medium disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'Subscribing...' : 'Subscribe'}
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <p className="text-gray-400">
            © 2024 Abhishek Wadhwa. All rights reserved. Built with passion for sharing knowledge and inspiring growth.
          </p>
        </div>
      </div>
    </footer>
  );
};