import React from "react";
import HeaderSection from "../../src/components/HeaderSection";
import FooterSection from "../../src/components/FooterSection";
import { createClient } from "contentful";
import BlogCard from "../../src/components/BlogCard/BlogCard";
import Layout from "../../src/components/OtherPageLayout";
import { NextSeo } from "next-seo";
import logo from "../../public/images/logo.png";
import { SearchIcon } from "@heroicons/react/outline";

export async function getStaticProps() {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_KEY,
  });

  const res = await client.getEntries({ content_type: "blog" });
  const resSEO = await client.getEntries({ content_type: "seo" });

  return {
    props: {
      blogs: res.items,
      seoData: resSEO.items,
    },
    revalidate: 1,
  };
}

function index({ blogs, seoData }) {
  const blogPageSEOData = seoData.filter(
    (data) => data.fields.whichPage == "Blogs Page"
  );
  const {
    title,
    description,
    url,
    pageImage,
    pageSeoImageType,
    pageImageAltText,
  } = blogPageSEOData[0].fields;

  return (
    <>
      <NextSeo
        title={title}
        description={description}
        openGraph={{
          url: url,
          title: title,
          description: description,
          images: [
            {
              url: `https:${pageImage.fields.file.url}`,
              width: 800,
              height: 600,
              alt: pageImageAltText,
              type: pageSeoImageType,
            },
          ],
          type: "article",
        }}
      />
      <section className='px-4 lg:px-44 py-5 lg:py-8 '>
        <div className='py-1'>
          <p className='text-xl  md:text-4xl font-bold font-sans text-personal_blue md:leading-tight'>
            <strong>Blog</strong> Posts
          </p>
          <p class='text-base md:text-xl text-gray-600 mt-2'>
            I write articles about modern Full Stack Web Development. View my
            recent articles and blog posts.
            {/* Subscribe to my newsletter to make sure you dont miss anything */}
          </p>
        </div>
        <div className='flex justify-center mt-2'>
          <div className='mb-3 w-full '>
            <input
              type='search'
              className='block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding
        border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
      '
              id='searchPosts'
              placeholder='Search'
            />
          </div>
        </div>
        <div className='grid gap-10 lg:gap-10 md:grid-cols-2 lg:grid-cols-3 '>
          {blogs.map((blog, i) => (
            <BlogCard key={i} {...blog.fields} {...blog.sys}></BlogCard>
          ))}
        </div>
      </section>
    </>
  );
}

index.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
export default index;
