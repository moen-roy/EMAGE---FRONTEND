import React from 'react';

const SuccessStorySection = () => {
  const storyPoints = [
    'Lorem ipsum dolor sit amet consectetur. Convallis est urna adipiscing fringilla nulla diam.',
    'Lorem ipsum dolor sit amet consectetur. Convallis est urna adipiscing fringilla nulla diam.',
    'Lorem ipsum dolor sit amet consectetur. Convallis est urna adipiscing fringilla nulla diam.',
    'Lorem ipsum dolor sit amet consectetur. Convallis est urna adipiscing fringilla nulla diam.'
  ];

  return (
    <section className="w-full">
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row justify-center items-center w-full gap-8 lg:gap-0">
          
          {/* Content Section */}
          <div className="w-full lg:flex-1 flex flex-col gap-[25px] sm:gap-[35px] lg:gap-[50px] justify-start items-start self-end mb-0 lg:mb-[62px]">
            
            {/* Header */}
            <div className="flex flex-col gap-[7px] sm:gap-[10px] lg:gap-[14px] justify-center items-start w-full">
              <p className="text-[18px] sm:text-[20px] lg:text-[22px] font-bold leading-[26px] sm:leading-[28px] lg:leading-[31px] text-left text-black font-['Manrope']">
                Success Story
              </p>
              <h2 className="text-[27px] sm:text-[40px] md:text-[47px] lg:text-[54px] font-bold leading-[36px] sm:leading-[54px] md:leading-[63px] lg:leading-[73px] text-left text-black font-['Manrope'] w-full lg:w-[84%]">
                Breaking the Stigma The Success Story of a Mental Health Consultant
              </h2>
            </div>

            {/* Story Points */}
            <div className="flex flex-col gap-[25px] sm:gap-[35px] lg:gap-[50px] justify-start items-center w-full lg:w-[68%]">
              {storyPoints?.map((point, index) => (
                <div key={index} className="flex gap-[10px] sm:gap-[15px] lg:gap-[20px] justify-start items-center w-full">
                  <img 
                    src="/images/img_arrow_left_2.svg" 
                    alt="" 
                    className="w-[32px] sm:w-[40px] lg:w-[48px] h-[32px] sm:h-[40px] lg:h-[48px] flex-shrink-0"
                  />
                  <p className="text-base sm:text-[17px] lg:text-[18px] font-normal leading-[24px] sm:leading-[25px] lg:leading-[27px] text-left text-black font-['Poppins'] w-full lg:w-[90%]">
                    {point}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Image Section */}
          <div className="w-full lg:w-[48%]">
            <img 
              src="/images/img_group_1.svg" 
              alt="Success Story Illustration" 
              className="w-full h-auto max-w-[500px] sm:max-w-[600px] lg:max-w-[782px] mx-auto lg:mx-0"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SuccessStorySection;