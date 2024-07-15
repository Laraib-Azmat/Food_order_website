import React, { useState } from "react";
import profileIcon from '../../assets/profileIcon.gif';
import styles from './Header.module.css'
import mealImg from '../../assets/HeaderPic.jpg'
import HeaderCart from "./HeaderCart";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Header = (props)=> {

    const [activeLink, setActiveLink] = useState("Home");

    return (

        <>

            <header className={styles.header} >
                <motion.h2
                  initial={{ opacity: 0, y: -40 }}
                  animate={{opacity:1,y:0}}
                  transition={
                    {type:'spring', delay:0.3, damping:10, stiffness:120}
                   }
                >OrdFoo.</motion.h2>

                <motion.ul
                 initial={{ opacity: 0, y: -40 }}
                 animate={{opacity:1,y:0}}
                 transition={
                   {type:'spring', delay:0.3, damping:10, stiffness:120}
                  }
                className={styles['nav-links']}>
                <Link onClick={()=>{window.scrollTo(0,0);setActiveLink("Home")}} to="/" style={{textDecorationLine:'none'}} > 
                <p>Home</p>
                {activeLink==="Home" && <hr/>} 
                </Link>
                <Link to='/getApp' onClick={()=>{setActiveLink("app");window.scrollTo(0,0)}} style={{textDecorationLine:'none'}} >
                 <p>Get App</p>
                 {activeLink==="app" && <hr/>} 
                  </Link>
                <Link onClick={()=>{setActiveLink("Contact");window.scrollTo(0,0)}} to="/contact" style={{textDecorationLine:'none'}} > 
                <p>Contact</p>
                {activeLink==="Contact" && <hr/>} 
                 </Link>
                </motion.ul>
              
              <div style={{display:'flex',alignItems:'center',justifyContent:'center',gap:10}}>
              <HeaderCart onShow={props.onShow} />
                <motion.button
                 initial={{ opacity: 0, y: -40 }}
                 animate={{opacity:1,y:0}}
                 transition={
                   {type:'spring', delay:0.3, damping:10, stiffness:120}
                  }
                onClick={()=>props.setLogin(true)} className={styles.profileIcon}>
                    <img src={profileIcon} />
                </motion.button>
              </div>
               
            </header>

            <div className={styles['main-img']} >
               <img src={mealImg}  alt="meal image" /> 
          </div>

        </>
      
    );
}

export default Header;