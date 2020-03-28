import React from 'react';
import { useParams } from 'react-router-dom';
import fakeData from '../../fakeData';
import Product from '../Product/Product';

const PDetails = () => {

    const { productkey } = useParams();
    const product = fakeData.find(prod => prod.key === productkey)
    // console.log(product)
    return (
        <div>
            {/* product */}
            <h2>product details</h2>
            <Product addToCart={false} product={product}></Product>
        </div>
    );
};

export default PDetails;