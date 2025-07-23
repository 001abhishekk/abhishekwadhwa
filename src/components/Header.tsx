import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, Menu, X } from 'lucide-react';

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo/Brand */}
          <div className="flex-shrink-0">
            <Link to="/" className="text-2xl font-bold text-gray-900 hover:text-blue-600 transition-colors duration-200">
              Abhishek Wadhwa
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link to="/" className={`transition-colors duration-200 ${location.pathname === '/' ? 'text-blue-600 font-medium' : 'text-gray-700 hover:text-blue-600'}`}>Home</Link>
            <Link to="/about" className={`transition-colors duration-200 ${location.pathname === '/about' ? 'text-blue-600 font-medium' : 'text-gray-700 hover:text-blue-600'}`}>About</Link>
            <Link to="/work" className={`transition-colors duration-200 ${location.pathname === '/work' ? 'text-blue-600 font-medium' : 'text-gray-700 hover:text-blue-600'}`}>My Work</Link>
            <a href="https://01abhishek.medium.com/" className="text-gray-700 hover:text-blue-600 transition-colors duration-200">Blog</a>
<Link to="/contact" className={`transition-colors duration-200 ${location.pathname === '/contact' ? 'text-blue-600 font-medium' : 'text-gray-700 hover:text-blue-600'}`}>Contact</Link>
          </nav>

          {/* Search and CTA */}
          <div className="hidden md:flex items-center space-x-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <input
                type="text"
                placeholder="Search"
                className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            <Link to="/hire" className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-200 font-medium">
              Hire Me
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-blue-600 transition-colors duration-200"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
              <Link to="/" className="block px-3 py-2 text-gray-700 hover:text-blue-600" onClick={() => setIsMenuOpen(false)}>Home</Link>
              <Link to="/about" className="block px-3 py-2 text-gray-700 hover:text-blue-600" onClick={() => setIsMenuOpen(false)}>About</Link>
              <Link to="/work" className="block px-3 py-2 text-gray-700 hover:text-blue-600" onClick={() => setIsMenuOpen(false)}>My Work</Link>
              <a 
  href="https://01abhishek.medium.com/" 
  target="_blank" 
  rel="noopener noreferrer" 
  className="block px-3 py-2 text-gray-700 hover:text-blue-600"
>
  Blog
</a>

              <Link to="/contact" className="block px-3 py-2 text-gray-700 hover:text-blue-600" onClick={() => setIsMenuOpen(false)}>Contact</Link>
              <div className="px-3 py-2">
                <Link to="/hire" className="w-full bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-200 font-medium block text-center" onClick={() => setIsMenuOpen(false)}>
                  Hire Me
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};