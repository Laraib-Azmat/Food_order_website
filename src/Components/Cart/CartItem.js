import React, { useContext } from "react";
import Model from "./Model";
import styles from "./Cartitem.module.css";
import CartList from "./CartList";
import Cart_Context from "../Context/CartContext";

const CartItem = (props) => {
  const crtctx = useContext(Cart_Context);

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
        <button onClick={props.onClose} className={styles["button--alt"]}>
          Close
        </button>
        {hasItem && <button className={styles.button}>Order</button>}
      </div>
    </Model>
  );
};

export default CartItem;
