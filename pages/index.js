import { useEffect, useState, useRef } from "react";
import Head from "next/head";
import Image from "next/dist/client/image";
import Header from "../src/components/HeaderSection/index";
import HeroSection from "../src/components/HeroSection";
import About from "../src/components/About";
import ScrollToTop from "../src/components/ScrollToTop";
import Layout from "../src/components/LandingPageLayout";
import { NextSeo } from "next-seo";
import useContentful from "../src/customHooks/use-contentful";
import query from "../src/utils/queries/index-page-query";
import FeaturedBlog from "../src/components/FeaturedBlog";
import Newsletter from "../src/components/Newsletter";
import FeaturedWorkCard from "../src/components/FeaturedWorkCard";
import GetHired from "../src/components/GetHired";

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
          url: url,
          title: title,
          description: description,
          images: [
            {
              url: `https:${pageImage.url}`,
              width: 800,
              height: 600,
              alt: pageImageAltText,
              type: pageSeoImageType,
            },
          ],
          type: "website",
        }}
      />

      <main>
        <HeroSection aboutData={aboutData} />
        <About
          profile={aboutData.profileDescription}
          profileImage={aboutData.profileImage}
        />
        <FeaturedBlog blogData={blogData}></FeaturedBlog>
        <Newsletter></Newsletter>
        <FeaturedWorkCard workData={workData}></FeaturedWorkCard>
        <GetHired></GetHired>
        <ScrollToTop />
      </main>
    </>
  );
}

Home.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
