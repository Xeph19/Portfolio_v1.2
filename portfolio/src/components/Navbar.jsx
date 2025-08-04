import React from 'react';
import Avatar from './Avatar';

function Navbar({ className = '' }) {
  return (
    <div className={`navbar bg-base-100 shadow-sm fixed top-0 left-0 right-0 z-30 ${className}`}>
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </div>

          {/* Mobile Version */}
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content rounded-box z-10 mt-3 w-52 p-2 font-medium text-xl bg-white shadow"
          >
            <li>Home</li>
            <li>Contact</li>
            <li>Project Gallery</li>
            <li>Services</li>
          </ul>
        </div>
        <a className="font-medium text-xl">My Portfolio</a>
      </div>

      {/* Centered menu (absolute center) */}
      <div className="absolute left-1/2 transform -translate-x-1/2 hidden lg:flex">
        <ul className="menu menu-horizontal gap-6 text-xl font-medium">
          <li><a>Home</a></li>
          <li><a>Contact</a></li>
          <li><a>Project Gallery</a></li>
          <li><a>Services</a></li>
        </ul>
      </div>

      {/* Avatar on the right */}
      <div className="navbar-end">
        <Avatar className="ml-4" src = '' alt = "rhe"/>
      </div>
    </div>
  );
}

export default Navbar;
