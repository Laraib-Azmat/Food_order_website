import { useState } from "react";
import Header from "./Components/Layout/Header";
import Meals from "./Components/Meals/Meals";
import CartItem from "./Components/Cart/CartItem";
import CartProvider from "./Components/Context/CartProvider";


function App() {

  const [cartshow, setCartShow] = useState(false);

  const showCart = () => {
    setCartShow(true);
  }

  const hideCart = () => {
    setCartShow(false);
  }

  return (
    <CartProvider>
   { cartshow  &&   <CartItem onClose={hideCart} />}
      <Header onShow={showCart} />
      <main>
        <Meals />
        </main>
    </CartProvider>
  );
}

export default App;
