import React from 'react';
import HeaderSection from '../../HeaderSection';
import FooterSection from '../../FooterSection/index';
import logo from '../../../public/images/logo3.png';

// eslint-disable-next-line react/prop-types
export default function Layout({ children }) {
  return (
    <>
      <HeaderSection logo={logo} />
      {children}
      <FooterSection />
    </>
  );
}
