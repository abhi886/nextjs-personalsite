import React from 'react';

export const index = ({ children, className, onClick }) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`rounded-md hover:ring-2 hover:ring-gray-300 ${className} flex m-auto`}
    >
      {children}
    </button>
  );
};
export default index;
