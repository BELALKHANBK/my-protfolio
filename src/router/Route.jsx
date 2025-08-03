import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../componets/Navbar';
import Footer from '../componets/Footer';
import CursorCrircle from '../cv/CursorCricle';
import video from '../assets/image/13949-253035804_small.mp4'
const Route = () => {
    return (
        <div>
            
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
        <div>
                
            <CursorCrircle/>
         <Navbar/>

           <Outlet></Outlet> 
           <Footer/>
        </div>
        </div>
    );
};

export default Route;