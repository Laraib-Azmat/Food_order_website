import styles from "./HeaderCart.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import Cart_Context from "../Context/CartContext";
import { useContext, useEffect, useState } from "react";
import { motion } from "framer-motion";

const HeaderCart = (props) => {
  const contxt = useContext(Cart_Context);
  const totalItem = contxt.items.length;

  //animating buttom

  const { items } = contxt;

  const [isHighlight, setHighlight] = useState(false);
  const btnClass = `${styles.cartBtn} ${isHighlight ? styles.bump: ""}`
  
  useEffect(() => {
    if (items.length === 0){
      return;
    }
    setHighlight(true);

    const timer = setTimeout(() => {
      setHighlight(false);
    }, 300);

    return () => {
      clearTimeout(timer);
    }
  }, [items])



  return (
    <motion.button
    initial={{ opacity: 0, y: -40 }}
    animate={{opacity:1,y:0}}
    transition={
      {type:'spring', delay:0.3, damping:10, stiffness:120}
     }
    className={btnClass} onClick={props.onShow}>
      <span>
        <FontAwesomeIcon
          className={styles.cartIcon}
          beat
          icon={faCartShopping}
        />
      </span>
      <span>Your Cart</span>
      <span className={styles.badge}>{totalItem}</span>
    </motion.button>
  );
};

export default HeaderCart;
