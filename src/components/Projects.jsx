/* Projects Component */

import React from 'react';
import ProjectCard from './ProjectCard'; 
import psychodiagnoseImg from '../assets/PsychoDiagnose-About.png';
import adoptadogImg from '../assets/AdoptaDog-home.png';
import joblyImg from '../assets/Jobly-home.png';
import boggleGameImg from '../assets/boggle-game-img.png';
import todoListimg from '../assets/todoList-img.png';
import deckOfCards from '../assets/deck-of-cards-img.jpeg';

function Projects() {
    return (
        // <section id="projects" className="bg-[#b3e0ee] py-16 text-center">
        // <section id="projects" className="bg-[#afe3f2] py-16 text-center">
        <section id="projects" className="bg-[#afe3f2] pt-25 pb-40 text-center">
            <h2 className="text-[50px] font-['Montserrat'] text-[#077488]">Projects</h2>
            {/* <h2 className="text-[50px] font-['italiana'] text-[#077488]">Projects</h2> */}

            {/* Main Projects */}
            <div className="space-y-16 mb-20">
              {/* Center each featured project */}
              <div className="flex justify-center mt-30 mb-14">
                <ProjectCard
                  title="PsychoDiagnose"
                  description={
                    <>
                      An educational diagnostic tool based on the <strong><em>DSM-5-TR</em></strong>, designed to help psychology and psychiatry students learn the diagnostic process. 
                    </>
                  }
                  generalFeatures={
                    <>
                      Full-stack application, features a <strong><em>custom API</em></strong>, <strong><em>over 30 routes</em></strong>, responsive design, user authentication, search functionality with autocomplete, and dynamic content.
                    </>
                  }
                  techStack={['Python', 'Flask', 'PostgreSQL', 'JavaScript', 'html', 'css', 'Bootstrap']}
                  githubLink="https://github.com/Obersan6/PsychoDiagnose"
                  note="🔔 App may take a moment to load (free hosting)."
                  liveLink="https://capstone-1-deployment.onrender.com/"
                  image={psychodiagnoseImg}
                  isFeatured={true}
                />
              </div>

              <div className="flex justify-center mt-20 mb-14">
                <ProjectCard
                  title="AdoptaPet"
                  description="A full-stack application that helps users find adoptable dogs across the U.S. "
                  generalFeatures={
                    <>
                      Secure authentication, real-time dog listings via the <strong><em>Petfinder API</em></strong>, search by breed or location, and a fully responsive design.
                    </>
                  }
                  techStack={['JavaScript', 'React', 'Node.js', 'Express', 'JWT', 'css','Bootstrap']}
                  githubLink="https://github.com/Obersan6/AdoptaDog"
                  videoLink="https://www.youtube.com/watch?v=IUakRvD381A"
                  image={adoptadogImg}
                  isFeatured={true}
                />
              </div>

              <div className="flex justify-center mt-20 mb-14">
                <ProjectCard
                  title="Jobly"
                  description="A job board application built using React and a provided Express.js backend API. Users can browse companies and job listings, apply for jobs, and manage their profiles through a secure, responsive interface. "
                  generalFeatures="Full-stack application (frontend focus), integrates with a prebuilt RESTful API, secure user authentication with JWT, PostgreSQL data handling, protected routes and forms, job application tracking, and design using React and Bootstrap."
                  techStack={['React', 'Express', 'PostgreSQL', 'JWT', 'css', 'Bootstrap']}
                  note="🔔 App may take a moment to load (free hosting)."
                  githubLink="https://github.com/Obersan6/react-jobly-frontend"
                  liveLink="https://react-jobly-frontend-8y5g.onrender.com/"
                  image={joblyImg}
                  isFeatured={true}
                />
              </div>

              <div className="flex justify-center mt-20 mb-14">
                <ProjectCard
                  title="Boggle Game"
                  description="A browser-based word game where users form words from a randomized letter grid. The app checks word validity, tracks scores, and provides live feedback — all powered by Flask and JavaScript."
                  generalFeatures="Interactive game interface with real-time word validation, AJAX requests using Axios, backend logic in Flask, session-based score tracking, client-side timer, and responsive UI. Includes backend routes for scoring, validation, and game state, as well as JSON-based communication between client and server."
                  techStack={['Python', 'Flask', 'JavaScript', 'html', 'css']}
                  githubLink="https://github.com/Obersan6/flask-boggle"
                  videoLink="https://youtu.be/uB6AyBCDPBA"
                  image={boggleGameImg}
                  isFeatured={true}
                />
              </div>

              <div className="flex justify-center mt-20 mb-14">
                <ProjectCard
                  title="To-Do List"
                  description="A simple, responsive to-do list app built with vanilla JavaScript. Users can add, delete, and persist tasks across sessions using localStorage."
                  generalFeatures="Frontend-only application with dynamic DOM manipulation, real-time task updates, localStorage persistence, form validation, and clean responsive design using CSS and Bootstrap."
                  techStack={['JavaScript', 'HTML', 'CSS', 'Bootstrap']}
                  githubLink="https://github.com/Obersan6/To-Do-List"
                  liveLink="https://obersan6.github.io/To-Do-List/"
                  image={todoListimg}
                  isFeatured={true}
                />
              </div>

              <div className="flex justify-center mt-20 mb-14">
                <ProjectCard
                  title="Draw a Deck"
                  description={
                    <>
                      A dynamic card-drawing app built with React and the <strong><em>Deck of Cards API</em></strong>. Users can draw cards one by one from a shuffled deck, watch them appear in real time, and reset the deck at any time.
                    </>
                  }
                  generalFeatures="Frontend-only application with API integration, real-time rendering using useEffect and useState, automated intervals for card drawing, conditional rendering, and smooth user interaction through React components."
                  techStack={['React', 'HTML', 'CSS']}
                  githubLink="https://github.com/Obersan6/Draw-a-Deck"
                  liveLink="https://obersan6.github.io/Draw-a-Deck/"
                  image={deckOfCards}
                  isFeatured={true}
                />
              </div>
              {/* More projects here */}
            </div>

            {/* Other Projects */}
            {/* <h2 className="text-[50px] font-['Montserrat'] text-[#077488] mt-4">Other Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"> */}
                {/* Small/Other projects */}
                {/* <ProjectCard
                  title="Weather App"
                  description="A simple weather dashboard using OpenWeather API."
                  techStack={['JavaScript', 'HTML', 'CSS']}
                  githubLink="#"
                  isFeatured={false}
                />
                <ProjectCard
                  title="Markdown Previewer"
                  description="A live markdown editor built with React."
                  techStack={['React']}
                  githubLink="#"
                  isFeatured={false}
                /> */}
                {/* Add many more */}
            {/* </div> */}
        </section>
    );
}

export default Projects;