import React from 'react';
import { Mail, Calendar, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';


export const HireMeCTASection = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-700">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="mb-8">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Hire Me?
          </h2>
          <p className="text-xl text-blue-100 leading-relaxed max-w-2xl mx-auto">
            Let's discuss your project and see how we can work together to achieve your goals.
          </p>
        </div>

        {/* Contact Options */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          <a
            href="mailto:abhishekw47@gmail.com"
            className="bg-white text-blue-600 p-8 rounded-2xl hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group"
          >
            <Mail className="w-12 h-12 mx-auto mb-4 group-hover:scale-110 transition-transform duration-200" />
            <h3 className="text-2xl font-bold mb-2">Email Me</h3>
            <p className="text-blue-600 mb-4">abhishekw47@gmail.com</p>
            <p className="text-gray-600">Perfect for detailed project briefs and questions</p>
          </a>

          <div className="bg-white/10 backdrop-blur-sm text-white p-8 rounded-2xl hover:bg-white/20 transition-all duration-300 transform hover:-translate-y-2 group border border-white/20">
            <a href="https://calendly.com/abhishekwadhwa/30min" target="_blank" rel="noopener noreferrer">
            <Calendar className="w-12 h-12 mx-auto mb-4 group-hover:scale-110 transition-transform duration-200" />
            <h3 className="text-2xl font-bold mb-2">Book a Call</h3>
            <p className="text-blue-100 mb-4">30-minute intro call</p>
            <p className="text-blue-100">Quick discussion about your project needs</p>
          </a></div>
        </div>

        {/* Primary CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
          <Link
            to="/start-project"
            className="bg-white text-blue-600 px-8 py-4 rounded-lg font-bold hover:bg-gray-100 transition-colors duration-200 flex items-center justify-center"
          >
            <ArrowRight className="w-5 h-5 mr-2" />
            Start Your Project
          </Link>

          <a href="https://calendly.com/abhishekwadhwa/30min" target="_blank" rel="noopener noreferrer">
          <button className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-bold hover:bg-white hover:text-blue-600 transition-colors duration-200 flex items-center justify-center">
            <Calendar className="w-5 h-5 mr-2" />
            Book 30-min Intro Call
          </button></a>
        </div>

        {/* Response Time Guarantee */}
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 max-w-2xl mx-auto">
          <p className="text-blue-100 text-sm">
            <strong className="text-white">Response Guarantee:</strong><br />
            I respond to all project inquiries within 24 hours. Usually much sooner.
          </p>
        </div>
      </div>
    </section>
  );
};