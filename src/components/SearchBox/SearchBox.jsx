import React, { useState, useMemo } from 'react';

// eslint-disable-next-line react/prop-types
function SearchBox({ searchData, displayComponent }) {
  const [searchQuery, SetSearchQuery] = useState('');
  const [filteredBlogs] = useState(searchData);

  const handleSearch = (inputQuery) => {
    SetSearchQuery(inputQuery);
  };

  const getFilteredBlogs = useMemo(() => {
    return filteredBlogs.filter((b) =>
      b.title.toLowerCase().startsWith(searchQuery.toLowerCase())
    );
  }, [filteredBlogs, searchQuery]);
  const { totalCount, filteredData } = useMemo(() => {
    if (!filteredBlogs) return { totalCount: 0, data: {} };
    let filtered = filteredBlogs;
    if (searchQuery) {
      filtered = getFilteredBlogs;
    }
    return { totalCount: filtered.length, filteredData: filtered };
  }, [filteredBlogs, searchQuery]);
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
            onChange={(e) => handleSearch(e.currentTarget.value)}
          />
        </div>
      </div>
      <div className="flex justify-center text-gray-500 pt-1 pb-10">
        <p className="text-sm text-gray-500  dark:text-white underline">
          Showing {totalCount} blog posts
        </p>
      </div>
      <div className="grid gap-10 lg:gap-10 md:grid-cols-2 lg:grid-cols-3 ">
        {filteredData.map((fd) => displayComponent({ ...fd }))}
      </div>
    </>
  );
}

export default SearchBox;
