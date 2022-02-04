import React from "react";
import Image from "next/image";
import logo from "../../../public/images/logo.png";
import { MenuIcon } from "@heroicons/react/outline";

const HeaderSection = () => {
  return (
    <>
      <div className='flex justify-between h-18'>
        <div>
          <Image
            src={logo}
            alt='Abhishekh Maharjan Logo'
            width={85}
            height={85}
            // layout='fill'
            objectFit='contain'
          />
        </div>
        <div className='mt-6'>
          <span className='relative inline-flex rounded-md shadow-sm'>
            <button
              type='button'
              className='inline-flex items-center px-4 py-2 border border-green-200  text-base leading-6 font-medium rounded-md text-personal_blue-text  bg-transparent hover:text-personal_blue-text  hover:shadow-xl active:scale-90 transition duration-150'
            >
              <p className='font-bold'>Blogs</p>
            </button>
            <span className='flex absolute h-3 w-3 top-0 right-0 -mt-1 -mr-1'>
              <span className='animate-ping absolute inline-flex h-full w-full rounded-full bg-yellow-400 opacity-75'></span>
              <span className='relative inline-flex rounded-full h-3 w-3 bg-yellow-500'></span>
            </span>
          </span>
        </div>
      </div>
    </>
  );
};

export default HeaderSection;
