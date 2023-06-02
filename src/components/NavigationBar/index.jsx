import React, { useState } from 'react';
import NavContainer from './NavContainer';
import NavLogo from './NavLogo';
import NavItems from './NavItems';
import NavHamburger from './NavHamburger';

const index = ({ logo }) => {
  const [isOpen, setIsOpen] = useState(false);
  function handleOpen() {
    setIsOpen(!isOpen);
  }
  return (
    <NavContainer>
      <div className="flex items-center justify-between">
        <NavLogo logo={logo} />
        <NavHamburger isOpen={isOpen} handleOpen={() => handleOpen()} />
      </div>
      <div
        className={`'${
          isOpen
            ? 'translate-x-0 opacity-100 absolute inset-x-0 z-20 w-full px-6 py-4 transition-all duration-300 ease-in-out bg-personal_blue md:mt-0 md:p-0 md:top-0 md:relative md:bg-transparent md:w-auto md:opacity-100 md:translate-x-0 md:flex md:items-center'
            : 'opacity-0 -translate-x-full absolute inset-x-0 z-20 w-full px-6 py-4 transition-all duration-300 ease-in-out bg-personal_blue md:mt-0 md:p-0 md:top-0 md:relative md:bg-transparent md:w-auto md:opacity-100 md:translate-x-0 md:flex md:items-center'
        }'`}
      >
        <div className="flex flex-row gap-4 md:gap-10 justify-center md:flex-row md:mx-6">
          <NavItems />
        </div>
      </div>
    </NavContainer>
  );
};

export default index;
