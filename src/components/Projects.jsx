// src/components/Projects.jsx
import React from 'react';
import { motion } from 'framer-motion';
import Card from '../components/ui/Card';
import CardContent from '../components/ui/CardContent';

const projects = [
  {
    title: 'YouTube Clone',
    stack: 'React, Node.js, Express.js, MongoDB, Cloudinary',
    description:
      'Built a full-stack video sharing platform featuring secure authentication (JWT & bcrypt), user-managed video uploads, comment systems, like/dislike buttons, and category-based filtering. Optimized for responsiveness and seamless performance.',
    link: 'https://github.com/ejazulhaque09/YouTube_clone_project',
  },
  {
    title: 'ShoppyGlobe E-Commerce App',
    stack: 'React, Redux, Node.js, MongoDB',
    description:
      'An e-commerce web application with reusable UI components, Redux for state management, lazy loading for performance boost, and dynamic routing. Integrated Axios for efficient data handling and ensured responsiveness across devices.',
    link: 'https://shoppyglobe-in.netlify.app',
  },
  {
    title: 'To-Do App',
    stack: 'React',
    description:
      'A responsive To-Do manager using React with full CRUD capabilities. Implemented modular components, efficient list rendering, and clean UI for task creation, editing, and deletion.',
    link: 'https://to-do-appz.netlify.app',
  },
  {
    title: 'Weather Forecast App',
    stack: 'React, OpenWeatherMap API',
    description:
      'Displays real-time weather data for any city using OpenWeatherMap API. Built with clean UI, search input with debounce, and error handling.',
    link: 'https://github.com/ejazulhaque09/weather-app',
  },
  {
    title: 'Portfolio Website',
    stack: 'React, Tailwind CSS',
    description:
      'This very portfolio website showcasing skills, projects, and education, with a modern UI/UX and responsive layout.',
    link: '#',
  },
];

export default function Projects() {
  return (
    <section id="projects" className="space-y-8">
      <h2 className="text-3xl font-semibold border-b-2 border-blue-700 dark:border-green-500 pb-2">Projects</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <motion.div
            key={project.title}
            whileHover={{ scale: 1.03 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            <Card className="hover:shadow-xl bg-red-700 dark:bg-green-700 transition-shadow duration-300 h-full">
              <CardContent className="p-5 space-y-3">
                <h3 className="text-xl font-bold text-blue-900 dark:text-white">{project.title}</h3>
                <p className="text-sm italic text-blue-900 dark:text-white">{project.stack}</p>
                <p className="text-sm text-blue-900 dark:text-white">{project.description}</p>
                <a
                  href={project.link}
                  target="_blank"
                  className="inline-block mt-2 text-black underline hover:text-indigo-800"
                >
                  View Project
                </a>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
