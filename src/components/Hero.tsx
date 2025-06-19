
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  const [currentImage, setCurrentImage] = useState(0);
  
  const backgroundImages = [
    'https://images.unsplash.com/photo-1604654894610-df63bc536371?w=1920&h=1080&fit=crop&q=80',
    'https://images.unsplash.com/photo-1583394838336-acd977736f90?w=1920&h=1080&fit=crop&q=80',
    'https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?w=1920&h=1080&fit=crop&q=80',
    'https://images.unsplash.com/photo-1522338242992-e1a54906a8da?w=1920&h=1080&fit=crop&q=80',
    'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=1920&h=1080&fit=crop&q=80'
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % backgroundImages.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const scrollToBooking = () => {
    const element = document.getElementById('booking');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="relative h-screen overflow-hidden">
      {/* Background Image Slider */}
      <div className="absolute inset-0">
        {backgroundImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentImage ? 'opacity-100' : 'opacity-0'
            }`}
            style={{
              backgroundImage: `url(${image})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          />
        ))}
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4 pt-16">
        <div className="animate-fade-in">
          {/* Logo */}
          <div className="mb-8">
            <h1 className="font-playfair text-6xl md:text-8xl font-bold text-white mb-4">
              Blush Beauty
            </h1>
            <div className="h-1 w-24 bg-gradient-to-r from-pink-400 to-pink-600 mx-auto rounded-full" />
          </div>

          {/* Tagline */}
          <p className="font-inter text-xl md:text-2xl text-pink-100 mb-8 max-w-3xl leading-relaxed">
            Where elegance meets perfection. Experience luxury nail care that makes you feel absolutely beautiful and confident.
          </p>

          {/* CTA Button */}
          <Button 
            onClick={scrollToBooking}
            size="lg"
            className="bg-gradient-to-r from-pink-500 to-pink-600 hover:from-pink-600 hover:to-pink-700 text-white font-inter font-semibold px-8 py-4 text-lg rounded-full transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-pink-500/25"
          >
            Book Your Appointment
          </Button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
