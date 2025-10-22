import React from 'react';

const WhyChooseUsSection = () => {
  return (
    <section className="w-full">
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-[40px] sm:gap-[60px] lg:gap-[80px] justify-start items-center w-full">
          
          {/* Section Header */}
          <div className="flex flex-col gap-[7px] sm:gap-[10px] lg:gap-[14px] justify-center items-center w-full max-w-[800px] lg:max-w-[1118px]">
            <p className="text-[18px] sm:text-[20px] lg:text-[22px] font-bold leading-[26px] sm:leading-[28px] lg:leading-[31px] text-center text-black font-['Manrope']">
              Why?
            </p>
            <h2 className="text-[27px] sm:text-[40px] md:text-[47px] lg:text-[54px] font-bold leading-[36px] sm:leading-[54px] md:leading-[63px] lg:leading-[73px] text-center text-black font-['Manrope'] w-full">
              Why Our Mental Health Consultants are the Best Choice
            </h2>
          </div>

          {/* Features Grid */}
          <div className="flex flex-col lg:flex-row justify-start items-center w-full gap-6 lg:gap-0">
            
            {/* Holistic Approach Card */}
            <div className="flex flex-col gap-[25px] sm:gap-[35px] lg:gap-[50px] justify-center items-center w-full lg:w-[30%] h-auto border border-black rounded-[30px_0px_30px_0px] p-[40px] sm:p-[60px] lg:p-[80px_56px]">
              <img 
                src="/images/img_007_psychologist.svg" 
                alt="Holistic Approach Icon" 
                className="w-[80px] sm:w-[100px] lg:w-[130px] h-[80px] sm:h-[100px] lg:h-[130px]"
              />
              <div className="flex flex-col gap-[6px] sm:gap-[9px] lg:gap-[12px] justify-center items-center w-full">
                <h3 className="text-[20px] sm:text-[24px] lg:text-[28px] font-bold leading-[28px] sm:leading-[33px] lg:leading-[39px] text-center text-[#1a1a1a] font-['Manrope']">
                  Holistic approach
                </h3>
                <p className="text-base sm:text-[17px] lg:text-[18px] font-normal leading-[24px] sm:leading-[25px] lg:leading-[27px] text-center text-black font-['Poppins'] w-full">
                  Lorem ipsum dolor sit amet consectetur. Convallis est urna adipiscing fringilla nulla diam lorem non mauris.
                </p>
              </div>
            </div>

            {/* Expertise Team Card - Featured */}
            <div className="flex flex-col gap-[25px] sm:gap-[35px] lg:gap-[50px] justify-center items-center w-full lg:flex-1 h-auto bg-[linear-gradient(270deg,#007d6e_0%,_#5eb47c_100%)] rounded-[30px] p-[62px] sm:p-[94px] lg:p-[124px_56px]">
              <img 
                src="/images/img_group.svg" 
                alt="Expertise Team Icon" 
                className="w-[120px] sm:w-[160px] lg:w-[200px] h-[120px] sm:h-[160px] lg:h-[200px]"
              />
              <div className="flex flex-col gap-[10px] sm:gap-[15px] lg:gap-[20px] justify-start items-center w-full lg:w-[86%]">
                <h3 className="text-[24px] sm:text-[29px] lg:text-[35px] font-bold leading-[33px] sm:leading-[40px] lg:leading-[48px] text-center text-white font-['Manrope']">
                  Expertise Team
                </h3>
                <p className="text-base sm:text-[17px] lg:text-[18px] font-normal leading-[24px] sm:leading-[25px] lg:leading-[27px] text-center text-white font-['Poppins'] w-full">
                  Lorem ipsum dolor sit amet consectetur. Convallis est urna adipiscing fringilla nulla diam lorem non mauris.
                </p>
              </div>
            </div>

            {/* Accessibility Card */}
            <div className="flex flex-col gap-[25px] sm:gap-[35px] lg:gap-[50px] justify-center items-center w-full lg:w-[30%] h-auto border border-black rounded-[0px_30px_0px_30px] p-[40px] sm:p-[60px] lg:p-[80px_56px]">
              <img 
                src="/images/img_014_pendulum.svg" 
                alt="Accessibility Icon" 
                className="w-[80px] sm:w-[100px] lg:w-[130px] h-[80px] sm:h-[100px] lg:h-[130px]"
              />
              <div className="flex flex-col gap-[6px] sm:gap-[9px] lg:gap-[12px] justify-center items-center w-full">
                <h3 className="text-[20px] sm:text-[24px] lg:text-[28px] font-bold leading-[28px] sm:leading-[33px] lg:leading-[39px] text-center text-[#1a1a1a] font-['Manrope']">
                  Accessibility
                </h3>
                <p className="text-base sm:text-[17px] lg:text-[18px] font-normal leading-[24px] sm:leading-[25px] lg:leading-[27px] text-center text-black font-['Poppins'] w-full">
                  Lorem ipsum dolor sit amet consectetur. Convallis est urna adipiscing fringilla nulla diam lorem non mauris.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;