import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

// eslint-disable-next-line react/prop-types
function NavLogo({ logo }) {
  return (
    <Link
      className="text-2xl font-bold text-personal_blue-text transition-colors duration-300 transform dark:text-white lg:text-3xl hover:text-gray-700 dark:hover:text-gray-300"
      href="/"
      legacyBehavior
    >
      <a href="/">
        <Image
          src={logo}
          alt="Abhishekh Maharjan Logo"
          width={40}
          height={31}
          className="m-0 p-0"
        />
      </a>
    </Link>
  );
}

export default NavLogo;
