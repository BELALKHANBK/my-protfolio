import React from 'react';
import AllPro from './AllPro';
import MEDCMS from './projectDemo/MEDCMS';
import MEDCMS1 from './projectDemo/MEDCMS1';

const Projects = () => {
  return (
   <div>
    <h1 className='text-4xl text-center underline'>MY Projects</h1>
     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 w-full max-w-7xl mx-auto px-4">
    
      <div className="w-full">
        <AllPro />
      </div>
      <div className="w-full">
        <MEDCMS />
      </div>
      <div className="w-full">
        <MEDCMS1 />
      </div>
    </div>
   </div>
  );
};

export default Projects;
