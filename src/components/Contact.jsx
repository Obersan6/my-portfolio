/* Contact Form Component */

import React, { useState } from 'react';

function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  // THIS was missing
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();  // FIXED: added parentheses

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
    <section id="contact" className="min-h-screen bg-[#EAFDFC] flex items-center justify-center px-6 py-12">
      <div className="max-w-xl w-full text-center">
        <h2 className="text-[40px] font-['Comfortaa'] text-[#077488] mb-6">Get in Touch</h2>
        {/* <h2 className="text-[40px] font-['italiana'] text-[#077488] mb-6">Get in Touch</h2> */}

        {submitted ? (
          <p className="text-green-600 text-lg">
            ✅ Thank you! Your message was sent successfully.
          </p>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4 text-left">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your name"
              required
              className="w-full px-4 py-2 border-2 border-[#91D8E4] rounded-md focus:ring-2 focus:ring-[#3AA6B9]"
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your email"
              required
              className="w-full px-4 py-2 border-2 border-[#91D8E4] rounded-md focus:ring-2 focus:ring-[#3AA6B9]"
            />
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your message"
              rows="5"
              required
              className="w-full px-4 py-2 border-2 border-[#91D8E4] rounded-md focus:ring-2 focus:ring-[#3AA6B9]"
            ></textarea>

            <button
              type="submit"
              className="w-full bg-[#3AA6B9] hover:bg-[#27374a] text-white font-medium py-2 px-4 rounded transition-colors duration-300"
            >
              Send Message
            </button>
          </form>
        )}

        {/* Optional backup email */}
        <p className="text-sm text-gray-500 mt-6">
          Prefer email? Reach me directly at{" "}
          <a href="mailto:your.email@example.com" className="text-blue-600 hover:text-blue-800">
            obersan6@example.com
          </a>
        </p>
      </div>
    </section>
  );
}

export default Contact;



