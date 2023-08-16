import React from 'react'
import { Container, Row } from 'react-bootstrap';
import ProductItem from '../Products/ProductItem';

const Store = (props) => {
    const prodcuctArr = [
        {
            id: "p1",
            title: "Colors",
            price: 100,
            imageUrl:
                "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
        },

        {
            id: "p2",
            title: "Black and white Colors",
            price: 50,
            imageUrl:
                "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
        },

        {
            id: "p3",
            title: "Yellow and Black Colors",
            price: 70,
            imageUrl:
                "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
        },

        {
            id: "p4",
            title: "Blue Color",
            price: 100,
            imageUrl:
                "https://prasadyash2411.github.io/ecom-website/img/Album%204.png",
        },
    ];
    const prodcuctList = prodcuctArr.map((product) => (
        <ProductItem
            key={product.id}
            id={product.id}
            title={product.title}
            price={product.price}
            imageUrl={product.imageUrl}
        />
    ))

    return (
        <>
            <Container fluid>
                <Row>
                    {prodcuctList}
                </Row>
            </Container>
        </>
    )
}
export default Store;