import "./HeroImg.css";

import React from 'react';

import IntroImg from "./assets/intro-bg.jpg";
import {Link} from  "react-router-dom";

const HeroImg = () => {
  return (
    <div className="hero">
        <div className="mask">
            <img className="intro-img" src={IntroImg} alt="IntroImg" />

        </div>
        <div className="content">
            <p>Hi,i am a web Developer</p>
            <h1>React Developer</h1>
            <div className="mar">
                <Link to="/project" className="btn">Project</Link>
                <Link to="/contact" className="btn btn-light ">Contact</Link>
            </div>

        </div>
    </div>
  )
}

export default HeroImg;