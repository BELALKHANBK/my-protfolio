import React from "react";
import { motion } from "framer-motion";
import devImg1 from "../assets/image/fi.jpg";
import devImg2 from "../assets/image/fiver.jpg";
//import devImg3 from "../assets/image/image.jpg";
import video from '../assets/image/13232-246463976_small.mp4'
import video1 from '..//assets/image/3129-166335878_small.mp4'

const About = () => {
  return (
    <div
      className="max-w-8xl min-h-screen mx-auto px-6 py-12 font-inter bg-cover bg-center bg-no-repeat"
   /*    style={{
        backgroundImage: `url(${devImg3})`,
      }} */
    >
          <h1 className="text-4xl font-bold mb-6 font-poppins text-white">About Me</h1>
      <div className="flex flex-col lg:flex-row items-center gap-10">
        
        {/* Left: Animated Images */}
 <div className="flex-1 flex max-w-full mx-auto h-screen justify-center items-center relative overflow-hidden">

  {/* ✅ Background Video */}
  <video
    className="absolute top-0 left-0 w-full h-full object-cover z-0"
    autoPlay
    loop
    muted
    playsInline
  >
    <source src={video1} type="video/mp4" />
    Your browser does not support the video tag.
  </video>

  {/* ✅ Animated Developers */}
  <div className="relative w-48 h-48 z-10">
    <motion.img
      src={devImg1}
      alt="Developer 1"
      className="absolute top-0 left-0 w-50 h-50 object-cover rounded-lg shadow-lg"
      initial={{ x: -100 }}
      animate={{ x: [-100, 100, -100] }}
      transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
    />
    <motion.img
      src={devImg2}
      alt="Developer 2"
      className="absolute top-[60px] right-0 w-50 h-50 object-cover rounded-lg shadow-lg"
      initial={{ y: 100 }}
      animate={{ y: [80, 50, 80] }}
      transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
    />
  </div>
</div>


        {/* Right: Text Area */}
     <motion.div
  className="relative flex-1 text-center h-screen lg:text-left transition-transform duration-300 hover:scale-105 hover:shadow-2xl mt-10 lg:mt-0 overflow-hidden rounded-xl"
  initial={{ opacity: 0, x: 100 }}
  animate={{ opacity: 1, x: 0 }}
  transition={{ duration: 1.2, delay: 0.5 }}
>
  {/* Background Video */}
  <video
    autoPlay
    muted
    loop
    playsInline
    className="absolute top-0 left-0 w-full h-full object-cover z-0"
  >
    <source src={video} type="video/mp4" />
    Your browser does not support the video tag.
  </video>

  {/* Overlay content */}
  <div className="relative z-10  bg-opacity-80 p-6 h-full overflow-y-auto">


    <p className="text-lg text-white leading-relaxed rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300">
      Hi, I’m <span className="font-bold text-blue-600">BELAL KHAN</span> — a passionate <span className="font-semibold">MERN stack developer</span> dedicated to building dynamic, responsive, and scalable web applications. <br /><br />
      I specialize in creating seamless user experiences using technologies like <span className="font-medium">React.js, Node.js, Express.js, MongoDB</span>, and integrating tools like <span className="font-medium">Firebase, Stripe, Tailwind CSS</span> to ensure secure and modern functionality. <br /><br />
      With a solid foundation in both frontend and backend development, I love transforming innovative ideas into beautiful and efficient digital products. I’m continuously learning and updating my skillset to stay current in this fast-evolving tech world. <br /><br />
      Beyond coding, I also focus on clean UI design, code optimization, performance, and real-world project building. I am currently open to remote job opportunities, internships, or collaboration on impactful web-based projects. <br /><br />
      Let’s build something amazing together!
    </p>
  </div>
</motion.div>

      </div>
    </div>
  );
};

export default About;
