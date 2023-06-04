import React from 'react';
import NavBar from '../NavigationBar';

function index({ logo }) {
  return (
    <header className="sticky top-0 z-50 ">
      <NavBar logo={logo} />
    </header>
  );
}

export default index;
