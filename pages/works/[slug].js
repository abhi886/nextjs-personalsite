import React from "react";
import { createClient } from "contentful";
import HeaderSection from "../../src/components/HeaderSection";
import Image from "next/image";
// import logo from "../../../public/images/logo.png";
import myPhoto from "../../public/images/me.jpg";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_KEY,
});

export async function getStaticPaths() {
  const res = await client.getEntries({
    content_type: "works",
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
    content_type: "works",
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
      works: items[0],
    },
    revalidate: 10,
  };
}

function aslug({ works }) {
  const { title, blogImage, workDescription } = works.fields;
  console.log(works.fields);
  return (
    <>
      <div>
        <div className='px-4 py-2 bg-personal_blue'>
          <HeaderSection />
        </div>
        <div className='bg-personal_blue h-4 w-full border-t'>
          <br />
        </div>
      </div>
      <div className='mx-auto mt-10 px-4 pb-28 sm:mt-16 sm:px-6 md:px-8 xl:px-12 xl:max-w-6xl'>
        <main>
          <article className='relative pt-10 max-w-3xl mx-auto xl:max-w-none xl:grid xl:grid-cols-3 xl:gap-x-8'>
            <h1 className='col-span-full text-3xl sm:text-4xl sm:text-center xl:mb-16 font-extrabold tracking-tight text-slate-900 dark:text-slate-200'>
              {title}
            </h1>
            <div className='text-sm leading-6 mb-16 xl:mb-0'>
              <div className='hidden mb-5 pb-5 border-b border-slate-200 xl:block dark:border-slate-200/5'>
                <a
                  className='group flex font-semibold text-slate-700 hover:text-slate-900 dark:text-slate-200 dark:hover:text-white'
                  href='/blog'
                >
                  {`< Go back to blog`}
                </a>
              </div>
              <dl>
                <dt className='sr-only'>Date</dt>
                <dd className='absolute top-0 inset-x-0 text-slate-700 sm:text-center dark:text-slate-400'>
                  <time dateTime='2022-01-24T19:00:00.000Z'>
                    Tuesday, January 25, 2022
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
                    <div>
                      <div className='text-slate-900 dark:text-slate-200'>
                        Abhishekh Maharjan
                      </div>
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
            <div className='prose prose-slate dark:prose-dark col-span-2'>
              <div className='my-4'>
                <a href='https://github.com/tailwindlabs/prettier-plugin-tailwindcss'>
                  <div className='relative not-prose my-[2em] first:mt-0 last:mb-0 rounded-lg overflow-hidden text-center'>
                    {/* <Image
                    src='/_next/static/media/banner.0b2d8db3e6f1e9e306ec2ae1914da760.jpg'
                    alt=''
                  /> */}
                    <Image
                      src={`https:${blogImage.fields.file.url}`}
                      // layout='fill'
                      objectFit='cover'
                      width={blogImage.fields.file.details.image.width}
                      height={blogImage.fields.file.details.image.height}
                      className='mr-3 w-10 h-10 bg-slate-50 dark:bg-slate-800'
                    ></Image>
                    <div className='absolute inset-0 rounded-lg ring-1 ring-inset ring-slate-900/10'></div>
                  </div>
                </a>
              </div>
              {documentToReactComponents(workDescription)}
            </div>
          </article>
        </main>
      </div>
    </>
  );
}

export default aslug;
