import React from 'react'
import "./projects.css"
import ProjectCard from './ProjectCard'
import youtube from "../../img/youtubeThumbnail.png"
import dictionary from "../../img/dictionary.png"
import crud from "../../img/crud.png"
import todo from "../../img/todo.png"
import qtalk from "../../img/qtalkp.png"



const Projects = () => {
  return (
    <div className='projectpage'>
    <div className='title'>
      <p className='border'>My Projects</p>
    </div>
    {/* <img alt="html5-icon" src="	https://deepak-portfolio.netlify.app/icons/html5-color.svg"></img> */}
    <div className='maincardproj'>
      <a href="https://youtubeclonedeepak.netlify.app/" target="_blank">
        <ProjectCard title="Youtube Clone" thumbnail={youtube} text="Youtube Clone is a Web Application Created using React JS which includes Navbar,Sidebar and Recommendd page of Youtube"/>
      </a>
      {/* <a href="">
        <ProjectCard title="Dictionary" thumbnail={dictionary} text="Dictionary is a Simple Web Application created using JavaScript. It fetches the JSON data from Server and Prints on UI"/>
      </a> */}

      <a href="https://qtalk.netlify.app">
        <ProjectCard title="Qtalk" thumbnail={qtalk} text="Qtalk is a Chat Application which has a creative UI which you never Experienced Before. This Application is Created Using React and for Styling MUI is Used."/>
      </a>

       <a href="https://todoapp-00.netlify.app">
        <ProjectCard title="TodoApp" thumbnail={todo} text="Todo App is a Simple tool to organise everything by storing your Tasks Generated using Angular"/>
      </a>
      <a href='https://crudapp-00.netlify.app/'target="_blank">
        <ProjectCard title="CRUD" thumbnail={crud} text="Using this Application we can able to Create,Read,Update,Delete the employee data which fetches from backend by opening Port from JSON-server"/>
      </a>

    </div>

  </div>
  )
}

export default Projects