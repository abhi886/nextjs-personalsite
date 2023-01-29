import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { MenuIcon } from '@heroicons/react/outline';
import { useRouter } from 'next/router';

function HeaderSection({ logo, layout }) {
  const [isOpen, setIsOpen] = useState(false);

  const router = useRouter();
  const currentRoute = router.pathname;
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
                )}
                {' '}
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
            <div className="flex flex-row gap-10 justify-center md:flex-row md:mx-6">
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
                  currentRoute === '/blogs'
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
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default HeaderSection;
