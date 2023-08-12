import React from 'react';
import productsArr from './Products';
import './Body.css'; // Import your CSS file for styling

const Body = () => {
  return (
    <div className="body">
      {productsArr.map((product, index) => (
        <div className="product" key={index}>
          <img src={product.imageUrl} alt={product.title} />
          <h3>{product.title}</h3>
          <p>Price: ${product.price}</p>
        </div>
      ))}
    </div>
  );
};

export default Body;

