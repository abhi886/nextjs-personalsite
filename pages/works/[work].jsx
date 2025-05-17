import React from 'react';
import { ClockIcon } from '@heroicons/react/solid';
import query from '../../src/utils/queries/work-page-slug-query';
import useContentful from '../../src/customHooks/use-contentful';
import querySingleWorkPage from '../../src/utils/queries/work-page-query-props';
import RichTextOptions from '../../src/utils/rich-text-options';
import ClickToScroll from '../../src/components/ClickToScroll';

export async function getStaticPaths() {
  const data = await useContentful(query);

  const workSlugs = data?.worksCollection?.items || [];

  const paths = workSlugs.map((item) => ({
    params: { work: `${item.slug}` },
  }));
  return {
    paths,
    fallback: false, // Set to 'blocking' if you want ISR (Incremental Static Regeneration)
  };
}

export async function getStaticProps({ params: { work } }) {
  const variables = { slug: work };
  const data = await useContentful(querySingleWorkPage, variables);
  const [workData] = data.worksCollection.items;
  return {
    props: { work: { workData } },
    revalidate: 1,
  };
}

function aslug({ work: { workData } }) {
  const {
    jobPosition,
    title,
    shortDescription,
    siteUrl,
    workDescription,
    outcome,
    coreApproach,
    background,
    language,
    readTime,
  } = workData;
  return (
    <>
      <header className="relative min-h-[60vh] md:min-h-[70vh] flex items-center justify-center text-center text-white py-20 px-6">
        <div className="absolute inset-0 dark:bg-personal_blue bg-opacity-50 -z-10" />
        <div className="relative z-10 max-w-4xl mx-auto">
          <p className="text-sm uppercase tracking-wider font-semibold text-cyan-400 mb-2 md:mb-4">
            {jobPosition}
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6">
            <span className="text-gradient bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 dark:text-white">
              {title}
            </span>
          </h1>
          <p className="text-lg md:text-xl text-black dark:text-gray-200 max-w-3xl mx-auto">
            {shortDescription}
          </p>
          <p className="mt-8">
            <a
              href={siteUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-cyan-500 hover:bg-cyan-600 text-white font-semibold py-3 px-8 rounded-lg shadow-md transition-colors duration-300"
            >
              Visit Live Site
            </a>
          </p>
        </div>
      </header>

      <main className="py-12 md:py-20">
        <div
          id="backgound"
          className="flex justify-center text-personal_blue-textParagraph "
        >
          <ClickToScroll
            linkDownward="#backgound"
            tooltipDownMessage="Background"
          />
        </div>
        <div className="max-w-3xl mt-20 mx-auto px-4 sm:px-6 lg:px-8 space-y-12 md:space-y-16">
          <div className="flex-col md:flex justify-between items-center">
            <div className="flex items-center dark:text-personal_blue-textParagraph">
              <ClockIcon className="h-4" />
              <p className="ml-1 text-sm">Read Time: {readTime} mins</p>
            </div>

            <div className="dark:text-personal_blue-textParagraph text-right">
              {language && (
                <p className="p-2 text-xs">
                  Tech Stack: {language.join(' | ')}
                </p>
              )}
            </div>
          </div>

          <article>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 md:mb-8 pb-3 border-b-2 border-personal_blue-text inline-block">
              Background
            </h2>
            <div className="max-w-none space-y-6">
              <p>{background}</p>
            </div>
          </article>

          <article>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 md:mb-8 pb-3 border-b-2 border-personal_blue-text inline-block">
              The Solution
            </h2>
            <div className="space-y-6">
              <RichTextOptions data={workDescription} />
            </div>
          </article>
          <aside className="my-12 md:my-16 p-6 md:p-8 border-l-4 border-cyan-500 bg-gray-800 rounded-r-md shadow-lg">
            <h3 className="text-xl font-semibold text-gray-100 mb-3">
              My Core Approach
            </h3>

            <p className="mt-4 text-gray-400">{coreApproach}</p>
          </aside>
          <article>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 md:mb-8 pb-3 border-b-2 border-personal_blue-text inline-block">
              The Outcome
            </h2>
            <div className="space-y-6">
              <p className="">{outcome}</p>
            </div>
          </article>
        </div>
      </main>
    </>
  );
}
export default aslug;
