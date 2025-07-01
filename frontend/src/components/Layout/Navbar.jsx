


import React from 'react';
import { TbBrandMeta } from 'react-icons/tb';
import { IoLogoInstagram } from 'react-icons/io';
import { RiTwitterXLine } from 'react-icons/ri';

const Navbar = () => {
  return (
    <div className="bg-blue-600 text-white text-sm py-2">
      <div className="container mx-auto flex justify-between items-center px-4">
        {/* Left - Social Icons */}
        <div className="hidden sm:flex items-center space-x-4">
          <a href="#" className="hover:text-gray-300">
            <TbBrandMeta className="h-5 w-5" />
          </a>
          <a href="#" className="hover:text-gray-300">
            <IoLogoInstagram className="h-5 w-5" />
          </a>
          <a href="#" className="hover:text-gray-300">
            <RiTwitterXLine className="h-5 w-5" />
          </a>
        </div>

        {/* Center - Text */}
        <div className="text-center w-full sm:w-auto">
          <span>We ship worldwide - Fast and reliable shipping</span>
        </div>

        {/* Right - Phone number */}
        <div className="hidden sm:block">
          <a href="tel:+1234567890" className="hover:text-gray-300">
            +1 (234) 567-890
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
