import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      staggerChildren: 0.15,
      ease: "easeOut",
      duration: 0.6,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      ease: "easeOut",
      duration: 0.5,
    },
  },
};

const Skills = () => {
  const [skills, setSkills] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/Skill.json")
      .then((res) => res.json())
      .then((data) => {
        setSkills(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error loading skills:", err);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <section className="max-w-5xl mt-20 mx-auto my-20 px-4 text-center">
        <p className="text-xl text-indigo-600 font-semibold">
          Loading skills...
        </p>
      </section>
    );
  }

  return (
    <motion.section
     id="skills"
      className="w-11/12 mx-auto my-20 px-4"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      <motion.h2
        className="text-4xl font-bold text-gray-900 mb-10 text-center select-none"
        variants={itemVariants}
      >
        Skills
      </motion.h2>

      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8"
        variants={containerVariants}
      >
        {skills.map(({ id, name, level, icon }) => (
          <motion.div
            key={id}
            className="bg-gray-100 rounded-lg shadow-md p-6 border border-gray-200 text-center cursor-pointer hover:shadow-xl transition-shadow duration-300"
            variants={itemVariants}
            whileHover={{
              scale: 1.05,
              boxShadow: "0 10px 25px rgba(99, 102, 241, 0.4)",
            }}
          >
            <img
              src={icon}
              alt={name}
              className="w-16 h-16 mx-auto mb-4"
              loading="lazy"
              draggable={false}
            />
            <h3 className="text-xl font-semibold text-indigo-600 mb-2">
              {name}
            </h3>
            <p className="text-gray-600">{level}</p>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
};

export default Skills;
