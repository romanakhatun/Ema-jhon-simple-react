import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Product.css';
import { Link } from 'react-router-dom';

function Product(props) {
    const { img, name, seller, price, stock, key } = props.product;
    // console.log(props);

    return (
        <div className="forCellProduct">
            {/* Product's */}
            <div>
                <img src={img} alt="" />
            </div>
            <div>
                <h4 className="productName"><Link to={"/Product/" + key}>{name}</Link></h4>
                <br />

                <p><small>by: {seller}</small></p>

                <p>${price}</p>

                <p><small>only {stock} left in stock - order soon</small></p>

                {/* add to cart Button */}
                {props.addToCart && <button
                    className="productButton"
                    onClick={() => props.addButtonHan(props.product)}>
                    <FontAwesomeIcon icon={faShoppingCart} />add to cart
                </button>}

            </div>
        </div>
    );
}

export default Product;
