import mealStyles from "./MealsItem.module.css";
import { useContext, useEffect, useState } from "react";
import { assets } from "../../assets/assets";
import CartContext from "../Context/CartContext";

const MealsItem = ({id,name,image,price,description}) => {

  const {items,addItem, removeItem} = useContext(CartContext);
  const [itemAmount, setAmount] = useState(0)



  useEffect(()=>{
    if(items.length>0){
    items.map((i)=>{
      if(i.id===id){
         setAmount(i.amount)
        }else{
          setAmount(0)
        }
      })}
      else{
        setAmount(0)
      }
  },[items])



  const addToCart=()=>{
    addItem({
      id:id,
      name:name,
      price:price,
      image:image,
      amount:1
    })
  }

  return (

    <div className={mealStyles.mealItem}>

      <div className={mealStyles['mealItem-imgConatainer']}>
          <img className={mealStyles['mealItem-img']} src={image} alt="meal-image" />
          {!itemAmount>0 ?
        <img src={assets.add_icon_white} className={mealStyles.add} onClick={addToCart} alt="Add" /> :
        <div className={mealStyles['foodItem-counter']}>
          <img onClick={()=>removeItem(id)} src={assets.remove_icon_red} alt="remove" />
          <p>{itemAmount}</p>
          <img onClick={addToCart} src={assets.add_icon_green} alt="add" />
        </div>  
        }
      </div>

      <div className={mealStyles['mealItem-info']}>

        <div className={mealStyles['mealItem-name']}>
          <p>{name}</p>
          <img  src={assets.rating_starts} alt="ratings" />
        </div>

      
        <p className={mealStyles['mealItem-desc']}>{description}</p>
        <p className={mealStyles['mealItem-price']}>${price}</p>

      </div>

    </div>
  );
};
export default MealsItem;
