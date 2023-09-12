import React, { Fragment } from "react";

import styles from './Header.module.css'
import mealImg from '../../assets/HeaderPic.jpg'
import HeaderCart from "./HeaderCart";

const Header = (props)=> {
    return (

        <Fragment>

            <header className={styles.header} >
                <h2>OrderFoo</h2>
               <HeaderCart onShow={props.onShow} />
            </header>

            <div className={styles['main-img']} >
               <img src={mealImg}  alt="meal image" /> 
          </div>

        </Fragment>
      
    );
}

export default Header;