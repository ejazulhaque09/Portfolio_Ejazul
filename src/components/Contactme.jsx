// src/components/ContactMe.jsx
import React, { useState, useRef } from "react";
import emailjs from "emailjs-com";

export default function ContactMe() {
  const formRef = useRef();
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_okqt2u7",     // Replace with your EmailJS service ID
        "template_2okku8o",    // Replace with your EmailJS template ID
        formRef.current,
        "Wxt2zckIWzM7Snjrn"      // Replace with your EmailJS public key
      )
      .then(
        () => {
          setSuccess(true);
          formRef.current.reset();
        },
        (error) => {
          alert("Failed to send message. Please try again later.");
        }
      );
  };

  return (
    <section id="contact" className="space-y-6 mt-12">
      <h2 className="text-3xl font-semibold border-b-2 border-blue-700 dark:border-green-500 pb-1">
        Contact Me
      </h2>

      <form
        ref={formRef}
        onSubmit={handleSubmit}
        className="bg-blue-700 dark:bg-green-700 p-6 rounded-xl shadow-sm space-y-4"
      >
        <input type="hidden" name="contact_number" />

        <div>
          <label className="block text-sm font-medium text-black dark:text-white">
            Name
          </label>
          <input
            type="text"
            name="name"
            required
            className="mt-1 block w-full rounded-sm text-black bg-blue-200 border-gray-300 dark:border-white shadow-sm dark:bg-green-900 dark:text-white"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-black dark:text-white">
            Email
          </label>
          <input
            type="email"
            name="email"
            required
            className="mt-1 block w-full rounded-sm text-black border-gray-300 bg-blue-200 dark:border-white shadow-sm dark:bg-green-900 dark:text-white"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-black dark:text-white">
            Message
          </label>
          <textarea
            name="message"
            rows={4}
            required
            className="mt-1 block w-full rounded-sm text-black border-gray-300 bg-blue-200 dark:border-white shadow-sm dark:bg-green-900 dark:text-white"
          ></textarea>
        </div>

        <button
          type="submit"
          className="bg-blue-600 hover:bg-blue-800 dark:bg-green-600 dark:hover:bg-green-800 text-white px-4 py-2 rounded-md"
        >
          Send Message
        </button>

        {success && (
          <p className="text-green-800 dark:text-red-600 mt-2">Message sent successfully!</p>
        )}
      </form>
    </section>
  );
}
