import { Route, Routes } from 'react-router-dom';
import { Header } from './components/Header';
import { Home, Shop, Checkout, ErrorPage } from './pages';
import CartContextProvider from './components/CartContextPorvider';

function App() {
  return (
    <div className="App">
      <CartContextProvider>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/Checkout" element={<Checkout />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </CartContextProvider>
    </div>
  );
}

export default App;
