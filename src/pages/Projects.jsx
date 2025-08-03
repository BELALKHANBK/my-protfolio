import React from 'react';
import MEDCMS from './projectDemo/MEDCMS';
//import video from '../assets/image/152522-803189119_small.mp4'

const Projects = () => {
  return (
    <div className="relative w-full min-h-screen overflow-hidden">
  

      {/* 🔵 Overlay (optional: dark layer over video for better contrast) */}
      <div className="absolute top-0 left-0 w-full h-full  z-10"></div>

      {/* 🔵 Foreground Content */}
      <div className="relative z-20 py-20">
        <h1 className="text-4xl text-center underline text-white mb-12">MY Projects</h1>
        <div className="grid gap-10 w-full max-w-7xl mx-auto px-4 space-y-12">
          <div className="w-full">
            <MEDCMS />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
