/* ProjectCard Component */

import React from 'react';

function ProjectCard({ title, description, techStack, githubLink, liveLink, isFeatured }) {
  return (
    <div
      className={`w-full max-w-[400px] rounded-lg shadow-lg p-8 ${
        isFeatured ? 'bg-white' : 'bg-white'
      } transition transform hover:scale-105`}
    >
      <h3 className="text-2xl font-bold text-[#27374a] mb-4">{title}</h3>
      <p className="text-[#27374a] mb-4">{description}</p>

      {/* Tech Stack */}
      <div className="flex flex-wrap justify-center gap-2 mb-4">
        {techStack.map((tech, idx) => (
          <span
            key={idx}
            className="bg-[#3AA6B9] text-white px-3 py-1 rounded-full text-sm"
          >
            {tech}
          </span>
        ))}
      </div>

      {/* Links */}
      <div className="flex justify-center gap-6 mt-4">
        {githubLink && (
          <a
            href={githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#27374a] hover:text-[#3AA6B9]"
          >
            GitHub
          </a>
        )}
        {liveLink && (
          <a
            href={liveLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#27374a] hover:text-[#3AA6B9]"
          >
            Live Demo
          </a>
        )}
      </div>
    </div>
  );
}

export default ProjectCard;
