import { FaGithub, FaHome, FaLinkedin, FaMailBulk, FaPhone, FaTwitter } from "react-icons/fa";
import "./FooterStyles.css";

import React from 'react'

const Footer = () => {
  return (
    <div className="footer">
        <div className="footer-container">
            <div className="left">
                <div className="location">
                    <FaHome size={20} style={{color:"#fff",marginRight:"2rem"}}/>
                    <div>
                        <p>Kalindipuram Prayagraj.</p>
                        <p>UttarPradesh INDIA</p>
                    </div> 
                </div>
                <div className="phone">
                    <h4><FaPhone size={20} style={{color:"#fff",marginRight:"2rem"}}/>
                    91-9695036889</h4>
                </div>
                <div className="email">
                    <h4><FaMailBulk size={20} style={{color:"#fff",marginRight:"2rem"}}/>
                    gauravdubey4755@gmail.com</h4>
                </div>
            </div>
            <div className="right">
                <h4>About Me</h4>
                <p>This is Gaurav Dubey. A Software Developer and Tech enthusiast. I enjoy disccussing new projects and design challenges.</p>
                <div className="social">
                <FaGithub size={20} style={{color:"#fff",marginRight:"2rem"}}/>
                <FaTwitter size={20} style={{color:"#fff",marginRight:"2rem"}}/>
                <FaLinkedin size={20} style={{color:"#fff",marginRight:"2rem"}}/>
                </div>
            </div>
        </div>
      
    </div>
  )
}

export default Footer
