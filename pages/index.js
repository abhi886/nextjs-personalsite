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

export default function Home() {
  return (
    <div>
      <Head>
        <title>Abhishekh Maharjan</title>
      </Head>
      {/* <Header /> */}
      <HeroSection />
      <main className='px-6 bg-personal_blue'>
        <About />
        <Works />
        <Work2 />
        <HireMe />
        <ContactMe />
        <Contact />
        <FooterSection />
      </main>
    </div>
  );
}
