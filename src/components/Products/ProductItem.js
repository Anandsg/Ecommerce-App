import React, { useContext } from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import styleSheet from './ProductItem.module.css';
import CartContext from '../Cart/CartContext';

const ProductItem = (props) => {
  const price = `${props.price.toFixed(2)}`;
  const defaultQty = 1;
  const cartContext = useContext(CartContext);

  const addItemToCart = () => {
    cartContext.addProduct({
      ...props,
      quantity: defaultQty,
      id: Math.random().toString(36),
    });
  };

  return (
    <Col style={{ margin: '3px' }}>
      <Card style={{ width: '18rem' }}>
        <div className={styleSheet['image-container']}>
          <Card.Img
            alt={props.title}
            variant='top'
            src={props.imageUrl}
            className={styleSheet.image}
          />
        </div>
        <Card.Body>
          <Card.Title>{props.title}</Card.Title>
          <Card.Text className={styleSheet.price}> {price}</Card.Text>
          <Button className={styleSheet.button} onClick={addItemToCart}>
            Add to Cart
          </Button>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default ProductItem;
