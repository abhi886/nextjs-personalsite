import React, { useMemo, useState } from 'react';
import { createClient } from 'contentful';
import { NextSeo } from 'next-seo';
import BlogCard from '../../src/components/BlogCard/BlogCard';
import Layout from '../../src/components/LandingPageLayout';
import SearchBox from '../../src/components/SearchBox/SearchBox';

export async function getStaticProps() {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_KEY,
  });
  const res = await client.getEntries({ content_type: 'blog' });
  const resSEO = await client.getEntries({ content_type: 'seo' });

  return {
    props: {
      blogs: res.items,
      seoData: resSEO.items,
    },
    revalidate: 1,
  };
}

function index({ blogs, seoData }) {
  const [searchQuery, SetSearchQuery] = useState('');
  const [filteredBlogs] = useState(blogs);
  const blogPageSEOData = seoData.filter(
    (data) => data.fields.whichPage === 'Blogs Page'
  );
  const {
    title,
    description,
    url,
    pageImage,
    pageSeoImageType,
    pageImageAltText,
  } = blogPageSEOData[0].fields;
  const handleSearch = (query) => {
    SetSearchQuery(query);
  };

  const getFilteredBlogs = useMemo(() => {
    return filteredBlogs.filter((b) =>
      b.fields.title.toLowerCase().startsWith(searchQuery.toLowerCase())
    );
  }, [filteredBlogs, searchQuery]);
  const { totalCount, data } = useMemo(() => {
    if (!filteredBlogs) return { totalCount: 0, data: {} };
    let filtered = filteredBlogs;
    if (searchQuery) {
      filtered = getFilteredBlogs;
    }
    return { totalCount: filtered.length, data: filtered };
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
              url: `https:${pageImage.fields.file.url}`,
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
        <div>
          <p className="text-2xl text-personal_blue dark:text-personal_blue-textTitle md:text-4xl md:leading-tight">
            <strong>Blog</strong> Posts
          </p>
          <p className="text-base text-gray-600 dark:text-white my-2 md:text-xl">
            I write articles about modern Full Stack Web Development. View my
            recent articles and blog posts.
          </p>
        </div>
        <SearchBox
          totalCount={totalCount}
          value={searchQuery}
          onChange={handleSearch}
        />
        <div className="grid gap-10 lg:gap-10 md:grid-cols-2 lg:grid-cols-3 ">
          {data.map((fb, i) => (
            <BlogCard key={i} {...fb.fields} {...fb.sys} />
          ))}
        </div>
      </section>
    </Layout>
  );
}

// index.getLayout = function getLayout(page) {
//   return <Layout>{page}</Layout>;
// };
export default index;
