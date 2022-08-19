import React from "react";
import HeaderSection from "../../src/components/HeaderSection";
import FooterSection from "../../src/components/FooterSection";
import { createClient } from "contentful";
import BlogCard from "../../src/components/BlogCard/BlogCard";
import Layout from "../../src/components/OtherPageLayout";
import { NextSeo } from "next-seo";
import logo from "../../public/images/logo.png";

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
        <div class='py-6 md:py-12 '>
          <h2 class='text-2xl md:text-4xl font-bold font-sans text-personal_blue md:leading-tight'>
            <strong>Blog</strong> Posts
          </h2>

          <h2 class='text-xl text-gray-600 mt-2'>
            I write about modern{" "}
            <strong>FULL Stack Web and Software Development.</strong> Subscribe
            to my newsletter to make sure you dont miss anything
          </h2>
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
