
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const socialMedia = [
    {
      platform: "WhatsApp",
      icon: "💬",
      link: "https://wa.me/234XXXXXXXXX",
      color: "bg-green-500 hover:bg-green-600"
    },
    {
      platform: "Instagram",
      icon: "📸",
      link: "https://instagram.com/blushbeauty",
      color: "bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700"
    },
    {
      platform: "TikTok",
      icon: "🎵",
      link: "https://tiktok.com/@blushbeauty",
      color: "bg-black hover:bg-gray-800"
    },
    {
      platform: "Facebook",
      icon: "📘",
      link: "https://facebook.com/blushbeauty",
      color: "bg-blue-600 hover:bg-blue-700"
    }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission here
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  return (
    <section id="contact" className="py-20 px-4 bg-gradient-to-b from-white to-pink-50">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Get In Touch
          </h2>
          <p className="font-inter text-lg text-gray-600 max-w-2xl mx-auto">
            Ready to book your appointment or have questions? We're here to help make your beauty dreams come true.
          </p>
          <div className="h-1 w-24 bg-gradient-to-r from-pink-400 to-pink-600 mx-auto mt-6 rounded-full" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="bg-white/90 backdrop-blur-sm border-0 shadow-xl">
            <CardContent className="p-8">
              <h3 className="font-playfair text-2xl font-semibold text-gray-800 mb-6">
                Send us a Message
              </h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all duration-200"
                    placeholder="Enter your full name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all duration-200"
                    placeholder="Enter your email"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all duration-200"
                    placeholder="Enter your phone number"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all duration-200 resize-none"
                    placeholder="Tell us how we can help you..."
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full bg-gradient-to-r from-pink-500 to-pink-600 hover:from-pink-600 hover:to-pink-700 text-white font-inter font-semibold py-3 rounded-lg transition-all duration-300"
                >
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Social Media & Info */}
          <div className="space-y-8">
            {/* Social Media */}
            <Card className="bg-white/90 backdrop-blur-sm border-0 shadow-xl">
              <CardContent className="p-8">
                <h3 className="font-playfair text-2xl font-semibold text-gray-800 mb-6">
                  Follow Us
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  {socialMedia.map((social, index) => (
                    <a
                      key={index}
                      href={social.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`${social.color} text-white p-4 rounded-lg text-center transition-all duration-300 hover:scale-105 group`}
                    >
                      <div className="text-2xl mb-2 group-hover:scale-110 transition-transform duration-300">
                        {social.icon}
                      </div>
                      <p className="font-inter text-sm font-semibold">
                        {social.platform}
                      </p>
                    </a>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Contact Info */}
            <Card className="bg-white/90 backdrop-blur-sm border-0 shadow-xl">
              <CardContent className="p-8">
                <h3 className="font-playfair text-2xl font-semibold text-gray-800 mb-6">
                  Visit Our Salon
                </h3>
                <div className="space-y-4 font-inter">
                  <div className="flex items-center">
                    <div className="text-2xl mr-4">📍</div>
                    <div>
                      <p className="text-gray-700 font-medium">Address:</p>
                      <p className="text-gray-600">123 Beauty Lane, Victoria Island</p>
                      <p className="text-gray-600">Lagos, Nigeria</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <div className="text-2xl mr-4">📞</div>
                    <div>
                      <p className="text-gray-700 font-medium">Phone:</p>
                      <p className="text-gray-600">+234 XXX XXX XXXX</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <div className="text-2xl mr-4">🕐</div>
                    <div>
                      <p className="text-gray-700 font-medium">Hours:</p>
                      <p className="text-gray-600">Mon-Fri: 9AM-6PM</p>
                      <p className="text-gray-600">Sat: 9AM-5PM, Sun: Closed</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
