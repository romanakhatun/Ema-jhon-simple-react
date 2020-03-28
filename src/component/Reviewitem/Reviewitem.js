import React from 'react';

const Reviewitem = (props) => {
    const { name, quantity, key, price, img } = props.product
    return (
        <div>
            <div className="forCellProduct">
                <div>
                    <img src={img} alt="" />
                </div>
                <div>
                    <h2>{name}</h2><br />

                    <p>${price}</p>

                    <p>Quantity:{quantity}</p><br />
                    <button
                        className="productButton"
                        onClick={() => props.removeBtnHan(key)}>Remove
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Reviewitem;