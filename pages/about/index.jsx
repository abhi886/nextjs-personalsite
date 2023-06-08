import React from 'react';
import Image from 'next/dist/client/image';
import useContentful from '../../src/customHooks/use-contentful';
import query from '../../src/utils/queries/about-page-query';
import RichTextOptions from '../../src/utils/rich-text-options';

export async function getStaticProps() {
  const data = await useContentful(query);
  return {
    props: {
      data,
    },
    revalidate: 1,
  };
}
function about({ data }) {
  const { profileImage, fullProfileDescription } =
    data.profileCollection.items[0];
  return (
    <section
      id="about"
      className="container max-w-7xl mx-auto py-10 px-4 sm:py-14 sm:px-6 lg:px-8 "
    >
      <div className=" grid grid-cols-12 ">
        <div className="col-span-12 md:col-start-3 md:col-span-8">
          <div className="w-60 h-60 lg:w-60 lg:h-60 border-2 border-dashed rounded-full m-auto ">
            <div className="relative w-56 h-56 lg:h-56 lg:w-56 m-auto border-2 border-dashed rounded-full mt-1.5">
              <Image
                className="rounded-full object-cover"
                src={`${profileImage.url}`}
                alt="Abhishekh Maharjans Photo"
                fill
              />
            </div>
          </div>
        </div>

        <div className="col-span-12 md:col-start-3 md:col-span-8">
          <RichTextOptions data={fullProfileDescription} />
        </div>
      </div>
    </section>
  );
}

export default about;
