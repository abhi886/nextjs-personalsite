import React from "react";
import Image from "next/image";
import { MenuIcon } from "@heroicons/react/outline";

const HeaderSection = () => {
  return (
    <header>
      {/* Header Section */}
      <div className=' flex items-center bg-white shadow-lg '>
        {/* Name and Logo */}
        <div className='mt-2 flex items-center flex-grow sm:flex-grow-0'>
          <Image
            src='/images/logo-black.png'
            width={70}
            height={70}
            objectFit='contain'
            className='cursor-pointer'
          />
          <span className='font-semibold text-black-500 text-lg'>
            Abhishekh Maharjan
          </span>
        </div>

        {/* Menu Items */}
      </div>
    </header>
  );
};

export default HeaderSection;
