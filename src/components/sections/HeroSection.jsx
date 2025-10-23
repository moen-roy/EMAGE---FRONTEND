import React from 'react';
// using external image instead of lucide Heart icon
import StatCard from '../cards/StatCard';
import MentalBro from './Mental health-bro.svg';

const HeroSection = () => {
  return (
    <section id="home" className="bg-gray-50 py-20 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h1 className="text-4xl font-bold text-gray-900 leading-tight mb-6">
              EMAGE (Emotional Awareness and Guided Expression) {", "}
              <span
                  className="text-coral-500"
                  style={{ color: '#FF7A59', fontSize: '1.7em' }}>Healthy Minds, Happy Lives
              </span>
          </h1>
          <p className="text-gray-600 mb-8 text-lg">
            Expert guidance and support for your mental well-being journey. Our experienced consultants are here to help you achieve emotional balance and personal growth.
          </p>

            <button
                // onClick={(e) => scrollToId(e, 'contact')}
                className="bg-[#FF7A59] hover:bg-emerald-600 text-white px-6 py-2 rounded-full transition-colors duration-200 cursor-pointer focus:outline-none"
                aria-label="Get started"
            >
                Book Now            </button>
        </div>
        
        <div className="relative">
          <div className="w-full h-72 md:h-150  rounded-3xl overflow-hidden flex items-center justify-center">
            <img src={MentalBro} alt="mental bro" className="max-w-full max-h-full object-contain" />
          </div>
        </div>
      </div>
      
      {/* Stats Section */}
      <div className="max-w-7xl mx-auto mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
        <StatCard number="8+" label="Years of Experience" />
        <StatCard number="122+" label="Certified Consultants" />
        <StatCard number="563+" label="Happy Clients" />
        <StatCard number="232+" label="Success Stories" />
      </div>
    </section>
  );
};

export default HeroSection;