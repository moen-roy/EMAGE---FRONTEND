import React from 'react';

const StatsSection = () => {
  const stats = [
    { label: 'Experienced', value: '8 +' },
    { label: 'Teams', value: '122 +' },
    { label: 'Clients', value: '563 +' },
    { label: 'Project Done', value: '232 +' }
  ];

  return (
    <section className="w-full bg-[linear-gradient(270deg,#007d6e_0%,_#5eb47c_100%)]">
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-[13px] sm:py-[19px] lg:py-[26px]">
        <div className="flex flex-col sm:flex-row justify-center items-center w-full gap-6 sm:gap-[157px] lg:gap-[314px]">
          
          {stats?.map((stat, index) => (
            <div key={index} className="flex flex-col gap-[2px] sm:gap-[3px] lg:gap-[4px] justify-center items-center w-auto">
              <p className="text-[18px] sm:text-[20px] lg:text-[22px] font-bold leading-[26px] sm:leading-[28px] lg:leading-[31px] text-left text-white font-['Manrope']">
                {stat?.label}
              </p>
              <p className="text-[34px] sm:text-[51px] lg:text-[68px] font-extrabold leading-[46px] sm:leading-[70px] lg:leading-[93px] text-left text-white font-['Manrope']">
                {stat?.value}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;