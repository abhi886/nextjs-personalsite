import React, { useState, useMemo } from 'react';
import { NextSeo } from 'next-seo';
import query from '../../src/utils/queries/blog-pag-query';
import BlogCard from '../../src/components/BlogCard/BlogCard';
import useContentful from '../../src/customHooks/use-contentful';
import Layout from '../../src/components/LandingPageLayout';
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
  const [searchQuery, SetSearchQuery] = useState('');
  const [filteredBlogs] = useState(blogCollection.items);
  const {
    title,
    description,
    url,
    pageImage,
    pageSeoImageType,
    pageImageAltText,
  } = seoCollection.items[0];

  const handleSearch = (inputQuery) => {
    SetSearchQuery(inputQuery);
  };

  const getFilteredBlogs = useMemo(() => {
    return filteredBlogs.filter((b) =>
      b.title.toLowerCase().startsWith(searchQuery.toLowerCase())
    );
  }, [filteredBlogs, searchQuery]);
  const { totalCount, filteredData } = useMemo(() => {
    if (!filteredBlogs) return { totalCount: 0, data: {} };
    let filtered = filteredBlogs;
    if (searchQuery) {
      filtered = getFilteredBlogs;
    }
    return { totalCount: filtered.length, filteredData: filtered };
  }, [filteredBlogs, searchQuery]);
  return (
    <Layout>
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
      <section className="px-4 py-5 min-h-screen lg:px-44 lg:py-8 dark:bg-personal_blue">
        <h1 className="text-3xl dark:text-personal_blue-textTitle text-gray-800 font-semibold pb-4 text-center  mx-auto">
          <strong>Blog</strong> Posts
        </h1>
        <p className="prose max-w-none prose-gray dark:prose-invert text-center">
          I write articles about modern Full Stack Web Development. View my
          recent articles and blog posts.
        </p>
        <SearchBox
          totalCount={totalCount}
          value={searchQuery}
          onChange={handleSearch}
        />
        <div className="grid gap-10 lg:gap-10 md:grid-cols-2 lg:grid-cols-3 ">
          {filteredData.map((fb, i) => (
            <BlogCard
              key={i}
              title={fb.title}
              blogImage={fb.blogImage}
              slug={fb.slug}
              updatedAt={fb.sys.publishedAt}
            />
          ))}
        </div>
      </section>
    </Layout>
  );
}

export default blog;
