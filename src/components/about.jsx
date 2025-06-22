import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div data-aos="fade-up" data-aos-offset="200">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
            About Me
          </h2>
        </div>
        <div className="flex flex-col md:flex-row gap-12">
          {/* Journey Section */}
          <div className="md:w-1/2" data-aos="fade-right" data-aos-offset="300" data-aos-easing="ease-in-sine">
            <h3 className="text-2xl font-semibold mb-6 text-gray-800">
              My Journey
            </h3>
            <p className="text-gray-700 mb-6 leading-relaxed">
              I’m a dedicated <span className="text-blue-600 font-medium">Front-End Web Developer</span> with a strong focus on creating responsive, accessible, and user-first digital experiences. What began as a simple curiosity has grown into a refined skillset grounded in modern web technologies and clean, semantic code.
            </p>
            <p className="text-gray-700 mb-6 leading-relaxed">
              I specialize in transforming creative designs into fully functional, high-performance websites. My approach balances visual aesthetics with technical precision—ensuring cross-browser compatibility, accessibility, and optimal performance across all devices.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Outside of development, I actively explore emerging tools, contribute to open-source projects, and stay connected with the tech community through continuous learning and knowledge sharing.
            </p>
          </div>

          {/* Skills & Education */}
          <div className="md:w-1/2" data-aos="fade-left" data-aos-offset="300" data-aos-easing="ease-in-sine">
            <h3 className="text-2xl font-semibold mb-6 text-gray-800">
              Technical Skills
            </h3>

            {/* Skill Bar */}
            {[
              { name: 'HTML5 & Semantic Markup', percent: 95 },
              { name: 'CSS3, Tailwind CSS & Bootstrap', percent: 90 },
              { name: 'JavaScript & ES6+', percent: 85 },
              { name: 'React.js', percent: 80 },
              { name: 'Responsive Design', percent: 85 },
            ].map((skill, idx) => (
              <div className="mb-6" key={idx}>
                <div className="flex justify-between mb-2">
                  <span className="font-medium text-gray-700">{skill.name}</span>
                  <span className="text-blue-600 font-medium">{skill.percent}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className="h-2 rounded-full bg-blue-600"
                    style={{ width: `${skill.percent}%` }}
                  ></div>
                </div>
              </div>
            ))}

            <h3 className="text-2xl font-semibold mb-4 mt-10 text-gray-800">
  Education
</h3>
<div className="border-l-2 border-blue-600 pl-4">
  <div className="mb-4">
    <h4 className="font-semibold text-gray-800">
      Intermediate – Science (General Group)
    </h4>
    <p className="text-gray-600">
      Government College, Jamia Millia Road, Shah Faisal Colony, Karachi
    </p>
    <p className="text-gray-600">
      Board of Intermediate Education, Karachi — Completed: 2025
    </p>
  </div>
  <div>
    <h4 className="font-semibold text-gray-800">
      Front-End Development Certification
    </h4>
    <p className="text-gray-600">
      Web Development — 2024
    </p>
  </div>
</div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
