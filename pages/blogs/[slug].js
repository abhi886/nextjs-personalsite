import React from "react";
import Head from "next/dist/shared/lib/head";
import { createClient } from "contentful";
import HeaderSection from "../../src/components/HeaderSection";
import FooterSection from "../../src/components/FooterSection";
import BlogSlugPage from "../../src/components/BlogSlugPageCard";
import Layout from "../../src/components/OtherPageLayout";

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
    revalidate: 10,
  };
}

export default function blogSlug({ blogs }) {
  const { title, readTime, blogImage, blogDescription } = blogs.fields;
  const { updatedAt } = blogs.sys;
  return (
    <>
      <div>
        <Head>
          <title>{title}</title>
          <meta property='og:title' content={title} key={title} />
          <meta
            name='viewport'
            content='width=device-width, initial-scale=1.0'
          ></meta>
        </Head>
      </div>
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
