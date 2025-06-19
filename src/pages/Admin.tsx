
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';

const Admin = () => {
  // Commented out for future implementation
  /*
  const [availableSlots, setAvailableSlots] = useState([
    { id: 1, date: '2024-01-15', time: '09:00', isBooked: false },
    { id: 2, date: '2024-01-15', time: '10:30', isBooked: true, customerName: 'Sarah Johnson' },
    { id: 3, date: '2024-01-16', time: '14:00', isBooked: false },
  ]);

  const [newSlot, setNewSlot] = useState({
    date: '',
    time: ''
  });

  const [bookings, setBookings] = useState([
    {
      id: 1,
      customerName: 'Sarah Johnson',
      email: 'sarah@email.com',
      phone: '+234 XXX XXX',
      package: 'Deluxe Manicure',
      date: '2024-01-15',
      time: '10:30',
      status: 'confirmed'
    },
    {
      id: 2,
      customerName: 'Maria Rodriguez',
      email: 'maria@email.com',
      phone: '+234 XXX XXX',
      package: 'Royal Combo',
      date: '2024-01-16',
      time: '14:00',
      status: 'pending'
    }
  ]);

  const addSlot = () => {
    if (newSlot.date && newSlot.time) {
      setAvailableSlots([
        ...availableSlots,
        {
          id: Date.now(),
          date: newSlot.date,
          time: newSlot.time,
          isBooked: false
        }
      ]);
      setNewSlot({ date: '', time: '' });
    }
  };

  const removeSlot = (id: number) => {
    setAvailableSlots(availableSlots.filter(slot => slot.id !== id));
  };
  */

  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50 to-white">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="font-playfair text-3xl font-bold text-gray-800">
                Blush Beauty Admin
              </h1>
              <p className="font-inter text-gray-600 mt-2">
                Manage your salon bookings and availability
              </p>
            </div>
            <Button
              onClick={() => window.location.href = '/'}
              variant="outline"
              className="font-inter"
            >
              Back to Website
            </Button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Temporary Message */}
        <Card className="mb-8 bg-white/90 backdrop-blur-sm border-0 shadow-xl">
          <CardHeader>
            <CardTitle className="font-playfair text-2xl text-center text-gray-800">
              Admin Dashboard Coming Soon!
            </CardTitle>
          </CardHeader>
          <CardContent className="p-8 text-center">
            <div className="text-6xl mb-6">⚙️</div>
            <p className="font-inter text-gray-600 mb-8">
              The admin dashboard for managing bookings and time slots is currently under development. 
              This will include features for adding available slots, viewing bookings, and managing customer appointments.
            </p>
          </CardContent>
        </Card>

        {/* Commented out admin interface for future implementation */}
        {/*
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          // Manage Available Slots
          <Card className="bg-white/90 backdrop-blur-sm border-0 shadow-xl">
            <CardHeader>
              <CardTitle className="font-playfair text-xl text-gray-800">
                Manage Available Slots
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              // Add New Slot
              <div className="space-y-4">
                <h3 className="font-inter font-semibold text-gray-700">Add New Slot</h3>
                <div className="grid grid-cols-2 gap-4">
                  <input
                    type="date"
                    value={newSlot.date}
                    onChange={(e) => setNewSlot({...newSlot, date: e.target.value})}
                    className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500"
                  />
                  <input
                    type="time"
                    value={newSlot.time}
                    onChange={(e) => setNewSlot({...newSlot, time: e.target.value})}
                    className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500"
                  />
                </div>
                <Button
                  onClick={addSlot}
                  className="bg-pink-500 hover:bg-pink-600 text-white font-inter"
                >
                  Add Slot
                </Button>
              </div>

              // Current Slots
              <div>
                <h3 className="font-inter font-semibold text-gray-700 mb-4">Current Slots</h3>
                <div className="space-y-2 max-h-60 overflow-y-auto">
                  {availableSlots.map((slot) => (
                    <div
                      key={slot.id}
                      className={`flex items-center justify-between p-3 rounded-lg ${
                        slot.isBooked ? 'bg-red-50 border border-red-200' : 'bg-green-50 border border-green-200'
                      }`}
                    >
                      <div>
                        <p className="font-inter text-sm font-medium">
                          {slot.date} at {slot.time}
                        </p>
                        {slot.isBooked && (
                          <p className="font-inter text-xs text-red-600">
                            Booked by: {slot.customerName}
                          </p>
                        )}
                      </div>
                      {!slot.isBooked && (
                        <Button
                          onClick={() => removeSlot(slot.id)}
                          size="sm"
                          variant="outline"
                          className="text-red-600 border-red-300 hover:bg-red-50"
                        >
                          Remove
                        </Button>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>

          // Current Bookings
          <Card className="bg-white/90 backdrop-blur-sm border-0 shadow-xl">
            <CardHeader>
              <CardTitle className="font-playfair text-xl text-gray-800">
                Current Bookings
              </CardTitle>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Customer</TableHead>
                    <TableHead>Package</TableHead>
                    <TableHead>Date & Time</TableHead>
                    <TableHead>Status</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {bookings.map((booking) => (
                    <TableRow key={booking.id}>
                      <TableCell>
                        <div>
                          <p className="font-inter font-medium">{booking.customerName}</p>
                          <p className="font-inter text-xs text-gray-500">{booking.email}</p>
                        </div>
                      </TableCell>
                      <TableCell className="font-inter text-sm">{booking.package}</TableCell>
                      <TableCell className="font-inter text-sm">
                        {booking.date} {booking.time}
                      </TableCell>
                      <TableCell>
                        <span className={`px-2 py-1 rounded-full text-xs font-inter ${
                          booking.status === 'confirmed' 
                            ? 'bg-green-100 text-green-800' 
                            : 'bg-yellow-100 text-yellow-800'
                        }`}>
                          {booking.status}
                        </span>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </div>
        */}

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-8">
          <Card className="bg-gradient-to-r from-pink-500 to-pink-600 text-white">
            <CardContent className="p-6 text-center">
              <div className="text-3xl font-bold mb-2">23</div>
              <p className="font-inter text-sm">Total Bookings</p>
            </CardContent>
          </Card>
          <Card className="bg-gradient-to-r from-purple-500 to-purple-600 text-white">
            <CardContent className="p-6 text-center">
              <div className="text-3xl font-bold mb-2">15</div>
              <p className="font-inter text-sm">This Week</p>
            </CardContent>
          </Card>
          <Card className="bg-gradient-to-r from-green-500 to-green-600 text-white">
            <CardContent className="p-6 text-center">
              <div className="text-3xl font-bold mb-2">45</div>
              <p className="font-inter text-sm">Available Slots</p>
            </CardContent>
          </Card>
          <Card className="bg-gradient-to-r from-blue-500 to-blue-600 text-white">
            <CardContent className="p-6 text-center">
              <div className="text-3xl font-bold mb-2">₦125K</div>
              <p className="font-inter text-sm">Monthly Revenue</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Admin;
