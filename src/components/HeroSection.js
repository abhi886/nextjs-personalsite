import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookSquare,
  faLinkedin,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";

function HeroSection() {
  return (
    <div className='h-screen relative'>
      <div className='flex justify-around absolute top-10 right-10'>
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
      <div className='bg-white absolute top-1/3 w-screen text-center'>
        {" "}
        <p className='font-extrabold text-5xl'>Abhishekh Maharjan</p>
        <p className='font-medium'>
          Front-end Developer | BackendDeveloper | Full Stack Developer{" "}
        </p>
        <p>Modern Software Engineer</p>
        <button className='text-purple-500 bg-white px-10 py-4 shadow-md rounded-full font-bold my-3 hover:shadow-xl active:scale-90 transition duration-150'>
          Contact Me
        </button>
        {/* Social Icons */}
        <div className=' text-center space-x-2'>
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
    </div>
  );
}

export default HeroSection;
