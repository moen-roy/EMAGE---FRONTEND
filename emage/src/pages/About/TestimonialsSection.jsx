import React from 'react';

const TestimonialsSection = () => {
  return (
    <section className="w-full">
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row justify-center items-center w-full gap-8 lg:gap-0">
          
          {/* Header Section */}
          <div className="w-full lg:w-[42%] flex flex-col gap-[8px] sm:gap-[12px] lg:gap-[16px] justify-start items-start">
            <p className="text-[18px] sm:text-[20px] lg:text-[22px] font-bold leading-[26px] sm:leading-[28px] lg:leading-[31px] text-left text-black font-['Manrope']">
              Testimonials
            </p>
            <h2 className="text-[27px] sm:text-[40px] md:text-[47px] lg:text-[54px] font-bold leading-[36px] sm:leading-[54px] md:leading-[63px] lg:leading-[73px] text-left text-black font-['Manrope'] w-full lg:w-[72%]">
              Healing Words Testimonials from a Mental Health Consultant
            </h2>
          </div>

          {/* Testimonials Cards */}
          <div className="w-full lg:flex-1 flex flex-col sm:flex-row gap-6 sm:gap-[23px] lg:gap-[46px]">
            
            {/* First Testimonial - Featured */}
            <div className="flex flex-col gap-[10px] sm:gap-[15px] lg:gap-[20px] justify-center items-center w-full sm:w-[430px] h-auto bg-[linear-gradient(270deg,#007d6e_0%,_#5eb47c_100%)] rounded-[30px] p-[31px] sm:p-[46px] lg:p-[62px_42px]">
              <div className="flex flex-col gap-[25px] sm:gap-[35px] lg:gap-[50px] justify-start items-center w-full">
                <img 
                  src="/images/img_image_23.png" 
                  alt="Client Testimonial" 
                  className="w-[100px] sm:w-[125px] lg:w-[150px] h-[100px] sm:h-[125px] lg:h-[150px] rounded-[50px] sm:rounded-[62px] lg:rounded-[74px] object-cover"
                />
                <p className="text-base sm:text-[17px] lg:text-[18px] font-normal leading-[24px] sm:leading-[25px] lg:leading-[27px] text-center text-white font-['Poppins'] w-full">
                  Lorem ipsum dolor sit amet consectetur. Convallis est urna adipiscing fringilla nulla diam lorem non mauris. Ultrices aliquet at quam adipiscing feugiat interdum mattis. Placerat donec risus diam.
                </p>
              </div>
              <p className="text-[18px] sm:text-[20px] lg:text-[22px] font-bold leading-[26px] sm:leading-[28px] lg:leading-[31px] text-left text-white font-['Manrope']">
                George J - Client
              </p>
            </div>

            {/* Second Testimonial */}
            <div className="flex flex-col justify-end items-center w-full sm:w-[430px] h-auto border border-black rounded-[30px] p-[31px] sm:p-[46px] lg:p-[62px_42px]">
              <div className="flex flex-col gap-[25px] sm:gap-[35px] lg:gap-[50px] justify-start items-center w-full mt-[101px] sm:mt-[151px] lg:mt-[202px]">
                <img 
                  src="/images/img_image_24.png" 
                  alt="Client Testimonial" 
                  className="w-[100px] sm:w-[125px] lg:w-[150px] h-[100px] sm:h-[125px] lg:h-[150px] rounded-[50px] sm:rounded-[62px] lg:rounded-[74px] object-cover"
                />
                <p className="text-base sm:text-[17px] lg:text-[18px] font-normal leading-[24px] sm:leading-[25px] lg:leading-[27px] text-center text-[#1a1a1a] font-['Poppins'] w-full mb-[27px] sm:mb-[40px] lg:mb-[54px]">
                  Lorem ipsum dolor sit amet consectetur. Convallis est urna adipiscing fringilla nulla diam lorem non mauris. Ultrices aliquet at quam adipiscing feugiat interdum mattis. Placerat donec risus diam.
                </p>
              </div>
              <p className="text-[18px] sm:text-[20px] lg:text-[22px] font-bold leading-[26px] sm:leading-[28px] lg:leading-[31px] text-left text-[#1a1a1a] font-['Manrope'] -mt-[17px] sm:mt-[-25px] lg:-mt-[34px]">
                George J - Client
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;