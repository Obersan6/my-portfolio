import React, { useState, useEffect } from 'react';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isShrunk, setIsShrunk] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsShrunk(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ease-in-out bg-[#91D8E4] shadow-md ${isShrunk ? 'py-2' : 'py-12'}`}>
      <div className="max-w-screen-xl mx-auto px-4 relative">

        {/* Brand name centered */}
        <div className="flex justify-center">
          <a
            href="#home"
            className={`font-['Sacramento'] text-[#3AA6B9] hover:text-[#27464a] font-bold transition-colors duration-300 nav-link ${
              isShrunk
                ? 'text-2xl sm:text-3xl md:text-4xl'
                : 'text-4xl sm:text-5xl md:text-6xl'
            }`}
          >
            Olga Bernal
          </a>
        </div>

        {/* Social icons — absolute on larger screens */}
        <div className="mt-4 flex justify-center sm:justify-end sm:absolute sm:top-4 sm:right-4 space-x-4 items-center text-xs sm:text-sm md:text-base">
          <a
            className="flex items-center space-x-1 text-[#0A66C2] hover:text-[#3AA6B9]"
            href="https://www.linkedin.com/in/olga-bernal/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-linkedin text-lg sm:text-xl md:text-2xl"></i>
            <span className="hidden sm:inline">LinkedIn</span>
          </a>
          <a
            className="flex items-center space-x-1 text-[#181717] hover:text-[#3AA6B9]"
            href="https://github.com/Obersan6"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-github text-lg sm:text-xl md:text-2xl"></i>
            <span className="hidden sm:inline">GitHub</span>
          </a>
        </div>

        {/* Hamburger Button */}
        <div className="md:hidden mt-4 flex justify-center">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-[#3AA6B9] focus:outline-none"
            aria-label="Toggle navigation"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Navigation Links */}
        <ul
          className={`mt-4 space-y-2 md:space-y-0 md:space-x-8 md:flex justify-center ${
            isOpen ? 'flex flex-col items-center' : 'hidden'
          } md:flex`}
        >
          {['about', 'skills', 'projects', 'contact'].map((id) => (
            <li key={id}>
              <a
                href={`#${id}`}
                className={`font-['Comfortaa'] text-[#3AA6B9] hover:text-[#27374a] font-bold transition-colors duration-300 nav-link ${
                  isShrunk
                    ? 'text-base sm:text-lg md:text-xl'
                    : 'text-lg sm:text-xl md:text-2xl'
                }`}
              >
                {id.charAt(0).toUpperCase() + id.slice(1)}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
