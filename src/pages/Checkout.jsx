import { useContext } from 'react';
import { Link } from 'react-router-dom';
import CartContext from '../components/CartContext';
import { CartItem } from '../components/CartItem';
import { formatCurrency } from '../utilities/formatCurrency';
import './Checkout.css';

export const Checkout = () => {
  const { products, shoppingCart, cartCount, getCartTotal } =
    useContext(CartContext);
  const cartTotal = formatCurrency(getCartTotal());

  const handlePurchase = () => {
    alert(
      'Mirage hopes your imaginary shopping spree was theraputic! Come back anytime!'
    );
    location.href = '/';
  };
  return (
    <>
      <div className="sub-header">
        <h1>YOUR CART</h1>
      </div>
      <section className="checkout-page">
        {cartCount ? (
          <>
            <div className="cart-list">
              {products.map((product, index) => {
                if (shoppingCart[product.id] > 0) {
                  return (
                    <CartItem
                      key={index}
                      product={product}
                      quantity={shoppingCart[product.id]}
                    />
                  );
                }
              })}
            </div>
            <div className="cart-total">TOTAL: {cartTotal}</div>
            <div className="action-btns-container">
              <div className="action-btns">
                <button className="action-btn" onClick={handlePurchase}>
                  Checkout Now!
                </button>
                <Link to="/shop">
                  <button type="button" className="action-btn">
                    Back to Shopping
                  </button>
                </Link>
              </div>
            </div>
          </>
        ) : (
          <div className="empty-cart">
            <p>Wow! So Empty!</p>
            <p>Live a litte...it&apos;s all FREE!</p>
            <Link to="/shop">
              <button type="button" className="shop-now">
                Take me Shopping!
              </button>
            </Link>
          </div>
        )}
      </section>
    </>
  );
};
