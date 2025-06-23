import React from 'react';

function Skills() {
  return (
    <section
      id="skills"
      className="bg-[#EAFDFC] pt-10 pb-20 text-center sm:pt-16 sm:pb-32 md:pt-24 md:pb-40"
    >
      <h2 className="text-3xl sm:text-4xl md:text-[50px] font-['Montserrat'] text-[#077488] mb-10">
        Skills
      </h2>

      <div className="max-w-6xl mx-auto px-4">
        {/* Frontend */}
        <div className="mt-20 mb-14">
          <h3 className="text-xl sm:text-2xl font-semibold font-['Comfortaa'] text-[#27374a] mb-6 sm:mb-10">
            Frontend
          </h3>
          <div className="flex flex-wrap justify-center gap-x-10 gap-y-8 sm:gap-x-12 sm:gap-y-10">
            {[
              ['devicon-javascript-plain', 'JavaScript', 'devicon'],
              ['devicon-react-original', 'React', 'devicon'],
              ['devicon-jquery-plain', 'jQuery', 'devicon'],
              ['devicon-html5-plain', 'HTML', 'devicon'],
              ['devicon-css3-plain', 'CSS', 'devicon'],
              ['devicon-bootstrap-plain', 'Bootstrap', 'devicon'],
              ['fas fa-mobile-alt', 'Responsive Design', 'fontawesome'],
            ].map(([icon, label, type], idx) => (
              <div className="flex flex-col items-center" key={idx}>
                {type === 'devicon' ? (
                  <i className={`${icon} colored text-3xl sm:text-4xl md:text-5xl`}></i>
                ) : (
                  <i className={`${icon} text-3xl sm:text-4xl md:text-5xl text-[#3AA6B9]`}></i>
                )}
                <span className="mt-2 text-sm font-['Comfortaa'] text-[#27374a]">{label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Backend */}
        <div className="mb-12">
          <h3 className="text-xl sm:text-2xl font-semibold font-['Comfortaa'] text-[#27374a] mb-6 sm:mb-10">
            Backend
          </h3>
          <div className="flex flex-wrap justify-center gap-x-10 gap-y-8 sm:gap-x-12 sm:gap-y-10">
            {[
              ['devicon-python-plain', 'Python', 'devicon'],
              ['devicon-flask-original', 'Flask', 'devicon'],
              ['devicon-nodejs-plain', 'Node.js', 'devicon'],
              ['devicon-express-original', 'Express', 'devicon'],
              ['devicon-postgresql-plain', 'SQL', 'devicon'],
              ['fas fa-code', 'APIs', 'fontawesome'],
            ].map(([icon, label, type], idx) => (
              <div className="flex flex-col items-center" key={idx}>
                {type === 'devicon' ? (
                  <i className={`${icon} colored text-3xl sm:text-4xl md:text-5xl`}></i>
                ) : (
                  <i className={`${icon} text-3xl sm:text-4xl md:text-5xl text-[#3AA6B9]`}></i>
                )}
                <span className="mt-2 text-sm font-['Comfortaa'] text-[#27374a]">{label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Tools & Methods */}
        <div>
          <h3 className="text-xl sm:text-2xl font-semibold font-['Comfortaa'] text-[#27374a] mb-6 sm:mb-10">
            Tools & Methods
          </h3>
          <div className="flex flex-wrap justify-center gap-x-10 gap-y-8 sm:gap-x-12 sm:gap-y-10">
            {[
              ['devicon-git-plain', 'Git', 'devicon'],
              ['devicon-github-original', 'GitHub', 'devicon'],
              ['devicon-supabase-plain', 'Supabase', 'devicon'],
              ['fas fa-cloud', 'Render', 'fontawesome'],
              ['fas fa-bug', 'Software Testing', 'fontawesome'],
            ].map(([icon, label, type], idx) => (
              <div className="flex flex-col items-center" key={idx}>
                {type === 'devicon' ? (
                  <i className={`${icon} colored text-3xl sm:text-4xl md:text-5xl`}></i>
                ) : (
                  <i className={`${icon} text-3xl sm:text-4xl md:text-5xl text-[#3AA6B9]`}></i>
                )}
                <span className="mt-2 text-sm font-['Comfortaa'] text-[#27374a]">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
