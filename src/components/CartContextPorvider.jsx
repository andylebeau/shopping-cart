import { useState } from 'react';
import CartContext from './CartContext';

const CartContextProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [shoppingCart, setShoppingCart] = useState({});

  const cartCount = Object.values(shoppingCart).reduce((a, c) => a + c, 0);

  const getCartTotal = () => {
    let cartTotal = 0;
    for (const product in shoppingCart) {
      if (shoppingCart[product] > 0) {
        let itemPrice = products.find((item) => item.id === Number(product));
        cartTotal += shoppingCart[product] * itemPrice.price;
      }
    }
    return cartTotal;
  };

  return (
    <CartContext.Provider
      value={{
        products,
        setProducts,
        shoppingCart,
        setShoppingCart,
        cartCount,
        getCartTotal,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
