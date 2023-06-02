import React from 'react';

// eslint-disable-next-line react/prop-types
function NavContainer({ children }) {
  return (
    <nav className="relative bg-personal_blue shadow">
      <div className="container px-6 py-4 mx-auto md:flex md:justify-between md:items-center">
        {children}
      </div>
    </nav>
  );
}

export default NavContainer;
