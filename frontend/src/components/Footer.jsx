import React from "react";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-gray-50 border-t border-gray-200 mt-10">
      <div className="max-w-7xl mx-auto px-6 py-8 flex justify-center text-gray-600">
        <p>© {year} John Rhe Poblacion. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
