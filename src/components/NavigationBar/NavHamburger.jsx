import React from 'react';

// eslint-disable-next-line react/prop-types
function NavHamburger({ isOpen, handleOpen }) {
  return (
    <div className="flex md:hidden">
      <button
        onClick={() => handleOpen()}
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
  );
}

export default NavHamburger;
