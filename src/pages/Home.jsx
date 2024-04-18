import './Home.css';
import { Link } from 'react-router-dom';

export const Home = () => {
  return (
    <section className="home-page">
      <div className="home-page-content">
        <p>Welcome to </p>
        <h1>Mirage Mart!</h1>
        {/* <p>
          At Mirage Mart, we believe in the power of make-believe, where every
          click sparks joy and every purchase is a delightful dream come true.
          Step into our illusional marketplace and unlock the possibilities of
          shopping without limits or payments. Fantasies become tangible and
          desires are fulfilled with just a few taps of a finger.
        </p>
        <br /> */}
        <h2>
          Join us at Mirage Mart,
          <br />
          where we bring your wildest dreams to life,
          <br />
          one imaginary purchase at a time.
        </h2>
        <Link to="/shop">
          <button type="button" className="shop-now">
            Take me Shopping!
          </button>
        </Link>
      </div>
    </section>
  );
};
