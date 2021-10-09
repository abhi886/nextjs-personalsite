import React from "react";
import Image from "next/image";
import logo from "../../public/images/logo.png";
import background from "../../public/images/background.jpeg";

import { ChevronDownIcon } from "@heroicons/react/outline";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookSquare,
  faLinkedin,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";

function HeroSection() {
  return (
    <section className='relative h-screen '>
      <Image src={background} objectFit='cover' layout='fill' />
      <div className='flex justify-between p-10'>
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
              className='inline-flex items-center px-4 py-2 border border-white text-base leading-6 font-medium rounded-md text-white bg-transparent hover:text-yellow-500 hover:shadow-xl active:scale-90 transition duration-150'
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
      <div className='absolute top-1/3 w-full text-center'>
        {" "}
        <h1 className='text-white font-extrabold text-4xl stroke-2 md:font-extrabold md:text-6xl'>
          I'm Abhishekh Maharjan.
        </h1>
        <h2 className='font-medium p-6 text-gray-300'>
          <span className='text-gray-400'>Based on Canberra. </span> Front-end
          Developer with an ambition of becoming a FULL Stack Developer.{" "}
        </h2>
        {/* <p className='font-medium p-2 text-gray-100'>Software Engineer</p> */}
        {/* Social Icons */}
        <div className=' text-center space-x-6'>
          <FontAwesomeIcon
            icon={("fab", faFacebookSquare)}
            size='2x'
            // color='#3b5998'
            color='#ffffff'
          />
          <FontAwesomeIcon
            icon={("fab", faLinkedin)}
            size='2x'
            // color='#0e76a8'
            color='#ffffff'
          />
          <FontAwesomeIcon
            icon={("fab", faGithub)}
            size='2x'
            // color='#4078c0'
            color='#ffffff'
          />
        </div>
        <div className='space-x-2'>
          <button className='text-black bg-white px-3 py-3 shadow-md rounded-full font-bold my-3 hover:shadow-xl active:scale-90 transition duration-150'>
            Contact Me
          </button>
          <button className='text-black bg-white px-4 py-3 shadow-md rounded-full font-bold my-3 hover:shadow-xl active:scale-90 transition duration-150'>
            Resume
          </button>
        </div>
      </div>
      {/* scrollDown Button */}
      <div className='absolute bottom-6 left-1/2 h-10 border-2 bg-transparent rounded-full text-white'>
        <ChevronDownIcon className='h-10' />
      </div>
    </section>
  );
}

export default HeroSection;
