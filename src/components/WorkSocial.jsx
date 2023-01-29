import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faEye, faBook } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';

// eslint-disable-next-line react/prop-types
function WorkSocial({ siteUrl, gitUrl, slug }) {
  return (
    <div className="flex justify-end space-x-2 p-2">
      {siteUrl && (
        <Link href={siteUrl}>
          <a target="_blank" title="Visit Website ">
            <FontAwesomeIcon
              icon={('fas', faEye)}
              size="1x"
              // color='#4078c0'
              color="#8892b0"
            />{' '}
          </a>
        </Link>
      )}
      {gitUrl && (
        <Link href={gitUrl}>
          <a target="_blank" title="View Github ">
            <FontAwesomeIcon
              icon={('fab', faGithub)}
              size="1x"
              // color='#4078c0'
              color="#8892b0"
            />
          </a>
        </Link>
      )}
      <Link href={`/works/${encodeURIComponent(slug)}`}>
        <a target="_blank" title="View Case Study ">
          <FontAwesomeIcon
            icon={('fab', faBook)}
            size="1x"
            // color='#4078c0'
            color="#8892b0"
          />
        </a>
      </Link>
    </div>
  );
}

export default WorkSocial;
