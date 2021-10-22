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
    revalidate: 10,
  };
}

export default function Home({ works }) {
  return (
    <div>
      <Head>
        <title>Abhishekh Maharjan</title>
      </Head>
      {/* <Header /> */}
      <HeroSection />
      <main className='px-6 bg-personal_blue'>
        <About />
        <Works works={works} />
        <Work2 />
        <HireMe />
        <ContactMe />
        <ScrollToTop />
        <FooterSection />
      </main>
    </div>
  );
}
