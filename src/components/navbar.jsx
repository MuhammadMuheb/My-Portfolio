'use client';
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Scroll effect for header
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      setIsMenuOpen(false); // optional: close menu on scroll
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white bg-opacity-98 shadow-md' : 'bg-white bg-opacity-95 shadow-sm'
      }`}
    >
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <a href="#" className="text-2xl font-bold text-gray-800 font-['Poppins']">
          M. Muheb Riaz
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          {['home', 'about', 'services', 'contact'].map((item) => (
            <a
              key={item}
              href={`#${item}`}
              className="nav-link text-gray-700 hover:text-blue-600 font-medium capitalize"
            >
              {item}
            </a>
          ))}
        </nav>

        {/* Mobile Toggle Button */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-gray-700 focus:outline-none"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg absolute w-full">
          <div className="container mx-auto px-4 py-3 flex flex-col space-y-3">
            {['home', 'about', 'services', 'contact'].map((item) => (
              <a
                key={item}
                href={`#${item}`}
                onClick={handleLinkClick}
                className="text-gray-700 hover:text-blue-600 font-medium py-2 capitalize"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
