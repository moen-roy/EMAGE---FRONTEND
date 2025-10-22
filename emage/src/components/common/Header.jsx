import React, { useState } from 'react';
import Button from '../ui/Button';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="w-full">
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4 lg:py-6">
          {/* Logo Section */}
          <div className="flex items-center gap-3 lg:gap-[14px]">
            <img 
              src="/images/img_path28.png" 
              alt="EMAGE Logo" 
              className="w-[40px] h-[40px] lg:w-[50px] lg:h-[50px]"
            />
            <h1 className="text-xl lg:text-[28px] font-bold leading-tight lg:leading-[39px] text-[#1a1a1a] font-['Manrope']">
              EMAGE
            </h1>
          </div>

          {/* Hamburger Menu Icon (Mobile only) */}
          <button 
            className="block lg:hidden p-2" 
            aria-label="Open menu"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <svg className="w-6 h-6 text-[#1a1a1a]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>

          {/* Navigation Menu */}
          <nav className={`${menuOpen ? 'block' : 'hidden'} lg:block absolute lg:relative top-full lg:top-auto left-0 lg:left-auto w-full lg:w-auto bg-white lg:bg-transparent shadow-lg lg:shadow-none z-50 lg:z-auto`}>
            <div className="flex flex-col lg:flex-row items-center gap-4 lg:gap-[50px] p-4 lg:p-0">
              <button 
                role="menuitem"
                className="text-base lg:text-[18px] font-semibold lg:font-semibold leading-tight lg:leading-[27px] text-[#1a1a1a] font-['Poppins'] hover:text-[#ec744a] transition-colors w-full lg:w-auto text-center lg:text-left py-2 lg:py-0"
              >
                Home
              </button>
              <button 
                role="menuitem"
                className="text-base lg:text-[18px] font-normal leading-tight lg:leading-[27px] text-[#1a1a1a] font-['Poppins'] hover:text-[#ec744a] transition-colors w-full lg:w-auto text-center lg:text-left py-2 lg:py-0"
              >
                About
              </button>
              <button 
                role="menuitem"
                className="text-base lg:text-[18px] font-normal leading-tight lg:leading-[27px] text-[#1a1a1a] font-['Poppins'] hover:text-[#ec744a] transition-colors w-full lg:w-auto text-center lg:text-left py-2 lg:py-0"
              >
                Services
              </button>
              <button 
                role="menuitem"
                className="text-base lg:text-[18px] font-normal leading-tight lg:leading-[27px] text-[#1a1a1a] font-['Poppins'] hover:text-[#ec744a] transition-colors w-full lg:w-auto text-center lg:text-left py-2 lg:py-0"
              >
                Page
              </button>
            </div>
          </nav>

          {/* Contact Button */}
          <div className="hidden lg:block">
            <Button 
              text="Contact Us"
              className="px-6 lg:px-[34px] py-2 lg:py-[12px]"
              layout_width="auto"
              padding="medium"
              position="relative"
              margin="none"
              variant="primary"
              size="medium"
              onClick={() => {}}
            />
          </div>
        </div>

        {/* Mobile Contact Button */}
        <div className={`${menuOpen ? 'block' : 'hidden'} lg:hidden pb-4`}>
          <Button 
            text="Contact Us"
            className="w-full px-6 py-3"
            layout_width="full"
            padding="medium"
            position="relative"
            margin="none"
            variant="primary"
            size="medium"
            onClick={() => {}}
          />
        </div>
      </div>
    </header>
  );
};

export default Header;