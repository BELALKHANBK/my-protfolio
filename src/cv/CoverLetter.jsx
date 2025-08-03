import React from "react";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import { FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa";

const CoverLetter = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 flex items-center justify-center p-6 font-jost">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="bg-white dark:bg-gray-900 rounded-3xl shadow-xl p-10 max-w-4xl w-full border border-blue-200 dark:border-gray-700"
      >
        {/* Header */}
        <div className="mb-6 text-center">
          <h1 className="text-4xl font-extrabold text-blue-700 dark:text-blue-400 tracking-wide">
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
          <p className="text-gray-500 dark:text-gray-400 mt-2 text-lg">
            Enthusiastic | Fast Learner | Team Player
          </p>
        </div>

        {/* Body */}
        <div className="space-y-5 text-gray-800 dark:text-gray-300 text-lg leading-relaxed">
          <p>Dear Hiring Manager,</p>

          <p>
            I am writing to express my sincere interest in the Front-End Developer position at your organization. As a recent diploma graduate and passionate web developer, I bring hands-on experience and a continuous drive to build intuitive and accessible web applications.
          </p>

          <p>
            My technical skills include <strong>HTML, CSS, Tailwind CSS, Bootstrap, JavaScript, and React</strong>. I recently completed a full-featured <strong>Parcel Delivery Web Application</strong> built with React, showcasing real-world functionality such as form validation, responsive layouts, dynamic routing, conditional rendering, and interactive UI elements.
          </p>

          <p>
            I’m currently expanding my expertise into backend development with Node.js and MongoDB to become a complete MERN stack developer. I take pride in writing clean, maintainable code and love working in collaborative environments where continuous learning is encouraged.
          </p>

          <p>
            I would be honored to bring my enthusiasm and skills to your team and grow alongside seasoned professionals. I am confident that my passion, adaptability, and attention to detail will allow me to make a positive contribution.
          </p>

          <p>
            Thank you for taking the time to review my application. I look forward to the opportunity to further discuss how I can contribute to your team.
          </p>

          <p>
            Sincerely, <br />
            <span className="font-semibold text-blue-700 dark:text-blue-400">Md. Belal Ho Sen</span>
          </p>
        </div>

        {/* Footer / Contact Icons */}
        <div className="mt-8 flex justify-center space-x-6">
          <a href="mailto:your.email@example.com" className="text-blue-600 dark:text-blue-400 hover:text-blue-800 text-2xl transition-all">
            <FaEnvelope />
          </a>
          <a href="https://www.linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:text-blue-800 text-2xl transition-all">
            <FaLinkedin />
          </a>
          <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:text-blue-800 text-2xl transition-all">
            <FaGithub />
          </a>
        </div>
      </motion.div>
    </div>
  );
};

export default CoverLetter;
