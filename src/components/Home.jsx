/* Home Component */

import React from 'react';
import profilePic from '../assets/olga-img.jpg';


function Home() {
    return (
        <section
        id="home"
        className="bg-[#EAFDFC] px-4 text-center
                   mt-[250px] sm:pt-[200px] md:mt-[100px] lg:mt-[80px]"            
        >
            <img
                src={profilePic}
                alt="Olga Bernal"
                className="mx-auto rounded-full ring-2 ring-gray-300 dark:ring-gray-500
                           w-32 h-32 sm:w-40 sm:h-40 md:w-52 md:h-52 lg:w-64 lg:h-64"
              />

            <h2 className="mt-6 mb-8 text-[#3AA6B9] font-['Sacramento']
                 text-[28px] sm:text-[36px] md:text-[48px] lg:text-[70px]">
                Hi, I'm a Software Developer
            </h2>

        </section>
    );
}

export default Home;