import React from 'react';
import { Helmet } from 'react-helmet';
import Header from '../../components/common/Header';
import Footer from '../../components/common/Footer';
import HeroSection from './HeroSection';
import StatsSection from './StatsSection';
import WhyChooseUsSection from './WhyChooseUsSection';
import AboutSection from './AboutSection';
import ServicesSection from './ServicesSection';
import MentorSection from './MentorSection';
import TeamSection from './TeamSection';
import TestimonialSection from './TestimonialSection';
import GallerySection from './GallerySection';
import NewsletterSection from './NewsletterSection';
import PricingSection from './PricingSection';
import MapsSection from './MapsSection';
import TestimonialsSection from './TestimonialsSection';
import FAQSection from './FAQSection';
import BlogSection from './BlogSection';

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Mental Health Consultancy - Professional Support for Healthy Minds & Happy Lives</title>
        <meta name="description" content="Expert mental health consultancy services with holistic approach. Professional therapists, consultation packages, and proven success stories. Book your mental health consultation today." />
        <meta property="og:title" content="Mental Health Consultancy - Professional Support for Healthy Minds & Happy Lives" />
        <meta property="og:description" content="Expert mental health consultancy services with holistic approach. Professional therapists, consultation packages, and proven success stories. Book your mental health consultation today." />
      </Helmet>

      <main className="w-full bg-[#fcf8f4]">
        <Header />
        <HeroSection />
        <StatsSection />
        <WhyChooseUsSection />
        <AboutSection />
        <ServicesSection />
        <MentorSection />
        <TeamSection />
        <TestimonialSection />
        <GallerySection />
        <NewsletterSection />
        <PricingSection />
        <MapsSection />
        <TestimonialsSection />
        <FAQSection />
        <BlogSection />
        <Footer />
      </main>
    </>
  );
};

export default Home;