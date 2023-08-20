import React, { useState } from 'react';
import Header from './components/Header/Header';
import Store from './components/Pages/Store';
import Home from './components/Pages/Home';
import Cart from './components/Cart/Cart';
import CartProvider from './components/Cart/CartProvider';
import About from './components/Pages/About';
import { Routes, Route } from 'react-router-dom';
import Contact from './components/Pages/Contact';
import Product from './components/Products/Product';
import Authentication from './components/Auth/Authentication';

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
          <Route path="/" element={<Home />} />
          <Route path="/store" element={<Store />} />
          <Route path="/about" element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/product/:productId' element={<Product />} />
          <Route path="/auth" element={<Authentication />} />
        </Routes>
      </div>
    </CartProvider>
  );
}

export default App;
