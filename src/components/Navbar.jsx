/* NavBar Component */

/* NavBar Component */

import React, { useState , useEffect } from 'react';


function Navbar() {
    // Responsive feature
    const [isOpen, setIsOpen] = useState(false);
    // Shrinking navbar
    const [isShrunk, setIsShrunk] = useState(false);

    // Close the mobile menu when window is resized to medium or larger screens
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 768) {
                setIsOpen(false);
            }
        };

        window.addEventListener('resize', handleResize);

        // Cleanup the even listener on component unmount 
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    // Handle scroll to shrunk/restore navbar height
    useEffect(() => {
      const handleScroll = () => {
        setIsShrunk(window.scrollY > 50);
      };
      
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ease-in-out bg-[#91D8E4] shadow-md ${isShrunk ? 'py-2' : 'py-12'}`}>

            <div className="max-w-screen-xl mx-auto px-4 flex flex-col items-center justify-between relative">
              
              {/* Social Icons - top-right corner */}
              <div className="absolute top-4 right-4 flex space-x-4">
                <a className="text-[#0A66C2] hover:text-[#3AA6B9]" href="https://www.linkedin.com/in/olga-bernal/" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-linkedin text-3xl text-[#0A66C2] hover:text-[#3AA6B9]"></i> LinkedIn
                </a>
                <a className="text-[#181717] hover:text-[#3AA6B9]" href="https://github.com/Obersan6" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-github text-3xl text-[#181717] hover:text-[#3AA6B9]"></i> GitHub
                </a>
              </div>


                {/* Brand Name */}
                <a
                    href="#home"
                    className={`font-['Sacramento'] text-[#3AA6B9] hover:text-[#27464a] font-bold transition-colors duration-300 nav-link ${
                    isShrunk ? 'text-[40px]' : 'text-[60px]'}`}
                >                
                    Olga Bernal
                </a>
                {/* <h1 className="text-[60px] text-[#3AA6B9] font-['Sacramento'] font-bold">
                Olga Bernal
                </h1> */}

                {/* Hamburger Menu Button (Visible on Small Screens) */}
                <div className="md:hidden mt-4">
                    <button
                      onClick={() => setIsOpen(!isOpen)}
                      className="text-[#3AA6B9]
                      focus:oultine-none"
                      aria-label="Toggle navigation"
                    >
                    
                    {/* Hamburger Icon */}
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
                <ul className={`mt-4 space-y-2 md:space-y-0 md:space-x-8 md:flex ${isOpen ? 'flex flex-col items-center' : 'hidden'} md:flex`}
            >
                  <li>
                    <a href="#about" className={`font-['Comfortaa'] text-[#3AA6B9] hover:text-[#27374a] font-bold transition-colors duration 300 nav-link ${isShrunk ? 'text-[20px]' : 'text-[25px]'}`}>
                      About
                    </a>
                  </li>
                  <li>
                    <a href="#skills" className={`font-['Comfortaa'] text-[#3AA6B9] hover:text-[#27374a] font-bold transition-colors duration 300 nav-link ${isShrunk ? 'text-[20px]' : 'text-[25px]'}`}>
                      Skills
                    </a>
                  </li>
                  <li>
                    <a href="#projects" className={`font-['Comfortaa'] text-[#3AA6B9] hover:text-[#27374a] transition-colors font-bold duration 300 nav-link ${isShrunk ? 'text-[20px]' : 'text-[25px]'}`}>
                      Projects
                    </a>
                  </li>
                  <li>
                    <a href="#contact" className={`font-['Comfortaa'] text-[#3AA6B9] hover:text-[#27374a] transition-colors font-bold duration 300 nav-link ${isShrunk ? 'text-[20px]' : 'text-[25px]'}`}>
                      Contact
                    </a>
                  </li>
                </ul>               
            </div>
        </nav>
    )
}


export default Navbar;