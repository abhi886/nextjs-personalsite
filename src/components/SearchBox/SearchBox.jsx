import React from 'react';

// eslint-disable-next-line react/prop-types
function SearchBox({ value, onChange, totalCount }) {
  return (
    <>
      <div className="flex mt-6 justify-center">
        <div className="mb-3 w-full lg:w-1/3">
          <input
            type="search"
            className="block w-full px-3 py-1 text-base font-normal text-gray-700 dark:text-white bg-white dark:bg-personal_blue-lightBlue bg-clip-padding
   border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
"
            id="searchPosts"
            placeholder="Search"
            value={value}
            onChange={(e) => onChange(e.currentTarget.value)}
          />
        </div>
      </div>
      <div className="flex justify-center text-gray-500 pt-1 pb-10">
        <p className="text-sm text-gray-500  dark:text-white underline">
          Showing {totalCount} blog posts
        </p>
      </div>
    </>
  );
}

export default SearchBox;
