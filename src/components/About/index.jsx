/* eslint-disable react/prop-types */
import React from 'react';
import Image from 'next/image';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import RICHTEXT_OPTIONS from '../../utils/rich-text-options/general-rich-text-options';
import Button from '../Button';
import Section from '../hoc/withComponentSection';
import ClickToScroll from '../ClickToScroll';

function About({ profile, profileImage }) {
  return (
    <Section id="aboutSection">
      <div className="flex flex-col h-full justify-center px-4 md:px-20 lg:px-44">
        <div className="container grid grid-cols-1 h-full content-center gap-4 lg:grid-cols-2 m-auto ">
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
            <Button hrefTo="/about" value="MORE ABOUT ME" />
          </div>
        </div>
        <div className="mb-8">
          <ClickToScroll
            linkUpward="#heroSection"
            linkDownward="#featuredBlogSection"
            tooltipDownMessage="My Blogs"
            tooltipUpMessage="About Me"
          />
        </div>
      </div>
    </Section>
  );
}

export default About;
