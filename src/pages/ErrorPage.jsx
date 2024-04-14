import { Link } from 'react-router-dom';
import './ErrorPage.css';

export const ErrorPage = ({ error }) => {
  return (
    <section className="error-page">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p className="error-message">{error ? error : 'Page not found'}</p>
      <br />
      <p>return to</p>
      <Link to="/">
        <p>&quot;The Land of Make Believe&quot;!</p>
      </Link>
    </section>
  );
};
