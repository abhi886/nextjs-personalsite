import React, { useRef } from "react";
import background from "../../public/images/background.jpeg";
import resume from "../../public/images/logo.png";
import Typed from "react-typed";
import Link from "next/link";
import HeaderSection from "./HeaderSection";
import Social from "./Social";
import { ChevronDownIcon } from "@heroicons/react/outline";

function HeroSection({
  fullName,
  location,
  position,
  githubLink,
  linkedinLink,
  facebookLink,
}) {
  // console.log(githubLink);
  return (
    <section className='relative h-screen bg-personal_blue'>
      <article className='absolute top-1/4 w-full text-center'>
        <h1 className='text-personal_blue-textTitle font-extrabold text-4xl stroke-2 md:font-extrabold md:text-6xl animate-fade-in-up'>
          I'm {fullName}.
        </h1>
        <div className='grid grid-cols-2 p-3'>
          <div className='text-right'>
            <h2 className='font-medium text-personal_blue-textTitle'>
              Based in {location}.
            </h2>
          </div>
          <div className='text-left'>
            <Typed
              className='font-medium pl-2 text-gray-300'
              strings={position}
              typeSpeed={100}
              backSpeed={50}
              loop
            />
          </div>
        </div>

        <div className='space-x-2' aria-label='Contact Me'>
          <a href='#contact'>
            <button className='w-32 text-personal_blue-text bg-transparent px-3 py-3 shadow-md rounded-full border-2 border-personal_blue-text font-bold my-3 hover:shadow-xl active:scale-90 transition duration-150'>
              Contact Me
            </button>
          </a>

          <a
            href={"/files/Abhishekh_maharjan.pdf"}
            aria-label='Download Resume'
            download
          >
            {" "}
            <button className='w-32 text-personal_blue-text bg-transparent px-4 py-3 shadow-md rounded-full border-2 border-personal_blue-text  font-bold my-3 hover:shadow-xl active:scale-90 transition duration-150'>
              Resume
            </button>
          </a>
        </div>
        {/* Social Icons */}
        <Social
          facebookLink={facebookLink}
          githubLink={githubLink}
          linkedinLink={linkedinLink}
        />
      </article>
      {/* scrollDown Button */}
      <article className='absolute -ml-4  bottom-20 left-2/4 h-10 bg-transparent text-white'>
        <a href='#about'>
          {" "}
          <ChevronDownIcon className='h-10 animate-bounce cursor-pointer' />
        </a>
      </article>
    </section>
  );
}

export default HeroSection;
