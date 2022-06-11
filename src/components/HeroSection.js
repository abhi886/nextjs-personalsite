import React, { useRef } from "react";
import background from "../../public/images/background.jpeg";
import resume from "../../public/images/logo.png";
import Typed from "react-typed";
// import CV from "../../public/files/Abhishekh_maharjan.pdf";
import Link from "next/link";
import HeaderSection from "./HeaderSection";

import Social from "./Social";

import { ChevronDownIcon } from "@heroicons/react/outline";

function HeroSection() {
  return (
    <section className='relative h-screen bg-personal_blue'>
      <div className='p-4'>
        <HeaderSection />
      </div>
      <div className='absolute top-1/3 w-full text-center'>
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

        <div className='space-x-2'>
          <a href='#contact'>
            <button className='w-32 text-personal_blue-text bg-transparent px-3 py-3 shadow-md rounded-full border-2 border-personal_blue-text font-bold my-3 hover:shadow-xl active:scale-90 transition duration-150'>
              Contact Me
            </button>
          </a>

          <a href={"/files/Abhishekh_maharjan.pdf"} download>
            {" "}
            <button className='w-32 text-personal_blue-text bg-transparent px-4 py-3 shadow-md rounded-full border-2 border-personal_blue-text  font-bold my-3 hover:shadow-xl active:scale-90 transition duration-150'>
              Resume
            </button>
          </a>
        </div>
        {/* Social Icons */}
        <Social />
      </div>
      {/* scrollDown Button */}
      <div className='absolute -ml-4  bottom-6 left-2/4 h-10 bg-transparent text-white'>
        <a href='#about'>
          {" "}
          <ChevronDownIcon className='h-10 animate-bounce cursor-pointer' />
        </a>
      </div>
    </section>
  );
}

export default HeroSection;
