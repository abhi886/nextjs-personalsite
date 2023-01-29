import React from 'react';
import Social from '../Social';

function FooterSection() {
  return (
    <footer className="p-5 bg-personal_blue">
      <Social />
      <p className="text-white text-xs text-center pt-4">
        Site Built Using: Next.js, TailwindCSS, Contentful
      </p>
    </footer>
  );
}

export default FooterSection;
