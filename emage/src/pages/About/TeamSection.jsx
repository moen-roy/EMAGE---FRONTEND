import React from 'react';
import Button from '../../components/ui/Button';

const TeamSection = () => {
  return (
    <section className="w-full">
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row justify-start items-center w-full gap-8 lg:gap-0">
          
          {/* Content Section */}
          <div className="w-full lg:w-[44%] flex flex-col gap-[25px] sm:gap-[35px] lg:gap-[50px] justify-start items-start">
            
            {/* Header */}
            <div className="flex flex-col gap-[8px] sm:gap-[12px] lg:gap-[16px] justify-start items-start w-full">
              <p className="text-[18px] sm:text-[20px] lg:text-[22px] font-bold leading-[26px] sm:leading-[28px] lg:leading-[31px] text-left text-black font-['Manrope']">
                Team
              </p>
              <h2 className="text-[27px] sm:text-[40px] md:text-[47px] lg:text-[54px] font-bold leading-[36px] sm:leading-[54px] md:leading-[63px] lg:leading-[73px] text-left text-black font-['Manrope'] w-full lg:w-[90%]">
                Caring for Your Mental Health Get to Know Our Team of Experts
              </h2>
            </div>

            {/* Description */}
            <p className="text-base sm:text-[17px] lg:text-[18px] font-normal leading-[24px] sm:leading-[25px] lg:leading-[27px] text-left text-black font-['Poppins'] w-full lg:w-[68%]">
              Lorem ipsum dolor sit amet consectetur. Convallis est urna adipiscing fringilla nulla diam lorem non mauris. Ultrices aliquet at quam adipiscing.
            </p>

            {/* See More Button */}
            <Button 
              text="See more"
              text_font_size="22"
              text_font_family="Manrope"
              text_font_weight="700"
              text_line_height="31px"
              text_color="#ffffff"
              fill_background_color="#ec744a"
              border_border_radius="30px"
              padding="12px 34px"
              layout_width="auto"
              position="relative"
              margin="0"
              variant="primary"
              size="medium"
              className=""
              onClick={() => {}}
            />
          </div>

          {/* Images Section */}
          <div className="w-full lg:flex-1 flex justify-center items-center">
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4 lg:gap-0">
              
              {/* Main Large Image */}
              <img 
                src="/images/img_image_13.png" 
                alt="Team Member" 
                className="w-full sm:w-[280px] lg:w-[442px] h-auto max-w-[350px] sm:max-w-none"
              />

              {/* Side Images Column */}
              <div className="flex flex-row sm:flex-col gap-4 lg:gap-[50px] ml-0 sm:ml-[25px] lg:ml-[50px]">
                <img 
                  src="/images/img_image_15.png" 
                  alt="Team Member" 
                  className="w-[150px] sm:w-[200px] lg:w-[320px] h-auto"
                />
                <img 
                  src="/images/img_image_14.png" 
                  alt="Team Member" 
                  className="w-[150px] sm:w-[200px] lg:w-[322px] h-auto"
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