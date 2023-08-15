import React, { useState } from "react";
import CartContext from "./CartContext";

const CartProvider = (props) => {
  const [cart, setCart] = useState([]);
  // adding product in cart
  const addProductToCardHandler = (product, index) => {
    let cartProducts = [...cart];
    let isProductPresent = false;
    // Create a new object with the updated quantity
    const updatedProduct = { ...product };

    cartProducts.forEach((item) => {
      if (product.id === item.id) {
        isProductPresent = true;
        // Increment the quantity of the existing product
        // item.quantity += Number(product.quantity) + Number(product.quantity);
        item.quantity += Number(product.quantity);
      }
    });
    if (isProductPresent) {
      setCart([...cartProducts]);
    } else {
      setCart((prevProducts) => {
        return [...prevProducts, product];
      });
    }
  };
  // calculating the total amount
  const totalAmount = cart.reduce((total, item) => {
    return total + item.price * item.quantity;
  }, 0)

  // calculating the total quantity
  const totalQuantity = cart.reduce((total, item) => {
    return total + item.quantity;
  }, 0);

  const removeProductToCardHandler = () => { };
  const cartContext = {
    products: cart,
    addProduct: addProductToCardHandler,
    removeProduct: removeProductToCardHandler,
    totalAmount: totalAmount,
    totalQuantity: totalQuantity,
  };
  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;