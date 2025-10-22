import React from 'react';

const Footer = () => {
  return (
    <footer className="w-full bg-[linear-gradient(270deg,#007d6e_0%,_#5eb47c_100%)]">
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-[82px]">
        <div className="flex flex-col items-center w-full">
          {/* Main Footer Content */}
          <div className="flex flex-col lg:flex-row justify-between items-start w-full gap-8 lg:gap-0">
            
            {/* Logo and Description */}
            <div className="flex flex-col gap-6 lg:gap-[30px] items-start w-full lg:w-1/5">
              <img 
                src="/images/img_footer_logo.png" 
                alt="Footer Logo" 
                className="w-[150px] lg:w-[190px] h-auto"
              />
              <p className="text-base lg:text-[18px] font-normal leading-tight lg:leading-[27px] text-white font-['Poppins'] w-full">
                Lorem ipsum dolor sit amet consectetur. Convallis est urna.
              </p>
            </div>

            {/* Services Section */}
            <div className="flex flex-col gap-4 lg:gap-[24px] items-start w-full lg:w-auto">
              <h3 className="text-xl lg:text-[28px] font-bold leading-tight lg:leading-[39px] text-white font-['Manrope']">
                Services
              </h3>
              <ul className="flex flex-col gap-3 lg:gap-[14px] items-start">
                <li>
                  <a 
                    href="#" 
                    className="text-base lg:text-[18px] font-normal leading-tight lg:leading-[27px] text-white font-['Poppins'] hover:text-[#fcf8f4] transition-colors"
                  >
                    Psychotherapy
                  </a>
                </li>
                <li>
                  <a 
                    href="#" 
                    className="text-base lg:text-[18px] font-normal leading-tight lg:leading-[27px] text-white font-['Poppins'] hover:text-[#fcf8f4] transition-colors"
                  >
                    Mental Counseling
                  </a>
                </li>
                <li>
                  <a 
                    href="#" 
                    className="text-base lg:text-[18px] font-normal leading-tight lg:leading-[27px] text-white font-['Poppins'] hover:text-[#fcf8f4] transition-colors"
                  >
                    Support Groups
                  </a>
                </li>
                <li>
                  <a 
                    href="#" 
                    className="text-base lg:text-[18px] font-normal leading-tight lg:leading-[27px] text-white font-['Poppins'] hover:text-[#fcf8f4] transition-colors"
                  >
                    Case Management
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact Section */}
            <div className="flex flex-col gap-4 lg:gap-[20px] items-start w-full lg:w-auto">
              <h3 className="text-xl lg:text-[28px] font-bold leading-tight lg:leading-[39px] text-white font-['Manrope']">
                Contact
              </h3>
              <div className="flex flex-col gap-4 lg:gap-[20px]">
                <div className="flex items-center gap-4 lg:gap-[20px]">
                  <img 
                    src="/images/img_call.svg" 
                    alt="Phone" 
                    className="w-6 lg:w-[32px] h-6 lg:h-[32px]"
                  />
                  <span className="text-base lg:text-[18px] font-normal leading-tight lg:leading-[27px] text-white font-['Poppins']">
                    +254 7464 8272
                  </span>
                </div>
                <div className="flex items-center gap-4 lg:gap-[20px]">
                  <img 
                    src="/images/img_message.svg" 
                    alt="Email" 
                    className="w-6 lg:w-[32px] h-6 lg:h-[32px]"
                  />
                  <span className="text-base lg:text-[18px] font-normal leading-tight lg:leading-[27px] text-white font-['Poppins']">
                    info@emage.com
                  </span>
                </div>
                <div className="flex items-center gap-4 lg:gap-[20px]">
                  <img 
                    src="/images/img_location.svg" 
                    alt="Location" 
                    className="w-6 lg:w-[32px] h-6 lg:h-[32px]"
                  />
                  <span className="text-base lg:text-[18px] font-normal leading-tight lg:leading-[27px] text-white font-['Poppins']">
                    Nairobi,Kenya
                  </span>
                </div>
              </div>
            </div>

            {/* Links Section */}
            <div className="flex flex-col gap-4 lg:gap-[24px] items-start w-full lg:w-auto">
              <h3 className="text-xl lg:text-[28px] font-bold leading-tight lg:leading-[39px] text-white font-['Manrope']">
                Links
              </h3>
              <ul className="flex flex-col gap-3 lg:gap-[14px] items-start">
                <li>
                  <a 
                    href="#" 
                    className="text-base lg:text-[18px] font-normal leading-tight lg:leading-[27px] text-white font-['Poppins'] hover:text-[#fcf8f4] transition-colors"
                  >
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a 
                    href="#" 
                    className="text-base lg:text-[18px] font-normal leading-tight lg:leading-[27px] text-white font-['Poppins'] hover:text-[#fcf8f4] transition-colors"
                  >
                    Term Of Use
                  </a>
                </li>
              </ul>
            </div>

            {/* Maps Section */}
            <div className="flex flex-col gap-4 lg:gap-[22px] items-start w-full lg:w-auto">
              <h3 className="text-xl lg:text-[28px] font-bold leading-tight lg:leading-[39px] text-white font-['Manrope']">
                Maps
              </h3>
              <img 
                src="/images/img_rectangle_69.png" 
                alt="Map Location" 
                className="w-full lg:w-[188px] h-[80px] lg:h-[120px] object-cover rounded"
              />
            </div>
          </div>

          {/* Divider Line */}
          <div className="w-full h-[2px] lg:h-[3px] bg-white mt-12 lg:mt-[60px]"></div>

          {/* Social Media and Copyright */}
          <div className="flex flex-col lg:flex-row items-center justify-center gap-4 lg:gap-[10px] mt-8 lg:mt-[56px] w-full lg:w-auto">
            <div className="w-[120px] lg:w-[150px] h-[24px] lg:h-[30px] bg-[linear-gradient(270deg,#007d6e_0%,_#5eb47c_100%)] rounded-full lg:rounded-[74px]"></div>
            <button className="w-[24px] lg:w-[30px] h-[24px] lg:h-[30px] bg-[#fcf8f4] rounded-[10px] lg:rounded-[14px] p-1 lg:p-[6px] hover:bg-opacity-90 transition-colors">
              <img 
                src="/images/img_mdi_linkedin.png" 
                alt="LinkedIn" 
                className="w-full h-full object-contain"
              />
            </button>
          </div>

          {/* Copyright */}
          <p className="text-base lg:text-[18px] font-normal leading-tight lg:leading-[27px] text-white font-['Poppins'] text-center mt-6 lg:mt-[30px]">
            copyright 2025 @emage all right reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;