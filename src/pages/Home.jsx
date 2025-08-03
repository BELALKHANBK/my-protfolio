import React from 'react';
import Banner from '../componets/Banner';
import About from './About';
import Contact from './Contact';
import Skills from './Skills';
import Projects from './Projects';
import WhatApps from './WhatApps';
import video from '../assets/image/13949-253035804_small.mp4'
const Home = () => {
  return (
    <div className="relative w-full h-full" id="home">
      {/* Background Video */}
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

      {/* Content Over Video */}
      <div className="relative z-10 bg-opacity-60">
        <Banner />

        <section id="about">
          <About />
        </section>

        <section id="skills">
          <Skills />
        </section>

        <section id="projects">
          <Projects />
        </section>

        <section id="contact">
          <Contact />
        </section>

        <WhatApps />
      </div>
    </div>
  );
};

export default Home;
