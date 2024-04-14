import PropTypes from 'prop-types';
import { formatCurrency } from '../utilities/formatCurrency';

export const ProductInfo = ({ product }) => {
  const productPrice = formatCurrency(product.price);

  return (
    <>
      <section className="product-info">
        <div>{product.title}</div>
        <img src={product.image} alt={product.title}></img>
        <div className="price">{productPrice}</div>
      </section>
    </>
  );
};

ProductInfo.propTypes = {
  product: PropTypes.object,
};
