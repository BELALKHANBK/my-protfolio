import React from "react";
import { motion } from "framer-motion";
import devImg1 from "../assets/image/fi.jpg";
import devImg2 from "../assets/image/fiver.jpg";
import devImg3 from "../assets/image/image.jpg";

const About = () => {
  return (
    <div
className="max-w-8xl h-screen mx-auto px-6 py-12 font-inter bg-cover bg-center bg-no-repeat"
  style={{
    backgroundImage: `url(${devImg3})`,
  }}
>
      <div className="flex flex-col lg:flex-row items-center gap-10">
        
        {/* Left: Animated Images */}
        <div className="flex-1 flex justify-center items-center relative min-h-[300px]">
          <div className="relative w-48 h-48">
            <motion.img
              src={devImg1}
              alt="Developer 1"
              className="absolute top-0 left-0 w-50 h-50 object-cover rounded-lg shadow-lg"
              initial={{ x: -100 }}
              animate={{ x: [-100, 100, -100] }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "linear",
              }}
            />
            <motion.img
              src={devImg2}
              alt="Developer 2"
              className="absolute bottom-0 top-[60px] right-0 w-50 h-50 object-cover rounded-lg shadow-lg"
              initial={{ y: 100 }}
              animate={{ y: [80, 50, 80] }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "linear",
              }}
            />
          </div>
        </div>

        {/* Right: Text Area */}
        <motion.div
          className="flex-1 text-center lg:text-left  transition-transform duration-300 hover:scale-105 hover:shadow-2xl mt-20"
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2, delay: 0.5 }}
        >
          <h1 className="text-4xl font-bold mb-6 font-poppins">About Me</h1>
         <p
  className="
    text-lg leading-relaxed h-66 bg-amber-50 p-4 rounded-xl
    shadow-md            /* সাধারণ শ্যাডো */
    hover:shadow-xl    
    transition-shadow    
    duration-300         
  "
>
  Hi, I’m <span className="font-bold">BELAL KHAN</span>, a passionate MERN stack developer experienced in building dynamic, responsive, and user-friendly web applications. I specialize in crafting seamless interfaces and robust backends, turning ideas into beautiful digital experiences. Continuously exploring new technologies, I enhance my skills in React, Node.js, MongoDB, and more.
</p>

        </motion.div>
      </div>
    </div>
  );
};

export default About;
