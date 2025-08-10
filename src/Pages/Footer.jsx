import React from "react";
import { Link as ScrollLink } from "react-scroll";

const sections = [
  { name: "Home", id: "home" },
  { name: "About Me", id: "about" },
  { name: "Skills", id: "skills" },
  { name: "Projects", id: "projects" },
  { name: "Education", id: "education" },
  { name: "Contact", id: "contact" },
 
];

const Footer = () => {
  return (
    <footer id="Footer" className="bg-gray-700 text-gray-300 py-10 px-6 md:px-20">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        {/* Logo / Brand */}
        <div className="text-white text-2xl font-bold cursor-pointer select-none">
          MD <span className="text-indigo-500">Shawon</span>
        </div>

        {/* Navigation Links */}
        <nav className="flex flex-wrap justify-center gap-6">
          {sections.map(({ name, id }) => (
            <ScrollLink
              key={id}
              to={id}
              smooth={true}
              duration={500}
              offset={-80}
              className="cursor-pointer hover:text-indigo-500 transition font-medium"
              spy={true}
              activeClass="text-indigo-500 font-semibold"
            >
              {name}
            </ScrollLink>
          ))}
        </nav>

        {/* Social Icons */}
        <div className="flex space-x-6 text-gray-400">
          {/* Facebook Icon */}
          <a
            href="https://www.facebook.com/MD1Shawon"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
            className="hover:text-indigo-500 transition"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M22.675 0h-21.35C.595 0 0 .594 0 1.326v21.348C0 23.406.595 24 1.325 24H12.82v-9.294H9.692v-3.622h3.127V8.413c0-3.1 1.893-4.788 4.658-4.788 1.325 0 2.464.099 2.797.143v3.24l-1.918.001c-1.504 0-1.796.715-1.796 1.763v2.312h3.588l-.467 3.622h-3.121V24h6.116c.73 0 1.324-.594 1.324-1.326V1.326C24 .594 23.406 0 22.675 0z" />
            </svg>
          </a>

          {/* GitHub Icon */}
          <a
            href="https://github.com/shawonkhan1"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="hover:text-indigo-500 transition"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 0C5.372 0 0 5.372 0 12a12.005 12.005 0 0 0 8.208 11.385c.6.111.82-.261.82-.58 0-.288-.011-1.05-.016-2.061-3.338.726-4.042-1.61-4.042-1.61-.546-1.388-1.333-1.757-1.333-1.757-1.09-.745.083-.73.083-.73 1.205.085 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.108-.775.418-1.305.76-1.605-2.665-.305-5.466-1.333-5.466-5.933 0-1.31.469-2.381 1.236-3.221-.124-.304-.536-1.53.117-3.187 0 0 1.008-.323 3.301 1.23a11.51 11.51 0 0 1 3.004-.404c1.019.004 2.047.138 3.005.404 2.291-1.553 3.297-1.23 3.297-1.23.655 1.657.243 2.883.12 3.187.77.84 1.235 1.91 1.235 3.22 0 4.61-2.803 5.624-5.475 5.922.43.371.814 1.104.814 2.227 0 1.609-.015 2.908-.015 3.305 0 .322.218.697.825.578A12.006 12.006 0 0 0 24 12c0-6.628-5.373-12-12-12z" />
            </svg>
          </a>

          {/* LinkedIn Icon */}
          <a
            href="https://linkedin.com/in/your_linkedin"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="hover:text-indigo-500 transition"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.028-3.039-1.85-3.039-1.852 0-2.134 1.445-2.134 2.939v5.669h-3.553v-11.5h3.414v1.569h.049c.476-.9 1.637-1.85 3.369-1.85 3.604 0 4.27 2.373 4.27 5.456v6.325zm-14.693-13.092c-1.144 0-2.071-.927-2.071-2.071 0-1.144.927-2.07 2.071-2.07 1.145 0 2.072.926 2.072 2.07 0 1.144-.927 2.071-2.072 2.071zm1.777 13.092h-3.553v-11.5h3.553v11.5zM22.225 0H1.771C.792 0 0 .774 0 1.728v20.543C0 23.227.792 24 1.771 24h20.451C23.205 24 24 23.227 24 22.271V1.728C24 .774 23.205 0 22.225 0z" />
            </svg>
          </a>
        </div>
      </div>

      <div className="mt-10 text-center text-white text-sm select-none">
        &copy; {new Date().getFullYear()} MD Shawon. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
