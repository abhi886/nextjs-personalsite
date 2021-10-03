import Head from "next/head";
import Header from "../src/components/HeaderSection/index";
import HeroSection from "../src/components/HeroSection";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Abhishekh Maharjan</title>
      </Head>
      {/* <Header /> */}
      <HeroSection />
    </div>
  );
}
