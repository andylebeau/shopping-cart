import './Home.css';
import { Link } from 'react-router-dom';

export const Home = () => {
  return (
    <section className="home-page">
      <div className="home-page-content">
        <p>Welcome to </p>
        <h1>Mirage Mart!</h1>
        <h2>
          We bring your wildest dreams to life,
          <br />
          one imaginary purchase at a time.
        </h2>
        <Link to="/shop">
          <button type="button" className="shop-now">
            Enter the Mirage
          </button>
        </Link>
      </div>
    </section>
  );
};
