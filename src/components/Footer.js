import "./Footer.css";

import React from 'react';

import {FaHome,FaPhone,FaMailBulk, FaTwitter, FaLinkedin, FaInstagram} from "react-icons/fa";



const Footer = () =>{
    return(
        <div className="footer">
            <div className="footer-container">
                <div className="left">
                    <div className="location">
                       <div className="home">
                       <FaHome size={20} style={{color:
                        "#fff", marginRight:"2rem"}} />
                       <p>A19 Bahar Manjil</p>
                        <p>Koh-e-fiza</p>
                        <p>Bhopal</p>
                        <p>462001</p>
                   
                        </div> 
                     </div>
        
                    <div className="phone">
                        <FaPhone size={20} style={{color:
                        "#fff", marginRight:"2rem"}} />
                       <p> 8757475133</p>
                    </div>
                    <div className="mail">
                        <FaMailBulk size={20} style={{color:
                        "#fff", marginRight:"2rem"}} />
                        <p>webdeveloperasif7778@gmail.com</p>
                    </div>
                </div>


                <div className="right">
                    <h4>ABOUT ME</h4>
                    <p>Hasrat Jahangir</p>
                    <p>My Name is Asif jahangir </p>
                    <p>my social media account are bellow,you can contact me </p>
                    <p>THANK YOU</p>
                    
                    <div className="social">
                        <FaInstagram size={20} style={{color:
                        "#fff", marginRight:"2rem"}} />
                        
                        <FaTwitter size={20} style={{color:
                        "#fff", marginRight:"2rem"}} />
                        
                        <FaLinkedin size={20} style={{color:
                        "#fff", marginRight:"2rem"}} />
                        
                    </div>

                </div>

            </div>
        </div>
    )
}

export default Footer;

