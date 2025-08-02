// src/pages/Projects.jsx
import React from "react";
import project1 from "../../assets/image/lost.png"; 
import {
  FaReact,
  FaNodeJs,
  FaGithub,
  FaExternalLinkAlt,
  FaDatabase,
  FaHtml5,
  FaCss3Alt,
  FaGitAlt,
} from "react-icons/fa";
import {
  SiJavascript,
  SiTailwindcss,
  SiFirebase,
  SiMongodb,
  SiExpress,
  SiVercel,

} from "react-icons/si";


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
      server:
        "https://github.com/BELALKHANBK/lost-and-found-server-site",
    },
  ];

  return (
    <div className="   py-10 px-4">

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projectList.map((project, index) => (
        <div
          key={index}
           className="bg-white rounded-xl shadow-md p-4 
             w-full min-h-[500px] md:min-h-[600px] md:w-[400px] lg:w-[400px] lg:min-h-[500px] 
             flex flex-col justify-between"
>

            <img 
              src={project.image}
              alt={project.title}
              className="rounded-lg w-full h-68 object-cover"
            />

            <h2 className="text-xl font-semibold mt-4">{project.title}</h2>

            {/* Tech Icons */}
            <div className="flex flex-wrap gap-3 mt-2 text-2xl text-blue-500">
              {project.tech.map((icon, i) => (
                <span key={i}>{icon}</span>
              ))}
            </div>

            {/* Buttons */}
            <div className="mt-6 flex flex-wrap gap-3">
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
        ))}
      </div>
    </div>
  );
};

export default MEDCMS;
