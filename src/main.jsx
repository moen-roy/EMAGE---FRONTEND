import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './components/index.css'
import CaringSection from './components/sections/CaringSection.jsx'
import TestimonialsSection from './components/sections/TestimonialsSection.jsx'
import HeroSection from './components/sections/HeroSection.jsx'
import FAQSection from './components/sections/FAQSection.jsx'
import WhyChooseUs from './components/sections/WhyChooseUs.jsx'
import ServiceSection from './components/sections/ServicesSection.jsx'
import DiscoverSection from './components/sections/DiscoverSection.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HeroSection />
    {/* <WhyChooseUs /> */}
    <DiscoverSection />
    <ServiceSection />
    <CaringSection />
      {/* <TestimonialsSection /> */}
   
    {/* <FAQSection />   */}
    
    
    

  </StrictMode>,
)
