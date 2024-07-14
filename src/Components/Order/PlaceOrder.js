import React, { useContext } from 'react';
import orderStyle from './Order.module.css';
import CartContext from '../Context/CartContext';
import { Link } from 'react-router-dom';

const PlaceOrder = () => {

    const {totalAmount} = useContext(CartContext)

  return (
   <form className={orderStyle.Order}>

    <div className={orderStyle['order-left']}>
        <p className={orderStyle.title}>
            Delivery Information
        </p>
        <div className={orderStyle['order-fields']}>
            <input type='text' placeholder='First name' required/>
            <input type='text' placeholder='Last name' required/>
        </div>

            <input type='email' placeholder='Email' required />
            <input type='text' placeholder='Street' required />

            <div className={orderStyle['order-fields']}>
            <input type='text' placeholder='City' required/>
            <input type='text' placeholder='State' required/>
        </div>  
        <div className={orderStyle['order-fields']}>
            <input type='text' placeholder='Zip code' required/>
            <input type='text' placeholder='Country' required/>
        </div>

        <input type='text' placeholder='Phone'  required/>
    </div>

    <div className={orderStyle['order-right']}>
        <div className={orderStyle.orderTotal}>
                <h2>Total Amount</h2>
           <div>
                    <div className={orderStyle['order-details']}>
                        <p>SubTotal</p>
                        <p>${totalAmount}</p>
                    </div>
                  <hr/>
                  <div className={orderStyle['order-details']}>
                        <p>Delivery Fee</p>
                        <p>{totalAmount===0?"$0":"$2"}</p>
                    </div> 
                  <hr/>   
                  <div className={orderStyle['order-details']}>
                        <p>Total</p>
                        <p style={{color:'#8a2b06',fontWeight:600}}>${totalAmount===0?'0':totalAmount+2}</p>
                    </div>
            </div>     
           {totalAmount===0 ?
         <Link to='/'  >
            <button>
            Explore Item
            </button>
         </Link>:
         <button>Proceed For Payment</button>   
        }
        </div>
    </div>

   </form>
  )
}

export default PlaceOrder