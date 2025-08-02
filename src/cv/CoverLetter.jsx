import React from "react";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";

const CoverLetter = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 to-blue-100 dark:from-gray-900 dark:to-gray-800 flex items-center justify-center p-6 font-jost">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="bg-white dark:bg-gray-900 rounded-2xl shadow-2xl p-10 max-w-3xl w-full"
      >
        <h1 className="text-3xl font-bold mb-6 text-blue-700 dark:text-blue-400">
          <TypeAnimation
            sequence={[
              "Cover Letter",
              1000,
              "Junior Front-End Developer",
              1000,
              "React.js Enthusiast",
              1000,
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
          />
        </h1>

        <p className="text-gray-800 dark:text-gray-300 leading-relaxed text-lg">
          Dear Hiring Manager,
        </p>
        <p className="mt-4 text-gray-800 dark:text-gray-300 leading-relaxed text-lg">
          I am writing to express my strong interest in the Front-End Developer position. As a recent diploma graduate and passionate self-taught developer, I bring a solid foundation in web technologies including <strong>HTML, CSS, Tailwind, JavaScript, React, Bootstrap</strong>, and responsive design.
        </p>
        <p className="mt-4 text-gray-800 dark:text-gray-300 leading-relaxed text-lg">
          My recent project, a <strong>Parcel Delivery Website</strong>, demonstrates my ability to build full-featured React applications with form validation, conditional rendering, responsive UI, and routing. I am also continuously learning backend technologies to become a complete MERN developer.
        </p>
        <p className="mt-4 text-gray-800 dark:text-gray-300 leading-relaxed text-lg">
          I am eager to contribute to your team, learn from experienced developers, and grow in a collaborative environment. I am confident that my dedication and enthusiasm make me a strong candidate for this role.
        </p>
        <p className="mt-4 text-gray-800 dark:text-gray-300 leading-relaxed text-lg">
          Thank you for considering my application. I would be thrilled to discuss how I can support your development team.
        </p>
        <p className="mt-6 text-gray-800 dark:text-gray-300 leading-relaxed text-lg">
          Sincerely,<br />
          <span className="font-semibold text-blue-600 dark:text-blue-400">Md. Belal Ho Sen</span>
        </p>
      </motion.div>
    </div>
  );
};

export default CoverLetter;
