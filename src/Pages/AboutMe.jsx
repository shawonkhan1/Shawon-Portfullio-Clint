import React from "react";
import { motion } from "framer-motion";

const AboutMe = () => {
  return (
    <motion.section
      id="about"
      className="w-11/12 mx-auto pb-5 px-4 sm:px-6 md:px-10 mt-10 sm:mt-16 md:mt-20 bg-gray-100 rounded-lg shadow-lg"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <h2 className="text-3xl py-10 sm:text-4xl md:text-5xl font-playfair font-bold sm:mb-8 text-gray-900 text-center">
        About Me
      </h2>

      {/* 1. Detailed introduction about yourself */}
      <p className="text-gray-800 text-base sm:text-lg leading-relaxed mb-6">
        Hello! I am <span className="font-semibold">Md Shawon Molla</span>. I am a passionate programmer and software developer with a deep interest in building efficient and user-friendly applications.
      </p>

      {/* 2. Your programming journey */}
      <p className="text-gray-800 text-base sm:text-lg leading-relaxed mb-6">
        My programming journey started 1 years ago, beginning with basics like HTML and CSS, and gradually advancing to JavaScript and React.js. Over time, I have gained experience building full-stack MERN applications and constantly enjoy learning new technologies.
      </p>

      {/* 3. The type of work you enjoy */}
      <p className="text-gray-800 text-base sm:text-lg leading-relaxed mb-6">
        I especially enjoy working on projects that challenge my problem-solving skills and creativity. Building scalable and maintainable software solutions, especially in frontend development, is something I truly love.
      </p>

      {/* 4. Any hobbies or interests outside of programming */}
      <p className="text-gray-800 text-base sm:text-lg leading-relaxed mb-6">
        Outside of programming, I enjoy sports like cricket, painting, and exploring new cultures through travel. These hobbies help me stay balanced and inspired.
      </p>

      {/* 5. Showcase your personality */}
      <p className="text-gray-800 text-base sm:text-lg leading-relaxed mb-6">
        I am a curious, open-minded, and hardworking person who values teamwork and continuous learning. I believe in delivering quality work and always strive to improve myself and the projects I work on.
      </p>
    </motion.section>
  );
};

export default AboutMe;
