
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const Contact = () => {
  const contactMethods = [
    {
      platform: "WhatsApp",
      handle: "+234 XXX XXX XXXX",
      link: "https://wa.me/234XXXXXXXXX",
      icon: "💬",
      color: "bg-green-500 hover:bg-green-600"
    },
    {
      platform: "Instagram",
      handle: "@blushbeauty",
      link: "https://instagram.com/blushbeauty",
      icon: "📸",
      color: "bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700"
    },
    {
      platform: "TikTok",
      handle: "@blushbeauty",
      link: "https://tiktok.com/@blushbeauty",
      icon: "🎵",
      color: "bg-black hover:bg-gray-800"
    },
    {
      platform: "Email",
      handle: "hello@blushbeauty.com",
      link: "mailto:hello@blushbeauty.com",
      icon: "✉️",
      color: "bg-pink-500 hover:bg-pink-600"
    }
  ];

  return (
    <section id="contact" className="py-20 px-4 bg-gradient-to-b from-pink-50 to-pink-100">
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

        {/* Contact Methods */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {contactMethods.map((method, index) => (
            <Card 
              key={index}
              className="overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-xl border-0 bg-white/70 backdrop-blur-sm group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6 text-center">
                <div className="text-4xl mb-4">{method.icon}</div>
                <h3 className="font-playfair text-xl font-semibold text-gray-800 mb-2">
                  {method.platform}
                </h3>
                <p className="font-inter text-gray-600 mb-4 text-sm">
                  {method.handle}
                </p>
                <Button
                  asChild
                  className={`w-full ${method.color} text-white font-inter font-semibold rounded-full transition-all duration-300`}
                >
                  <a href={method.link} target="_blank" rel="noopener noreferrer">
                    Connect
                  </a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Location & Hours */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg">
            <CardContent className="p-8">
              <h3 className="font-playfair text-2xl font-semibold text-gray-800 mb-6">
                📍 Visit Our Salon
              </h3>
              <div className="space-y-4 font-inter">
                <div>
                  <p className="text-gray-700 font-medium">Address:</p>
                  <p className="text-gray-600">123 Beauty Lane, Victoria Island</p>
                  <p className="text-gray-600">Lagos, Nigeria</p>
                </div>
                <div>
                  <p className="text-gray-700 font-medium">Phone:</p>
                  <p className="text-gray-600">+234 XXX XXX XXXX</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg">
            <CardContent className="p-8">
              <h3 className="font-playfair text-2xl font-semibold text-gray-800 mb-6">
                🕐 Opening Hours
              </h3>
              <div className="space-y-3 font-inter">
                <div className="flex justify-between">
                  <span className="text-gray-700">Monday - Friday</span>
                  <span className="text-gray-600">9:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-700">Saturday</span>
                  <span className="text-gray-600">9:00 AM - 5:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-700">Sunday</span>
                  <span className="text-pink-500">Closed</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Final CTA */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-pink-500 to-pink-600 rounded-2xl p-8 text-white">
            <h3 className="font-playfair text-3xl font-bold mb-4">
              Ready to Treat Yourself?
            </h3>
            <p className="font-inter text-pink-100 mb-6 max-w-md mx-auto">
              Book your appointment today and let us pamper you with our premium nail care services.
            </p>
            <Button 
              size="lg"
              className="bg-white text-pink-600 hover:bg-pink-50 font-inter font-semibold px-8 py-4 rounded-full transform hover:scale-105 transition-all duration-300"
            >
              Book Now - Special Offer!
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
