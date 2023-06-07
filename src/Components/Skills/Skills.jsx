import React from 'react'
import "./skills.css"
import SkillCard from './SkillCard'
import html from "../../img/html5-color.svg"
import css from "../../img/css3-color.svg"
import js from "../../img/js_dark-color.svg"
import bootstrap from "../../img/bootstrap-color.svg"
import reactjs from "../../img/reactjs-color.svg"
import java from "../../img/java.svg"
import sql from "../../img/MySQL-Logo.wine.svg"
import typescript from "../../img/typescriptlang-icon.svg"
import angular from "../../img/angular-icon.svg"
import node from "../../img/nodejs-horizontal.svg"






const Skills = () => {
  return (
    <div className="aboutpage">
      <div className='skillpage'>
          <div className='title'>
            <p className='border'>My Skills</p>
            <p className='skillsp'>Check My Skills</p>
          </div>
          {/* <img alt="html5-icon" src="	https://deepak-portfolio.netlify.app/icons/html5-color.svg"></img> */}
          <div className='maincard'>
            <SkillCard  title="HTML" thumbnail={html}/>
            <SkillCard title="CSS" thumbnail={css}/>
            <SkillCard title="JavaScript" thumbnail={js}/>
            <SkillCard title="React JS" thumbnail={reactjs}/>
            <SkillCard title="Bootstrap" thumbnail={bootstrap}/>
            <SkillCard title="Advanced Java" thumbnail={java}/>
            <SkillCard title="SQL" thumbnail={sql}/>
            {/* <SkillCard title="Type Script" thumbnail={typescript}/>
            <SkillCard title="node JS" thumbnail={node}/> */}
            <SkillCard title="Angular" thumbnail={angular}/>

          </div>
      </div>
    </div>
  )
}

export default Skills