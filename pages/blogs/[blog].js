import React from 'react';
import { NextSeo } from 'next-seo';
import BlogSlugPage from '../../src/components/BlogSlugPageCard';
import Layout from '../../src/components/LandingPageLayout';
import query from '../../src/utils/queries/blog-page-slug-quuery';
import useContentful from '../../src/customHooks/use-contentful';
import querySingleBlogPage from '../../src/utils/queries/blog-page-query-props';

export async function getStaticPaths() {
  const data = await useContentful(query);
  const { blogCollection } = data;
  const blogSlugs = blogCollection.items;
  const paths = blogSlugs.map((s) => {
    return {
      params: { blog: `${s.slug}` },
    };
  });
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params: { blog } }) {
  const variables = { slug: blog };
  const data = await useContentful(querySingleBlogPage, variables);
  const [blogData] = data.blogCollection.items;
  return {
    props: { blog: { blogData } },
    revalidate: 1,
  };
}

export default function blogSlug({ blog: { blogData } }) {
  const {
    languages,
    title,
    readTime,
    blogImage: { url, width, height },
    blogDescription,
    sys,
  } = blogData;

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
              url,
              width: 800,
              height: 600,
              alt: 'Blog Page Imange',
              type: 'image/png',
            },
          ],
          type: 'article',
        }}
      />
      <Layout>
        <BlogSlugPage
          title={title}
          readTime={readTime}
          imageUrl={url}
          imageWidth={width}
          imageHeight={height}
          description={blogDescription}
          updatedDate={sys.publishedAt}
          languages={languages}
          goBackLink="/blogs"
        />
      </Layout>
    </>
  );
}
