// part 1 reduce method
// import React from 'react';
// import { Link } from 'react-router-dom';
// import './Cart.css'
// const Cart = (props) => {
//     const cart = props.cart;
//     const total = cart.reduce((total, prod) => total + prod.price, 0);
//     const shipping = cart.reduce((shipping) => shipping + 12.3, 0);
//     // const tax = cart.reduce((tax) => tax + 12, 0);
//     // let total 
//     return (
//         <div>
//             {/* Cart control */}
//             <div className="orderItems">
//                 <h2>Order Summary</h2>
//                 <p>Items ordered:{cart.length}</p>
//             </div>
//             <p>Shipping & Handling:{shipping}</p>
//             <p>Total before tax:{}</p>
//             <p>Estimated Tax:</p>
//             <h4 style={{ color: "#b12704" }}>Order Total:{total + shipping}</h4>
//             <Link to="/Review">
//                 <button className="productButton">Review your order</button>
//             </Link>
//         </div>
//     );
// };
// export default Cart;


// part 2 for loop method
import React from 'react';
import './Cart.css'

const Cart = (props) => {
    const cart = props.cart;
    //total
    let total = 0;
    for (let i = 0; i < cart.length; i++) {
        const product = cart[i];
        total = total + product.price * product.quantity;
    };

    //shipping
    let shipping = 0;
    if (total > 35) {
        shipping = 0;
    }
    else if (total > 15) {
        shipping = 4.99;
    }
    else if (total > 0) {
        shipping = 12.99;
    }

    //tax
    const tax = (total / 10).toFixed(2);
    const grandTotal = (total + shipping + Number(tax)).toFixed(2);
    const formatNumber = num => {
        const precision = num.toFixed(2);
        return Number(precision)
    }
    return (
        <div>

            {/* Cart control */}
            <div className="orderItems">
                <h2>Order Summary</h2>
                <p>Items ordered:{cart.length}</p>
            </div>

            <p>Shipping & Handling:{shipping}</p>

            <p>Total before tax:{tax}</p>

            <p>Product cost:{formatNumber(total)}</p>

            <h4 style={{ color: "#b12704" }}>Order Total:{grandTotal}</h4>
            {
                props.children
            }

        </div>
    );
};

export default Cart;