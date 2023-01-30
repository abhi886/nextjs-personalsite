import React from 'react';

// eslint-disable-next-line react/prop-types
function SearchBox({ value, onChange, totalCount }) {
  return (
    <>
      <div className="flex mt-2">
        <div className="mb-3 w-full ">
          <input
            type="search"
            className="block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding
  border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
"
            id="searchPosts"
            placeholder="Search"
            value={value}
            onChange={(e) => onChange(e.currentTarget.value)}
          />
        </div>
      </div>
      <div className="flex justify-end  text-gray-500 my-1">
        <p className="text-sm text-gray-600 underline">
          Showing {totalCount} blog posts
        </p>
      </div>
    </>
  );
}

export default SearchBox;
