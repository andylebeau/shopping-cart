import { useState } from 'react';

export const ProductInput = ({ shoppingCart, setShoppingCart, productId }) => {
  const [quantity, setQuantity] = useState(shoppingCart[productId] || 0);

  const handleIncrement = () => {
    setShoppingCart({ ...shoppingCart, [productId]: quantity + 1 });
    setQuantity(quantity + 1);
  };

  const handleDecrement = () => {
    if (shoppingCart[productId] <= 1) {
      setShoppingCart({ ...shoppingCart, [productId]: 0 });
      setQuantity(quantity - 1);
    } else {
      setShoppingCart({ ...shoppingCart, [productId]: quantity - 1 });
      setQuantity(quantity - 1);
      console.log(shoppingCart);
    }
  };

  return (
    <section className="product-input">
      {quantity ? (
        <div className="quantity-controls">
          <button onClick={handleDecrement}>&#60;</button>
          <p>{quantity}</p>
          <button onClick={handleIncrement}>&#62;</button>
        </div>
      ) : (
        <div className="add-to-cart" onClick={handleIncrement}>
          <button>Add to Cart</button>
        </div>
      )}
    </section>
  );
};
