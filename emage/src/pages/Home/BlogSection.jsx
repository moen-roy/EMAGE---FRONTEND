import React from 'react';

const BlogSection = () => {
  const blogPosts = [
    {
      image: '/images/img_image_25.png',
      title: 'How Mental Health Consultants Can Help...',
      excerpt: 'Lorem ipsum dolor sit amet consectetur. Convallis est urna adipiscing fringilla nulla ',
      link: 'See more'
    },
    {
      image: '/images/img_image_26.png',
      title: 'How Mental Health Consultants Can Help...',
      excerpt: 'Lorem ipsum dolor sit amet consectetur. Convallis est urna adipiscing fringilla nulla ',
      link: 'See more'
    },
    {
      image: '/images/img_image_27.png',
      title: 'How Mental Health Consultants Can Help...',
      excerpt: 'Lorem ipsum dolor sit amet consectetur. Convallis est urna adipiscing fringilla nulla ',
      link: 'See more'
    }
  ];

  return (
    <section className="w-full mt-32 lg:mt-[196px]">
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-12 lg:gap-[80px] justify-start items-center w-full max-w-[1616px] mx-auto">
          {/* Section Header */}
          <div className="flex flex-col gap-3 lg:gap-[14px] justify-center items-center w-auto">
            <h2 className="text-lg lg:text-[22px] font-bold leading-tight lg:leading-[31px] text-left text-black font-['Manrope']">
              Blog
            </h2>
            <h3 className="text-[32px] lg:text-[54px] font-bold leading-tight lg:leading-[74px] text-center text-black font-['Manrope']">
              Our Blog For You
            </h3>
          </div>

          {/* Blog Posts Grid */}
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-[50px] w-full">
            {blogPosts?.map((post, index) => (
              <div key={index} className="flex flex-col gap-8 lg:gap-[50px] justify-start items-center w-full lg:w-[498px]">
                <img 
                  src={post?.image} 
                  alt={post?.title} 
                  className="w-full rounded-[30px] h-[300px] lg:h-[462px] object-cover"
                />
                <div className="flex flex-col gap-6 lg:gap-[40px] justify-start items-start w-full pr-4 lg:pr-[24px]">
                  <h4 className="text-2xl lg:text-[35px] font-bold leading-tight lg:leading-[47px] text-left text-black font-['Manrope'] w-full lg:w-[92%]">
                    {post?.title}
                  </h4>
                  <p className="text-base lg:text-[18px] font-normal leading-tight lg:leading-[27px] text-left font-['Poppins'] w-full">
                    <span className="text-black">{post?.excerpt}</span>
                    <span className="text-[#0018f7] font-semibold italic">{post?.link}</span>
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

export default BlogSection;