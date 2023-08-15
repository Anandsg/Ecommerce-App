import React, { useContext } from 'react';
import { Button, Card, Col, Form, Row } from 'react-bootstrap';
import stylesheet from './CartItem.module.css';
import CartContext from './CartContext';

const CartItem = (props) => {
    const cartContext = useContext(CartContext);
    const price = `₹ ${props.price.toFixed(2)}`;
    return (
        <>
            <Card style={{ width: '100%' }}>
                <Row >
                    <Col sm={4}>
                        <Card.Img
                            variant='top'
                            style={{ height: '100%', width: '200px' }}
                            src={props.imageUrl}
                        />
                    </Col>
                    <Col sm={8}>
                        <Card.Body className='d-flex justify-content-between align-items-start'>
                            <Card.Title>{props.title}</Card.Title>
                            <Card.Text>{price}</Card.Text>
                            <Form>
                                <Form.Control
                                    type='number'
                                    min='1'
                                    max='10'
                                    id={`quantity-${props.id}`}
                                    value={props.quantity}
                                >
                                </Form.Control>
                            </Form>
                            <Button className={stylesheet["remove-item-btn"]}>Remove</Button>
                        </Card.Body>
                    </Col>
                </Row>
            </Card>
        </>
    )
}

export default CartItem;