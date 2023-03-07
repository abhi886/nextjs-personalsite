/* eslint-disable operator-linebreak */
/* eslint-disable react/prop-types */
import React from 'react';
import { FaBriefcase } from 'react-icons/fa';
import WorkSocial from '../WorkSocial';

// eslint-disable-next-line react/prop-types
function FeaturedWorkCard({ workData }) {
  return (
    <section className="dark:bg-personal_blue">
      <div className="container flex flex-col items-center m-auto  px-4 h-full  dark:bg-personal_blue md:px-20  ">
        <div className="flex pt-28 space-x-4 items-center">
          <div>
            {' '}
            <FaBriefcase className="dark:text-personal_blue-textTitle text-3xl" />
          </div>
          <div>
            <h1 className="font-bold text-2xl text-personal_blue-textParagraph ">
              <span className="pt-4" />
            </h1>
            <h2 className="text-3xl font-bold tracking-tight dark:text-personal_blue-textTitle xl:text-4xl">
              My Projects
            </h2>
          </div>
        </div>
        <p className="font-regular dark:text-personal_blue-textParagraph pt-2 lg:pl-12 lg:pt-4">
          View my noteworthy projects
        </p>
        <div className="pt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-8  lg:gap-16">
          {workData.map((w) => (
            <article
              key={w.slug}
              className="w-full m-auto max-w-xs lg:max-w-sm overflow-hidden rounded-lg shadow-lg dark:bg-personal_blue-lightBlue"
            >
              <div className="relative group">
                <div className="group-:hidden">
                  <a target="_blank" href={`/works/${w.slug}`} rel="noreferrer">
                    <img
                      className="object-cover object-center w-full h-56 "
                      src={`${w.thumbnail.url}`}
                      alt="avatar"
                    />
                  </a>

                  <a target="_blank" href={`/works/${w.slug}`} rel="noreferrer">
                    <div className="flex justify-center px-4 py-3 bg-persobal_blue-lightBlue">
                      <h1 className="text-lg font-semibold dark:text-white">
                        {w.title}
                      </h1>
                    </div>
                  </a>
                </div>
                <div className="absolute animate-fade-in-down top-0 left-0 hidden group-hover:flex bg-white dark:bg-personal_blue-lightBlue h-56">
                  <div className="px-8">
                    <p className="py-4 dark:text-gray-400">{w.shortDescription}</p>

                    <div className="mt-4 dark:text-personal_blue-text">
                      {w.language &&
                        w.language.map((l, i) => (
                          <span key={l + Math.random()} className="text-xs">
                            {i < w.language.length - 1 ? `${l} | ` : `${l}`}
                          </span>
                        ))}
                    </div>

                    <WorkSocial
                      siteUrl={w.siteUrl}
                      gitUrl={w.gitUrl}
                      slug={w.slug}
                    />
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
        <div className="flex justify-end">
          <a href="/works" target="_blank">
            <button
              type="button"
              className="dark:text-personal_blue-text bg-transparent px-2 py-2 text-xs lg:text-base lg:px-3 lg:py-3 rounded-lg border dark:border-personal_blue-text my-3 shadow-md hover:shadow-lg active:scale-90 transition duration-150 mt-8 lg:mt-12"
            >
              View More Works
            </button>
          </a>
        </div>
      </div>
    </section>
  );
}

export default FeaturedWorkCard;