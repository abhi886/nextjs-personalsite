import React from 'react';
// import Link from 'next/link';
import Section from '../hoc/withComponentSection';
import ClickToScroll from '../ClickToScroll/index';

function Newsletter() {
  return (
    <Section id="newsletterSection" className="height-screen">
      <div className="flex flex-col px-4 h-full lg:px-56 md:px-24 justify-center items-center">
        <div className="container grid grid-cols-1 h-full content-center">
          <div className="flex justify-center">
            <h2 className="text-3xl font-bold tracking-tight dark:text-personal_blue-textTitle xl:text-4xl">
              Sign up for my Newsletter
            </h2>
          </div>
          <p className="mt-4 dark:text-personal_blue-textParagraph text-center">
            I write about modern Full Stack Web Development. Subscribe to my
            newsletter to notify when I publish new components
          </p>

          <div className="mt-4 flex flex-col items-center space-x-2">
            <div className="border-2 rounded-full py-2 md:shadow-sm">
              <input
                type="text"
                className="flex-grow pl-5 bg-transparent outline-none dark:text-white dark:placeholde-white"
                placeholder="Enter Your Email addr."
              />
            </div>
          </div>
          {/* <div className="flex flex-col items-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center mt-6   py-2  overflow-hidden text-white transition-colors duration-300 bg-blue-600 rounded-lg shadow hover:bg-blue-500 focus:ring focus:ring-blue-300 focus:ring-opacity-80"
            >
              <span className="mx-2 px-1 py-1">Contact Me</span>
            </Link>
          </div> */}
        </div>
        <div className="flex content-end">
          <ClickToScroll
            linkUpward="#featuredBlogSection"
            linkDownward="#featuredWorkSection"
            tooltipDownMessage="My Work's"
            tooltipUpMessage="My Blog's"
          />
        </div>
      </div>
    </Section>
  );
}

export default Newsletter;
