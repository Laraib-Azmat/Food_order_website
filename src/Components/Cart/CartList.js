import classes from './CartList.module.css'
const CartList = (props) => {
    return (
        <li className={classes['cart-item']}>
        <div>
          
          <div className={classes.heading}>
          <img src={props.image} alt='image' />
          <h2>{props.name}</h2>
          </div>
          <div className={classes.summary}>
            <span className={classes.price}>${props.price}</span>
            <span className={classes.amount}>x {props.amount}</span>
          </div>
        </div>

        <div className={classes.actions}>
          <button onClick={props.onRemove}>−</button>
          <button onClick={props.onAdd}>+</button>
        </div>
      </li>
    );
}
export default CartList;