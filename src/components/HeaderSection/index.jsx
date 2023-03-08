/* eslint-disable no-else-return */
import { React, useState, useEffect } from 'react';
import Image from 'next/image';

// eslint-disable-next-line import/no-extraneous-dependencies
import { useTheme } from 'next-themes';
import { useRouter } from 'next/router';
import Button from '../Button';

function index({ logo }) {
  const [mounted, setMounted] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const { theme, setTheme } = useTheme();
  const router = useRouter();
  const currentRoute = router.pathname;
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
    } else {
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
    }
  };

  // useEffect only runs on the client, so now we can safely show the UI
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }
  return (
    <header className="sticky top-0 z-50 ">
      <nav className="relative bg-personal_blue shadow">
        <div className="container px-6 py-4 mx-auto md:flex md:justify-between md:items-center">
          <div className="flex items-center justify-between">
            <div>
              <a
                className="text-2xl font-bold text-personal_blue-text transition-colors duration-300 transform dark:text-white lg:text-3xl hover:text-gray-700 dark:hover:text-gray-300"
                href="/"
              >
                <Image
                  src={logo}
                  alt="Abhishekh Maharjan Logo"
                  width={40}
                  height={31}
                  objectFit="contain"
                  className="m-0 p-0"
                />
              </a>
            </div>

            <div className="flex md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                type="button"
                className="text-white hover:text-personal_blue-text focus:outline-none focus:text-personal_blue-text"
                aria-label="toggle menu"
              >
                {!isOpen && (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 8h16M4 16h16"
                    />
                  </svg>
                )}{' '}
                {isOpen && (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>

          <div
            className={`'${
              isOpen
                ? 'translate-x-0 opacity-100 absolute inset-x-0 z-20 w-full px-6 py-4 transition-all duration-300 ease-in-out bg-personal_blue md:mt-0 md:p-0 md:top-0 md:relative md:bg-transparent md:w-auto md:opacity-100 md:translate-x-0 md:flex md:items-center'
                : 'opacity-0 -translate-x-full absolute inset-x-0 z-20 w-full px-6 py-4 transition-all duration-300 ease-in-out bg-personal_blue md:mt-0 md:p-0 md:top-0 md:relative md:bg-transparent md:w-auto md:opacity-100 md:translate-x-0 md:flex md:items-center'
            }'`}
          >
            <div className="flex flex-row gap-4 md:gap-10 justify-center md:flex-row md:mx-6">
              <a
                className={`my-2  transition-colors duration-300 transform hover:text-personal_blue-text md:mx-4 md:my-0 ${
                  currentRoute === '/'
                    ? 'text-personal_blue-text'
                    : 'text-white'
                }`}
                href="/"
              >
                Home
              </a>
              <a
                className={`my-2  transition-colors duration-300 transform hover:text-personal_blue-text md:mx-4 md:my-0 ${
                  currentRoute === '/about'
                    ? 'text-personal_blue-text'
                    : 'text-white'
                }`}
                href="/about"
              >
                About
              </a>
              <a
                className={`my-2  transition-colors duration-300 transform hover:text-personal_blue-text md:mx-4 md:my-0 ${
                  currentRoute === '/blogs' || currentRoute === '/blogs/[blog]'
                    ? 'text-personal_blue-text'
                    : 'text-white'
                }`}
                href="/blogs"
              >
                Blogs
              </a>
              <a
                className={`my-2  transition-colors duration-300 transform hover:text-personal_blue-text md:mx-4 md:my-0 ${
                  currentRoute === '/contact'
                    ? 'text-personal_blue-text'
                    : 'text-white'
                }`}
                href="/contact"
              >
                Contact
              </a>
              {renderThemeChanger()}
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default index;
