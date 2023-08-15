import React, { useContext, useState } from 'react';
import { Button } from 'react-bootstrap';
import stylesheet from './AddToCart.module.css';
import CartContext from './CartContext';

const AddToCart = (props) => {
    const defaultQty = 1;
    const [inputValue, setInputValue] = useState(defaultQty); // State to manage the input value
    const cartContext = useContext(CartContext);

    const handleInputChange = (event) => {
        setInputValue(event.target.value); // Update the input value when it changes
    };

    const AddItemToCart = (event) => {
        event.preventDefault();
        cartContext.addProduct({
            ...props.item,
            quantity: inputValue, // Use the inputValue from state
            id: props.id,
        });
    };

    return (
        <>
            <Button
                type='submit'
                className={stylesheet.button}
                onClick={AddItemToCart}
                id={'amount_' + props.id}>
                Add To Cart
            </Button>
        </>
    );
}

export default AddToCart;
