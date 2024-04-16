import { useContext } from 'react';
import CartContext from '../components/CartContext';

export const Checkout = () => {
  const { products, shoppingCart, setShoppingCart } = useContext(CartContext);
  return <div>Check out</div>;
};
