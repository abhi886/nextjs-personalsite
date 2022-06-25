import React from "react";
import { useState, useEffect, useRef } from "react";
import { HiArrowCircleRight } from "react-icons/hi";
import Image from "next/image";
import AnimateText from "./AnimateText";
import { ref } from "yup";

const AboutComponentAcumen = {
  AboutAcumen: function AboutAcumen({ heading, content }) {
    return (
      <>
        <div className='flex items-center text-personal_blue-text'>
          <HiArrowCircleRight />
          <p>&nbsp;{heading}</p>
        </div>
        <br />
        {content}
        <br /> <br />
      </>
    );
  },
  aboutData: [
    {
      heading: "My current set of toolbox",
      content:
        "React.js with typescript, Next.js," +
        "Node.js, npm , Express.js, MongoDB,MySQL, HTML5 &amp; CSS3, Bootstrap, React-Bootstrap, Tailwind, Styled-Components," +
        "contentFul, shopify, graphQl, firebase, Docker," +
        "Babel, Git, Github, postman, Visual Studio Code, Heroku, Jest Unit Testing",
    },
    {
      heading: "My current set of toolbox",
      content:
        " React Native, GatsbyJS, GraphQL, AWS Lambda, AWS Amplify, Google Cloud Platform, Kubernetes, Webpack",
    },
    {
      heading: "Technologies I have worked with in the past",
      content:
        " Php, Code Ignitor, Laravel, Wordpress, Woocoommerce, jquery, XAMPP, CPanel, Sublime Text Editor",
    },
  ],
};
function About({ useOnScreen, profile }) {
  const [ref, visible] = useOnScreen({ rootMargin: "-10px" });
  const { blogImage } = profile[0].fields;
  return (
    <section ref={ref} id='about' className=' pb-20 lg:mx-48'>
      {visible && (
        <AnimateText headingCount={1} mainHeading={"Abhishekh Maharjan"} />
      )}
      <div className='grid grid-cols-1 xl:grid-cols-3'>
        <div className='pt-16 h-72 '>
          <div className='relative h-44 w-44  md:w-60 md:h-60 xl:w-72 xl:h-72 m-auto lg:m-0'>
            <div className='absolute top-4 left-4 w-44 h-44 rounded-2xl md:left-2 md:top-2   md:w-60 md:h-60 xl:w-72 xl:h-72 border border-personal_blue-text'></div>
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
            Hello there !! I am a Software Engineer with a passion for solving
            problems and learning new things. I build things to help people and
            community. My programming acumen includes: <br /> <br />
            {AboutComponentAcumen.aboutData.map((about) => {
              return (
                <AboutComponentAcumen.AboutAcumen
                  heading={about.heading}
                  content={about.content}
                />
              );
            })}
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
