/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable react/prop-types */
import React from 'react';
import Typed from 'react-typed';
import { ChevronDownIcon } from '@heroicons/react/outline';
import Social from '../Social';

function HeroSection({ aboutData }) {
  const {
    fullName,
    location,
    position,
    facebookLink,
    githubLink,
    linkedinLink,
  } = aboutData;
  return (
    <section className="relative h-screen dark:bg-personal_blue">
      <article className="absolute top-1/4 w-full text-center">
        <h1 className="dark:text-personal_blue-textTitle font-extrabold text-4xl stroke-2 md:font-extrabold md:text-6xl animate-fade-in-up">
          I&apos;m&nbsp;
          {fullName}.
        </h1>
        <div className="grid grid-cols-2 p-3">
          <div className="text-right">
            <h2 className="font-medium dark:text-personal_blue-textTitle">
              Based in {location}.
            </h2>
          </div>
          <div className="text-left">
            <Typed
              className="font-medium pl-2 dark:text-gray-300"
              strings={position}
              typeSpeed={100}
              backSpeed={50}
              loop
            />
          </div>
        </div>

        <div className="space-x-2" aria-label="Contact Me">
          <a href="#contact">
            <button
              type="button"
              className="w-32 dark:text-personal_blue-text bg-transparent px-3 py-3 shadow-md rounded-full border-2 dark:border-personal_blue-text font-bold my-3 hover:shadow-xl active:scale-90 transition duration-150"
            >
              Contact Me
            </button>
          </a>

          <a
            href="/files/Abhishekh_maharjan.pdf"
            aria-label="Download Resume"
            download
          >
            {' '}
            <button
              type="button"
              className="w-32 dark:text-personal_blue-text bg-transparent px-4 py-3 shadow-md rounded-full border-2 dark:border-personal_blue-text  font-bold my-3 hover:shadow-xl active:scale-90 transition duration-150"
            >
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
      <article className="absolute -ml-4  bottom-20 left-2/4 h-10 bg-transparent dark:text-white">
        <a
          href="#about"
          aria-label="Down button to navigate to the aboute section"
        >
          {' '}
          <ChevronDownIcon className="h-10 animate-bounce cursor-pointer" />
        </a>
      </article>
    </section>
  );
}

export default HeroSection;
