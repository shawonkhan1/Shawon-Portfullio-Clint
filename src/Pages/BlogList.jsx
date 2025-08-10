// BlogList.js
import React from "react";
import { Link } from "react-router"; // Correct import

const blogs = [
  {
    id: 1,
    title: "Learning HTML",
    summary:
      "HTML (HyperText Markup Language) is the foundation of web development. Learn the structure of a webpage, semantic tags, and how to build your first webpage.",
  },
  {
    id: 2,
    title: "Mastering CSS",
    summary:
      "CSS allows you to style your HTML. Learn about selectors, flexbox, grid, and how to create responsive layouts for all devices.",
  },
  {
    id: 3,
    title: "Understanding JavaScript",
    summary:
      "JavaScript brings your website to life with interactivity. Explore variables, functions, DOM manipulation, and events.",
  },
  {
    id: 4,
    title: "Styling with Tailwind CSS",
    summary:
      "Tailwind CSS is a utility-first CSS framework. Learn how to rapidly build custom designs using its utility classes.",
  },
  {
    id: 5,
    title: "Intro to Node.js",
    summary:
      "Node.js lets you run JavaScript on the server. Understand how it works, and how to build your first backend with Node and Express.",
  },
];

const BlogList = () => {
  return (
    <section id="blog" className="max-w-5xl mt-20 mx-auto my-16 px-4">
      <h2 className="text-4xl font-bold text-center text-gray-800 mb-10">
        My Blog Posts
      </h2>
      <div className="space-y-8">
        {blogs.map(({ id, title, summary }) => (
          <Link to={`/blog/${id}`}>
            <article
              key={id}
              className="p-6 border border-gray-300 rounded-lg shadow-sm hover:shadow-lg transition-shadow duration-300"
            >
              <h1 className="text-2xl font-semibold text-indigo-600 hover:underline">
                {title}
              </h1>

              <p className="mt-3 text-gray-700">{summary}</p>
            </article>
          </Link>
        ))}
      </div>
    </section>
  );
};
export default BlogList;




