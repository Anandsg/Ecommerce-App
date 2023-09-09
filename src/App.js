import React, { useState, Suspense } from 'react';
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
import { useContext } from 'react';
import AuthContext from './components/Store/AuthContext';

function App() {
  const authcontext = useContext(AuthContext);
  const [openCart, setOpenCart] = useState(false);

  const openCartHandler = () => {
    setOpenCart(true);
  }

  const hideCartHandler = () => {
    setOpenCart(false);
  }

  return (
    <CartProvider>
      <Header onOpenCart={openCartHandler} />
      <Suspense fallback={<div>Loading...</div>}>
        {openCart && <Cart openCart={openCart} onHideCart={hideCartHandler} />}

        <Routes>
          <>
            {authcontext.isLoggedIn && (
              <>
                <Route path="/home" element={<Home />} />
                <Route path="/store" element={<Store />} />
                <Route path="/about" element={<About />} />
                <Route path='/contact' element={<Contact />} />
                <Route path='/product/:productId' element={<Product />} />
              </>
            )}
            {!authcontext.isLoggedIn && <Route path="/auth"
              element={<Authentication />} />}
            {!authcontext.isLoggedIn && (
              <>
                <Route path="/home" element={<Authentication />} />
                <Route path="/store" element={<Authentication />} />
                <Route path="/about" element={<Authentication />} />
                <Route path="/contact" element={<Authentication />} />
                <Route path="/auth" element={<Authentication />} />

              </>
            )}
          </>
        </Routes>
      </Suspense>
    </CartProvider>
  );
}

export default App;
