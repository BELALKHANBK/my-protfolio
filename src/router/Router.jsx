import { createBrowserRouter } from "react-router";
import Route from "./Route";
import About from "../pages/About";
import Home from "../pages/Home";
import Projects from "../pages/Projects";
import Skills from "../pages/Skills";
import Contact from "../pages/Contact";
import Resume from "../cv/Resume";
import CoverLetter from "../cv/CoverLetter";


export const router = createBrowserRouter([
 {
    path:'/',
   Component:Route,
   children:[
    {
   index:true,
   Component:Home
    },
    {
        path:'about',
        Component:About
    },
    {
        path:'project',
        Component:Projects
    },
    {
        path:'skills',
        Component:Skills
    },
    {
        path:'contact',
        Component:Contact
    },
    {
        path:'cv',
        Component:Resume
    },{
        path:'coverletter',
        Component:CoverLetter
    }

   ]
 }
 
]);
