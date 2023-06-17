/* eslint-disable react/prop-types */
import React from 'react';
import { FacebookIcon, GitHubIcon, LinkedInIcon } from '../../../public/svgs';

function Social({ facebookLink, githubLink, linkedinLink }) {
  return (
    <div className="flex space-x-4 justify-center">
      <div>
        <a
          target="_blank"
          aria-label="Facebook"
          href={`${facebookLink}`}
          rel="noopener noreferrer"
        >
          <FacebookIcon className="h-10 w-10 dark:text-personal_blue-social" />
        </a>
      </div>

      <a
        target="_blank"
        aria-label="Github"
        href={`${githubLink}`}
        rel="noopener noreferrer"
      >
        <GitHubIcon className="h-10 w-10 dark:text-personal_blue-social" />
      </a>

      <a
        target="_blank"
        aria-label="LinkedIn"
        href={`${linkedinLink}`}
        rel="noopener noreferrer"
      >
        <LinkedInIcon className="h-10 w-10 dark:text-personal_blue-social" />
      </a>
    </div>
  );
}

export default Social;
