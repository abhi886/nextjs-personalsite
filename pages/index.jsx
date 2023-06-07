/* eslint-disable react/prop-types */
import React from 'react';
import { NextSeo } from 'next-seo';
import HeroSection from '../src/components/HeroSection';
import About from '../src/components/About';
import ScrollToTop from '../src/components/ScrollToTop';
import useContentful from '../src/customHooks/use-contentful';
import query from '../src/utils/queries/index-page-query';
import FeaturedBlog from '../src/components/FeaturedBlog';
import Newsletter from '../src/components/Newsletter';
import FeaturedWorkCard from '../src/components/FeaturedWorkCard';
import GetHired from '../src/components/GetHired';

export async function getStaticProps() {
  const data = await useContentful(query);
  return {
    props: {
      data,
    },
    revalidate: 1,
  };
}
export default function Home({ data }) {
  const aboutData = data.profileCollection.items[0];
  const {
    title,
    description,
    url,
    pageImage,
    pageSeoImageType,
    pageImageAltText,
  } = data.seoCollection.items[0];

  const blogData = data.blogCollection.items;
  const workData = data.worksCollection.items;
  return (
    <>
      <NextSeo
        title={title}
        description={description}
        openGraph={{
          url,
          title,
          description,
          images: [
            {
              url: `https:${pageImage.url}`,
              width: 800,
              height: 600,
              alt: pageImageAltText,
              type: pageSeoImageType,
            },
          ],
          type: 'website',
        }}
      />

      <main>
        <HeroSection aboutData={aboutData} />
        <About
          profile={aboutData.profileDescription}
          profileImage={aboutData.profileImage}
        />
        <FeaturedBlog blogData={blogData} />
        <Newsletter />
        <FeaturedWorkCard workData={workData} />
        <GetHired />
        <ScrollToTop />
      </main>
    </>
  );
}
