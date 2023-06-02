import React from 'react';
import { useTheme } from 'next-themes';
import { useRouter } from 'next/router';
import Link from 'next/link';
import Button from '../ThemeButton';

// eslint-disable-next-line react/prop-types
function NavItems() {
  const { theme, setTheme } = useTheme();
  const router = useRouter();
  const currentRoute = router.pathname;
  const navOptions = [
    { pathname: '/', value: 'Home' },
    { pathname: '/about', value: 'About' },
    { pathname: '/blogs', value: 'Blogs' },
    { pathname: '/contact', value: 'Contact' },
  ];
  const renderThemeChanger = () => {
    if (theme === 'dark') {
      return (
        <Button
          className="border px-1 border-personal_blue-text"
          onClick={() => {
            setTheme('light');
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-5 h-5 text-personal_blue-text"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
            />
          </svg>
        </Button>
      );
    }
    return (
      <Button
        className="border px-1 border-personal_blue-text"
        onClick={() => {
          setTheme('dark');
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-5 h-5 text-personal_blue-text"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z"
          />
        </svg>
      </Button>
    );
  };
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
      {renderThemeChanger()}
    </>
  );
}

export default NavItems;
