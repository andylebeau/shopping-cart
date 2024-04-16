import { useState } from 'react';
import CartContext from './CartContext';

const CartContextProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [shoppingCart, setShoppingCart] = useState({});

  return (
    <CartContext.Provider
      value={{
        products,
        setProducts,
        shoppingCart,
        setShoppingCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
