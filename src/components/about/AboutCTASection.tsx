import React, { useState } from 'react';
import { Mail, MessageCircle, Calendar, CheckCircle, AlertCircle } from 'lucide-react';

export const AboutCTASection = () => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
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

  return (
    <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-700">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="mb-8">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Let's Collaborate
          </h2>
          <p className="text-xl text-blue-100 leading-relaxed max-w-2xl mx-auto mb-8">
            Ready to tell your brand story? Whether you need content strategy, copywriting, 
            or want to be featured on my podcast, I'd love to hear from you.
          </p>
        </div>

        {/* CTA Buttons */}
<div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
  <a
    href="mailto:abhishekw47@gmail.com"
    className="bg-white text-blue-600 px-8 py-4 rounded-lg font-bold hover:bg-gray-100 transition-colors duration-200 flex items-center justify-center"
  >
    <Mail className="w-5 h-5 mr-2" />
    Hire Me
  </a>
  <a
    href="https://api.whatsapp.com/send?phone=919996850421"
    target="_blank"
    rel="noopener noreferrer"
    className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-bold hover:bg-white hover:text-blue-600 transition-colors duration-200 flex items-center justify-center"
  >
    <MessageCircle className="w-5 h-5 mr-2" />
    Let's Chat
  </a>
  <a
    href="https://calendly.com/abhishekwadhwa/30min"
    target="_blank"
    rel="noopener noreferrer"
    className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-bold hover:bg-white hover:text-blue-600 transition-colors duration-200 flex items-center justify-center"
  >
    <Calendar className="w-5 h-5 mr-2" />
    Book a Call
  </a>
</div>

        {/* Newsletter Signup */}
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 max-w-2xl mx-auto">
          <h3 className="text-2xl font-bold text-white mb-4">Stay in the Loop</h3>
          <p className="text-blue-100 mb-6">
            Get exclusive insights, behind-the-scenes content, and early access to my latest projects.
          </p>
          
          {submitStatus === 'success' && (
            <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg flex items-center justify-center">
              <CheckCircle className="w-5 h-5 text-green-600 mr-3" />
              <p className="text-green-800">Thanks for subscribing! You'll hear from me soon.</p>
            </div>
          )}

          {submitStatus === 'error' && (
            <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg flex items-center justify-center">
              <AlertCircle className="w-5 h-5 text-red-600 mr-3" />
              <p className="text-red-800">{errorMessage}</p>
            </div>
          )}
          
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
              className="flex-1 px-6 py-3 rounded-lg border-0 focus:outline-none focus:ring-2 focus:ring-blue-300 text-gray-900"
            />
            <button
              type="submit"
              disabled={isSubmitting}
              className="bg-blue-800 text-white px-8 py-3 rounded-lg font-bold hover:bg-blue-900 transition-colors duration-200 whitespace-nowrap disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? 'Subscribing...' : 'Subscribe Now'}
            </button>
          </form>
          
          <p className="text-blue-200 text-sm mt-4">
            Join 2,000+ readers. No spam, unsubscribe anytime.
          </p>
        </div>
      </div>
    </section>
  );
};
