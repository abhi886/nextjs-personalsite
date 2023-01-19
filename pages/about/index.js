import React from "react";
import Layout from "../../src/components/OtherPageLayout";
import query from "../../src/utils/queries/about-page-query";
import useContentful from "../../src/customHooks/use-contentful";
import { HiArrowRight } from "react-icons/hi";
import Image from "next/dist/client/image";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { BLOCKS, INLINES } from "@contentful/rich-text-types";
const RICHTEXT_OPTIONS = {
  renderNode: {
    [BLOCKS.HEADING_5]: (node, children) => {
      return (
        <h5 className='text-lg lg:text-xl text-personal_blue-text py-4'>
          {children}
        </h5>
      );
    },
    [BLOCKS.TABLE]: (node, children) => {
      return (
        <>
          <table className='w-full lg:w-2/3 my-6'>
            {" "}
            <tbody>{children} </tbody>
          </table>
        </>
      );
    },

    [BLOCKS.TABLE_HEADER_CELL]: (node, children) => {
      return (
        <th scope='col' className='bg-personal_blue-lightBlue w-20 '>
          {children}
        </th>
      );
    },
    [BLOCKS.TABLE_ROW]: (node, children) => {
      return <tr>{children}</tr>;
    },
    [BLOCKS.TABLE_CELL]: (node, children) => {
      return <td className='w-1/2'>{children}</td>;
    },
    [BLOCKS.HEADING_3]: (node, children) => {
      return (
        <h3 className='text-personal_blue-textParagraph leading-7 tracking-wider lg:text-2xl  lg:leading-10 lg:tracking-wider'>
          {children}
        </h3>
      );
    },
    [BLOCKS.HEADING_2]: (node, children) => {
      return (
        <h2 className='text-xl font-bold text-personal_blue-blue '>
          {children}
        </h2>
      );
    },
    [BLOCKS.HEADING_1]: (node, children) => {
      return (
        <h1 className='text-2xl font-extrabold  text-personal_blue-blue mb-4'>
          {children}
        </h1>
      );
    },
    [BLOCKS.PARAGRAPH]: (node, children) => {
      return (
        <p className='text-base lg:text-lg font-normal text-personal_blue-textParagraph'>
          {" "}
          {children}
        </p>
      );
    },
    [INLINES.HYPERLINK]: (node, children) => {
      return (
        <a
          href={node.data.uri}
          className='border-dotted border-b-2 border-personal_blue-text'
        >
          {children}
        </a>
      );
    },
  },
};
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
        {/* <div class='flex overflow-x-auto overflow-y-hidden border-b border-gray-200 whitespace-nowrap dark:border-gray-700'>
          <button class='inline-flex items-center h-10 px-4 -mb-px text-sm text-center text-blue-600 bg-transparent border-b-2 border-blue-500 sm:text-base dark:border-blue-400 dark:text-blue-300 whitespace-nowrap focus:outline-none'>
            About Me
          </button>

          <button class='inline-flex items-center h-10 px-4 -mb-px text-sm text-center text-gray-700 bg-transparent border-b-2 border-transparent sm:text-base dark:text-white whitespace-nowrap cursor-base focus:outline-none hover:border-gray-400'>
            My Timeline
          </button>
        </div> */}

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
