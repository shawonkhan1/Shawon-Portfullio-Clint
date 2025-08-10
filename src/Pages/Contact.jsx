import React, { useState } from "react";
import { toast } from "react-toastify";

const ContactCompact = () => {
  const [status, setStatus] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;

    fetch("https://formspree.io/f/mnnzlggy", {
      method: "POST",
      body: new FormData(form),
      headers: {
        Accept: "application/json",
      },
    })
      .then((response) => {
        if (response.ok) {
          toast.success("Message sent successfully!");
          setStatus("Message sent successfully!");
          form.reset();
        } else {
          toast.error("Failed to send message. Please try again.");
          setStatus("Failed to send message. Please try again.");
        }
      })
      .catch(() => {
        toast.error("Failed to send message. Please try again.");
        setStatus("Failed to send message. Please try again.");
      });
  };

  return (
    <section
      id="contact"
      className="max-w-5xl bg-gray-100 border-gray-200 mx-auto px-8 py-10  rounded-lg shadow-lg"
    >
       <h2 className="text-4xl font-bold mb-8 text-center text-indigo-600">
        Contact Me
      </h2>
      <div className="flex flex-col md:flex-row gap-12">
        {/* Left info */}
        <div className="md:w-1/3 rounded-2xl p-6 bg-blue-200 text-gray-700 space-y-5 text-base leading-relaxed">
          <h3 className="text-2xl font-semibold mb-3">Contact Info</h3>
          <p><strong>Name:</strong> MD Shawon Molla</p>
          <p>
            <strong>Email:</strong>{" "}
            <a
              href="mailto:shawon1@gmail.com"
              className="text-indigo-600 hover:underline"
            >
              shawon505214@gmail.com
            </a>
          </p>
          <p>
            <strong>Phone:</strong>{" "}
            <a
              href="tel:+8801234567890"
              className="text-indigo-600 hover:underline"
            >
              +880 1883717078
            </a>
          </p>
          <p><strong>Address:</strong> Dhaka, Bangladesh</p>
        </div>

        {/* Right form */}
        
        <form
          onSubmit={handleSubmit}
          className="md:w-2/3 space-y-6"
          noValidate
        >
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            required
            className="w-full border border-gray-300 rounded-md px-4 py-3 text-base focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
          />

          <input
            type="email"
            name="email"
            placeholder="Email Address"
            required
            className="w-full border border-gray-300 rounded-md px-4 py-3 text-base focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
          />

          <input
            type="text"
            name="subject"
            placeholder="Subject"
            required
            className="w-full border border-gray-300 rounded-md px-4 py-3 text-base focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
          />

          <textarea
            name="message"
            rows="4"
            placeholder="Your Message"
            required
            className="w-full border border-gray-300 rounded-md px-4 py-3 text-base resize-none focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
          ></textarea>

          <button
            type="submit"
            className="w-full bg-indigo-600 text-white font-semibold py-3 rounded-md hover:bg-indigo-700 transition text-lg"
          >
            Send Message
          </button>
          {status && (
            <p className="mt-3 text-center text-indigo-600 font-semibold text-base">
              {status}
            </p>
          )}
        </form>
      </div>
    </section>
  );
};

export default ContactCompact;
