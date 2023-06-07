import React from 'react'
import "./git.css"
import * as FaIcons from "react-icons/fa"
import * as SiIcons from "react-icons/si"
import * as GoIcons from "react-icons/go"
import * as FiIcons from "react-icons/fi"



const GIT = () => {
  return (
    <div className='gitdiv'>
        <div className='subdiv'>
            <p> Get In Touch</p>
            <span>Always looking for new opportunities & challenges. If you have any, don't hesitate, feel free to drop a mail. I will try my best to respond as soon as possible.</span>
            <div className="address">
                <p>Banglore,Karnataka,India<GoIcons.GoLocation/></p>
                <p>+91 863-998-2114<FiIcons.FiPhoneCall/></p>
                <p>lakshmideepak6@gmail.com<FiIcons.FiMail/></p>
                <span><a href="https://wa.me/918639982114" target="_blank"><FaIcons.FaWhatsapp/></a></span>
                <span><a href="https://profile.indeed.com/?hl=en_IN&co=IN&from=gnav-homepage&_ga=2.207894226.1151702038.1678306620-1427052671.1677169561" target="_blank"><SiIcons.SiIndeed/></a></span>
                <span><a href="https://www.linkedin.com/in/lakshmi-deepak-08a9b625b/" target="_blank"><FaIcons.FaLinkedin/></a></span>
                <span><a href="https://twitter.com/itsme_deepak14/" target="_blank"><FaIcons.FaTwitter/></a></span>
                <span><a href="https://www.facebook.com/campaign/landing.php?campaign_id=14884913640&extra_1=s%7Cc%7C589460569849%7Cb%7Cfacebook%20%27%7C&placement=&creative=589460569849&keyword=facebook%20%27&partner_id=googlesem&extra_2=campaignid%3D14884913640%26adgroupid%3D128696220912%26matchtype%3Db%26network%3Dg%26source%3Dnotmobile%26search_or_content%3Ds%26device%3Dc%26devicemodel%3D%26adposition%3D%26target%3D%26targetid%3Dkwd-327195741349%26loc_physical_ms%3D9062010%26loc_interest_ms%3D%26feeditemid%3D%26param1%3D%26param2%3D&gclid=Cj0KCQiAgaGgBhC8ARIsAAAyLfG4swhoF4usTzxHsXjrgifWH3S2DBBJg7CqY_VCxvmEmI5HLNqC6TMaAneHEALw_wcB" target="_blank"><FaIcons.FaFacebook/></a></span>
                <span><a href="https://www.instagram.com/" target="_blank"><FaIcons.FaInstagram/></a></span>
                
            </div>
        </div>
    </div>
  )
}

export default GIT