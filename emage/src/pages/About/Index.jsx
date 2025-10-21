import React from 'react';
import { Helmet } from 'react-helmet';

import Footer from '../../components/common/Footer';
import HeroSection from './HeroSection';
import AboutIntroSection from './AboutIntroSection';
import WhyChooseUsSection from './WhyChooseUsSection';
import WelcomeMessageSection from './WelcomeMessageSection';
import QuoteSection from './QuoteSection';
import TeamSection from './TeamSection';
import StatsSection from './StatsSection';
import SuccessStorySection from './SuccessStorySection';
import NewsletterSection from './NewsletterSection';
import TestimonialsSection from './TestimonialsSection';

const About = () => {
  return (
    <>
      <Helmet>
        <title>About Us - Expert Mental Health Consultancy Team | Professional Therapy Services</title>
        <meta name="description" content="Meet our expert mental health consultants with holistic approach to therapy. Discover our team of licensed professionals, success stories, and comprehensive mental health services since 2020." />
        <meta property="og:title" content="About Us - Expert Mental Health Consultancy Team | Professional Therapy Services" />
        <meta property="og:description" content="Meet our expert mental health consultants with holistic approach to therapy. Discover our team of licensed professionals, success stories, and comprehensive mental health services since 2020." />
      </Helmet>

      <main className="w-full bg-[#fcf8f4] relative overflow-hidden">
        {/* Background decorative image */}
        <img 
          src="/images/img_group_6.png" 
          alt="" 
          className="absolute top-[1241px] sm:top-[1500px] md:top-[1800px] lg:top-[2482px] right-0 w-[250px] sm:w-[350px] md:w-[450px] lg:w-[594px] h-auto z-10 pointer-events-none"
        />
        
        <div className="flex flex-col gap-[100px] sm:gap-[150px] md:gap-[180px] lg:gap-[200px] justify-start items-center w-full min-h-full">
          <HeroSection />
          <AboutIntroSection />
          <WhyChooseUsSection />
          <WelcomeMessageSection />
          <QuoteSection />
          <TeamSection />
          <StatsSection />
          <SuccessStorySection />
          <NewsletterSection />
          <TestimonialsSection />
          <Footer />
        </div>
      </main>
    </>
  );
};

export default About;