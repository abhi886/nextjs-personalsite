import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import parse from 'html-react-parser';
import query from '../../src/utils/queries/work-page-slug-query';
import useContentful from '../../src/customHooks/use-contentful';
import querySingleWorkPage from '../../src/utils/queries/work-page-query-props';

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
    title,
    workParser,
    // blogImage: { url, width, height },
  } = workData;
  return (
    <>
      <header className="relative min-h-[60vh] md:min-h-[70vh] flex items-center justify-center text-center text-white py-20 px-6">
        <div className="absolute inset-0 dark:bg-personal_blue bg-opacity-50 -z-10" />

        <div className="relative z-10 max-w-4xl mx-auto">
          <p className="text-sm uppercase tracking-wider font-semibold text-cyan-400 mb-2 md:mb-4">
            Personal Project / Web Development
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6">
            <span className="text-gradient bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 dark:text-white">
              {title}
            </span>
          </h1>
          <p className="text-lg md:text-xl text-black dark:text-gray-200 max-w-3xl mx-auto">
            Crafting a modern, performant, and easily updatable digital home to
            reflect an evolving career in Full Stack Development & UI/UX Design.
          </p>
          <p className="mt-8">
            <a
              href="https://abhishekhmaharjan.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-cyan-500 hover:bg-cyan-600 text-white font-semibold py-3 px-8 rounded-lg shadow-md transition-colors duration-300"
            >
              Visit Live Site
            </a>
          </p>
        </div>
      </header>

      {parse(workParser)}
    </>
  );
}
export default aslug;
