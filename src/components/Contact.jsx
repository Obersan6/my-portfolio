/* Contact Form Component */

import React, { useState } from 'react';

function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("https://formspree.io/f/xkgjlblg", {
        method: "POST",
        headers: {
          Accept: "application/json",
        },
        body: new FormData(e.target),
      });

      const result = await response.json();
      console.log("Formspree response", result);

      if (response.ok) {
        setSubmitted(true);
        setFormData({ name: "", email: "", message: "" });
      }
    } catch (error) {
      console.error("Form error", error);
      alert("Something went wrong. Please try again.");
    }
  };

  return (
    <section
      id="contact"
      className="bg-[#EAFDFC] pt-10 pb-10 flex items-center justify-center px-4 sm:pt-16 sm:pb-32 md:pt-24 md:pb-20"
    >
       
      <div className="w-full max-w-2xl text-center">
        <h2 className="text-3xl sm:text-4xl md:text-[50px] font-['Montserrat'] text-[#077488] mb-10">
        Contact
      </h2>

        {submitted ? (
          <p className="text-green-600 text-lg font-['comfortaa']">
            ✅ Thank you! Your message was sent successfully.
          </p>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="space-y-6 text-left font-['comfortaa']"
          >
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your name"
              required
              className="w-full px-4 py-3 border-2 border-[#3AA6B9] rounded-md focus:ring-2 focus:ring-[#3AA6B9]"
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your email"
              required
              className="w-full px-4 py-3 border-2 border-[#3AA6B9] rounded-md focus:ring-2 focus:ring-[#3AA6B9]"
            />
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your message"
              rows="5"
              required
              className="w-full px-4 py-3 border-2 border-[#3AA6B9] rounded-md focus:ring-2 focus:ring-[#3AA6B9]"
            ></textarea>

            <button
              type="submit"
              className="w-full bg-[#3AA6B9] hover:bg-[#27374a] text-white font-medium py-3 px-4 rounded transition-colors duration-300"
            >
              Send Message
            </button>
          </form>
        )}

        <p className="text-sm sm:text-base mt-8 text-gray-600 font-['comfortaa']">
          Prefer email? Reach me directly at{" "}
          <a
            href="mailto:obersan6@gmail.com"
            className="text-blue-600 hover:text-blue-800"
          >
            obersan6@gmail.com
          </a>
        </p>
      </div>
    </section>
  );
}

export default Contact;
