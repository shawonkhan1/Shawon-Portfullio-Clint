// BlogDetails.js
import React from 'react';
import { useParams, Link } from 'react-router';

const blogs = [
  {
    id: 1,
    title: 'Learning HTML',
    content: `HTML (HyperText Markup Language) is the fundamental building block of web development. It provides the basic structure of a webpage by defining elements such as headings, paragraphs, lists, links, images, and more. In this post, you'll learn about the importance of semantic HTML tags like <header>, <footer>, <article>, and <section> which improve accessibility and SEO. We'll cover how to structure your content properly, create forms to collect user input, embed multimedia such as images and videos, and best practices to write clean, maintainable HTML code. Mastering HTML is essential as it forms the backbone for all web pages and prepares you for styling with CSS and interactivity with JavaScript.`,
  },
  {
    id: 2,
    title: 'Mastering CSS',
    content: `CSS (Cascading Style Sheets) is used to control the presentation and layout of web pages. This article dives deep into selectors, specificity, the box model, and positioning techniques that help you create visually appealing designs. You will learn how to use modern layout systems like Flexbox and CSS Grid to build responsive, flexible layouts that adapt seamlessly across devices from mobile phones to large desktops. Additionally, we will explore media queries for responsive design, animations and transitions to add dynamic effects, and best practices for organizing your CSS code efficiently. With a solid grasp of CSS, you can transform simple HTML into beautiful user experiences.`,
  },
  {
    id: 3,
    title: 'Understanding JavaScript',
    content: `JavaScript is the programming language that brings web pages to life by enabling interactivity and dynamic content. In this comprehensive guide, you'll learn the core concepts including variables, data types, functions, conditional statements, loops, and event handling. We’ll explore how to manipulate the DOM (Document Object Model) to dynamically update content, respond to user actions, and create interactive features. Advanced topics such as closures, asynchronous programming with callbacks, promises and async/await, and ES6+ features like arrow functions and modules will also be covered. Mastering JavaScript is essential for any modern web developer to build rich, engaging web applications.`,
  },
  {
    id: 4,
    title: 'Styling with Tailwind CSS',
    content: `Tailwind CSS is a utility-first CSS framework that allows developers to build custom designs rapidly by composing small, reusable classes directly in their HTML. This post covers how Tailwind promotes fast development by eliminating the need to write custom CSS for common styling patterns. You will learn how to configure Tailwind, use responsive utilities to adapt layouts across devices, implement dark mode, and manage state-based styling like hover and focus. Additionally, the article discusses integrating Tailwind with build tools such as PostCSS and PurgeCSS to optimize production CSS file sizes. By mastering Tailwind, you can significantly speed up your frontend development workflow while maintaining design consistency.`,
  },
  {
    id: 5,
    title: 'Intro to Node.js',
    content: `Node.js is a powerful, event-driven JavaScript runtime built on Chrome’s V8 engine that allows you to run JavaScript on the server side. This article explains how Node.js uses a non-blocking, asynchronous I/O model that makes it efficient and scalable for building backend applications. You’ll learn how to create a basic web server using the built-in HTTP module, handle routing, and serve static files. The post also introduces Express.js, a popular Node.js web framework, to simplify building RESTful APIs and web applications. By the end, you will understand the fundamentals of server-side JavaScript and be ready to develop your own backend services.`,
  },
];


const BlogDetails = () => {
  const { id } = useParams();
  const blog = blogs.find((b) => b.id === Number(id));

  if (!blog) {
    return (
      <section className="max-w-4xl mx-auto my-16 px-4 text-center">
        <p className="text-xl text-red-600 font-semibold">Blog not found!</p>
        <Link
          to="/blog"
          className="inline-block mt-6 px-5 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700 transition"
        >
          Back to Blog List
        </Link>
      </section>
    );
  }

  return (
    <section className="max-w-4xl mt-20 mx-auto my-16 px-4">
      <h2 className="text-4xl text-center font-bold text-gray-900 mb-6">{blog.title}</h2>
      <p className="text-gray-700 text-lg leading-relaxed whitespace-pre-line">{blog.content}</p>
     <div className='flex justify-center'>
         <Link
        to="/"
        className="inline-block mt-8 px-6 py-3 bg-indigo-600 text-white rounded hover:bg-indigo-700 transition"
      >
        Back to Home
      </Link>
     </div>
    </section>
  );
};

export default BlogDetails;
