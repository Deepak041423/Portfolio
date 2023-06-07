import "./intro.css"
import FloatingDiv from "../FloatingDiv/FloatingDiv"
import React, { useState } from "react"
// import Instagram from "./instagram.png"
// import Whatsapp from "./whatsapp.png"
// import Mail from "./mail.png"
import Vector1 from "./Vector1.png"
import Vector2 from "./Vector2.png"
import Deepakanmi from "./photo_2023-02-16_23-32-55-removebg-preview.png"
import Deepakorg from "./Deepakorg.jpg"
import Crown from "../../img/crown.png"
import thumbup from "../../img/thumbup.png"
import glassesimoji from "../../img/glassesimoji.png"
import { Link, useNavigate } from "react-router-dom"

const Intro=()=>{

    let [chan,setChan]=useState(Deepakanmi)
    
    // let change=()=>{
    //     setChan(Deepakorg)
       
    // }
    let imgChange=()=>{
        // console.log("HIII")
        setChan(Deepakorg)}
        console.log(Deepakorg)
    
    let navigator=useNavigate()

    let formHandle=()=>{
        navigator("/all")
    }

    return(
        <div className="intro">z
            <div className="i-left">
                <div className="i-name">
                    <span>Hi! I'm</span>
                    <span>Lakshmi Deepak</span>
                    {/* <span>Full-Stack Devoloper</span> */}
                </div>

                <Link className="button" onClick={formHandle} id="i-button" to="/all">About me</Link>
                {/* <button className="button i-button" id="i-button" onMouseEnter={imgChange} onMouseLeave={()=>{setChan(Deepakanmi)}}>About Me</button> */}

                {/* <div className="i-icons">
                    <a href="https://mail.google.com/mail/u/0/#inbox"><img src={Mail} alt="/" /></a>
                    <a href="https://www.instagram.com/"><img src={Instagram} alt="/" /></a>
                    <a href="https://web.whatsapp.com/"><img src={Whatsapp} alt="/" /></a>
                    
                   
                </div> */}
            </div>


            <div className="i-right">
                <img src={Vector1} alt="" />
                <img src={Vector2} alt="" />
                <img src={chan} onMouseOver={imgChange} alt="" />
                <img src={glassesimoji} alt="" />
                <div>
                    <FloatingDiv image={Crown} txt1="Web" txt2="Devoloper"></FloatingDiv>
                </div>

                <div style={{top:"16rem", left:"-21rem"}}>
                    <FloatingDiv image={thumbup} txt1="Self" txt2="Port-Folio"></FloatingDiv>
                </div>


                <div className="blur" id="aqua" ></div>
                <div className="blur" id="pink"></div>


            </div>
        </div>
    )
}
export default Intro