import React from "react";
import Head from "next/dist/shared/lib/head";
import HeaderSection from "../../src/components/HeaderSection";
import FooterSection from "../../src/components/FooterSection";
import myPhoto from "../../public/images/me.jpg";
import { RewindIcon, ClockIcon } from "@heroicons/react/solid";
import Image from "next/image";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { BLOCKS, INLINES } from "@contentful/rich-text-types";

import { createClient } from "contentful";
import convertDate from "../../src/utils/convertDate";

const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_KEY,
});

export async function getStaticPaths() {
  const res = await client.getEntries({
    content_type: "blog",
  });
  const paths = res.items.map((item) => {
    return {
      params: { slug: item.fields.slug },
    };
  });

  return {
    paths,
    fallback: true,
  };
}

export async function getStaticProps({ params }) {
  const { items, thumbnail } = await client.getEntries({
    content_type: "blog",
    "fields.slug": params.slug,
  });

  if (!items.length) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }
  return {
    props: {
      blogs: items[0],
    },
    revalidate: 1,
  };
}
const renderOptions = {
  renderNode: {
    [INLINES.EMBEDDED_ENTRY]: (node, children) => {
      // target the contentType of the EMBEDDED_ENTRY to display as you need
      if (node.data.target.sys.contentType.sys.id === "blogPost") {
        return (
          <a href={`/blog/${node.data.target.fields.slug}`}>
            {" "}
            {node.data.target.fields.title}
          </a>
        );
      }
    },
    [BLOCKS.EMBEDDED_ENTRY]: (node, children) => {
      // target the contentType of the EMBEDDED_ENTRY to display as you need
      if (node.data.target.sys.contentType.sys.id === "codeBlock") {
        return (
          <pre>
            <code>{node.data.target.fields.code}</code>
          </pre>
        );
      }

      if (node.data.target.sys.contentType.sys.id === "videoEmbed") {
        return (
          <iframe
            src={node.data.target.fields.embedUrl}
            height='100%'
            width='100%'
            frameBorder='0'
            scrolling='no'
            title={node.data.target.fields.title}
            allowFullScreen={true}
          />
        );
      }
    },

    [BLOCKS.EMBEDDED_ASSET]: (node, children) => {
      // render the EMBEDDED_ASSET as you need
      return (
        <img
          src={`https://${node.data.target.fields.file.url}`}
          height={node.data.target.fields.file.details.image.height}
          width={node.data.target.fields.file.details.image.width}
          alt={node.data.target.fields.description}
        />
      );
    },
  },
};

export default function blogSlug({ blogs }) {
  const { title, readTime, blogImage, blogDescription } = blogs.fields;
  const { updatedAt } = blogs.sys;
  return (
    <>
      <div>
        <Head>
          <title>{title}</title>
          <meta property='og:title' content={title} key={title} />
          <meta
            name='viewport'
            content='width=device-width, initial-scale=1.0'
          ></meta>
        </Head>
        <div className='px-4 py-2 bg-personal_blue'>
          <HeaderSection />
        </div>
        {/* <div className='bg-personal_blue h-4 w-full border-t'>
          <br />
        </div> */}
      </div>
      <div className='mx-auto mt-10 px-4 pb-28 sm:mt-16 sm:px-6 md:px-8 xl:px-12 xl:max-w-6xl'>
        <main>
          <article className='relative pt-10 max-w-3xl mx-auto xl:max-w-none xl:grid xl:grid-cols-3 xl:gap-x-8'>
            <h1 className='col-span-full text-3xl sm:text-4xl sm:text-center xl:mb-16 font-extrabold tracking-tight'>
              {title}
            </h1>

            <div className='text-sm leading-6  xl:mb-0'>
              <div className='hidden mb-5 pb-5 border-b border-slate-200 xl:block  dark:border-slate-200/5'>
                <a
                  className='group flex font-semibold text-slate-700 hover:text-slate-900'
                  href='/'
                >
                  <div className='flex items-center space-x-4 justify-end'>
                    <div className='flex items-center space-x-2 border-2 p-2 rounded-full'>
                      <RewindIcon className='h-6' />
                    </div>
                    <p className='hidden md:inline-flex cursor-pointer'>
                      Go Back
                    </p>
                  </div>
                </a>
              </div>
              <dl>
                <dt className='sr-only'>Date</dt>
                <dd className='absolute top-0 inset-x-0 text-slate-700 sm:text-center'>
                  <time dateTime={updatedAt}>
                    Last Updated At: {convertDate(updatedAt)}
                  </time>
                </dd>
                <div className='sm:flex sm:flex-wrap sm:justify-center xl:block'>
                  <dt className='sr-only'>Author</dt>
                  <dd className='flex items-center font-medium mt-6 sm:mx-3 xl:mx-0'>
                    <Image
                      src={myPhoto}
                      alt='Abhishekh Maharjan Photo'
                      width={60}
                      height={60}
                      // layout='fill'
                      objectFit='contain'
                      className='mr-3 w-12 h-12 rounded-full bg-slate-50 dark:bg-slate-800'
                    />
                    <div className='ml-4'>
                      <div className=''>Abhishekh Maharjan</div>
                      <a
                        href='/'
                        className='text-blue-500 hover:text-sky-600 dark:text-sky-400'
                      >
                        @abhishekhmhrzn
                      </a>
                    </div>
                  </dd>
                </div>
              </dl>
            </div>
            <div className='prose max-w-none prose-img:rounded-xl prose-slate dark:prose-dark col-span-2'>
              <div className=''>
                <div className='flex items-center space-x-4 justify-end text-gray-500'>
                  <div className='flex items-center space-x-1'>
                    <ClockIcon className='h-6' />
                  </div>
                  <p className='md:inline-flex cursor-pointer text-sm'>
                    Read Time : {readTime} mins
                  </p>
                </div>

                <div className='relative not-prose first:mt-0 last:mb-0 rounded-lg overflow-hidden text-center'>
                  <Image
                    src={`https:${blogImage.fields.file.url}`}
                    alt='Main picture of the blog'
                    objectFit='fill'
                    width={blogImage.fields.file.details.image.width}
                    height={blogImage.fields.file.details.image.height}
                    className=' w-10 h-10'
                  ></Image>
                  <div className='absolute inset-0 rounded-lg ring-1 ring-inset ring-slate-900/10'></div>
                </div>
              </div>

              <div className='prose max-w-none  prose-a:text-blue-600'>
                {documentToReactComponents(blogDescription, renderOptions)}
              </div>
            </div>
          </article>
        </main>
      </div>
      <div className='bg-personal_blue'>
        <FooterSection />
      </div>
    </>
  );
}
