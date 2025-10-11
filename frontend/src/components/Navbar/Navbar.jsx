import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Avatar from "./Avatar";

const NAVBAR_HEIGHT = 80; // px
const navLinks = [
  { name: "Home", id: "home" },
  { name: "Projects", id: "projects" },
  { name: "About", id: "about" },
];

const Navbar = ({ className = "" }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + NAVBAR_HEIGHT + 10;
      let current = "home";
      navLinks.forEach((link) => {
        const section = document.getElementById(link.id);
        if (section && section.offsetTop <= scrollPos) {
          current = link.id;
        }
      });
      setActive(current);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScrollTo = (id) => {
    const section = document.getElementById(id);
    if (section) {
      const y = section.offsetTop - NAVBAR_HEIGHT + 1;
      window.scrollTo({ top: y, behavior: "smooth" });
      setMenuOpen(false);
    }
  };

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-1/2 -translate-x-1/2 z-50 bg-white/60 backdrop-blur-xl shadow-lg rounded-full px-8 py-3 flex items-center justify-between w-[90%] max-w-5xl transition-all duration-300 font-poppins ${className}`}
    >
      <div
        onClick={() => handleScrollTo("home")}
        className="text-2xl font-semibold tracking-tight text-gray-900 hover:text-gray-700 cursor-pointer transition-colors"
      >
        My Portfolio
      </div>

      <div className="hidden md:flex gap-8 text-lg font-medium text-gray-700 relative">
        {navLinks.map((link) => (
          <div key={link.name} className="relative">
            <button
              onClick={() => handleScrollTo(link.id)}
              className={`transition-colors duration-300 ${
                active === link.id ? "text-black font-semibold" : "hover:text-black"
              }`}
            >
              {link.name}
            </button>

            <AnimatePresence>
              {active === link.id && (
                <motion.div
                  layout
                  layoutId="activeIndicator"
                  initial={{ opacity: 0, y: 4 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 4 }}
                  transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 25,
                    mass: 0.3,
                  }}
                  className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-black rounded-full"
                />
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>

      <div className="flex items-center gap-3">
        <Avatar className="ml-2" src="" alt="rhe" />
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden p-2 rounded-full hover:bg-gray-200 transition"
        >
          {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
            className="absolute top-full mt-3 right-0 w-48 bg-white/90 backdrop-blur-md rounded-lg shadow-lg flex flex-col gap-2 p-3 text-gray-700 font-medium md:hidden"
          >
            {navLinks.map((link) => (
              <button
                key={link.name}
                className={`px-3 py-2 rounded-md text-left w-full transition ${
                  active === link.id ? "bg-gray-200 text-black font-semibold" : "hover:bg-gray-100"
                }`}
                onClick={() => handleScrollTo(link.id)}
              >
                {link.name}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
