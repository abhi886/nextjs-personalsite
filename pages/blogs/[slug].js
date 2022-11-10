import React from "react";
import Head from "next/dist/shared/lib/head";
import { createClient } from "contentful";
import HeaderSection from "../../src/components/HeaderSection";
import FooterSection from "../../src/components/FooterSection";
import BlogSlugPage from "../../src/components/BlogSlugPageCard";
import Layout from "../../src/components/OtherPageLayout";
import { NextSeo } from "next-seo";

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
    fallback: false,
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

export default function blogSlug({ blogs }) {
  const { title, readTime, blogImage, blogDescription } = blogs.fields;
  const { updatedAt } = blogs.sys;
  return (
    <>
      <NextSeo
        title={`Blogs| ${title}`}
        description={title}
        openGraph={{
          url: `abhishekhmaharjan.com/blogs/${title}`,
          title: `Blogs| ${title}`,
          description: title,
          images: [
            {
              url: `https:${blogImage.fields.file.url}`,
              width: 800,
              height: 600,
              alt: "Blog Page Imange",
              type: "image/png",
            },
          ],
          type: "article",
        }}
      />

      <BlogSlugPage
        title={title}
        readTime={readTime}
        imageUrl={blogImage}
        description={blogDescription}
        updatedDate={updatedAt}
        goBackLink={"/blogs"}
      />
    </>
  );
}

blogSlug.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
