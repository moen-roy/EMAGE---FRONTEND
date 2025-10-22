import React from 'react';

const TestimonialSection = () => {
  return (
    <section 
      className="w-full mt-32 lg:mt-[200px] bg-cover bg-center relative"
      style={{ backgroundImage: "url('/images/img_image_34.png')" }}
    >
      <div className="absolute inset-0 bg-[linear-gradient(180deg,#2727277f_0%,_#000000_100%)]"></div>
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-[42px] relative z-10">
        <div className="flex flex-col justify-start items-start w-full pl-0 lg:pl-[228px] pr-0 lg:pr-[56px]">
          {/* Quote Icon */}
          <img 
            src="/images/img_.svg" 
            alt="Quote" 
            className="w-[60px] lg:w-[92px] h-[50px] lg:h-[80px] mt-6 lg:mt-[36px] ml-6 lg:ml-[36px]"
          />
          
          {/* Content */}
          <div className="flex flex-col justify-start items-end w-full lg:w-[88%] ml-0 lg:ml-[68px]">
            <blockquote className="text-[32px] lg:text-[54px] font-bold leading-tight lg:leading-[73px] text-center text-white font-['Manrope'] w-full pr-0 lg:pr-[14px]">
              Self-care is not a luxury. It is a necessity. Without it, we cannot be our best selves, mentally, emotionally, or physically.
            </blockquote>
            <img 
              src="/images/img_white_a700.svg" 
              alt="Quote End" 
              className="w-[60px] lg:w-[92px] h-[50px] lg:h-[80px] mt-8 lg:mt-[149px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;