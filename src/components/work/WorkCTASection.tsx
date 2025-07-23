import React from 'react';
import { ArrowRight, BookOpen, Mail } from 'lucide-react';
import { Link } from "react-router-dom";


export const WorkCTASection = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-indigo-600 to-purple-700">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="mb-8">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Create Something Together?
          </h2>
          <p className="text-xl text-indigo-100 leading-relaxed max-w-2xl mx-auto">
            Hire me, read my blog, or get in touch to collaborate on your next project.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
          <Link to="/hire" className="block">
          <button className="bg-white text-indigo-600 px-8 py-4 rounded-lg font-bold hover:bg-gray-100 transition-colors duration-200 flex items-center justify-center">
            <Mail className="w-5 h-5 mr-2" />
            Hire Me
          </button>
          </Link>

          <a href="https://01abhishek.medium.com/" target="_blank" rel="noopener noreferrer"> 
          <button className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-bold hover:bg-white hover:text-indigo-600 transition-colors duration-200 flex items-center justify-center">
            <BookOpen className="w-5 h-5 mr-2" />
            Read Blog
          </button>
          </a>

          <Link to="/contact" className="block">
          <button className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-bold hover:bg-white hover:text-indigo-600 transition-colors duration-200 flex items-center justify-center">
            <ArrowRight className="w-5 h-5 mr-2" />
            Contact
          </button>
          </Link>

        </div>

        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 max-w-md mx-auto">
          <p className="text-indigo-100 text-sm">
            <strong className="text-white">Let's collaborate:</strong><br />
            Whether it's content strategy, book writing, or podcast guesting — I'm here to help bring your vision to life.
          </p>
        </div>
      </div>
    </section>
  );
};