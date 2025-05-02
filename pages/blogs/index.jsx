import React from 'react';
import { NextSeo } from 'next-seo';
import query from '../../src/utils/queries/blog-pag-query';
import BlogCard from '../../src/components/BlogCard/BlogCard';
import useContentful from '../../src/customHooks/use-contentful';
import SearchBox from '../../src/components/SearchBox/SearchBox';

export async function getStaticProps() {
  const data = await useContentful(query);
  return {
    props: {
      data,
    },
    revalidate: 1,
  };
}

function blog({ data }) {
  const { blogCollection, seoCollection } = data;

  const {
    title,
    description,
    url,
    pageImage,
    pageSeoImageType,
    pageImageAltText,
  } = seoCollection.items[0];

  return (
    <>
      <NextSeo
        title={title}
        description={description}
        openGraph={{
          url,
          title,
          description,
          images: [
            {
              url: pageImage.url,
              width: 800,
              height: 600,
              alt: pageImageAltText,
              type: pageSeoImageType,
            },
          ],
          type: 'article',
        }}
      />

      <section className="container max-w-7xl mx-auto py-10 px-4 sm:py-14 sm:px-6 lg:px-8 ">
        <h1 className="pb-4 pt-8 text-3xl dark:text-personal_blue-textTitle text-gray-800 font-semibold text-center  mx-auto">
          <strong>Blog</strong> Posts
        </h1>
        <p className="prose max-w-none prose-gray dark:prose-invert text-center">
          I write articles about modern Full Stack Web Development. View my
          recent articles and blog posts.
        </p>
        <SearchBox
          searchData={blogCollection.items}
          displayComponent={BlogCard}
        />
      </section>
    </>
  );
}

export default blog;
