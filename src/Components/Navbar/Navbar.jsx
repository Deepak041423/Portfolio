import React from "react"
import './navbar.css'
import Toggle from "../Toggle/Toggle"
import { Link, useNavigate } from "react-router-dom"
const Navbar=()=>{

    let navigator=useNavigate()
    let formHandle=()=>{
        navigator("/about")
    }

    let dark=()=>{
        document.body.style.background="black"
        document.body.style.color="white"
    }
    let light=()=>{
        document.body.style.background="white"
        document.body.style.color="black"
    }

    return(
        <div className="n-wrapper">
            <div className="n-left">
                <div className="n-name">Deepak</div>
                <span><input type="radio" name="a" onClick={dark}/>Dark Theme
                <br />
                <input type="radio" name="a" onClick={light}/>Light Theme
                </span>
                <Toggle></Toggle>
            </div>
            <h1>Hello</h1>

            <div className="n-right">
                <div className="n-list">
                    <ul>
                        <a href="/skills"><li>Home</li></a>
                        <Link to="/about"><li>About Me</li></Link>
                        <Link to="/skills"><li>Skills</li></Link>
                        <Link to="/projects"><li>Projects</li></Link>                    
                    </ul>
                </div>
                <button className="button" onClick={formHandle} id="n-button">Get In Touch</button>
            </div>

        </div>
    )
}
export default Navbar