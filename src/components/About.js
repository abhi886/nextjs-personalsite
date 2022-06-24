import React from "react";
import { useState, useEffect, useRef } from "react";

import Image from "next/image";

import AnimateText from "./AnimateText";
import { ref } from "yup";
function About({ useOnScreen, profile }) {
  const [ref, visible] = useOnScreen({ rootMargin: "-10px" });
  const { blogImage } = profile[0].fields;
  return (
    <section ref={ref} id='about' className=' pb-20 lg:mx-48'>
      {visible && <AnimateText headingCount={1} mainHeading={"About Me"} />}
      <div className='grid grid-cols-1 xl:grid-cols-3'>
        <div className='pt-16 h-72 '>
          <div className='relative h-44 w-44  md:w-60 md:h-60 xl:w-72 xl:h-72 m-auto lg:m-0'>
            <div className='absolute top-4 left-4 w-44 h-44 rounded-2xl md:left-2 md:top-2   md:w-60 md:h-60 xl:w-72 xl:h-72 border border-personal_blue-text '></div>

            <div className='absolute w-44 h-44 rounded-2xl md:w-60 md:h-60 xl:w-72 xl:h-72 bg-personal_blue-text bg-opacity-25 z-50 '></div>
            <div className='absolute w-44 h-44 md:w-60 md:h-60 xl:w-72 xl:h-72 '>
              <Image
                className='rounded-2xl object-cover'
                src={`https:${blogImage.fields.file.url}`}
                alt='Abhishekh Maharjans Photo'
                layout='fill'
              />
            </div>
          </div>
        </div>
        <div className='md:pt-14 text-personal_blue-textParagraph lg:col-span-2'>
          <p className='text-base '>
            Hello! My name is Abhishekh, I'm a Software Engineer with a passion
            for solving problems and learning new things. I have a strong
            background that encompasses diverse aspects of Software Engineering.
            I'm Seeking to heighten my experience towards becoming a Full Stack
            Software Engineer. My programming acumen includes: <br /> <br />
            <span className='text-personal_blue-text'>
              {" "}
              My current set of toolbox:
            </span>
            <br /> <br />
            React.js with typescript, Next.js, Node.js, npm , Express.js,
            MongoDB, MySQL, HTML5 & CSS3, Bootstrap, React-Bootstrap, Tailwind,
            Styled-Components, contentFul, shopify, graphQl, firebase, Docker,
            Babel, Git, Github, postman, Visual Studio Code, Heroku, Jest Unit
            Testing
            <br /> <br />
            <span className='text-personal_blue-text'>
              My future plans in learning:{" "}
            </span>
            <br /> <br />
            React Native, GatsbyJS, GraphQL, AWS Lambda, AWS Amplify, Google
            Cloud Platform, Kubernetes, Webpack <br /> <br />{" "}
            <span className='text-personal_blue-text'>
              I have also worked using the following set of toolbox{" "}
            </span>{" "}
            <br /> <br />
            Php, Code Ignitor, Laravel, Wordpress, Woocoommerce, jquery, XAMPP,
            CPanel, Sublime Text Editor
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
