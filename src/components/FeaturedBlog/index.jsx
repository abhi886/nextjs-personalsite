/* eslint-disable react/prop-types */
import React from 'react';
import { FaBlog } from 'react-icons/fa';
import Image from 'next/dist/client/image';
import convertDate from '../../utils/convertDate';
import readingTime from '../../utils/readtime';
import Button from '../Button';
import Section from '../hoc/withComponentSection';
import ClickToScroll from '../ClickToScroll/index';

function FeaturedBlog({ blogData }) {
  return (
    <Section id="featuredBlogSection">
      <div
        className="container flex flex-col items-center m-auto  px-4 h-full  dark:bg-personal_blue lg:px-56 md:px-24
      "
      >
        <div className="flex pt-28 space-x-4 items-center">
          <div>
            {' '}
            <FaBlog className="dark:text-personal_blue-textTitle text-3xl" />
          </div>
          <div>
            <h1 className="font-bold text-2xl text-personal_blue-textParagraph ">
              <span className="pt-4" />
            </h1>
            <h2 className="text-3xl font-bold tracking-tight dark:text-personal_blue-textTitle xl:text-4xl">
              From my Blogs
            </h2>
          </div>
        </div>

        <p className="font-regular dark:text-personal_blue-textParagraph pt-2 lg:pl-6 lg:pt-4">
          View my recent articles
        </p>
        <div className="grid grid-cols-1 gap-6 pt-6 w-full">
          {blogData.map((d) => (
            <article
              key={d.slug}
              className="dark:bg-personal_blue-lightBlue h-full w-full lg:h-28 border-x-2  dark:border-personal_blue-text rounded-lg"
            >
              <div className="grid grid-cols-4 gap-4">
                <div className="m-auto">
                  {' '}
                  <a target="_blank" href={`/blogs/${d.slug}`} rel="noreferrer">
                    <div className="relative rounded-full w-16 h-16 pt-2 pl-2  md:w-24 md:h-24 lg:w-26 lg:h-26 lg:ml-6 lg:mt-2 bg-red-200 items-center">
                      <Image
                        className="rounded-full object-cover"
                        src={`${d.thumbnail.url}`}
                        alt="Abhishekh Maharjans Photo"
                        fill
                        sizes="w-18 h-18 md:w-32 md:h-24 lg:w-36 lg:h-30"
                        priority
                      />
                    </div>
                  </a>
                </div>
                <div className="col-span-3">
                  {' '}
                  <div className="w-64 pl-4 md:w-full lg:w-full">
                    <a
                      target="_blank"
                      href={`/blogs/${d.slug}`}
                      rel="noreferrer"
                    >
                      <p className="mt-2 font-bold dark:text-personal_blue-textParagraph text-base lg:text-xl lg:mt-4">
                        {d.title}
                      </p>
                    </a>
                    <div className="text-sm mt-2 dark:text-personal_blue-textParagraph">
                      <p>
                        {convertDate(d.sys.firstPublishedAt)} /{' '}
                        {readingTime(d.blogDescription.json)} mins read
                      </p>
                    </div>
                    <div className="py-3 lg:pt-1">
                      {d.languages &&
                        d.languages.map((l, i) => (
                          <span
                            key={d.languages[i]}
                            className="text-xs py-3 pr-2 text-blue-900 dark:text-personal_blue-text hover:underline"
                          >
                            {i < d.languages.length - 1 ? `${l} |` : `${l}`}
                          </span>
                        ))}
                    </div>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
        <div className="flex justify-center h-full">
          <Button hrefTo="/blogs" value="View More Articles" />
        </div>
        <div className="mb-2">
          <ClickToScroll
            linkUpward="#aboutSection"
            linkDownward="#newsletterSection"
            tooltipDownMessage="Newsletter"
            tooltipUpMessage="About Me"
          />
        </div>
      </div>
    </Section>
  );
}

export default FeaturedBlog;
