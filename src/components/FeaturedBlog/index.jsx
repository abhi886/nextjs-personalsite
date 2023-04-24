/* eslint-disable react/prop-types */
import React from 'react';

import { FaBlog } from 'react-icons/fa';
import Image from 'next/dist/client/image';
import convertDate from '../../utils/convertDate';

function FeaturedBlog({ blogData }) {
  return (
    <section className="dark:bg-personal_blue">
      <div
        className="container flex flex-col items-center m-auto  px-4 h-full  dark:bg-personal_blue md:px-20
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

        <div className="pt-6 lg:py-16">
          <div className="grid grid-cols-1 lg:grid-cols-1 gap-10">
            {blogData.map((d) => (
              <article
                key={d.slug}
                className="dark:bg-personal_blue-lightBlue h-full w-full lg:h-40 border-x-2 border-black dark:border-personal_blue-text rounded-lg"
              >
                <div className="flex md:space-x-4 lg:space-x-5">
                  <div className="relative w-16 h-16 mt-2 ml-2 md:w-32 md:h-24 lg:w-40 lg:h-32 lg:ml-6 lg:mt-2">
                    <a
                      target="_blank"
                      href={`/blogs/${d.slug}`}
                      rel="noreferrer"
                    >
                      <Image
                        className="rounded-full object-cover"
                        src={`${d.blogImage.url}`}
                        alt="Abhishekh Maharjans Photo"
                        layout="fill"
                      />
                    </a>
                  </div>
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
                        {convertDate(d.sys.firstPublishedAt)} / {d.readTime}{' '}
                        mins read
                      </p>
                    </div>
                    <div className="py-3 lg:pt-7">
                      {d.languages &&
                        d.languages.map((l, i) => (
                          <span
                            key={i}
                            className="text-xs py-3 pr-2 text-blue-900 dark:text-personal_blue-text hover:underline"
                          >
                            {i < d.languages.length - 1 ? `${l} |` : `${l}`}
                          </span>
                        ))}
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
          <div className="flex justify-center">
            <a href="/blogs" target="_blank">
              <button
                type="button"
                className="dark:text-personal_blue-text bg-transparent px-2 py-2 text-xs lg:text-base lg:px-3 lg:py-3 rounded-lg border dark:border-personal_blue-text my-3 shadow-md hover:shadow-lg active:scale-90 transition duration-150 mt-8 lg:mt-12"
              >
                View More Articles
              </button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FeaturedBlog;
