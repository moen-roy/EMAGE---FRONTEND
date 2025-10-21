import React from 'react';

const GallerySection = () => {
  return (
    <section className="w-full mt-32 lg:mt-[200px]">
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-12 lg:gap-[80px] justify-start items-center">
          {/* Section Header */}
          <div className="flex flex-col lg:flex-row justify-center items-center w-full lg:w-[88%]">
            <div className="flex flex-col gap-3 lg:gap-[14px] justify-center items-start w-full lg:w-[62%]">
              <h2 className="text-lg lg:text-[22px] font-bold leading-tight lg:leading-[31px] text-center text-black font-['Manrope']">
                Gallery
              </h2>
              <h3 className="text-[32px] lg:text-[54px] font-bold leading-tight lg:leading-[73px] text-left text-black font-['Manrope'] w-full">
                A Gallery of Mental Health Themes Through Art
              </h3>
            </div>
            <p className="text-base lg:text-[18px] font-normal leading-tight lg:leading-[27px] text-left text-black font-['Poppins'] w-full lg:w-[30%] mt-4 lg:mt-0">
              Lorem ipsum dolor sit amet consectetur. Convallis est urna adipiscing fringilla nulla diam lorem non mauris. Ultrices aliquet at quam adipiscing.
            </p>
          </div>

          {/* Gallery Grid */}
          <div className="flex flex-col lg:flex-row justify-center items-center w-full lg:w-[88%] gap-8 lg:gap-0">
            {/* Left Column */}
            <div className="flex flex-col gap-8 lg:gap-[50px] justify-start items-center w-full lg:w-[28%]">
              <img 
                src="/images/img_image_19.png" 
                alt="Gallery Image 1" 
                className="w-full max-w-[350px] lg:max-w-[442px] h-auto"
              />
              <img 
                src="/images/img_image_11.png" 
                alt="Gallery Image 2" 
                className="w-full max-w-[350px] lg:max-w-[442px] h-auto"
              />
            </div>

            {/* Center Column */}
            <div className="flex flex-col gap-8 lg:gap-[48px] justify-start items-center w-full lg:flex-1 lg:mx-[50px]">
              {/* Top Row */}
              <div className="flex flex-col lg:flex-row gap-6 lg:gap-[50px] justify-start items-center w-full">
                {/* Featured Image with Overlay */}
                <div className="relative w-full lg:flex-1 h-[250px] lg:h-[314px] rounded overflow-hidden">
                  <img 
                    src="/images/img_image_16.png" 
                    alt="Relaxation Theme" 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,#2727277f_0%,_#000000_100%)] flex justify-center items-center p-8 lg:p-[94px_56px]">
                    <div className="flex flex-col gap-3 lg:gap-[18px] justify-start items-center w-full lg:w-[64%]">
                      <h4 className="text-2xl lg:text-[35px] font-bold leading-tight lg:leading-[48px] text-center text-white font-['Manrope']">
                        Relaxation
                      </h4>
                      <p className="text-base lg:text-[18px] font-normal leading-tight lg:leading-[27px] text-center text-white font-['Poppins'] w-full">
                        Lorem ipsum dolor sit amet consectetur. Convallis est urna.
                      </p>
                    </div>
                  </div>
                </div>
                <img 
                  src="/images/img_image_21.png" 
                  alt="Gallery Image 3" 
                  className="w-full lg:w-[34%] max-w-[300px] lg:max-w-[370px] h-auto"
                />
              </div>

              {/* Bottom Row */}
              <div className="flex flex-col lg:flex-row gap-6 lg:gap-[50px] justify-start items-center w-full">
                <img 
                  src="/images/img_image_18.png" 
                  alt="Gallery Image 4" 
                  className="w-full lg:w-[42%] max-w-[350px] lg:max-w-[442px] h-auto"
                />
                <div className="flex flex-col gap-6 lg:gap-[50px] justify-start items-center w-full lg:flex-1">
                  <img 
                    src="/images/img_image_12.png" 
                    alt="Gallery Image 5" 
                    className="w-full max-w-[500px] lg:max-w-[610px] h-auto"
                  />
                  <div className="flex flex-col sm:flex-row justify-between items-center w-full gap-4 lg:gap-0">
                    <img 
                      src="/images/img_image_20.png" 
                      alt="Gallery Image 6" 
                      className="w-full sm:w-[44%] max-w-[200px] lg:max-w-[268px] h-auto"
                    />
                    <img 
                      src="/images/img_image_22.png" 
                      alt="Gallery Image 7" 
                      className="w-full sm:w-[48%] max-w-[220px] lg:max-w-[292px] h-auto"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GallerySection;