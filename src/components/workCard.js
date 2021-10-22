import React from "react";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

function workCard({ work }) {
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
  } = work.fields;
  console.log(work.fields);
  return (
    <div className='relative space-x-4  bg-personal_blue-text-900'>
      {/* First Div */}
      {/* <div className='bg-gray-900 opacity-50 '></div> */}
      <div className='flex h-80 w-80 justify-center text-personal_blue-text opacity-20 '>
        {thumbnail.fields.file.url && (
          <img
            src={`https:${thumbnail.fields.file.url}`}
            alt='Companys image'
          />
        )}
      </div>

      {/* Second Div */}

      <div className='flex flex-col absolute top-0 -left-4 bg-personal_blue-lightBlue bg-opacity-75  h-80 w-80 '>
        {/* <div className='absolute inset-0 bg-gray-900 bg-opacity-1 '></div> */}
        <h1 className='font-bold p-2 text-personal_blue-textParagraph '>
          {title} <br />
          <span className='text-sm text-personal_blue-text'>{jobPosition}</span>
        </h1>
        <p className='text-sm text-justify p-3 text-personal_blue-textParagraph'>
          {documentToReactComponents(workDescription)}
        </p>
        <div className='absolute bottom-0 right-0'>
          <p className='p-2 text-xs text-personal_blue-text font-mono text-right'>
            {" "}
            {language &&
              language.map((lang) => <span key={lang}> {lang} | </span>)}
          </p>
          <p className='font-bold text-xs p-2 text-personal_blue-textParagraph text-right hover:text-personal_blue-text cursor-pointer'>
            {siteUrl && (
              <a href={siteUrl} target='_blank'>
                Visit Site{" "}
              </a>
            )}
            <a href=''>| View Case Study</a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default workCard;
