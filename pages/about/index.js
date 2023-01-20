import React from "react";
import Layout from "../../src/components/LandingPageLayout";
import useContentful from "../../src/customHooks/use-contentful";
import query from "../../src/utils/queries/about-page-query";
import { HiArrowRight } from "react-icons/hi";
import Image from "next/dist/client/image";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import RICHTEXT_OPTIONS from "../../src/utils/rich-text-options";
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
  const { profileImage, profileDescription, fullProfileDescription } =
    data.profileCollection.items[0];
  return (
    <section
      id='about'
      className='px-4 py-12 bg-personal_blue md:px-20 lg:px-44'
    >
      <div className='container grid grid-cols-1 h-full content-center gap-4'>
        <div className='w-60 h-60 lg:w-60 lg:h-60 border-2 border-dashed rounded-full m-auto '>
          <div className='relative w-56 h-56 lg:h-56 lg:w-56 m-auto border-2 border-dashed rounded-full mt-1.5'>
            <Image
              className='rounded-full object-cover'
              src={`${profileImage.url}`}
              alt='Abhishekh Maharjans Photo'
              layout='fill'
            />
          </div>
        </div>
        <div>
          {documentToReactComponents(
            fullProfileDescription.json,
            RICHTEXT_OPTIONS
          )}
        </div>
      </div>
    </section>
  );
}

about.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

export default about;
