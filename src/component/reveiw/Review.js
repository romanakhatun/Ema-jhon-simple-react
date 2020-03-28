import React, { useState, useEffect } from 'react';
import { getDatabaseCart, removeFromDatabaseCart, processOrder } from '../../utilities/databaseManager';
import fakeData from '../../fakeData';
import Reviewitem from '../Reviewitem/Reviewitem';
import Cart from '../cart/Cart';
import happyPic from '../../images/giphy.gif'
import { Link } from 'react-router-dom';
import { useAuth } from '../Login/useAuth';

const Review = () => {
    const auth = useAuth();
    const [cart, setCart] = useState([]);
    const [orderPlaced, setOrderPalce] = useState(false);

    // placeOrder Button Handle
    const placeOrderHandle = () => {
        setCart([]);
        setOrderPalce(true);
        processOrder();
    };
    let thankyou;
    if (orderPlaced) {
        thankyou = <img src={happyPic} alt="" />
    }

    useEffect(() => {
        const saveCart = getDatabaseCart();
        const productKeys = Object.keys(saveCart);

        const cartProduct = productKeys.map(key => {
            const product = fakeData.find(pd => pd.key === key);
            product.quantity = saveCart[key];
            return product;
        });

        setCart(cartProduct);
        // console.log(cart)
    }, []);


    //Remove product button handle
    const removeBtnHan = (productKey) => {
        const newCart = cart.filter(pd => pd.key !== productKey);
        setCart(newCart);
        removeFromDatabaseCart(productKey);
    }

    return (
        <div className="twin-container">
            <div className="product-container">
                {
                    cart.map(pd => <Reviewitem
                        product={pd}
                        removeBtnHan={removeBtnHan}
                        key={pd.key}
                    ></Reviewitem>)
                }
                {
                    thankyou
                }
                {
                    !cart.length && <h2>You have no added cart<a href="/shop">Keep shoping</a></h2>
                }
            </div>
            <div className="cart-container">
                <Cart cart={cart}>
                    {/* procced checkout btn */}
                    <Link to="shipment">{
                        auth.user ?
                            <button style={{ background: "pink" }} className="productButton">Login shipment</button> :
                            <button style={{ background: "pink" }} className="productButton">Login to procced</button>
                    }
                    </Link>
                    <br /><br />

                    {/* review btn */}
                    <button className="productButton" onClick={placeOrderHandle}>Place order</button>
                </Cart>
            </div>
        </div>
    );
};

export default Review;