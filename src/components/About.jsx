/* About Component */

import React from 'react';

function About() {
    return (
        <section id="about" className="bg-[#b3e0ee] py-16 text-center">
            <h2 className="text-[50px] font-['Montserrat'] text-[#3AA6B9] mt-4">About Me</h2>

            <p className="mt-6 text-lg px-6 max-w-6xl mx-auto text-[25px] font-['Comfortaa'] text-[#1b3944] leading-relaxed">
            Hi there! I'm a <span className="font-bold text-[#3AA6B9]">software developer</span>. I’m particularly interested in creating educational tools and solutions for various fields—especially in areas like education, research, health, science, and even the food industry.
            <br /><br />
            Before transitioning into tech, I managed international literary talent in film and TV, working closely with award-winning creatives. That experience taught me how to lead complex projects, collaborate across disciplines, and stay adaptable—skills I now bring into software development.
            </p>
        </section>
    );
}

export default About;


// text color for About background color --> bg-[#b3e0ee]