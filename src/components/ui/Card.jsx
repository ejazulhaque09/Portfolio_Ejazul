// src/components/ui/Card.jsx
import React from 'react';

export default function Card({ children, className = '', ...props }) {
  return (
    <div
      className={`border border-gray-200 rounded-lg shadow-lg bg-white ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}
