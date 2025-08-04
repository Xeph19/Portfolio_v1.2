import React from 'react';
import Navbar from './Navbar';

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen">
      <Navbar className="bg-white !text-black fixed top-0 left-0 right-0 z-30" />
      <main className="pt-16">{/* space to offset fixed navbar height */}
        {children}
      </main>
    </div>
  );
};

export default Layout;
