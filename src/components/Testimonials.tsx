
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b47c?w=150&h=150&fit=crop&crop=face",
      rating: 5,
      text: "Absolutely love this place! The staff is so professional and my nails always look perfect. The atmosphere is so relaxing and luxurious."
    },
    {
      name: "Maria Rodriguez",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
      rating: 5,
      text: "Best nail salon in the city! The attention to detail is incredible and they always exceed my expectations. Highly recommend!"
    },
    {
      name: "Emily Chen",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face",
      rating: 5,
      text: "I've been coming here for months and I'm never disappointed. The nail art is amazing and the service is top-notch every time."
    },
    {
      name: "Jessica Thompson",
      image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=150&h=150&fit=crop&crop=face",
      rating: 5,
      text: "The royal combo is my favorite! Such a relaxing experience and my nails stay beautiful for weeks. Worth every penny!"
    },
    {
      name: "Amanda Wilson",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face",
      rating: 5,
      text: "Clean, professional, and absolutely gorgeous results every time. The gel polish lasts so long and the designs are creative."
    },
    {
      name: "Lisa Brown",
      image: "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=150&h=150&fit=crop&crop=face",
      rating: 5,
      text: "Amazing experience! The staff makes you feel so pampered and the results are always flawless. My go-to nail salon!"
    }
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <span key={i} className={`text-lg ${i < rating ? 'text-yellow-400' : 'text-gray-300'}`}>
        ⭐
      </span>
    ));
  };

  return (
    <section id="testimonials" className="py-20 px-4 bg-gradient-to-b from-pink-50 to-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            What Our Clients Say
          </h2>
          <p className="font-inter text-lg text-gray-600 max-w-2xl mx-auto">
            Don't just take our word for it - hear from our happy clients who love their beautiful nails!
          </p>
          <div className="h-1 w-24 bg-gradient-to-r from-pink-400 to-pink-600 mx-auto mt-6 rounded-full" />
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index}
              className="group hover:scale-105 transition-all duration-300 hover:shadow-xl border-0 bg-white/90 backdrop-blur-sm"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6">
                {/* Stars */}
                <div className="flex justify-center mb-4">
                  {renderStars(testimonial.rating)}
                </div>

                {/* Testimonial Text */}
                <p className="font-inter text-gray-600 text-center mb-6 italic">
                  "{testimonial.text}"
                </p>

                {/* Client Info */}
                <div className="flex items-center justify-center">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <p className="font-playfair font-semibold text-gray-800">
                      {testimonial.name}
                    </p>
                    <p className="font-inter text-sm text-pink-600">
                      Verified Client
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
