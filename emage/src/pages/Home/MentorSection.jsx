import React from 'react';

const MentorSection = () => {
  const features = [
    {
      icon: '/images/img_vector_white_a700.svg',
      title: 'Professional Growth',
      description: 'Lorem ipsum dolor sit amet consectetur. Convallis est urna adipiscing fringilla nulla'
    },
    {
      icon: '/images/img_vector_white_a700_70x70.svg',
      title: 'Reduced Burnout',
      description: 'Lorem ipsum dolor sit amet consectetur. Convallis est urna adipiscing fringilla nulla'
    }
  ];

  return (
    <section className="w-full relative mt-32 lg:mt-[200px]">
      <div className="w-full h-[600px] lg:h-[952px] relative">
        {/* Background Gradient */}
        <div className="absolute inset-0 bg-[linear-gradient(270deg,#007d6e_0%,_#5eb47c_100%)] top-[100px] lg:top-[209px]"></div>
        
        {/* Left Image */}
        <img 
          src="/images/img_image_35_removebg_preview.png" 
          alt="Mental Health Professional" 
          className="absolute left-4 lg:left-[162px] top-0 w-[300px] lg:w-[724px] h-full object-contain z-10"
        />

        {/* Background Pattern */}
        <img 
          src="/images/img_group_9.png" 
          alt="Background Pattern" 
          className="absolute right-0 lg:right-[101px] top-[100px] lg:top-[209px] w-[300px] lg:w-[824px] h-auto z-0"
        />

        {/* Content */}
        <div className="absolute inset-0 flex justify-end items-start pt-[150px] lg:pt-[312px] pr-4 lg:pr-[56px] z-20">
          <div className="flex flex-col gap-12 lg:gap-[76px] justify-start items-start w-full lg:w-[46%]">
            {/* Header */}
            <div className="flex flex-col gap-3 lg:gap-[16px] justify-start items-start w-full">
              <h2 className="text-lg lg:text-[22px] font-bold leading-tight lg:leading-[31px] text-center text-white font-['Manrope']">
                Mentor
              </h2>
              <h3 className="text-[32px] lg:text-[54px] font-bold leading-tight lg:leading-[73px] text-left text-white font-['Manrope'] w-full lg:w-[72%]">
                Introducing Experienced Consulting
              </h3>
            </div>

            {/* Features List */}
            <div className="flex flex-col gap-8 lg:gap-[46px] w-full lg:pr-[362px]">
              {features?.map((feature, index) => (
                <div key={index} className="flex justify-between items-center w-full">
                  <img 
                    src={feature?.icon} 
                    alt={feature?.title} 
                    className={`w-[50px] lg:w-[${index === 0 ? '72px' : '70px'}] h-[50px] lg:h-[${index === 0 ? '62px' : '70px'}] ml-1 lg:ml-[${index === 0 ? '4px' : '6px'}]`}
                  />
                  <div className="flex flex-col gap-2 lg:gap-[14px] justify-start items-start w-[76%]">
                    <h4 className="text-xl lg:text-[28px] font-bold leading-tight lg:leading-[39px] text-left text-white font-['Manrope']">
                      {feature?.title}
                    </h4>
                    <p className="text-base lg:text-[18px] font-normal leading-tight lg:leading-[27px] text-left text-white font-['Poppins'] w-full">
                      {feature?.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Background Vector */}
        <img 
          src="/images/img_vector_3.png" 
          alt="Background Vector" 
          className="absolute left-0 bottom-0 w-[400px] lg:w-[976px] h-auto z-0"
        />
      </div>
    </section>
  );
};

export default MentorSection;