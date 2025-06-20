
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const Services = () => {

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    el?.scrollIntoView({ behavior: 'smooth' });
  };


  const packages = [
    {
      category: "Manicure",
      name: "Essential Manicure",
      price: "₦3,000",
      features: ["Nail trimming & shaping", "Cuticle care", "Polish (basic colors)"],
      popular: false,
      // image: "https://images.unsplash.com/photo-1604654894610-df63bc536371?w=600&h=400&fit=crop&q=80"
      image: "https://i.pinimg.com/564x/24/51/e7/2451e7db7ffdd114148505937c4ad98a.jpg"
    },
    {
      category: "Manicure",
      name: "Deluxe Manicure",
      price: "₦5,000",
      features: ["Everything in Essential", "Hand massage", "Gel polish or nail art options"],
      popular: true,
      // image: "https://images.unsplash.com/photo-1583394838336-acd977736f90?w=600&h=400&fit=crop&q=80"
      image: "https://nailzinbloom.com/wp-content/uploads/2024/08/image-170.png"
    },
    {
      category: "Pedicure",
      name: "Essential Pedicure",
      price: "₦4,000",
      features: ["Foot soak & exfoliation", "Cuticle and nail grooming", "Polish (basic colors)"],
      popular: false,
      image: "https://www.auradayspa.co.uk/media/uploads/org/feetpic.jpg"
    },
    {
      category: "Pedicure",
      name: "Luxury Pedicure",
      price: "₦6,500",
      features: ["Everything in Essential", "Foot mask + massage", "Gel polish or French tips"],
      popular: true,
      image: "https://www.hillarysnails.com.au/cdn/shop/files/shutterstock_442392106_2048x2048-COMPRESSED.png?v=1691307973&width=1946"
    },
    {
      category: "Combo",
      name: "Glow Combo",
      price: "₦7,500",
      features: ["Essential Manicure + Pedicure", "Basic polish", "Quick massage"],
      popular: false,
      image: "https://essentialsmassageofbaymeadows.com/wp-content/uploads/2020/04/deluxemanipedi11-scaled.jpeg"
    },
    {
      category: "Combo",
      name: "Royal Combo",
      price: "₦11,000",
      features: ["Deluxe Manicure + Luxury Pedicure", "Gel polish or nail art", "Extended massage + aromatherapy soak"],
      popular: true,
      // image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=400&fit=crop&q=80"
      image: "https://tiffanynailsandspa.ca/wp-content/uploads/2013/03/manicure-992x1024.jpg"
    }
  ];

  return (
    <section id="packages" className="py-20 px-4 bg-gradient-to-b from-pink-50 to-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Available Packages
          </h2>
          <p className="font-inter text-lg text-gray-600 max-w-2xl mx-auto">
            Choose from our carefully curated packages designed to make you feel pampered and beautiful.
          </p>
          <div className="h-1 w-24 bg-gradient-to-r from-pink-400 to-pink-600 mx-auto mt-6 rounded-full" />
        </div>

        {/* Packages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {packages.map((pkg, index) => (
            <Card 
              key={index}
              className="relative overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl border-0 bg-white group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {pkg.popular && (
                <div className="absolute top-4 right-4 bg-pink-500 text-white text-xs font-semibold px-3 py-1 rounded-full z-10">
                  Popular
                </div>
              )}
              
              {/* Background Image */}
              <div className="absolute inset-0">
                <img
                  src={pkg.image}
                  alt={pkg.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-black/30" />
              </div>

              {/* Content */}
              <div className="relative z-10 p-6 h-full flex flex-col text-white">
                <CardHeader className="text-center pb-4 px-0">
                  <CardDescription className="text-pink-200 text-sm font-medium mb-2">
                    {pkg.category} Package
                  </CardDescription>
                  <CardTitle className="font-playfair text-2xl text-white mb-4">
                    {pkg.name}
                  </CardTitle>
                  <div className="text-3xl font-bold text-pink-300">
                    {pkg.price}
                  </div>
                </CardHeader>

                <CardContent className="pt-0 px-0 flex-grow">
                  <ul className="space-y-3 mb-6">
                    {pkg.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-white/90">
                        <div className="w-2 h-2 bg-pink-400 rounded-full mr-3 flex-shrink-0" />
                        <span className="font-inter text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Button 
                    onClick={() => scrollToSection('booking')}
                    className="w-full bg-pink-500 hover:bg-pink-600 text-white font-inter font-semibold rounded-full transition-all duration-300 border-2 border-pink-400 hover:border-pink-300"
                    size="lg"
                  >
                    Book This Package
                  </Button>
                </CardContent>
              </div>
            </Card>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="font-inter text-gray-600 mb-6">
            Not sure which package is right for you? Let our experts help you choose!
          </p>
          <Button 
            variant="outline"
            className="border-pink-300 text-pink-600 hover:bg-pink-50 font-inter font-semibold px-8 py-3 rounded-full"
          >
            <a href="https://wa.me/+2347053474611">Get Consultation</a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;
