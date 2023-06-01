import React from 'react';
import Link from 'next/link';

import { HiArrowRight } from 'react-icons/hi';

const index = ({ value }) => {
  return (
    <div>
      <Link href="/about">
        <button
          className="dark:text-personal_blue-text dark:hover:font-bold bg-transparent px-2 py-2 text-xs lg:text-base lg:px-3 lg:py-3 rounded-lg border dark:border-personal_blue-text my-3 shadow-md hover:shadow-lg active:scale-90 transition duration-150 mt-8 lg:mt-12"
          type="button"
        >
          {value}&nbsp;
          <HiArrowRight className="inline" />
        </button>
      </Link>
    </div>
  );
};

export default index;
