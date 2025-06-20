import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';

const Admin = () => {
  const [availableSlots, setAvailableSlots] = useState([]);
  const [bookings, setBookings] = useState([]);
  const [newSlotDate, setNewSlotDate] = useState('');

  const API_URL = 'https://script.google.com/macros/s/AKfycbyGRG5Tl5_wEt4vtCEA_ndmazTSTxHN5yb0hVJfGdwACNe0Dr4JF1gNwPTK7myKIy8PGg/exec';

  const fetchAdminData = async () => {
    try {
      const res = await fetch(API_URL);
      const data = await res.json();

      const formattedBookings = data.bookings.map((b, i) => ({
        id: i + 1,
        customerName: b.name,
        email: b.email,
        phone: b.phone,
        package: b.package,
        date: formatDate(b.date),
        rawDate: b.date,
        time: b.time,
        status: 'confirmed'
      }));

      const formattedSlots = data.slots.map((s, i) => ({
        id: i + 1,
        date: s.date,
        time: s.time,
        isBooked: s.isBooked === 'TRUE' || s.isBooked === true
      }));

      setBookings(formattedBookings);
      setAvailableSlots(formattedSlots);
    } catch (err) {
      console.error("Failed to load admin data:", err);
    }
  };

  useEffect(() => {
    fetchAdminData();
    const interval = setInterval(fetchAdminData, 5000);
    return () => clearInterval(interval);
  }, []);

  const addSlot = async () => {
    if (newSlotDate) {
      try {
        const url = `${API_URL}?action=addSlot&date=${encodeURIComponent(newSlotDate)}&time=dummy`;
        const res = await fetch(url);
        const result = await res.json();
        if (result.success) {
          setNewSlotDate('');
          fetchAdminData();
        }
      } catch (err) {
        console.error('Slot add error:', err);
      }
    }
  };

  const deleteSlot = async (date, time) => {
    try {
      const url = `${API_URL}?action=deleteSlot&date=${encodeURIComponent(date)}&time=${encodeURIComponent(time)}`;
      const res = await fetch(url);
      const result = await res.json();
      if (result.success) {
        fetchAdminData();
      }
    } catch (err) {
      console.error('Slot delete error:', err);
    }
  };

  const formatDate = (input) => {
    const d = new Date(input);
    return `${d.getDate().toString().padStart(2, '0')}/${(d.getMonth() + 1).toString().padStart(2, '0')}/${d.getFullYear()}`;
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50 to-white">
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="font-playfair text-3xl font-bold text-gray-800">Blush Beauty Admin</h1>
              <p className="font-inter text-gray-600 mt-2">Manage salon bookings and availability</p>
            </div>
            <Button onClick={() => window.location.href = '/'} variant="outline">Back to Website</Button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8 grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Slots Panel */}
        <Card>
          <CardHeader>
            <CardTitle className="font-playfair text-xl">Manage Available Dates</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-4">
              <h3 className="font-inter font-semibold text-gray-700">Add New Date</h3>
              <input
                type="date"
                value={newSlotDate}
                onChange={(e) => setNewSlotDate(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-lg w-full"
              />
              <Button onClick={addSlot} className="bg-pink-500 hover:bg-pink-600 text-white">
                Add Date
              </Button>
            </div>

            <div>
              <h3 className="font-inter font-semibold text-gray-700 mb-4">Current Slots</h3>
              <div className="space-y-2 max-h-64 overflow-y-auto">
                {availableSlots.map((slot) => (
                  <div
                    key={slot.id}
                    className={`flex justify-between items-center p-3 rounded-lg ${slot.isBooked ? 'bg-red-100' : 'bg-green-100'}`}
                  >
                    <p>{formatDate(slot.date)} {slot.time !== 'dummy' && `at ${slot.time}`}</p>
                    <div className="flex gap-2 items-center">
                      <span className={`text-sm font-medium ${slot.isBooked ? 'text-red-700' : 'text-green-800'}`}>
                        {slot.isBooked ? 'Booked' : 'Available'}
                      </span>
                      {!slot.isBooked && (
                        <Button
                          variant="ghost"
                          className="text-red-500 hover:text-red-700 text-xs"
                          onClick={() => deleteSlot(slot.date, slot.time)}
                        >
                          Delete
                        </Button>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Bookings Table */}
        <Card>
          <CardHeader>
            <CardTitle className="font-playfair text-xl">Current Bookings</CardTitle>
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
                      <p className="font-medium">{booking.customerName}</p>
                      <p className="text-xs text-gray-500">{booking.email}</p>
                    </TableCell>
                    <TableCell>{booking.package}</TableCell>
                    <TableCell>{booking.date} {booking.time}</TableCell>
                    <TableCell>
                      <span className="px-2 py-1 rounded-full text-xs bg-green-100 text-green-800">
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
    </div>
  );
};

export default Admin;
