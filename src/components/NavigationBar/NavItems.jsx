import React from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import DarkModeToggleButton from '../DarkModeToggleButton';

function NavItems() {
  const router = useRouter();
  const currentRoute = router.pathname;
  const navOptions = [
    { paths: ['/'], pathname: '/', value: 'Home' },
    { paths: ['/about'], pathname: '/about', value: 'About' },
    { paths: ['/blogs', '/blogs/[blog]'], pathname: '/blogs', value: 'Blogs' },
    { paths: ['/contact'], pathname: '/contact', value: 'Contact' },
  ];
  return (
    <>
      {navOptions.map(({ pathname, value, paths }) => (
        <li
          className="list-none text-center h-14 md:h-0 items-center justify-cente"
          key={value}
        >
          <Link href={pathname} legacyBehavior>
            <span
              className={`inline-block align-middle cursor-pointer transition-colors duration-300 transform hover:text-personal_blue-text md:mx-4 md:my-0 ${
                currentRoute === paths[0] || currentRoute === paths[1]
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
