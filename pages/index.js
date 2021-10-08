import Head from "next/head";
import Header from "../src/components/HeaderSection/index";
import HeroSection from "../src/components/HeroSection";
import Works from "../src/components/Works";
import HireMe from "../src/components/HireMe";
import About from "../src/components/About";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Abhishekh Maharjan</title>
      </Head>
      {/* <Header /> */}
      <HeroSection />
      <main className='max-w-7xl mx-auto px-8 sm:px-16'>
        <About />
        <Works />
        {/* <HireMe /> */}
      </main>
    </div>
  );
}
