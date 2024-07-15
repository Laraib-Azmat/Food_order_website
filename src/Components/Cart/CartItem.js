import React, { useContext } from "react";
import Model from "./Model";
import styles from "./Cartitem.module.css";
import CartList from "./CartList";
import Cart_Context from "../Context/CartContext";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const CartItem = (props) => {
  const crtctx = useContext(Cart_Context);
  const navigate = useNavigate();

  const totalAmount = `$${crtctx.totalAmount.toFixed(2)}`;

  const addItems = item => {
    crtctx.addItem({...item, amount : 1})
  }

  const removeItem = id => {
    crtctx.removeItem(id);
  }
  const hasItem = crtctx.items.length > 0;

  const cartitems = (
    <ul className={styles["cart-items"]}>
      {crtctx.items.map((item) => (
        <CartList
          key={item.id}
          name={item.name}
          price={item.price}
          amount={item.amount}
          image={item.image}
          onAdd={addItems.bind(null, item)}
          onRemove = {removeItem.bind(null ,item.id)}
        />
      ))}
    </ul>
  );

  return (
    <Model onClose={props.onClose}>
      {cartitems}
      <div className={styles.total}>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      <div className={styles.actions}>
        <motion.button 
        initial={{ opacity: 0, y: 40 }}
        whileInView={{opacity:1,y:0}}
        transition={
          {type:'spring', delay:0.1, damping:10, stiffness:120}
         }
        onClick={props.onClose} className={styles["button--alt"]}>
          Close
        </motion.button>
        {hasItem && <motion.button
        initial={{ opacity: 0, y: 40 }}
        whileInView={{opacity:1,y:0}}
        transition={
          {type:'spring', delay:0.3, damping:10, stiffness:120}
         }
        onClick={()=>{window.scrollTo(0,0);navigate('/order');props.onClose()}} className={styles.button}>Order</motion.button>}
      </div>
    </Model>
  );
};

export default CartItem;
