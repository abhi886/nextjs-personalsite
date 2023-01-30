import React from 'react';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import WorkSocial from '../WorkSocial';

function Work2Card({ work }) {
  const {
    jobPosition,
    language,
    readTime,
    siteUrl,
    slug,
    thumbnail,
    title,
    type,
    shortDescription,
    gitUrl,
  } = work.fields;
  return (
    // <div className='cursor-pointer hover:scale-105 transform transition duration-300 ease-out'>
    <div className="h-70 w-70 relative bg-personal_blue-lightBlue p-2">
      <p className="mt-4 font-bold text-personal_blue-textParagraph">{title}</p>
      <div className="text-sm text-personal_blue-textParagraph">
        {shortDescription}
      </div>
      <p className="text-xs pt-7 text-personal_blue-text">
        {language && language.map((lang) => <span key={lang}> {lang} | </span>)}
      </p>
      <WorkSocial siteUrl={siteUrl} gitUrl={gitUrl} slug={slug} />
    </div>
    // </div>
  );
}

export default Work2Card;
