
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const Booking = () => {
  // Commented out for future use
  /*
  const [selectedPackage, setSelectedPackage] = useState('');
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [customerInfo, setCustomerInfo] = useState({
    name: '',
    email: '',
    phone: ''
  });

  const packages = [
    { id: 'essential-manicure', name: 'Essential Manicure', price: '₦3,000' },
    { id: 'deluxe-manicure', name: 'Deluxe Manicure', price: '₦5,000' },
    { id: 'essential-pedicure', name: 'Essential Pedicure', price: '₦4,000' },
    { id: 'luxury-pedicure', name: 'Luxury Pedicure', price: '₦6,500' },
    { id: 'glow-combo', name: 'Glow Combo', price: '₦7,500' },
    { id: 'royal-combo', name: 'Royal Combo', price: '₦11,000' }
  ];

  // Mock available slots - would come from admin settings
  const availableSlots = {
    '2024-01-15': ['09:00', '10:30', '14:00', '15:30'],
    '2024-01-16': ['09:00', '11:00', '13:30', '16:00'],
    '2024-01-17': ['10:00', '11:30', '14:30', '16:30']
  };

  const handleBooking = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Booking submitted:', {
      package: selectedPackage,
      date: selectedDate,
      time: selectedTime,
      customer: customerInfo
    });
    alert('Booking request submitted! We will confirm your appointment soon.');
  };
  */

  return (
    <section id="booking" className="py-20 px-4 bg-gradient-to-b from-pink-50 to-white">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Book Your Appointment
          </h2>
          <p className="font-inter text-lg text-gray-600 max-w-2xl mx-auto">
            Choose your preferred package, date, and time to book your perfect nail care experience.
          </p>
          <div className="h-1 w-24 bg-gradient-to-r from-pink-400 to-pink-600 mx-auto mt-6 rounded-full" />
        </div>

        <Card className="bg-white/90 backdrop-blur-sm border-0 shadow-xl">
          <CardHeader>
            <CardTitle className="font-playfair text-2xl text-center text-gray-800">
              Online Booking Coming Soon!
            </CardTitle>
          </CardHeader>
          <CardContent className="p-8 text-center">
            <div className="text-6xl mb-6">🚧</div>
            <p className="font-inter text-gray-600 mb-8">
              We're working on our online booking system to make scheduling your appointments even easier. 
              In the meantime, please contact us directly to book your appointment.
            </p>
            <div className="space-y-4">
              <Button
                onClick={() => window.open('https://wa.me/234XXXXXXXXX', '_blank')}
                className="bg-green-500 hover:bg-green-600 text-white font-inter font-semibold px-8 py-3 rounded-full mr-4"
              >
                Book via WhatsApp
              </Button>
              <Button
                onClick={() => window.location.href = 'tel:+234XXXXXXXXX'}
                className="bg-pink-500 hover:bg-pink-600 text-white font-inter font-semibold px-8 py-3 rounded-full"
              >
                Call to Book
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Commented out booking form for future implementation */}
        {/*
        <Card className="bg-white/90 backdrop-blur-sm border-0 shadow-xl">
          <CardContent className="p-8">
            <form onSubmit={handleBooking} className="space-y-8">
              // Step 1: Choose Package
              <div>
                <h3 className="font-playfair text-xl font-semibold text-gray-800 mb-4">
                  1. Choose Your Package
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {packages.map((pkg) => (
                    <div
                      key={pkg.id}
                      onClick={() => setSelectedPackage(pkg.id)}
                      className={`p-4 border-2 rounded-lg cursor-pointer transition-all duration-200 ${
                        selectedPackage === pkg.id
                          ? 'border-pink-500 bg-pink-50'
                          : 'border-gray-200 hover:border-pink-300'
                      }`}
                    >
                      <h4 className="font-inter font-semibold text-gray-800">{pkg.name}</h4>
                      <p className="text-pink-600 font-bold">{pkg.price}</p>
                    </div>
                  ))}
                </div>
              </div>

              // Step 2: Choose Date
              <div>
                <h3 className="font-playfair text-xl font-semibold text-gray-800 mb-4">
                  2. Select Date
                </h3>
                <div className="grid grid-cols-3 gap-4">
                  {Object.keys(availableSlots).map((date) => (
                    <div
                      key={date}
                      onClick={() => setSelectedDate(date)}
                      className={`p-4 text-center border-2 rounded-lg cursor-pointer transition-all duration-200 ${
                        selectedDate === date
                          ? 'border-pink-500 bg-pink-50'
                          : 'border-gray-200 hover:border-pink-300'
                      }`}
                    >
                      <p className="font-inter font-semibold text-gray-800">
                        {new Date(date).toLocaleDateString()}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              // Step 3: Choose Time
              {selectedDate && (
                <div>
                  <h3 className="font-playfair text-xl font-semibold text-gray-800 mb-4">
                    3. Select Time
                  </h3>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {availableSlots[selectedDate]?.map((time) => (
                      <div
                        key={time}
                        onClick={() => setSelectedTime(time)}
                        className={`p-3 text-center border-2 rounded-lg cursor-pointer transition-all duration-200 ${
                          selectedTime === time
                            ? 'border-pink-500 bg-pink-50'
                            : 'border-gray-200 hover:border-pink-300'
                        }`}
                      >
                        <p className="font-inter font-semibold text-gray-800">{time}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              // Step 4: Customer Information
              <div>
                <h3 className="font-playfair text-xl font-semibold text-gray-800 mb-4">
                  4. Your Information
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="Full Name"
                    value={customerInfo.name}
                    onChange={(e) => setCustomerInfo({...customerInfo, name: e.target.value})}
                    className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500"
                    required
                  />
                  <input
                    type="email"
                    placeholder="Email Address"
                    value={customerInfo.email}
                    onChange={(e) => setCustomerInfo({...customerInfo, email: e.target.value})}
                    className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500"
                    required
                  />
                  <input
                    type="tel"
                    placeholder="Phone Number"
                    value={customerInfo.phone}
                    onChange={(e) => setCustomerInfo({...customerInfo, phone: e.target.value})}
                    className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500"
                    required
                  />
                </div>
              </div>

              <Button
                type="submit"
                disabled={!selectedPackage || !selectedDate || !selectedTime}
                className="w-full bg-gradient-to-r from-pink-500 to-pink-600 hover:from-pink-600 hover:to-pink-700 text-white font-inter font-semibold py-4 text-lg rounded-lg transition-all duration-300 disabled:opacity-50"
              >
                Confirm Booking
              </Button>
            </form>
          </CardContent>
        </Card>
        */}
      </div>
    </section>
  );
};

export default Booking;
