import React from 'react';

const ServicesSection = () => {
  const services = [
    {
      image: '/images/img_image_8.png',
      type: 'image'
    },
    {
      image: '/images/img_image_5.png',
      title: 'Mental Counseling',
      description: 'Lorem ipsum dolor sit amet consectetur Convallis est',
      type: 'overlay'
    },
    {
      image: '/images/img_image_9.png',
      type: 'image'
    },
    {
      image: '/images/img_image_7.png',
      type: 'image'
    }
  ];

  return (
    <section className="w-full py-16 lg:py-0">
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-12 lg:gap-[80px] justify-start items-center">
          {/* Section Header */}
          <div className="flex flex-col gap-3 lg:gap-[16px] justify-start items-center w-full lg:w-[86%]">
            <h2 className="text-lg lg:text-[22px] font-bold leading-tight lg:leading-[31px] text-center text-black font-['Manrope']">
              Services
            </h2>
            <h3 className="text-[32px] lg:text-[54px] font-bold leading-tight lg:leading-[73px] text-center text-black font-['Manrope'] w-full">
              Empowering Minds Our Mental Health Consulting Services
            </h3>
          </div>

          {/* Services Grid */}
          <div className="flex flex-col gap-8 lg:gap-0 w-full lg:w-[88%]">
            {/* Services Row */}
            <div className="flex flex-col lg:flex-row gap-6 lg:gap-[50px] w-full">
              {services?.map((service, index) => (
                <div key={index} className="relative w-full lg:w-[360px] h-[300px] lg:h-[400px] rounded-[30px] overflow-hidden">
                  <img 
                    src={service?.image} 
                    alt={`Service ${index + 1}`} 
                    className="w-full h-full object-cover"
                  />
                  {service?.type === 'overlay' && (
                    <div className="absolute inset-0 bg-[linear-gradient(180deg,#2727277f_0%,_#000000_100%)] rounded-[30px] flex flex-col justify-center items-center p-6 lg:p-[94px_32px]">
                      <div className="flex flex-col gap-8 lg:gap-[50px] justify-start items-center w-full">
                        <div className="flex flex-col gap-2 lg:gap-[10px] justify-center items-center w-full px-1">
                          <h4 className="text-xl lg:text-[28px] font-bold leading-tight lg:leading-[39px] text-center text-white font-['Manrope']">
                            {service?.title}
                          </h4>
                          <p className="text-base lg:text-[18px] font-normal leading-tight lg:leading-[27px] text-center text-white font-['Poppins'] w-full">
                            {service?.description}
                          </p>
                        </div>
                        <div className="flex justify-center items-center w-full px-8 lg:px-[52px]">
                          <button className="bg-[#ec744a] rounded-[24px] px-4 lg:px-[6px] py-1 lg:py-[6px] text-lg lg:text-[22px] font-bold leading-tight lg:leading-[31px] text-white font-['Manrope'] hover:bg-opacity-90 transition-colors">
                            See detail
                          </button>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Navigation Arrows */}
            <div className="flex justify-between items-center w-full mt-8 lg:mt-[80px]">
              <button className="w-10 lg:w-[48px] h-10 lg:h-[48px] hover:opacity-70 transition-opacity">
                <img 
                  src="/images/img_arrow_left.svg" 
                  alt="Previous" 
                  className="w-full h-full"
                />
              </button>
              <button className="w-10 lg:w-[48px] h-10 lg:h-[48px] hover:opacity-70 transition-opacity">
                <img 
                  src="/images/img_arrow_left_black_900.svg" 
                  alt="Next" 
                  className="w-full h-full"
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;