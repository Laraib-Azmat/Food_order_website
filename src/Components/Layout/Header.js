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
                <Link to="/" style={{textDecorationLine:'none'}} onClick={()=>setActiveLink("Home")}> 
                <p>Home</p>
                {activeLink==="Home" && <hr/>} 
                </Link>
                <Link to="/menu" style={{textDecorationLine:'none'}} onClick={()=>setActiveLink("Menu")}>
                 <p>Menu</p>
                 {activeLink==="Menu" && <hr/>} 
                  </Link>
                <Link to="/contact" style={{textDecorationLine:'none'}} onClick={()=>setActiveLink("Contact")}> 
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