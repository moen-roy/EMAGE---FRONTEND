import React from 'react';
import Button from '../../components/ui/Button';
import EditText from '../../components/ui/EditText';

const NewsletterSection = () => {
  return (
    <section 
      className="w-full mt-32 lg:mt-[200px] bg-cover bg-center relative"
      style={{ backgroundImage: "url('/images/img_group_11.png')" }}
    >
      <div className="w-full bg-[linear-gradient(270deg,#007d6e_0%,_#5eb47c_100%)]">
        <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-[98px]">
          <div className="flex justify-center items-center w-full">
            <div className="flex flex-col gap-10 lg:gap-[64px] justify-start items-center w-full lg:w-[64%] pb-2 lg:pb-[8px]">
              {/* Header */}
              <h2 className="text-[34px] lg:text-[68px] font-extrabold leading-tight lg:leading-[93px] text-center text-white font-['Manrope']">
                Join To Our Newsletter
              </h2>
              
              {/* Description */}
              <p className="text-base lg:text-[18px] font-normal leading-tight lg:leading-[27px] text-center text-white font-['Poppins'] w-full">
                Lorem ipsum dolor sit amet consectetur. Convallis est urna adipiscing fringilla nulla diam lorem non mauris. Ultrices aliquet at quam adipiscing feugiat interdum mattis. Placerat donec risus diam sed et. A in ullamcorper ipsum.
              </p>

              {/* Newsletter Form */}
              <div className="flex flex-col sm:flex-row justify-center items-center w-full gap-4 sm:gap-0 px-6 lg:px-[48px]">
                <EditText 
                  placeholder="Your email"
                  className="w-full sm:flex-1 mr-0 sm:mr-1"
                  layout_width="100%"
                  padding="12px"
                  position="relative"
                  variant="outlined"
                  size="medium"
                  value=""
                  onChange={() => {}}
                  name="email"
                  id="newsletter-email"
                />
                <Button 
                  text="Subscribe Us"
                  text_font_size="22"
                  border_border_radius="0px 34px 0px 34px"
                  className="w-full sm:w-auto px-6 lg:px-[34px] py-3 lg:py-[16px]"
                  layout_width="auto"
                  padding="16px 34px"
                  position="relative"
                  margin="0"
                  variant="primary"
                  size="large"
                  onClick={() => {}}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSection;