import React from 'react'
import "./about.css"
import me from "../../img/IMG_20220611_2040201.jpg"
import resume from "./Deepak Full Stack Devoloper Resume.pdf"
const About = () => {
  return (
    <section className='aboutSection'>
      <div className='mainbox'>
        <div className='left'>
          <img src={me} alt="" />
          <p>Lakshmi Deepak</p>
          <a href={resume} download><button className='button' id='cvbtn'>Download CV</button></a>

        </div>
        <div className='right'><p>
                              A passionate jobseeker with hands on experience in developing and designing 
                      web applications using <strong>HTML, CSS, JavaScript, and React.</strong> Including 
                      developing and deploying complex backend systems, web services and 
                      databases.
                      <br /><br />
                      Aspiring for the position of Full Stack Developer where 
                      I can use my extensive knowledge of programming languages and frameworks to develop efficient web applications.
        </p></div>
      </div>
    </section>
  )
}

export default About