// src/components/AboutMe.jsx
import React from "react";
import { Github, Twitter, Linkedin } from "lucide-react";

export default function AboutMe() {
  return (
    <section id="about-me" className="space-y-6 mt-8">
      <h2 className=" text-gray-700 dark:text-gray-200 text-3xl font-semibold border-b-2 border-blue-700 dark:border-green-500 pb-2">
        About Me
      </h2>

      <div className="bg-blue-500 dark:bg-green-700 p-6 rounded-xl shadow-sm text-gray-200 dark:text-gray-200 space-y-4">
        <p>
          Hi, I'm <strong>Ejazul Haque</strong> — a passionate full-stack
          developer skilled in building responsive web applications using the
          MERN stack. I love crafting user-friendly interfaces and seamless
          backend integrations. Currently diving deeper into Angular and modern
          frontend architectures.
        </p>

        <div className="flex items-center gap-6">
          <a
            href="https://github.com/ejazulhaque09"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
          >
            <Github size={24} />
          </a>
          <a
            href="https://twitter.com/your_twitter_username"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
          >
            <Twitter size={24} />
          </a>
          <a
            href="https://linkedin.com/in/ejazulhaque09"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-700 dark:hover:text-blue-400 transition-colors"
          >
            <Linkedin size={24} />
          </a>
        </div>
      </div>
    </section>
  );
}
