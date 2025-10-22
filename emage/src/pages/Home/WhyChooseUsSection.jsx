import React from 'react';

const WhyChooseUsSection = () => {
  const features = [
    {
      icon: '/images/img_007_psychologist.svg',
      title: 'Holistic approach',
      description: 'Lorem ipsum dolor sit amet consectetur. Convallis est urna adipiscing fringilla nulla diam lorem non mauris.',
      borderStyle: 'border border-black rounded-[30px_0px_30px_0px]',
      bgStyle: 'bg-transparent'
    },
    {
      icon: '/images/img_group.svg',
      title: 'Expertise Team',
      description: 'Lorem ipsum dolor sit amet consectetur. Convallis est urna adipiscing fringilla nulla diam lorem non mauris.',
      borderStyle: 'rounded-[30px]',
      bgStyle: 'bg-[linear-gradient(270deg,#007d6e_0%,_#5eb47c_100%)]',
      textColor: 'text-white'
    },
    {
      icon: '/images/img_014_pendulum.svg',
      title: 'Accessibility',
      description: 'Lorem ipsum dolor sit amet consectetur. Convallis est urna adipiscing fringilla nulla diam lorem non mauris.',
      borderStyle: 'border border-black rounded-[0px_30px_0px_30px]',
      bgStyle: 'bg-transparent'
    }
  ];

  return (
    <section className="w-full relative">
      {/* Background Images */}
      <img 
        src="/images/img_group_7.png" 
        alt="Background Decoration Left" 
        className="absolute left-0 top-0 w-[200px] lg:w-[398px] h-auto z-0"
      />
      <img 
        src="/images/img_group_6_blue_gray_100.png" 
        alt="Background Decoration Right" 
        className="absolute right-0 top-[200px] lg:top-[775px] w-[250px] lg:w-[506px] h-auto z-0"
      />
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-[202px] relative z-10">
        <div className="flex flex-col gap-12 lg:gap-[80px] justify-start items-center">
          {/* Section Header */}
          <div className="flex flex-col gap-3 lg:gap-[14px] justify-center items-center w-full lg:w-[70%]">
            <h2 className="text-lg lg:text-[22px] font-bold leading-tight lg:leading-[31px] text-center text-black font-['Manrope']">
              Why?
            </h2>
            <h3 className="text-[32px] lg:text-[54px] font-bold leading-tight lg:leading-[73px] text-center text-black font-['Manrope'] w-full">
              Why Our Mental Health Consultants are the Best Choice
            </h3>
          </div>

          {/* Features Grid */}
          <div className="flex flex-col lg:flex-row justify-start items-center gap-8 lg:gap-0 w-full">
            {features?.map((feature, index) => (
              <div 
                key={index}
                className={`flex flex-col gap-8 lg:gap-[50px] justify-center items-center w-full lg:w-[28%] ${index === 1 ? 'lg:w-[34%] lg:mx-[1%]' : ''} h-auto lg:h-[650px] p-8 lg:p-[80px_56px] ${feature?.borderStyle} ${feature?.bgStyle}`}
              >
                <img 
                  src={feature?.icon} 
                  alt={feature?.title} 
                  className={`w-[100px] lg:w-[${index === 1 ? '200px' : '130px'}] h-[100px] lg:h-[${index === 1 ? '200px' : '130px'}]`}
                />
                <div className="flex flex-col gap-2 lg:gap-[12px] justify-center items-center w-full">
                  <h4 className={`text-xl lg:text-[${index === 1 ? '35px' : '28px'}] font-bold leading-tight lg:leading-[${index === 1 ? '48px' : '39px'}] text-center font-['Manrope'] ${feature?.textColor || 'text-[#1a1a1a]'}`}>
                    {feature?.title}
                  </h4>
                  <p className={`text-base lg:text-[18px] font-normal leading-tight lg:leading-[27px] text-center font-['Poppins'] w-full ${feature?.textColor || 'text-black'}`}>
                    {feature?.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;
