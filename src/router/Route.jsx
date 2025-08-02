import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../componets/Navbar';
import Footer from '../componets/Footer';

const Route = () => {
    return (
        <div>
         <Navbar/>

           <Outlet></Outlet> 
           <Footer/>
        </div>
    );
};

export default Route;