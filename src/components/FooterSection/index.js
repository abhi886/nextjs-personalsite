import React from "react";
import Social from "../Social";

const FooterSection = () => {
  return (
    <footer className='p-5'>
      <Social />

      <p className='text-white text-xs text-center pt-4'>
        Site Built Using: Next.js, TailwindCSS, Contentful
      </p>
    </footer>
  );
};

export default FooterSection;
