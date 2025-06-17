import React, { useEffect, useRef } from 'react';
import { Linkedin, Github, Twitter, Instagram } from 'lucide-react';
import Img from '../images/ZAB_4540_optimized_1000.jpg';

const Hero = () => {
  const typingRef = useRef(null);

  useEffect(() => {
    const text = "Transforming your vision into engaging and elegant web experiences.";
    let index = 0;

    const typeText = () => {
      if (typingRef.current) {
        if (index < text.length) {
          typingRef.current.textContent = text.slice(0, index + 1);
          index++;
          setTimeout(typeText, 100);
        } else {
          setTimeout(() => {
            index = 0;
            typeText();
          }, 3000);
        }
      }
    };

    typeText();
  }, []);

  return (
    <section id="home" className="hero-bg min-h-screen flex items-center pt-16">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
        
        {/* Image Section */}
        <div className="md:w-5/12 mb-10 md:mb-0 flex justify-center">
          <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-white shadow-xl transition-transform duration-300 hover:scale-105">
            <img
              src={Img}
              alt="M. Muheb Riaz"
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
        </div>

        {/* Text Section */}
        <div className="md:w-7/12 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 mb-2">
            M. Muheb Riaz
          </h1>
          <h2 className="text-xl md:text-2xl text-blue-600 font-medium mb-4">
            Front-End Web Developer
          </h2>
          <p
            ref={typingRef}
            className=" text-lg md:text-xl text-gray-600 mb-8 min-h-[rem]"
          >
            {/* Typewriter effect will be shown here */}
          </p>

          {/* Buttons */}
          <div className=" sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 justify-center md:justify-start">
            <a
              href="#services"
              className=" bg-blue-600 text-white px-8 py-3 rounded-full font-medium transition-all duration-300 hover:bg-blue-700"
            >
              View My Work
            </a>
            <a
              href="#contact"
              className=" ml-4 border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-full font-medium transition-all duration-300 hover:bg-blue-600 hover:text-white"
            >
              Contact Me
            </a>
          </div>

          {/* Social Icons */}
          <div className="flex mt-8 space-x-4 justify-center md:justify-start">
            <a href="#" className="w-10 h-10 flex items-center justify-center text-white text-gray-600 hover:text-blue-600 transition duration-300">
              <Linkedin size={20} />
            </a>
            <a href="#" className="w-10 h-10 flex items-center justify-center text-white text-gray-600 hover:text-blue-600 transition duration-300">
              <Github size={20} />
            </a>
            <a href="#" className="w-10 h-10 flex items-center justify-center text-gray-600 hover:text-blue-600 transition duration-300 text-white">
              <Twitter size={20} />
            </a>
            <a href="#" className="w-10 h-10 flex items-center justify-center text-gray-600 hover:text-blue-600 transition duration-300 text-white">
              <Instagram size={20} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
