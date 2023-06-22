/* eslint-disable react/prop-types */
import React from 'react';
import Image from 'next/image';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import RICHTEXT_OPTIONS from '../../utils/rich-text-options/general-rich-text-options';
import Button from '../Button';

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
              className="rounded-full object-cover  w-56 h-56 lg:h-80 lg:w-80"
              src={`${profileImage.url}`}
              alt="Abhishekh Maharjans Photo"
              width={1280}
              height={720}
              priority
            />
          </div>
        </div>
        <div className="w-full">
          {documentToReactComponents(profile.json, RICHTEXT_OPTIONS)}
          <Button value="MORE ABOUT ME" />
        </div>
      </div>
    </section>
  );
}

export default About;
