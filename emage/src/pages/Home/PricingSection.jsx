import React from 'react';
import Button from '../../components/ui/Button';
import CheckBox from '../../components/ui/CheckBox';

const PricingSection = () => {
  const packages = [
    {
      name: 'Basic',
      price: '$8.99',
      period: 'Month',
      description: 'Lorem ipsum dolor sit amet consectetur.',
      isSelected: true,
      bgStyle: 'bg-[linear-gradient(270deg,#007d6e_0%,_#5eb47c_100%)]',
      textColor: 'text-white',
      borderStyle: 'rounded-[30px]'
    },
    {
      name: 'Standard',
      price: '$16.99',
      period: 'Month',
      description: 'Lorem ipsum dolor sit amet consectetur.',
      isSelected: false,
      bgStyle: 'bg-transparent',
      textColor: 'text-[#1a1a1a]',
      borderStyle: 'border-2 border-black rounded-[30px]'
    },
    {
      name: 'Premium',
      price: '$39.99',
      period: 'Month',
      description: 'Lorem ipsum dolor sit amet consectetur.',
      isSelected: false,
      bgStyle: 'bg-transparent',
      textColor: 'text-[#1a1a1a]',
      borderStyle: 'border-2 border-black rounded-[30px]'
    }
  ];

  return (
    <section className="w-full mt-32 lg:mt-[200px]">
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-32 lg:gap-[200px] justify-start items-center w-full lg:w-[82%] mx-auto">
          {/* Pricing Section */}
          <div className="flex flex-col gap-12 lg:gap-[80px] justify-start items-center w-full">
            {/* Section Header */}
            <div className="flex flex-col gap-3 lg:gap-[14px] justify-center items-center w-full lg:w-[70%]">
              <h2 className="text-lg lg:text-[22px] font-bold leading-tight lg:leading-[31px] text-left text-black font-['Manrope']">
                Pricing
              </h2>
              <h3 className="text-[32px] lg:text-[54px] font-bold leading-tight lg:leading-[73px] text-center text-black font-['Manrope'] w-full">
                Choose of Mental Health Consultation Packages for Your Needs
              </h3>
            </div>

            {/* Pricing Cards */}
            <div className="flex flex-col gap-8 lg:gap-[50px] w-full">
              {packages?.map((pkg, index) => (
                <div key={index} className={`flex flex-col gap-4 lg:gap-[20px] justify-start items-end w-full ${index === 0 ? 'h-auto' : ''}`}>
                  <div className={`flex flex-col lg:flex-row justify-end items-center w-full ${pkg?.bgStyle} ${pkg?.borderStyle} p-6 lg:p-[40px]`}>
                    <CheckBox 
                      checked={pkg?.isSelected}
                      className="self-start lg:self-center mb-4 lg:mb-0 lg:mr-4"
                      layout_width="auto"
                      position="relative"
                      variant="default"
                      size="medium"
                      onChange={() => {}}
                      name={`package-${index}`}
                      id={`package-${index}`}
                      label=""
                    />
                    <div className="flex flex-col lg:flex-row justify-center items-center w-full gap-4 lg:gap-0">
                      <div className="flex flex-col gap-2 lg:gap-[14px] justify-start items-start w-full lg:w-[80%]">
                        <h4 className={`text-2xl lg:text-[${index === 0 ? '43px' : '22px'}] font-bold leading-tight lg:leading-[${index === 0 ? '59px' : '31px'}] text-center ${pkg?.textColor} font-['Manrope']`}>
                          {pkg?.name}
                        </h4>
                        <p className={`text-base lg:text-[18px] font-normal leading-tight lg:leading-[27px] text-left ${pkg?.textColor} font-['Poppins'] w-full lg:w-[22%]`}>
                          {pkg?.description}
                        </p>
                      </div>
                      <div className={`text-[32px] lg:text-[54px] font-bold leading-tight lg:leading-[74px] text-center ${pkg?.textColor} font-['Manrope']`}>
                        <span>{pkg?.price}/</span>
                        <span className="text-lg lg:text-[22px] leading-tight lg:leading-[30px]">{pkg?.period}</span>
                      </div>
                    </div>
                  </div>
                  {index === 0 && (
                    <Button 
                      text="See pricing"
                      className="px-6 lg:px-[34px] py-2 lg:py-[12px] mt-4"
                      layout_width="auto"
                      padding="medium"
                      position="relative"
                      margin="none"
                      variant="primary"
                      size="medium"
                      onClick={() => {}}
                    />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;