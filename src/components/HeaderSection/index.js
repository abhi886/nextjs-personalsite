import React from "react";
import Image from "next/image";
import Link from "next/link";
import { MenuIcon } from "@heroicons/react/outline";
import Router from "next/router";

const HeaderSection = ({ logo, layout }) => {
  // const logoWidth = (layout === "LandingPageLayout") ? "58" : "70";
  // const logoHeight = (layout === "LandingPageLayout") ? "58" : "70";

  return (
    <header className='sticky top-0 z-50 px-4 pt-2 flex justify-between h-18 bg-personal_blue lg:px-44 '>
      <div className=''>
        <Link href='/'>
          <a>
            <Image
              src={logo}
              alt='Abhishekh Maharjan Logo'
              width={58}
              height={58}
              objectFit='contain'
            />
          </a>
        </Link>
      </div>
      <div className='mt-1'>
        {layout === "LandingPageLayout" ? (
          <span className='relative inline-flex rounded-md shadow-sm'>
            <button
              onClick={() => {
                Router.push("/blogs");
              }}
              type='button'
              className='inline-flex items-center px-4 py-2 border border-green-200  text-base leading-6 font-medium rounded-md text-personal_blue-text  bg-transparent hover:text-personal_blue-text  hover:shadow-xl active:scale-90 transition duration-150'
            >
              <p className='font-bold'>Blogs</p>
            </button>
            <span className='flex absolute h-3 w-3 top-0 right-0 -mt-1 -mr-1'>
              <span className='animate-ping absolute inline-flex h-full w-full rounded-full bg-green-300 opacity-75'></span>
              <span className='relative inline-flex rounded-full h-3 w-3 bg-green-600'></span>
            </span>
          </span>
        ) : (
          <span className='relative inline-flex rounded-md shadow-sm'>
            <button
              onClick={() => {
                Router.push("/blogs");
              }}
              type='button'
              className='inline-flex items-center px-4 py-2 border border-personal_blue-textParagraph  text-base leading-6 font-medium rounded-md text-white bg-transparent hover:text-personal_blue-textParagraph hover:shadow-xl active:scale-90 transition duration-150'
            >
              <p className='font-bold'>Blogs</p>
            </button>
            <span className='flex absolute h-3 w-3 top-0 right-0 -mt-1 -mr-1'>
              <span className='animate-ping absolute inline-flex h-full w-full rounded-full bg-personal_blue-textParagraph opacity-75'></span>
              <span className='relative inline-flex rounded-full h-3 w-3 bg-personal_blue-textParagraph'></span>
            </span>
          </span>
        )}
      </div>
    </header>
  );
};

export default HeaderSection;
