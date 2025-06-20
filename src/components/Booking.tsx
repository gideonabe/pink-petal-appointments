import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { toast, ToastContainer } from 'react-toastify';

const Booking = () => {
  const [selectedPackage, setSelectedPackage] = useState('');
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [bookedSlots, setBookedSlots] = useState({});
  const [customerInfo, setCustomerInfo] = useState({ name: '', email: '', phone: '' });

  const packages = [
    { id: 'essential-manicure', name: 'Essential Manicure', price: '₦3,000' },
    { id: 'deluxe-manicure', name: 'Deluxe Manicure', price: '₦5,000' },
    { id: 'essential-pedicure', name: 'Essential Pedicure', price: '₦4,000' },
    { id: 'luxury-pedicure', name: 'Luxury Pedicure', price: '₦6,500' },
    { id: 'glow-combo', name: 'Glow Combo', price: '₦7,500' },
    { id: 'royal-combo', name: 'Royal Combo', price: '₦11,000' }
  ];

  // Predefined available time slots (from 9:00 to 5:00pm, every 1 hour)
  const timeSlots = [
    '09:00', '10:00', '11:00',
    '12:00', '13:00', '14:00',
    '15:00', '16:00'
  ];

  useEffect(() => {
    const fetchSlots = async () => {
      try {
        const res = await fetch('https://script.google.com/macros/s/AKfycbyGRG5Tl5_wEt4vtCEA_ndmazTSTxHN5yb0hVJfGdwACNe0Dr4JF1gNwPTK7myKIy8PGg/exec');
        const data = await res.json();

        const grouped = {};
        data.slots.forEach(slot => {
          if (!grouped[slot.date]) grouped[slot.date] = [];
          if (slot.isBooked === true || slot.isBooked === 'TRUE') {
            grouped[slot.date].push(slot.time);
          }
        });

        setBookedSlots(grouped); // now only contains booked times per admin-set date
      } catch (err) {
        console.error('Failed to load slots:', err);
      }
    };

    fetchSlots();
  }, []);

  const handleBooking = async (e) => {
    e.preventDefault();

    const payload = {
      name: customerInfo.name,
      email: customerInfo.email,
      phone: customerInfo.phone,
      package: selectedPackage,
      date: selectedDate,
      time: selectedTime,
    };

    const query = new URLSearchParams(payload).toString();

    try {
      const response = await fetch(`https://script.google.com/macros/s/AKfycbyGRG5Tl5_wEt4vtCEA_ndmazTSTxHN5yb0hVJfGdwACNe0Dr4JF1gNwPTK7myKIy8PGg/exec?${query}`);

      if (response.ok) {
        toast.success('Booking submitted successfully!', {
          className: 'bg-white text-pink-600 border border-pink-300 shadow-md',
        });

        // Reset
        setCustomerInfo({ name: '', email: '', phone: '' });
        setSelectedPackage('');
        setSelectedDate('');
        setSelectedTime('');
      } else {
        toast.error('Booking failed. Try again.');
      }
    } catch (err) {
      toast.error('Network error!');
    }
  };

  const slotDates = Object.keys(bookedSlots); // only show admin-set dates

  return (
    <section id='booking' className="py-20 px-4 bg-gradient-to-b from-pink-50 to-white">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-4xl font-bold text-gray-800">Book Your Appointment</h2>
          <p className="font-inter text-lg text-gray-600 mt-4">Choose package, date, and time to book.</p>
          <div className="h-1 w-24 bg-gradient-to-r from-pink-400 to-pink-600 mx-auto mt-6 rounded-full" />
        </div>

        <Card className="bg-white/90 backdrop-blur-sm border-0 shadow-xl">
          <CardContent className="p-8">
            <form onSubmit={handleBooking} className="space-y-10">
              {/* Step 1 - Packages */}
              <div>
                <h3 className="font-playfair text-xl font-semibold mb-4">1. Choose Package</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {packages.map((pkg) => (
                    <div
                      key={pkg.id}
                      onClick={() => setSelectedPackage(pkg.id)}
                      className={`p-4 border-2 rounded-lg cursor-pointer ${
                        selectedPackage === pkg.id ? 'border-pink-500 bg-pink-50' : 'border-gray-200'
                      }`}
                    >
                      <h4 className="font-inter font-semibold text-gray-800">{pkg.name}</h4>
                      <p className="text-pink-600 font-bold">{pkg.price}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Step 2 - Date */}
              <div>
                <h3 className="font-playfair text-xl font-semibold mb-4">2. Select Date</h3>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {slotDates.map(date => (
                    <div
                      key={date}
                      onClick={() => setSelectedDate(date)}
                      className={`p-4 border-2 rounded-lg text-center cursor-pointer ${
                        selectedDate === date ? 'border-pink-500 bg-pink-50' : 'border-gray-200'
                      }`}
                    >
                      <p className="font-inter font-semibold">{new Date(date).toLocaleDateString('en-GB')}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Step 3 - Time */}
              {selectedDate && (
                <div>
                  <h3 className="font-playfair text-xl font-semibold mb-4">3. Select Time</h3>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {timeSlots.map((time) => {
                      const isBooked = bookedSlots[selectedDate]?.includes(time);
                      return (
                        <div
                          key={time}
                          onClick={() => !isBooked && setSelectedTime(time)}
                          className={`p-3 border-2 rounded-lg text-center cursor-pointer ${
                            selectedTime === time ? 'border-pink-500 bg-pink-50' :
                            isBooked ? 'border-gray-200 bg-gray-100 text-gray-400 cursor-not-allowed' : 'border-gray-200'
                          }`}
                        >
                          <p className="font-inter font-semibold">{time}</p>
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* Step 4 - Customer Info */}
              <div>
                <h3 className="font-playfair text-xl font-semibold mb-4">4. Your Information</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="Full Name"
                    value={customerInfo.name}
                    onChange={(e) => setCustomerInfo({ ...customerInfo, name: e.target.value })}
                    required
                    className="px-4 py-3 border border-gray-300 rounded-lg"
                  />
                  <input
                    type="email"
                    placeholder="Email"
                    value={customerInfo.email}
                    onChange={(e) => setCustomerInfo({ ...customerInfo, email: e.target.value })}
                    required
                    className="px-4 py-3 border border-gray-300 rounded-lg"
                  />
                  <input
                    type="tel"
                    placeholder="Phone Number"
                    value={customerInfo.phone}
                    onChange={(e) => setCustomerInfo({ ...customerInfo, phone: e.target.value })}
                    required
                    className="px-4 py-3 border border-gray-300 rounded-lg"
                  />
                </div>
              </div>

              {/* Submit */}
              <Button
                type="submit"
                disabled={!selectedPackage || !selectedDate || !selectedTime}
                className="w-full bg-pink-500 hover:bg-pink-600 text-white text-lg font-inter font-semibold py-4 rounded-lg"
              >
                Confirm Booking
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>

      <ToastContainer position="top-right" autoClose={4000} />
    </section>
  );
};

export default Booking;
