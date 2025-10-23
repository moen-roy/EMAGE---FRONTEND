import React from 'react';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import HeroSection from './components/sections/HeroSection';
import WhyChooseUs from './components/sections/WhyChooseUs';
import DiscoverSection from './components/sections/DiscoverSection';
import ServicesSection from './components/sections/ServicesSection';
import CaringSection from './components/sections/CaringSection';
import SelfCareQuote from './components/sections/SelfCareQuote';
import TestimonialsSection from './components/sections/TestimonialsSection';
import PricingSection from './components/sections/PricingSection';
import FAQSection from './components/sections/FAQSection';
import NewsletterSection from './components/sections/NewsletterSection';
import ContactSection from './components/sections/ContactSection';

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <HeroSection />
      <WhyChooseUs />
      <DiscoverSection />
      <ServicesSection />
      <CaringSection />
      <SelfCareQuote />
      <TestimonialsSection />
      <PricingSection />
      <FAQSection />
      <NewsletterSection />
      <ContactSection />
      <Footer />
    </div>
  );
}

