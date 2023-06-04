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
        <li
          className="list-none text-center h-14 md:h-0 items-center justify-cente"
          key={value}
        >
          <Link href={pathname}>
            <span
              className={`inline-block align-middle cursor-pointer transition-colors duration-300 transform hover:text-personal_blue-text md:mx-4 md:my-0 ${
                currentRoute === pathname
                  ? 'text-personal_blue-text'
                  : 'text-white'
              }`}
            >
              {value}
            </span>
          </Link>
        </li>
      ))}
      <DarkModeToggleButton />
    </>
  );
}

export default NavItems;
