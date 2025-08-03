// src/pages/Projects.jsx
import React, { useEffect, useState } from "react";
import project1 from "../../assets/image/lost.png";
import {
  FaReact,
  FaNodeJs,
  FaGithub,
  FaExternalLinkAlt,
  FaHtml5,
  FaCss3Alt,
} from "react-icons/fa";
import {
  SiJavascript,
  SiTailwindcss,
  SiFirebase,
  SiMongodb,
  SiExpress,
  SiVercel,
} from "react-icons/si";
import { motion, useAnimation } from "framer-motion";

const AnimatedWrapper = ({ children, direction, delay }) => {
  const controls = useAnimation();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    function onScroll() {
      const top = window.pageYOffset + window.innerHeight;
      if (top > 100) {
        setVisible(true);
      }
    }
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (visible) {
      controls.start({
        opacity: 1,
        x: 0,
        y: 0,
        transition: { duration: 0.7, delay },
      });
    }
  }, [visible, controls, delay]);

  return (
    <motion.div
      initial={{
        opacity: 0,
        x: direction === "left" ? -100 : direction === "right" ? 100 : 0,
        y: direction === "top" ? -100 : direction === "bottom" ? 100 : 0,
      }}
      animate={controls}
    >
      {children}
    </motion.div>
  );
};

