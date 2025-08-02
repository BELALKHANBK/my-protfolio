import React from 'react';
import Banner from '../componets/Banner';
import About from './About';
import Contact from './Contact';
import Skills from './Skills';
import Projects from './Projects';
import WhatApps from './WhatApps';


const Home = () => {
  return (
    <div id="home">
      <Banner />

      <section id="about">
        <About />
      </section>

      <section id="skills">
        <Skills/>
      </section>

       <section id="projects">
      <Projects/>
      </section>

      <section id="contact">
       <Contact/>
      </section>  
    
      <WhatApps/>
    </div>
  );
};

export default Home;
