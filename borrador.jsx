
/* Skills Component */

import React from 'react';


function Skills() {
    return (
      // <section id="skills" className="bg-[#EAFDFC] pt-25 pb-40 text-center">
      //       <h2 className="text-[50px] font-['Montserrat'] text-[#077488]  ">Skills</h2>
            {/* <h2 className="text-[50px] font-['italiana'] text-[#077488] ">Skills</h2> */}
      <section id="skills" className="bg-[#EAFDFC] pt-10 pb-20 text-center sm:pt-16 sm:pb-32 md:pt-24 md:pb-40">
        <h2 className="text-3xl sm:text-4xl md:text-[50px] font-['Montserrat'] text-[#077488] mb-10">Skills</h2>

          {/* Frontend */}
          <div className="mt-30 mb-14">
            <h3 className="text-2xl font-semibold font-['Comfortaa'] text-[#27374a] mb-10">Frontend</h3>
            {/* <div className="flex flex-wrap justify-center gap-10"> */}
            <div className="flex flex-wrap justify-center gap-x-10 gap-y-8 sm:gap-x-12 sm:gap-y-10">
              {[
                ['devicon-javascript-plain', 'JavaScript', 'devicon'],
                ['devicon-react-original', 'React', 'devicon'],
                ['devicon-jquery-plain', 'jQuery', 'devicon'],
                ['devicon-html5-plain', 'HTML', 'devicon'],
                ['devicon-css3-plain', 'CSS', 'devicon'],
                ['devicon-bootstrap-plain', 'Bootstrap', 'devicon'],
                ['fas fa-mobile-alt', 'Responsive Design', 'fontawesome'],
              ].map(([icon, label, type], idx) => (
                <div className="flex flex-col items-center" key={idx}>
                  {type === 'devicon' ? (
                    // <i className={`${icon} colored text-5xl`}></i> // Devicon uses 'colored'
                    <i className={`${icon} colored text-3xl sm:text-4xl md:text-5xl`}></i> // Devicon uses 'colored'
                  ) : (
                    // <i className={`${icon} text-5xl text-[#3AA6B9]`}></i> // FontAwesome uses manual color.
                    <i className={`${icon} text-3xl sm:text-4xl md:text-5xl text-[#3AA6B9]`}></i> // FontAwesome uses manual color.
                  )}
                  <span className="mt-2 text-sm font-['Comfortaa'] text-[#27374a]">{label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Backend */}
          <div className="mb-12">
            <h3 className="text-2xl font-semibold font-['Comfortaa'] text-[#27374a] mb-10">Backend</h3>
            <div className="flex flex-wrap justify-center gap-10">
              {[
                ['devicon-python-plain', 'Python', 'devicon'],
                ['devicon-flask-original', 'Flask', 'devicon'],
                ['devicon-nodejs-plain', 'Node.js', 'devicon'],
                ['devicon-express-original', 'Express', 'devicon'],
                ['devicon-postgresql-plain', 'SQL', 'devicon'],
                ['fas fa-code', 'APIs', 'fontawesome'],
              ].map(([icon, label, type], idx) => (
                <div className="flex flex-col items-center" key={idx}>
                  {type === 'devicon' ? (
                    <i className={`${icon} colored text-5xl`}></i>
                  ) : (
                    <i className={`${icon} text-5xl text-[#3AA6B9]`}></i>
                  )}
                  <span className="mt-2 text-sm font-['Comfortaa'] text-[#27374a]">{label}</span>
                </div>
              ))}
            </div>
          </div>

            
          {/* Tools & Methods */}
          <div>
            <h3 className="text-2xl font-semibold font-['Comfortaa'] text-[#27374a] mb-10">Tools & Methods</h3>
            <div className="flex flex-wrap justify-center gap-10">
              {[
                ['devicon-git-plain', 'Git', 'devicon'],
                ['devicon-github-original', 'GitHub', 'devicon'],
                ['devicon-supabase-plain', 'Supabase', 'devicon'],
                ['fas fa-cloud', 'Render', 'fontawesome'],
                ['fas fa-bug', 'Software Testing', 'fontawesome'],
              ].map(([icon, label, type], idx) => (
                <div className="flex flex-col items-center" key={idx}>
                  {type === 'devicon' ? (
                    <i className={`${icon} colored text-5xl`}></i>
                  ) : (
                    <i className={`${icon} text-5xl text-[#3AA6B9]`}></i>
                  )}
                  <span className="mt-2 text-sm font-['Comfortaa'] text-[#27374a]">{label}</span>
                </div>
              ))}
            </div>
          </div>

      </section>    
 );
}

export default Skills;

------------------------------------------------------------------------------------------------------------

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
    // <section id="contact" className="min-h-screen bg-[#EAFDFC] flex items-center justify-center px-6 py-12">
    <section id="contact" className="min-h-screen bg-[#EAFDFC] flex items-center justify-center px-6 py-12">
      <div className="max-w-xl w-full text-center">
        <h2 className="text-[50px] font-['Montserrat'] text-[#077488] pt-15 pb-25">Get in Touch</h2>
        {/* <h2 className="text-[40px] font-['italiana'] text-[#077488] mb-6">Get in Touch</h2> */}

        {submitted ? (
          <p className="text-green-600 text-lg font-['comfortaa']">
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
              className="w-full px-4 py-2 border-2 border-[#3AA6B9] rounded-md focus:ring-2 focus:ring-[#3AA6B9] font-['comfortaa']"
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your email"
              required
              className="w-full px-4 py-2 border-2 border-[#3AA6B9] rounded-md focus:ring-2 focus:ring-[#3AA6B9] font-['comfortaa']"
            />
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your message"
              rows="5"
              required
              className="w-full px-4 py-2 border-2 border-[#3AA6B9] rounded-md focus:ring-2 focus:ring-[#3AA6B9] font-['comfortaa']"
            ></textarea>

            <button
              type="submit"
              className="w-full bg-[#3AA6B9] hover:bg-[#27374a] font-['comfortaa'] text-white font-medium py-2 px-4 rounded transition-colors duration-300 contact-button"
            >
              Send Message
            </button>
          </form>
        )}

        {/* Optional backup email */}
        <p className="text-sm text-gray-500 mt-6 font-['comfortaa'] text-[18px]">
          Prefer email? Reach me directly at{" "}
          <a href="mailto:your.email@example.com" className="font-['comfortaa'] text-blue-600 hover:text-blue-800">
            obersan6@gmail.com
          </a>
        </p>
      </div>
    </section>
  );
}

export default Contact;



