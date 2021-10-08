import React from "react";
import Image from "next/image";
import myPhoto from "../../public/images/me.jpg";
function About() {
  return (
    <section>
      <h1 className='font-bold text-2xl'>01. About Me </h1>
      <div className='grid grid-cols-1  md:grid-cols-2 space-x-4 my-6'>
        <div className='px-20 mb-6 md:px-2 lg:px-16'>
          <Image
            className='rounded-2xl'
            src={myPhoto}
            alt='Abhishekh Maharjans Photo'
          />
        </div>

        <div className='lg:pt-0'>
          <p className='text-justify'>
            Hi, I am Abhishekh Maharjan, a Software Engineer with a strong
            background that encompasses diverse aspects of Software Engineering.
            Currently, I am living in Canberra, Australia. I’m seeking to
            heighten my experience towards becoming a Full Stack Software
            Engineer. My programming acumen includes: <br />
            🌱 My current set of toolbox: React.js, Node.js, Express.js,
            MongoDB, npm, MySQL, HTML5 &amp; CSS3, Docker, Babel, Git, Github,
            postman, Visual Studio Code <br />
            🌱 My future plans in learning: React Native, GatsbyJS, GraphQL, AWS
            Lambda, AWS Amplify, Google Cloud Platform, Kubernetes, Webpack 🌱 I
            have also worked using the following set of toolbox- Php, Code
            Ignitor, Laravel, Wordpress, Woocoommerce, jquery, XAMPP, CPanel,
            Sublime Text Editor
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
