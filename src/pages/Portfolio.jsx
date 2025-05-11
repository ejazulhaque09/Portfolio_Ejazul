// src/pages/Portfolio.jsx
import React from "react";
import { motion } from "framer-motion";
import AboutMe from "../components/Aboutme";
import ContactMe from "../components/Contactme";
import Projects from "../components/Projects";
import ThemeToggle from "../components/ThemeToggle";
import Skills from "../components/Skills";
import Education from "../components/Education";

const Portfolio = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="text-gray-700 dark:text-gray-200 font-sans bg-indigo-200 dark:bg-green-900 min-h-screen"
    >
      {/* Navbar */}
      <nav className="bg-indigo-700 dark:bg-green-600 text-white p-4 shadow-md sticky top-0 z-50">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">Ejazul Haque</h1>
          <ul className="flex gap-6 font-medium">
            <li>
              <a href="#about-me" className="hover:bg-white hover:text-black px-4 py-2 rounded-md dark:hover:bg-green-800 dark:hover:text-white">
                About Me
              </a>
            </li>
            <li>
              <a href="#projects" className="hover:bg-white hover:text-black px-4 py-2 rounded-md dark:hover:bg-green-800 dark:hover:text-white">
                Projects
              </a>
            </li>
            <li>
              <a href="#skills" className="hover:bg-white hover:text-black px-4 py-2 rounded-md dark:hover:bg-green-800 dark:hover:text-white">
                Skills
              </a>
            </li>
            <li>
              <a href="#education" className="hover:bg-white hover:text-black px-4 py-2 rounded-md dark:hover:bg-green-800 dark:hover:text-white">
                Education
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:bg-white hover:text-black px-4 py-2 rounded-md dark:hover:bg-green-800 dark:hover:text-white">
                Contact Me
              </a>
            </li>
            <li>
              <a
                href="Ejazul_Haque_Resume.pdf"
                target="_blank"
                className="hover:bg-white hover:text-black dark:bg-green-600 text-white px-4 py-2 rounded-md dark:hover:bg-green-800 dark:hover:text-white"
              >
                Resume
              </a>
            </li>
            <ThemeToggle />
            
          </ul>
        </div>
      </nav>

      <div className="p-6 space-y-12 max-w-6xl mx-auto">
        <header className="text-center space-y-4 mt-4">
          <p className="text-lg text-black dark:text-white">
            Full Stack Developer | MERN Stack | Passionate about building
            efficient and user-friendly apps
          </p>
        </header>

        {/* About Me Section */}
        <AboutMe />

        {/* Projects Section */}
        <Projects />

        {/* Skills Section */}
        <Skills/>

        {/* Education Section */}
        <Education/>

        {/* Contact Me Section */}
        <ContactMe />
      </div>
      
    </motion.div>
  );
};

export default Portfolio;
