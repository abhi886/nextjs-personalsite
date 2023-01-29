import React from 'react';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { BLOCKS, INLINES } from '@contentful/rich-text-types';
import { HiArrowCircleRight } from 'react-icons/hi';

const RICHTEXT_OPTIONS = {
  renderNode: {
    [BLOCKS.HEADING_3]: (node, children) => (
      <div className="flex items-center text-personal_blue-text my-2">
        <HiArrowCircleRight />
        <p className="font-bold text-personal_blue-text">{children}</p>
        {' '}
      </div>
    ),
    [BLOCKS.HEADING_2]: (node, children) => (
      <p className="font-extrabold text-personal_blue-text ">{children}</p>
    ),
    [BLOCKS.PARAGRAPH]: (node, children) => (
      <p>
        {' '}
        {children}
      </p>
    ),
    [INLINES.HYPERLINK]: (node, children) => (
      <a
        href={node.data.uri}
        className="border-dotted border-b-2 border-personal_blue-text"
      >
        {children}
      </a>
    ),
  },
};

function HeroTest({ profile, profileImage }) {
  return (
    <div className="container px-6 py-16 mx-auto">
      <div className="items-center lg:flex">
        <div className="justify-center w-full mt-6 lg:mt-0 lg:w-1/2">
          {documentToReactComponents(profile.json, RICHTEXT_OPTIONS)}
        </div>
        <div className="w-full lg:w-1/2">
          <div className="lg:max-w-lg">
            <h1 className="text-3xl font-semibold text-gray-800 dark:text-white lg:text-4xl">
              Subscribe To The
              {' '}
              <span className="text-blue-500">Newsletter</span>
            </h1>

            <p className="mt-4 text-gray-600 dark:text-gray-400">
              be the first to knows when our
              {' '}
              <span className="font-medium text-blue-500">Brand</span>
              {' '}
              is live
            </p>

            <div className="flex flex-col mt-8 space-y-3 lg:space-y-0 lg:flex-row">
              <input
                id="email"
                type="text"
                className="px-4 py-2 text-gray-700 bg-white border rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-opacity-40 focus:ring-blue-300"
                placeholder="Email Address"
              />

              <button className="w-full px-6 py-2.5 text-sm font-medium tracking-wider text-white uppercase transition-colors duration-300 transform bg-blue-600 rounded-lg lg:w-auto lg:mx-4 hover:bg-blue-500 focus:outline-none focus:bg-blue-500">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroTest;
