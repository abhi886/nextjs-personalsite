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
      <Link
        href={{
          pathname: "/",
        }}
      >
        <a>
          <FontAwesomeIcon
            icon={("fab", faFacebookSquare)}
            size='2x'
            // color='#3b5998'
            color='#ccd6f6'
          />
        </a>
      </Link>

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
  );
}

export default Social;
