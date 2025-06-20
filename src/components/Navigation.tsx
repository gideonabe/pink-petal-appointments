
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
    <nav className="fixed top-0 w-full z-50 bg-black/40 backdrop-blur-md shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Brand */}
          <div className="flex-shrink-0">
            {/* <h1 className="font-playfair text-3xl font-bold text-pink-600 drop-shadow-lg">
              Blush Beauty
            </h1> */}
            <h1 onClick={() => scrollToSection('hero')} className="text-4xl cursor-pointer font-playfair font-bold bg-gradient-to-r from-pink-500 via-white to-pink-500 text-transparent bg-clip-text">
              Blush Beauty
            </h1>

          </div>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <button
                onClick={() => scrollToSection('hero')}
                className="font-inter text-white/90 hover:text-white hover:bg-pink-600 hover:rounded-full px-3 py-2 text-sm font-medium transition-colors drop-shadow-sm"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection('services')}
                className="font-inter text-white/90 hover:text-white hover:bg-pink-600 rounded-full px-3 py-2 text-sm font-medium transition-colors drop-shadow-sm"
              >
                Services
              </button>
              <button
                onClick={() => scrollToSection('packages')}
                className="font-inter text-white/90 hover:text-white hover:bg-pink-600 rounded-full px-3 py-2 text-sm font-medium transition-colors drop-shadow-sm"
              >
                Packages
              </button>
              <button
                onClick={() => scrollToSection('testimonials')}
                className="font-inter text-white/90 hover:text-white hover:bg-pink-600 rounded-full px-3 py-2 text-sm font-medium transition-colors drop-shadow-sm"
              >
                Reviews
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="font-inter text-white/90 hover:text-white hover:bg-pink-600 rounded-full px-3 py-2 text-sm font-medium transition-colors drop-shadow-sm"
              >
                Contact
              </button>
              <Button
                onClick={() => scrollToSection('booking')}
                className="bg-pink-500/90 hover:bg-pink-600 text-white font-inter font-semibold px-6 py-2 rounded-full backdrop-blur-sm"
              >
                Book Now
              </Button>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:text-pink-200 p-2"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-black/60 backdrop-blur-xl shadow-2xl rounded-lg mt-2 ring-1 ring-white/10">
              <button
                onClick={() => scrollToSection('hero')}
                className="font-inter text-white hover:bg-pink-600 rounded-full block px-3 py-2 text-sm font-medium w-full text-left"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection('services')}
                className="font-inter text-white hover:bg-pink-600 rounded-full block px-3 py-2 text-sm font-medium w-full text-left"
              >
                Services
              </button>
              <button
                onClick={() => scrollToSection('packages')}
                className="font-inter text-white hover:bg-pink-600 rounded-full block px-3 py-2 text-sm font-medium w-full text-left"
              >
                Packages
              </button>
              <button
                onClick={() => scrollToSection('testimonials')}
                className="font-inter text-white hover:bg-pink-600 rounded-full block px-3 py-2 text-sm font-medium w-full text-left"
              >
                Reviews
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="font-inter text-white hover:bg-pink-600 rounded-full block px-3 py-2 text-sm font-medium w-full text-left"
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
