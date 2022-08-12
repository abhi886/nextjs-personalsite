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
import { createClient } from "contentful";

export async function getStaticProps() {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_KEY,
  });

  const res = await client.getEntries({ content_type: "works" });

  return {
    props: {
      works: res.items,
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
export default function Home({ works }) {
  const lWorks = works.filter((work) => work.fields.type == "liveWorks");
  const oWorks = works.filter((work) => work.fields.type == "otherWorks");
  const profile = works.filter((work) => work.fields.type == "Profile");
  return (
    <div>
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
      {/* <Header /> */}
      <HeroSection />
      <main className='px-6 bg-personal_blue'>
        <About profile={profile} useOnScreen={useOnScreen} />
        <Works useOnScreen={useOnScreen} works={lWorks} />
        <Work2 useOnScreen={useOnScreen} works={oWorks} />
        <HireMe useOnScreen={useOnScreen} />
        <ContactMe useOnScreen={useOnScreen} />
        <ScrollToTop />
      </main>
    </div>
  );
}
