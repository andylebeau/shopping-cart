import { useContext, useEffect, useState } from 'react';
import { ErrorPage } from './ErrorPage';
import { ProductInfo } from '../components/ProductInfo';
import { ProductInput } from '../components/ProductInput';
import './Shop.css';
import CartContext from '../components/CartContext';
import CartContextProvider from '../components/CartContextPorvider';

export const Shop = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [categories, setCategories] = useState([]);
  const [category, setCategory] = useState('all categories');
  let filterProducts;
  const { products, setProducts, shoppingCart, setShoppingCart } =
    useContext(CartContext);

  useEffect(() => {
    async function fetchProducts() {
      const url1 = 'https://fakestoreapi.com/products';
      const url2 = 'https://fakestoreapi.com/products/categories';

      try {
        const responses = await Promise.all([fetch(url1), fetch(url2)]);
        const data1 = await responses[0].json();
        const data2 = await responses[1].json();
        setProducts(data1);
        setCategories(['all categories', ...data2]);
      } catch (error) {
        setError(error.message);
      }
    }

    if (loading) {
      fetchProducts();
    }

    return () => {
      setLoading(true);
    };
  }, [loading, setProducts]);

  if (!loading) {
    return <section className="sub-header">Loading...</section>;
  }

  if (error) return <ErrorPage error={error} />;

  if (category !== 'all categories') {
    filterProducts = products.filter(
      (product) => product.category === category
    );
  } else {
    filterProducts = [...products];
  }

  return (
    <>
      <section className="sub-header">
        <h1>{category.toUpperCase()}</h1>
        <div className="category-container">
          <p>Filter by category:</p>
          <select
            id="catergories-dropdown"
            onChange={(e) => setCategory(e.target.value)}
          >
            {categories.map((option, index) => {
              return (
                <option key={index} value={option}>
                  {option}
                </option>
              );
            })}
          </select>
        </div>
      </section>
      <section className="shop-page">
        <div className="products-container">
          {filterProducts.map((product) => (
            <article className="product-card" key={product.id}>
              <CartContextProvider>
                <ProductInfo product={product} />
                <ProductInput
                  shoppingCart={shoppingCart}
                  setShoppingCart={setShoppingCart}
                  productId={product.id}
                />
              </CartContextProvider>
            </article>
          ))}
        </div>
      </section>
    </>
  );
};
