import React, { useState } from 'react';
import Header from './components/Header/Header';
import ProductStore from './components/Home/Home';
import Cart from './components/Cart/Cart';
import CartProvider from './components/Cart/CartProvider';

function App() {
  const [openCart, setOpenCart] = useState(false);

  const openCartHanler = () => {
    setOpenCart(true);
  }

  const hideCartHandler = () => {
    setOpenCart(false);
  }
  return (
    <CartProvider>
      {openCart && <Cart openCart={openCart} onHideCart={hideCartHandler} />}
      <Header onOpenCart={openCartHanler} />
      <ProductStore />
    </CartProvider>
  );
}

export default App;

