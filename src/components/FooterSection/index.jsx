import React from 'react';
import Social from '../Social';

function FooterSection() {
  return (
    <footer
      id="footerSection"
      className="p-5 dark:bg-personal_blue border border-t-2 dark:border-none"
    >
      <Social />
      <p className="dark:text-white text-xs text-center pt-4">
        Site Built Using: Next.js, TailwindCSS, Contentful
      </p>
    </footer>
  );
}

export default FooterSection;
