import styles from "./MealsItem.module.css";
import MealForm from "./MealForm";
import Cart_Context from "../Context/CartContext";
import { useContext } from "react";

const MealsItem = (props) => {
  const crtctx = useContext(Cart_Context);

  const addInput = (amount) => {
    crtctx.addItem({
      id: props.id,
      name: props.name,
      price: props.price,
      amount: amount,
    });
  };

  return (
    <li className={styles.meal}>
      <div>
        <h3>{props.name}</h3>
        <div className={styles.description}>{props.description}</div>
        <div className={styles.price}>${props.price}</div>
      </div>
      <div>
        <MealForm id={props.id} onAdd={addInput} />
      </div>
    </li>
  );
};
export default MealsItem;
