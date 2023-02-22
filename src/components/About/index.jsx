/* eslint-disable react/prop-types */
import React from 'react';
import { HiArrowRight } from 'react-icons/hi';
import Image from 'next/image';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import RICHTEXT_OPTIONS from '../../utils/rich-text-general-options';

function About({ profile, profileImage }) {
  return (
    <section
      id="about"
      className="px-4 h-screen  dark:bg-personal_blue md:px-20  lg:px-44"
    >
      <div className="container grid grid-cols-1 h-full content-center gap-4 lg:grid-cols-2  ">
        <div className="w-60 h-60 lg:w-96 lg:h-96 border-2 border-dashed rounded-full m-auto lg:order-last">
          <div className="relative w-56 h-56 lg:h-80 lg:w-80 m-auto border-2 border-dashed rounded-full lg:mt-8 mt-1.5">
            <Image
              className="rounded-full object-cover"
              src={`${profileImage.url}`}
              alt="Abhishekh Maharjans Photo"
              layout="fill"
            />
          </div>
        </div>
        <div className="w-full">
          {documentToReactComponents(profile.json, RICHTEXT_OPTIONS)}

          <div>
            <a href="/about">
              <button
                className="dark:text-personal_blue-text bg-transparent px-2 py-2 text-xs lg:text-base lg:px-3 lg:py-3 rounded-lg border dark:border-personal_blue-text my-3 shadow-md hover:shadow-lg active:scale-90 transition duration-150 mt-8 lg:mt-12"
                type="button"
              >
                MORE ABOUT ME&nbsp;
                <HiArrowRight className="inline" />
              </button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
