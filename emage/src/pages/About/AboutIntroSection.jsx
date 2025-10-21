import React from 'react';

const AboutIntroSection = () => {
  return (
    <section className="w-full">
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row justify-between items-center w-full gap-8 lg:gap-0">
          
          {/* Image Section */}
          <div className="w-full lg:w-[40%]">
            <img 
              src="/images/img_frame_80.svg" 
              alt="Mental Health Consultation Illustration" 
              className="w-full h-auto max-w-[400px] sm:max-w-[500px] lg:max-w-[624px] mx-auto lg:mx-0"
            />
          </div>

          {/* Content Section */}
          <div className="w-full lg:w-[48%] flex flex-col gap-[25px] sm:gap-[35px] lg:gap-[50px] justify-start items-start">
            
            {/* Header */}
            <div className="flex flex-col gap-[8px] sm:gap-[12px] lg:gap-[16px] justify-start items-start w-full">
              <p className="text-[18px] sm:text-[20px] lg:text-[22px] font-bold leading-[26px] sm:leading-[28px] lg:leading-[31px] text-center text-black font-['Manrope']">
                About Us
              </p>
              <h2 className="text-[27px] sm:text-[40px] md:text-[47px] lg:text-[54px] font-bold leading-[36px] sm:leading-[54px] md:leading-[63px] lg:leading-[73px] text-left text-black font-['Manrope'] w-full lg:w-[86%]">
                Discover the Faces Behind Our Mental Health Consultancy
              </h2>
            </div>

            {/* Description */}
            <p className="text-base sm:text-[17px] lg:text-[18px] font-normal leading-[24px] sm:leading-[25px] lg:leading-[27px] text-left text-black font-['Poppins'] w-full lg:w-[90%]">
              Lorem ipsum dolor sit amet consectetur. Convallis est urna adipiscing fringilla nulla diam lorem non mauris. Ultrices aliquet at quam adipiscing feugiat interdum mattis. Placerat donec risus diam sed et. A in ullamcorper ipsum justo vestibulum sit cursus.
              <br /><br />
              Phasellus ac augue ultricies sem aliquam faucibus sem non volutpat. Cursus mattis interdum sem pretium morbi ornare nunc nunc. Pharetra neque ut ipsum nunc pretium nisi vivamus dolor. Suspendisse lectus est sed vulputate ut habitant sagittis semper lacinia.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutIntroSection;