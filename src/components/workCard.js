import React from "react";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import Image from "next/image";

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
    shortDescription,
    gitUrl,
  } = work.fields;
  return (
    <div className='relative  bg-personal_blue-text-900 mr-1 mb-1'>
      <div className='h-64 justify-center text-personal_blue-text  bg-personal_blue-lightBlue bg-opacity-75'>
        <h1 className='font-bold p-2 text-personal_blue-textParagraph '>
          {title} <br />
          <span className='text-sm text-personal_blue-text'>{jobPosition}</span>
        </h1>
        <div className='text-sm text-justify p-3 text-personal_blue-textParagraph'>
          {shortDescription}
        </div>
        <div className='absolute bottom-0 right-0'>
          <p className='p-2 text-xs text-personal_blue-text font-mono text-right'>
            {" "}
            {language &&
              language.map((lang) => <span key={lang}> {lang} | </span>)}
          </p>
          <p className='font-bold text-xs p-2 text-personal_blue-textParagraph text-right '>
            {siteUrl && (
              <a
                href={siteUrl}
                target='_blank'
                className='hover:text-personal_blue-text cursor-pointer'
              >
                Visit Site{" "}
              </a>
            )}

            {gitUrl && (
              <a
                href={gitUrl}
                target='_blank'
                className='hover:text-personal_blue-text cursor-pointer'
              >
                Visit Github{" "}
              </a>
            )}
            <a
              className='hover:text-personal_blue-text cursor-pointer'
              href={`/works/${encodeURIComponent(slug)}`}
            >
              | View Case Study
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default workCard;
