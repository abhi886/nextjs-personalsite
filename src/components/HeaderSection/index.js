import React from "react";
import Head from "next/head";

const HeaderSection = () => {
  return (
    <React.Fragment>
      <Head>
        <title>Abhishekh Maharjan</title>
      </Head>
      <div id='header-wrapper' className='bg-purple-500'>
        <header className='bg-purple-500 lg:container mx-auto text-white py-5'>
          <h2 className='text-xl'>Abhishekh Maharjan</h2>
        </header>
      </div>
    </React.Fragment>
  );
};

export default HeaderSection;
