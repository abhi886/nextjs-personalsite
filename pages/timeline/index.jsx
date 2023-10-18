import React from 'react';
import useContentful from '../../src/customHooks/use-contentful';
import query from '../../src/utils/queries/timeline-page-query';
import TimelineDescription from '../../src/components/TimelineDescription';

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
  const everyDayData = data.everyDayBlockCollection.items;
  return (
    <section className="container max-w-7xl mx-auto py-10 px-4 sm:py-14 sm:px-6 lg:px-8 ">
      <div className=" grid grid-cols-12 ">
        <div className="col-span-12 md:col-start-3 md:col-span-8 pb-10">
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
            <TimelineDescription
              shortDescription={ed.shortDescription}
              data={ed}
              key={ed.date}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default index;
