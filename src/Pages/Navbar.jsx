import React, { useState } from 'react';
import { Link as ScrollLink } from 'react-scroll';  // react-scroll এর Link
import { motion, AnimatePresence } from 'framer-motion';

export const sections = [
  { name: 'Home', id: 'home' },
  { name: 'About Me', id: 'about' },
  { name: 'Skills', id: 'skills' },
  { name: 'Projects', id: 'projects' },
  { name: 'Blog', id: 'blog' },
   { name: 'Education', id: 'education' },
  { name: 'Contact', id: 'contact' },

];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <motion.nav
      className="fixed top-0 w-full bg-white/90 backdrop-blur-sm shadow-md z-50"
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
    >
      <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
        {/* Brand */}
        <ScrollLink
          to="home"
          smooth={true}
          duration={500}
          offset={-80} 
          className="text-2xl font-bold text-gray-800 hover:text-indigo-600 transition cursor-pointer"
          onClick={handleLinkClick}
        >
          Shawon<span className="text-indigo-600">Molla</span>
        </ScrollLink>

        {/* Desktop Links */}
        <div className="hidden md:flex space-x-8">
          {sections.map(({ name, id }) => (
            <ScrollLink
              key={id}
              to={id}
              smooth={true}
              duration={500}
              offset={-80}
              className="relative px-2 py-1 font-medium transition text-gray-700 hover:text-indigo-600 cursor-pointer"
              activeClass="text-indigo-600 font-semibold"
              spy={true}  // scroll এ active class পাবার জন্য
              onClick={handleLinkClick}
            >
              {name}
            </ScrollLink>
          ))}
        </div>

        {/* Mobile Button */}
        <button
          className="md:hidden p-2 text-gray-700 hover:text-indigo-600 focus:outline-none"
          onClick={() => setIsOpen((o) => !o)}
          aria-label="Toggle menu"
        >
          {isOpen ? (
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="md:hidden bg-white border-t border-gray-200"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {sections.map(({ name, id }) => (
              <ScrollLink
                key={id}
                to={id}
                smooth={true}
                duration={500}
                offset={-80}
                className="block w-full text-left px-6 py-3 font-medium text-gray-700 hover:bg-gray-100 cursor-pointer"
                activeClass="bg-indigo-50 text-indigo-600 font-semibold"
                spy={true}
                onClick={handleLinkClick}
              >
                {name}
              </ScrollLink>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
