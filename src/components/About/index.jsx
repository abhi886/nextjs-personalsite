/* eslint-disable react/prop-types */
import React from 'react';
import { HiArrowRight } from 'react-icons/hi';
import Image from 'next/image';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { BLOCKS, INLINES } from '@contentful/rich-text-types';

const RICHTEXT_OPTIONS = {
  renderNode: {
    [BLOCKS.HEADING_5]: (node, children) => (
      <p className="text-base text-personal_blue-text leading-10">{children}</p>
    ),
    [BLOCKS.HEADING_3]: (node, children) => (
      <p className="text-personal_blue-textParagraph leading-7 tracking-wider lg:text-2xl  lg:leading-10 lg:tracking-wider">
        {children}
      </p>
    ),
    [BLOCKS.HEADING_2]: (node, children) => (
      <p className="text-xl font-bold text-personal_blue-blue ">{children}</p>
    ),
    [BLOCKS.HEADING_1]: (node, children) => (
      <p className="text-2xl font-extrabold  text-personal_blue-blue mb-4">{children}</p>
    ),
    [BLOCKS.PARAGRAPH]: (node, children) => (
      <p className="text-base font-normal text-personal_blue-workBackground">
        {' '}
        {children}
      </p>
    ),
    [INLINES.HYPERLINK]: (node, children) => (
      // eslint-disable-next-line react/destructuring-assignment
      <a href={node.data.uri} className="border-dotted border-b-2 border-personal_blue-text">
        {children}
      </a>
    ),
  },
};
function About({ profile, profileImage }) {
  return (
    <section id="about" className="px-4 h-screen  bg-personal_blue md:px-20  lg:px-44">
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
                className="text-personal_blue-text bg-transparent px-2 py-2 text-xs lg:text-base lg:px-3 lg:py-3 rounded-lg border border-personal_blue-text my-3 hover:shadow-lg active:scale-90 transition duration-150 mt-8 lg:mt-12"
                type="button"
              >
                MORE ABOUT ME
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
