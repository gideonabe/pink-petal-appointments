
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

const ServicesOverview = () => {
  const services = [
    {
      icon: "💅",
      title: "Professional Manicures",
      description: "Expert nail care with precision trimming, shaping, and beautiful polish application for stunning hands."
    },
    {
      icon: "🦶",
      title: "Luxury Pedicures",
      description: "Relaxing foot treatments with exfoliation, massage, and perfect polish for beautiful, healthy feet."
    },
    {
      icon: "🎨",
      title: "Nail Art & Design",
      description: "Creative and artistic nail designs that express your unique style and personality."
    },
    {
      icon: "✨",
      title: "Gel Polish",
      description: "Long-lasting, chip-resistant gel polish that keeps your nails looking perfect for weeks."
    },
    {
      icon: "💆‍♀️",
      title: "Hand & Foot Massage",
      description: "Therapeutic massages that improve circulation and leave you feeling relaxed and rejuvenated."
    },
    {
      icon: "🌸",
      title: "Special Treatments",
      description: "Premium treatments including paraffin wax, aromatherapy, and moisturizing masks."
    }
  ];

  return (
    <section id="services" className="py-20 px-4 bg-gradient-to-b from-white to-pink-50">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Our Services
          </h2>
          <p className="font-inter text-lg text-gray-600 max-w-2xl mx-auto">
            Discover our comprehensive range of professional nail care services designed to make you look and feel amazing.
          </p>
          <div className="h-1 w-24 bg-gradient-to-r from-pink-400 to-pink-600 mx-auto mt-6 rounded-full" />
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index}
              className="group hover:scale-105 transition-all duration-300 hover:shadow-xl border-0 bg-white/80 backdrop-blur-sm"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-8 text-center">
                <div className="text-5xl mb-6 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <h3 className="font-playfair text-xl font-semibold text-gray-800 mb-4">
                  {service.title}
                </h3>
                <p className="font-inter text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesOverview;
