
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const Services = () => {
  const packages = [
    {
      category: "Manicure",
      name: "Essential Manicure",
      price: "₦3,000",
      features: ["Nail trimming & shaping", "Cuticle care", "Polish (basic colors)"],
      popular: false,
      gradient: "from-pink-100 to-pink-50"
    },
    {
      category: "Manicure",
      name: "Deluxe Manicure",
      price: "₦5,000",
      features: ["Everything in Essential", "Hand massage", "Gel polish or nail art options"],
      popular: true,
      gradient: "from-pink-200 to-pink-100"
    },
    {
      category: "Pedicure",
      name: "Essential Pedicure",
      price: "₦4,000",
      features: ["Foot soak & exfoliation", "Cuticle and nail grooming", "Polish (basic colors)"],
      popular: false,
      gradient: "from-pink-100 to-pink-50"
    },
    {
      category: "Pedicure",
      name: "Luxury Pedicure",
      price: "₦6,500",
      features: ["Everything in Essential", "Foot mask + massage", "Gel polish or French tips"],
      popular: true,
      gradient: "from-pink-200 to-pink-100"
    },
    {
      category: "Combo",
      name: "Glow Combo",
      price: "₦7,500",
      features: ["Essential Manicure + Pedicure", "Basic polish", "Quick massage"],
      popular: false,
      gradient: "from-pink-300 to-pink-200"
    },
    {
      category: "Combo",
      name: "Royal Combo",
      price: "₦11,000",
      features: ["Deluxe Manicure + Luxury Pedicure", "Gel polish or nail art", "Extended massage + aromatherapy soak"],
      popular: true,
      gradient: "from-pink-400 to-pink-300"
    }
  ];

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "Manicure":
        return "🖐️";
      case "Pedicure":
        return "🦶";
      case "Combo":
        return "💖";
      default:
        return "💅";
    }
  };

  return (
    <section id="services" className="py-20 px-4 bg-gradient-to-b from-white to-pink-50">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Our Services
          </h2>
          <p className="font-inter text-lg text-gray-600 max-w-2xl mx-auto">
            Choose from our carefully curated packages designed to make you feel pampered and beautiful.
          </p>
          <div className="h-1 w-24 bg-gradient-to-r from-pink-400 to-pink-600 mx-auto mt-6 rounded-full" />
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {packages.map((pkg, index) => (
            <Card 
              key={index}
              className={`relative overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-xl border-0 bg-gradient-to-br ${pkg.gradient} group`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {pkg.popular && (
                <div className="absolute top-4 right-4 bg-pink-500 text-white text-xs font-semibold px-3 py-1 rounded-full">
                  Popular
                </div>
              )}
              
              <CardHeader className="text-center pb-4">
                <div className="text-4xl mb-2">{getCategoryIcon(pkg.category)}</div>
                <CardTitle className="font-playfair text-2xl text-gray-800 mb-2">
                  {pkg.name}
                </CardTitle>
                <CardDescription className="text-sm text-gray-600 font-medium">
                  {pkg.category} Package
                </CardDescription>
                <div className="text-3xl font-bold text-pink-600 mt-4">
                  {pkg.price}
                </div>
              </CardHeader>

              <CardContent className="pt-0">
                <ul className="space-y-3 mb-6">
                  {pkg.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-700">
                      <div className="w-2 h-2 bg-pink-400 rounded-full mr-3 flex-shrink-0" />
                      <span className="font-inter text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button 
                  className="w-full bg-pink-500 hover:bg-pink-600 text-white font-inter font-semibold rounded-full transition-all duration-300 group-hover:bg-pink-600"
                  size="lg"
                >
                  Book This Package
                </Button>
              </CardContent>
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
            Get Consultation
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;
