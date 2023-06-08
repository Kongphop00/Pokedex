import React from 'react';
import reactLogo from './assets/react.svg';
import Navbar from './components/Navbar';
import './index.css';

function Layout({ children }) {
  return (
    <>
      <Navbar />
      <main className="">{children}</main>
    </>
  );
}

export default Layout;
