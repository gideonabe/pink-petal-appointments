
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div className="text-center md:text-left">
            <h3 className="font-playfair text-3xl font-bold text-pink-400 mb-4">
              Blush Beauty
            </h3>
            <p className="font-inter text-gray-300 text-sm leading-relaxed">
              Where elegance meets perfection. Experience luxury nail care that makes you feel absolutely beautiful.
            </p>
          </div>

          {/* Quick Links */}
          <div className="text-center">
            <h4 className="font-inter font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2 font-inter text-sm">
              <li><a href="#services" className="text-gray-300 hover:text-pink-400 transition-colors">Services</a></li>
              <li><a href="#contact" className="text-gray-300 hover:text-pink-400 transition-colors">Contact</a></li>
              <li><a href="#" className="text-gray-300 hover:text-pink-400 transition-colors">Book Appointment</a></li>
              <li><a href="#" className="text-gray-300 hover:text-pink-400 transition-colors">Gift Cards</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="text-center md:text-right">
            <h4 className="font-inter font-semibold text-lg mb-4">Contact Info</h4>
            <div className="space-y-2 font-inter text-sm text-gray-300">
              <p>123 Beauty Lane, Victoria Island</p>
              <p>Lagos, Nigeria</p>
              <p>+234 XXX XXX XXXX</p>
              <p>hello@blushbeauty.com</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="font-inter text-sm text-gray-400">
            © 2024 Blush Beauty. All rights reserved. Made with 💖 for beautiful nails.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
