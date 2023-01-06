import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookSquare,
  faLinkedin,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";

function Social({ facebookLink, githubLink, linkedinLink }) {
  return (
    <div className='text-center space-x-6 pt-4'>
      <a
        target='_blank'
        aria-label='Facebook'
        href={`${facebookLink}`}
        rel='noopener noreferrer'
      >
        <FontAwesomeIcon
          icon={("fab", faFacebookSquare)}
          size='2x'
          color='#ccd6f6'
        />
      </a>

      <a
        target='_blank'
        aria-label='Github'
        href={`${githubLink}`}
        rel='noopener noreferrer'
      >
        <FontAwesomeIcon icon={("fab", faGithub)} size='2x' color='#ccd6f6' />
      </a>

      <a
        target='_blank'
        aria-label='LinkedIn'
        href={`${linkedinLink}`}
        rel='noopener noreferrer'
      >
        <FontAwesomeIcon
          icon={("fab", faLinkedin)}
          size='2x'
          // color='#0e76a8'
          color='#ccd6f6'
        />
      </a>
    </div>
  );
}

export default Social;
