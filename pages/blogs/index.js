import React from "react";
import HeaderSection from "../../src/components/HeaderSection";
import FooterSection from "../../src/components/FooterSection";
import { createClient } from "contentful";
import BlogCard from "../../src/components/BlogCard/BlogCard";

export async function getStaticProps() {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_KEY,
  });

  const res = await client.getEntries({ content_type: "blog" });

  return {
    props: {
      blogs: res.items,
    },
    revalidate: 1,
  };
}

function index({ blogs }) {
  return (
    <>
      <div className='px-4 py-2 bg-personal_blue'>
        <HeaderSection></HeaderSection>
      </div>
      <div className='container px-8 py-5 lg:py-8 mx-auto xl:px-5 max-w-screen-lg'>
        <div className='grid gap-10 lg:gap-10 md:grid-cols-2 '>
          {blogs.map((blog, i) => (
            <BlogCard key={i} {...blog.fields} {...blog.sys}></BlogCard>
          ))}
        </div>
      </div>

      <div className='bg-personal_blue'>
        <FooterSection />
      </div>
    </>
  );
}

export default index;
