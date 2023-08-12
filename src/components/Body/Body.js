import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import productsArr from '../Products/Products';
import './Body.css'

const albums = ['Album 1', 'Album 2', 'Album 3', 'Album 4'];

const Body = () => {
  return (
    <Container fluid className="body">
      <Row xs={1} md={2} className="g-3">
        {productsArr.map((product, index) => (
          <Col key={index} md={6} className="d-flex justify-content-center align-items-center">
            <Card className="product">
              <Card.Header>{albums[index]}</Card.Header>
              <Card.Img
                variant="top"
                src={product.imageUrl}
                alt={product.title}
                className="card-img-top"
              />
              <Card.Body>
                <Card.Title>{product.title}</Card.Title>
                <Card.Text>Price: ${product.price}</Card.Text>
                <Button>Add to cart</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Body;
