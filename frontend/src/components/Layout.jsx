import React from "react";


const Layout = ({ children }) => {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 relative overflow-x-hidden">
      {/* Bubble Navbar (already fixed & centered) */}
      <Navbar />

      {/* Page Content */}
      <main className="pt-28 px-4 sm:px-6 lg:px-10">{children}</main>
    </div>
  );
};

export default Layout;
