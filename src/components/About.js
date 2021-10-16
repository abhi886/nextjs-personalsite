import React from "react";
import Image from "next/image";
import myPhoto from "../../public/images/me.jpg";
function About() {
  return (
    <section className='pb-32'>
      <h1 className='font-bold text-2xl pt-6 pb-10 text-personal_blue-textTitle '>
        <span className='text-sm text-personal_blue-text'> 01. </span> About Me
        <div className='border-t w-30 border-blue-200 '></div>
      </h1>

      <div className='grid grid-cols-1  md:grid-cols-2 space-x-4 my-6'>
        {/* <div className='px-40 mb-6 md:px-2 lg:px-16 relative'> */}
        <div className='relative  flex justify-center'>
          <div className='w-44 md:w-64'>
            <Image
              className='z-20 rounded-2xl'
              src={myPhoto}
              alt='Abhishekh Maharjans Photo'
            />
          </div>
        </div>
        <div className='lg:pt-0 text-personal_blue-textParagraph'>
          <p className='text-justify tracking-wider font-sans'>
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
            Php, Code Ignitor, Laravel, Wordpress, Woocoommerce, jquery, XAMPP,
            CPanel, Sublime Text Editor
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
