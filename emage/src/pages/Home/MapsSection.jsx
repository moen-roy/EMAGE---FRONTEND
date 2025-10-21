import React from 'react';

const MapsSection = () => {
  return (
    <section className="w-full">
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-12 lg:gap-[80px] justify-start items-center w-full">
          {/* Section Header */}
          <div className="flex flex-col gap-3 lg:gap-[14px] justify-center items-center w-full lg:w-[60%]">
            <h2 className="text-lg lg:text-[22px] font-bold leading-tight lg:leading-[31px] text-center text-black font-['Manrope']">
              Maps
            </h2>
            <h3 className="text-[32px] lg:text-[54px] font-bold leading-tight lg:leading-[73px] text-center text-black font-['Manrope'] w-full">
              Mapping Out Mental Health Consulting Strategies
            </h3>
          </div>

          {/* Map Container */}
          <div className="flex justify-end items-start w-full relative">
            <div 
              className="w-full h-[300px] lg:h-[544px] bg-cover bg-center rounded-lg lg:rounded-none relative"
              style={{ backgroundImage: "url('/images/img_rectangle_29.png')" }}
            >
              <div className="absolute inset-0 p-8 lg:p-[228px_400px_228px_56px] flex justify-end items-end">
                <img 
                  src="/images/img_location_red_a700.svg" 
                  alt="Location Marker" 
                  className="w-[40px] lg:w-[54px] h-[40px] lg:h-[54px] mb-4 lg:mb-[34px]"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MapsSection;