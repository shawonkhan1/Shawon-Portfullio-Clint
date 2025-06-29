import React from "react";
import profile from "../assets/shawon2.jpg";
import { motion } from "framer-motion";
import { Link } from "react-router";
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";

const Banner = () => {
  return (
    <section
      id="home"
      className="min-h-[80vh] p-6 mt-5 flex items-center justify-center bg-gray-900 px-6 md:px-12 w-11/12 mx-auto rounded-2xl"
    >
      <motion.div
        className="flex flex-col md:flex-row items-center gap-10 max-w-6xl w-full bg-gray-800 rounded-2xl p-10 shadow-2xl"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: "easeOut" }}
      >
        {/* Text */}
        <motion.div
          className="flex-1 text-center md:text-left text-white order-2 md:order-1"
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, delay: 0.3 }}
        >
          <Link to="/">
            <motion.h1
              className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-3 tracking-wide"
              initial={{ scale: 1, opacity: 1 }}
              animate={{ scale: [1, 1.03, 1], opacity: [1, 0.9, 1] }}
              transition={{
                duration: 5,
                repeat: Infinity,
                repeatType: "loop",
                ease: "easeInOut",
              }}
            >
              MD Shawon <span className="text-indigo-400">Molla</span>
            </motion.h1>
          </Link>

          <h2 className="text-2xl font-semibold mb-5 text-gray-300">
            MERN Stack Developer
          </h2>
          <p className="text-gray-400 max-w-lg mb-8 leading-relaxed mx-auto md:mx-0">
            Passionate about building scalable, clean, and efficient full-stack
            web applications using MongoDB, Express, React, and Node.js.
          </p>

          {/* Social Icons */}
          <div className="flex justify-center md:justify-start gap-5 mb-6 text-2xl text-indigo-400">
            <a
              href="https://www.facebook.com/MD1Shawon"
              target="_blank"
              rel="noreferrer"
            >
              <FaFacebook className="hover:text-indigo-300 transition" />
            </a>
            <a
              href="https://github.com/shawonkhan1"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub className="hover:text-indigo-300 transition" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer">
              <FaLinkedin className="hover:text-indigo-300 transition" />
            </a>
          </div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-4 w-full">
            
            <a href="#projects" className="w-full sm:w-auto">
              <motion.button
                className="w-full bg-indigo-500 hover:bg-indigo-600 text-white font-semibold py-3 px-7 rounded-lg shadow-lg transition"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View Projects
              </motion.button>
            </a>

            <a href="/resume.pdf" download className="w-full sm:w-auto">
              <motion.button
                className="w-full border border-indigo-500 text-indigo-500 font-semibold py-3 px-7 rounded-lg hover:bg-indigo-500 hover:text-white transition"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Resume
              </motion.button>
            </a>
          </div>
        </motion.div>

        {/* Image */}
       <motion.div
  className="flex justify-center flex-1 order-1 md:order-2"
  initial={{ opacity: 0, x: 40 }}
  animate={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.9, delay: 0.6 }}
>
  <div className="w-64 h-64 rounded-full border-4 border-indigo-500 overflow-hidden shadow-xl">
 
    <motion.img
      src={profile}
      alt="MD Shawon Molla"
      className="w-full h-full object-cover scale-125"
      
    />
  </div>
</motion.div>

      </motion.div>
    </section>
  );
};

export default Banner;
