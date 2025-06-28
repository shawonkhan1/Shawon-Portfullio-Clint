import React from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router";

const Contact = () => {
  const navigate = useNavigate();

  const handleContactSubmit = (e) => {
    e.preventDefault();

    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const subject = form.subject.value;
    const message = form.message.value;

    const formData = {
      name,
      email,
      subject,
      message,
    };

    console.log("Submitted data:", formData);

    form.reset();
    toast.success("Message sent successfully!");
    navigate("/");
  };

  return (
    <section
      id="contact"
      className="mx-6 sm:mx-6 md:mx-10 lg:mx-auto px-4 sm:px-6 py-12 max-w-6xl bg-gray-100 rounded-xl shadow-lg my-10"
    >
      <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-800 mb-10 text-center">
        Contact Me
      </h2>

      <div className="flex flex-col md:flex-row gap-10">
        {/* Left side - Contact Info */}
        <div className="md:w-1/2 bg-blue-500 text-white rounded-lg p-8 flex flex-col justify-center space-y-6">
          <h3 className="text-2xl font-semibold mb-4">Contact Info</h3>
          <p><strong>Name:</strong>MD Shawon</p>
          <p><strong>Phone:</strong> +880 1883717078</p>
          <p><strong>Email:</strong> shawon505214@gmail.com</p>
          <p><strong>Address:</strong> Gosbag, Asulia, Dhaka, Bangladesh</p>
        </div>

        {/* Right side - Contact Form */}
        <form
          onSubmit={handleContactSubmit}
          className="md:w-1/2 space-y-8 bg-white p-8 rounded-lg shadow-md"
        >
          {/* Name & Email */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label
                htmlFor="name"
                className="block mb-2 font-semibold text-gray-700"
              >
                Your Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Enter your name"
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition text-sm"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block mb-2 font-semibold text-gray-700"
              >
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Enter your email"
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition text-sm"
              />
            </div>
          </div>

          {/* Subject */}
          <div>
            <label
              htmlFor="subject"
              className="block mb-2 font-semibold text-gray-700"
            >
              Subject
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              placeholder="Subject"
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition text-sm"
            />
          </div>

          {/* Message */}
          <div>
            <label
              htmlFor="message"
              className="block mb-2 font-semibold text-gray-700"
            >
              Your Message
            </label>
            <textarea
              id="message"
              name="message"
              rows="6"
              placeholder="Type your message here..."
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition resize-none text-sm"
            ></textarea>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-blue-500 hover:bg-blue-600 text-white py-3 sm:py-4 rounded-lg font-semibold text-base sm:text-lg transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
