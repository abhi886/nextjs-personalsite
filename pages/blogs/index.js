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
      <section className='container px-8 py-5 lg:py-8 mx-auto xl:px-5 max-w-screen-lg'>
        <div className='grid gap-10 lg:gap-10 md:grid-cols-2 '>
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
