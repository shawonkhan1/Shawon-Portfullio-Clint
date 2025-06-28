import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.3,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

const ProjectsTitle = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(false);

useEffect(() => {
  setLoading(true);
  fetch("/MyProject.json")
    .then((res) => res.json())
    .then((data) => {
      setProjects(data);
      setLoading(false);
    })
    .catch((err) => {
      console.error(err);
      setLoading(false);
    });
}, []);


  return (
    <section id="projects" className="my-20 px-6 max-w-6xl mx-auto">
      {/* Title */}
      <motion.div
        className="text-center mb-12"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        <h2 className="text-4xl font-extrabold text-gray-900 mb-3 tracking-tight">
          My Projects
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto text-lg font-medium">
          Some of the best works I've built with the MERN stack.
        </p>
      </motion.div>

      {/* Content */}
      {loading ? (
        <div className="flex justify-center items-center h-32">
        <span className="loading loading-spinner loading-xl"></span>
        </div>
      ) : (
        <motion.div
          className="space-y-14"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <AnimatePresence>
            {projects.length === 0 ? (
              <motion.p
                className="text-center text-gray-500"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                No projects found!
              </motion.p>
            ) : (
              projects.map(
                ({
                  id,
                  title,
                  description,
                  technologies,
                  features,
                  live_link,
                  client_git_link,
                  server_git_link,
                  image,
                }) => (
                  <motion.div
                    key={id}
                    className="flex flex-col md:flex-row bg-white shadow-lg rounded-xl overflow-hidden"
                    variants={cardVariants}
                  >
                    {/* Image */}
                    <div className="md:w-1/2 w-full">
                      <img
                        src={image}
                        alt={title}
                        className="h-full w-full object-cover"
                      />
                    </div>

                    {/* Text Info */}
                    <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-2">
                          {title}
                        </h3>
                        <p className="text-gray-700 mb-3">{description}</p>

                        {/* Features */}
                        <ul className="list-disc list-inside text-gray-600 text-sm mb-3">
                          {features &&
                            features.map((feature, i) => (
                              <li key={i}>{feature}</li>
                            ))}
                        </ul>

                        {/* Technologies */}
                        <p className="text-sm text-gray-500">
                          <span className="font-medium text-gray-700">
                            Tech:
                          </span>{" "}
                          {technologies.join(", ")}
                        </p>
                      </div>

                      {/* Buttons */}
                      <div className="flex flex-wrap gap-4 mt-4">
                        <a
                          href={live_link}
                          target="_blank"
                          rel="noreferrer"
                          className="px-4 py-2 rounded-md bg-indigo-600 text-white text-sm font-semibold hover:bg-indigo-700"
                        >
                          Live Link
                        </a>
                        {client_git_link && (
                          <a
                            href={client_git_link}
                            target="_blank"
                            rel="noreferrer"
                            className="px-4 py-2 rounded-md border border-gray-300 text-sm hover:bg-gray-100"
                          >
                            Client Side Code
                          </a>
                        )}
                        {server_git_link && (
                          <a
                            href={server_git_link}
                            target="_blank"
                            rel="noreferrer"
                            className="px-4 py-2 rounded-md border border-gray-300 text-sm hover:bg-gray-100"
                          >
                            Server Side Code
                          </a>
                        )}
                      </div>
                    </div>
                  </motion.div>
                )
              )
            )}
          </AnimatePresence>
        </motion.div>
      )}
    </section>
  );
};

export default ProjectsTitle;
