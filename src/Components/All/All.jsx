import React from 'react'
import About from '../AboutMe/About';
import Skills from '../Skills/Skills';
import Projects from '../Projects/Projects';
import GIT from '../Get In Touch/GIT';
import { Link } from 'react-router-dom';

const All = () => {
  return (
    
           
    <div>
    <About></About>
    <Skills></Skills>
    <Projects></Projects>
    <GIT></GIT>
    </div>
 
  )

  
}

export default All