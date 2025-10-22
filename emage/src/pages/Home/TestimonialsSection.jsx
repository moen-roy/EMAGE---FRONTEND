import React from 'react';

const TestimonialsSection = () => {
  const testimonials = [
    {
      image: '/images/img_image_23.png',
      text: 'Lorem ipsum dolor sit amet consectetur. Convallis est urna adipiscing fringilla nulla diam lorem non mauris. Ultrices aliquet at quam adipiscing feugiat interdum mattis. Placerat donec risus diam.',
      author: 'George J - Client',
      bgStyle: 'bg-[linear-gradient(270deg,#007d6e_0%,_#5eb47c_100%)]',
      textColor: 'text-white'
    },
    {
      image: '/images/img_image_24.png',
      text: 'Lorem ipsum dolor sit amet consectetur. Convallis est urna adipiscing fringilla nulla diam lorem non mauris. Ultrices aliquet at quam adipiscing feugiat interdum mattis. Placerat donec risus diam.',
      author: 'George J - Client',
      bgStyle: 'bg-transparent',
      textColor: 'text-[#1a1a1a]',
      borderStyle: 'border border-black'
    }
  ];

  return (
    <section className="w-full">
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row justify-start items-center gap-8 lg:gap-0 w-full">
          {/* Left Content */}
          <div className="flex flex-col gap-3 lg:gap-[16px] justify-start items-start w-full lg:w-[42%] order-2 lg:order-1">
            <h2 className="text-lg lg:text-[22px] font-bold leading-tight lg:leading-[31px] text-left text-black font-['Manrope']">
              Testimonials
            </h2>
            <h3 className="text-[32px] lg:text-[54px] font-bold leading-tight lg:leading-[73px] text-left text-black font-['Manrope'] w-full lg:w-[72%]">
              Healing Words Testimonials from a Mental Health Consultant
            </h3>
          </div>

          {/* Right Testimonials */}
          <div className="flex flex-col lg:flex-row gap-6 lg:gap-[46px] w-full lg:flex-1 order-1 lg:order-2">
            {testimonials?.map((testimonial, index) => (
              <div 
                key={index}
                className={`flex flex-col gap-4 lg:gap-[20px] justify-center items-center w-full lg:w-[430px] h-auto ${testimonial?.bgStyle} ${testimonial?.borderStyle || ''} rounded-[30px] p-8 lg:p-[62px_42px] ${index === 1 ? 'lg:justify-end' : ''}`}
              >
                <div className={`flex flex-col gap-8 lg:gap-[50px] justify-start items-center w-full ${index === 1 ? 'mt-32 lg:mt-[202px]' : ''}`}>
                  <img 
                    src={testimonial?.image} 
                    alt={testimonial?.author} 
                    className="w-[120px] lg:w-[150px] h-[120px] lg:h-[150px] rounded-full object-cover"
                  />
                  <p className={`text-base lg:text-[18px] font-normal leading-tight lg:leading-[27px] text-center ${testimonial?.textColor} font-['Poppins'] w-full ${index === 1 ? 'mb-8 lg:mb-[54px]' : ''}`}>
                    {testimonial?.text}
                  </p>
                </div>
                <h4 className={`text-lg lg:text-[22px] font-bold leading-tight lg:leading-[31px] text-left ${testimonial?.textColor} font-['Manrope'] ${index === 1 ? 'mt-[-34px]' : ''}`}>
                  {testimonial?.author}
                </h4>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;