import Head from "next/dist/shared/lib/head";
import { useEffect } from "react";
import { useRouter } from "next/router";
import HeaderSection from "../src/components/HeaderSection/index";
import FooterSection from "../src/components/FooterSection/index";

export default function NotFound() {
  const router = useRouter();
  useEffect(() => {
    setTimeout(() => {
      router.push("/");
    }, 4000);
  }, []);
  return (
    <>
      <Head>
        <title>404 Not Found</title>
      </Head>
      <div className='px-4 py-2 bg-personal_blue'>
        <HeaderSection />
      </div>
      <section className='mx-auto px-8 md:px-8 xl:px-12 xl:max-w-6xl h-screen'>
        <div className='bg-personal_blue shadow-gray-400 origin-bottom -rotate-2 text-center relative top-1/3 h-36 p-4'>
          <h1 className='text-bold text-white'>404</h1>
          <h2 className='text-bold text-white'>
            Oooops! The page cannot be found
          </h2>
          <p className='text-bold text-white'>
            Redirecting to{" "}
            <a href='/'>
              <span className='underline decoration-sky-500'>Home page</span>...
            </a>{" "}
          </p>
        </div>
      </section>
      <div className='bg-personal_blue'>
        <FooterSection />
      </div>
    </>
  );
}
