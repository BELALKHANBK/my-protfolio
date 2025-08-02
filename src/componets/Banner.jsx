// src/components/Banner.jsx
import React from "react";
import { Typewriter } from "react-simple-typewriter";
import img1 from '../assets/image/fiver.jpg';
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div
      className="min-h-screen flex items-center justify-center relative px-6 md:px-16"
      style={{
        backgroundImage: `url("/luminous-trails.svg")`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm z-10"></div>

      {/* Content Container */}
      <div className="relative z-20 flex flex-col md:flex-row items-center max-w-7xl w-full gap-10">

        {/* Left: Text */}
        <div className="w-full md:w-1/2 text-center md:text-left text-white space-y-6">
         {/*  <h1 className="text-3xl md:text-6xl font-bold">
            Hi, I'm{" "}
            <span className="text-red-600 text-5xl font-mono">
              Belal Khan
            </span>
          </h1> */}
          <h2 className="text-4xl md:text-3xl text-red-600 font-semibold">
            {/* টাইপিং এনিমেশন */}
            <Typewriter
              words={[
                "Hi, I'm Belal Khan"
               
              ]}
              loop={true}
              cursor
              cursorStyle="_"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={2000}
            />
          </h2>

          <h2 className="text-2xl md:text-3xl font-semibold">
            {/* টাইপিং এনিমেশন */}
            <Typewriter
              words={[
                "Frontend Developer",
                "MERN Stack Developer",
                "React Enthusiast",
                "UI/UX Lover",
          
              ]}
              loop={true}
              cursor
              cursorStyle="_"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={2000}
            />
          </h2>

          <p className="text-lg md:text-xl">
            I'm a Front-End focused MERN Stack Developer skilled in JavaScript, React, and Tailwind CSS. I also work with Express.js and MongoDB to build full-stack features when needed. I enjoy learning new tools and turning ideas into responsive, user-friendly web applications.
          </p>

       <div className="space-x-6">
         <Link to='cv'>
          <button className="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded text-white text-lg transition">
          Resume
          </button>
        </Link>
         <Link to='coverletter'>
          <button className="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded text-white text-lg transition">
          Cover Letter
          </button>
        </Link>
       </div>
        </div>

        {/* Right: Image */}
        <div className="w-full md:w-1/2 flex justify-center">
          <img
            src={img1}
            alt="Belal Khan"
            className="rounded-full border-4 border-blue-500 shadow-lg object-cover max-w-xs md:max-w-sm lg:max-w-md"
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
