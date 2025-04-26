import React from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';

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
          className="list-none text-center h-14 md:h-0 items-center justify-center"
          key={value}
        >
          <span
            className={`inline-block align-middle cursor-pointer transition-colors duration-300  transform dark:hover:text-personal_blue-text md:mx-4 md:my-0 ${
              currentRoute === paths[0] || currentRoute === paths[1]
                ? 'dark:text-personal_blue-text underline'
                : 'dark:text-white'
            }`}
          >
            <Link href={pathname} legacyBehavior>
              {value}
            </Link>
          </span>
        </li>
      ))}
    </>
  );
}

export default NavItems;
