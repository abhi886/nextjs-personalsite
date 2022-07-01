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
import ScrollToTop from "../src/components/ScrollToTop";
import client from "../src/utils/contentfulCreateClient";

export async function getStaticProps() {
  const res = await client.getEntries({ content_type: "works" });
  return {
    props: {
      works: res.items,
    },
    revalidate: 1,
  };
}

export default function Home({ works }) {
  const lWorks = works.filter((work) => work.fields.type == "liveWorks");
  const oWorks = works.filter((work) => work.fields.type == "otherWorks");
  const profile = works.filter((work) => work.fields.type == "Profile");
  return (
    <>
      <Head>
        <title>Abhishekh Maharjan</title>
        <meta
          property='og:title'
          content={profile[0].fields.shortDescription}
          key='title'
        />
        <meta
          name='viewport'
          content='width=device-width, initial-scale=1.0'
        ></meta>
      </Head>
      <HeroSection />
      <main className='px-6 bg-personal_blue'>
        <About profile={profile} />
        <Works works={lWorks} />
        <Work2 works={oWorks} />
        <HireMe />
        <ContactMe />
        <ScrollToTop />
        <FooterSection />
      </main>
    </>
  );
}
