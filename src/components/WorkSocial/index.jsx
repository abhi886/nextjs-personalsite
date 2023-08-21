import React from 'react';
import { EyeIcon, GitHubIcon, BookIcon } from '../../../public/svgs';

// eslint-disable-next-line react/prop-types
function WorkSocial({ siteUrl, gitUrl, slug }) {
  return (
    <div className="flex space-x-2 justify-end">
      {' '}
      {siteUrl && (
        <a
          href={siteUrl}
          rel="noreferrer"
          target="_blank"
          title="Visit Website"
        >
          <EyeIcon className="h-4 w-4 dark:text-personal_blue-paragraph" />
        </a>
      )}
      {gitUrl && (
        <a
          href={gitUrl}
          rel="noreferrer"
          target="_blank"
          title="View Github"
          className="text-white"
        >
          <GitHubIcon className="h-4 w-4 dark:text-personal_blue-paragraph" />
        </a>
      )}
      <a href={`/works/${encodeURIComponent(slug)}`} title="View Case Study ">
        <BookIcon className="h-4 w-4 dark:text-personal_blue-paragraph" />
      </a>
    </div>
  );
}

export default WorkSocial;
