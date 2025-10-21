import React from 'react';
import Button from '../../components/ui/Button';

const AboutSection = () => {
  return (
    <section className="w-full">
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-0">
        <div className="flex flex-col lg:flex-row justify-between items-center gap-8 lg:gap-0">
          {/* Left Image */}
          <div className="w-full lg:w-[42%] order-2 lg:order-1">
            <img 
              src="/images/img_frame_80.svg" 
              alt="Mental Health Consultation" 
              className="w-full max-w-[500px] lg:max-w-[624px] h-auto mx-auto"
            />
          </div>

          {/* Right Content */}
          <div className="flex flex-col gap-8 lg:gap-[50px] justify-start items-start w-full lg:w-[46%] order-1 lg:order-2">
            {/* Header */}
            <div className="flex flex-col gap-3 lg:gap-[16px] justify-start items-start w-full lg:pr-[30px]">
              <h2 className="text-lg lg:text-[22px] font-bold leading-tight lg:leading-[31px] text-center text-black font-['Manrope']">
                About Us
              </h2>
              <h3 className="text-[32px] lg:text-[54px] font-bold leading-tight lg:leading-[73px] text-left text-black font-['Manrope'] w-full">
                Discover the Faces Behind Our Mental Health Consultancy
              </h3>
            </div>

            {/* Description */}
            <p className="text-base lg:text-[18px] font-normal leading-tight lg:leading-[27px] text-left text-black font-['Poppins'] w-full">
              Lorem ipsum dolor sit amet consectetur. Convallis est urna adipiscing fringilla nulla diam lorem non mauris. Ultrices aliquet at quam adipiscing feugiat interdum mattis. Placerat donec risus diam sed et. A in ullamcorper ipsum justo vestibulum sit cursus A risus donec eget enim
            </p>

            {/* See Detail Button */}
            <Button 
              text="See detail"
              className="px-6 lg:px-[34px] py-2 lg:py-[12px]"
              layout_width="auto"
              padding="custom"
              position="relative"
              margin="none"
              variant="primary"
              size="medium"
              onClick={() => {}}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;