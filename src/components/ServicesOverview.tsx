
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

const ServicesOverview = () => {
  const services = [
    {
      // image: "https://images.unsplash.com/photo-1604654894610-df63bc536371?w=800&h=600&fit=crop&q=80",
      // image: "https://professionalnailsandspawa.com/images/specialties-03.jpg",
      image: "https://cdn.shopify.com/s/files/1/1070/6324/files/russianmani3_480x480.jpg?v=1686819346",
      title: "Professional Manicures",
      description: "Expert nail care with precision trimming, shaping, and beautiful polish application for stunning hands."
    },
    {
      // image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=800&h=600&fit=crop&q=80",
      image: "https://www.cortiva.edu/wp-content/uploads/sites/2/2024/03/aa9ce4_5fefb903c2524e90b4bff5ec37a10797mv2.webp",
      title: "Hand & Foot Massage",
      description: "Therapeutic massages that improve circulation and leave you feeling relaxed and rejuvenated."
    },
    {
      image: "https://pureluxejh.com/upload/service/luxury-pedicure-67-c6B1.jpg",
      title: "Luxury Pedicures",
      description: "Relaxing foot treatments with exfoliation, massage, and perfect polish for beautiful, healthy feet."
    },
    {
      image: "https://images.unsplash.com/photo-1519014816548-bf5fe059798b?w=800&h=600&fit=crop&q=80",
      title: "Nail Art & Design",
      description: "Creative and artistic nail designs that express your unique style and personality."
    },
    {
      // image: "https://images.unsplash.com/photo-1522338242992-e1a54906a8da?w=800&h=600&fit=crop&q=80",
      image: "https://www.fashiongonerogue.com/wp-content/uploads/2022/06/Black-Gold-French-Manicure-Gel-Polish.jpg",
      title: "Gel Polish",
      description: "Long-lasting, chip-resistant gel polish that keeps your nails looking perfect for weeks."
    },
    {
      image: "https://sochi.edu/wp-content/uploads/aromatherapy-massage.jpg",
      title: "Special Treatments",
      description: "Premium treatments including paraffin wax, aromatherapy, and moisturizing masks."
    }
  ];

  return (
    <section id="services" className="py-20 px-4 bg-gradient-to-b from-white to-pink-200">
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
              className="group hover:bg-pink-600 hover:scale-105 transition-all duration-300 hover:shadow-2xl border-0 overflow-hidden bg-white"
              style={{ animationDelay: `${index * 0.5}s` }}
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              </div>
              <CardContent className="p-6 ">
                <h3 className="font-playfair text-xl group-hover:text-white font-semibold text-gray-800 mb-3">
                  {service.title}
                </h3>
                <p className="font-inter text-gray-600 group-hover:text-white leading-relaxed">
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
