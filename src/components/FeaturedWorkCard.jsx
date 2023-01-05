import React from "react";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import Image from "next/image";
import { FaBlog, FaBriefcase, FaTools, FaTv } from "react-icons/fa";
import WorkSocial from "./WorkSocial";

function FeaturedWorkCard({ workData }) {
  const { title, shortDescription, language, gitUrl, siteUrl, slug } = workData;
  return (
    <section className='bg-personal_blue'>
      <div className='container m-auto pb-10  px-4 h-full  bg-personal_blue md:px-20  '>
        <div className='flex pt-28 space-x-4'>
          <div>
            {" "}
            <FaBriefcase className='text-personal_blue-textParagraph text-3xl' />
          </div>
          <div>
            <h1 className='font-bold text-2xl text-personal_blue-textParagraph '>
              <span className='pt-4'>My Projects</span>
            </h1>
          </div>
        </div>
        <p className='font-regular text-personal_blue-textParagraph pt-2 lg:pl-12 lg:pt-4'>
          View my noteworthy projects
        </p>
        <div className='pt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4  lg:gap-16'>
          {workData.map((w, i) => (
            <div
              key={i}
              className='w-full m-auto max-w-xs lg:max-w-sm overflow-hidden dark:bg-white rounded-lg shadow-lg bg-gray-800'
            >
              <img
                className='object-cover object-center w-full h-56 '
                src='https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80'
                alt='avatar'
              />

              <div className='flex items-center px-6 py-3 bg-gray-900'>
                <FaTv className='text-white text-2xl'></FaTv>
                <h1 className='mx-3 text-lg font-semibold text-white'>
                  {w.title}
                </h1>
              </div>

              <div className='px-6 py-4'>
                <p className='py-2 dark:text-gray-700 text-gray-400'>
                  {w.shortDescription}
                </p>

                <div className='mt-4 dark:text-gray-700 text-personal_blue-text'>
                  {w.language &&
                    w.language.map((l, i) => (
                      <span key={i} className='text-xs'>
                        {i < w.language.length - 1 ? `${l} | ` : `${l}`}
                      </span>
                    ))}
                </div>

                <WorkSocial
                  siteUrl={w.siteUrl}
                  gitUrl={w.gitUrl}
                  slug={w.slug}
                ></WorkSocial>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FeaturedWorkCard;
