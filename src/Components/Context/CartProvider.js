import React, { useReducer } from "react";
import CartContext from "./CartContext";
import { food_list } from "../../assets/assets";

const defaultState = {
  items: [],
  totalAmount: 0
};

const cartReducer = (state, action) => {
  if (action.type === "ADD") {
    let updatedItems;
    const updatedAmount = state.totalAmount + action.item.price * action.item.amount;

    const addItemIndex = state.items.findIndex(
      (item) => item.id === action.item.id
    );

    const addExistingItem = state.items[addItemIndex];

    if (addExistingItem) {
      const updatedItem = {
        ...addExistingItem,
        amount: addExistingItem.amount + action.item.amount,
      };
      updatedItems = [...state.items];
      updatedItems[addItemIndex] = updatedItem;
    } else {
      updatedItems = state.items.concat(action.item);
    }
   
    return {
      items: updatedItems,
      totalAmount: updatedAmount,
    };
  
  }

  if (action.type === "REMOVE") {
    let updatedItems;
    const exixtingItemIndex = state.items.findIndex(
      (item) => item.id === action.id
    );
    const existingItem = state.items[exixtingItemIndex];

    const updatedAmount = state.totalAmount - existingItem.price;

    if (existingItem.amount === 1) {
      updatedItems = state.items.filter((item) => item.id !== action.id);
    } else {
      const updatedItem = 
        { ...existingItem, amount: existingItem.amount - 1 };
      updatedItems = [...state.items];
      updatedItems[exixtingItemIndex] = updatedItem;
    }

    return {
      items: updatedItems,
      totalAmount: updatedAmount,
    };
  }

  return defaultState;
};

const  CartProvider=(props)=> {
  const [cartState, dispatchfn] = useReducer(cartReducer, defaultState);

  const addItemHandler = (item) => {
    dispatchfn({ type: "ADD", item: item });
  };
  const removeItemHandler = (id) => {
    dispatchfn({ type: "REMOVE", id: id });
  };

  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemHandler,
    removeItem: removeItemHandler,
    food_list
  };
console.log(cartState.items)
  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
}

export default CartProvider;
