import React from 'react';
import './Cart.css'
import { Card, Col, Container, Row } from 'react-bootstrap';

const cartElements = [
  {
    title: 'Colors',
    price: 100,
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',
    quantity: 2,
  },
  {
    title: 'Black and white Colors',
    price: 50,
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',
    quantity: 3,
  },
  {
    title: 'Yellow and Black Colors',
    price: 70,
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',
    quantity: 1,
  },
];

const Cart = () => {
    return (
      <div className="cart-container mx-auto">
        <h2>Your Cart</h2>
        <Container>
          <Row xs={1} md={2} lg={3} className="g-4">
            {cartElements.map((product, index) => (
              <Col key={index}>
                <Card className="cart-item">
                  <Card.Img variant="top" src={product.imageUrl} alt={product.title} />
                  <Card.Body>
                    <Card.Title className="cart-title">{product.title}</Card.Title>
                    <Card.Text className="cart-price">Price: ${product.price}</Card.Text>
                    <Card.Text className="cart-quantity">Quantity: {product.quantity}</Card.Text>
                    <Card.Text className="cart-total">Total: ${product.price * product.quantity}</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </div>
    );
  };

export default Cart;
