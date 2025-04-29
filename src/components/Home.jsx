/* Home Component */

import React from 'react';
import profilePic from '../assets/olga-img.jpg';


function Home() {
    return (
        // <section id="home" className="bg-[#EAFDFC] py-16 text-center">
        <section id="home" className="bg-[#EAFDFC]  pt-65 md:pt-75 text-center">
            <img
              src={profilePic}
              alt="Olga Bernal"
              className="profile-img mx-auto w-50 h-50 p-1 rounded-full ring-2 ring-gray-300 dark:ring-gray-500"
            />

            <h2 className="text-[60px] font-['Sacramento'] text-[#3AA6B9] mt-4">
                Hi, I'm a Software Developer 
            </h2>"
        </section>
    );
}

export default Home;