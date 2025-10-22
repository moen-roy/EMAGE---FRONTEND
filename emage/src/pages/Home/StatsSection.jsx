import React from 'react';

const StatsSection = () => {
  const stats = [
    { label: 'Experienced', value: '8 +', marginLeft: 'ml-0 lg:ml-[18px]' },
    { label: 'Teams', value: '122 +', marginLeft: 'ml-0' },
    { label: 'Clients', value: '563 +', marginLeft: 'ml-0' },
    { label: 'Project Done', value: '232 +', marginLeft: 'ml-0 lg:mr-[18px]' }
  ];

  return (
    <section className="w-full bg-[linear-gradient(270deg,#007d6e_0%,_#5eb47c_100%)] mt-[-2px]">
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-6 lg:py-[26px]">
        <div className="flex flex-col sm:flex-row justify-center items-center gap-8 lg:gap-0 lg:justify-between">
          {stats?.map((stat, index) => (
            <div key={index} className={`flex flex-col gap-1 lg:gap-[4px] justify-center items-start lg:items-${index === 0 ? 'start' : index === 3 ? 'end' : 'start'} ${stat?.marginLeft}`}>
              <h3 className="text-lg lg:text-[22px] font-bold leading-tight lg:leading-[31px] text-white font-['Manrope']">
                {stat?.label}
              </h3>
              <p className="text-[34px] lg:text-[68px] font-extrabold leading-tight lg:leading-[93px] text-white font-['Manrope']">
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