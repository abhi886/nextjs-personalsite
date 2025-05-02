import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';
import logoBlack from '../../../public/images/logoDay.png';
import logo from '../../../public/images/logo.png';

function NavLogo() {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Option 1: avoid hydration mismatch by not rendering at all before mount
  if (!mounted) return null;

  return (
    <Link
      className="text-2xl font-bold text-personal_blue-text transition-colors duration-300 transform dark:text-white lg:text-3xl hover:text-gray-700 dark:hover:text-gray-300"
      href="/"
      legacyBehavior
    >
      <a href="/">
        <Image
          src={theme === 'dark' ? logo : logoBlack}
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
