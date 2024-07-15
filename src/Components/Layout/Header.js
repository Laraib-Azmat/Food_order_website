import React, { useState } from "react";
import profileIcon from '../../assets/profileIcon.gif';
import styles from './Header.module.css'
import mealImg from '../../assets/HeaderPic.jpg'
import HeaderCart from "./HeaderCart";
import { Link } from "react-router-dom";

const Header = (props)=> {

    const [activeLink, setActiveLink] = useState("Home");

    return (

        <>

            <header className={styles.header} >
                <h2>OrdFoo.</h2>

                <ul className={styles['nav-links']}>
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
                </ul>
              
              <div style={{display:'flex',alignItems:'center',justifyContent:'center',gap:10}}>
              <HeaderCart onShow={props.onShow} />
                <button onClick={()=>props.setLogin(true)} className={styles.profileIcon}>
                    <img src={profileIcon} />
                </button>
              </div>
               
            </header>

            <div className={styles['main-img']} >
               <img src={mealImg}  alt="meal image" /> 
          </div>

        </>
      
    );
}

export default Header;