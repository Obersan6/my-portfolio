/* Footer Component */

import React from 'react';

function Footer() {
  return (
    <footer className="bg-[#91D8E4] py-6 text-center mt-20">
      <div className="flex justify-center space-x-6 mb-4">
        <a href="https://www.linkedin.com/in/your-linkedin-here" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-linkedin text-3xl text-[#0A66C2] hover:text-[#3AA6B9]"></i>
        </a>
        <a href="https://github.com/your-github-here" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-github text-3xl text-[#181717] hover:text-[#3AA6B9]"></i>
        </a>
      </div>
      <p className="text-sm font-['comfortaa'] text-[#27464a]">© 2025 Olga Bernal. All rights reserved.</p>
    </footer>
  );
}

export default Footer;
