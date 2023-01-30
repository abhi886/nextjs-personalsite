import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faEye, faBook } from '@fortawesome/free-solid-svg-icons';

// eslint-disable-next-line react/prop-types
function WorkSocial({ siteUrl, gitUrl, slug }) {
  return (
    <div className="flex justify-end space-x-2 p-2">
      {siteUrl && (
        <a
          href={siteUrl}
          rel="noreferrer"
          target="_blank"
          title="Visit Website "
        >
          <FontAwesomeIcon icon={('fas', faEye)} size="1x" color="#8892b0" />{' '}
        </a>
      )}
      {gitUrl && (
        <a href={gitUrl} rel="noreferrer" target="_blank" title="View Github">
          <FontAwesomeIcon icon={('fab', faGithub)} size="1x" color="#8892b0" />
        </a>
      )}
      <a href={`/works/${encodeURIComponent(slug)}`} title="View Case Study ">
        <FontAwesomeIcon icon={('fab', faBook)} size="1x" color="#8892b0" />
      </a>
    </div>
  );
}

export default WorkSocial;
