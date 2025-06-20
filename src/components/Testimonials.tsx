
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8ZmFjZXxlbnwwfHwwfHx8MA%3D%3D",
      rating: 5,
      text: "Absolutely love this place! The staff is so professional and my nails always look perfect. The atmosphere is so relaxing and luxurious.",
      treatment: "Royal Combo"
    },
    {
      name: "Maria Rodriguez",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face&q=80",
      rating: 5,
      text: "Best nail salon in the city! The attention to detail is incredible and they always exceed my expectations. Highly recommend!",
      treatment: "Luxury Pedicure"
    },
    {
      name: "Emily Chen",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face&q=80",
      rating: 5,
      text: "I've been coming here for months and I'm never disappointed. The nail art is amazing and the service is top-notch every time.",
      treatment: "Deluxe Manicure"
    },
    {
      name: "Jessica Thompson",
      image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=150&h=150&fit=crop&crop=face&q=80",
      rating: 5,
      text: "The royal combo is my favorite! Such a relaxing experience and my nails stay beautiful for weeks. Worth every penny!",
      treatment: "Royal Combo"
    },
    {
      name: "Amanda Wilson",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face&q=80",
      rating: 5,
      text: "Clean, professional, and absolutely gorgeous results every time. The gel polish lasts so long and the designs are creative.",
      treatment: "Essential Manicure"
    },
    {
      name: "Lisa Brown",
      image: "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=150&h=150&fit=crop&crop=face&q=80",
      rating: 5,
      text: "Amazing experience! The staff makes you feel so pampered and the results are always flawless. My go-to nail salon!",
      treatment: "Glow Combo"
    }
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <span key={i} className={`text-lg ${i < rating ? 'text-yellow-400' : 'text-gray-300'}`}>
        ★
      </span>
    ));
  };

  return (
    <section id="testimonials" className="py-20 px-4 bg-gradient-to-br from-pink-50 via-white to-pink-100">
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
              className="group hover:scale-105 transition-all duration-300 hover:shadow-2xl border-l-gray-400 border-t-0 border-r-gray-400 border-b-0 bg-white/90 backdrop-blur-sm overflow-hidden"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6 relative">
                {/* Decorative element */}
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-pink-400 to-pink-600" />
                
                {/* Stars */}
                <div className="flex justify-center mb-4">
                  {renderStars(testimonial.rating)}
                </div>

                {/* Testimonial Text */}
                <p className="font-inter text-gray-700 text-center mb-6 italic leading-relaxed">
                  "{testimonial.text}"
                </p>

                {/* Client Info */}
                <div className="flex items-center justify-center">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-14 h-14 rounded-full object-cover mr-4 border-2 border-pink-200"
                  />
                  <div className="text-center">
                    <p className="font-playfair font-semibold text-gray-800 text-lg">
                      {testimonial.name}
                    </p>
                    <p className="font-inter text-sm text-pink-600">
                      {testimonial.treatment}
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
