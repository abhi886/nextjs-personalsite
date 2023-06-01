import React from 'react';

export const index = ({ children, className, onClick }) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`rounded-md hover:ring-1 hover:ring-personal_blue-text ${className} flex m-auto`}
    >
      {children}
    </button>
  );
};
export default index;
