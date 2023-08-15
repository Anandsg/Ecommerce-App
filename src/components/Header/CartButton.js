import React, { useContext } from 'react'
import { Badge, Button } from 'react-bootstrap';
import stylesheet from './CartButton.module.css';
import CartContext from '../Cart/CartContext';
import { AiOutlineShoppingCart } from "react-icons/ai";


const CartButton = (props) => {
    const cartContext = useContext(CartContext);

    return (
        <>
            <Button className={stylesheet['cart-button']}
                onClick={props.onOpenCart}>
                <AiOutlineShoppingCart />
            </Button>
            <Badge pill bg="#ff3f6c" className={stylesheet["total-item"]}>
                {cartContext.totalQuantity}
            </Badge>
        </>
    );
};

export default CartButton;