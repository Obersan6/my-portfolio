/* Projects Component */

import React from 'react';
import ProjectCard from './ProjectCard'; 

function Projects() {
    return (
        // <section id="projects" className="bg-[#b3e0ee] py-16 text-center">
        <section id="projects" className="bg-[#afe3f2] py-16 text-center">
            <h2 className="text-[50px] font-['Montserrat'] text-[#077488] mt-12">Projects</h2>

            {/* Main Projects */}
            <div className="space-y-16 mb-20">
              {/* Center each featured project */}
              <div className="flex justify-center">
                <ProjectCard
                  title="PsychoDiagnose"
                  description="An educational tool for psychology and psychiatry students."
                  techStack={['Python', 'Flask', 'PostgreSQL', 'React']}
                  githubLink="#"
                  liveLink="#"
                  isFeatured={true}
                />
              </div>

              <div className="flex justify-center">
                <ProjectCard
                  title="AdoptaPet"
                  description="A full-stack pet adoption platform."
                  techStack={['React', 'Node.js', 'Express', 'Supabase']}
                  githubLink="#"
                  liveLink="#"
                  isFeatured={true}
                />
              </div>
              {/* More projects here */}
            </div>

            {/* Other Projects */}
            <h2 className="text-[50px] font-['Montserrat'] text-[#077488] mt-4">Other Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                {/* Small/Other projects */}
                <ProjectCard
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
                />
                {/* Add many more */}
            </div>
        </section>
    );
}

export default Projects;