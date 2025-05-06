/* eslint-disable operator-linebreak */
/* eslint-disable react/prop-types */
import React from 'react';
import { FaBriefcase } from 'react-icons/fa';
import Image from 'next/image';
import WorkSocial from '../WorkSocial';
import Button from '../Button';
import ClickToScroll from '../ClickToScroll/index';

// eslint-disable-next-line react/prop-types
function FeaturedWorkCard({ workData }) {
  return (
    <section id="featuredWorkSection" className="w-full dark:bg-personal_blue">
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
          View my noteworthy Projects and Case Studies
        </p>
        <div className="pt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-8 w-full lg:pl-32 lg:pr-32">
          {workData.map((w) => (
            <article
              key={w.slug}
              className="w-full h-64 rounded-lg shadow-lg dark:bg-personal_blue-lightBlue"
            >
              {/* relative group */}
              {/* group-:hidden */}
              <div className="flex flex-col h-full relative group">
                <div className="h-full">
                  <Image
                    // className="object-cover object-center w-full h-56"
                    src={`${w.thumbnail.url}`}
                    alt="avatar"
                    // sizes="w-18 h-18 md:w-32 md:h-24 lg:w-36 lg:h-30"
                    fill
                    priority
                  />
                </div>
                <div className="text-lg font-semibold dark:text-white absolute bottom-0 left-0 w-full h-12 bg-white dark:bg-personal_blue-lightBlue flex items-center justify-center">
                  <a target="_blank" href={`/works/${w.slug}`} rel="noreferrer">
                    {w.title}
                  </a>
                </div>
                <div className="absolute animate-fade-in-down top-0 left-0 hidden group-hover:flex bg-white dark:bg-personal_blue-lightBlue h-64">
                  <div className="px-8 flex flex-col">
                    <div className="h-40 py-4 dark:text-gray-400">
                      {w.shortDescription.split(' ').slice(0, 18).join(' ')}
                      ...
                    </div>

                    <div className="mt-4 h-12 dark:text-personal_blue-text">
                      {w.language &&
                        w.language.map((l, i) => (
                          <span key={l + Math.random()} className="text-xs">
                            {i < w.language.length - 1 ? `${l} | ` : `${l}`}
                          </span>
                        ))}
                    </div>
                    <div className="h-10 w-full">
                      <WorkSocial
                        siteUrl={w.siteUrl}
                        gitUrl={w.gitUrl}
                        slug={w.slug}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
        <div className="flex justify-end h-full">
          <Button hrefTo="/works" value="View More Works" />
        </div>
        <div>
          <ClickToScroll
            linkUpward="#newsletterSection"
            linkDownward="#getHiredSection"
            tooltipDownMessage="Hire Me ?"
            tooltipUpMessage="Newsletter"
          />
        </div>
      </div>
    </section>
  );
}

export default FeaturedWorkCard;
