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
      <NextSeo
        title='BLogs| Abhishekh Maharjan|Modern Full Stack Web Development| Javascript'
        description='Abhishekh Maharjans Blogs. I write articles about Modern Full Stack Web Development. Subscribe to my newsletters to receive the latest blogs.'
        openGraph={{
          url: "abhishekhmaharjan.com/blogs",
          title: "Blogs| Abhishekh Maharjan",
          description:
            "Abhishekh Maharjans Blogs. I write articles about Modern Full Stack Web Development.",
          images: [
            {
              url: "../../public/images/logo.png",
              width: 800,
              height: 600,
              alt: "Abhishekh Maharjan Logo",
              type: "image/png",
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
