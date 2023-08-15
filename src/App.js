import React, { useState } from 'react';
import Header from './components/Header/Header';
import ProductStore from './components/Home/Home';
import Cart from './components/Cart/Cart';
import CartProvider from './components/Cart/CartProvider';
import About from './components/Pages/About';
import { Routes, Route } from 'react-router-dom';

function App() {
  const [openCart, setOpenCart] = useState(false);

  const openCartHandler = () => {
    setOpenCart(true);
  }

  const hideCartHandler = () => {
    setOpenCart(false);
  }

  return (
    <CartProvider>
      <div>
        <Header onOpenCart={openCartHandler} />
        {openCart && <Cart openCart={openCart} onHideCart={hideCartHandler} />}
        
        <Routes>
          <Route path="/" element={<ProductStore />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </CartProvider>
  );
}

export default App;
