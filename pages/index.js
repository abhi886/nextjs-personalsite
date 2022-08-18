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
  const { blogImage } = profile[0].fields;

  return (
    <>
      <NextSeo
        title={"Abhishekh Maharjan - Personal Website"}
        description={`
        <Hello there />     
        I am Abhishekh, I'm a Software Engineer with a passion for solving problems and learning new things. 
        I build things to help people and community. 
        I have a strong background that encompasses diverse aspects of Modern Full Stack Software Engineering.
        I'm Seeking to heighten my experience towards becoming a Full Stack Software Engineer.
        My current set of toolbox includes react.js, node.js, next.js, tailwindCSS, jest, react-testing-library. I Write blogs...

`}
        openGraph={{
          url: "abhishekhmaharjan.com",
          title: "Abhishekh Maharjan",
          description: ` I am Abhishekh, I'm a Software Engineer with a passion for solving problems and learning new things. 
            I build things to help people and community. 
            I have a strong background that encompasses diverse aspects of Modern Full Stack Software Engineering.
            I'm Seeking to heighten my experience towards becoming a Full Stack Software Engineer.
            My current set of toolbox includes react.js, node.js, next.js, tailwindCSS, jest, react-testing-library...
            `,
          images: [
            {
              url: `https:${blogImage.fields.file.url}`,
              width: 1200,
              height: 630,
              alt: "Abhishekh Maharjan Logo",
              type: "image/png",
            },
          ],
        }}
      />
      {/* <Head>
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
      </Head> */}
      <main className='px-6 bg-personal_blue'>
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
