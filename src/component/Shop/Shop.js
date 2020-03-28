import React, { useState, useEffect } from 'react';
import fakeData from '../../fakeData/';
import Product from '../Product/Product';
import { Link } from 'react-router-dom';
import './Shop.css';
import { addToDatabaseCart, getDatabaseCart } from '../../utilities/databaseManager';
import Cart from '../cart/Cart';

function Shop() {
    const firstValue = fakeData.slice(0, 10);
    const [products, setProducts] = useState(firstValue);
    const [cart, setCart] = useState([]);



    useEffect(() => {
        const saveCart = getDatabaseCart();
        const productKeys = Object.keys(saveCart);

        const cartProduct = productKeys.map(exatingKey => {
            const product = fakeData.find(pd => pd.key === exatingKey);
            product.quantity = saveCart[exatingKey];
            return product;
        });

        setCart(cartProduct);
        // console.log(cart)
    }, []);


    //Add product handale
    const addButtonHan = (product) => {
        const productAddKey = product.key;

        const sameProduct = cart.find(pd => pd.key === productAddKey);
        let count = 1;
        let newCart;
        if (sameProduct) {
            count = sameProduct.quantity + 1;
            sameProduct.quantity = sameProduct.quantity + 1;
            const others = cart.filter(pd => pd.key !== productAddKey);

            newCart = [...others, sameProduct];

        }
        else {
            product.quantity = 1;
            newCart = [...cart, product];
        }

        setCart(newCart);
        addToDatabaseCart(product.key, count);
    };


    return (
        <div className="twin-container">
            <div className="product-container">
                {
                    products.map(prod => <Product
                        key={prod.key}
                        addToCart={true}
                        addButtonHan={addButtonHan}
                        product={prod}>
                    </Product>)
                };
            </div>

            <div className="cart-container">
                <Cart cart={cart}>
                    <Link to="/Review">
                        <button className="productButton">Review your order</button>
                    </Link>
                </Cart>
            </div>

        </div>
    );
}

export default Shop;