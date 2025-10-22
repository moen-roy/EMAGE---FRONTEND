import React from 'react';
import Button from '../../components/ui/Button';

const TeamSection = () => {
  return (
    <section className="w-full mt-32 lg:mt-[200px]">
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row justify-center items-center gap-8 lg:gap-0 w-full lg:w-[84%] mx-auto">
          {/* Left Content */}
          <div className="flex flex-col justify-start items-start w-full lg:w-[44%] order-2 lg:order-1">
            <h2 className="text-lg lg:text-[22px] font-bold leading-tight lg:leading-[31px] text-left text-black font-['Manrope']">
              Team
            </h2>
            <h3 className="text-[32px] lg:text-[54px] font-bold leading-tight lg:leading-[73px] text-left text-black font-['Manrope'] w-full lg:w-[90%] mt-3 lg:mt-[16px]">
              Caring for Your Mental Health Get to Know Our Team of Experts
            </h3>
            <p className="text-base lg:text-[18px] font-normal leading-tight lg:leading-[27px] text-left text-black font-['Poppins'] w-full lg:w-[68%] mt-8 lg:mt-[50px]">
              Lorem ipsum dolor sit amet consectetur. Convallis est urna adipiscing fringilla nulla diam lorem non mauris. Ultrices aliquet at quam adipiscing.
            </p>
            <div className="mt-8 lg:mt-[50px]">
              <Button 
                text="See more"
                className="px-6 lg:px-[34px] py-2 lg:py-[12px]"
                layout_width="auto"
                padding="px-6 lg:px-[34px] py-2 lg:py-[12px]"
                position="relative"
                margin="0"
                variant="primary"
                size="medium"
                onClick={() => {}}
              />
            </div>
          </div>

          {/* Right Images */}
          <div className="flex justify-start items-center w-full lg:w-[56%] order-1 lg:order-2">
            <div className="flex justify-center items-center w-full">
              <img 
                src="/images/img_image_13.png" 
                alt="Team Member 1" 
                className="w-full max-w-[300px] lg:max-w-[442px] h-auto"
              />
              <div className="flex flex-col gap-8 lg:gap-[50px] justify-start items-center w-auto ml-6 lg:ml-[50px]">
                <img 
                  src="/images/img_image_15.png" 
                  alt="Team Member 2" 
                  className="w-full max-w-[200px] lg:max-w-[320px] h-auto"
                />
                <img 
                  src="/images/img_image_14.png" 
                  alt="Team Member 3" 
                  className="w-full max-w-[200px] lg:max-w-[322px] h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;