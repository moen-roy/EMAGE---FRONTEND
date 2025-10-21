import React from 'react';
import Header from '../../components/common/Header';
import Button from '../../components/ui/Button';

const HeroSection = () => {
  return (
    <section className="w-full bg-[linear-gradient(270deg,#007d6e_0%,_#5eb47c_100%)] relative overflow-hidden">
      {/* Background decorative vector */}
      <img 
        src="/images/img_vector_2.png" 
        alt="" 
        className="absolute top-[98px] sm:top-[120px] md:top-[150px] lg:top-[195px] right-0 w-[540px] sm:w-[700px] md:w-[900px] lg:w-[1080px] h-auto z-0 pointer-events-none"
      />
      
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col gap-[43px] sm:gap-[60px] md:gap-[75px] lg:gap-[86px] justify-start items-center w-full py-[40px] sm:py-[60px] lg:py-[80px]">
          
          {/* Header Component */}
          <div className="w-full">
            <div className="flex justify-between items-center">
              {/* Logo Section */}
              <img 
                src="/images/img_header_logo.png" 
                alt="Header Logo" 
                className="w-[120px] sm:w-[140px] lg:w-[160px] h-auto"
              />

              {/* Navigation Menu - Hidden on mobile */}
              <nav className="hidden lg:flex items-center gap-[30px] xl:gap-[50px]">
                <button className="text-base lg:text-[18px] font-semibold leading-[27px] text-white font-['Poppins'] hover:opacity-80 transition-opacity">
                  Home
                </button>
                <button className="text-base lg:text-[18px] font-normal leading-[27px] text-white font-['Poppins'] hover:opacity-80 transition-opacity">
                  About
                </button>
                <button className="text-base lg:text-[18px] font-normal leading-[27px] text-white font-['Poppins'] hover:opacity-80 transition-opacity">
                  Services
                </button>
                <button className="text-base lg:text-[18px] font-normal leading-[27px] text-white font-['Poppins'] hover:opacity-80 transition-opacity">
                  Page
                </button>
              </nav>

              {/* Contact Button */}
              <Button 
                text="Contact Us"
                text_font_size="18"
                text_font_family="Manrope"
                text_font_weight="700"
                text_line_height="31px"
                text_color="#ffffff"
                fill_background_color="#ec744a"
                border_border_radius="30px"
                padding="12px 34px"
                className="hidden lg:block"
                layout_width="auto"
                position="relative"
                margin="0"
                variant="primary"
                size="medium"
                onClick={() => {}}
              />

              {/* Mobile menu button */}
              <button className="lg:hidden p-2">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>

          {/* Hero Content */}
          <div className="flex flex-col lg:flex-row justify-between items-start w-full gap-8 lg:gap-0">
            {/* Decorative Line */}
            <div className="hidden lg:flex items-center">
              <div className="w-[3px] sm:w-[4px] lg:w-[5px] h-[164px] sm:h-[246px] lg:h-[328px] bg-white"></div>
            </div>

            {/* Text Content */}
            <div className="flex flex-col gap-[25px] sm:gap-[35px] lg:gap-[50px] justify-start items-start w-full lg:w-[94%] lg:ml-[90px]">
              <h1 className="text-[34px] sm:text-[48px] md:text-[58px] lg:text-[68px] font-extrabold leading-[46px] sm:leading-[65px] md:leading-[78px] lg:leading-[93px] text-white font-['Manrope']">
                About Us
              </h1>
              <p className="text-base sm:text-[17px] lg:text-[18px] font-normal leading-[24px] sm:leading-[25px] lg:leading-[27px] text-white font-['Poppins'] w-full lg:w-[78%]">
                Lorem ipsum dolor sit amet consectetur. Convallis est urna adipiscing fringilla nulla diam lorem non mauris. Ultrices aliquet at quam adipiscing feugiat interdum mattis. Placerat donec risus diam sed et. A in ullamcorper ipsum.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;