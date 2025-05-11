// src/components/Skills.js
import React from 'react';

export default function Skills() {
  return (
    <section id="skills" className="space-y-4">
      <h2 className="text-3xl font-semibold border-b-2 border-blue-700 dark:border-green-500 pb-2">Skills</h2>
      <div className="bg-blue-700 text-gray-200 dark:bg-green-700 p-4 rounded-xl shadow-sm">
        <p className="leading-loose">
          <strong>Languages:</strong> JavaScript, HTML, CSS
          <br />
          <strong>Frontend:</strong> ReactJS, Redux, Tailwind CSS
          <br />
          <strong>Backend:</strong> Node.js, Express.js, REST APIs, JWT
          <br />
          <strong>Database:</strong> MongoDB, Mongoose
          <br />
          <strong>Tools:</strong> Git, GitHub, Postman
        </p>
      </div>
    </section>
  );
}
