
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { MessageCircle, Instagram, Send, Phone } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission here
  };

  const socialLinks = [
    {
      name: 'WhatsApp',
      icon: MessageCircle,
      href: 'https://wa.me/2348123456789',
      color: 'bg-green-500 hover:bg-green-600',
      description: 'Chat with us instantly'
    },
    {
      name: 'Instagram',
      icon: Instagram,
      href: 'https://instagram.com/blushbeauty',
      color: 'bg-pink-500 hover:bg-pink-600',
      description: 'Follow our latest work'
    },
    {
      name: 'TikTok',
      icon: Send,
      href: 'https://tiktok.com/@blushbeauty',
      color: 'bg-black hover:bg-gray-800',
      description: 'Watch nail art tutorials'
    },
    {
      name: 'Call Us',
      icon: Phone,
      href: 'tel:+2348123456789',
      color: 'bg-blue-500 hover:bg-blue-600',
      description: 'Speak with our team'
    }
  ];

  return (
    <section id="contact" className="py-20 px-4 bg-gradient-to-br from-white via-pink-50 to-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Visit Our Salon
          </h2>
          <p className="font-inter text-lg text-gray-600 max-w-2xl mx-auto">
            Ready to treat yourself? Get in touch with us or visit our beautiful salon for the ultimate nail care experience.
          </p>
          <div className="h-1 w-24 bg-gradient-to-r from-pink-400 to-pink-600 mx-auto mt-6 rounded-full" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Contact Form */}
          <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-xl">
            <CardHeader>
              <CardTitle className="font-playfair text-2xl text-gray-800 text-center">
                Send Us a Message
              </CardTitle>
              <p className="font-inter text-gray-600 text-center">
                Fill out the form below and we'll get back to you soon
              </p>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Your Name
                    </label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Enter your full name"
                      className="w-full"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number
                    </label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="Your phone number"
                      className="w-full"
                      required
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="your@email.com"
                    className="w-full"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Tell us about your preferred service or any questions you have..."
                    className="w-full min-h-[120px]"
                    required
                  />
                </div>
                
                <Button
                  type="submit"
                  className="w-full bg-gradient-to-r from-pink-500 to-pink-600 hover:from-pink-600 hover:to-pink-700 text-white font-inter font-semibold py-3 rounded-full transition-all duration-300"
                >
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Salon Info & Social Links */}
          <div className="space-y-8">
            {/* Salon Image */}
            <div className="relative overflow-hidden rounded-2xl shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=800&h=600&fit=crop&q=80"
                alt="Blush Beauty Salon Interior"
                className="w-full h-64 md:h-80 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              <div className="absolute bottom-6 left-6 text-white">
                <h3 className="font-playfair text-2xl font-bold mb-2">Our Beautiful Salon</h3>
                <p className="font-inter text-pink-200">Where luxury meets comfort</p>
              </div>
            </div>

            {/* Social Media Links */}
            <div>
              <h3 className="font-playfair text-2xl font-bold text-gray-800 mb-6 text-center">
                Connect With Us
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${social.color} text-white p-4 rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-lg group`}
                  >
                    <div className="flex items-center space-x-3">
                      <social.icon size={24} className="flex-shrink-0" />
                      <div>
                        <p className="font-inter font-semibold">{social.name}</p>
                        <p className="text-xs opacity-90">{social.description}</p>
                      </div>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Location Info */}
            <Card className="bg-gradient-to-br from-pink-50 to-white border-0 shadow-lg">
              <CardContent className="p-6">
                <h3 className="font-playfair text-xl font-bold text-gray-800 mb-4">Visit Us</h3>
                <div className="space-y-3 text-gray-600">
                  <p className="font-inter">📍 123 Beauty Street, Lagos, Nigeria</p>
                  <p className="font-inter">⏰ Mon - Sat: 9:00 AM - 7:00 PM</p>
                  <p className="font-inter">📞 +234 812 345 6789</p>
                  <p className="font-inter">✉️ hello@blushbeauty.com</p>
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
