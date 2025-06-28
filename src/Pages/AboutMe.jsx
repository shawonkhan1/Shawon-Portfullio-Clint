import React from "react";
import { motion } from "framer-motion";

const AboutMe = () => {
  return (
    <motion.section
      id="about"
      className="max-w-5xl ml-5 mr-5 md:ml-9 md:mr-9 mx-auto lg:ml-auto lg:mr-auto px-4 sm:px-6 md:px-10 mt-10 sm:mt-16 md:mt-20 bg-gray-100 rounded-lg shadow-lg"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <h2 className="text-3xl py-10 sm:text-4xl md:text-5xl font-playfair font-bold  sm:mb-8 text-gray-900 text-center">
        About Me
      </h2>
      <p className="text-gray-800 text-base sm:text-lg leading-relaxed font-sourceSans mb-4 sm:mb-6">
        Hello! I am <span className="font-semibold">Md Shawon Molla</span>,
        currently pursuing a Diploma in Engineering with a focus on Computer
        Science from Baliakandi, Rajbari, Dhaka. I have a deep passion for
        programming and software development, and I am dedicated to growing my
        skills as a full-stack developer.
      </p>
      <p className="text-gray-800 text-base sm:text-lg leading-relaxed font-sourceSans mb-4 sm:mb-6">
        Throughout my learning journey, I have gained practical experience in
        modern web development technologies, including{" "}
        <span className="font-semibold">
          React.js, Node.js, Express.js, MongoDB, Tailwind CSS,
        </span>{" "}
        and authentication with <span className="font-semibold">JWT</span>. I
        enjoy building clean, efficient, and user-friendly applications, with a
        special interest in creating scalable MERN stack projects.
      </p>
      <p className="text-gray-800 text-base sm:text-lg leading-relaxed font-sourceSans mb-4 sm:mb-6">
        My goal is to leverage my skills to contribute to innovative and
        impactful software solutions. I continuously seek to learn new
        technologies and best practices to stay up-to-date in this fast-evolving
        industry. Apart from coding, I enjoy exploring new trends in software
        development and refining my problem-solving abilities.
      </p>
      <p className="text-gray-800 text-base sm:text-lg leading-relaxed font-sourceSans mb-4 sm:mb-6">
        I am approachable and open to new challenges and collaborations. Feel
        free to connect with me via email at{" "}
        <a
          href="mailto:shawon505214@gmail.com"
          className="text-blue-600 underline"
        >
          shawon505214@gmail.com
        </a>{" "}
        or call me at <span className="font-semibold">01883717078</span>.
      </p>
    </motion.section>
  );
};

export default AboutMe;
