/* About Component */

import React from 'react';

function About() {
    return (
        // <section id="about" className="bg-[#b3e0ee] pt-25 pb-40 text-center">
        <section id="about" className="bg-[#afe3f2] pt-25 pb-40 text-center">

            <h2 className="text-[50px] font-['Montserrat'] text-[#077488]">About Me</h2>
  
            <p className="mt-16 text-lg px-6 max-w-6xl mx-auto text-[28px] font-['Comfortaa'] text-[#27464a] leading-relaxed">
            {/* 👋 Hi there!  */}
            <br /> 
            I’m a <span className="font-bold text-[#077488]">full-stack software developer</span> with a background in psychology, especially in areas like cognitive science, neuroscience, and technology. I enjoy building educational tools and meaningful products—mostly in fields like education, research, health, and well-being, but I’m open to any mission-driven project that grabs my interest.
            </p>
        </section>
    );
}

export default About;


// text color for About background color --> bg-[#b3e0ee]