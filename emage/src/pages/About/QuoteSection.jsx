import React from 'react';

const QuoteSection = () => {
  return (
    <section 
      className="w-full bg-[linear-gradient(180deg,#2727277f_0%,_#000000_100%)] relative"
      style={{
        backgroundImage: 'url(/images/img_image_34.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <div className="w-full bg-[linear-gradient(180deg,#2727277f_0%,_#000000_100%)]">
        <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-[21px] sm:py-[31px] lg:py-[42px]">
          <div className="flex flex-col justify-start items-start w-full pl-[114px] sm:pl-[171px] lg:pl-[228px]">
            
            {/* Quote Icon */}
            <img 
              src="/images/img_.svg" 
              alt="" 
              className="w-[46px] sm:w-[69px] lg:w-[92px] h-[40px] sm:h-[60px] lg:h-[80px] ml-[18px] sm:ml-[27px] lg:ml-[36px] mb-[7px] sm:mb-[10px] lg:mb-[14px]"
            />

            {/* Quote Text */}
            <p className="text-[27px] sm:text-[40px] md:text-[47px] lg:text-[54px] font-bold leading-[36px] sm:leading-[54px] md:leading-[63px] lg:leading-[73px] text-center text-white font-['Manrope'] w-full">
              Self-care is not a luxury. It is a necessity. Without it, we cannot be our best selves, mentally, emotionally, or physically.
            </p>

            {/* Closing Quote Icon */}
            <img 
              src="/images/img_white_a700.svg" 
              alt="" 
              className="w-[46px] sm:w-[69px] lg:w-[92px] h-[40px] sm:h-[60px] lg:h-[80px] self-end"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuoteSection;