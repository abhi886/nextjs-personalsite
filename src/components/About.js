import React from "react";
import { useState, useEffect, useRef } from "react";
import { HiArrowRight } from "react-icons/hi";
import Image from "next/image";
import AnimateText from "./AnimateText";
import { ref } from "yup";
import useOnScreen from "../customHooks/useOnScreen";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { BLOCKS, INLINES } from "@contentful/rich-text-types";

const RICHTEXT_OPTIONS = {
  renderNode: {
    [BLOCKS.HEADING_5]: (node, children) => {
      return (
        <p className='text-base text-personal_blue-text leading-10'>
          {children}
        </p>
      );
    },
    [BLOCKS.HEADING_3]: (node, children) => {
      return (
        <p className='text-2xl text-personal_blue-textParagraph leading-10 tracking-wider'>
          {children}
        </p>
      );
    },
    [BLOCKS.HEADING_2]: (node, children) => {
      return (
        <p className='text-xl font-bold text-personal_blue-blue '>{children}</p>
      );
    },
    [BLOCKS.HEADING_1]: (node, children) => {
      return (
        <p className='text-2xl font-extrabold  text-personal_blue-blue mb-4'>
          {children}
        </p>
      );
    },
    [BLOCKS.PARAGRAPH]: (node, children) => {
      return (
        <p className='text-base font-normal text-personal_blue-workBackground'>
          {" "}
          {children}
        </p>
      );
    },
    [INLINES.HYPERLINK]: (node, children) => {
      return (
        <a
          href={node.data.uri}
          className='border-dotted border-b-2 border-personal_blue-text'
        >
          {children}
        </a>
      );
    },
  },
};
function About({ profile, profileImage }) {
  // const [ref, visible] = useOnScreen({ rootMargin: "-10px" });
  return (
    <section
      // ref={ref}
      id='about'
      className='p-8 h-screen  bg-personal_blue border border-white lg:px-44'
    >
      {/* {visible && <AnimateText headingCount={""} mainHeading={"About Me"} />} */}
      <div className='grid grid-cols-1 h-full content-center gap-4 lg:grid-cols-2 mt-4 '>
        <div className='w-full'>
          {documentToReactComponents(profile.json, RICHTEXT_OPTIONS)}

          <div>
            <a href='#contact'>
              <button className='text-personal_blue-text bg-transparent px-3 py-3 rounded-lg border border-personal_blue-text my-3 hover:shadow-lg active:scale-90 transition duration-150 mt-12'>
                MORE ABOUT ME <HiArrowRight className='inline'></HiArrowRight>
              </button>
            </a>
          </div>
        </div>

        <div className='w-96 h-96 border-2 border-dashed rounded-full m-auto'>
          <div className='relative h-80 w-80 m-auto border-2 border-dashed rounded-full mt-8'>
            <Image
              className='rounded-full object-cover'
              src={`${profileImage.url}`}
              alt='Abhishekh Maharjans Photo'
              layout='fill'
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
