// src/components/Education.js
import React from 'react';

export default function Education() {
  return (
    <section id="education" className="space-y-2">
      <h2 className="text-3xl font-semibold border-b-2 border-blue-700 dark:border-green-500 pb-1">Education</h2>
      <div className="bg-blue-700 text-gray-200 dark:bg-green-700 p-4 rounded-xl shadow-sm">
        <p>
          <strong>B.Tech in Computer Science</strong> – Dr. A.P.J. Abdul Kalam Technical University
          <br />
          HMFA Memorial Institute of Engineering and Technology, 2024 (7.85 CGPA)
        </p>
      </div>
    </section>
  );
}
