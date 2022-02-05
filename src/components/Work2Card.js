import React from "react";
import WorkSocial from "./WorkSocial";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

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
    workDescription,
    gitUrl,
  } = work.fields;
  return (
    <div className='cursor-pointer hover:scale-105 transform transition duration-300 ease-out pb-2 pr-2'>
      <div className='h-70 w-70 relative p-2 bg-personal_blue-lightBlue '>
        <p className='mt-4 font-bold text-personal_blue-textParagraph'>
          {title}
        </p>
        <div className='text-sm text-personal_blue-textParagraph'>
          {documentToReactComponents(workDescription)}
        </div>
        <p className='text-xs pt-7 text-personal_blue-text'>
          {language &&
            language.map((lang) => <span key={lang}> {lang} | </span>)}
        </p>
        <WorkSocial siteUrl={siteUrl} gitUrl={gitUrl} slug={slug} />
      </div>
    </div>
  );
}

export default Work2Card;
