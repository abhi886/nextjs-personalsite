/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable react/prop-types */
import React from 'react';
// import Typed from 'react-typed';
import Link from 'next/link';
import Typed from '../Typed.js';
import Social from '../Social';
import Section from '../hoc/withComponentSection';
import ClickToScroll from '../ClickToScroll/index';

function HeroSection({ aboutData }) {
  const {
    fullName,
    location,
    facebookLink,
    githubLink,
    linkedinLink,
    position,
  } = aboutData;
  return (
    <Section id="heroSection">
      <div className="flex flex-col h-full text-center justify-center mt-14">
        <h1 className="dark:text-personal_blue-textTitle font-extrabold text-4xl stroke-2 md:font-extrabold md:text-6xl animate-fade-in-up">
          I&apos;m&nbsp;
          {fullName}.
        </h1>
        <div className="grid grid-rows-2 md:grid-cols-2 h-12 items-center">
          <div className="md:text-right ">
            <h2 className="font-medium dark:text-personal_blue-textTitle">
              Based in {location} &nbsp;
            </h2>
          </div>
          <div className="md:text-left">
            <Typed strings={position} />
          </div>
        </div>

        <div className="space-x-2" aria-label="Contact Me">
          <Link href="/contact">
            <button
              type="button"
              className="w-32 dark:text-personal_blue-text bg-transparent px-2 py-3 shadow-md rounded-full border-2 dark:border-personal_blue-text font-bold my-3 hover:shadow-xl active:scale-90 transition duration-150"
            >
              Contact Me
            </button>
          </Link>

          <Link
            href="/files/Abhishekh_maharjan.pdf"
            aria-label="Download Resume"
            target="__blank"
            download
          >
            {' '}
            <button
              type="button"
              className="w-32 dark:text-personal_blue-text bg-transparent px-4 py-3 shadow-md rounded-full border-2 dark:border-personal_blue-text  font-bold my-3 hover:shadow-xl active:scale-90 transition duration-150"
            >
              Resume
            </button>
          </Link>
        </div>
        {/* Social Icons */}
        <div className="pt-4">
          <Social
            facebookLink={facebookLink}
            githubLink={githubLink}
            linkedinLink={linkedinLink}
          />
        </div>
        <div className="flex justify-center pt-64">
          <ClickToScroll
            linkDownward="#aboutSection"
            tooltipDownMessage="About Me"
          />
        </div>
      </div>
    </Section>
  );
}

export default HeroSection;
