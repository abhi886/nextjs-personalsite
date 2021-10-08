import React from "react";
import Image from "next/image";
import logo from "../../public/images/logoBlack.png";
import { ChevronDownIcon } from "@heroicons/react/outline";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookSquare,
  faLinkedin,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";

function HeroSection() {
  return (
    <section className='h-screen relative'>
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
              className='inline-flex items-center px-4 py-2 border border-purple-400 text-base leading-6 font-medium rounded-md text-purple-800 bg-white hover:text-purple-700 hover:shadow-xl active:scale-90 transition duration-150'
            >
              <p className='font-bold'>Blogs</p>
            </button>
            <span className='flex absolute h-3 w-3 top-0 right-0 -mt-1 -mr-1'>
              <span className='animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75'></span>
              <span className='relative inline-flex rounded-full h-3 w-3 bg-purple-500'></span>
            </span>
          </span>
        </div>
      </div>
      <div className='absolute top-1/3 w-full text-center'>
        {" "}
        <h1 className='font-extrabold text-4xl md:font-extrabold ma:text-6xl'>
          I'm Abhishekh Maharjan.
        </h1>
        <h2 className='font-medium p-2'>
          <span>Based on Canberra. </span> Front-end Developer | Back-end
          Developer | Full Stack Developer{" "}
        </h2>
        <p>Software Engineer</p>
        <button className='text-purple-500 bg-white px-10 py-4 shadow-md rounded-full font-bold my-3 hover:shadow-xl active:scale-90 transition duration-150'>
          Contact Me
        </button>
        {/* Social Icons */}
        <div className=' text-center space-x-6'>
          <FontAwesomeIcon
            icon={("fab", faFacebookSquare)}
            size='2x'
            color='#3b5998'
          />
          <FontAwesomeIcon
            icon={("fab", faLinkedin)}
            size='2x'
            color='#0e76a8'
          />
          <FontAwesomeIcon icon={("fab", faGithub)} size='2x' color='#4078c0' />
        </div>
      </div>
      {/* scrollDown Button */}
      <div className='absolute bottom-6 left-1/2 h-10  bg-purple-400 rounded-full'>
        <ChevronDownIcon className='h-10' />
      </div>
    </section>
  );
}

export default HeroSection;
