import React from "react";
import '../index.css';
import video from '../assets/image/13949-253035804_small.mp4'
import {
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
} from "react-icons/fa";
import {
  SiJavascript,
  SiTailwindcss,
  SiFirebase,
  SiMongodb,
  SiExpress,
  SiVercel,
  SiNetlify,
} from "react-icons/si";
import { motion } from "framer-motion";

// 🧠 Skills Data
const skills = [
  {
    name: "HTML",
    icon: <FaHtml5 className="text-orange-600 text-5xl" />,
    desc: "Web page এর structure তৈরির ভাষা।",
  },
  {
    name: "CSS",
    icon: <FaCss3Alt className="text-blue-600 text-5xl" />,
    desc: "Design ও layout এর জন্য responsible।",
  },
  {
    name: "JavaScript",
    icon: <SiJavascript className="text-yellow-500 text-5xl" />,
    desc: "Website কে dynamic ও interactive করে।",
  },
  {
    name: "React",
    icon: <FaReact className="text-blue-400 text-5xl" />,
    desc: "Component-based fast UI framework।",
  },
  {
    name: "Node.js",
    icon: <FaNodeJs className="text-green-600 text-5xl" />,
    desc: "Backend development এর জন্য runtime।",
  },
  {
    name: "Tailwind",
    icon: <SiTailwindcss className="text-sky-400 text-5xl" />,
    desc: "Utility-first CSS framework।",
  },
  {
    name: "Firebase",
    icon: <SiFirebase className="text-yellow-400 text-5xl" />,
    desc: "Authentication ও hosting এর জন্য জনপ্রিয়।",
  },
  {
    name: "MongoDB",
    icon: <SiMongodb className="text-green-500 text-5xl" />,
    desc: "NoSQL database — flexible ও scalable।",
  },
  {
    name: "Git",
    icon: <FaGitAlt className="text-red-500 text-5xl" />,
    desc: "Version control system — কোড ট্র্যাক করে।",
  },
  {
    name: "GitHub",
    icon: <FaGithub className="text-gray-800 dark:text-white text-5xl" />,
    desc: "Code hosting platform with collaboration।",
  },
  {
    name: "Express.js",
    icon: <SiExpress className="text-black dark:text-white text-5xl" />,
    desc: "Node.js এর জন্য lightweight backend framework।",
  },
  {
    name: "Vercel",
    icon: <SiVercel className="text-black dark:text-white text-5xl" />,
    desc: "Frontend apps deploy করার সহজ platform।",
  },
  {
    name: "Netlify",
    icon: <SiNetlify className="text-blue-500 text-5xl" />,
    desc: "Static site deploy ও CI/CD support দেয়।",
  },
];

// 🌀 Scrolling animation config
const scrollVariants = (direction = "left", delay = 0) => ({
  animate: {
    x: direction === "left" ? ["100%", "-100%"] : ["-100%", "100%"],
    transition: {
      duration: 30,
      repeat: Infinity,
      repeatType: "loop",
      ease: "linear",
      delay,
    },
  },
});

const Skills = () => {
  const evenSkills = skills.filter((_, i) => i % 2 === 0);
  const oddSkills = skills.filter((_, i) => i % 2 !== 0);

  return (
    <div className="relative w-full min-h-screen overflow-hidden">

      {/* 🔵 Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
      >
        <source src={video} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* 🔴 Overlay Layer */}
      <div className="absolute top-0 left-0 w-full h-full bg-black/70 z-10" />

      {/* 🌟 Foreground Content */}
      <div className="relative z-20 max-w-8xl mx-auto px-4 py-12 mt-10 space-y-12 overflow-hidden">

        {/* Heading */}
        <div className="max-w-4xl mx-auto px-4 py-8 text-center">
          <h1 className="text-4xl font-bold text-blue-700 underline decoration-red-500 underline-offset-8 mb-4 text-shadow">
            Skills
          </h1>
          <p className="text-lg text-gray-300">
            A blend of modern web technologies and development skills that I master to build high-quality applications.
          </p>
        </div>

        {/* Even Skills Scroll Row */}
        <motion.div
          className="flex gap-8 justify-center flex-nowrap w-max"
          variants={scrollVariants("right", 0)}
          animate="animate"
        >
          {[...evenSkills, ...evenSkills].map((skill, i) => (
            <div
              key={i}
              className="flex flex-col items-center gap-1 p-4 bg-white/90 dark:bg-gray-800 shadow rounded hover:scale-105 duration-300 min-w-[120px] text-center"
            >
              {skill.icon}
              <span className="font-semibold text-gray-800 dark:text-white">{skill.name}</span>
              <p className="text-xs text-gray-600 dark:text-gray-300">{skill.desc}</p>
            </div>
          ))}
        </motion.div>

        {/* Odd Skills Scroll Row */}
        <motion.div
          className="flex gap-8 justify-center flex-nowrap w-max"
          variants={scrollVariants("left", 5)}
          animate="animate"
        >
          {[...oddSkills, ...oddSkills].map((skill, i) => (
            <div
              key={i}
              className="flex flex-col items-center gap-1 p-4 bg-white/90 dark:bg-gray-800 shadow rounded hover:scale-105 duration-300 min-w-[120px] text-center"
            >
              {skill.icon}
              <span className="font-semibold text-gray-800 dark:text-white">{skill.name}</span>
              <p className="text-xs text-gray-600 dark:text-gray-300">{skill.desc}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Skills;
