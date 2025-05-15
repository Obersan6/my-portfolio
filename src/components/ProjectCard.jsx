/* ProjectCard Component */

import React from 'react';

function ProjectCard({ title, description, generalFeatures, techStack, githubLink, liveLink, videoLink, altLink, image, note }) {
  return (
    <div className={`w-full max-w-[1100px] rounded-lg shadow-lg p-6 bg-white transition transform hover:scale-[1.01]`}>
      <div className="flex flex-col lg:flex-row items-center gap-6">
        
        {/* Thumbnail */}
        {image && (
          <div className="lg:w-1/2 w-full flex justify-center items-center">
            <img
              src={image}
              alt={`${title} screenshot`}
              className="rounded-md shadow-md object-cover w-full h-auto max-h-[280px]"
            />
          </div>
        )}   

        {/* Content */}
        <div className="flex-1" text-left>
          <h3 className="text-2xl font-bold text-[#27374a] text-center pt-4 mb-6">{title}</h3>

          <p className="font-['comfortaa'] text-[15px] text-[#27374a] lg:text-left mb-4">{description}</p>

          {generalFeatures && (
            <p className="font-['comfortaa'] text-[15px] text-[#27374a] lg:text-left mb-4">
              <span className="text-[#077488] font-semibold">General Features: </span>
              {generalFeatures}
            </p>
          )}

          {/* Tech Stack Icons */}
          <div className="flex flex-wrap justify-center gap-6 pt-4 mb-4 font-['comfortaa']">
            {techStack.map((tech, idx) => {
              let iconClass;
              switch (tech.toLowerCase()) {
                case 'javascript': iconClass = 'devicon-javascript-plain'; break;
                case 'react': iconClass = 'devicon-react-original'; break;
                case 'html': iconClass = 'devicon-html5-plain'; break;
                case 'css': iconClass = 'devicon-css3-plain'; break;
                case 'bootstrap': iconClass = 'devicon-bootstrap-plain'; break;
                case 'python': iconClass = 'devicon-python-plain'; break;
                case 'flask': iconClass = 'devicon-flask-original'; break;
                case 'postgresql': iconClass = 'devicon-postgresql-plain'; break;
                case 'node.js':
                case 'node': iconClass = 'devicon-nodejs-plain'; break;
                case 'express': iconClass = 'devicon-express-original'; break;
                case 'supabase': iconClass = 'devicon-supabase-plain'; break;
                default: iconClass = 'fas fa-tools'; // fallback
              }

              return (
                <div className="flex flex-col items-center" key={idx}>
                  <i className={`${iconClass} colored text-3xl`}></i>
                  <span className="text-xs mt-1 text-[#27374a]">{tech}</span>
                </div>
              );
            })}
          </div>

          {/* Hosting Note */}
          {note && (
            <div className="text-sm text-[#27374a] font-bold mb-4 font-['Comfortaa']">
              <span>{note}</span>
            </div>
          )}

          {/* Links with Icons */}
        <div className="flex justify-end gap-6 mt-4">
            {githubLink && (
              <a href={githubLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-[#27374a] hover:text-[#0A66C2]">
                <i className="fab fa-github text-xl"></i>
                <span className="text-sm">Code</span>
              </a>
            )}
            {liveLink && (
              <a href={liveLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-[#27374a] hover:text-[#0A66C2]">
                <i className="fas fa-external-link-alt text-xl"></i>
                <span className="text-sm">Live</span>
              </a>
            )}
          {videoLink && (
            <a href={videoLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-[#FF0000] hover:text-[#27374a]">
              <i className="fab fa-youtube text-xl"></i>
              <span className="text-sm">Video Demo</span>
            </a>
          )}
          {altLink && (
            <a href={altLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 ext-[#27374a] hover:text-[#3AA6B9]">
              <i className="fas fa-link text-xl"></i>
              <span className="text-sm">More</span>
            </a>
          )}
        </div>
      </div>
    </div>
   </div>
  );
}

export default ProjectCard;



        
      
      
      