/* eslint-disable react/prop-types */
import React from 'react';
import { RewindIcon, ClockIcon } from '@heroicons/react/solid';
import Image from 'next/image';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import myPhoto from '../../../public/images/me.jpg';
import convertDate from '../../utils/convertDate';
import renderOptions from '../../utils/contentfulUtils';

function BlogSlugPage({
  title,
  readTime,
  imageUrl,
  description,
  updatedDate,
  language,
  goBackLink,
}) {
  return (
    <main className="mx-auto mt-10 px-4 pb-28 sm:mt-16 sm:px-6 md:px-8 xl:px-12 xl:max-w-6xl">
      <section className="relative pt-10 max-w-3xl mx-auto xl:max-w-none xl:grid xl:grid-cols-3 xl:gap-x-8">
        {title && (
          <h1 className="col-span-full text-3xl sm:text-4xl sm:text-center xl:mb-16 font-extrabold tracking-tight">
            {title}
          </h1>
        )}

        <div className="text-sm leading-6  xl:mb-0">
          <div className=" mt-4 pb-5 border-b border-slate-200 xl:block  dark:border-slate-200/5">
            <a
              className="group flex font-semibold text-slate-700 hover:text-slate-900"
              href={goBackLink}
            >
              <div className="flex items-center space-x-4 justify-end">
                <div className="flex items-center space-x-2 border-2 p-2 rounded-full">
                  <RewindIcon className="h-3 md:h-6" />
                </div>
                <p className=" inline-flex cursor-pointer">Go Back</p>
              </div>
            </a>
          </div>
          <dl>
            <dt className="sr-only">Date</dt>
            <dd className="absolute top-0 inset-x-0 text-slate-700 sm:text-center">
              <time dateTime={updatedDate}>
                Last Updated At: {convertDate(updatedDate)}
              </time>
            </dd>
            <div className="sm:flex sm:flex-wrap sm:justify-center xl:block">
              <dt className="sr-only">Author</dt>
              <dd className="flex items-center font-medium mt-6 sm:mx-3 xl:mx-0">
                <Image
                  src={myPhoto}
                  alt="Abhishekh Maharjan Photo"
                  width={60}
                  height={60}
                  // layout='fill'
                  objectFit="contain"
                  className="mr-3 w-12 h-12 rounded-full bg-slate-50 dark:bg-slate-800"
                />
                <div className="ml-4">
                  <div className="">
                    <strong>Abhishekh Maharjan</strong>
                  </div>
                  <div className="">Full Stack Software Developer</div>
                  <a
                    href="/"
                    className="text-blue-500 hover:text-sky-600 dark:text-sky-400"
                  >
                    abhishekmhrzn.14@gmail.com
                  </a>
                </div>
              </dd>
            </div>
          </dl>
        </div>
        <div className="prose max-w-none prose-img:rounded-xl prose-slate dark:prose-dark col-span-2">
          <div className="">
            <div className="flex items-center space-x-4 justify-end text-gray-500">
              <div className="flex items-center space-x-1">
                <ClockIcon className="h-6" />
              </div>
              <p className="md:inline-flex cursor-pointer text-sm">
                Read Time : {readTime} mins
              </p>
            </div>

            <div className="">
              <Image
                src={`https:${imageUrl.fields.file.url}`}
                alt="Main picture of the blog"
                objectFit="fill"
                width={imageUrl.fields.file.details.image.width}
                height={imageUrl.fields.file.details.image.height}
              />
            </div>
          </div>
          {language && (
            <p className="p-2 text-xs text-personal_blue-workBackground font-mono text-right">
              {' '}
              {language &&
                language.map((lang) => <span key={lang}> {lang} | </span>)}
            </p>
          )}
          <div className="prose max-w-none  prose-a:text-blue-600">
            {documentToReactComponents(description, renderOptions)}
          </div>
        </div>
      </section>
    </main>
  );
}

export default BlogSlugPage;
