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

export async function getStaticProps() {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_KEY,
  });

  const res = await client.getEntries({ content_type: "works" });
  const resSEO = await client.getEntries({ content_type: "seo" });

  return {
    props: {
      works: res.items,
      seoData: resSEO.items,
    },
    revalidate: 1,
  };
}
function useOnScreen(options) {
  const ref = useRef();
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setVisible(entry.isIntersecting);
    }, options);
    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [ref, options]);
  return [ref, visible];
}
export default function Home({ works, seoData }) {
  const lWorks = works.filter((work) => work.fields.type == "liveWorks");
  const oWorks = works.filter((work) => work.fields.type == "otherWorks");
  const profile = works.filter((work) => work.fields.type == "Profile");
  const { thumbnail } = profile[0].fields;
  const landingPageSEOData = seoData.filter(
    (data) => data.fields.whichPage == "Landing Page"
  );
  const {
    title,
    description,
    url,
    pageImage,
    pageSeoImageType,
    pageImageAltText,
  } = landingPageSEOData[0].fields;
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
              url: `https:${pageImage.fields.file.url}`,
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
        <HeroSection />
        <About profile={profile} useOnScreen={useOnScreen} />
        <Works useOnScreen={useOnScreen} works={lWorks} />
        <Work2 useOnScreen={useOnScreen} works={oWorks} />
        <HireMe useOnScreen={useOnScreen} />
        <ContactMe useOnScreen={useOnScreen} />
        <ScrollToTop />
      </main>
    </>
  );
}

Home.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
