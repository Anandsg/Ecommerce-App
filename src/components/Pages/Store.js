import React from 'react'
import { Container, Row } from 'react-bootstrap';
import ProductItem from '../Products/ProductItem';
import { productsData } from '../Products/ProductsData';

const Store = (props) => {

    const ProductsList = productsData.map((product) => (
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
                    {ProductsList}
                </Row>
            </Container>
        </>
    )
}
export default Store;