import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookSquare,
  faLinkedin,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";

function Social() {
  return (
    <div className=' text-center space-x-6 pt-4'>
      <Link href='https://www.facebook.com/abhishek.mhrzn/'>
        <a target='_blank'>
          <FontAwesomeIcon
            icon={("fab", faFacebookSquare)}
            size='2x'
            // color='#3b5998'
            color='#ccd6f6'
          />
        </a>
      </Link>

      <Link href='https://www.linkedin.com/in/abhishekh-maharjan-139581b3/'>
        <a target='_blank'>
          <FontAwesomeIcon
            icon={("fab", faLinkedin)}
            size='2x'
            // color='#0e76a8'
            color='#ccd6f6'
          />
        </a>
      </Link>

      <Link href='https://github.com/abhi886'>
        <a target='_blank'>
          <FontAwesomeIcon
            icon={("fab", faGithub)}
            size='2x'
            // color='#4078c0'
            color='#ccd6f6'
          />
        </a>
      </Link>
    </div>
  );
}

export default Social;
