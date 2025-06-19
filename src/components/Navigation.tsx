
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 w-full z-50 bg-white/95 backdrop-blur-md shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Brand */}
          <div className="flex-shrink-0">
            <h1 className="font-playfair text-2xl font-bold text-pink-600">
              Blush Beauty
            </h1>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <button
                onClick={() => scrollToSection('hero')}
                className="font-inter text-gray-700 hover:text-pink-600 px-3 py-2 text-sm font-medium transition-colors"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection('services')}
                className="font-inter text-gray-700 hover:text-pink-600 px-3 py-2 text-sm font-medium transition-colors"
              >
                Services
              </button>
              <button
                onClick={() => scrollToSection('packages')}
                className="font-inter text-gray-700 hover:text-pink-600 px-3 py-2 text-sm font-medium transition-colors"
              >
                Packages
              </button>
              <button
                onClick={() => scrollToSection('testimonials')}
                className="font-inter text-gray-700 hover:text-pink-600 px-3 py-2 text-sm font-medium transition-colors"
              >
                Reviews
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="font-inter text-gray-700 hover:text-pink-600 px-3 py-2 text-sm font-medium transition-colors"
              >
                Contact
              </button>
              <Button
                onClick={() => scrollToSection('booking')}
                className="bg-pink-500 hover:bg-pink-600 text-white font-inter font-semibold px-6 py-2 rounded-full"
              >
                Book Now
              </Button>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-pink-600 p-2"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white shadow-lg rounded-lg mt-2">
              <button
                onClick={() => scrollToSection('hero')}
                className="font-inter text-gray-700 hover:text-pink-600 block px-3 py-2 text-sm font-medium w-full text-left"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection('services')}
                className="font-inter text-gray-700 hover:text-pink-600 block px-3 py-2 text-sm font-medium w-full text-left"
              >
                Services
              </button>
              <button
                onClick={() => scrollToSection('packages')}
                className="font-inter text-gray-700 hover:text-pink-600 block px-3 py-2 text-sm font-medium w-full text-left"
              >
                Packages
              </button>
              <button
                onClick={() => scrollToSection('testimonials')}
                className="font-inter text-gray-700 hover:text-pink-600 block px-3 py-2 text-sm font-medium w-full text-left"
              >
                Reviews
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="font-inter text-gray-700 hover:text-pink-600 block px-3 py-2 text-sm font-medium w-full text-left"
              >
                Contact
              </button>
              <Button
                onClick={() => scrollToSection('booking')}
                className="bg-pink-500 hover:bg-pink-600 text-white font-inter font-semibold px-6 py-2 rounded-full w-full mt-2"
              >
                Book Now
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
