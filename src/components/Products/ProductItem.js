import React from 'react';
import { Card, Col } from 'react-bootstrap';
import styleSheet from './ProductItem.module.css';
import AddToCart from '../Cart/AddToCart';
import { Link } from 'react-router-dom';

const ProductItem = (props) => {
  const price = `${Number(props.price.toFixed(2))}`

  return (

    <Col style={{ margin: '3px' }}>
      <Link to={`/product/${props.id}`} style={{ textDecoration: "none" }}>
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
            <Card.Text className={styleSheet.price}> ₹{price}</Card.Text>
            <AddToCart id={props.id} item={props} />
          </Card.Body>
        </Card>
      </Link>
    </Col >

  );
};

export default ProductItem;
