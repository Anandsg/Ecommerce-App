import React, { useContext } from "react";
import { Button, Modal } from "react-bootstrap";
import CartItem from "./CartItem";
import stylesheet from './Cart.module.css';
import CartContext from "./CartContext";

const Cart = (props) => {
    const cartcontext = useContext(CartContext);
    const totalAmount = cartcontext.products.reduce(
        (prevValue, currItem) => prevValue + currItem.price * currItem.amount,
        0
    );
    const cartItemList = cartcontext.products.map((product) => (
        <CartItem
            key={product.id}
            title={product.title}
            price={product.price}
            imageUrl={product.imageUrl}
            quantity={product.quantity}
            onRemove={() => cartcontext.removeProduct(product.id)}
        />
    ));
    return (
        <Modal fullscreen='xxl-down'
            show={props.openCart}
            onHide={props.onHideCart}
            size="lg"
            aria-labelledby="example-custom-modal-styling-title">

            <Modal.Header closeButton>
                <Modal.Title>Cart</Modal.Title>
            </Modal.Header>
            <Modal.Body>{cartItemList}</Modal.Body>
            <Modal.Footer>
                Total {`₹ ${totalAmount}`}
                <Button className={stylesheet["place-order-btn"]}>Order Now</Button>
            </Modal.Footer>
        </Modal>
    )
}

export default Cart;

