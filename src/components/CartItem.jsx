import { useContext } from 'react';
import { formatCurrency } from '../utilities/formatCurrency';
import { ProductInput } from './ProductInput';
import CartContext from './CartContext';

export const CartItem = ({ product, quantity }) => {
  const { shoppingCart, setShoppingCart } = useContext(CartContext);
  const subtotal = formatCurrency(product.price * quantity);
  return (
    <>
      <div className="cart-line">
        <div className="product-image-container">
          <img className="product-image" src={product.image}></img>
        </div>
        <div className="product-title">{product.title}</div>

        <ProductInput
          shoppingCart={shoppingCart}
          setShoppingCart={setShoppingCart}
          productId={product.id}
        />

        <div className="product-quantity-price">
          {quantity} x {formatCurrency(product.price)}
        </div>

        <div className="line-subtotal">{subtotal}</div>
      </div>
      <hr />
    </>
  );
};
