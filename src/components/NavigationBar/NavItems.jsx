import React from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import DarkModeToggleButton from '../DarkModeToggleButton';

function NavItems() {
  const router = useRouter();
  const currentRoute = router.pathname;
  const navOptions = [
    { pathname: '/', value: 'Home' },
    { pathname: '/about', value: 'About' },
    { pathname: '/blogs', value: 'Blogs' },
    { pathname: '/contact', value: 'Contact' },
  ];

  return (
    <>
      {navOptions.map(({ pathname, value }) => (
        <Link href={pathname} key={value}>
          <span
            className={`my-2 text-white cursor-pointer transition-colors duration-300 transform hover:text-personal_blue-text md:mx-4 md:my-0 ${
              currentRoute === pathname ? 'text-personal_blue-text' : 'text-red'
            }`}
          >
            {value}
          </span>
        </Link>
      ))}
      <DarkModeToggleButton />
    </>
  );
}

export default NavItems;
