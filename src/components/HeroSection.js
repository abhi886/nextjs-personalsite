import React from "react";
import Image from "next/image";
import logo from "../../public/images/logo.png";
import background from "../../public/images/background.jpeg";
import Typed from "react-typed";

import { ChevronDownIcon } from "@heroicons/react/outline";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookSquare,
  faLinkedin,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";

function HeroSection() {
  return (
    <section className='relative h-screen bg-personal_blue'>
      {/* <Image
        src={background}
        objectFit='cover'
        layout='fill'
        className='bg-blue-500'
      /> */}
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
      <div className='absolute top-1/3 w-full text-center'>
        {" "}
        <h1 className='text-personal_blue-textTitle font-extrabold text-4xl stroke-2 md:font-extrabold md:text-6xl animate-fade-in-up'>
          I'm Abhishekh Maharjan.
        </h1>
        <div className='grid grid-cols-2 p-3'>
          <div className='text-right'>
            <h2 className='font-medium text-personal_blue-textTitle'>
              Based on Canberra.
            </h2>
          </div>
          <div className='text-left'>
            <Typed
              className='font-medium pl-2 text-gray-300'
              strings={[
                "Front-end Developer",
                "Full Stack Developer",
                "Software Engineer",
              ]}
              typeSpeed={100}
              backSpeed={50}
              loop
            />
          </div>
        </div>
        {/* <p className='font-medium p-2 text-gray-100'>Software Engineer</p> */}
        <div className='space-x-2'>
          <button className='text-personal_blue-text bg-transparent px-3 py-3 shadow-md rounded-full border-2 border-personal_blue-text font-bold my-3 hover:shadow-xl active:scale-90 transition duration-150'>
            Contact Me
          </button>
          <button className='text-personal_blue-text bg-transparent px-4 py-3 shadow-md rounded-full border-2 border-personal_blue-text  font-bold my-3 hover:shadow-xl active:scale-90 transition duration-150'>
            Resume
          </button>
        </div>
        {/* Social Icons */}
        <div className=' text-center space-x-6 pt-4'>
          <FontAwesomeIcon
            icon={("fab", faFacebookSquare)}
            size='2x'
            // color='#3b5998'
            color='#ccd6f6'
          />
          <FontAwesomeIcon
            icon={("fab", faLinkedin)}
            size='2x'
            // color='#0e76a8'
            color='#ccd6f6'
          />
          <FontAwesomeIcon
            icon={("fab", faGithub)}
            size='2x'
            // color='#4078c0'
            color='#ccd6f6'
          />
        </div>
      </div>
      {/* scrollDown Button */}
      <div className='absolute bottom-6 left-1/2 h-10 bg-transparent text-white'>
        <ChevronDownIcon className='h-10 animate-bounce' />
      </div>
    </section>
  );
}

export default HeroSection;
