
import React from 'react';
import Navigation from '../components/Navigation';
import Hero from '../components/Hero';
import ServicesOverview from '../components/ServicesOverview';
import Services from '../components/Services';
import Testimonials from '../components/Testimonials';
import Contact from '../components/Contact';
import Booking from '../components/Booking';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <Hero />
      <ServicesOverview />
      <Services />
      <Testimonials />
      <Contact />
      <Booking />
      <Footer />
    </div>
  );
};

export default Index;
