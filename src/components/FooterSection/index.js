import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faFacebookSquare,
  faLinkedin,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";

const FooterSection = () => {
  return (
    <footer className='p-5'>
      <div className=' text-center space-x-4 pb-4'>
        <FontAwesomeIcon
          icon={("fab", faFacebookSquare)}
          size='2x'
          // color='#3b5998'
          color='#ccd6f6'
        />
        <FontAwesomeIcon
          icon={("fab", faLinkedin)}
          size='2x'
          // color='#0e76a8'
          color='#ccd6f6'
        />
        <FontAwesomeIcon
          icon={("fab", faGithub)}
          size='2x'
          // color='#4078c0'
          color='#ccd6f6'
        />
      </div>

      <p className='text-white text-xs text-center'>
        Site Built Using: Next.js, TailwindCSS
      </p>
    </footer>
  );
};

export default FooterSection;
