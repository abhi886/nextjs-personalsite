import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Layout from '../src/components/LandingPageLayout/index';

export default function NotFound() {
  const [time, setTime] = useState(5);
  const router = useRouter();
  useEffect(() => {
    if (time === 1) {
      router.push('/');
    }
    const timer = setTimeout(() => {
      setTime(time - 1);
    }, 1000);
    return () => {
      clearTimeout(timer);
    };
  }, [time]);
  return (
    <Layout>
      <section className="mx-auto px-8 md:px-8 xl:px-12 xl:max-w-6xl h-screen">
        <div className="dark:bg-personal_blue dark:shadow-gray-400 text-center relative top-1/3 h-36 p-4">
          <h1 className="text-xl text-bold dark:text-white">404 | Not Found</h1>
          <p className="text-md dark:text-white pt-6 tracking-wide">
            Sorry. The requested URL /badpage was not found in this server.
            <br />
            Redirecting you to{' '}
            <a href="/">
              <span className="underline decoration-sky-500">Home page</span>...
              in {time} seconds.
            </a>{' '}
          </p>
        </div>
      </section>
    </Layout>
  );
}
