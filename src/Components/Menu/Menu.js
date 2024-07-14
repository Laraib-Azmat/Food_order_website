import React from 'react';
import menuSyles from './Menu.module.css' ;
import {menu_list} from '../../assets/assets'


export const Menu = ({category, setCategory}) => {
  return (
    
      <div className={menuSyles.exploreMenu} id='exploreMenu'>
      <h1>Explore Our Menu</h1>
      <p>
      "Savor Every Bite" Explore Our Exquisite Menu! Explore the Flavors Today!
      </p>

      <div className={menuSyles['exploreMenu-list']}>

      {menu_list.map((item,i)=>{
        return <div key={i} onClick={()=>setCategory(prev=>prev===item.menu_name?"All":item.menu_name)} className={menuSyles['exploreMenu-listItem']}>

            <img className={category===item.menu_name?menuSyles.active:""} src={item.menu_image} alt='menu image' />
            <p>{item.menu_name}</p>
          </div>
      })}
      </div>
      <hr/>
    </div>
 
  )
}
