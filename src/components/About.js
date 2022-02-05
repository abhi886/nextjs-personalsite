import React from "react";
import { useState, useEffect, useRef } from "react";

import Image from "next/image";
import myPhoto from "../../public/images/me.jpg";
import AnimateText from "./AnimateText";
import { ref } from "yup";

// function useOnScreen(options) {
//   const ref = useRef();
//   const [visible, setVisible] = useState(false);
//   useEffect(() => {
//     const observer = new IntersectionObserver(([entry]) => {
//       setVisible(entry.isIntersecting);
//     }, options);
//     if (ref.current) {
//       observer.observe(ref.current);
//     }

//     return () => {
//       if (ref.current) {
//         observer.unobserve(ref.current);
//       }
//     };
//   }, [ref, options]);
//   return [ref, visible];
// }

function About({ useOnScreen }) {
  const [ref, visible] = useOnScreen({ rootMargin: "-200px" });
  return (
    <section ref={ref} id='about' className='pb-16'>
      {visible ? <AnimateText headingCount={1} mainHeading={"About Me"} /> : ""}
      <div className='grid grid-cols-1  md:grid-cols-2'>
        <div className='relative  pt-16 pb-8 flex justify-center'>
          <div className='w-44 md:w-64'>
            <Image
              className='z-20 rounded-2xl'
              src={myPhoto}
              alt='Abhishekh Maharjans Photo'
            />
          </div>
        </div>
        <div className='md:pt-14 text-personal_blue-textParagraph'>
          <p className='text-base'>
            Hi, I am Abhishekh Maharjan, a Software Engineer with a strong
            background that encompasses diverse aspects of Software Engineering.
            Currently, I am living in Canberra, Australia. I’m seeking to
            heighten my experience towards becoming a Full Stack Software
            Engineer. My programming acumen includes: <br /> <br />
            <span className='text-personal_blue-text'>
              {" "}
              My current set of toolbox:
            </span>
            <br /> <br />
            HTML5, CSS3, React.js, Next.js, Node.js, Express.js, MongoDB, npm,
            MySQL&amp; ,Babel, Git, Github, Firebase, postman, Visual Studio
            Code <br /> <br />
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
