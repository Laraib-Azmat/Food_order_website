import React from 'react';
import footerStyle from "./Footer.module.css"
import { assets } from '../../assets/assets';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className={footerStyle.footer} id='footer'>
        <div className={footerStyle['footer-content']}>

            <div className={footerStyle['footer-left']}>
                <h2>OrdFoo.</h2>
                <p>Order food and groceries online with OrdFoo now and enjoy a great dining experience!</p>
                <div className={footerStyle['footer-social-icons']}>
                    <img src={assets.facebook_icon} alt='facebook' />
                    <img src={assets.twitter_icon} alt='twitter' />
                    <img src={assets.linkedin_icon} alt='linkedin' />
                </div>
            </div>

            <div className={footerStyle['footer-center']}>
                <h2>Company</h2>
                <ul>
                <Link onClick={()=>window.scrollTo(0,0)} to='/' style={{textDecoration:'none',color:'#fff'}}>  <li>Home</li> </Link>
                    <li>About Us</li>
                    <Link onClick={()=>window.scrollTo(0,0)} to='/contact' style={{textDecoration:'none',color:'#fff'}}><li >Contact Us</li></Link>
                    <li>Privacy Policy</li>
                </ul>

            </div>

            <div className={footerStyle['footer-right']}>

                <h2>Get In Touch</h2>
                <ul>
                    <li>+021 000000</li>
                    <li>azmatlaraib2003@gmail.com</li>
                </ul>
            </div>


        </div>

        <hr/>
        <p className={footerStyle['footer-copyright']}>
            Copyright 2024 @ OrdFoo.com - All Right Reserved.
        </p>
    </div>
  )
}

export default Footer