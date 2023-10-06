import React from 'react';
import useContentful from '../../src/customHooks/use-contentful';
import query from '../../src/utils/queries/timeline-page-query';
import TimelineDescription from '../../src/components/TimelineDescription';
import convertDate from '../../src/utils/convertDate';

export async function getStaticProps() {
  const data = await useContentful(query);
  return {
    props: {
      data,
    },
    revalidate: 1,
  };
}

const index = ({ data }) => {
  const {
    everyDay: {
      links: {
        entries: { block: everyDayData },
      },
    },
  } = data.timelineCollection.items[0];
  return (
    <section className="container max-w-7xl mx-auto py-10 px-4 sm:py-14 sm:px-6 lg:px-8 ">
      <div className=" grid grid-cols-12 ">
        <div className="col-span-12 md:col-start-3 md:col-span-8">
          <h1 className="pb-4 pt-8 text-3xl dark:text-personal_blue-textTitle text-gray-800 font-semibold text-center  mx-auto">
            <strong>My</strong> Timeline
          </h1>
          <p className="prose max-w-none prose-gray dark:prose-invert text-center">
            I write about my journey of becoming a Software Engineer in
            Australia.
          </p>
        </div>

        <div className="col-span-12 md:col-start-3 md:col-span-8 pt-10 space-y-10">
          {everyDayData.map((ed) => (
            <div className="flex flex-col cursor-pointer " key={ed.heading}>
              <div className="flex items-top justify-center my-4">
                <time className="inline-flex items-center justify-center text-xs font-semibold uppercase w-32 h-6 mb-3 sm:mb-0 text-emerald-600 bg-emerald-100 rounded-full">
                  {convertDate(ed.date)}
                </time>
              </div>
              <div>
                {' '}
                <div className="text-lg text-center font-medium text-slate-900 dark:text-personal_blue-text">
                  {ed.heading}
                </div>
                <TimelineDescription
                  shortDescription={ed.shortDescription}
                  data={ed.description}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default index;
