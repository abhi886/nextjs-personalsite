import { useEffect, useState, useRef } from "react";
import Head from "next/head";
import Header from "../src/components/HeaderSection/index";
import HeroSection from "../src/components/HeroSection";
import Works from "../src/components/Works";
import HireMe from "../src/components/HireMe";
import About from "../src/components/About";
import Work2 from "../src/components/work2";
import ContactMe from "../src/components/ContactMe";
import FooterSection from "../src/components/FooterSection/index";
import Contact from "../src/components/Contact";
import ScrollToTop from "../src/components/ScrollToTop";
import Layout from "../src/components/LandingPageLayout";
import { createClient } from "contentful";
import logo from "../public/images/logo.png";
import { NextSeo } from "next-seo";
import useContentful from "../src/customHooks/use-contentful";
import query from "../src/utils/queries/index-page-query";
import HeroTest from "../src/components/HeroTest";
import FeaturedBlog from "../src/components/FeaturedBlog";
import Image from "next/dist/client/image";
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
        {/* <HeroTest
          profile={profileDescription}
          profileImage={profileImage}
        ></HeroTest> */}
        {/*  <Works works={lWorks} />
        <Work2 works={oWorks} />*/}
        {/* <HireMe /> */}
        {/* <ContactMe /> */}
        <ScrollToTop />
      </main>
    </>
  );
}

Home.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
