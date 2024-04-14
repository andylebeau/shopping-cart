import { useState } from 'react';
import CartContext from './CartContext';

const CartContextProvider = ({ children }) => {
  const [shoppingCart, setShoppingCart] = useState({});

  return (
    <CartContext.Provider value={{ shoppingCart, setShoppingCart }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
