import "./Navebar.css"

import {useState} from "react";
import React from 'react';
import { Link } from "react-router-dom";
import {FaBars, FaTimes} from "react-icons/fa";

const Navebar = () => {

  const [click,setClick]= useState(false);
  const handleClick=()=>setClick(!click);

  const [color,setColor]=useState(false);
  const changeColor=()=>{
    if(window.scroll>=100){
      setColor(true);
    }else{
      setColor(false);
    }
  };
   
  window.addEventListener("scroll",changeColor);


  return (
    <div className={color ? "header header-bg":"header"}>
       <Link to="/">
        <h1>PORTFOLIO</h1>
       </Link>
       <ul className={click ?("nav-manu active"):("nav-manu")}>
        <li>
            <Link to="/">Home</Link>
        </li>
        <li>
            <Link to="About">About</Link>
        </li>
        <li>
            <Link to="Project">Project</Link>
        </li>
        <li>
            <Link to="Contact">Contact</Link>
        </li>
       </ul>
       <div className="hamburger" onClick={handleClick}>
       {click ? ( <FaTimes size={20} style={{color:"#fff"}} />):(<FaBars size={20} style={{color:"#fff"}} />)}
        
       
       </div>
    </div>
  )
}

export default Navebar