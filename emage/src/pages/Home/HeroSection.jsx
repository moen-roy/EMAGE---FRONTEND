import React from 'react';
import Button from '../../components/ui/Button';

const HeroSection = () => {
  return (
    <section className="w-full bg-[#fcf8f4]">
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row justify-start items-start gap-8 lg:gap-0 py-8 lg:py-0">
          {/* Left Content */}
          <div className="flex flex-col gap-8 lg:gap-[50px] justify-start items-center w-full lg:w-1/2">
            {/* Main Heading */}
            <h1 className="text-[34px] sm:text-[45px] md:text-[55px] lg:text-[68px] font-extrabold leading-tight lg:leading-[92px] text-left font-['Manrope'] w-full lg:w-[96%]">
              <span className="text-[#1a1a1a]">Healthy Minds, Happy Lives </span>
              <span className="text-[#ec744a]">Mental Health Consultancy</span>
            </h1>

            {/* Content Section */}
            <div className="flex flex-col gap-8 lg:gap-[64px] justify-start items-start w-full">
              {/* Description */}
              <p className="text-base lg:text-[18px] font-normal leading-tight lg:leading-[27px] text-[#1a1a1a] font-['Poppins'] w-full lg:w-[86%]">
                Lorem ipsum dolor sit amet consectetur. Convallis est urna adipiscing fringilla nulla diam lorem non mauris. Ultrices aliquet at quam.
              </p>

              {/* Get Started Button */}
              <Button 
                text="Get started"
                className="px-6 lg:px-[34px] py-2 lg:py-[12px]"
                layout_width="auto"
                padding=""
                position="relative"
                margin=""
                variant="primary"
                size="medium"
                onClick={() => {}}
              />

              {/* Partner Logos */}
              <div className="flex flex-col sm:flex-row justify-start items-center w-full gap-4 lg:gap-[30px]">
                <img 
                  src="/images/img_logoipsum_218_1.svg" 
                  alt="Partner Logo 1" 
                  className="w-[80px] lg:w-[120px] h-auto"
                />
                <img 
                  src="/images/img_logoipsum_262_1.svg" 
                  alt="Partner Logo 2" 
                  className="w-[80px] lg:w-[120px] h-auto"
                />
                <div className="flex justify-end items-center gap-1">
                  <img 
                    src="/images/img_vector.svg" 
                    alt="Rating Icon" 
                    className="w-[20px] lg:w-[26px] h-[20px] lg:h-[26px]"
                  />
                  <img 
                    src="/images/img_vector_gray_600.svg" 
                    alt="Rating Stars" 
                    className="w-[60px] lg:w-[82px] h-[12px] lg:h-[16px]"
                  />
                </div>
                <img 
                  src="/images/img_logoipsum_264_1.svg" 
                  alt="Partner Logo 3" 
                  className="w-[80px] lg:w-[120px] h-auto"
                />
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="w-full lg:w-1/2 flex justify-center lg:justify-end items-center mt-8 lg:mt-[70px]">
            <img 
              src="/images/img_5_cardiologist.svg" 
              alt="Mental Health Professional" 
              className="w-full max-w-[400px] lg:max-w-[796px] h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;