/* About Component */

import React from 'react';

function About() {
    return (
        <section id="about" className="bg-[#afe3f2] pt-25 pb-40 text-center sm:mt-[5px] md:mt-[100px] lg:pt-[125px]">

            {/* <h2 className="text-[50px] font-['Montserrat'] text-[#077488] h2-xs">About Me</h2> */}
            <h2 className="text-[32px] sm:text-[38px] md:text-[44px] lg:text-[50px] font-['Montserrat'] text-[#077488]">About Me</h2>

    
            <p className="mt-16 text-lg px-6 max-w-6xl mx-auto text-[28px] font-['Comfortaa'] text-[#27464a] leading-relaxed sm:text-[5px] md:text-[15px] lg:text-[28px] text-xs-custom">
            {/* <p className="mt-16 px-6 mx-auto text-[#27464a] leading-relaxed font-['Comfortaa'] 
              text-[18px] sm:text-[20px] md:text-[24px] lg:text-[28px] max-w-5xl"> */}


            {/* 👋 Hi there!  */}
            <br /> 
            I’m a <span className="font-bold text-[#077488]">full-stack software developer</span> with a background in psychology, especially in areas like cognitive science, neuroscience, and technology. I enjoy building educational tools and meaningful products—mostly in fields like education, research, health, and well-being, but I’m open to any mission-driven project that sparks curiosity and impact.
            <br />

            <br></br>
          
            I’m currently expanding <span className="font-bold text-[#077488]">PsychoDiagnose</span>, an interactive diagnostic tool built to help psychology students apply the <span className="font-bold text-[#077488]">DSM-5-TR</span> in clinical settings. I’m also co-developing an <strong><em>AI-powered</em></strong>  application that enables users to engage directly with commercial products in a more personalized way. We’re designing it as a practical, user-centered solution with plans to bring it to market—and it’s already starting to attract interest. I love creating thoughtful, real-world applications, and I’m always excited to take on new challenges.
            <br />
            </p>
            
        </section>
    );
}

export default About;


