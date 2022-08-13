import React from "react";
import Head from "next/dist/shared/lib/head";
import { createClient } from "contentful";
import HeaderSection from "../../src/components/HeaderSection";
import FooterSection from "../../src/components/FooterSection";
import Skeleton from "../../src/components/Skeleton";
import WorkSlugPage from "../../src/components/BlogSlugPageCard";

const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_KEY,
});

export async function getStaticPaths() {
  const res = await client.getEntries({
    content_type: "works",
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
    content_type: "works",
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
      works: items[0],
    },
    revalidate: 1,
  };
}

function aslug({ works }) {
  const { title, blogImage, workDescription, language, readTime } =
    works.fields;
  const { updatedAt } = works.sys;

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
      <WorkSlugPage
        title={title}
        readTime={readTime}
        imageUrl={blogImage}
        description={workDescription}
        updatedDate={updatedAt}
        language={language}
        goBackLink={"/"}
      />
   
    </>
  );
}

export default aslug;