const MEDCMS = () => {
  const projectList = [
    {
      title: "WhereIsIt - Lost & Found App",
      image: project1,
      tech: [
        <FaHtml5 key="html" />,
        <FaCss3Alt key="css" />,
        <SiJavascript key="js" />,
        <FaReact key="react" />,
        <SiTailwindcss key="tailwind" />,
        <FaNodeJs key="node" />,
        <SiExpress key="express" />,
        <SiMongodb key="mongodb" />,
        <SiFirebase key="firebase" />,
        <FaGithub key="github" />,
        <SiVercel key="vercel" />,
      ],
      live: "https://lost-and-found-website-8c162.web.app",
      client: "https://github.com/BELALKHANBK/lost-and-found",
      server: "https://github.com/BELALKHANBK/lost-and-found-server-site",
    },
  ];

  return (
    <div className="py-10 px-4 max-w-7xl mx-auto space-y-20">
      {/* Top animation */}
      <AnimatedWrapper direction="top" delay={0}>
        <div className="flex flex-col gap-8 border-2 border-blue-500 rounded-2xl p-6 bg-gray-800 shadow-[0_0_30px_15px_rgba(59,130,246,0.7)]">
          {projectList.map((project, index) => (
            <div
              key={index}
              className="bg-gray-900 rounded-xl shadow-md p-6 flex flex-col md:flex-row gap-6 items-center w-full min-h-[300px] md:min-h-[250px]"
            >
              {/* Left: Image */}
              <img
                src={project.image}
                alt={project.title}
                className="rounded-lg w-full md:w-1/2 h-48 md:h-auto object-cover"
              />

              {/* Right: Text and Buttons */}
              <div className="flex flex-col flex-1 gap-10">
                <h2 className="text-2xl text-blue-500 font-semibold mb-4">
                  {project.title}
                </h2>

                {/* Tech Icons */}
                <div className="flex flex-wrap gap-3 text-2xl text-blue-500 mb-4">
                  {project.tech.map((icon, i) => (
                    <span key={i}>{icon}</span>
                  ))}
                </div>

                {/* Buttons */}
                <div className="flex flex-wrap gap-3 mt-auto">
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 flex items-center gap-2"
                  >
                    Live Demo <FaExternalLinkAlt />
                  </a>

                  <a
                    href={project.client}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-900 flex items-center gap-2"
                  >
                    Client <FaGithub />
                  </a>

                  <a
                    href={project.server}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-900 flex items-center gap-2"
                  >
                    Server <FaGithub />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </AnimatedWrapper>

      {/* Right animation */}
      <AnimatedWrapper direction="right" delay={0.3}>
        <div className="flex flex-col gap-8 border-2 border-blue-500 rounded-2xl p-6 bg-gray-800 shadow-[0_0_30px_15px_rgba(59,130,246,0.7)]">
          {projectList.map((project, index) => (
            <div
              key={index}
              className="bg-gray-900 rounded-xl shadow-md p-6 flex flex-col md:flex-row gap-6 items-center w-full min-h-[300px] md:min-h-[250px]"
            >
              {/* Left: Image */}
              <img
                src={project.image}
                alt={project.title}
                className="rounded-lg w-full md:w-1/2 h-48 md:h-auto object-cover"
              />

              {/* Right: Text and Buttons */}
              <div className="flex flex-col flex-1 gap-10">
                <h2 className="text-2xl text-blue-500 font-semibold mb-4">
                  {project.title}
                </h2>

                {/* Tech Icons */}
                <div className="flex flex-wrap gap-3 text-2xl text-blue-500 mb-4">
                  {project.tech.map((icon, i) => (
                    <span key={i}>{icon}</span>
                  ))}
                </div>

                {/* Buttons */}
                <div className="flex flex-wrap gap-3 mt-auto">
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 flex items-center gap-2"
                  >
                    Live Demo <FaExternalLinkAlt />
                  </a>

                  <a
                    href={project.client}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-900 flex items-center gap-2"
                  >
                    Client <FaGithub />
                  </a>

                  <a
                    href={project.server}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-900 flex items-center gap-2"
                  >
                    Server <FaGithub />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </AnimatedWrapper>

      {/* Bottom animation */}
      <AnimatedWrapper direction="bottom" delay={0.6}>
        <div className="flex flex-col gap-8 border-2 border-blue-500 rounded-2xl p-6 bg-gray-800 shadow-[0_0_30px_15px_rgba(59,130,246,0.7)]">
          {projectList.map((project, index) => (
            <div
              key={index}
              className="bg-gray-900 rounded-xl shadow-md p-6 flex flex-col md:flex-row gap-6 items-center w-full min-h-[300px] md:min-h-[250px]"
            >
              {/* Left: Image */}
              <img
                src={project.image}
                alt={project.title}
                className="rounded-lg w-full md:w-1/2 h-48 md:h-auto object-cover"
              />

              {/* Right: Text and Buttons */}
              <div className="flex flex-col flex-1 gap-10">
                <h2 className="text-2xl text-blue-500 font-semibold mb-4">
                  {project.title}
                </h2>

                {/* Tech Icons */}
                <div className="flex flex-wrap gap-3 text-2xl text-blue-500 mb-4">
                  {project.tech.map((icon, i) => (
                    <span key={i}>{icon}</span>
                  ))}
                </div>

                {/* Buttons */}
                <div className="flex flex-wrap gap-3 mt-auto">
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 flex items-center gap-2"
                  >
                    Live Demo <FaExternalLinkAlt />
                  </a>

                  <a
                    href={project.client}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-900 flex items-center gap-2"
                  >
                    Client <FaGithub />
                  </a>

                  <a
                    href={project.server}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-900 flex items-center gap-2"
                  >
                    Server <FaGithub />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </AnimatedWrapper>

      {/* Left animation */}
      <AnimatedWrapper direction="left" delay={0.9}>
       <div className="flex flex-col gap-8 border-2 border-blue-500 rounded-2xl p-6 bg-gray-800 shadow-[15px_15px_30px_-5px_rgba(59,130,246,0.5),-15px_15px_30px_-5px_rgba(59,130,246,0.5)]">
          {projectList.map((project, index) => (
            <div
              key={index}
              className="bg-gray-900 rounded-xl shadow-md p-6 flex flex-col md:flex-row gap-6 items-center w-full min-h-[300px] md:min-h-[250px]"
            >
              {/* Left: Image */}
              <img
                src={project.image}
                alt={project.title}
                className="rounded-lg w-full md:w-1/2 h-48 md:h-auto object-cover"
              />

              {/* Right: Text and Buttons */}
              <div className="flex flex-col flex-1 gap-10">
                <h2 className="text-2xl text-blue-500 font-semibold mb-4">
                  {project.title}
                </h2>

                {/* Tech Icons */}
                <div className="flex flex-wrap gap-3 text-2xl text-blue-500 mb-4">
                  {project.tech.map((icon, i) => (
                    <span key={i}>{icon}</span>
                  ))}
                </div>

                {/* Buttons */}
                <div className="flex flex-wrap gap-3 mt-auto">
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 flex items-center gap-2"
                  >
                    Live Demo <FaExternalLinkAlt />
                  </a>

                  <a
                    href={project.client}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-900 flex items-center gap-2"
                  >
                    Client <FaGithub />
                  </a>

                  <a
                    href={project.server}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-900 flex items-center gap-2"
                  >
                    Server <FaGithub />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </AnimatedWrapper>
    </div>
  );
};

export default MEDCMS;
